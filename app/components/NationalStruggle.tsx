
"use client";

import { useRef, useState } from "react";

type Documentary = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  videoUrl: string;
  vimeoId?: string;
  poster: string;
  subtitleUrl: string;
  sourceUrl: string;
};

const documentaries: Documentary[] = [
  {
    id: "governance",
    number: "01",
    title: "Authoritarian Governance",
    category: "POLITICAL SYSTEM",
    description:
      "Examine the structure of political power, the concentration of authority and the absence or weakness of independent political institutions.",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "repression",
    number: "02",
    title: "Political Repression",
    category: "CIVIL LIBERTIES",
    description:
      "Explore restrictions on political organisation, public expression, independent journalism, assembly and opposition activity.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "human-rights",
    number: "03",
    title: "Human Rights & Political Prisoners",
    category: "HUMAN RIGHTS",
    description:
      "Examine documented cases, detention conditions, due-process concerns and relevant international human rights reporting.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "economy",
    number: "04",
    title: "Economic Hardship",
    category: "ECONOMIC CONDITIONS",
    description:
      "Explore economic conditions, limited private-sector opportunities, investment challenges, employment and development constraints.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "migration",
    number: "05",
    title: "Demographic Decline & Migration",
    category: "POPULATION & MIGRATION",
    description:
      "Explore migration, displacement, population trends, the departure of young people and the long-term consequences for national development.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "national-service",
    number: "06",
    title: "National Service & Military Institutions",
    category: "NATIONAL SERVICE",
    description:
      "Examine national service, military institutions, the role of the state and the consequences of prolonged service arrangements.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "regional-security",
    number: "07",
    title: "Regional Security & Foreign Relations",
    category: "REGIONAL AFFAIRS",
    description:
      "Examine Eritrea's regional position, relations with neighbouring countries, Red Sea security and the wider geopolitical environment.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "accountability",
    number: "08",
    title: "Corruption & Institutional Accountability",
    category: "PUBLIC ACCOUNTABILITY",
    description:
      "Explore transparency, public administration, institutional independence and mechanisms for accountability.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "martyrs-veterans",
    number: "09",
    title: "Martyrs & Veterans",
    category: "HISTORY & LEGACY",
    description:
      "Present the experiences, contributions and historical significance of martyrs and veterans, where relevant documentary materials are available.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
];

export default function NationalStruggle() {
  const [selectedId, setSelectedId] = useState("governance");

  const thumbnailRow = useRef<HTMLDivElement>(null);

  const activeDocumentary =
    documentaries.find((item) => item.id === selectedId) ??
    documentaries[0];

  const scrollThumbnails = (direction: "left" | "right") => {
    thumbnailRow.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="national-struggle"
      className="w-full bg-white px-5 py-8 text-[#142b45] sm:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION */}

        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">

            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              Eritrea Under Dictatorship
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              The Challenges We Must Confront
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
              Severe social, economic, demographic, environmental and human rights crises.
            </p>

          </div>
        </div>

        {/* FEATURED DOCUMENTARY */}

        <div className="overflow-hidden rounded-xl border border-[#142b45]/15 bg-[#172b42] shadow-2xl">

          {/* VIDEO DISPLAY */}

          <div className="relative aspect-video w-full overflow-hidden bg-black">

            {activeDocumentary.vimeoId ? (
              <iframe
                key={activeDocumentary.vimeoId}
                src={`https://player.vimeo.com/video/${activeDocumentary.vimeoId}?autoplay=0&muted=0&loop=0&controls=1&title=0&byline=0&portrait=0&playsinline=1`}
                title={`ANM Documentary — ${activeDocumentary.title}`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            ) : activeDocumentary.videoUrl ? (
              <video
                key={activeDocumentary.id}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={activeDocumentary.poster || undefined}
              >
                <source
                  src={activeDocumentary.videoUrl}
                  type="video/mp4"
                />

                {activeDocumentary.subtitleUrl && (
                  <track
                    kind="subtitles"
                    src={activeDocumentary.subtitleUrl}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}

                Your browser does not support HTML video.
              </video>
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#203b58] via-[#142b45] to-[#091522] px-6 text-center"
                style={
                  activeDocumentary.poster
                    ? {
                        backgroundImage: `linear-gradient(rgba(10,25,42,.65), rgba(10,25,42,.85)), url(${activeDocumentary.poster})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }
                    : undefined
                }
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a45c] text-[#c9a45c]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5.5v13l10-6.5z" />
                  </svg>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
                  Featured Documentary
                </p>

                <h3 className="max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
                  {activeDocumentary.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-300">
                  Documentary footage will appear here when a video is
                  added to this topic.
                </p>

              </div>
            )}

          </div>

          {/* FEATURED VIDEO INFORMATION */}

          <div className="grid gap-6 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                {activeDocumentary.category}
              </p>

              <h3 className="text-2xl font-bold sm:text-3xl">
                {activeDocumentary.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-300 sm:text-base">
                {activeDocumentary.description}
              </p>

            </div>

            {activeDocumentary.sourceUrl && (
              <a
                href={activeDocumentary.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[#c9a45c] px-5 py-3 text-sm font-semibold text-[#e4c47e] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
              >
                Supporting source ↗
              </a>
            )}

          </div>
        </div>

        {/* DOCUMENTARY LIBRARY */}

        <div className="mt-12">

          {/* LIBRARY HEADING AND NAVIGATION */}

          <div className="mb-5 flex items-center justify-between gap-4">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                Explore the Library
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#142b45] sm:text-2xl">
                Documentary Topics
              </h3>

            </div>

            <div className="hidden gap-2 sm:flex">

              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="Scroll documentaries left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="Scroll documentaries right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
              >
                →
              </button>

            </div>

          </div>

          {/* DOCUMENTARY THUMBNAILS */}

          <div
            ref={thumbnailRow}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
            style={{ scrollbarWidth: "thin" }}
          >

            {documentaries.map((documentary) => {
              const isSelected = selectedId === documentary.id;

              return (
                <button
                  key={documentary.id}
                  type="button"
                  onClick={() => setSelectedId(documentary.id)}
                  aria-pressed={isSelected}
                  className={`group w-[230px] shrink-0 snap-start overflow-hidden rounded-lg border-2 text-left transition duration-200 sm:w-[260px] ${
                    isSelected
                      ? "border-[#c9a45c] bg-[#263d55]"
                      : "border-white/15 bg-[#172b42] hover:border-white/50"
                  }`}
                >

                  {/* THUMBNAIL IMAGE */}

                  <div
                    className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#34516d] to-[#0b1828]"
                    style={
                      documentary.poster
                        ? {
                            backgroundImage: `linear-gradient(rgba(10,25,42,.35), rgba(10,25,42,.65)), url(${documentary.poster})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >

                    <span className="absolute left-3 top-3 text-xs font-bold tracking-widest text-[#e6c987]">
                      {documentary.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/25 text-xl text-white transition group-hover:border-[#c9a45c] group-hover:text-[#e6c987]">
                      ▶
                    </span>

                    {isSelected && (
                      <span className="absolute bottom-2 right-2 rounded bg-[#c9a45c] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#142b45]">
                        Selected
                      </span>
                    )}

                  </div>

                  {/* THUMBNAIL INFORMATION */}

                  <div className="p-4">

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#e6c987]">
                      {documentary.category}
                    </p>

                    <h4 className="min-h-[48px] text-sm font-bold leading-6 text-white">
                      {documentary.title}
                    </h4>

                    <p className="mt-2 text-xs text-gray-400">
                      View documentary topic →
                    </p>

                  </div>

                </button>
              );
            })}

          </div>

          <p className="mt-1 text-xs text-[#64748b]">
            Select a topic to feature it above. Swipe horizontally on mobile
            to explore the library.
          </p>

        </div>

      </div>
    </section>
  );
}
