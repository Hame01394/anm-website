import Link from "next/link";

const merchandise = [
  {
    number: "01",
    name: "ANM T-Shirts",
    description:
      "Wear the movement. A collection of ANM-branded shirts representing our national purpose and shared future.",
    label: "T-SHIRTS",
  },
  {
    number: "02",
    name: "ANM Hoodies",
    description:
      "Everyday clothing carrying the identity, principles and emblem of the Aga'azian National Movement.",
    label: "HOODIES",
  },
  {
    number: "03",
    name: "ANM Caps",
    description:
      "A simple way to show your support and stand with the movement.",
    label: "CAPS",
  },
  {
    number: "04",
    name: "Accessories",
    description:
      "Additional ANM-branded items, designed for supporters and members of the movement.",
    label: "ACCESSORIES",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#142b45] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(201,164,92,0.18),_transparent_55%)]" />

        <div className="relative mx-auto flex min-h-[440px] max-w-7xl flex-col justify-center px-6 py-24 md:px-12 lg:px-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#c9a45c]">
            Aga&apos;azian National Movement
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            The ANM
            <span className="block text-[#c9a45c]">Movement Shop</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Wear the identity. Support the mission. Every item represents our
            commitment to culture, liberty, prosperity and a shared national
            future.
          </p>

          <div className="mt-10">
            <span className="inline-flex border border-[#c9a45c] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              Merchandise Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#f8f5ed] px-6 py-16 text-[#142b45] md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a27b37]">
              More Than Merchandise
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Wear what
              <br />
              you stand for.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[#142b45]/75">
            The ANM Shop will bring together clothing and accessories carrying
            the movement&apos;s name, emblem and message. Our collection is
            being prepared. Product details and ordering information will be
            published here when the shop opens.
          </p>
        </div>
      </section>

      {/* MERCHANDISE CATEGORIES */}
      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a45c]">
                The Collection
              </p>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Movement Merchandise
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/60">
              Explore the categories planned for the official ANM collection.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {merchandise.map((item) => (
              <article
                key={item.number}
                className="flex min-h-[330px] flex-col border border-[#c9a45c]/50 bg-white p-7 text-[#142b45] transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-semibold tracking-widest text-[#a27b37]">
                    {item.number}
                  </span>

                  <span className="border border-[#c9a45c]/60 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#a27b37]">
                    COMING SOON
                  </span>
                </div>

                <div className="my-10 flex flex-1 items-center justify-center border-y border-[#142b45]/10 py-8">
                  <span className="text-center text-2xl font-bold tracking-[0.2em] text-[#142b45]">
                    ANM
                    <span className="mt-2 block text-[10px] font-medium tracking-[0.3em] text-[#a27b37]">
                      {item.label}
                    </span>
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="mt-3 text-sm leading-6 text-[#142b45]/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING — WHITE SECTION SEPARATED FROM FOOTER */}
      <section className="border-t-4 border-[#c9a45c] bg-white px-6 py-16 text-[#142b45] md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a27b37]">
              Stand With the Movement
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Be part of the future we are building.
            </h2>
          </div>

          <Link
            href="/take-action"
            className="inline-flex w-fit items-center border border-[#c9a45c] bg-[#c9a45c] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#142b45] transition hover:bg-[#142b45] hover:text-white"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}