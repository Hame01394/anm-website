"use client";

import React, { useId, useState } from "react";

type DevelopmentArea = {
  number: string;
  title: string;
  description: string;
};

type Pillar = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  areas: DevelopmentArea[];
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Trustworthy and Competent Institutions",
    subtitle:
      "Establishing accountable, professional and independent institutions",
    description:
      "Building institutions that serve the public rather than individuals or political interests. This pillar establishes the foundations of constitutional government, professional public administration, independent justice, transparent public finance and accountable national leadership.",
    image: "/images/trustworthy-institutions.jpg",
    areas: [
      {
        number: "01",
        title: "National Government",
        description:
          "Establishing a constitutional national government with clearly defined powers, democratic legitimacy and responsibility to the public.",
      },
      {
        number: "02",
        title: "Regional Governments",
        description:
          "Developing empowered regional governments with defined responsibilities, local representation and appropriate decision-making authority.",
      },
      {
        number: "03",
        title: "Local Government & Municipalities",
        description:
          "Establishing effective local administrations and municipalities that respond directly to the needs of their communities.",
      },
      {
        number: "04",
        title: "National Bank & Financial Institutions",
        description:
          "Building independent and professional financial institutions that support monetary stability, investment and economic development.",
      },
      {
        number: "05",
        title: "Public Treasury & National Budget",
        description:
          "Ensuring transparent public finances, responsible budgeting, accountable expenditure and proper management of national resources.",
      },
      {
        number: "06",
        title: "Independent Judiciary",
        description:
          "Establishing an independent judicial system that protects constitutional rights, applies the law equally and guarantees access to justice.",
      },
      {
        number: "07",
        title: "Professional Civil Service",
        description:
          "Building a competent, politically impartial and merit-based public administration that delivers effective public services.",
      },
      {
        number: "08",
        title: "Defence, Police & Security",
        description:
          "Establishing professional, legally accountable defence, police and security institutions under constitutional civilian authority.",
      },
      {
        number: "09",
        title: "Independent Electoral Institutions",
        description:
          "Creating impartial electoral institutions responsible for administering credible, transparent and competitive elections.",
      },
      {
        number: "10",
        title: "Independent Media & Information",
        description:
          "Protecting freedom of expression and establishing an environment in which independent media and public information can operate freely.",
      },
      {
        number: "11",
        title: "National Oversight Institutions",
        description:
          "Establishing independent institutions that monitor public administration, investigate misconduct and safeguard constitutional governance.",
      },
      {
        number: "12",
        title: "Public Accountability",
        description:
          "Ensuring that public officials and institutions are answerable for their decisions, conduct and use of public resources.",
      },
    ],
  },
  {
    number: "02",
    title: "A Strong and Prosperous Economy",
    subtitle:
      "Building a productive, connected and economically independent Eritrea",
    description:
      "Developing a diversified, productive and competitive economy that creates opportunity, generates employment and improves living standards. This pillar focuses on industrialisation, modern infrastructure, agriculture, energy, trade, maritime development and technological innovation as foundations for long-term national prosperity.",
    image: "/images/state-building.jpg",
    areas: [
      {
        number: "01",
        title: "National Economy",
        description:
          "Developing a diversified, productive and competitive national economy that creates employment, encourages enterprise and improves living standards.",
      },
      {
        number: "02",
        title: "Ports & Maritime Infrastructure",
        description:
          "Developing Eritrea's strategic Red Sea coastline, modern ports, maritime services and international trade infrastructure.",
      },
      {
        number: "03",
        title: "Airports & Aviation",
        description:
          "Modernising airports, aviation infrastructure and air transport services to strengthen international connectivity.",
      },
      {
        number: "04",
        title: "Light Industries",
        description:
          "Encouraging manufacturing, processing, textiles, food production and small and medium-sized industrial enterprises.",
      },
      {
        number: "05",
        title: "Heavy Industries",
        description:
          "Building the foundations for major industrial development, including steel, construction materials, machinery and mineral processing.",
      },
      {
        number: "06",
        title: "Transportation & Connectivity",
        description:
          "Connecting cities, towns, ports and rural communities through modern roads, railways, public transport and logistics networks.",
      },
      {
        number: "07",
        title: "Energy & Infrastructure",
        description:
          "Expanding reliable electricity, renewable energy, water systems, telecommunications and essential national infrastructure.",
      },
      {
        number: "08",
        title: "Agriculture & Food Security",
        description:
          "Modernising agriculture, irrigation, livestock production and food processing to strengthen national food security.",
      },
      {
        number: "09",
        title: "Digital Economy",
        description:
          "Developing digital infrastructure, technology, innovation, modern communications and opportunities for a knowledge-based economy.",
      },
    ],
  },
  {
    number: "03",
    title: "National Pride: Cultural Renewal and National Cohesion",
    subtitle:
      "Revitalising national identity, cultural heritage and shared belonging",
    description:
      "Building a confident and culturally vibrant nation by preserving historical memory, strengthening education, protecting cultural heritage and encouraging creativity. This pillar recognises that a prosperous country also needs a strong sense of identity, belonging, historical awareness and shared cultural inheritance.",
    image: "/images/nation-building.jpg",
    areas: [
      {
        number: "01",
        title: "Cultural Renaissance",
        description:
          "Revitalising Eritrea's cultural life, traditions, languages and intellectual heritage while encouraging cultural exchange and creativity.",
      },
      {
        number: "02",
        title: "Museums & National Heritage",
        description:
          "Establishing and developing museums and heritage institutions to preserve and present the country's historical and archaeological inheritance.",
      },
      {
        number: "03",
        title: "Libraries & National Archives",
        description:
          "Creating accessible libraries, research centres and national archives to preserve knowledge, documents and historical records.",
      },
      {
        number: "04",
        title: "Religious Heritage",
        description:
          "Protecting the country's historic religious institutions, traditions, sacred sites and contributions to its cultural inheritance.",
      },
      {
        number: "05",
        title: "History & Education",
        description:
          "Promoting historical research, quality education and a deeper understanding of the country's past and its place in the wider world.",
      },
      {
        number: "06",
        title: "Arts & Creativity",
        description:
          "Supporting literature, music, visual arts, film, architecture and other forms of artistic and cultural expression.",
      },
      {
        number: "07",
        title: "National Identity & Cohesion",
        description:
          "Strengthening a shared national identity grounded in historical awareness, cultural diversity, civic belonging and mutual respect.",
      },
    ],
  },
];

type CircleItem = {
  title: string;
  shortTitle: string;
  secondLine: string;
  description: string;
  path: string;
  textX: number;
  textY: number;
  descriptionX: number;
  descriptionY: number;
  moveX: number;
  moveY: number;
  target: string;
};

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
      {children}
    </p>
  );
}

// FULL-WIDTH WHITE FRAMEWORK HEADING
function NationalFrameworkHeading() {
  return (
    <section className="w-full border-b border-[#e7e0d3] bg-white px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel>WE WILL BUILD ERITREA</SectionLabel>

        <h2 className="text-3xl font-bold leading-tight text-[#142b45] md:text-5xl">
          A Strong Economy. National Pride. Trustworthy Institutions.
        </h2>

        <div className="mx-auto mt-6 h-1 w-20 bg-[#c9a45c]" />

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#596779] md:text-lg">
          We will rebuild Eritrea’s economy, revitalize our national identity,
          restore our dignity, and establish democratic institutions
          that serve and empower the people.
        </p>
      </div>
    </section>
  );
}

// INTERACTIVE THREE-PILLAR CIRCLE
function ThreePillarCircle() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const uniqueId = useId().replace(/:/g, "");
  const clipId = `eritreaCircleClip-${uniqueId}`;
  const shadowId = `threePillarShadow-${uniqueId}`;

  const activePillar = hovered ?? selected;

  const circleItems: CircleItem[] = [
    {
      title: pillars[0].title,
      shortTitle: "TRUSTWORTHY",
      secondLine: "INSTITUTIONS",
      description:
        "Constitutional government, independent institutions, professional public services and public accountability.",
      path: "M250 250 L250 40 A210 210 0 0 1 431.9 355 Z",
      textX: 345,
      textY: 165,
      descriptionX: 285,
      descriptionY: 125,
      moveX: 155,
      moveY: -125,
      target: "pillar-01",
    },
    {
      title: pillars[1].title,
      shortTitle: "STRONG",
      secondLine: "ECONOMY",
      description:
        "Industrial development, infrastructure, agriculture, trade, energy and economic opportunity.",
      path: "M250 250 L431.9 355 A210 210 0 0 1 68.1 355 Z",
      textX: 250,
      textY: 345,
      descriptionX: 170,
      descriptionY: 265,
      moveX: 0,
      moveY: 165,
      target: "pillar-02",
    },
    {
      title: pillars[2].title,
      shortTitle: "NATIONAL",
      secondLine: "PRIDE",
      description:
        "Cultural heritage, national identity, historical memory, education and shared belonging.",
      path: "M250 250 L68.1 355 A210 210 0 0 1 250 40 Z",
      textX: 165,
      textY: 165,
      descriptionX: 55,
      descriptionY: 125,
      moveX: -155,
      moveY: -125,
      target: "pillar-03",
    },
  ];

  const goToPillar = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePillarClick = (index: number) => {
    const item = circleItems[index];

    if (selected === index) {
      setSelected(null);
      setHovered(null);
      goToPillar(item.target);
      return;
    }

    setSelected(index);
    setHovered(index);
  };

  return (
    <section className="w-full overflow-visible bg-[#142b45] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <div
            className="relative w-full max-w-[950px]"
            onPointerLeave={() => setHovered(null)}
          >
            <svg
              viewBox="0 0 500 500"
              className="h-auto w-full overflow-visible"
              overflow="visible"
              role="group"
              aria-label="Interactive diagram of the three pillars"
            >
              <defs>
                <clipPath id={clipId}>
                  <circle cx="250" cy="250" r="210" />
                </clipPath>

                <filter
                  id={shadowId}
                  x="-80%"
                  y="-80%"
                  width="260%"
                  height="260%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="8"
                    floodColor="#000000"
                    floodOpacity="0.35"
                  />
                </filter>
              </defs>

              {/* ERITREA MAP BACKGROUND */}
              <g clipPath={`url(#${clipId})`}>
                <image
                  href="https://upload.wikimedia.org/wikipedia/commons/3/32/SVG-Koort_Eritrea.svg"
                  x="105"
                  y="55"
                  width="290"
                  height="390"
                  preserveAspectRatio="xMidYMid meet"
                  opacity="0.30"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(72%) sepia(33%) saturate(550%) hue-rotate(7deg) brightness(95%) contrast(90%)",
                  }}
                />

                <rect
                  x="40"
                  y="40"
                  width="420"
                  height="420"
                  fill="#142b45"
                  opacity="0.12"
                />
              </g>

              {/* DESCRIPTIONS UNDER THE SECTORS */}
              {circleItems.map((item, index) => {
                const isActive = activePillar === index;

                return (
                  <g
                    key={`description-${index}`}
                    opacity={isActive ? 1 : 0}
                    pointerEvents="none"
                    style={{
                      transition: "opacity 450ms ease",
                    }}
                  >
                    <foreignObject
                      x={item.descriptionX}
                      y={item.descriptionY}
                      width="160"
                      height="150"
                    >
                      <div
                        className="flex h-full w-full flex-col items-center justify-center px-2 py-2 text-center"
                        style={{
                          boxSizing: "border-box",
                          overflow: "hidden",
                        }}
                      >
                        <p
                          style={{
                            color: "#e6c987",
                            fontSize: "12px",
                            fontWeight: 800,
                            lineHeight: 1.3,
                            marginBottom: "8px",
                          }}
                        >
                          {item.title}
                        </p>

                        <p
                          style={{
                            color: "#ffffff",
                            fontSize: "10px",
                            lineHeight: 1.5,
                            fontWeight: 500,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* THREE OUTWARD-MOVING WHITE SECTORS */}
              {circleItems.map((item, index) => {
                const isActive = activePillar === index;

                return (
                  <g key={`sector-${index}`}>
                    <g
                      style={{
                        transform: isActive
                          ? `translate(${(item.moveX / 500) * 100}%, ${(item.moveY / 500) * 100}%)`
                          : "translate(0%, 0%)",
                        transformBox: "view-box",
                        transformOrigin: "center",
                        transition:
                          "transform 750ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        filter: isActive
                          ? `url(#${shadowId})`
                          : "none",
                      }}
                    >
                      <path
                        d={item.path}
                        fill="#ffffff"
                        stroke="#c9a45c"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />

                      {!isActive && (
                        <>
                          <text
                            x={item.textX}
                            y={item.textY}
                            fill="#142b45"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="12"
                            fontWeight="800"
                            letterSpacing="1"
                            pointerEvents="none"
                          >
                            {item.shortTitle}
                          </text>

                          <text
                            x={item.textX}
                            y={item.textY + 19}
                            fill="#142b45"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="10"
                            fontWeight="800"
                            letterSpacing="0.6"
                            pointerEvents="none"
                          >
                            {item.secondLine}
                          </text>
                        </>
                      )}
                    </g>
                  </g>
                );
              })}

              {/* FIXED INTERACTION AREAS */}
              {circleItems.map((item, index) => (
                <path
                  key={`interaction-${index}`}
                  d={item.path}
                  fill="transparent"
                  stroke="transparent"
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${item.title}`}
                  aria-pressed={selected === index}
                  style={{ cursor: "pointer" }}
                  onPointerEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered(null)}
                  onClick={() => handlePillarClick(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handlePillarClick(index);
                    }
                  }}
                />
              ))}
            </svg>
          </div>

          <p className="mt-7 max-w-xl text-center text-xs leading-6 tracking-wide text-white/65">
            Explore each pillar. Select a sector to discover the future we will build.
          </p>
        </div>
      </div>
    </section>
  );
}

// DEVELOPMENT AREA CARD
function DevelopmentAreaCard({
  area,
}: {
  area: DevelopmentArea;
}) {
  return (
    <article className="border border-[#e7e0d3] bg-[#f8f5ed] p-5 transition duration-300 hover:border-[#c9a45c] hover:shadow-sm md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.15em] text-[#a77d32]">
          {area.number}
        </span>

        <div className="h-px flex-1 bg-[#ded8ca]" />
      </div>

      <h4 className="mb-3 text-lg font-bold text-[#142b45]">
        {area.title}
      </h4>

      <p className="text-sm leading-7 text-[#596779]">
        {area.description}
      </p>
    </article>
  );
}

// EXPANDABLE PILLAR SECTION
function PillarSection({
  pillar,
  isOpen,
  onToggle,
}: {
  pillar: Pillar;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      id={`pillar-${pillar.number}`}
      className="w-full scroll-mt-24 overflow-hidden"
    >
      {/* WHITE HORIZONTAL RECTANGLE */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`pillar-content-${pillar.number}`}
        className="group flex min-h-[88px] w-full items-center justify-between gap-5 bg-white px-5 py-5 text-left transition-colors duration-300 hover:bg-[#f8f5ed] md:min-h-[100px] md:px-9"
      >
        <div className="flex min-w-0 items-center gap-5 md:gap-8">
          <span className="shrink-0 text-sm font-bold tracking-[0.2em] text-[#a77d32]">
            {pillar.number}
          </span>

          <h2 className="text-lg font-bold leading-snug text-[#142b45] md:text-2xl">
            {pillar.title}
          </h2>
        </div>

        {/* GOLD INVERTED-L CONTROL */}
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#c9a45c] transition-colors duration-300 group-hover:bg-[#d8b873] md:h-12 md:w-12"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 text-[#142b45] transition-transform duration-500 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
          >
            <path
              d="M6 5 H18 V17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </span>
      </button>

      {/* EXPANDABLE CONTENT */}
      <div
        id={`pillar-content-${pillar.number}`}
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-[#e7e0d3] bg-white">

            {/* PILLAR IMAGE */}
            <div className="relative h-64 overflow-hidden bg-[#10263d] md:h-80">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/65 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2c47e]">
                  Eritrea of Tomorrow
                </span>
              </div>
            </div>

            {/* STRATEGIC VISION */}
            <div className="px-6 py-9 md:px-10 md:py-12">
              <div className="mb-10 max-w-4xl">
                <SectionLabel>Strategic Vision</SectionLabel>

                <p className="text-base leading-8 text-[#42536a] md:text-lg">
                  {pillar.description}
                </p>
              </div>

              {/* DEVELOPMENT FRAMEWORK */}
              <div className="mb-7 flex flex-col gap-3 border-b border-[#ded8ca] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel>Development Framework</SectionLabel>

                  <h3 className="text-2xl font-bold text-[#142b45] md:text-3xl">
                    Key Development Areas
                  </h3>
                </div>

                <p className="text-sm text-[#8a795b]">
                  {pillar.areas.length} strategic areas
                </p>
              </div>

              {/* DEVELOPMENT AREA CARDS */}
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pillar.areas.map((area) => (
                  <DevelopmentAreaCard
                    key={`${pillar.number}-${area.number}`}
                    area={area}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// MAIN PAGE
export default function EritreaOfTomorrow() {
  const videoSrc = "/videos/eritrea-of-tomorrow.mp4";

  // ONE OPEN PILLAR AT A TIME
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  const togglePillar = (number: string) => {
    setOpenPillar((current) =>
      current === number ? null : number
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#142b45]">

      {/* FULL-WIDTH VIDEO HERO */}
      <section
        className="relative flex min-h-[75svh] w-full items-center justify-center overflow-hidden bg-[#091725] md:min-h-[85svh]"
        aria-labelledby="tomorrow-hero-title"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/eritrea-of-tomorrow-poster.jpg"
        />

        <div className="absolute inset-0 bg-[#091725]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/80 via-transparent to-[#091725]/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#d5b46b] md:text-sm">
            Aga'azian National Movement
          </p>

          <h1
            id="tomorrow-hero-title"
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Eritrea of Tomorrow
          </h1>

          <div className="mx-auto mt-7 h-1 w-24 bg-[#c9a45c]" />
        </div>
      </section>

      {/* FULL-WIDTH WHITE INTRODUCTION */}
      <NationalFrameworkHeading />

      {/* INTERACTIVE THREE-PILLAR CIRCLE */}
      <div id="national-pillars">
        <ThreePillarCircle />
      </div>

      {/* EXPANDABLE THREE-PILLAR POLICY FRAMEWORK */}
      <section className="w-full bg-[#142b45] px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-4">
          {pillars.map((pillar) => (
            <PillarSection
              key={pillar.number}
              pillar={pillar}
              isOpen={openPillar === pillar.number}
              onToggle={() => togglePillar(pillar.number)}
            />
          ))}
        </div>
      </section>

      {/* THE THREE PILLARS WORKING TOGETHER */}
      <section className="relative overflow-hidden bg-[#101f35] px-5 py-16 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
              One national vision
            </p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              THREE PILLARS. ONE ERITREA.
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 bg-[#c9a45c]" />
          </div>

          {/* TRUSTWORTHY INSTITUTIONS — THE FOUNDATION */}
          <div className="mx-auto max-w-3xl border border-[#c9a45c] bg-[#234467] px-6 py-8 text-center shadow-xl md:px-10 md:py-9">
            <div className="mb-3 flex justify-center">
              <svg viewBox="0 0 48 48" className="h-10 w-10 text-[#e2c47e]" fill="none" aria-hidden="true">
                <path d="M5 18 24 7l19 11H5Z M9 21h30 M12 21v16m8-16v16m8-16v16m8-16v16M7 40h34" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-wide md:text-2xl">
              Trustworthy Institutions
            </h3>
            <p className="mt-2 text-sm font-medium text-white/85 md:text-base">
              The foundation of good governance
            </p>
          </div>

          {/* BRANCHING CONNECTION TO THE TWO COMPLEMENTARY PILLARS */}
          <div className="mx-auto h-16 w-full max-w-3xl" aria-hidden="true">
            <svg viewBox="0 0 720 64" className="h-full w-full" preserveAspectRatio="none">
              <path d="M360 0 V25 H180 V62 M360 25 H540 V62" fill="none" stroke="#c9a45c" strokeWidth="2.5" />
              <circle cx="360" cy="25" r="4" fill="#c9a45c" />
            </svg>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <article className="flex min-h-[190px] flex-col items-center justify-center border border-white/20 bg-[#1b3552] px-6 py-8 text-center md:min-h-[220px] md:px-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#c9a45c] text-[#e2c47e]" aria-hidden="true">
                <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
                  <path d="M7 40h34M10 40V19h28v21M7 19l17-11 17 11M17 25v5m7-5v5m7-5v5M17 40V33h14v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-wide md:text-2xl">
                A Strong Economy
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/80 md:text-base">
                Creates prosperity and opportunity.
              </p>
            </article>

            <article className="flex min-h-[190px] flex-col items-center justify-center border border-white/20 bg-[#1b3552] px-6 py-8 text-center md:min-h-[220px] md:px-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#c9a45c] text-[#e2c47e]" aria-hidden="true">
                <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
                  <path d="M24 5 39 11v12c0 10-6 16-15 20C15 39 9 33 9 23V11L24 5Z M17 24l5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-wide md:text-2xl">
                National Pride
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/80 md:text-base">
                Preserves our identity, heritage and cultural continuity.
              </p>
            </article>
          </div>

          {/* THE SHARED NATIONAL OUTCOME */}
          <div className="mx-auto mt-10 h-8 w-full max-w-3xl" aria-hidden="true">
            <svg viewBox="0 0 720 32" className="h-full w-full" preserveAspectRatio="none">
              <path d="M180 0 V12 H360 V30 M540 0 V12 H360" fill="none" stroke="#c9a45c" strokeWidth="2.5" />
              <path d="m352 23 8 8 8-8" fill="none" stroke="#c9a45c" strokeWidth="2.5" />
            </svg>
          </div>

          <div className="bg-white px-5 py-9 text-center text-[#142b45] shadow-xl md:px-10 md:py-12">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-[#a77d32]">
              The future we will build together
            </p>
            <h3 className="text-2xl font-black leading-tight md:text-4xl">
              A DEMOCRATIC, PROSPEROUS ERITREA
            </h3>
            <div className="mx-auto my-5 h-1 w-16 bg-[#c9a45c]" />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#42536a] md:text-sm md:tracking-[0.2em]">
              Freedom <span className="px-1 text-[#a77d32]">·</span> Opportunity <span className="px-1 text-[#a77d32]">·</span> Dignity <span className="px-1 text-[#a77d32]">·</span> National Pride
            </p>
          </div>
        </div>
      </section>

      {/* WHITE SEPARATOR BEFORE SHARED WEBSITE FOOTER */}
      <div
        className="h-16 w-full bg-white md:h-20"
        aria-hidden="true"
      />

    </main>
  );
}