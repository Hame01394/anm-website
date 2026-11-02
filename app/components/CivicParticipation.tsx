
import Link from "next/link";

const participationOptions = [
  {
    number: "01",
    title: "Membership",
    description:
      "Learn about joining ANM, membership eligibility, rights, responsibilities and the application process.",
    link: "/join",
    action: "Explore Membership",
  },
  {
    number: "02",
    title: "Volunteering",
    description:
      "Discover ways to contribute your skills, time and professional experience to peaceful civic initiatives.",
    link: "/volunteer",
    action: "Volunteer Your Skills",
  },
  {
    number: "03",
    title: "Campaigns",
    description:
      "Learn about current campaigns, their objectives and lawful, peaceful ways to support them.",
    link: "/campaigns",
    action: "Explore Campaigns",
  },
  {
    number: "04",
    title: "Chapters",
    description:
      "Find information about regional, international and diaspora chapters and their activities.",
    link: "/chapters",
    action: "Discover Chapters",
  },
  {
    number: "05",
    title: "Contact",
    description:
      "Find official communication routes for general inquiries, organizational correspondence and media requests.",
    link: "/contact",
    action: "Contact ANM",
  },
  {
    number: "06",
    title: "Donations",
    description:
      "Review authorized contribution methods, financial transparency commitments and applicable legal requirements.",
    link: "/donate",
    action: "Donation Information",
  },
];

export default function CivicParticipation() {
  return (
    <section
      id="civic-participation"
      aria-labelledby="civic-participation-title"
      className="mb-8 border-b-2 border-[#c9a45c] bg-[#142b45] px-6 py-20 text-white md:mb-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d5b46b]">
            Civic Participation
          </p>

          <h2
            id="civic-participation-title"
            className="text-3xl font-extrabold leading-tight md:text-5xl"
          >
            A Democratic Future Begins
            <span className="block text-[#d5b46b]">
              With Civic Participation
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            Learn about the movement, follow its work, participate in
            peaceful civic initiatives, and contribute to the discussion
            about the nation's constitutional future.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-20 bg-[#c9a45c]" />
        </div>

        {/* PARTICIPATION OPTIONS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {participationOptions.map((option) => (
            <article
              key={option.number}
              className="group flex flex-col rounded-lg border border-white/15 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70 hover:bg-white/[0.08]"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-[#d5b46b]">
                {option.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-white">
                {option.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-white/70">
                {option.description}
              </p>

              <Link
                href={option.link}
                className="mt-7 inline-flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-bold text-[#d5b46b] transition hover:text-white"
              >
                {option.action}
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* RESPONSIBLE PARTICIPATION */}
        <div className="mt-14 rounded-lg border border-[#c9a45c]/30 bg-[#0e2035] px-6 py-7 md:px-10">
          <h3 className="text-lg font-bold text-[#d5b46b]">
            Responsible Participation & Transparency
          </h3>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/70">
            ANM will publish clear information about participation
            requirements, official communication channels and authorized
            financial contributions. Any future membership or volunteer
            registration process will explain what personal information
            is collected, why it is needed and how it will be protected.
            No online registration or donation is accepted through this
            section.
          </p>
        </div>

        {/* CLOSING MESSAGE */}
        <div className="mt-14 text-center">
          <p className="text-lg font-semibold text-white md:text-xl">
            Our Nation. Our Future. Our Shared Responsibility.
          </p>
        </div>

      </div>
    </section>
  );
}
