
"use client";

import { useState } from "react";

const categories = [
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

export default function DestructionOfEritrea() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section
      id="destruction-of-eritrea"
      className="w-full bg-white text-[#101f35]"
    >
      {/* WHITE SECTION HEADING */}

      <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
          The Consequences of Dictatorship
        </p>

        <h2 className="text-3xl font-black uppercase leading-tight tracking-wide md:text-5xl">
          The Destruction of Eritrea
        </h2>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
      </header>

      {/* INTERACTIVE AREA */}

      <div className="w-full bg-[#101f35] px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* CATEGORY NAVIGATION - ORIGINAL BLUE DESIGN */}

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
                    setActiveCategory(isActive ? null : category.id);
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

          {/* WHITE AREA BELOW CATEGORY NAVIGATION */}

          {selectedCategory && (
            <div className="border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9">

              {/* CATEGORY HEADING */}

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

              {/* SUBTOPICS */}

              <div className="grid gap-3 md:grid-cols-2">
                {selectedCategory.subtopics.map((topic, index) => {
                  const isSelected = activeTopic === topic;

                  return (
                    <button
                      key={topic}
                      type="button"
                      aria-expanded={isSelected}
                      onClick={() =>
                        setActiveTopic(isSelected ? null : topic)
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

              {/* WHITE TOPIC CONTENT PANEL */}

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
                        explanation of {activeTopic.toLowerCase()} will
                        be presented here.
                      </p>

                      <p className="mt-5 text-sm leading-8 text-slate-600">
                        This section is reserved for documented facts,
                        relevant statistics, firsthand testimonies and
                        references to credible supporting reports.
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
  );
}
