
import Link from "next/link";

const actions = [
  {
    number: "01",
    title: "Join the Movement",
    subtitle: "Become part of the change",
    description:
      "Stand with the Aga'azian National Movement and take part in building a democratic, self-determined and prosperous future.",
    details: [
      "Learn about the ANM's principles and vision",
      "Connect with the movement",
      "Participate in its activities and initiatives",
    ],
    href: "/contact?subject=Joining%20the%20Movement",
    linkText: "Express Your Interest",
  },
  {
    number: "02",
    title: "Volunteer",
    subtitle: "Put your skills into action",
    description:
      "Contribute your time, knowledge and professional skills to help advance the movement's civic, cultural and organizational work.",
    details: [
      "Communications, writing and translation",
      "Research, education and documentation",
      "Digital, creative and organizational work",
    ],
    href: "/contact?subject=Volunteering",
    linkText: "Become a Volunteer",
  },
  {
    number: "03",
    title: "Support ANM",
    subtitle: "Help strengthen the movement",
    description:
      "Support the movement's work by sharing its publications, raising awareness, contributing expertise and helping its initiatives reach wider audiences.",
    details: [
      "Share official news and publications",
      "Support educational and cultural initiatives",
      "Contribute skills and professional expertise",
    ],
    href: "/contact?subject=Supporting%20ANM",
    linkText: "Explore Ways to Support",
  },
  {
    number: "04",
    title: "Contact Us",
    subtitle: "Start a conversation",
    description:
      "Have a question, proposal or idea? Contact the Aga'azian National Movement to learn more, share your views or discuss opportunities to participate.",
    details: [
      "General questions and enquiries",
      "Partnership and cooperation proposals",
      "Media and organizational enquiries",
    ],
    href: "/contact",
    linkText: "Get in Touch",
  },
];

export default function TakeActionPage() {
  return (
    <main className="min-h-screen bg-white text-[#142b45]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-[#c9a45c]/20" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-[#c9a45c]/30" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#c9a45c]/20" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga'azian National Movement
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Take <span className="text-[#d5b46b]">Action.</span>
          </h1>

          <div className="mt-8 h-1 w-24 bg-[#c9a45c]" />

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/80 md:text-xl">
            A movement grows through participation, commitment and shared
            responsibility. Discover how you can contribute to the work
            of the Aga'azian National Movement.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#get-involved"
              className="inline-flex items-center gap-3 bg-[#c9a45c] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
            >
              Get Involved
              <span aria-hidden="true">↓</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:border-[#d5b46b] hover:text-[#d5b46b]"
            >
              Contact ANM
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.3fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
              Your participation matters
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              There Are Many Ways to Make a Difference
            </h2>
          </div>

          <p className="text-base leading-8 text-[#647184] md:text-lg">
            Whether you want to join the movement, volunteer your skills,
            support its initiatives or simply make contact, there is a place
            to begin. Explore the opportunities below and choose how you
            would like to participate.
          </p>
        </div>
      </section>

      {/* FOUR ACTION AREAS */}
      <section
        id="get-involved"
        className="border-y border-[#e8e2d6] bg-[#f8f5ed] px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
              Get involved
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Choose Your Way to Participate
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {actions.map((action) => (
              <article
                key={action.number}
                className="group flex flex-col border border-[#e3dccf] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c] hover:shadow-xl md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#b18b49]">
                    {action.number}
                  </span>
                  <span className="h-8 w-8 border-r-2 border-t-2 border-[#c9a45c] transition group-hover:h-10 group-hover:w-10" />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                  {action.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                  {action.title}
                </h3>

                <p className="mt-5 leading-8 text-[#647184]">
                  {action.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-[#eee8dc] pt-6">
                  {action.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-[#526174]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a45c]" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Link
                    href={action.href}
                    className="inline-flex items-center gap-3 border-b-2 border-[#c9a45c] pb-2 text-xs font-bold uppercase tracking-wider text-[#142b45] transition hover:gap-5 hover:text-[#a17d3d]"
                  >
                    {action.linkText}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="my-16 bg-white px-6 md:my-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#142b45] px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c9a45c]/20" />

          <p className="relative text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga'azian National Movement
          </p>

          <h2 className="relative mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
            Your Participation Begins With One Step.
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl leading-8 text-white/75">
            Explore the movement, ask questions and discover how you can
            contribute to its work.
          </p>

          <Link
            href="/contact"
            className="relative mt-9 inline-flex items-center gap-3 bg-[#c9a45c] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
          >
            Contact the Movement
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
