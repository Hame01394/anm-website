
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { JSONContent } from "@tiptap/react";
import ArticleRichTextEditor from "@/app/components/admin/ArticleRichTextEditor";
import ArticleRichTextPreview from "@/app/components/admin/ArticleRichTextPreview";
import ArticlePublicationActions from "@/app/components/admin/ArticlePublicationActions";

type Locale = "en" | "ti";
type ArticleStatus = "draft" | "scheduled" | "published" | "archived";

type Translation = {
  title: string;
  subtitle: string;
  slug: string;
  body: JSONContent;
  seoTitle: string;
  seoDescription: string;
};

type ArticleData = {
  id: string;
  category: string;
  status: ArticleStatus;
  featured: boolean;
  published_at: string | null;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
};

const categories = [
  { id: "latest-news", label: "Latest News" },
  { id: "analysis-commentary", label: "Analysis & Commentary" },
  { id: "press-releases", label: "Press Releases" },
  { id: "speeches-statements", label: "Speeches & Statements" },
  { id: "videos-interviews", label: "Videos & Interviews" },
  { id: "publications-reports", label: "Publications & Reports" },
];

const emptyDocument = (): JSONContent => ({
  type: "doc",
  content: [{ type: "paragraph" }],
});

const emptyTranslation = (): Translation => ({
  title: "",
  subtitle: "",
  slug: "",
  body: emptyDocument(),
  seoTitle: "",
  seoDescription: "",
});

function toLocalDateTime(value: string | null) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function formatDate(value: string) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function EditArticlePage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const articleId = params.id;

  const [article, setArticle] = useState<ArticleData | null>(null);

  const [translations, setTranslations] = useState<
    Record<Locale, Translation>
  >({
    en: emptyTranslation(),
    ti: emptyTranslation(),
  });

  const [activeLocale, setActiveLocale] = useState<Locale>("en");
  const [previewMode, setPreviewMode] = useState(false);
  const [scheduledAt, setScheduledAt] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!articleId) return;

    let cancelled = false;

    async function loadArticle() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/admin/articles/${articleId}`,
          { cache: "no-store" }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load this article.");
        }

        if (cancelled) return;

        const loadedArticle = result.article as ArticleData;
        const loadedTranslations = result.translations || {};

        setArticle(loadedArticle);
        setScheduledAt(toLocalDateTime(loadedArticle.scheduled_at));

        setTranslations({
          en: {
            ...emptyTranslation(),
            ...(loadedTranslations.en || {}),
            body: loadedTranslations.en?.body || emptyDocument(),
          },
          ti: {
            ...emptyTranslation(),
            ...(loadedTranslations.ti || {}),
            body: loadedTranslations.ti?.body || emptyDocument(),
          },
        });
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load this article."
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadArticle();

    return () => {
      cancelled = true;
    };
  }, [articleId]);

  function updateTranslation(
    locale: Locale,
    field: keyof Translation,
    value: string
  ) {
    setTranslations((current) => ({
      ...current,
      [locale]: {
        ...current[locale],
        [field]: value,
      },
    }));
  }

  function updateBody(locale: Locale, value: JSONContent) {
    setTranslations((current) => ({
      ...current,
      [locale]: {
        ...current[locale],
        body: value,
      },
    }));
  }

  async function saveArticle() {
    if (!article) return;

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/admin/articles/${articleId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: article.category,
          status: article.status,
          featured: article.featured,
          scheduledAt:
            article.status === "scheduled" && scheduledAt
              ? new Date(scheduledAt).toISOString()
              : null,
          translations,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to save the article.");
      }

      setMessage("Article saved successfully.");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to save the article."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f5ed]">
        <p className="text-sm font-medium text-[#142b45]">
          Loading article...
        </p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f8f5ed] px-6 py-16">
        <div className="mx-auto max-w-3xl border border-red-200 bg-white p-8">
          <h1 className="text-xl font-bold text-[#142b45]">
            Unable to open article
          </h1>
          <p className="mt-3 text-sm text-red-700">
            {error || "The requested article could not be found."}
          </p>
          <button
            onClick={() => router.push("/admin/dashboard/articles")}
            className="mt-6 bg-[#142b45] px-5 py-3 text-sm font-semibold text-white"
          >
            Back to Articles
          </button>
        </div>
      </div>
    );
  }

  const current = translations[activeLocale];

  const categoryLabel =
    categories.find((category) => category.id === article.category)?.label ||
    article.category;

  return (
    <div className="min-h-screen bg-[#f8f5ed]">
      <header className="border-b border-[#142b45]/15 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a18445]">
              ANM Newsroom
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[#142b45]">
              {previewMode ? "Article Preview" : "Edit Article"}
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {previewMode ? (
              <button
                type="button"
                onClick={() => setPreviewMode(false)}
                className="border border-[#142b45]/25 px-5 py-2.5 text-sm font-semibold text-[#142b45] hover:bg-[#142b45]/5"
              >
                Back to Editor
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => router.push("/admin/dashboard/articles")}
                  className="border border-[#142b45]/25 px-4 py-2.5 text-sm font-semibold text-[#142b45] hover:bg-[#142b45]/5"
                >
                  Back to Articles
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setError("");
                    setMessage("");
                    setPreviewMode(true);
                  }}
                  className="border border-[#c9a45c] px-5 py-2.5 text-sm font-bold text-[#142b45] hover:bg-[#c9a45c]/10"
                >
                  Preview
                </button>
              </>
            )}

            <button
              type="button"
              onClick={saveArticle}
              disabled={saving}
              className="bg-[#142b45] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#203d60] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </header>

      {previewMode ? (
        <main className="min-h-screen bg-white">
          <div className="border-b border-[#142b45]/10 bg-[#f8f5ed] px-6 py-4">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a18445]">
                  Preview Mode
                </p>
                <p className="mt-1 text-sm text-[#142b45]/70">
                  This preview reflects your current edits. It does not publish
                  the article.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveLocale("en")}
                  className={`px-4 py-2 text-sm font-bold ${
                    activeLocale === "en"
                      ? "bg-[#142b45] text-white"
                      : "border border-[#142b45]/20 bg-white text-[#142b45]"
                  }`}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => setActiveLocale("ti")}
                  className={`px-4 py-2 text-sm font-bold ${
                    activeLocale === "ti"
                      ? "bg-[#142b45] text-white"
                      : "border border-[#142b45]/20 bg-white text-[#142b45]"
                  }`}
                >
                  ትግርኛ
                </button>
              </div>
            </div>
          </div>

          <article className="mx-auto max-w-5xl px-6 py-12 md:py-16">
            <div className="mb-8 border-b border-[#c9a45c] pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a18445]">
                Aga'azian National Movement
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="bg-[#142b45] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  {categoryLabel}
                </span>

                <span className="border border-[#c9a45c] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#8b6c31]">
                  {article.status} preview
                </span>

                {article.featured && (
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8b6c31]">
                    Featured
                  </span>
                )}
              </div>
            </div>

            <header className="mb-10">
              <h1
                className={`max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#142b45] md:text-5xl ${
                  activeLocale === "ti" ? "leading-[1.5]" : ""
                }`}
              >
                {current.title || "Article title"}
              </h1>

              {current.subtitle && (
                <p
                  className={`mt-6 max-w-4xl text-lg leading-8 text-[#526174] md:text-xl ${
                    activeLocale === "ti" ? "leading-[1.9]" : ""
                  }`}
                >
                  {current.subtitle}
                </p>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-[#142b45]/10 py-4 text-xs text-[#687586]">
                <span>ANM Newsroom</span>
                <span>{formatDate(article.updated_at)}</span>
                <span className="uppercase tracking-wider">
                  {activeLocale === "en" ? "English" : "ትግርኛ"}
                </span>
              </div>
            </header>

            <div
              className={
                activeLocale === "ti"
                  ? "[&_ .anm-article-preview-content]:leading-[2.1]"
                  : ""
              }
            >
              <ArticleRichTextPreview value={current.body} />
            </div>

            <div className="mt-16 border-t-2 border-[#c9a45c] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a18445]">
                Aga'azian National Movement
              </p>
              <p className="mt-2 text-sm text-[#526174]">
                News, statements and publications.
              </p>
            </div>
          </article>

          <div className="border-t border-[#142b45]/10 bg-[#f8f5ed] px-6 py-6">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#526174]">
                Preview only — this article has not been published by this
                preview.
              </p>

              <button
                type="button"
                onClick={() => setPreviewMode(false)}
                className="bg-[#142b45] px-6 py-3 text-sm font-bold text-white hover:bg-[#203d60]"
              >
                Return to Editor
              </button>
            </div>
          </div>
        </main>
      ) : (
        <main className="mx-auto max-w-7xl px-6 py-8">
          {error && (
            <div className="mb-6 border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-6 border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800">
              {message}
            </div>
          )}

          <section className="mb-8 border border-[#142b45]/15 bg-white p-6">
            <div className="mb-5">
              <h2 className="text-lg font-bold text-[#142b45]">
                Article Settings
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage the article category, publication status and visibility.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  Category
                </span>
                <select
                  value={article.category}
                  onChange={(event) =>
                    setArticle({
                      ...article,
                      category: event.target.value,
                    })
                  }
                  className="w-full border border-gray-300 bg-white px-3 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  Publication Status
                </span>
                <select
                  value={article.status}
                  onChange={(event) =>
                    setArticle({
                      ...article,
                      status: event.target.value as ArticleStatus,
                    })
                  }
                  className="w-full border border-gray-300 bg-white px-3 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
                >
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </label>

              <label className="flex cursor-pointer items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  checked={article.featured}
                  onChange={(event) =>
                    setArticle({
                      ...article,
                      featured: event.target.checked,
                    })
                  }
                  className="h-4 w-4 accent-[#142b45]"
                />
                <span className="text-sm font-semibold text-[#142b45]">
                  Featured Article
                </span>
              </label>
            </div>

            {article.status === "scheduled" && (
              <div className="mt-6 max-w-md">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                    Scheduled Publication Date and Time
                  </span>
                  <input
                    type="datetime-local"
                    value={scheduledAt}
                    onChange={(event) => setScheduledAt(event.target.value)}
                    className="w-full border border-gray-300 bg-white px-3 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
                  />
                </label>
              </div>
            )}
          </section>

          <section className="border border-[#142b45]/15 bg-white">
            <div className="border-b border-[#142b45]/15 px-6 py-5">
              <h2 className="text-lg font-bold text-[#142b45]">
                Article Content
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Edit the article in English or Tigrinya.
              </p>

              <div className="mt-5 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveLocale("en")}
                  className={`px-5 py-2.5 text-sm font-bold ${
                    activeLocale === "en"
                      ? "bg-[#142b45] text-white"
                      : "border border-[#142b45]/20 text-[#142b45] hover:bg-[#142b45]/5"
                  }`}
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => setActiveLocale("ti")}
                  className={`px-5 py-2.5 text-sm font-bold ${
                    activeLocale === "ti"
                      ? "bg-[#142b45] text-white"
                      : "border border-[#142b45]/20 text-[#142b45] hover:bg-[#142b45]/5"
                  }`}
                >
                  ትግርኛ
                </button>
              </div>
            </div>

            <div className="space-y-6 p-6">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  Article Title
                </span>
                <input
                  type="text"
                  value={current.title}
                  onChange={(event) =>
                    updateTranslation(activeLocale, "title", event.target.value)
                  }
                  placeholder="Enter article title"
                  className="w-full border border-gray-300 px-4 py-3 text-base font-semibold text-[#142b45] outline-none focus:border-[#c9a45c]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  Subtitle / Summary
                </span>
                <textarea
                  rows={3}
                  value={current.subtitle}
                  onChange={(event) =>
                    updateTranslation(
                      activeLocale,
                      "subtitle",
                      event.target.value
                    )
                  }
                  placeholder="Enter a short summary"
                  className="w-full resize-y border border-gray-300 px-4 py-3 text-sm leading-7 text-[#142b45] outline-none focus:border-[#c9a45c]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  URL Slug
                </span>
                <input
                  type="text"
                  value={current.slug}
                  onChange={(event) =>
                    updateTranslation(activeLocale, "slug", event.target.value)
                  }
                  placeholder="article-url-slug"
                  className="w-full border border-gray-300 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
                />
                <span className="mt-2 block text-xs text-gray-500">
                  Use lowercase letters, numbers and hyphens.
                </span>
              </label>

              <div>
                <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#142b45]">
                  Article Body
                </span>

                <ArticleRichTextEditor
                  value={current.body}
                  onChange={(value) => updateBody(activeLocale, value)}
                  placeholder="Write your article here..."
                />
              </div>

              <div className="border-t border-[#142b45]/15 pt-6">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-[#142b45]">
                  Search Engine Optimization
                </h3>

                <div className="space-y-5">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-[#142b45]">
                      SEO Title
                    </span>
                    <input
                      type="text"
                      value={current.seoTitle}
                      onChange={(event) =>
                        updateTranslation(
                          activeLocale,
                          "seoTitle",
                          event.target.value
                        )
                      }
                      placeholder="Search engine title"
                      className="w-full border border-gray-300 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-[#142b45]">
                      SEO Description
                    </span>
                    <textarea
                      rows={3}
                      value={current.seoDescription}
                      onChange={(event) =>
                        updateTranslation(
                          activeLocale,
                          "seoDescription",
                          event.target.value
                        )
                      }
                      placeholder="Brief description for search engines"
                      className="w-full resize-y border border-gray-300 px-4 py-3 text-sm leading-7 text-[#142b45] outline-none focus:border-[#c9a45c]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </section>

{/* Article Publication Controls */}
<div className="mt-6">
  <ArticlePublicationActions
    articleId={article.id}
    status={article.status}
    onUpdated={(newStatus) => {
      setArticle((current) =>
        current ? { ...current, status: newStatus } : current
      );
      setMessage(`Article status updated to ${newStatus}.`);
      setError("");
    }}
  />
</div>

<div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              Article ID: {article.id}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPreviewMode(true)}
                className="border border-[#c9a45c] px-6 py-3 text-sm font-bold text-[#142b45] hover:bg-[#c9a45c]/10"
              >
                Preview Article
              </button>

              <button
                type="button"
                onClick={saveArticle}
                disabled={saving}
                className="bg-[#142b45] px-8 py-3 text-sm font-bold text-white hover:bg-[#203d60] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
