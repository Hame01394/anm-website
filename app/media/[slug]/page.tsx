
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pool } from "@/lib/auth";
import ArticleRichTextPreview from "@/app/components/admin/ArticleRichTextPreview";

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

type Article = {
  id: string;
  category: string;
  locale: string;
  title: string;
  subtitle: string | null;
  slug: string;
  body: Record<string, unknown>;
  seoTitle: string | null;
  seoDescription: string | null;
  publishedAt: string | null;
};

const categoryLabels: Record<string, string> = {
  "latest-news": "Latest News",
  "analysis-commentary": "Analysis & Commentary",
  "press-releases": "Press Releases",
  "speeches-statements": "Speeches & Statements",
  "videos-interviews": "Videos & Interviews",
  "publications-reports": "Publications & Reports",
};

async function getArticle(slug: string): Promise<Article | null> {
  const result = await pool.query(
    `
      SELECT
        a.id,
        a.category_id AS category,
        a.published_at AS "publishedAt",
        t.locale,
        t.title,
        t.subtitle,
        t.slug,
        t.body,
        t.seo_title AS "seoTitle",
        t.seo_description AS "seoDescription"
      FROM newsroom_articles a
      JOIN newsroom_translations t
        ON t.article_id = a.id
      WHERE a.status = 'published'
        AND t.slug = $1
      LIMIT 1
    `,
    [slug]
  );

  return result.rows[0] ?? null;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: "Article Not Found | ANM Media" };
  }

  return {
    title: article.seoTitle || article.title,
    description:
      article.seoDescription ||
      article.subtitle ||
      article.title,
    alternates: {
      canonical: `/media/${encodeURIComponent(article.slug)}`,
    },
  };
}

function formatDate(value: string | null) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export default async function MediaArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  const category =
    categoryLabels[article.category] || "ANM Media";

  return (
    <main className="min-h-screen bg-[#f8f5ed]">
      <header className="bg-[#142b45] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/media"
            className="text-sm font-semibold text-[#d5b46b] transition hover:text-white"
          >
            ← Back to Media
          </Link>

          <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
            {category}
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {article.subtitle}
            </p>
          )}

          <div className="mt-8 border-t border-white/20 pt-5 text-xs text-white/60">
            Published {formatDate(article.publishedAt)}
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <div className="border-b border-[#d9d4c8] pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a98438]">
            Aga'azian National Movement
          </p>
        </div>

        <div className="anm-public-article mt-10">
          <ArticleRichTextPreview
  value={article.body}
/>
        </div>

        <div className="mt-16 border-t border-[#d9d4c8] pt-8">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#142b45] transition hover:text-[#a98438]"
          >
            ← Return to ANM Media
          </Link>
        </div>
      </article>
    </main>
  );
}
