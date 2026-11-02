
"use client";

import { useState } from "react";

const sections = [
  {
    number: "01",
    id: "tigrinya-national-question",
    symbol: "◈",
    title: "The Tigrinya National Question",
    subtitle: "Identity, homeland and self-determination",
    description:
      "Address the historical identity, national aspirations and political future of the Tigrinya people. Explore the ANM's position on national self-determination, historical homeland, and the relationship between Tigrinya communities in Eritrea and Tigray.",
    topics: [
      "Indigenous identity and historical homeland",
      "National self-determination",
      "Political future and democratic choice",
      "Historical and cultural connections with Tigray",
      "Cross-border relations and regional cooperation",
      "Peace, borders and mutual recognition",
    ],
    principle:
      "The Tigrinya people must have a meaningful democratic voice in determining their national and political future.",
  },
  {
    number: "02",
    id: "minority-rights",
    symbol: "◇",
    title: "Minority Rights & Protections",
    subtitle: "Equality, dignity and fundamental freedoms",
    description:
      "Set out the rights and protections of all minority communities. A political future based on self-determination must also address equality, individual freedoms, cultural protection and meaningful political participation.",
    topics: [
      "Equal human and civil rights",
      "Social, economic and political participation",
      "Religious freedom and cultural protection",
      "Language and educational rights",
      "Fair representation in public institutions",
      "Protection against discrimination",
    ],
    principle:
      "Every person and community must enjoy equal fundamental rights, dignity and protection under the law.",
  },
  {
    number: "03",
    id: "veterans-martyrs-wounded",
    symbol: "✧",
    title: "Veterans, Martyrs & Wounded",
    subtitle: "Recognition, care and social responsibility",
    description:
      "Address the responsibilities owed to veterans, wounded people, families of martyrs and all those who made sacrifices during the country's struggle. Recognition must be accompanied by practical and lasting support.",
    topics: [
      "Recognition and national remembrance",
      "Healthcare and rehabilitation",
      "Pensions and financial support",
      "Housing and social protection",
      "Support for families of martyrs",
      "Education, employment and reintegration",
    ],
    principle:
      "Those who sacrificed and their families deserve dignity, recognition and sustained social support.",
  },
  {
    number: "04",
    id: "environment-natural-resources",
    symbol: "❋",
    title: "Environment & Natural Resources",
    subtitle: "Protecting the land and securing the future",
    description:
      "Explore the responsible protection and management of Eritrea's land, water, coastline, biodiversity and natural resources. Environmental policy must support sustainable livelihoods and future generations.",
    topics: [
      "Land and soil conservation",
      "Water security and management",
      "Agriculture and food sustainability",
      "Coastal and marine protection",
      "Biodiversity and environmental restoration",
      "Climate resilience and renewable energy",
    ],
    principle:
      "Natural resources must be protected and managed responsibly for present and future generations.",
  },
  {
    number: "05",
    id: "economic-transformation",
    symbol: "▧",
    title: "Economic Transformation",
    subtitle: "Opportunity, productivity and prosperity",
    description:
      "Set out a vision for a productive and sustainable economy that creates opportunities, supports enterprise and improves living standards. Economic development should be connected to education, infrastructure and responsible investment.",
    topics: [
      "Agriculture and food security",
      "Industry and manufacturing",
      "Trade, ports and infrastructure",
      "Energy and technological development",
      "Private enterprise and investment",
      "Education, skills and employment",
    ],
    principle:
      "Economic development must create opportunity, strengthen productive capacity and improve the quality of life.",
  },
  {
    number: "06",
    id: "regional-global-strategy",
    symbol: "◎",
    title: "Regional & Global Strategy",
    subtitle: "Geopolitics, partnerships and the ANM's role",
    description:
      "Examine the forces shaping the Horn of Africa, the Red Sea, the Middle East and the wider international order. Define the ANM's proposed approach to regional security, strategic partnerships, diplomacy and global competition.",
    topics: [
      "Iran and Turkey: regional ambitions and proxy influence",
      "Sudan, Yemen, Somalia and Ethiopia: regional fragmentation and instability",
      "Israel: strategic partnership and regional cooperation",
      "United States and China: global competition and the ANM's international role",
    ],
    principle:
      "The ANM's regional and international approach should be guided by sovereignty, national interests, peaceful cooperation and strategic independence.",
    subtopics: [
      {
        title: "Iran & Turkey",
        subtitle: "Regional ambitions and proxy influence",
        description:
          "Examine the regional strategies of Iran and Turkey, their political, military and economic influence, relationships with non-state actors, and implications for the Horn of Africa and Red Sea.",
        points: [
          "Regional political and military influence",
          "Proxy networks and armed non-state actors",
          "Strategic presence in the Red Sea and Horn of Africa",
          "Implications for Eritrean sovereignty and regional security",
        ],
      },
      {
        title: "Sudan, Yemen, Somalia & Ethiopia",
        subtitle: "Regional fragmentation and instability",
        description:
          "Examine conflicts, political divisions, institutional challenges and external involvement in neighbouring countries, and consider their consequences for Eritrea and the wider region.",
        points: [
          "Sudan: conflict, state fragmentation and competing interests",
          "Yemen: conflict and the strategic importance of Bab el-Mandeb",
          "Somalia: state-building, political divisions and security",
          "Ethiopia: internal conflicts and regional tensions",
          "Border security, trade and population displacement",
        ],
      },
      {
        title: "Israel",
        subtitle: "Strategic partnership and regional cooperation",
        description:
          "Explore the ANM's proposed strategic relationship with Israel, including diplomatic engagement, economic cooperation, technology and shared interests in regional stability.",
        points: [
          "Diplomatic and strategic relations",
          "Red Sea and maritime security",
          "Agriculture, water management and technology",
          "Trade, investment, education and innovation",
          "Regional dialogue and cooperation",
        ],
      },
      {
        title: "United States & China",
        subtitle: "Global competition and international positioning",
        description:
          "Assess the influence of global powers in the Horn of Africa and Red Sea, including competition over trade, infrastructure, ports, investment and maritime routes. Define an approach to international partnerships based on national interests.",
        points: [
          "U.S.–China geopolitical and economic competition",
          "Foreign military presence and strategic infrastructure",
          "Ports, maritime routes and international trade",
          "Relations with global powers and institutions",
          "The ANM's diplomatic and international role",
        ],
      },
    ],
  },
];

export default function NationalQuestionPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">

      {/* HERO */}
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-[#091725] px-6 py-24 text-center text-white md:min-h-[78svh]">

        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#c9a45c]/50" />
          <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#c9a45c]/40" />
          <div className="absolute -right-48 -bottom-64 h-[650px] w-[650px] rounded-full border border-[#c9a45c]/50" />
          <div className="absolute -right-20 -bottom-40 h-[450px] w-[450px] rounded-full border border-[#c9a45c]/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#091725]/30 via-transparent to-[#091725]" />

        <div className="relative z-10 mx-auto max-w-5xl">

          <p className="mb-7 text-xs font-bold uppercase tracking-[0.4em] text-[#d5b46b] md:text-sm">
            Aga'azian National Movement
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl">
            The National
            <span className="mt-2 block text-[#d5b46b]">Question</span>
          </h1>

          <div className="mx-auto mt-8 h-1 w-24 bg-[#c9a45c]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 md:text-xl">
            Identity, self-determination, equal rights, national
            responsibility, economic transformation and the
            future of our place in the region and the world.
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("national-agenda")}
            className="mt-12 inline-flex items-center gap-3 border border-[#c9a45c] bg-[#c9a45c] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#142b45] transition hover:bg-transparent hover:text-white"
          >
            Explore the National Question
            <span aria-hidden="true">↓</span>
          </button>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              Our National Agenda
            </p>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
              Defining the questions that shape our future.
            </h2>

            <div className="mt-6 h-1 w-16 bg-[#c9a45c]" />

            <p className="mt-7 text-base leading-8 text-[#526176] md:text-lg">
              The National Question brings together the fundamental
              issues concerning the identity, political future, rights,
              responsibilities and development of the Tigrinya people.
              It also addresses the rights of minority communities and
              the relationships that will shape our regional and
              international future.
            </p>
          </div>

          <div className="border-l-4 border-[#c9a45c] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
              The central principle
            </p>

            <p className="mt-5 text-2xl font-bold leading-relaxed text-[#142b45] md:text-3xl">
              A national future built on self-determination, equal
              rights, dignity and responsible development.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#657287]">
              Six interconnected areas provide the framework for
              examining the ANM's national and international agenda.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <section
        id="national-agenda"
        className="scroll-mt-20 border-y border-[#e4dccd] bg-white px-5 py-10 md:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              Explore the agenda
            </p>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
              Six areas. One national future.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="group border border-[#e7e0d3] bg-[#f8f5ed] p-4 text-left transition hover:border-[#c9a45c] hover:bg-[#142b45] hover:text-white"
              >
                <span className="block text-xs font-bold tracking-widest text-[#a77d32] group-hover:text-[#d5b46b]">
                  {section.number}
                </span>

                <span className="mt-3 block text-2xl text-[#c9a45c]">
                  {section.symbol}
                </span>

                <span className="mt-3 block text-sm font-bold leading-snug">
                  {section.title}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* MAIN SIX SECTIONS */}
      <section className="mx-auto max-w-7xl space-y-7 px-5 py-20 md:px-10 md:py-24">

        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
            The six national questions
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            The foundations of our agenda.
          </h2>
        </div>

        {sections.map((section) => {
          const isExpanded = expanded === section.id;

          return (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 overflow-hidden border border-[#ded8ca] bg-white shadow-sm transition duration-300 hover:shadow-md"
            >

              {/* SECTION HEADER */}
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => {
                  setExpanded(isExpanded ? null : section.id);
                  setActiveSubtopic(0);
                }}
                className="group flex w-full flex-col gap-5 border-l-[6px] border-[#c9a45c] bg-[#142b45] p-6 text-left text-white transition hover:bg-[#1b3858] md:flex-row md:items-center md:justify-between md:px-10 md:py-9"
              >

                <div className="flex items-start gap-5 md:items-center">

                  <span className="mt-1 text-3xl text-[#d5b46b] md:text-4xl">
                    {section.symbol}
                  </span>

                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#d5b46b]">
                      NATIONAL QUESTION {section.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/65 md:text-base">
                      {section.subtitle}
                    </p>
                  </div>

                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center self-end border border-[#c9a45c]/60 text-xl text-[#d5b46b] transition group-hover:bg-[#c9a45c] group-hover:text-[#142b45] md:self-center">
                  {isExpanded ? "−" : "+"}
                </span>

              </button>

              {/* EXPANDED CONTENT */}
              {isExpanded && (
                <div className="animate-in fade-in duration-300">

                  <div className="grid gap-10 p-6 md:grid-cols-[1fr_0.85fr] md:p-10">

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                        Overview
                      </p>

                      <p className="mt-4 text-base leading-8 text-[#526176] md:text-lg">
                        {section.description}
                      </p>

                      <div className="mt-8 border-l-4 border-[#c9a45c] bg-[#f8f5ed] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a77d32]">
                          Guiding principle
                        </p>

                        <p className="mt-3 text-lg font-bold leading-8 text-[#142b45]">
                          {section.principle}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                        Key areas of focus
                      </p>

                      <div className="mt-5 space-y-3">
                        {section.topics.map((topic, index) => (
                          <div
                            key={topic}
                            className="flex items-start gap-3 border-b border-[#e9e2d6] pb-3"
                          >
                            <span className="mt-0.5 text-sm font-bold text-[#c9a45c]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-sm font-semibold leading-6 text-[#142b45]">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* REGIONAL STRATEGY SUBSECTIONS */}
                  {section.subtopics && (
                    <div className="border-t border-[#e7e0d3] bg-[#f8f5ed] p-6 md:p-10">

                      <div className="mb-7">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                          Regional and international outlook
                        </p>

                        <h4 className="mt-2 text-2xl font-extrabold">
                          The forces shaping our region and the world.
                        </h4>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {section.subtopics.map((subtopic, index) => (
                          <button
                            key={subtopic.title}
                            type="button"
                            onClick={() => setActiveSubtopic(index)}
                            className={`border p-5 text-left transition ${
                              activeSubtopic === index
                                ? "border-[#c9a45c] bg-[#142b45] text-white"
                                : "border-[#e1d9ca] bg-white text-[#142b45] hover:border-[#c9a45c]"
                            }`}
                          >
                            <span className={`text-xs font-bold tracking-widest ${
                              activeSubtopic === index
                                ? "text-[#d5b46b]"
                                : "text-[#a77d32]"
                            }`}>
                              STRATEGIC AREA 0{index + 1}
                            </span>

                            <span className="mt-3 block text-lg font-bold">
                              {subtopic.title}
                            </span>

                            <span className={`mt-2 block text-sm ${
                              activeSubtopic === index
                                ? "text-white/65"
                                : "text-[#657287]"
                            }`}>
                              {subtopic.subtitle}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* SELECTED STRATEGIC AREA */}
                      <div className="mt-5 border border-[#ded8ca] bg-white p-6 md:p-8">

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                            Selected strategic area
                          </span>

                          <span className="text-xs font-bold text-[#a77d32]">
                            0{activeSubtopic + 1} / 04
                          </span>
                        </div>

                        <h5 className="mt-4 text-2xl font-extrabold">
                          {section.subtopics[activeSubtopic].title}
                        </h5>

                        <p className="mt-4 max-w-4xl text-base leading-8 text-[#526176]">
                          {section.subtopics[activeSubtopic].description}
                        </p>

                        <div className="mt-7 grid gap-3 md:grid-cols-2">
                          {section.subtopics[activeSubtopic].points.map(
                            (point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3 bg-[#f8f5ed] p-4"
                              >
                                <span className="mt-1 text-[#c9a45c]">◆</span>
                                <span className="text-sm font-semibold leading-6 text-[#142b45]">
                                  {point}
                                </span>
                              </div>
                            )
                          )}
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-[#e7e0d3] pt-5">
                          <button
                            type="button"
                            disabled={activeSubtopic === 0}
                            onClick={() =>
                              setActiveSubtopic((current) => current - 1)
                            }
                            className="text-xs font-bold uppercase tracking-widest text-[#142b45] transition hover:text-[#a77d32] disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            ← Previous
                          </button>

                          <button
                            type="button"
                            disabled={activeSubtopic === 3}
                            onClick={() =>
                              setActiveSubtopic((current) => current + 1)
                            }
                            className="text-xs font-bold uppercase tracking-widest text-[#142b45] transition hover:text-[#a77d32] disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            Next →
                          </button>
                        </div>

                      </div>

                    </div>
                  )}

                </div>
              )}

            </article>
          );
        })}

      </section>

      {/* CLOSING STATEMENT */}
      {/* FINAL NATIONAL QUESTION SECTION — SEPARATE FROM FOOTER */}

             
    </main>
  );
}
