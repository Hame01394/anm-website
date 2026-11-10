"use client";

import { useState } from "react";

/* =========================================================
   TYPES
========================================================= */

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Person = {
  name: string;
  description: string;
  image: string;
};

type Category = {
  id: string;
  title: string;
  subtopics: string[];
};

/* =========================================================
   ARCHITECTURE OF POWER DATA
========================================================= */

const groups: Record<GroupId, Person[]> = {
  dictator: [
    {
      name: "Isaias Afwerki",
      description:
        "The central figure exercising personal control over the government and its institutions.",
      image: "/images/isaias-afwerki-1.png",
    },
    {
      name: "Saba Haile",
      description:
        "Wife of Isaias Afwerki and a member of the family circle surrounding the president.",
      image: "/images/wife.png",
    },
    {
      name: "Abraham Afewerki",
      description:
        "Son of Isaias Afwerki and a member of the presidential family.",
      image: "/images/son.png",
    },
  ],

  military: [
    {
      name: "Filipos Weldehyones",
      description: "Chief of Staff of the Eritrean Defence Forces.",
      image: "/images/military-filios-woldeyohannes.png",
    },
    {
      name: "Tekle Kiflay (Manjus)",
      description: "Senior military commander.",
      image: "/images/military-tekle-manjus.png",
    },
    {
      name: "Teklai Habteselasie",
      description: "Senior military associate within the command structure.",
      image: "/images/military-teklai-habteselasie.png",
    },
  ],

  security: [
    {
      name: "Abraha Kassa Nemariam",
      description: "Head of National Security.",
      image: "/images/security-abraha-kassa.png",
    },
    {
      name: "Weldezghi Bbahta",
      description: "Senior official within the national security apparatus.",
      image: "/images/security-col-weldezghi-bahta.png",
    },
    {
      name: "Ggaim Tesfamichael",
      description: "Senior official within the national security apparatus.",
      image: "/images/security-col-gaim-tesfamichael.png",
    },
  ],

  loyalists: [
    {
      name: "Yemane Gebreab",
      description: "Head of political affairs of the PFDJ.",
      image: "/images/political-yemane-gebreab.png",
    },
    {
      name: "Yemane Gebremeskel",
      description: "Minister of Information.",
      image: "/images/political-yemane-gebremeskel.png",
    },
    {
      name: "Hagos Ghebrehiwot",
      description: "Head of economic affairs of the PFDJ.",
      image: "/images/political-hagos-gebrehiwot.png",
    },
  ],
};

const circleLabels: Record<GroupId, string> = {
  dictator: "Dictator and Family",
  military: "Military Commanders",
  security: "Security Apparatus",
  loyalists: "Political Loyalists",
};

const groupDescriptions: Record<GroupId, string> = {
  dictator: "The Dictator and Family",
  military: "Senior Military Commanders",
  security: "Senior Security Officials",
  loyalists: "Senior Political Loyalists",
};

/* =========================================================
   DESTRUCTION OF ERITREA DATA
========================================================= */

const categories: Category[] = [
  {
    id: "social",
    title: "Social Destruction",
    subtopics: [
      "Demographic Decline",
      "Family Disintegration",
      "Village Disintegration",
      "Loss of Human Capital",
    ],
  },
  {
    id: "economic",
    title: "Economic Destruction",
    subtopics: [
      "Neglected Infrastructure",
      "Water and Electricity",
      "Transportation",
      "Tourism",
      "Economic Stagnation",
      "Dependence on Remittances and Mining",
    ],
  },
  {
    id: "military",
    title: "Military Destruction",
    subtopics: [
      "Indefinite National Service",
      "Outdated Military",
      "Ageing Leadership",
      "Lack of Professional Development",
      "Inadequate Salaries and Pensions",
      "Militarised Society",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Destruction",
    subtopics: [
      "Mining Damage",
      "Land Degradation",
      "Water Depletion",
      "Pollution",
      "Biodiversity Loss",
      "Climate Vulnerability",
      "Environmental Neglect",
    ],
  },
  {
    id: "rights",
    title: "Human Rights Abuses",
    subtopics: [
      "Arbitrary Detention",
      "Enforced Disappearances",
      "Torture",
      "Political Imprisonment",
      "Religious Persecution",
      "Forced Labour",
      "Suppression of Freedoms",
      "Absence of Justice",
    ],
  },
];

/* =========================================================
   PORTRAIT COMPONENT
========================================================= */

function Portrait({
  person,
  featured = false,
}: {
  person: Person;
  featured?: boolean;
}) {
  return (
    <article
      className={`aop-person ${
        featured ? "aop-person-featured" : ""
      }`}
    >
      <div className="aop-photo">
        <img src={person.image} alt={person.name} />
      </div>

      <h3>{person.name}</h3>
      <p>{person.description}</p>
    </article>
  );
}

/* =========================================================
   CIRCLE COMPONENT
========================================================= */

function Circle({
  group,
  active,
  onActivate,
  onHover,
}: {
  group: GroupId;
  active: boolean;
  onActivate: () => void;
  onHover: (group: GroupId) => void;
}) {
  return (
    <button
      type="button"
      className={`aop-circle aop-${group} ${
        active ? "is-active" : ""
      }`}
      onMouseEnter={() => onHover(group)}
      onClick={onActivate}
      aria-pressed={active}
      aria-label={`Explore ${circleLabels[group]}`}
    >
      <span>{circleLabels[group]}</span>
    </button>
  );
}

/* =========================================================
   MAIN DICTATORSHIP PAGE
========================================================= */

export default function DictatorshipPage() {
  /* Hero video */

  

  /* Architecture of Power */

  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);

  const activate = (group: GroupId) => {
    setActiveGroup((current) =>
      current === group ? null : group
    );
  };

  const handleMouseEnter = (group: GroupId) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveGroup(group);
    }
  };

  /* Destruction of Eritrea */

  const [activeCategory, setActiveCategory] = useState<string | null>(
    null
  );

  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <main className="w-full overflow-hidden">
      {/* =====================================================
          SECTION 1 — HERO
      ===================================================== */}

      

{/* =====================================================
    SECTION 1 — HERO: DICTATORSHIP DOCUMENTARY
===================================================== */}

<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#101f35] text-white">

  {/* VIMEO VIDEO BACKGROUND */}

  <div className="absolute inset-0 overflow-hidden">

    <iframe
      src="https://player.vimeo.com/video/1245387887?autoplay=1&muted=1&loop=1&controls=1&title=0&byline=0&portrait=0&playsinline=1"
      title="The Reality of Dictatorship — Eritrea"
      className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
      allowFullScreen
    />

  </div>

  {/* DARK OVERLAY */}

  <div className="pointer-events-none absolute inset-0 bg-[#101f35]/70" />

  {/* HERO CONTENT */}

  <div className="pointer-events-none relative z-10 mx-auto max-w-6xl px-6 text-center">

    <div className="mx-auto mt-8 h-1 w-24 bg-white" />

  </div>

</section>



      {/* =====================================================
          SECTION 2 — ARCHITECTURE OF POWER
      ===================================================== */}

      <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
          Dictator Isaias Afwerki
        </p>

        <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-black md:text-5xl">
          ONE-MAN RULE
        </h2>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
      </header>

      <section className="aop-section">
        <div className="aop-heading">
          <h2>THE ARCHITECTURE OF POWER</h2>

          <p>
            Explore the relationships between the central leadership
            and the institutions and individuals surrounding it.
          </p>
        </div>

        <div className="aop-stage">
          <svg
            className="aop-connectors"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="line" d="M500 300 L150 105" />
            <path className="line" d="M500 300 L850 105" />
            <path className="line" d="M500 300 L500 520" />
          </svg>

          <div className="aop-node node-dictator">
            <Circle
              group="dictator"
              active={activeGroup === "dictator"}
              onActivate={() => activate("dictator")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-military">
            <Circle
              group="military"
              active={activeGroup === "military"}
              onActivate={() => activate("military")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-security">
            <Circle
              group="security"
              active={activeGroup === "security"}
              onActivate={() => activate("security")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-loyalists">
            <Circle
              group="loyalists"
              active={activeGroup === "loyalists"}
              onActivate={() => activate("loyalists")}
              onHover={handleMouseEnter}
            />
          </div>
        </div>

        {activeGroup !== null && (
          <div className="aop-details" key={activeGroup}>
            <div className="aop-details-heading">
              <div>
                <p className="aop-eyebrow">GROUP PROFILE</p>

                <h2>{groupDescriptions[activeGroup]}</h2>
              </div>

              <button
                type="button"
                className="aop-reset-button"
                onClick={() => setActiveGroup(null)}
                aria-label="Close group details"
              >
                <span aria-hidden="true">×</span>
                <span>Close</span>
              </button>
            </div>

            <div className="aop-portrait-layout">
              {groups[activeGroup].map((person, index) => (
                <Portrait
                  key={person.name}
                  person={person}
                  featured={
                    activeGroup === "dictator" && index === 1
                  }
                />
              ))}
            </div>
          </div>
        )}

        <div className="aop-instructions">
          {activeGroup
            ? "Select another circle to explore a different group, or use the Close button to hide the details."
            : "Select or hover over a circle to explore the individuals in each group."}
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — DESTRUCTION OF ERITREA
      ===================================================== */}

      <section
        id="destruction-of-eritrea"
        className="w-full bg-white text-[#101f35]"
      >
        <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
            The Consequences of Dictatorship
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-wide md:text-5xl">
            THE DESTRUCTION OF ERITREA
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
        </header>

        <div className="w-full bg-[#101f35] px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {/* Category navigation */}

            <nav
              aria-label="Destruction categories"
              className="mb-10 flex gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible"
            >
              {categories.map((category, index) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => {
                      setActiveCategory(
                        isActive ? null : category.id
                      );
                      setActiveTopic(null);
                    }}
                    className={`min-h-[112px] min-w-[190px] flex-1 border px-5 py-5 text-left transition-colors duration-200 lg:min-w-0 ${
                      isActive
                        ? "border-[#d9bd82] bg-[#d9bd82] text-[#101f35]"
                        : "border-white/35 bg-transparent text-white hover:border-[#d9bd82] hover:bg-white/10"
                    }`}
                  >
                    <span className="mb-3 block text-xs font-bold tracking-[0.2em] opacity-70">
                      0{index + 1}
                    </span>

                    <span className="block text-sm font-extrabold uppercase leading-5">
                      {category.title}
                    </span>

                    <span className="mt-3 block text-xs font-bold">
                      {isActive ? "− CLOSE" : "+ EXPLORE"}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Selected category */}

            {selectedCategory && (
              <div className="border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7940]">
                      Explore the impact
                    </p>

                    <h3 className="text-2xl font-black uppercase md:text-3xl">
                      {selectedCategory.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(null);
                      setActiveTopic(null);
                    }}
                    className="border border-[#101f35]/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101f35] transition hover:border-[#9b7940] hover:text-[#9b7940]"
                  >
                    Close section ×
                  </button>
                </div>

                {/* Subtopics */}

                <div className="grid gap-3 md:grid-cols-2">
                  {selectedCategory.subtopics.map((topic, index) => {
                    const isSelected = activeTopic === topic;

                    return (
                      <button
                        key={topic}
                        type="button"
                        aria-expanded={isSelected}
                        onClick={() =>
                          setActiveTopic(
                            isSelected ? null : topic
                          )
                        }
                        className={`flex items-center justify-between gap-4 border px-5 py-5 text-left transition duration-200 ${
                          isSelected
                            ? "border-[#c9a45c] bg-[#f8f5ed] text-[#101f35]"
                            : "border-[#e3ddcf] bg-white text-[#101f35] hover:border-[#c9a45c] hover:bg-[#fcfaf5]"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-sm font-bold text-[#9b7940]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-bold uppercase tracking-wide">
                            {topic}
                          </span>
                        </span>

                        <span className="text-xl text-[#9b7940]">
                          {isSelected ? "−" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Topic details */}

                {activeTopic && (
                  <article
                    className="mt-8 border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9"
                    aria-live="polite"
                  >
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7940]">
                      {selectedCategory.title}
                    </p>

                    <h4 className="mb-6 text-xl font-black uppercase md:text-2xl">
                      {activeTopic}
                    </h4>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b7940]">
                          Explanation and evidence
                        </h5>

                        <p className="text-sm leading-8 text-slate-600">
                          Research, verified evidence and a detailed
                          explanation of {activeTopic.toLowerCase()}{" "}
                          will be presented here.
                        </p>

                        <p className="mt-5 text-sm leading-8 text-slate-600">
                          This section is reserved for documented
                          facts, relevant statistics, firsthand
                          testimonies and references to credible
                          supporting reports.
                        </p>
                      </div>

                      <div className="border-t border-[#e3ddcf] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b7940]">
                          Supporting material
                        </h5>

                        <ul className="space-y-3 text-sm text-slate-600">
                          <li>• Relevant photographs</li>
                          <li>• Verified statistics and data</li>
                          <li>• Testimonies and personal accounts</li>
                          <li>• Supporting reports and source links</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — FINAL RELATIONSHIP DIAGRAM
      ===================================================== */}

      <section
        id="relationship-between-sections"
        className="relationship-section"
      >
        <div className="relationship-container">
          <div className="relationship-heading">
            <p>UNDERSTANDING THE SYSTEM</p>

            <h2>
              FROM ONE-MAN RULE
              <span>TO NATIONAL DESTRUCTION</span>
            </h2>

            <div className="relationship-divider" />

            <p className="relationship-intro">
              The concentration of political power explains how the
              dictatorship maintains control. Its consequences reveal
              what that system does to the country.
            </p>
          </div>

          <div className="relationship-diagram">
            {/* One-man rule */}

            <div className="relationship-block">
              <div className="relationship-main">
                <span className="relationship-number">01</span>

                <h3>ONE-MAN RULE</h3>

                <p className="relationship-subtitle">
                  Concentration of Political Power
                </p>
              </div>

              <div className="relationship-detail">
                <span className="relationship-detail-label">
                  POWER STRUCTURE
                </span>

                <h4>Architecture of Power</h4>

                <p>
                  Military <span>·</span> Security <span>·</span>{" "}
                  Political Loyalists
                </p>
              </div>

              <div className="relationship-detail relationship-breakdown">
                <span className="relationship-detail-label">
                  INSTITUTIONAL CONSEQUENCE
                </span>

                <h4>Institutional Breakdown</h4>

                <p>
                  No independent accountability or effective checks
                  on power.
                </p>
              </div>
            </div>

            {/* Connecting arrow */}

            <div className="relationship-connector">
              <div className="relationship-line" />

              <div className="relationship-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span>CONSEQUENCES</span>
            </div>

            {/* Destruction of Eritrea */}

            <div className="relationship-block relationship-destruction">
              <div className="relationship-main">
                <span className="relationship-number">02</span>

                <h3>THE DESTRUCTION OF ERITREA</h3>

                <p className="relationship-subtitle">
                  The Consequences for the Nation
                </p>
              </div>

              <div className="relationship-detail relationship-impact">
                <span className="relationship-detail-label">
                  NATIONAL IMPACT
                </span>

                <div className="relationship-impact-list">
                  <span>Social</span>
                  <span>Economic</span>
                  <span>Military</span>
                  <span>Environmental</span>
                  <span>Human Rights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}

          <div className="relationship-conclusion">
            <p>
              FROM THE CONCENTRATION OF POWER TO THE DESTRUCTION OF A
              NATION.
            </p>

            <h3>
              Understanding the system means understanding its
              consequences.
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL STYLES
      ===================================================== */}

      <style jsx global>{`
        /* ARCHITECTURE OF POWER */

        .aop-section {
          width: 100%;
          padding: 65px 24px 75px;
          background: #10263d;
          color: #ffffff;
          overflow: hidden;
        }

        .aop-heading {
          max-width: 850px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .aop-heading h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
        }

        .aop-heading p {
          margin: 0;
          color: #cbd5df;
          font-size: 16px;
          line-height: 1.9;
        }

        .aop-stage {
          position: relative;
          width: 100%;
          max-width: 1150px;
          height: 600px;
          margin: 0 auto;
          isolation: isolate;
        }

        .aop-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .aop-connectors .line {
          fill: none;
          stroke: #c6a45c;
          stroke-width: 2;
          opacity: 0.75;
        }

        .aop-node {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-dictator {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .node-military {
          left: 7%;
          top: 7%;
        }

        .node-security {
          right: 7%;
          top: 7%;
        }

        .node-loyalists {
          left: 50%;
          bottom: 3%;
          transform: translateX(-50%);
        }

        .aop-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 145px;
          height: 145px;
          padding: 18px;
          border: 2px solid #c6a45c;
          border-radius: 50%;
          background: #ffffff;
          color: #10263d;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .aop-circle span {
          max-width: 115px;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.6;
        }

        .aop-circle:hover,
        .aop-circle.is-active {
          background: #ffffff;
          border-color: #e4c47c;
          color: #10263d;
          box-shadow: 0 0 0 8px rgba(198, 164, 92, 0.18);
        }

        .aop-circle:focus-visible {
          outline: 3px solid #ffffff;
          outline-offset: 5px;
        }

        .aop-details {
          width: 100%;
          max-width: 1050px;
          margin: 10px auto 0;
          padding: 30px;
          border-top: 1px solid rgba(198, 164, 92, 0.65);
          animation: aopAppear 0.4s ease both;
        }

        .aop-details-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .aop-eyebrow {
          margin: 0 0 8px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .aop-details-heading h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
        }

        .aop-portrait-layout {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: start;
          gap: clamp(16px, 3vw, 45px);
        }

        .aop-person {
          min-width: 0;
          max-width: 245px;
          margin: 0 auto;
          text-align: center;
          color: #ffffff;
        }

        .aop-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 2px solid #c6a45c;
          border-radius: 5px;
          background: #1c3b55;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
        }

        .aop-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .aop-person h3 {
          margin: 13px 0 7px;
          color: #e4c47c;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .aop-person p {
          margin: 0 auto;
          max-width: 245px;
          color: #d2dbe3;
          font-size: 13px;
          line-height: 1.9;
        }

        .aop-person-featured {
          transform: translateY(-10px);
        }

        .aop-person-featured .aop-photo {
          border-width: 3px;
          border-color: #e4c47c;
        }

        .aop-reset-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 42px;
          padding: 9px 17px;
          border: 1px solid rgba(228, 196, 124, 0.75);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .aop-reset-button:hover {
          background: #c6a45c;
          color: #10263d;
        }

        .aop-reset-button span:first-child {
          font-family: Arial, sans-serif;
          font-size: 22px;
          line-height: 1;
        }

        .aop-instructions {
          min-height: 24px;
          margin: 25px auto 0;
          color: #bdc9d4;
          text-align: center;
          font-size: 13px;
          line-height: 1.9;
        }

        @keyframes aopAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FINAL RELATIONSHIP DIAGRAM */

        .relationship-section {
          width: 100%;
          padding: 90px 24px;
          background: #101f35;
          color: #ffffff;
        }

        .relationship-container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
        }

        .relationship-heading {
          max-width: 850px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .relationship-heading > p:first-child {
          margin: 0 0 18px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .relationship-heading h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 900;
          line-height: 1.2;
          letter-spacing: 0.035em;
        }

        .relationship-heading h2 span {
          display: block;
          margin-top: 10px;
          color: #e6c987;
        }

        .relationship-divider {
          width: 80px;
          height: 3px;
          margin: 28px auto;
          background: #c6a45c;
        }

        .relationship-intro {
          max-width: 700px;
          margin: 0 auto;
          color: #d2dbe3;
          font-size: 16px;
          line-height: 1.9;
        }

        .relationship-diagram {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
          align-items: center;
          gap: 20px;
        }

        .relationship-block {
          min-width: 0;
          border: 1px solid rgba(198, 164, 92, 0.7);
          background: #142b45;
        }

        .relationship-main {
          position: relative;
          min-height: 190px;
          padding: 35px 25px;
          border-bottom: 1px solid rgba(198, 164, 92, 0.55);
          text-align: center;
        }

        .relationship-number {
          display: block;
          margin-bottom: 15px;
          color: #c6a45c;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .relationship-main h3 {
          margin: 0;
          color: #e6c987;
          font-size: clamp(22px, 2.5vw, 31px);
          font-weight: 900;
          line-height: 1.25;
        }

        .relationship-subtitle {
          margin: 15px 0 0;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.7;
        }

        .relationship-detail {
          padding: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          text-align: center;
        }

        .relationship-detail:last-child {
          border-bottom: 0;
        }

        .relationship-detail-label {
          display: block;
          margin-bottom: 12px;
          color: #c6a45c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .relationship-detail h4 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .relationship-detail p {
          margin: 0;
          color: #d2dbe3;
          font-size: 13px;
          line-height: 1.9;
        }

        .relationship-detail p span {
          color: #e6c987;
          padding: 0 4px;
        }

        .relationship-breakdown {
          background: rgba(0, 0, 0, 0.13);
        }

        .relationship-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #e6c987;
        }

        .relationship-line {
          width: 100%;
          height: 2px;
          background: #c6a45c;
        }

        .relationship-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin-top: -35px;
          border: 1px solid #c6a45c;
          border-radius: 50%;
          background: #101f35;
        }

        .relationship-arrow svg {
          width: 22px;
          height: 22px;
        }

        .relationship-connector > span {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-align: center;
        }

        .relationship-impact {
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .relationship-impact-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
        }

        .relationship-impact-list span {
          padding: 9px 12px;
          border: 1px solid rgba(198, 164, 92, 0.65);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .relationship-conclusion {
          max-width: 900px;
          margin: 65px auto 0;
          padding: 35px 20px 0;
          border-top: 1px solid rgba(198, 164, 92, 0.55);
          text-align: center;
        }

        .relationship-conclusion p {
          margin: 0 0 16px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          line-height: 1.8;
        }

        .relationship-conclusion h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          line-height: 1.6;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .aop-stage {
            height: 540px;
          }

          .aop-circle {
            width: 120px;
            height: 120px;
            padding: 12px;
          }

          .aop-circle span {
            font-size: 13px;
          }

          .aop-details {
            padding: 25px 10px;
          }

          .aop-portrait-layout {
            gap: 16px;
          }

          .aop-person h3 {
            font-size: 14px;
          }

          .aop-person p {
            font-size: 12px;
          }

          .relationship-diagram {
            grid-template-columns: minmax(0, 1fr) 55px minmax(0, 1fr);
            gap: 12px;
          }

          .relationship-main {
            padding: 28px 16px;
          }

          .relationship-detail {
            padding: 20px 14px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .aop-section {
            padding: 45px 15px 50px;
          }

          .aop-heading {
            margin-bottom: 25px;
          }

          .aop-heading p {
            font-size: 14px;
          }

          .aop-stage {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            justify-items: center;
            align-items: center;
            gap: 22px 10px;
            height: auto;
            min-height: 0;
            padding: 15px 0 25px;
          }

          .aop-connectors {
            display: none;
          }

          .aop-node {
            position: static;
            inset: auto;
            transform: none;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .node-dictator,
          .node-military,
          .node-security,
          .node-loyalists {
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            transform: none;
          }

          .aop-circle {
            width: 112px;
            height: 112px;
            padding: 12px;
          }

          .aop-circle span {
            font-size: 12px;
          }

          .aop-details {
            margin-top: 5px;
            padding: 22px 0;
          }

          .aop-details-heading {
            align-items: flex-start;
            margin-bottom: 22px;
          }

          .aop-details-heading h2 {
            font-size: 19px;
            line-height: 1.7;
          }

          .aop-reset-button {
            flex-shrink: 0;
            min-height: 40px;
            padding: 8px 12px;
            font-size: 11px;
          }

          .aop-portrait-layout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 9px;
          }

          .aop-person {
            width: 100%;
            max-width: none;
          }

          .aop-photo {
            aspect-ratio: 3 / 4;
          }

          .aop-person h3 {
            margin-top: 9px;
            font-size: 11px;
            line-height: 1.6;
            overflow-wrap: anywhere;
          }

          .aop-person p {
            font-size: 10px;
            line-height: 1.7;
            overflow-wrap: anywhere;
          }

          .aop-person-featured {
            transform: none;
          }

          .aop-instructions {
            font-size: 12px;
            line-height: 1.8;
            padding: 0 8px;
          }

          .relationship-section {
            padding: 60px 17px;
          }

          .relationship-heading {
            margin-bottom: 40px;
          }

          .relationship-intro {
            font-size: 14px;
          }

          .relationship-diagram {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .relationship-main {
            min-height: 155px;
            padding: 25px 16px;
          }

          .relationship-main h3 {
            font-size: 24px;
          }

          .relationship-detail {
            padding: 22px 15px;
          }

          .relationship-connector {
            min-height: 70px;
            gap: 7px;
          }

          .relationship-line {
            width: 2px;
            height: 24px;
          }

          .relationship-arrow {
            width: 42px;
            height: 42px;
            margin-top: -2px;
            transform: rotate(90deg);
          }

          .relationship-connector > span {
            font-size: 9px;
          }

          .relationship-impact {
            min-height: 150px;
          }

          .relationship-conclusion {
            margin-top: 45px;
            padding: 28px 5px 0;
          }

          .relationship-conclusion p {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aop-section *,
          .aop-section *::before,
          .aop-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}