
"use client";

import { useState } from "react";

type PolicySection = {
  id: string;
  number: string;
  title: string;
  symbol: string;
  solutionTitle: string;
  solution: string;
  commitment: string;
  actions: string[];
  subtopics?: {
    title: string;
    description: string;
    points: string[];
  }[];
};

const sections: PolicySection[] = [
  {
    id: "tigrinya-national-question",
    number: "01",
    title: "The Tigrinya National Question",
    symbol: "◈",
    solutionTitle: "A Democratic Path to Self-Determination",
    solution:
      "The ANM proposes a democratic political process through which the Tigrinya people can freely determine their political future. This process must protect their identity, recognise their historical connections and provide a peaceful framework for political choice.",
    commitment:
      "The Tigrinya people must have the freedom to determine their political future through an inclusive, democratic and internationally recognised process.",
    actions: [
      "Establish an inclusive national dialogue involving Tigrinya communities at home and abroad.",
      "Develop a clear political and legal framework for the exercise of self-determination.",
      "Protect Tigrinya language, cultural heritage, historical sites and collective identity.",
      "Promote peaceful dialogue concerning historical connections and relations with Tigray.",
      "Pursue regional engagement based on mutual recognition, peaceful coexistence and respect for borders.",
      "Build democratic institutions that allow people to participate freely in decisions about their future.",
    ],
  },
  {
    id: "minority-rights",
    number: "02",
    title: "Minority Rights & Protections",
    symbol: "◇",
    solutionTitle: "Constitutional Guarantees and Equal Protection",
    solution:
      "The ANM proposes a constitutional system that guarantees equal citizenship and protects the cultural, religious, linguistic, social and political rights of every community. These protections must be enforceable through independent institutions and equal application of the law.",
    commitment:
      "No community should be denied its rights, identity, dignity or opportunity because of its ethnicity, religion, language or background.",
    actions: [
      "Adopt constitutional guarantees protecting the equal rights of all communities.",
      "Establish independent courts and accessible legal mechanisms to address discrimination and rights violations.",
      "Protect freedom of religion, cultural expression, language and education.",
      "Ensure fair and meaningful representation in elected bodies and public institutions.",
      "Guarantee equal access to public services, employment and economic opportunities.",
      "Create independent institutions to monitor human rights and investigate complaints.",
    ],
  },
  {
    id: "veterans-martyrs-wounded",
    number: "03",
    title: "Veterans, Martyrs & Wounded",
    symbol: "✧",
    solutionTitle: "A National Programme of Care and Recognition",
    solution:
      "The ANM proposes a comprehensive social protection programme for veterans, wounded people, families of martyrs and others affected by conflict. Recognition must be translated into accessible healthcare, rehabilitation, financial assistance and opportunities to rebuild their lives.",
    commitment:
      "Those who sacrificed their lives, health and well-being must receive lasting recognition, practical support and dignified care.",
    actions: [
      "Establish a transparent national register of veterans, wounded people and families of martyrs, with appropriate privacy protections.",
      "Provide accessible medical treatment, psychological support and long-term rehabilitation.",
      "Develop fair pension and financial assistance programmes for eligible veterans and affected families.",
      "Create housing and social assistance programmes for people facing hardship as a result of conflict.",
      "Provide educational opportunities, vocational training and employment support.",
      "Establish national remembrance programmes that honour sacrifice while promoting reconciliation and respect for human life.",
    ],
  },
  {
    id: "environment-natural-resources",
    number: "04",
    title: "Environment & Natural Resources",
    symbol: "❋",
    solutionTitle: "Sustainable Stewardship of Land and Resources",
    solution:
      "The ANM proposes a national environmental and resource-management programme based on conservation, responsible public oversight and sustainable development. Land, water, coastal resources and biodiversity must be protected while supporting the livelihoods of present and future generations.",
    commitment:
      "Natural resources must be managed transparently and sustainably, with environmental protection and public benefit at the centre of national development.",
    actions: [
      "Introduce land conservation and soil-restoration programmes to reduce erosion and desertification.",
      "Invest in water infrastructure, rainwater harvesting, responsible irrigation and sustainable water management.",
      "Support farmers through improved agricultural methods, access to resources and climate-resilient production.",
      "Protect coastal areas, marine ecosystems and fisheries through responsible regulation and monitoring.",
      "Establish environmental protection standards and restore damaged ecosystems and biodiversity.",
      "Expand renewable energy and climate adaptation initiatives to strengthen long-term environmental resilience.",
    ],
  },
  {
    id: "economic-transformation",
    number: "05",
    title: "Economic Transformation",
    symbol: "▧",
    solutionTitle: "Building a Productive and Opportunity-Based Economy",
    solution:
      "The ANM proposes an economy that creates productive employment, strengthens local enterprise and encourages responsible investment. Economic transformation must be supported by reliable infrastructure, modern skills, transparent institutions and opportunities for people to build secure livelihoods.",
    commitment:
      "Economic progress must improve living standards, expand opportunity and enable people to build independent and productive lives.",
    actions: [
      "Modernise agriculture through improved irrigation, technology, training and access to markets.",
      "Encourage local manufacturing and productive industries that create sustainable employment.",
      "Develop transport, electricity, communications and port infrastructure to support trade and investment.",
      "Create a transparent legal and regulatory environment that supports private enterprise and responsible investment.",
      "Expand vocational education, technical training and opportunities for young people to develop practical skills.",
      "Promote innovation, digital development and access to finance for small businesses and entrepreneurs.",
    ],
  },
  {
    id: "regional-global-strategy",
    number: "06",
    title: "Regional & Global Strategy",
    symbol: "◎",
    solutionTitle: "An Independent and Principled Foreign Policy",
    solution:
      "The ANM proposes an independent foreign policy that places the long-term interests of the Tigrinya people at its centre. International relationships should be developed through diplomacy, mutual respect, economic cooperation and a clear understanding of regional and global developments.",
    commitment:
      "The movement will pursue international engagement based on independent judgment, peaceful cooperation and the protection of our people's long-term interests.",
    actions: [
      "Develop a foreign policy framework that defines diplomatic priorities and protects political independence.",
      "Build constructive relationships with neighbouring countries and regional organisations.",
      "Promote dialogue and cooperation on Red Sea security, maritime interests and regional stability.",
      "Pursue international partnerships that support trade, investment, education, technology and development.",
      "Assess regional and global developments through independent research and informed policy analysis.",
      "Maintain diplomatic flexibility and avoid dependence on any single regional or global power.",
    ],
    subtopics: [
      {
        title: "Iran & Turkey",
        description:
          "Independent assessment of regional influence and strategic interests",
        points: [
          "Establish diplomatic monitoring of political, military and economic developments involving both countries.",
          "Assess the implications of their regional policies for the Red Sea and Horn of Africa.",
          "Engage through diplomacy where cooperation supports peace, stability and mutual interests.",
          "Avoid involvement in regional rivalries or proxy conflicts.",
        ],
      },
      {
        title: "Sudan, Yemen, Somalia & Ethiopia",
        description:
          "Peace, regional stability and cross-border cooperation",
        points: [
          "Develop diplomatic channels for monitoring political transitions and regional conflicts.",
          "Support peaceful dialogue, respect for sovereignty and the protection of civilian populations.",
          "Strengthen cooperation on border security, trade and the movement of people.",
          "Explore joint initiatives involving infrastructure, shared resources and regional development.",
          "Promote peaceful relations with neighbouring communities and countries.",
        ],
      },
      {
        title: "Israel",
        description:
          "Diplomatic engagement and practical areas of cooperation",
        points: [
          "Explore formal diplomatic engagement based on mutual recognition and respect.",
          "Identify opportunities for cooperation in agriculture, water management and technology.",
          "Encourage dialogue on Red Sea security and regional stability.",
          "Develop economic and technical partnerships where they serve clearly defined public interests.",
          "Maintain an independent foreign policy guided by the movement's principles and priorities.",
        ],
      },
      {
        title: "United States & China",
        description:
          "Balanced international relations and strategic autonomy",
        points: [
          "Develop constructive diplomatic relationships with both countries.",
          "Explore opportunities for investment, trade, education and technological development.",
          "Assess the effects of major-power competition on the Horn of Africa and Red Sea region.",
          "Protect political independence when negotiating international agreements and partnerships.",
          "Base international engagement on transparent objectives and the long-term interests of the people.",
        ],
      },
    ],
  },
];

const priorityCards = [
  {
    color: "#173f63",
    lightColor: "#4b82a8",
    title: "RECLAIM OUR DIGNITY",
    message:
      "Restore our national dignity, protect our identity and secure the right of the Tigrinya people to determine their future.",
    action: "RECLAIM OUR FUTURE",
  },
  {
    color: "#205b70",
    lightColor: "#5795a8",
    title: "DEFEND MINORITY RIGHTS",
    message:
      "Protect equality, freedom, cultural identity and the fundamental rights of every minority community.",
    action: "STAND FOR EQUAL RIGHTS",
  },
  {
    color: "#72502f",
    lightColor: "#b18a54",
    title: "HONOUR OUR SACRIFICES",
    message:
      "Recognise veterans, wounded people and families of martyrs through dignity, healthcare and lasting social protection.",
    action: "HONOUR THEIR SACRIFICE",
  },
  {
    color: "#28634f",
    lightColor: "#65a184",
    title: "PROTECT OUR LAND",
    message:
      "Safeguard our land, water and natural resources while building a sustainable environment for future generations.",
    action: "SECURE OUR ENVIRONMENT",
  },
  {
    color: "#705a2d",
    lightColor: "#b49a52",
    title: "END POVERTY. BUILD PROSPERITY.",
    message:
      "Create economic opportunity through productive industries, agriculture, investment, education and meaningful employment.",
    action: "BUILD ECONOMIC OPPORTUNITY",
  },
  {
    color: "#51436f",
    lightColor: "#8878ad",
    title: "SHAPE OUR REGIONAL FUTURE",
    message:
      "Develop an independent international strategy that protects our interests and builds constructive regional and global partnerships.",
    action: "DEFINE OUR GLOBAL ROLE",
  },
];

export default function NationalQuestionPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [activePriorityCard, setActivePriorityCard] = useState<number | null>(
    null
  );

  const toggleSolutionCard = (index: number) => {
    setFlippedCards((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToSection = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, sections.length - 1));

    setActiveSection(nextIndex);
    scrollToSection(`solution-detail-${sections[nextIndex].id}`);
  };

  const handlePriorityCardClick = (index: number) => {
    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      setActivePriorityCard(index);
    } else {
      goToSection(index);
    }
  };

  const resetPriorityCard = () => {
    setActivePriorityCard(null);
  };

  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white" />
          <div className="absolute -right-12 -top-12 h-72 w-72 rounded-full border border-white" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga&apos;azian National Movement
          </p>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Our Policy Framework
          </h1>

          <div className="mt-8 h-1 w-20 bg-[#c9a45c]" />

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/75 md:text-xl">
            A framework for dignity and a prosperous future.
          </p>
        </div>
      </section>

      {/* SIX POLICY PRIORITY CARDS */}
      <section className="bg-[#142b45] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative left-1/2 mb-12 w-screen -translate-x-1/2 bg-white px-7 py-6 text-center md:px-16 md:py-7">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
                Our Most Pressing Issues
              </p>

              <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-extrabold leading-tight text-[#142b45] md:text-4xl">
                Defining the priorities that will shape our future.
              </h2>

              <div className="mx-auto mt-4 h-1 w-16 bg-[#c9a45c]" />

              <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-[#596779] md:text-base">
                The ANM&apos;s policy framework addresses the most important
                issues facing the Tigrinya people. These priorities establish
                our direction for political, social and economic development,
                as well as international affairs.
              </p>
            </div>
          </div>

          {/* HORIZONTAL MOBILE CAROUSEL / DESKTOP GRID */}
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 xl:grid-cols-3 xl:gap-9">
            {sections.map((section, index) => {
              const card = priorityCards[index];
              const isActive = activePriorityCard === index;

              return (
                <div
                  key={section.id}
                  className="group relative flex min-h-[580px] w-[85vw] max-w-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-tr-[45px] bg-white text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl md:min-h-[640px] md:w-full md:max-w-none"
                >
                  {/* ORIGINAL CARD HEADING */}
                  <div
                    className={`relative z-10 flex min-h-[95px] flex-col justify-center px-7 py-5 pr-10 transition-opacity duration-500 md:min-h-[105px] md:px-8 ${
                      isActive ? "opacity-0 md:opacity-100" : ""
                    } group-hover:opacity-0`}
                    style={{
                      background: `linear-gradient(to bottom, ${card.lightColor}, ${card.color})`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="shrink-0 text-sm font-extrabold tracking-[0.15em] text-white/75">
                        {section.number}
                      </span>

                      <h3 className="text-lg font-extrabold leading-tight text-white md:text-xl">
                        {section.title}
                      </h3>
                    </div>
                  </div>

                  {/* ORIGINAL CARD CONTENT */}
                  <div
                    className={`relative z-10 flex flex-1 flex-col px-8 py-9 transition-opacity duration-300 md:px-9 md:py-10 ${
                      isActive ? "opacity-0 md:opacity-100" : ""
                    } group-hover:opacity-0`}
                  >
                    <span className="text-4xl text-[#c9a45c]">
                      {section.symbol}
                    </span>

                    <h4 className="mt-6 text-xl font-extrabold leading-7 text-[#142b45]">
                      {card.title}
                    </h4>

                    <p className="mt-5 text-sm leading-8 text-[#657287] md:text-base">
                      {card.message}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-9 text-xs font-extrabold uppercase tracking-[0.12em] text-[#a77d32]">
                      EXPLORE THIS PRIORITY
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>

                  {/* CARD TAP CONTROL */}
                  <button
                    type="button"
                    onClick={() => handlePriorityCardClick(index)}
                    aria-label={`Activate ${section.title}`}
                    aria-expanded={isActive}
                    className="absolute inset-0 z-[15] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#d5b46b]"
                  />

                  {/* HIGHLIGHTED BACKGROUND — ANIMATES TOP TO BOTTOM */}
                  <div
                    className={`pointer-events-none absolute inset-0 z-20 origin-top transition-transform duration-700 ease-in-out ${
                      isActive
                        ? "scale-y-100 md:scale-y-0"
                        : "scale-y-0"
                    } group-hover:scale-y-100`}
                    style={{
                      background: `linear-gradient(to bottom, ${card.lightColor}, ${card.color})`,
                    }}
                  />

                  {/* HIGHLIGHTED CONTENT */}
                  <div
                    className={`pointer-events-none absolute inset-0 z-30 flex flex-col justify-center px-8 py-10 transition-opacity duration-500 md:px-9 ${
                      isActive
                        ? "opacity-100 md:opacity-0"
                        : "opacity-0"
                    } group-hover:opacity-100`}
                  >
                    <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/75">
                      OUR COMMITMENT
                    </span>

                    <div className="mb-7 mt-6 h-[2px] w-14 bg-white/80" />

                    <h4 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                      {card.title}
                    </h4>

                    <p className="mt-7 text-base leading-8 text-white/90">
                      {card.message}
                    </p>

                    <span className="mt-10 text-xs font-extrabold uppercase leading-6 tracking-[0.12em] text-white">
                      {card.action}
                    </span>

                    <span className="mt-5 text-xs font-semibold text-white/70 md:hidden">
                      USE THE ARROWS TO CONTINUE
                    </span>
                  </div>

                  {/* UPWARD DIAGONAL ARROW — REMOVE HIGHLIGHT */}
                  <button
                    type="button"
                    onClick={resetPriorityCard}
                    aria-label={`Remove highlight from ${section.title}`}
                    className={`absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/20 text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    } md:group-hover:pointer-events-auto md:group-hover:opacity-100`}
                  >
                    ↗
                  </button>

                  {/* HORIZONTAL ARROW — OPEN DETAILED SOLUTION */}
                  <button
                    type="button"
                    onClick={() => goToSection(index)}
                    aria-label={`Explore detailed solution for ${section.title}`}
                    className={`absolute bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/20 text-2xl font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    } md:group-hover:pointer-events-auto md:group-hover:opacity-100`}
                  >
                    →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE ANM'S PROPOSED SOLUTIONS */}
      <section className="bg-[#142b45] px-5 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          {/* WHITE SECTION HEADING BAND */}
          <div className="relative left-1/2 mb-16 w-screen -translate-x-1/2 bg-white px-7 py-12 md:px-16 md:py-14">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#a77d32]">
                The ANM&apos;s Proposed Solutions
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#142b45] md:text-5xl">
                Turning our priorities into action.
              </h2>

              <div className="mt-7 h-1 w-16 bg-[#c9a45c]" />

              <p className="mt-7 text-base leading-8 text-[#596779] md:text-lg">
                The challenges outlined above require practical solutions.
                The ANM proposes the following policies, reforms and programmes
                to address these priorities and build a democratic, secure and
                prosperous future.
              </p>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-[#a77d32]">
                Hover or tap a policy card to explore
              </p>
            </div>
          </div>

          {/* HORIZONTAL MOBILE POLICY CAROUSEL */}
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 xl:grid-cols-3">
            {sections.map((section, index) => {
              const isFlipped = flippedCards.includes(index);

              return (
                <div
                  key={section.id}
                  className="group w-[85vw] max-w-[360px] shrink-0 snap-start [perspective:1400px] md:w-auto md:max-w-none"
                >
                  <div
                    className={`relative h-[570px] w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    } md:group-hover:[transform:rotateY(180deg)]`}
                  >
                    {/* FRONT — WHITE POLICY PREVIEW */}
                    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-sm border border-[#e5dfd2] bg-white text-[#142b45] shadow-md transition-shadow duration-500 group-hover:shadow-xl [backface-visibility:hidden]">
                      <div className="flex items-center justify-between border-b border-[#eee9df] bg-white px-7 py-6">
                        <span className="text-sm font-extrabold tracking-[0.2em] text-[#a77d32]">
                          {section.number}
                        </span>

                        <span className="text-4xl text-[#c9a45c]">
                          {section.symbol}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col px-8 py-9 md:px-9">
                        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a77d32]">
                          Policy Preview
                        </p>

                        <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#142b45] md:text-3xl">
                          {section.title}
                        </h3>

                        <div className="mt-5 h-1 w-14 bg-[#c9a45c]" />

                        <h4 className="mt-6 text-lg font-bold leading-7 text-[#142b45]">
                          {section.solutionTitle}
                        </h4>

                        <p className="mt-5 text-sm leading-8 text-[#657287] md:text-base">
                          {section.solution}
                        </p>

                        <div className="mt-auto border-t border-[#e9e4da] pt-7">
                          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#a77d32]">
                            HOVER TO EXPLORE
                            <span aria-hidden="true">→</span>
                          </span>

                          <p className="mt-2 text-xs text-[#8b929b] md:hidden">
                            Tap this card to reveal the proposed actions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BACK — WHITE KEY POLICY AREAS */}
                    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-sm border border-[#e5dfd2] bg-white px-7 py-8 text-[#142b45] shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] md:px-8">
                      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#a77d32]">
                        Key Policy Areas
                      </p>

                      <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#142b45] md:text-2xl">
                        {section.title}
                      </h3>

                      <div className="mt-4 h-1 w-12 bg-[#c9a45c]" />

                      <div className="mt-5 flex-1 space-y-3 overflow-y-auto pr-1">
                        {section.actions.map((action, actionIndex) => (
                          <div
                            key={action}
                            className="flex items-start gap-3 border-b border-[#e9e4da] pb-3 last:border-b-0"
                          >
                            <span className="shrink-0 text-xs font-extrabold text-[#a77d32]">
                              {String(actionIndex + 1).padStart(2, "0")}
                            </span>

                            <p className="text-sm leading-6 text-[#596779]">
                              {action}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e9e4da] pt-5">
                        <button
                          type="button"
                          onClick={() => toggleSolutionCard(index)}
                          className="text-xs font-bold uppercase tracking-[0.1em] text-[#657287] transition hover:text-[#142b45]"
                        >
                          ← Back
                        </button>

                        <a
                          href={`#solution-detail-${section.id}`}
                          className="inline-flex items-center gap-2 bg-[#142b45] px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#244b6b]"
                        >
                          Read More
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>

                    {/* MOBILE FLIP CONTROL */}
                    <button
                      type="button"
                      onClick={() => toggleSolutionCard(index)}
                      aria-label={`${
                        isFlipped
                          ? "Show preview for"
                          : "Show policy actions for"
                      } ${section.title}`}
                      aria-pressed={isFlipped}
                      className="absolute inset-0 z-10 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a45c] md:hidden"
                    />

                    {/* GREEN MOBILE SWIPE ARROW */}
                    <span className="pointer-events-none absolute bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200/70 bg-gradient-to-br from-emerald-400/90 to-emerald-700/95 text-2xl font-bold text-white shadow-[0_4px_15px_rgba(0,0,0,0.35)] md:hidden">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHITE DIVIDER BEFORE FOOTER */}
      <div className="h-3 w-full bg-white" aria-hidden="true" />
    </main>
  );
}
