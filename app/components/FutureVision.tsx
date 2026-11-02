
"use client";

import { useRef, useState } from "react";

const futureTopics = [
  {
    id: "industrialization",
    number: "01",
    title: "Industrialization",
    category: "INDUSTRY & PRODUCTION",
    description:
      "Explore the potential for productive industries, manufacturing, processing facilities and industrial zones. Investment, skilled workers, reliable infrastructure, energy and effective institutions can all contribute to sustainable industrial development.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "modern-cities",
    number: "02",
    title: "Modern Cities & Towns",
    category: "URBAN DEVELOPMENT",
    description:
      "Imagine modern urban development built around improved housing, welcoming public spaces, reliable transport, essential utilities and effective municipal services. Well-planned cities and towns can improve quality of life and support economic activity.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "ports-airports",
    number: "03",
    title: "Ports & Airports",
    category: "CONNECTIVITY & TRADE",
    description:
      "Explore the strategic and economic potential of ports, airports, logistics infrastructure and international connectivity. Modern transport links can help connect communities, facilitate trade and create opportunities for investment.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "agriculture",
    number: "04",
    title: "Agriculture",
    category: "FOOD & RURAL DEVELOPMENT",
    description:
      "Consider opportunities in modern agricultural production, irrigation, food processing, agricultural technology and rural development. Investment in skills, infrastructure and productive farming can strengthen food security and livelihoods.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "digital-transformation",
    number: "05",
    title: "Digital Transformation",
    category: "TECHNOLOGY & INNOVATION",
    description:
      "Explore digital infrastructure, technology-based services, innovation and digital government. Better connectivity and access to technology can expand opportunities for young people, businesses and public institutions.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "education",
    number: "06",
    title: "Education",
    category: "KNOWLEDGE & SKILLS",
    description:
      "Envision modern universities, technical education, vocational training, research institutions and improved educational opportunities. Education and lifelong learning can help develop the knowledge and skills needed for national progress.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "healthcare",
    number: "07",
    title: "Healthcare",
    category: "HEALTH & WELLBEING",
    description:
      "Explore the development of modern hospitals, healthcare infrastructure, medical education, public health programmes and access to essential services. A stronger health system can protect lives and support healthier communities.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "cultural-renaissance",
    number: "08",
    title: "Cultural Renaissance",
    category: "CULTURE & HERITAGE",
    description:
      "Imagine renewed cultural life through heritage preservation, artistic development, education and the celebration of national traditions. Cultural expression can connect generations and contribute to a confident, creative society.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "institutional-modernization",
    number: "09",
    title: "Institutional Modernization",
    category: "GOVERNANCE & PUBLIC SERVICE",
    description:
      "Explore professional public administration, independent institutions, modern public services and accountable governance. Effective institutions operating under constitutional law can provide continuity, protect rights and serve the public.",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
];

export default function FutureVision() {
  const [selectedId, setSelectedId] = useState("industrialization");
  const thumbnailRow = useRef<HTMLDivElement>(null);

  const activeTopic =
    futureTopics.find((topic) => topic.id === selectedId) ??
    futureTopics[0];

  const scrollThumbnails = (direction: "left" | "right") => {
    thumbnailRow.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="the-future"
      className="w-full bg-[#142b45] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION - WHITE BAND */}
<div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
  <div className="mx-auto max-w-4xl text-center">
    <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
      The Future
    </p>

    <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
      <span className="block">Strong Institutions · Prosperity</span>
      <span className="block">Cultural Renaissance</span>
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
      Ending dictatorship is only the beginning. The task is to build
      strong institutions, create lasting prosperity, and revive the
      nation's cultural heritage.
    </p>
  </div>
</div>

        {/* FEATURED VIDEO */}
        <div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl">
          <div className="relative aspect-video w-full bg-[#142b45]">
            {activeTopic.videoUrl ? (
              <video
                key={activeTopic.id}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={activeTopic.poster || undefined}
              >
                <source
                  src={activeTopic.videoUrl}
                  type="video/mp4"
                />

                {activeTopic.subtitleUrl && (
                  <track
                    kind="subtitles"
                    src={activeTopic.subtitleUrl}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}

                Your browser does not support HTML video.
              </video>
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#e9dfc9] via-[#d7c69f] to-[#a9b9b5] px-6 text-center"
                style={
                  activeTopic.poster
                    ? {
                        backgroundImage: `linear-gradient(rgba(20,43,69,.35), rgba(20,43,69,.65)), url(${activeTopic.poster})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }
                    : undefined
                }
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#142b45] text-[#142b45]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5.5v13l10-6.5z" />
                  </svg>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#142b45]">
                  Future Development
                </p>

                <h3 className="max-w-2xl text-2xl font-extrabold text-[#142b45] sm:text-3xl">
                  {activeTopic.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#263d55]">
                  Illustrative video presentation will appear here when
                  footage is added to this topic.
                </p>
              </div>
            )}
          </div>

          {/* VIDEO INFORMATION */}
          <div className="grid gap-6 p-6 sm:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                {activeTopic.category}
              </p>

              <h3 className="text-2xl font-bold text-[#142b45] sm:text-3xl">
                {activeTopic.title}
              </h3>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-[#526174] sm:text-base">
                {activeTopic.description}
              </p>
            </div>
          </div>
        </div>

        {/* DEVELOPMENT TOPICS */}
        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                Building Tomorrow
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Explore Future Development
              </h3>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="Scroll topics left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:border-[#c9a45c] hover:bg-white hover:text-[#142b45]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="Scroll topics right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:border-[#c9a45c] hover:bg-white hover:text-[#142b45]"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={thumbnailRow}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
            style={{ scrollbarWidth: "thin" }}
          >
            {futureTopics.map((topic) => {
              const isSelected = selectedId === topic.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  aria-pressed={isSelected}
                  className={`group w-[230px] shrink-0 snap-start overflow-hidden rounded-lg border-2 text-left transition duration-200 sm:w-[260px] ${
                    isSelected
                      ? "border-[#c9a45c] bg-[#eee6d5] shadow-md"
                      : "border-white/20 bg-white hover:border-[#a77d32]"
                  }`}
                >
                  <div
                    className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#d8c9a8] to-[#8fa7a4]"
                    style={
                      topic.poster
                        ? {
                            backgroundImage: `linear-gradient(rgba(20,43,69,.25), rgba(20,43,69,.55)), url(${topic.poster})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >
                    <span className="absolute left-3 top-3 text-xs font-bold tracking-widest text-[#142b45]">
                      {topic.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#142b45]/70 bg-white/30 text-xl text-[#142b45] transition group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c]">
                      ▶
                    </span>

                    {isSelected && (
                      <span className="absolute bottom-2 right-2 rounded bg-[#c9a45c] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#142b45]">
                        Selected
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#a77d32]">
                      {topic.category}
                    </p>

                    <h4 className="min-h-[48px] text-sm font-bold leading-6 text-[#142b45]">
                      {topic.title}
                    </h4>

                    <p className="mt-2 text-xs text-[#64748b]">
                      Explore this possibility →
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-1 text-xs text-white/70">
            Select a development topic to feature it above. Swipe
            horizontally on mobile to explore.
          </p>
        </div>

        {/* IMPORTANT DISTINCTION */}
        <div className="mt-14 border-l-2 border-[#c9a45c] bg-white px-6 py-6 shadow-sm sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
            A Vision, Not a Guarantee
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-7 text-[#526174] sm:text-base">
            These presentations illustrate possible paths for national
            development. They are proposals and aspirations, not
            guaranteed outcomes. Realising them would require public
            participation, sound policies, investment, capable
            institutions and sustained national effort. Any conceptual
            footage should be clearly identified as illustrative.
          </p>
        </div>

      </div>
    </section>
  );
}
