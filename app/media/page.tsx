import Link from "next/link";

const categories = [
  {
    title: "Latest News",
    description: "Updates and developments from the movement.",
    href: "/media?category=Latest%20News",
  },
  {
    title: "Analysis & Commentary",
    description: "Political analysis and informed commentary.",
    href: "/media?category=Analysis%20%26%20Commentary",
  },
  {
    title: "Press Releases",
    description: "Official announcements from the ANM.",
    href: "/media?category=Press%20Releases",
  },
  {
    title: "Speeches & Statements",
    description: "Speeches, declarations and official positions.",
    href: "/media?category=Speeches%20%26%20Statements",
  },
  {
    title: "Videos & Interviews",
    description: "Interviews, video messages and media appearances.",
    href: "/media?category=Videos%20%26%20Interviews",
  },
  {
    title: "Publications & Reports",
    description: "Reports, policy documents and publications.",
    href: "/media?category=Publications%20%26%20Reports",
  },
];

const featuredArticles = [
  {
    category: "Latest News",
    title: "Your First Featured News Publication",
    description:
      "This space will feature an important ANM news publication, with its headline, publication date, image and full article.",
    href: "/media/news",
    number: "01",
  },
  {
    category: "Analysis & Commentary",
    title: "Your First Featured Political Analysis",
    description:
      "Present informed analysis of national developments, political questions and the challenges facing Eritrea, with clear references and supporting material.",
    href: "/media/analysis",
    number: "02",
  },
  {
    category: "Press Releases",
    title: "Your First Official ANM Statement",
    description:
      "Official announcements and statements issued by the movement, clearly distinguished from commentary and proposed policy.",
    href: "/media/press-releases",
    number: "03",
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-white text-[#142b45]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c9a45c]/20" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#c9a45c]/30" />

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

          <a
            href="#latest-publications"
            className="mt-9 inline-flex items-center gap-3 border border-[#d5b46b] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#f1d99f] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            Explore Publications
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
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
                href={category.href}
                className="group flex min-h-36 flex-col justify-between border border-[#e3dccf] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg"
              >
                <span className="text-xs font-bold tracking-widest text-[#b18b49]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="text-lg font-bold transition group-hover:text-[#a17d3d]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#647184]">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PUBLICATIONS */}
      <section
        id="latest-publications"
        className="px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                From the newsroom
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Featured Publications
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#647184]">
                News, political analysis and official communications from the
                Aga'azian National Movement.
              </p>
            </div>

            <Link
              href="/media?category=Latest%20News"
              className="inline-flex w-fit items-center gap-2 border-b-2 border-[#c9a45c] pb-2 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:text-[#a17d3d]"
            >
              View All News & Media
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.number}
                className="group overflow-hidden border border-[#e8e2d6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Publication image placeholder */}
                <Link
                  href={article.href}
                  aria-label={`Read ${article.title}`}
                  className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#142b45]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#142b45] via-[#1d3b5b] to-[#0d2035]" />
                  <div className="absolute inset-5 border border-[#c9a45c]/40" />
                  <div className="relative text-center">
                    <span className="block text-5xl font-bold text-[#d5b46b]/80">
                      ANM
                    </span>
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                      {article.category}
                    </span>
                  </div>
                  <span className="absolute bottom-5 right-6 text-4xl font-light text-white/20">
                    {article.number}
                  </span>
                </Link>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a17d3d]">
                    {article.category}
                  </p>

                  <p className="mt-4 text-xs text-[#8a94a2]">
                    Publication date · English
                  </p>

                  <h3 className="mt-4 text-xl font-bold leading-snug transition group-hover:text-[#a17d3d]">
                    <Link href={article.href}>{article.title}</Link>
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#647184]">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-7 inline-flex items-center gap-2 border-b border-[#c9a45c] pb-2 text-xs font-bold uppercase tracking-wider text-[#142b45] transition hover:text-[#a17d3d]"
                  >
                    Read Full Article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL FOOTNOTE */}
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