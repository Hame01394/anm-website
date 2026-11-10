import Image from "next/image";
import {
  chairperson,
  nationalLeadership,
} from "./structure/structureData";

const activities = [
  {
    number: "01",
    title: "Prepare to Fill the Vacuum in Eritrea",
    description:
      "Prepare the institutional, administrative and human capacity needed for a responsible democratic transition and the reconstruction of national institutions.",
  },
  {
    number: "02",
    title: "Media & Advocacy",
    description:
      "Communicate ANM's positions, raise awareness, challenge misinformation and engage national and international audiences.",
  },
  {
    number: "03",
    title: "Policy Development",
    description:
      "Develop practical policy proposals for democratic governance, economic development, education, healthcare and national reconstruction.",
  },
  {
    number: "04",
    title: "Research & Analysis",
    description:
      "Study Eritrea's political, economic, social and institutional challenges and produce evidence-based recommendations.",
  },
  {
    number: "05",
    title: "Articulate the National Agenda",
    description:
      "Clearly express the movement's political positions, national priorities and vision for the future.",
  },
];

const departments = [
  {
    leader: "Semere Tekle",
    image: "/images/semere-leader.png",
  },
  {
    leader: "Efrem Teklu",
    image: "/images/efrem-leader.png",
  },
  {
    leader: "Habtom Habteslassie",
    image: "/images/habtom-leader.png",
  },
  {
    leader: "Okbay Aynealem",
    image: "/images/okbay-leader.png",
  },
  {
    leader: "Mhreteab Tesfay",
    image: "/images/mhreteab-leader.png",
  },
];

function PersonCard({
  name,
  image,
  vacant = false,
}: {
  name: string;
  image?: string;
  vacant?: boolean;
}) {
  return (
    <div className="mx-auto w-full max-w-[250px] text-center">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#173653]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 250px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/45 sm:gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/50 sm:h-20 sm:w-20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-6 w-6 sm:h-10 sm:w-10"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
              </svg>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-wider sm:text-xs">
              {vacant ? "Appointment Pending" : "Leadership"}
            </span>
          </div>
        )}
      </div>

      <div className="px-1 pt-2 sm:px-2 sm:pt-4">
        <h4 className="text-xs font-extrabold leading-snug text-white sm:text-base">
          {name || "To Be Appointed"}
        </h4>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  count,
}: {
  eyebrow: string;
  title: string;
  description: string;
  count?: string;
}) {
  return (
    <div className="relative left-1/2 mb-6 w-screen -translate-x-1/2 bg-white px-4 py-6 text-[#142b45] sm:mb-10 sm:px-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a77d32] sm:mb-2 sm:text-xs sm:tracking-[0.22em]">
          {eyebrow}
        </p>

        <h3 className="text-lg font-extrabold sm:text-3xl">
          {title}
        </h3>

        <div className="my-2 h-1 w-10 rounded-full bg-[#c9a45c] sm:my-4 sm:w-14" />

        <p className="max-w-3xl text-xs leading-5 text-[#526174] sm:text-sm sm:leading-7 lg:text-base">
          {description}
        </p>

        {count && (
          <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#a77d32]">
            {count}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#142b45] text-white">

      
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#142b45] text-white">
        <div className="relative min-h-[320px] w-full sm:min-h-[600px] lg:min-h-[700px]">

          {/* VIMEO VIDEO */}
          <iframe
            src="https://player.vimeo.com/video/1245373976?title=0&byline=0&portrait=0"
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title="Aga'azian National Movement – About"
          />

          {/* DARK OVERLAY */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#142b45]/65 via-[#142b45]/30 to-[#142b45]/75" />

          {/* HERO TITLE */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-3 pb-8 text-center sm:px-5 sm:pb-16">
            <div className="max-w-5xl">
              <h1 className="text-2xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                Aga'azian National Movement
              </h1>

              <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#c9a45c]" />
            </div>
          </div>

        </div>
      </section>


      {/* WHO WE ARE */}
      <section
        id="who-we-are"
        className="bg-[#142b45] px-3 py-9 text-white sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-12">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              Who We Are
            </h2>

            <div className="mx-auto my-3 h-1 w-10 rounded-full bg-[#c9a45c] sm:my-5 sm:w-14" />

            <p className="text-xs font-semibold leading-6 text-white/85 sm:text-lg sm:leading-8">
              The Aga'azian National Movement (ANM) is a national
              political movement of the Tigrinya nation, committed
              to direct democracy, national self-determination,
              and a prosperous future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {[
              {
                title: "Nation",
                description:
                  "Preserving our history, Ge'ez language, culture, and Orit heritage.",
              },
              {
                title: "Direct Democracy",
                description:
                  "Popular sovereignty and accountable leadership.",
              },
              {
                title: "Economy",
                description:
                  "Enterprise, industrialization and prosperity.",
              },
              {
                title: "Institutions",
                description:
                  "Constitutional government, rule of law and accountability.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-w-0 border border-white/15 bg-[#173653] p-3 transition duration-300 hover:border-[#c9a45c]/70 sm:p-6 lg:p-7"
              >
                <h3 className="mb-2 text-sm font-extrabold leading-snug text-white sm:mb-3 sm:text-lg">
                  {item.title}
                </h3>

                <p className="text-[11px] leading-[1.65] text-white/70 sm:text-sm sm:leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-white/65 sm:mt-10 sm:text-base sm:leading-7">
            ANM carries forward a historical legacy of national
            cultural identity and self-determination, advancing it
            through democratic institutions, economic development,
            modernization, and cultural renewal.
          </p>
        </div>
      </section>

      {/* LEADERSHIP AND ORGANIZATION */}
      <section
        id="leadership-structure"
        className="bg-[#102944] px-3 py-9 text-white sm:px-8 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-14">
            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              Leadership
            </h2>

            <div className="mx-auto my-3 h-1 w-10 rounded-full bg-[#c9a45c] sm:my-5 sm:w-14" />

            <p className="text-xs leading-5 text-white/75 sm:text-sm sm:leading-7 lg:text-base">
              Meet the people entrusted with leading the movement
              and the organizational structures through which ANM
              carries out its responsibilities.
            </p>
          </div>

          {/* CHAIRPERSON */}
          <div className="mx-auto max-w-[230px] sm:max-w-sm">
            <div className="overflow-hidden border border-[#c9a45c]/60 bg-[#173653]">
              <div className="relative aspect-[4/5] w-full">
                {chairperson.image ? (
                  <Image
                    src={chairperson.image}
                    alt={chairperson.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 85vw, 380px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/45">
                    Photograph unavailable
                  </div>
                )}
              </div>

              <div className="p-3 text-center sm:p-6">
                <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#c9a45c] sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
                  Chairperson
                </p>

                <h3 className="text-sm font-extrabold text-white sm:text-xl">
                  {chairperson.name}
                </h3>

                <p className="mt-1 text-[10px] text-white/65 sm:mt-2 sm:text-sm">
                  {chairperson.position}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto my-6 h-8 w-px bg-[#c9a45c] sm:my-10 sm:h-12" />

          {/* NATIONAL EXECUTIVE COUNCIL */}
          <div className="mb-10 sm:mb-20">
            <div className="mb-5 text-center sm:mb-9">
              <h3 className="text-lg font-extrabold sm:text-3xl">
                ANM National Executive Council
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-white/65 sm:mt-3 sm:text-sm sm:leading-7">
                The executive leadership responsible for coordinating
                the movement's national direction and principal areas
                of responsibility.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {nationalLeadership.map((leader) => (
                <div
                  key={leader.name}
                  className="min-w-0 overflow-hidden border border-white/15 bg-[#173653] transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70"
                >
                  <div className="relative aspect-[4/5]">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#173653] text-white/45">
                        Photograph unavailable
                      </div>
                    )}
                  </div>

                  <div className="min-h-[100px] p-2.5 text-center sm:min-h-[130px] sm:p-5">
                    <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#c9a45c] sm:mb-2 sm:text-[10px] sm:tracking-[0.16em]">
                      Executive Council Member
                    </p>

                    <h4 className="text-xs font-extrabold leading-snug text-white sm:text-base">
                      {leader.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DEPARTMENTS */}
        <section
          id="departments"
          className="scroll-mt-24 pb-9 sm:pb-16"
        >
          <SectionHeading
            eyebrow="Organizational Leadership"
            title="ANM Leadership"
            description="Meet the leaders responsible for coordinating the movement's departments and organizational activities."
          />

          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-3 gap-y-8 px-2 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-14 sm:px-8 lg:grid-cols-4 lg:px-12">
            {departments.map((department) => (
              <article
                key={department.leader}
                className="min-w-0"
              >
                <PersonCard
                  name={department.leader}
                  image={department.image}
                />
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        className="bg-[#142b45] pb-9 text-white sm:pb-20"
      >
        <div className="w-full bg-white px-4 py-7 text-center text-[#142b45] sm:px-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a77d32] sm:text-sm sm:tracking-[0.25em]">
              Our Work
            </p>

            <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
              What We Do
            </h2>

            <div className="mx-auto my-3 h-1 w-10 rounded-full bg-[#c9a45c] sm:my-5 sm:w-14" />

            <p className="mx-auto max-w-3xl text-xs leading-6 text-[#526174] sm:text-base sm:leading-7">
              ANM works to prepare, organize, advocate and develop
              the ideas, policies and institutional foundations
              needed for a democratic future.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-3 pt-7 sm:px-8 sm:pt-14 lg:px-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.number}
                className="min-w-0 border border-white/15 bg-[#173653] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70 sm:p-6 lg:p-8"
              >
                <span className="text-2xl font-extrabold text-[#c9a45c] sm:text-3xl">
                  {activity.number}
                </span>

                <h3 className="mt-2 text-sm font-extrabold leading-snug text-white sm:mt-4 sm:text-xl">
                  {activity.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/70 sm:mt-3 sm:text-sm sm:leading-7">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE SEPARATION BEFORE FOOTER */}
      <div className="h-6 w-full bg-white sm:h-10" />

    </main>
  );
}