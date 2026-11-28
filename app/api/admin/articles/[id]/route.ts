
import { NextResponse } from "next/server";
import { pool } from "@/lib/auth";
import { requireNewsroomAdmin } from "@/lib/require-newsroom-admin";
import type { PoolClient } from "pg";

type ArticleStatus = "draft" | "scheduled" | "published" | "archived";
type Locale = "en" | "ti";

type TranslationInput = {
  title?: string;
  subtitle?: string;
  slug?: string;
  body?: unknown;
  seoTitle?: string;
  seoDescription?: string;
};

type ArticleInput = {
  category?: string;
  status?: ArticleStatus;
  featured?: boolean;
  scheduledAt?: string | null;
  translations?: Partial<Record<Locale, TranslationInput>>;
};

const validStatuses: ArticleStatus[] = [
  "draft",
  "scheduled",
  "published",
  "archived",
];

const validCategories = [
  "latest-news",
  "analysis-commentary",
  "press-releases",
  "speeches-statements",
  "videos-interviews",
  "publications-reports",
];

const isUuid = (value: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    value
  );

function isRichTextDocument(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;

  const document = value as { type?: unknown; content?: unknown };

  return (
    document.type === "doc" &&
    Array.isArray(document.content)
  );
}

function hasArticleContent(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;

  const node = value as {
    type?: string;
    text?: string;
    attrs?: Record<string, unknown>;
    content?: unknown[];
  };

  if (typeof node.text === "string" && node.text.trim()) {
    return true;
  }

  if (
    node.type === "image" &&
    typeof node.attrs?.src === "string" &&
    node.attrs.src.trim()
  ) {
    return true;
  }

  if (
    node.type === "youtube" &&
    (typeof node.attrs?.src === "string" ||
      typeof node.attrs?.videoId === "string")
  ) {
    return true;
  }

  return Array.isArray(node.content) &&
    node.content.some(hasArticleContent);
}

function validatePublicationTranslations(
  translations: ArticleInput["translations"]
): string | null {
  const available = Object.entries(translations ?? {}).filter(
    ([, translation]) =>
      translation &&
      typeof translation.title === "string" &&
      translation.title.trim() &&
      typeof translation.slug === "string" &&
      translation.slug.trim() &&
      isRichTextDocument(translation.body) &&
      hasArticleContent(translation.body)
  );

  if (available.length === 0) {
    return "Add a title, slug, and article content before publishing.";
  }

  for (const [, translation] of available) {
    if ((translation?.title?.length ?? 0) > 500) {
      return "Article titles cannot exceed 500 characters.";
    }

    if ((translation?.slug?.length ?? 0) > 250) {
      return "Article slugs cannot exceed 250 characters.";
    }

    if (
      JSON.stringify(translation?.body).length > 1_000_000
    ) {
      return "Article content is too large.";
    }
  }

  return null;
}

function isFutureDate(value: string | null | undefined) {
  if (!value) return false;

  const date = new Date(value);

  return !Number.isNaN(date.getTime()) &&
    date.getTime() > Date.now();
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireNewsroomAdmin();

  const { id } = await params;

  if (!isUuid(id)) {
    return NextResponse.json(
      { error: "Invalid article ID." },
      { status: 400 }
    );
  }

  const result = await pool.query(
    `
      SELECT
        id,
        category_id AS category,
        status,
        is_featured AS featured,
        published_at,
        scheduled_at,
        created_at,
        updated_at
      FROM newsroom_articles
      WHERE id = $1
      LIMIT 1
    `,
    [id]
  );

  if (result.rowCount === 0) {
    return NextResponse.json(
      { error: "Article not found." },
      { status: 404 }
    );
  }

  const translationsResult = await pool.query(
    `
      SELECT
        locale,
        title,
        subtitle,
        slug,
        body,
        seo_title AS "seoTitle",
        seo_description AS "seoDescription"
      FROM newsroom_translations
      WHERE article_id = $1
      ORDER BY locale
    `,
    [id]
  );

  const translations = Object.fromEntries(
  translationsResult.rows.map((translation) => [
    translation.locale,
    {
      title: translation.title,
      subtitle: translation.subtitle ?? "",
      slug: translation.slug,
      body: translation.body,
      seoTitle: translation.seoTitle ?? "",
      seoDescription: translation.seoDescription ?? "",
    },
  ])
);

return NextResponse.json({
  article: result.rows[0],
  translations,
});
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { newsroomUser } = await requireNewsroomAdmin();

  const { id } = await params;

  if (!isUuid(id)) {
    return NextResponse.json(
      { error: "Invalid article ID." },
      { status: 400 }
    );
  }

  let input: ArticleInput;

  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const {
    category,
    status,
    featured,
    scheduledAt,
    translations,
  } = input;

  if (!category || !validCategories.includes(category)) {
    return NextResponse.json(
      { error: "Select a valid category." },
      { status: 400 }
    );
  }

  if (!status || !validStatuses.includes(status)) {
    return NextResponse.json(
      { error: "Select a valid article status." },
      { status: 400 }
    );
  }

  if (typeof featured !== "boolean") {
    return NextResponse.json(
      { error: "Invalid featured setting." },
      { status: 400 }
    );
  }

  if (status === "scheduled" && !isFutureDate(scheduledAt)) {
    return NextResponse.json(
      { error: "Select a future publication date and time." },
      { status: 400 }
    );
  }

  if (
    status === "published" &&
    validatePublicationTranslations(translations)
  ) {
    return NextResponse.json(
      {
        error: validatePublicationTranslations(translations),
      },
      { status: 400 }
    );
  }

  for (const translation of Object.values(translations ?? {})) {
    if (!translation) continue;

    if ((translation.title?.length ?? 0) > 500) {
      return NextResponse.json(
        { error: "Article titles cannot exceed 500 characters." },
        { status: 400 }
      );
    }

    if ((translation.slug?.length ?? 0) > 250) {
      return NextResponse.json(
        { error: "Article slugs cannot exceed 250 characters." },
        { status: 400 }
      );
    }

    if (
      translation.body &&
      JSON.stringify(translation.body).length > 1_000_000
    ) {
      return NextResponse.json(
        { error: "Article content is too large." },
        { status: 400 }
      );
    }
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const existing = await client.query(
      `
        SELECT id, status
        FROM newsroom_articles
        WHERE id = $1
        FOR UPDATE
      `,
      [id]
    );

    if (existing.rowCount === 0) {
      await client.query("ROLLBACK");

      return NextResponse.json(
        { error: "Article not found." },
        { status: 404 }
      );
    }

    const currentStatus = existing.rows[0].status;

    if (
      status === "published" &&
      currentStatus !== "published"
    ) {
      await client.query("ROLLBACK");

      return NextResponse.json(
        {
          error:
            "Use the Publish Article action to publish this article.",
        },
        { status: 400 }
      );
    }

    const categoryResult = await client.query(
      `
        SELECT id
        FROM newsroom_categories
        WHERE id = $1
          AND is_active = TRUE
        LIMIT 1
      `,
      [category]
    );

    if (categoryResult.rowCount === 0) {
      await client.query("ROLLBACK");

      return NextResponse.json(
        { error: "The selected category is unavailable." },
        { status: 400 }
      );
    }

    await client.query(
      `
        UPDATE newsroom_articles
        SET
          category_id = $2,
          status = $3,
          is_featured = $4,
          scheduled_at = $5,
          updated_by = $6,
          updated_at = NOW(),
          published_at = CASE
            WHEN $3 = 'published' THEN published_at
            ELSE NULL
          END,
          archived_at = CASE
            WHEN $3 = 'archived' THEN COALESCE(archived_at, NOW())
            ELSE NULL
          END
        WHERE id = $1
      `,
      [
        id,
        category,
        status,
        featured,
        status === "scheduled" ? scheduledAt : null,
        newsroomUser.id,
      ]
    );

    for (const locale of ["en", "ti"] as Locale[]) {
      const translation = translations?.[locale];
      if (!translation) continue;

      const existingTranslation = await client.query(
        `
          SELECT id, title, subtitle, slug, body,
                 seo_title, seo_description
          FROM newsroom_translations
          WHERE article_id = $1 AND locale = $2
          LIMIT 1
        `,
        [id, locale]
      );

      const values = [
        translation.title?.trim() ?? "",
        translation.subtitle?.trim() ?? "",
        translation.slug?.trim() ?? "",
        JSON.stringify(translation.body ?? {
          type: "doc",
          content: [],
        }),
        translation.seoTitle?.trim() ?? "",
        translation.seoDescription?.trim() ?? "",
      ];

      if (existingTranslation.rows.length > 0) {
        const previous = existingTranslation.rows[0];

        const revisionResult = await client.query(
          `
            SELECT COALESCE(MAX(revision_number), 0) + 1 AS next_revision
            FROM newsroom_revisions
            WHERE translation_id = $1
          `,
          [previous.id]
        );

        await client.query(
          `
            INSERT INTO newsroom_revisions (
              translation_id,
              revision_number,
              snapshot,
              edited_by
            )
            VALUES ($1, $2, $3::jsonb, $4)
          `,
          [
            previous.id,
            revisionResult.rows[0].next_revision,
            JSON.stringify(previous),
            newsroomUser.id,
          ]
        );

        await client.query(
          `
            UPDATE newsroom_translations
            SET
              title = $2,
              subtitle = $3,
              slug = $4,
              body = $5::jsonb,
              seo_title = $6,
              seo_description = $7,
              updated_at = NOW()
            WHERE id = $1
          `,
          [previous.id, ...values]
        );
      } else {
        await client.query(
          `
            INSERT INTO newsroom_translations (
              article_id,
              locale,
              title,
              subtitle,
              slug,
              body,
              seo_title,
              seo_description
            )
            VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8)
          `,
          [id, locale, ...values]
        );
      }
    }

    await client.query("COMMIT");

    return NextResponse.json({
      success: true,
      message: "Article saved successfully.",
    });
  } catch (error: unknown) {
    await client.query("ROLLBACK");

    const databaseError = error as { code?: string };

    if (databaseError.code === "23505") {
      return NextResponse.json(
        { error: "This article slug is already in use." },
        { status: 409 }
      );
    }

    console.error("Newsroom article update failed:", error);

    return NextResponse.json(
      { error: "Unable to save the article." },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { newsroomUser } = await requireNewsroomAdmin();

  const { id } = await params;

  if (!isUuid(id)) {
    return NextResponse.json(
      { error: "Invalid article ID." },
      { status: 400 }
    );
  }

  let input: { action?: string };

  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const actions = [
    "publish",
    "unpublish",
    "archive",
    "restore",
  ];

  if (!input.action || !actions.includes(input.action)) {
    return NextResponse.json(
      { error: "Invalid publication action." },
      { status: 400 }
    );
  }

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const result = await client.query(
      `
        SELECT id, status
        FROM newsroom_articles
        WHERE id = $1
        FOR UPDATE
      `,
      [id]
    );

    if (result.rowCount === 0) {
      await client.query("ROLLBACK");

      return NextResponse.json(
        { error: "Article not found." },
        { status: 404 }
      );
    }

    const currentStatus = result.rows[0].status;
    const action = input.action;

    let nextStatus: ArticleStatus;

    if (action === "publish") {
      if (currentStatus === "archived") {
        await client.query("ROLLBACK");

        return NextResponse.json(
          { error: "Restore the article before publishing it." },
          { status: 400 }
        );
      }

      const translationsResult = await client.query(
        `
          SELECT title, slug, body
          FROM newsroom_translations
          WHERE article_id = $1
        `,
        [id]
      );

      const validTranslation = translationsResult.rows.some(
        (translation) =>
          typeof translation.title === "string" &&
          translation.title.trim() &&
          typeof translation.slug === "string" &&
          translation.slug.trim() &&
          isRichTextDocument(translation.body) &&
          hasArticleContent(translation.body)
      );

      if (!validTranslation) {
        await client.query("ROLLBACK");

        return NextResponse.json(
          {
            error:
              "Add a title, slug, and article content before publishing.",
          },
          { status: 400 }
        );
      }

      nextStatus = "published";
    } else if (action === "unpublish") {
      if (currentStatus !== "published") {
        await client.query("ROLLBACK");

        return NextResponse.json(
          { error: "This article is not currently published." },
          { status: 400 }
        );
      }

      nextStatus = "draft";
    } else if (action === "archive") {
      nextStatus = "archived";
    } else {
      if (currentStatus !== "archived") {
        await client.query("ROLLBACK");

        return NextResponse.json(
          { error: "Only archived articles can be restored." },
          { status: 400 }
        );
      }

      nextStatus = "draft";
    }

    await client.query(
      `
        UPDATE newsroom_articles
        SET
          status = $2,
          published_at = CASE
            WHEN $2 = 'published' THEN COALESCE(published_at, NOW())
            ELSE NULL
          END,
          archived_at = CASE
            WHEN $2 = 'archived' THEN COALESCE(archived_at, NOW())
            ELSE NULL
          END,
          scheduled_at = CASE
            WHEN $2 = 'published' THEN NULL
            ELSE scheduled_at
          END,
          updated_by = $3,
          updated_at = NOW()
        WHERE id = $1
      `,
      [id, nextStatus, newsroomUser.id]
    );

    await client.query("COMMIT");

    return NextResponse.json({
      success: true,
      status: nextStatus,
      message: `Article ${action === "publish" ? "published" : action === "unpublish" ? "unpublished" : action === "archive" ? "archived" : "restored"} successfully.`,
    });
  } catch (error) {
    await client.query("ROLLBACK");

    console.error("Newsroom publication action failed:", error);

    return NextResponse.json(
      { error: "Unable to update publication status." },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await requireNewsroomAdmin();
  const { id } = await params;

  if (!isUuid(id)) {
    return NextResponse.json(
      { error: "Invalid article ID." },
      { status: 400 }
    );
  }

  const result = await pool.query(
    `
      DELETE FROM newsroom_articles
      WHERE id = $1
      RETURNING id
    `,
    [id]
  );

  if (result.rowCount === 0) {
    return NextResponse.json(
      { error: "Article not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
