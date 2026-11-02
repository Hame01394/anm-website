
import Link from "next/link";

export type Publication = {
  id: string;
  category:
    | "Latest News"
    | "Analysis & Commentary"
    | "Press Releases"
    | "Speeches & Statements"
    | "Videos & Interviews"
    | "Publications & Reports";
  headline: string;
  date: string;
  summary: string;
  image: string;
  href: string;
  featured: boolean;
  language: "English" | "Tigrinya";
};

type NewsMediaProps = {
  publications?: Publication[];
};

const categories = [
  "Latest News",
  "Analysis & Commentary",
  "Press Releases",
  "Speeches & Statements",
  "Videos & Interviews",
  "Publications & Reports",
];

// Temporary demonstration content.
// Replace this fallback with publications supplied by your CMS.
const demonstrationPublications: Publication[] = [
  {
    id: "sample-1",
    category: "Latest News",
    headline: "Your First Featured News Publication",
    date: "Publication date",
    summary:
      "This space will feature a short introduction to an important ANM news publication. Editors will be able to manage the headline, image, date and article through the publishing system.",
    image: "",
    href: "/media/news",
    featured: true,
    language: "English",
  },
  {
    id: "sample-2",
    category: "Analysis & Commentary",
    headline: "Your First Featured Political Analysis",
    date: "Publication date",
    summary:
      "Present informed analysis of national developments, political questions and the challenges facing Eritrea, with clear references and supporting material.",
    image: "",
    href: "/media/analysis",
    featured: true,
    language: "English",
  },
  {
    id: "sample-3",
    category: "Press Releases",
    headline: "Your First Official ANM Statement",
    date: "Publication date",
    summary:
      "Use this feature for official announcements and statements issued by the movement, clearly distinguished from commentary and proposed policy.",
    image: "",
    href: "/media/press-releases",
    featured: true,
    language: "English",
  },
];

export function NewsMedia({
  publications = demonstrationPublications,
}: NewsMediaProps) {
  const featured = publications
    .filter((publication) => publication.featured)
    .slice(0, 3);

  return (
    <section
      id="news-media"
      className="w-full bg-white px-5 py-20 text-[#142b45] sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              News & Media
            </p>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              News, Analysis
              <span className="block text-[#a77d32]">
                & Statements
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#526174] sm:text-lg">
              Follow the latest news, political analysis, official
              statements, speeches, interviews and publications from
              the Aga'azian National Movement.
            </p>
          </div>

          <Link
            href="/media"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-[#142b45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#294d70] md:self-auto"
          >
            View All News & Media
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* CATEGORY LINKS */}
        <div className="mb-10 flex gap-3 overflow-x-auto border-b border-[#e5e0d5] pb-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/media?category=${encodeURIComponent(category)}`}
              className="shrink-0 rounded-full border border-[#d9d1c1] px-4 py-2 text-xs font-semibold text-[#43546a] transition hover:border-[#c9a45c] hover:bg-[#f8f5ed] hover:text-[#142b45]"
            >
              {category}
            </Link>
          ))}
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
                  aria-label={`Read ${publication.headline}`}
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
                        Publication image
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
                    Read Full Article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#c9a45c] bg-[#f8f5ed] px-6 py-16 text-center">
            <h3 className="text-xl font-bold">
              Publications Coming Soon
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#526174]">
              Featured news, analysis and official statements will
              appear here when publications are added by authorised
              editors.
            </p>
          </div>
        )}

                
      </div>
    </section>
  );
}
