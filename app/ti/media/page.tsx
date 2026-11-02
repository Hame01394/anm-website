
import Link from "next/link";

const categories = [
  {
    title: "ዜና ሓበሬታ",
    description: "ካብ ምንቅስቓስ ዝወጽኡ ሓደስቲ ሓበሬታታትን ምዕባለታትን።",
    href: "/ti/media?category=latest-news",
  },
  {
    title: "ትንተናን ርእይቶን",
    description: "ፖለቲካዊ ትንተናን ብምርዳእ ዝቐርብ ርእይቶን።",
    href: "/ti/media?category=analysis",
  },
  {
    title: "ወግዓዊ መግለጺታት",
    description: "ወግዓዊ ሓበሬታታትን መግለጺታትን ANM።",
    href: "/ti/media?category=press-releases",
  },
  {
    title: "መግለጺታትን ዘረባታትን",
    description: "ዘረባታት፣ ኣዋጃትን ወግዓዊ መርገጺታትን።",
    href: "/ti/media?category=speeches",
  },
  {
    title: "ቪድዮታትን ቃለ-መሕትታትን",
    description: "ቃለ-መሕትታት፣ ቪድዮ መልእኽትታትን ሚድያዊ ርክባትን።",
    href: "/ti/media?category=videos",
  },
  {
    title: "ጽሑፋትን ጸብጻባትን",
    description: "ጸብጻባት፣ ሰነዳት ፖሊሲን ካልኦት ሕትመታትን።",
    href: "/ti/media?category=publications",
  },
];

const featuredArticles = [
  {
    category: "ዜና ሓበሬታ",
    title: "ቀዳማይ ፍሉይ ሕትመት ዜና",
    description:
      "ኣገዳሲ ሕትመት ዜና ANM፣ ምስ ኣርእስቱ፣ ዕለት ሕትመቱ፣ ስእሉን ምሉእ ዓንቀጹን ኣብዚ ክቐርብ እዩ።",
    href: "/ti/media/news",
    number: "01",
  },
  {
    category: "ትንተናን ርእይቶን",
    title: "ቀዳማይ ፍሉይ ፖለቲካዊ ትንተና",
    description:
      "ኣብ ሃገራዊ ምዕባለታት፣ ፖለቲካዊ ጉዳያትን ንኤርትራ ዝገጥሙ ብድሆታትን ዝተመርኮሰ ትንተና ምስ ንጹራት ምንጭታትን መርትዖታትን።",
    href: "/ti/media/analysis",
    number: "02",
  },
  {
    category: "ወግዓዊ መግለጺታት",
    title: "ቀዳማይ ወግዓዊ መግለጺ ANM",
    description:
      "ብምንቅስቓስ ዝወጽኡ ወግዓዊ ሓበሬታታትን መግለጺታትን፣ ካብ ርእይቶታትን ዝቐርቡ ሓሳባት ፖሊሲን ብንጹር ተፈልዮም ዝቐርቡ።",
    href: "/ti/media/press-releases",
    number: "03",
  },
];

export default function MediaPageTi() {
  return (
    <main
      lang="ti"
      className="min-h-screen bg-white text-[#142b45]"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#c9a45c]/20" />
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#c9a45c]/30" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            ዜና <span className="text-[#d5b46b]">&</span> ሚድያ
          </h1>

          <div className="mt-6 h-1 w-24 bg-[#c9a45c]" />

          <h2 className="mt-8 text-xl font-semibold md:text-2xl">
            ዜና፣ ትንተናን መግለጺታትን
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            ካብ ምንቅስቓስ ሃገራዊ ኣጋኣዝያን ዝወጽኡ ሓደስቲ
            ዜናታት፣ ፖለቲካዊ ትንተናታት፣ ወግዓዊ
            መግለጺታት፣ ዘረባታት፣ ቃለ-መሕትታትን
            ሕትመታትን ተኸታተሉ።
          </p>

          <a
            href="#latest-publications"
            className="mt-9 inline-flex items-center gap-3 border border-[#d5b46b] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#f1d99f] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            ሕትመታት ርአ
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="border-b border-[#e8e2d6] bg-[#f8f5ed] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
              ክፍልታት ሚድያ ዳህስሱ
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              ብዓይነት ሕትመት ዳህስሱ
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
                ካብ ክፍሊ ዜና
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                ፍሉያት ሕትመታት
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#647184]">
                ዜናታት፣ ፖለቲካዊ ትንተናታትን ወግዓዊ
                ሓበሬታታትን ካብ ምንቅስቓስ ሃገራዊ ኣጋኣዝያን።
              </p>
            </div>

            <Link
              href="/ti/media?category=latest-news"
              className="inline-flex w-fit items-center gap-2 border-b-2 border-[#c9a45c] pb-2 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:text-[#a17d3d]"
            >
              ኩሉ ዜናን ሚድያን ርአ
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.number}
                className="group overflow-hidden border border-[#e8e2d6] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* PUBLICATION IMAGE PLACEHOLDER */}
                <Link
                  href={article.href}
                  aria-label={`ኣንብብ፦ ${article.title}`}
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
                    ዕለት ሕትመት · ትግርኛ
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
                    ምሉእ ዓንቀጽ ኣንብብ
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
            ክፍሊ ዜናን ሚድያን ናይ ANM ወግዓዊ መድረኽ
            ዜናታት፣ ትንተናታት፣ መግለጺታት፣ ዘረባታት፣
            ቃለ-መሕትታትን ሕትመታትን እዩ።
          </p>
        </div>
      </section>
    </main>
  );
}
