
import Image from "next/image";

const leaders = [
  {
    name: "Habtom Mehari",
    position: "Chairperson",
    image: "/images/chairperson.png",
  },
  {
    name: "Yehshelu Gebremariam",
    position: "Head of Political Affairs",
    image: "/images/head-of-political-affairs.png",
  },
  {
    name: "Futsum Kidane",
    position: "Head of Media and Communication",
    image: "/images/head-of-media-and-communication.png",
  },
  {
    name: "Daniel Temelso",
    position: "secretary-general",
    image: "/images/secretary-general.png",
  },
  {
    name: "Asmerom Asmelash",
    position: "Head of External Relations",
    image: "/images/head-of-external-relations.png",
  },
];

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

const visionPillars = [
  {
    number: "01",
    title: "National Self-Determination",
    description:
      "Recognizing the Tigrinya nation's right to determine its political future and exercise national sovereignty.",
  },
  {
    number: "02",
    title: "Democratic Governance",
    description:
      "Building a constitutional system grounded in direct democracy, political freedom, accountability and the rule of law.",
  },
  {
    number: "03",
    title: "Economic Prosperity",
    description:
      "Creating opportunities through free enterprise, industrialization, innovation and sustainable development.",
  },
  {
    number: "04",
    title: "Cultural Renaissance",
    description:
      "Preserving our cultural identity, history, Ge'ez language, traditions and Orit heritage.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">

      {/* =====================================================
          HERO — FULL-WIDTH VIDEO WITH TITLE OVERLAY
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-[#142b45] text-white">

        <div className="relative min-h-[500px] w-full sm:min-h-[600px] lg:min-h-[700px]">

          {/* BACKGROUND VIDEO */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/images/anm-activities-poster.jpg"
          >
            <source
              src="/videos/anm-activities.mp4"
              type="video/mp4"
            />
            Your browser does not support the video element.
          </video>

          {/* DARK OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#142b45]/65 via-[#142b45]/30 to-[#142b45]/75" />

          {/* HERO TEXT */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 pb-16 text-center">
            <div className="max-w-5xl">

              <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                Aga'azian National Movement
              </h1>

              <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#c9a45c]" />

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 1 — WHO WE ARE
      ===================================================== */}
      <section
        id="who-we-are"
        className="bg-white px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Who We Are
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-base font-semibold leading-8 text-[#142b45] sm:text-lg">
              The Aga'azian National Movement (ANM) is a national
              political movement of the Tigrinya nation, committed
              to direct democracy, national self-determination,
              and a prosperous future.
            </p>

          </div>

          {/* FOUR PRINCIPLES */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                Cultural Renaissance
              </h3>

              <p className="text-sm leading-7 text-[#526174]">
                Preserving our history, Ge'ez language, culture,
                and Orit heritage.
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                Direct Democracy
              </h3>

              <p className="text-sm leading-7 text-[#526174]">
                Accountable leadership, constitutional government,
                and the rule of law.
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                Economic Prosperity
              </h3>

              <p className="text-sm leading-7 text-[#526174]">
                Free enterprise, industrialization, innovation,
                and national development.
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                National Sovereignty
              </h3>

              <p className="text-sm leading-7 text-[#526174]">
                Recognizing the Tigrinya nation's right to
                self-determination, independence, and to shape
                its own political future.
              </p>
            </div>

          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#526174] sm:text-base">
            ANM carries forward a historical legacy of national
            cultural identity and self-determination, advancing it
            through democratic institutions, economic development,
            modernization, and cultural renewal.
          </p>

          
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — LEADERSHIP & STRUCTURE
          FULL NAVY LEADERSHIP BACKGROUND
      ===================================================== */}
      <section
        id="leadership-structure"
        className="bg-[#102944] px-5 py-16 text-white sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              02 — Our Organization
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Leadership & Structure
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-sm leading-7 text-white/75 sm:text-base">
              Meet the people entrusted with leading the movement
              and understand the organizational framework through
              which ANM carries out its responsibilities.
            </p>

          </div>

          {/* LEADERSHIP PROFILES */}
          <div className="mb-16">

            <div className="mb-7 flex items-center justify-between">

              <h3 className="text-2xl font-extrabold">
                Our Leadership
              </h3>

              <span className="hidden text-sm text-white/50 sm:block">
                Five leadership profiles
              </span>

            </div>

            {/* MOBILE — HORIZONTAL SWIPE */}
            <div className="sm:hidden">

              <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                {leaders.map((leader, index) => (
                  <div
                    key={leader.name}
                    className="w-[82%] flex-none snap-center overflow-hidden rounded-xl border border-white/15 bg-[#173653]"
                  >

                    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#173653]">

                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="82vw"
                        className="object-cover"
                      />

                    </div>

                    <div className="min-h-[145px] p-5">

                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h4 className="font-extrabold text-white">
                        {leader.name}
                      </h4>

                      <p className="mt-1 text-sm text-[#d4b574]">
                        {leader.position}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-white/60">
                        Official leadership profile and biography.
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              <p className="mt-2 text-center text-xs tracking-wide text-white/50">
                Swipe left or right to view all five leaders
              </p>

            </div>

            {/* DESKTOP — THREE-COLUMN GRID */}
            <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">

              {leaders.map((leader, index) => (
                <div
                  key={leader.name}
                  className="overflow-hidden rounded-xl border border-white/15 bg-[#173653] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/60 hover:shadow-xl hover:shadow-black/20"
                >

                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#173653]">

                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />

                  </div>

                  <div className="min-h-[145px] p-5">

                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h4 className="font-extrabold text-white">
                      {leader.name}
                    </h4>

                    <p className="mt-1 text-sm text-[#d4b574]">
                      {leader.position}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-white/60">
                      Official leadership profile and biography.
                    </p>

                  </div>

                </div>
              ))}

            </div>

            <p className="mt-6 text-center text-xs leading-6 text-white/50">
              Leadership names, photographs, positions and biographies
              will be presented using officially approved information.
            </p>

          </div>

        </div>

        {/* =====================================================
            ORGANIZATIONAL STRUCTURE
            FULL-WIDTH WHITE BACKGROUND
        ===================================================== */}
        <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white px-5 py-16 text-[#142b45] sm:px-8 lg:px-12">

          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                How We Are Organized
              </p>

              <h3 className="text-2xl font-extrabold sm:text-3xl">
                Organizational Structure
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526174]">
                An organizational framework designed to coordinate
                leadership, responsibilities, committees and
                regional participation.
              </p>

            </div>

            <div className="mx-auto max-w-4xl">

              <div className="mx-auto max-w-sm rounded-xl bg-[#142b45] p-5 text-center text-white">

                <p className="text-xs font-bold uppercase tracking-wider text-[#c9a45c]">
                  National Level
                </p>

                <h4 className="mt-1 text-lg font-extrabold">
                  National Leadership
                </h4>

              </div>

              <div className="mx-auto h-10 w-px bg-[#c9a45c]" />

              <div className="grid gap-4 sm:grid-cols-3">

                {[
                  {
                    title: "Departments",
                    description:
                      "Specialized areas of responsibility and administration.",
                  },
                  {
                    title: "Committees",
                    description:
                      "Coordination, oversight and focused working groups.",
                  },
                  {
                    title: "Regional Branches",
                    description:
                      "Regional organization and coordination.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border-2 border-[#e5e1d8] p-5 text-center"
                  >

                    <h4 className="font-extrabold text-[#142b45]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-[#526174]">
                      {item.description}
                    </p>

                  </div>
                ))}

              </div>

              <div className="mx-auto h-10 w-px bg-[#c9a45c]" />

              <div className="mx-auto max-w-lg rounded-xl border-2 border-[#c9a45c] bg-[#faf9f6] p-5 text-center">

                <h4 className="font-extrabold">
                  Local Chapters & Members
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#526174]">
                  Community participation, local engagement and
                  grassroots organization.
                </p>

              </div>

            </div>

            <p className="mt-8 text-center text-xs text-[#7a8490]">
              Illustrative organizational framework. The final chart
              will reflect ANM's approved structure and actual positions.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SECTION 3 — WHAT WE DO
      ===================================================== */}
      <section
        id="what-we-do"
        className="bg-[#142b45] px-5 py-16 text-white sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              03 — Our Work
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              What We Do
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <div className="mx-auto my-8 h-px w-full max-w-5xl bg-white/70" />

            <p className="text-sm leading-7 text-white/70 sm:text-base">
              ANM works to prepare, organize, advocate and develop
              the ideas, policies and institutional foundations
              needed for a democratic future.
            </p>

          </div>

          {/* FIVE AREAS OF WORK */}
          <div className="grid gap-5 md:grid-cols-2">

            {activities.map((activity) => (
              <div
                key={activity.number}
                className="group rounded-xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70 hover:bg-white/10 sm:p-8"
              >

                <span className="text-3xl font-extrabold text-[#c9a45c]">
                  {activity.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {activity.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHITE SEPARATION BEFORE FOOTER */}
      <div className="h-10 w-full bg-white" />

    </main>
  );
}
