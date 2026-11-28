
import Link from "next/link";
import { connection } from "next/server";
import { pool } from "@/lib/auth";
import { requireNewsroomAdmin } from "@/lib/require-newsroom-admin";

export const instant = false;

type Article = {
  id: string;
  title: string | null;
  category: string;
  status: "draft" | "scheduled" | "published" | "archived";
  is_featured: boolean;
  published_at: Date | null;
  updated_at: Date;
};

const statusStyles: Record<string, string> = {
  draft: "bg-gray-100 text-gray-700",
  scheduled: "bg-blue-50 text-blue-700",
  published: "bg-green-50 text-green-700",
  archived: "bg-amber-50 text-amber-700",
};

export default async function ArticlesPage() {
  await connection();
await requireNewsroomAdmin();

  const result = await pool.query<Article>(`
    SELECT
      a.id,
      t.title,
      c.name_en AS category,
      a.status,
      a.is_featured,
      a.published_at,
      a.updated_at
    FROM public.newsroom_articles a
    LEFT JOIN public.newsroom_translations t
      ON t.article_id = a.id
      AND t.locale = 'en'
    LEFT JOIN public.newsroom_categories c
      ON c.id = a.category_id
    ORDER BY a.updated_at DESC
  `);

  const articles = result.rows;

  const counts = {
    all: articles.length,
    draft: articles.filter((a) => a.status === "draft").length,
    scheduled: articles.filter((a) => a.status === "scheduled").length,
    published: articles.filter((a) => a.status === "published").length,
    archived: articles.filter((a) => a.status === "archived").length,
  };

  return (
    <main className="min-h-screen bg-[#f8f5ed]">
      <header className="border-b border-[#142b45]/15 bg-[#142b45] px-6 py-6 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/admin/dashboard"
            className="text-xs text-white/60 transition hover:text-[#c9a45c]"
          >
            ← Newsroom Dashboard
          </Link>

          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
                Content Management
              </p>
              <h1 className="mt-2 text-3xl font-semibold">
                Articles
              </h1>
              <p className="mt-2 text-sm text-white/60">
                Manage ANM news, statements, analysis and publications.
              </p>
            </div>

            <Link
              href="/admin/dashboard/articles/new"
              className="inline-flex items-center justify-center bg-[#c9a45c] px-5 py-3 text-sm font-semibold text-[#142b45] transition hover:bg-[#d8b975]"
            >
              + Create Article
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {[
            { label: "All Articles", value: counts.all },
            { label: "Drafts", value: counts.draft },
            { label: "Scheduled", value: counts.scheduled },
            { label: "Published", value: counts.published },
            { label: "Archived", value: counts.archived },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-[#142b45]/10 bg-white p-5"
            >
              <p className="text-xs font-medium text-[#142b45]/55">
                {item.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-[#142b45]">
                {item.value}
              </p>
            </div>
          ))}
        </section>

        <section className="border border-[#142b45]/10 bg-white">
          <div className="border-b border-[#142b45]/10 px-6 py-5">
            <h2 className="font-semibold text-[#142b45]">
              All Articles
            </h2>
            <p className="mt-1 text-xs text-[#142b45]/55">
              {articles.length} article{articles.length === 1 ? "" : "s"} in the newsroom
            </p>
          </div>

          {articles.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <h3 className="text-lg font-semibold text-[#142b45]">
                No articles yet
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#142b45]/55">
                Your newsroom is ready. Create your first article to begin
                publishing in English and Tigrinya.
              </p>
              <Link
                href="/admin/dashboard/articles/new"
                className="mt-6 inline-flex bg-[#142b45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#203d5d]"
              >
                Create your first article
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[750px] text-left text-sm">
                <thead className="bg-[#f8f5ed] text-xs uppercase tracking-wider text-[#142b45]/60">
                  <tr>
                    <th className="px-6 py-4">Article</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Last Updated</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#142b45]/10">
                  {articles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-5">
                        <p className="font-semibold text-[#142b45]">
                          {article.title || "Untitled article"}
                        </p>
                        {article.is_featured && (
                          <span className="mt-1 inline-block text-xs text-[#a17d37]">
                            Featured
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-5 text-[#142b45]/65">
                        {article.category || "Uncategorized"}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold capitalize ${
                            statusStyles[article.status] || statusStyles.draft
                          }`}
                        >
                          {article.status}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-[#142b45]/60">
                        {new Date(article.updated_at).toLocaleDateString("en-GB")}
                      </td>

                      <td className="px-6 py-5">
                        <Link
                          href={`/admin/dashboard/articles/${article.id}/edit`}
                          className="font-semibold text-[#142b45] underline decoration-[#c9a45c] underline-offset-4 hover:text-[#a17d37]"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
