
import Link from "next/link";

export type PublicationTi = {
  id: string;
  category:
    | "ዜና ሓበሬታ"
    | "ትንተናን ርእይቶን"
    | "ወግዓዊ መግለጺታት"
    | "መግለጺታትን ዘረባታትን"
    | "ቪድዮታትን ቃለ-መሕትታትን"
    | "ጽሑፋትን ጸብጻባትን";
  headline: string;
  date: string;
  summary: string;
  image: string;
  href: string;
  featured: boolean;
  language: "ትግርኛ" | "እንግሊዝኛ";
};

type NewsMediaTiProps = {
  publications?: PublicationTi[];
};

const categories = [
  "ዜና ሓበሬታ",
  "ትንተናን ርእይቶን",
  "ወግዓዊ መግለጺታት",
  "መግለጺታትን ዘረባታትን",
  "ቪድዮታትን ቃለ-መሕትታትን",
  "ጽሑፋትን ጸብጻባትን",
];

const demonstrationPublications: PublicationTi[] = [
  {
    id: "sample-ti-1",
    category: "ዜና ሓበሬታ",
    headline: "ቀዳማይ ዝቐርብ ፍሉይ ዜና",
    date: "ዕለት ሕትመት",
    summary:
      "ኣብዚ ቦታ ኣገዳሲ ሃገራዊ ዜና ወይ ወግዓዊ ሓበሬታ ANM ብሓጺር መግለጺ ክቐርብ እዩ። ኣርታኢታት ኣርእስቲ፣ ስእሊ፣ ዕለትን ዓንቀጽን ክመሓድሩ ይኽእሉ።",
    image: "",
    href: "/ti/media/news",
    featured: true,
    language: "ትግርኛ",
  },
  {
    id: "sample-ti-2",
    category: "ትንተናን ርእይቶን",
    headline: "ቀዳማይ ፖለቲካዊ ትንተናና",
    date: "ዕለት ሕትመት",
    summary:
      "ኣብ ሃገራዊ ምዕባለታት፣ ፖለቲካዊ ጉዳያትን ንኤርትራ ዝገጥሙ ብድሆታትን ዝተመርኮሰ ትንተና ብምንጭታትን መርትዖታትን ምቕራብ።",
    image: "",
    href: "/ti/media/analysis",
    featured: true,
    language: "ትግርኛ",
  },
  {
    id: "sample-ti-3",
    category: "ወግዓዊ መግለጺታት",
    headline: "ቀዳማይ ወግዓዊ መግለጺ ANM",
    date: "ዕለት ሕትመት",
    summary:
      "እዚ ክፍሊ ብምንቅስቓስ ዝወጽኡ ወግዓዊ ሓበሬታታትን መግለጺታትን ንምቕራብ ይጥቀም።",
    image: "",
    href: "/ti/media/press-releases",
    featured: true,
    language: "ትግርኛ",
  },
];

export function NewsMediaTi({
  publications = demonstrationPublications,
}: NewsMediaTiProps) {
  const featured = publications
    .filter((publication) => publication.featured)
    .slice(0, 3);

  return (
    <section
      id="news-media"
      lang="ti"
      className="w-full bg-white px-5 py-20 text-[#142b45] sm:px-8 lg:py-28"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              ዜናን ሚድያን
            </p>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              ዜና፣ ትንተና
              <span className="block text-[#a77d32]">
                ከምኡውን መግለጺታት
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#526174] sm:text-lg">
              ካብ ምንቅስቓስ ሃገራዊ ኣጋኣዝያን ዝወጽኡ ሓደሽቲ
              ዜናታት፣ ፖለቲካዊ ትንተናታት፣ ወግዓዊ
              መግለጺታት፣ ዘረባታት፣ ቃለ-መሕትታትን
              ጽሑፋትን ተኸታተሉ።
            </p>
          </div>

          <Link
            href="/ti/media"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-[#142b45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#294d70] md:self-auto"
          >
            ኩሉ ዜናን ሚድያን ርአ
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* CATEGORY LINKS */}
        <div className="mb-10 flex gap-3 overflow-x-auto border-b border-[#e5e0d5] pb-4">
          {categories.map((category, index) => {
            const categoryRoutes = [
              "/ti/media?category=latest-news",
              "/ti/media?category=analysis",
              "/ti/media?category=press-releases",
              "/ti/media?category=speeches",
              "/ti/media?category=videos",
              "/ti/media?category=publications",
            ];

            return (
              <Link
                key={category}
                href={categoryRoutes[index]}
                className="shrink-0 rounded-full border border-[#d9d1c1] px-4 py-2 text-xs font-semibold text-[#43546a] transition hover:border-[#c9a45c] hover:bg-[#f8f5ed] hover:text-[#142b45]"
              >
                {category}
              </Link>
            );
          })}
        </div>

        {/* FEATURED PUBLICATIONS */}
        {featured.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((publication) => (
              <article
                key={publication.id}
                className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#e5e0d5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* PUBLICATION IMAGE */}
                <Link
                  href={publication.href}
                  aria-label={`ኣንብብ፦ ${publication.headline}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#203d5d] via-[#294d70] to-[#a77d32]"
                >
                  {publication.image ? (
                    <img
                      src={publication.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center text-center text-white">
                      <span className="text-4xl font-black tracking-widest text-[#e6c987]">
                        ANM
                      </span>

                      <span className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                        ስእሊ ሕትመት
                      </span>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded bg-[#c9a45c] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#142b45]">
                    {publication.category}
                  </span>
                </Link>

                {/* PUBLICATION DETAILS */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-[#7b8795]">
                    <span>{publication.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#c9a45c]" />
                    <span>{publication.language}</span>
                  </div>

                  <h3 className="text-xl font-extrabold leading-snug text-[#142b45] transition group-hover:text-[#a77d32]">
                    <Link href={publication.href}>
                      {publication.headline}
                    </Link>
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#526174]">
                    {publication.summary}
                  </p>

                  <Link
                    href={publication.href}
                    className="mt-6 inline-flex items-center gap-2 border-t border-[#e5e0d5] pt-5 text-sm font-bold text-[#a77d32] transition hover:text-[#142b45]"
                  >
                    ምሉእ ዓንቀጽ ኣንብብ
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#c9a45c] bg-[#f8f5ed] px-6 py-16 text-center">
            <h3 className="text-xl font-bold">
              ሕትመታት ኣብ ቀረባ ክቐርቡ እዮም
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#526174]">
              ፍሉያት ዜናታት፣ ትንተናታትን ወግዓዊ
              መግለጺታትን ብስልጣን ዘለዎም ኣርታኢታት
              ምስ ዝዳለዉ ኣብዚ ክቐርቡ እዮም።
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
