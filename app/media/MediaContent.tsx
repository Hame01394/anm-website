
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const categories = [
  { id: "latest-news", title: "Latest News" },
  { id: "analysis-commentary", title: "Analysis & Commentary" },
  { id: "press-releases", title: "Press Releases" },
  { id: "speeches-statements", title: "Speeches & Statements" },
  { id: "videos-interviews", title: "Videos & Interviews" },
  { id: "publications-reports", title: "Publications & Reports" },
];

type Article = {
  id: string;
  category: string;
  locale: string;
  title: string;
  subtitle: string | null;
  slug: string;
  publishedAt: string | null;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

function formatDate(value: string | null) {
  if (!value) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export default function MediaContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const activeCategory =
    categories.find((item) => item.id === categoryParam) ??
    categories.find(
      (item) =>
        item.title.toLowerCase() ===
        decodeURIComponent(categoryParam || "").toLowerCase()
    );

  const [articles, setArticles] = useState<Article[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadArticles = useCallback(async (page = 1) => {
    setLoading(true);
    setError("");

    try {
      const query = new URLSearchParams({
        page: String(page),
        limit: "12",
      });

      if (activeCategory) {
        query.set("category", activeCategory.id);
      }

      const response = await fetch(`/api/media?${query.toString()}`, {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to load articles.");
      }

      setArticles(data.articles ?? []);
      setPagination(data.pagination);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load articles."
      );
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  useEffect(() => {
    loadArticles(1);
  }, [loadArticles]);

  return (
    <main className="min-h-screen bg-[#f8f5ed]">
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#c9a45c]">
            Aga'azian National Movement
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Media & Newsroom
          </h1>

          <div className="mt-7 h-1 w-20 bg-[#c9a45c]" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            News, analysis, official statements, speeches,
            interviews and publications from the Aga'azian
            National Movement.
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-[#c9a45c]/20" />
        <div className="pointer-events-none absolute -bottom-16 -right-12 h-64 w-64 rounded-full border border-[#c9a45c]/20" />
      </section>

      <section className="border-b border-[#d9d4c8] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            <Link
              href="/media"
              className={`text-sm font-bold transition ${
                !activeCategory
                  ? "text-[#142b45]"
                  : "text-gray-500 hover:text-[#142b45]"
              }`}
            >
              All Media
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/media?category=${category.id}`}
                className={`text-sm font-semibold transition ${
                  activeCategory?.id === category.id
                    ? "text-[#a98438]"
                    : "text-gray-500 hover:text-[#142b45]"
                }`}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a98438]">
              {activeCategory ? "Media Category" : "Latest Updates"}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#142b45] md:text-4xl">
              {activeCategory?.title || "Latest from ANM"}
            </h2>
          </div>

          <p className="text-sm text-gray-500">
            {pagination.total}{" "}
            {pagination.total === 1 ? "article" : "articles"}
          </p>
        </div>

        {loading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse border border-[#e2ddd2] bg-white p-7"
              >
                <div className="h-3 w-28 bg-[#eee9df]" />
                <div className="mt-6 h-7 w-full bg-[#eee9df]" />
                <div className="mt-3 h-7 w-3/4 bg-[#eee9df]" />
                <div className="mt-8 h-3 w-24 bg-[#eee9df]" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="border border-red-200 bg-white p-8 text-red-700">
            {error}
            <button
              type="button"
              onClick={() => loadArticles(1)}
              className="ml-3 font-bold underline"
            >
              Try again
            </button>
          </div>
        ) : articles.length === 0 ? (
          <div className="border border-[#e2ddd2] bg-white px-6 py-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a98438]">
              ANM Newsroom
            </p>

            <h3 className="mt-4 text-2xl font-bold text-[#142b45]">
              No published articles yet
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-gray-500">
              Published news and updates will appear here.
              Please check back soon.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => {
                const articleCategory =
                  categories.find(
                    (category) => category.id === article.category
                  )?.title || "ANM Media";

                return (
                  <article
                    key={article.id}
                    className="group flex flex-col border border-[#e2ddd2] bg-white transition hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg"
                  >
                    <div className="h-1 w-full bg-[#c9a45c]" />

                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#a98438]">
                          {articleCategory}
                        </span>

                        <span className="text-xs text-gray-400">
                          {formatDate(article.publishedAt)}
                        </span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold leading-snug text-[#142b45] transition group-hover:text-[#9b772f]">
                        {article.title}
                      </h3>

                      {article.subtitle && (
                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                          {article.subtitle}
                        </p>
                      )}

                      <div className="mt-auto pt-8">
                        <Link
                          href={`/media/${encodeURIComponent(article.slug)}`}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#142b45] transition group-hover:text-[#a98438]"
                        >
                          Read Article
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {pagination.totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-5">
                <button
                  type="button"
                  disabled={pagination.page <= 1}
                  onClick={() => loadArticles(pagination.page - 1)}
                  className="border border-[#142b45] px-5 py-3 text-sm font-bold text-[#142b45] transition hover:bg-[#142b45] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Previous
                </button>

                <span className="text-sm text-gray-600">
                  Page {pagination.page} of {pagination.totalPages}
                </span>

                <button
                  type="button"
                  disabled={pagination.page >= pagination.totalPages}
                  onClick={() => loadArticles(pagination.page + 1)}
                  className="border border-[#142b45] px-5 py-3 text-sm font-bold text-[#142b45] transition hover:bg-[#142b45] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <section className="bg-[#142b45] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
            Stay Informed
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Follow the ANM Newsroom
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Follow our official communications, policy
            developments and public activities.
          </p>
        </div>
      </section>
    </main>
  );
}
