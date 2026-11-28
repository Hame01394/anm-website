import { NextResponse } from "next/server";
import { pool } from "@/lib/auth";
import { requireNewsroomAdmin } from "@/lib/require-newsroom-admin";
import type { PoolClient } from "pg";


type TranslationInput = {
  title?: string;
  subtitle?: string;
  slug?: string;
  body?: unknown;
  seoTitle?: string;
  seoDescription?: string;
};

type ArticleInput = {
  category: string;
  status: "draft" | "published" | "archived";
  featured: boolean;
  translations: {
    en?: TranslationInput;
    ti?: TranslationInput;
  };
};

const validStatuses = ["draft", "published", "archived"];

function isRichTextDocument(value: unknown): value is {
  type: "doc";
  content: unknown[];
} {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const document = value as Record<string, unknown>;

  return (
    document.type === "doc" &&
    Array.isArray(document.content)
  );
}

function hasArticleContent(node: unknown): boolean {
  if (!node || typeof node !== "object" || Array.isArray(node)) {
    return false;
  }

  const item = node as Record<string, unknown>;

  if (
    item.type === "image" ||
    item.type === "youtube"
  ) {
    return true;
  }

  if (
    item.type === "text" &&
    typeof item.text === "string" &&
    item.text.trim().length > 0
  ) {
    return true;
  }

  if (Array.isArray(item.content)) {
    return item.content.some(hasArticleContent);
  }

  return false;
}

export async function POST(request: Request) {
  let client: PoolClient | undefined;
  let transactionStarted = false;

  try {
    const { newsroomUser } = await requireNewsroomAdmin();

    const input = (await request.json()) as ArticleInput;

    if (
      !input.category ||
      !validStatuses.includes(input.status) ||
      typeof input.featured !== "boolean"
    ) {
      return NextResponse.json(
        { error: "Invalid article settings." },
        { status: 400 }
      );
    }

    const translations = (["en", "ti"] as const)
      .map((locale) => ({
        locale,
        content: input.translations?.[locale],
      }))
      .filter((item) => {
        const content = item.content;

        return Boolean(
          content?.title?.trim() &&
          content?.slug?.trim() &&
          isRichTextDocument(content?.body) &&
          hasArticleContent(content.body)
        );
      });

    if (translations.length === 0) {
      return NextResponse.json(
        {
          error:
            "Add a title, URL slug and article content in at least one language.",
        },
        { status: 400 }
      );
    }

    for (const item of translations) {
      const content = item.content!;

      if (
        content.title!.length > 500 ||
        content.slug!.length > 250 ||
        (content.subtitle?.length ?? 0) > 1000 ||
        (content.seoTitle?.length ?? 0) > 500 ||
        (content.seoDescription?.length ?? 0) > 2000
      ) {
        return NextResponse.json(
          { error: "One or more article fields exceed the allowed length." },
          { status: 400 }
        );
      }

      const bodySize = JSON.stringify(content.body).length;

      if (bodySize > 1_000_000) {
        return NextResponse.json(
          { error: "The article content is too large." },
          { status: 400 }
        );
      }
    }

    client = await pool.connect();

    await client.query("BEGIN");
    transactionStarted = true;

    const categoryResult = await client.query(
      `SELECT id
       FROM public.newsroom_categories
       WHERE id = $1
         AND is_active = TRUE
       LIMIT 1`,
      [input.category]
    );

    if (categoryResult.rows.length === 0) {
      await client.query("ROLLBACK");
      transactionStarted = false;

      return NextResponse.json(
        { error: "The selected category is not available." },
        { status: 400 }
      );
    }

    const articleResult = await client.query(
      `INSERT INTO public.newsroom_articles (
        category_id,
        status,
        is_featured,
        author_id,
        created_by,
        updated_by,
        published_at,
        archived_at
      )
      VALUES (
        $1,
        $2,
        $3,
        $4,
        $4,
        $4,
        CASE WHEN $2 = 'published' THEN NOW() ELSE NULL END,
        CASE WHEN $2 = 'archived' THEN NOW() ELSE NULL END
      )
      RETURNING id`,
      [
        input.category,
        input.status,
        input.featured,
        newsroomUser.id,
      ]
    );

    const articleId = articleResult.rows[0].id;

    for (const item of translations) {
      const content = item.content!;

      await client.query(
        `INSERT INTO public.newsroom_translations (
          article_id,
          locale,
          slug,
          title,
          subtitle,
          body,
          seo_title,
          seo_description
        )
        VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8)`,
        [
          articleId,
          item.locale,
          content.slug!.trim(),
          content.title!.trim(),
          content.subtitle?.trim() || null,
          JSON.stringify(content.body),
          content.seoTitle?.trim() || null,
          content.seoDescription?.trim() || null,
        ]
      );
    }

    await client.query("COMMIT");
    transactionStarted = false;

    return NextResponse.json(
      {
        success: true,
        articleId,
        message: "Article saved successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    if (client && transactionStarted) {
      await client.query("ROLLBACK").catch(() => {});
    }

    const databaseError = error as { code?: string };

    if (databaseError.code === "23505") {
      return NextResponse.json(
        {
          error:
            "This URL slug is already in use for that language. Please choose another slug.",
        },
        { status: 409 }
      );
    }

    console.error("Article creation failed:", error);

    return NextResponse.json(
      {
        error:
          "Unable to save the article. Please check the fields and try again.",
      },
      { status: 500 }
    );
  } finally {
    client?.release();
  }
}
