
import { NextResponse } from "next/server";
import { connection } from "next/server";
import { pool } from "@/lib/auth";

const validCategories = [
  "latest-news",
  "analysis-commentary",
  "press-releases",
  "speeches-statements",
  "videos-interviews",
  "publications-reports",
];

export async function GET(request: Request) {
  await connection();

  try {
    const { searchParams } = new URL(request.url);

    const requestedCategory = searchParams.get("category");
    const category =
      requestedCategory && validCategories.includes(requestedCategory)
        ? requestedCategory
        : null;

    const page = Math.max(
      1,
      Number.parseInt(searchParams.get("page") || "1", 10) || 1
    );

    const limit = Math.min(
      24,
      Math.max(
        1,
        Number.parseInt(searchParams.get("limit") || "12", 10) || 12
      )
    );

    const offset = (page - 1) * limit;

    const countResult = await pool.query(
      `
        SELECT COUNT(*)::int AS total
        FROM newsroom_articles a
        WHERE a.status = 'published'
          AND ($1::text IS NULL OR a.category_id = $1)
      `,
      [category]
    );

    const result = await pool.query(
      `
        SELECT
          a.id,
          a.category_id AS category,
          a.published_at AS "publishedAt",
          t.locale,
          t.title,
          t.subtitle,
          t.slug
        FROM newsroom_articles a
        JOIN LATERAL (
          SELECT
            locale,
            title,
            subtitle,
            slug
          FROM newsroom_translations
          WHERE article_id = a.id
          ORDER BY
            CASE WHEN locale = 'en' THEN 0 ELSE 1 END
          LIMIT 1
        ) t ON TRUE
        WHERE a.status = 'published'
          AND ($1::text IS NULL OR a.category_id = $1)
        ORDER BY
          a.published_at DESC NULLS LAST,
          a.updated_at DESC
        LIMIT $2 OFFSET $3
      `,
      [category, limit, offset]
    );

    const total = countResult.rows[0]?.total ?? 0;

    return NextResponse.json({
      articles: result.rows,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Public Media feed error:", error);

    return NextResponse.json(
      { error: "Unable to load Media articles." },
      { status: 500 }
    );
  }
}
