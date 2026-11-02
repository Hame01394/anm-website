
"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    number: "01",
    id: "historical-background",
    title: "Historical Background",
    subtitle: "Historical context and the origins of the crisis",
    description:
      "Examine the historical developments, political decisions and events that provide context for understanding the experiences of the Tigrinya population.",
    topics: [
      "Historical context",
      "Political developments",
      "Timeline of significant events",
    ],
  },
  {
    number: "02",
    id: "human-story",
    title: "The Human Story",
    subtitle: "People, families and lived experiences",
    description:
      "Present personal testimonies, documented experiences and the human consequences of policies and events affecting individuals, families and communities.",
    topics: [
      "Personal testimonies",
      "Family experiences",
      "Survivor accounts",
    ],
  },
  {
    number: "03",
    id: "land-displacement",
    title: "Land, Villages & Displacement",
    subtitle: "Communities, territory and displacement",
    description:
      "Document reported displacement, changes affecting communities, land ownership concerns and the experiences of people separated from their homes and villages.",
    topics: [
      "Village histories",
      "Displacement records",
      "Land and property documentation",
    ],
  },
  {
    number: "04",
    id: "cultural-heritage",
    title: "Cultural & Linguistic Heritage",
    subtitle: "Identity, history and cultural continuity",
    description:
      "Explore the historical, linguistic and cultural heritage of the Tigrinya-speaking population, including Ge'ez traditions, cultural institutions and community identity.",
    topics: [
      "Language and heritage",
      "Historical traditions",
      "Cultural preservation",
    ],
  },
  {
    number: "05",
    id: "forced-service",
    title: "Forced Service & Living Conditions",
    subtitle: "Human rights and everyday realities",
    description:
      "Examine documented reports concerning compulsory service, restrictions on freedom, living conditions and their social and economic consequences.",
    topics: [
      "National service",
      "Living conditions",
      "Freedom and fundamental rights",
    ],
  },
  {
    number: "06",
    id: "chain-of-command",
    title: "Chain of Command",
    subtitle: "Leadership, institutions and responsibility",
    description:
      "Examine the structure of political, military and security authority, including allegations concerning leadership decisions, institutional responsibility and the roles of individuals within the system.",
    topics: [
      "Political leadership",
      "Military command structures",
      "Security apparatus",
      "Institutional responsibility",
    ],
  },
  {
    number: "07",
    id: "statements",
    title: "Statements & Declarations",
    subtitle: "Public statements and documentary records",
    description:
      "Collect and examine relevant public statements, official declarations, speeches and documentary material. Each record should include its original source, date and context.",
    topics: [
      "Public speeches",
      "Official declarations",
      "Documentary records",
    ],
  },
  {
    number: "08",
    id: "legal-framework",
    title: "Legal Framework",
    subtitle: "International law and accountability",
    description:
      "Examine the applicable principles of international law, including the legal definitions of genocide, crimes against humanity, persecution and other serious human rights violations.",
    topics: [
      "Genocide Convention",
      "Crimes against humanity",
      "International criminal responsibility",
      "Accountability and justice",
    ],
  },
  {
    number: "09",
    id: "evidence-archive",
    title: "Evidence Archive & Sources",
    subtitle: "Documentation, research and verification",
    description:
      "Provide a structured archive of documents, reports, testimonies, photographs and other relevant materials, with clear references and source information.",
    topics: [
      "Reports and publications",
      "Testimonies and records",
      "Photographic documentation",
      "Research and references",
    ],
  },
];

export default function TigrinyaGenocidePage() {
  const videoSrc = "/videos/tigrinya-genocide.mp4";
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById(
      "genocide-hero-video"
    ) as HTMLVideoElement | null;

    if (!video) return;

    const syncPlaybackState = () => {
      setIsPlaying(!video.paused);
    };

    video.addEventListener("play", syncPlaybackState);
    video.addEventListener("pause", syncPlaybackState);

    syncPlaybackState();

    return () => {
      video.removeEventListener("play", syncPlaybackState);
      video.removeEventListener("pause", syncPlaybackState);
    };
  }, []);

  const toggleVideo = async () => {
    const video = document.getElementById(
      "genocide-hero-video"
    ) as HTMLVideoElement | null;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Unable to play hero video:", error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">

      {/* FULL-WIDTH VIDEO HERO */}
      <section
        className="relative flex min-h-[75svh] w-full items-center justify-center overflow-hidden bg-[#091725] md:min-h-[85svh]"
        aria-labelledby="genocide-hero-title"
      >

        {/* BACKGROUND VIDEO */}
        <video
          id="genocide-hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/tigrinya-genocide-poster.jpg"
        />

        {/* VIDEO OVERLAY */}
        <div className="absolute inset-0 bg-[#091725]/65" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/80 via-transparent to-[#091725]/30" />

        {/* HERO TITLE AND VIDEO CONTROL */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#d5b46b] md:text-sm">
            Aga'azian National Movement
          </p>

          <h1
            id="genocide-hero-title"
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Tigrinya Genocide
          </h1>

          <div className="mx-auto mt-7 h-1 w-24 bg-[#c9a45c]" />

          {/* PLAY / PAUSE BUTTON */}
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-[#c9a45c] bg-[#142b45]/80 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition duration-300 hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            <span className="text-base" aria-hidden="true">
              {isPlaying ? "Ⅱ" : "▶"}
            </span>

            <span>
              {isPlaying ? "Pause Video" : "Play Video"}
            </span>
          </button>

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
            Historical Record & Documentation
          </p>

          <p className="text-base leading-8 text-[#42536a] md:text-lg">
            This section brings together historical research,
            personal testimonies, documentary records and legal
            analysis concerning allegations of persecution,
            displacement and serious violations affecting the
            Tigrinya population.
          </p>

        </div>
      </section>

      {/* DOCUMENTATION SECTIONS */}
      <section className="mx-auto max-w-7xl space-y-12 px-5 pb-20 md:space-y-16 md:px-10">

        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-24 overflow-hidden border border-[#ded8ca] bg-white shadow-sm"
          >

            {/* NAVY SECTION HEADING */}
            <div className="border-l-[6px] border-[#c9a45c] bg-[#142b45] px-6 py-6 md:px-10 md:py-8">

              <div className="flex flex-col gap-2">

                <span className="text-xs font-bold tracking-[0.2em] text-[#d5b46b]">
                  SECTION {section.number}
                </span>

                <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                  {section.title}
                </h2>

                <p className="mt-1 text-sm text-white/70 md:text-base">
                  {section.subtitle}
                </p>

              </div>

            </div>

            {/* SECTION CONTENT */}
            <div className="px-6 py-8 md:px-10 md:py-10">

              <div className="max-w-4xl">

                <p className="text-base leading-8 text-[#42536a] md:text-lg">
                  {section.description}
                </p>

                {/* TOPICS */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {section.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 border border-[#e7e0d3] bg-[#f8f5ed] px-5 py-4"
                    >
                      <span className="h-2 w-2 shrink-0 bg-[#c9a45c]" />

                      <span className="text-sm font-semibold text-[#142b45]">
                        {topic}
                      </span>
                    </div>
                  ))}

                </div>

                {/* SECTION FOOTER */}
                <div className="mt-8 border-t border-[#e7e0d3] pt-5">

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#a77d32]">
                    Research • Documentation • Sources
                  </span>

                </div>

              </div>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
