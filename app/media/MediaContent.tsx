
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const categories = [
  {
    title: "Latest News",
    description: "Updates and developments from the movement.",
  },
  {
    title: "Analysis & Commentary",
    description: "Political analysis and informed commentary.",
  },
  {
    title: "Press Releases",
    description: "Official announcements from the ANM.",
  },
  {
    title: "Speeches & Statements",
    description: "Speeches, declarations and official positions.",
  },
  {
    title: "Videos & Interviews",
    description: "Interviews, video messages and media appearances.",
  },
  {
    title: "Publications & Reports",
    description: "Reports, policy documents and publications.",
  },
];

export default function MediaContent() {
  const searchParams = useSearchParams();

  const requestedCategory = searchParams.get("category");

  const activeCategory = categories.find(
    (category) => category.title === requestedCategory
  )?.title ?? null;

  const categoryHref = (category: string) =>
    `/media?category=${encodeURIComponent(category)}`;

  return (
    <main className="min-h-screen bg-white text-[#142b45]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c9a45c]/20" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#c9a45c]/30" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga'azian National Movement
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            News <span className="text-[#d5b46b]">&</span> Media
          </h1>

          <div className="mt-6 h-1 w-24 bg-[#c9a45c]" />

          <h2 className="mt-8 text-xl font-semibold md:text-2xl">
            News, Analysis & Statements
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Follow the latest news, political analysis, official statements,
            speeches, interviews and publications from the Aga'azian National
            Movement.
          </p>

          <Link
            href="#latest-publications"
            className="mt-9 inline-flex items-center gap-3 border border-[#d5b46b] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#f1d99f] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            Explore Publications
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-[#e8e2d6] bg-[#f8f5ed] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
              Explore the newsroom
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Browse by Category
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                href={categoryHref(category.title)}
                aria-current={
                  activeCategory === category.title ? "page" : undefined
                }
                className={`group flex min-h-36 flex-col justify-between border p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg ${
                  activeCategory === category.title
                    ? "border-[#c9a45c] bg-[#142b45] text-white"
                    : "border-[#e3dccf] bg-white text-[#142b45]"
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-widest ${
                    activeCategory === category.title
                      ? "text-[#d5b46b]"
                      : "text-[#b18b49]"
                  }`}
                >
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-bold transition group-hover:text-[#c9a45c]">
                    {category.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      activeCategory === category.title
                        ? "text-white/70"
                        : "text-[#647184]"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section
        id="latest-publications"
        className="scroll-mt-20 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                From the newsroom
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                {activeCategory || "Featured Publications"}
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[#647184]">
                {activeCategory
                  ? `Explore ${activeCategory.toLowerCase()} from the Aga'azian National Movement.`
                  : "News, political analysis and official communications from the Aga'azian National Movement."}
              </p>
            </div>

            {activeCategory ? (
              <Link
                href="/media"
                className="inline-flex w-fit items-center gap-2 border-b-2 border-[#c9a45c] pb-2 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:text-[#a17d3d]"
              >
                View All Publications →
              </Link>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a17d3d]">
                Official ANM Newsroom
              </span>
            )}
          </div>

          <div className="border border-[#e5dfd3] bg-[#f8f5ed] px-6 py-16 text-center md:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#c9a45c]/50 bg-white">
              <span className="text-2xl font-bold tracking-wider text-[#a17d3d]">
                ANM
              </span>
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
              {activeCategory ?? "Newsroom"}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#142b45]">
              Publications Coming Soon
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#647184]">
              Official news, analysis, statements and publications from the
              Aga'azian National Movement will be published here. Please
              check back for updates.
            </p>

            {activeCategory && (
              <Link
                href="/media"
                className="mt-8 inline-flex items-center gap-2 bg-[#142b45] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#294d70]"
              >
                Explore All Categories →
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <section className="border-t border-[#e8e2d6] bg-[#f8f5ed] px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm leading-7 text-[#647184]">
            The News & Media section is the official space for ANM news,
            analysis, statements, speeches, interviews and publications.
          </p>
        </div>
      </section>
    </main>
  );
}
