
import Link from "next/link";
import { requireNewsroomAdmin } from "@/lib/require-newsroom-admin";

import AdminSignOut from "@/app/components/admin/AdminSignOut";
export const instant = false;

export default async function AdminDashboardPage() {
  const { newsroomUser } = await requireNewsroomAdmin();

  return (
    <main className="min-h-screen bg-[#f8f5ed]">
      <header className="border-b border-white/10 bg-[#142b45] px-6 py-6 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
              Aga'azian National Movement
            </p>
            <h1 className="mt-2 text-2xl font-semibold">
              Newsroom Administration
            </h1>
          </div>

          <AdminSignOut />
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <p className="text-sm text-[#142b45]/60">Welcome back,</p>

        <h2 className="mt-1 text-3xl font-semibold text-[#142b45]">
          {newsroomUser.display_name}
        </h2>

        <p className="mt-2 text-sm text-[#142b45]/60">
          {newsroomUser.email}
        </p>

        <section className="mt-12">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#142b45]/60">
            Newsroom management
          </h3>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              href="/admin/dashboard/articles"
              className="group border border-[#142b45]/15 bg-white p-7 transition hover:border-[#c9a45c] hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a45c]">
                Content management
              </p>
              <h4 className="mt-3 text-xl font-semibold text-[#142b45]">
                Articles
              </h4>
              <p className="mt-3 text-sm leading-6 text-[#142b45]/65">
                Create, edit, review and publish newsroom articles in English
                and Tigrinya.
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#142b45] group-hover:text-[#c9a45c]">
                Open article management →
              </p>
            </Link>

            <Link
              href="/admin/dashboard/articles/new"
              className="group border border-[#142b45]/15 bg-white p-7 transition hover:border-[#c9a45c] hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a45c]">
                New content
              </p>
              <h4 className="mt-3 text-xl font-semibold text-[#142b45]">
                Create an article
              </h4>
              <p className="mt-3 text-sm leading-6 text-[#142b45]/65">
                Prepare a new article, add its translations and publication
                details, and save it.
              </p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-[#142b45] group-hover:text-[#c9a45c]">
                Create article →
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
