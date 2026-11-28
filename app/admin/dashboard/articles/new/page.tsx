
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { JSONContent } from "@tiptap/react";
import ArticleRichTextEditor from "@/app/components/admin/ArticleRichTextEditor";

type Locale = "en" | "ti";
type Status = "draft" | "published" | "archived";

type Translation = {
  title: string;
  subtitle: string;
  slug: string;
  body: JSONContent;
  seoTitle: string;
  seoDescription: string;
};

type TranslationField = Exclude<keyof Translation, "body">;

const createEmptyDocument = (): JSONContent => ({
  type: "doc",
  content: [{ type: "paragraph" }],
});

const createEmptyTranslation = (): Translation => ({
  title: "",
  subtitle: "",
  slug: "",
  body: createEmptyDocument(),
  seoTitle: "",
  seoDescription: "",
});

const categories = [
  { id: "latest-news", en: "Latest News", ti: "ዜና" },
  { id: "analysis-commentary", en: "Analysis & Commentary", ti: "ትንተናን ርእይቶን" },
  { id: "press-releases", en: "Press Releases", ti: "መግለጺታት ፕረስ" },
  { id: "speeches-statements", en: "Speeches & Statements", ti: "መደረታትን መግለጺታትን" },
  { id: "videos-interviews", en: "Videos & Interviews", ti: "ቪድዮታትን ቃለ-መሕትታትን" },
  { id: "publications-reports", en: "Publications & Reports", ti: "ሕትመታትን ጸብጻባትን" },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getDocumentText(node: JSONContent): string {
  const ownText = node.text ?? "";
  const childText = (node.content ?? [])
    .map((child) => getDocumentText(child))
    .join(" ");

  return `${ownText} ${childText}`.trim();
}

function hasArticleContent(node: JSONContent): boolean {
  if (node.type === "image" || node.type === "youtube") return true;
  if (node.type === "text" && node.text?.trim()) return true;

  return (node.content ?? []).some(hasArticleContent);
}

export default function NewArticlePage() {
  const router = useRouter();

  const [locale, setLocale] = useState<Locale>("en");
  const [category, setCategory] = useState("latest-news");
  const [status, setStatus] = useState<Status>("draft");
  const [featured, setFeatured] = useState(false);

  const [translations, setTranslations] = useState<
    Record<Locale, Translation>
  >({
    en: createEmptyTranslation(),
    ti: createEmptyTranslation(),
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const current = translations[locale];

  function updateField(field: TranslationField, value: string) {
    setTranslations((previous) => ({
      ...previous,
      [locale]: {
        ...previous[locale],
        [field]: value,
        ...(field === "title" && !previous[locale].slug
          ? { slug: slugify(value) }
          : {}),
      },
    }));
  }

  function updateBody(body: JSONContent) {
    setTranslations((previous) => ({
      ...previous,
      [locale]: {
        ...previous[locale],
        body,
      },
    }));
  }

  function isTranslationComplete(language: Locale) {
    const item = translations[language];

    return Boolean(
      item.title.trim() &&
        item.slug.trim() &&
        hasArticleContent(item.body)
    );
  }

  async function saveArticle() {
    setError("");
    setSuccess("");

    const hasEnglish = isTranslationComplete("en");
    const hasTigrinya = isTranslationComplete("ti");

    if (!hasEnglish && !hasTigrinya) {
      setError(
        "Add a title, URL slug and article content in at least one language."
      );
      return;
    }

    if (!category) {
      setError("Please select an article category.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/admin/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          status,
          featured,
          translations,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to save the article.");
      }

      setSuccess("Article saved successfully.");

      router.push("/admin/dashboard/articles");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while saving the article."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f5ed]">
      <header className="border-b border-[#142b45]/10 bg-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
              ANM Newsroom
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[#142b45]">
              Create Article
            </h1>
          </div>

          <Link
            href="/admin/dashboard/articles"
            className="border border-[#142b45]/20 px-4 py-2 text-sm font-semibold text-[#142b45] transition hover:bg-[#142b45] hover:text-white"
          >
            Back to Articles
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="min-w-0">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#142b45]/15">
            <div className="flex gap-2">
              {(["en", "ti"] as const).map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => setLocale(language)}
                  className={`border-b-2 px-5 py-3 text-sm font-bold transition ${
                    locale === language
                      ? "border-[#c9a45c] text-[#142b45]"
                      : "border-transparent text-[#142b45]/50 hover:text-[#142b45]"
                  }`}
                >
                  {language === "en" ? "English" : "ትግርኛ"}
                  {isTranslationComplete(language) && (
                    <span className="ml-2 text-xs text-green-700">✓</span>
                  )}
                </button>
              ))}
            </div>

            <p className="text-xs text-[#142b45]/50">
              Editing: {locale === "en" ? "English" : "Tigrinya"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
                Article Title
              </label>
              <input
                value={current.title}
                onChange={(event) => updateField("title", event.target.value)}
                placeholder="Enter article title"
                className="w-full border-b border-[#142b45]/20 bg-transparent py-3 text-2xl font-bold text-[#142b45] outline-none placeholder:text-[#142b45]/25 focus:border-[#c9a45c]"
              />

              <label className="mb-2 mt-7 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
                Subtitle
              </label>
              <input
                value={current.subtitle}
                onChange={(event) =>
                  updateField("subtitle", event.target.value)
                }
                placeholder="Optional article subtitle"
                className="w-full border border-[#142b45]/15 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
              />

              <label className="mb-2 mt-7 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
                URL Slug
              </label>
              <input
                value={current.slug}
                onChange={(event) => updateField("slug", event.target.value)}
                placeholder="article-url-slug"
                className="w-full border border-[#142b45]/15 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
              />
              <p className="mt-2 text-xs text-[#142b45]/45">
                Used in the article URL. Use lowercase letters, numbers and
                hyphens.
              </p>
            </div>

            <div className="bg-white p-6 shadow-sm">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-[#142b45]">
                    Article Content
                  </h2>
                  <p className="mt-1 text-xs text-[#142b45]/50">
                    Use the toolbar to format your article.
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#c9a45c]">
                  Rich Text Editor
                </span>
              </div>

              <ArticleRichTextEditor
                value={current.body}
                onChange={updateBody}
                placeholder="Write your article here..."
              />
            </div>

            <div className="bg-white p-6 shadow-sm">
              <h2 className="mb-5 text-lg font-bold text-[#142b45]">
                Search Engine Optimisation
              </h2>

              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
                SEO Title
              </label>
              <input
                value={current.seoTitle}
                onChange={(event) =>
                  updateField("seoTitle", event.target.value)
                }
                placeholder="Search result title"
                className="mb-5 w-full border border-[#142b45]/15 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
              />

              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
                SEO Description
              </label>
              <textarea
                value={current.seoDescription}
                onChange={(event) =>
                  updateField("seoDescription", event.target.value)
                }
                rows={3}
                placeholder="Brief description for search engines"
                className="w-full resize-y border border-[#142b45]/15 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
              />
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-bold text-[#142b45]">
              Publishing
            </h2>

            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
              Article Status
            </label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as Status)}
              className="mb-6 w-full border border-[#142b45]/15 bg-white px-3 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
            >
              <option value="draft">Save as Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>

            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65">
              Category
            </label>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mb-6 w-full border border-[#142b45]/15 bg-white px-3 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
            >
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.en}
                </option>
              ))}
            </select>

            <label className="flex cursor-pointer items-center gap-3 border-t border-[#142b45]/10 pt-5 text-sm font-semibold text-[#142b45]">
              <input
                type="checkbox"
                checked={featured}
                onChange={(event) => setFeatured(event.target.checked)}
                className="h-4 w-4 accent-[#c9a45c]"
              />
              Feature this article
            </label>
          </div>

          <div className="bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-[#142b45]">
              Translations
            </h2>

            {(["en", "ti"] as const).map((language) => (
              <div
                key={language}
                className="flex items-center justify-between border-b border-[#142b45]/10 py-3 last:border-0"
              >
                <span className="text-sm font-semibold text-[#142b45]">
                  {language === "en" ? "English" : "Tigrinya"}
                </span>
                <span
                  className={`text-xs font-bold ${
                    isTranslationComplete(language)
                      ? "text-green-700"
                      : "text-[#142b45]/40"
                  }`}
                >
                  {isTranslationComplete(language) ? "Complete" : "Incomplete"}
                </span>
              </div>
            ))}
          </div>

          {error && (
            <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-800">
              {error}
            </div>
          )}

          {success && (
            <div className="border border-green-200 bg-green-50 p-4 text-sm text-green-800">
              {success}
            </div>
          )}

          <button
            type="button"
            onClick={saveArticle}
            disabled={saving}
            className="w-full bg-[#142b45] px-5 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#203d5d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving Article..." : "Save Article"}
          </button>

          <p className="text-center text-xs leading-5 text-[#142b45]/45">
            Your article and its translations will be saved to the ANM newsroom
            database.
          </p>
        </aside>
      </main>
    </div>
  );
}
