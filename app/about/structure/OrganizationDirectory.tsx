import Link from "next/link";
import { OrganizationUnit } from "./structureData";

type Props = {
  title: string;
  subtitle: string;
  basePath: string;
  items: OrganizationUnit[];
};

export default function OrganizationDirectory({
  title,
  subtitle,
  basePath,
  items,
}: Props) {
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      <section className="bg-[#142b45] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/about"
            className="mb-8 inline-flex text-sm text-[#d4b574] hover:text-white"
          >
            ← Back to About ANM
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
            Aga'azian National Movement
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {title}
          </h1>

          <div className="my-6 h-1 w-16 bg-[#c9a45c]" />

          <p className="max-w-3xl text-base leading-8 text-white/75">
            {subtitle}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold">
                Organizational Directory
              </h2>
              <p className="mt-2 text-sm text-[#647184]">
                Select an entry to view its leadership and responsibilities.
              </p>
            </div>

            <span className="text-sm font-semibold text-[#8b713e]">
              {items.length} entries
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Link
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="group flex min-h-[260px] flex-col border border-[#e5e1d8] bg-white p-6 transition hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-lg"
              >
                <span className="text-sm font-extrabold tracking-widest text-[#c9a45c]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-extrabold group-hover:text-[#9b762e]">
                  {item.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#647184]">
                  {item.shortDescription}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#eeeae2] pt-4">
                  <span className="text-xs font-semibold text-[#647184]">
                    {item.head.name === "To be appointed"
                      ? "Leadership appointment pending"
                      : item.head.name}
                  </span>

                  <span className="font-bold text-[#a77d32] transition group-hover:translate-x-1">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}