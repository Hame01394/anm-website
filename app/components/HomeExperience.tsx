
"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

import FutureVision from "./FutureVision";
import VisionPillars from "./VisionPillars";
import NationalStruggle from "./NationalStruggle";

const VIMEO_VIDEO_ID = "1245375007";

function MovementMetrics() {
  const metrics = [
    {
      value: "500+",
      label: "Registered Members",
      description: "People formally affiliated with ANM.",
    },
    {
      value: "26K+",
      label: "Social Media Followers",
      description: "People following ANM's official channels.",
    },
    {
      value: "10K+",
      label: "Website Visitors",
      description: "People visiting the ANM website.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-14 text-[#142b45] md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7940]">
            A Growing National Movement
          </p>

          <h2 className="text-2xl font-bold md:text-3xl">
            Building a Connected Community
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#142b45]/70">
            Building a connected, engaged and informed national community.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-[#142b45]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="px-5 py-7 text-center sm:py-3"
            >
              <div className="text-4xl font-extrabold tracking-tight text-[#9b7940] md:text-5xl">
                {metric.value}
              </div>

              <h3 className="mt-3 text-sm font-bold uppercase tracking-wider text-[#142b45]">
                {metric.label}
              </h3>

              <p className="mt-2 text-xs leading-6 text-[#142b45]/65">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeExperience() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const [isMuted, setIsMuted] = useState(true);

  const heroVideoEmbed =
    `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0&playsinline=1`;

  // INITIALIZE VIMEO PLAYER

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    const player = new Player(iframe);

    playerRef.current = player;

    player.ready()
      .then(() => player.setVolume(1))
      .catch((error) => {
        console.error("Vimeo player initialization failed:", error);
      });

    return () => {
      playerRef.current = null;

      void player.destroy().catch(() => undefined);
    };
  }, []);

  // TURN VIDEO SOUND ON AND OFF

  const toggleSound = async () => {
    const player = playerRef.current;

    if (!player) return;

    try {
      if (isMuted) {
        await Promise.all([
          player.setVolume(1),
          player.setMuted(false),
        ]);

        setIsMuted(false);
      } else {
        await player.setMuted(true);

        setIsMuted(true);
      }
    } catch (error) {
      console.error("Unable to change video audio:", error);
    }
  };

  return (
    <div className="bg-[#f8f5ed] text-[#142b45]">

      {/* HERO SECTION — FULLSCREEN VIMEO VIDEO */}

      <section
        className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#142b45]"
        aria-label="ANM introductory video"
      >

        {/* VIMEO VIDEO BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <iframe
            ref={iframeRef}
            src={heroVideoEmbed}
            title="Aga'azian National Movement introductory film"
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />

        </div>

        {/* DARK VIDEO OVERLAY */}

        <div className="pointer-events-none absolute inset-0 bg-[#091725]/65" />

        {/* SOUND CONTROL */}

        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Turn video sound on" : "Mute video"}
          aria-pressed={!isMuted}
          className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-3 rounded-full border border-[#d5b46b]/60 bg-[#142b45]/90 px-5 py-3 text-sm font-bold text-[#d5b46b] shadow-xl backdrop-blur-sm transition duration-300 hover:bg-[#d5b46b] hover:text-[#142b45]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />

            {isMuted ? (
              <>
                <path d="m17 9 5 6" />
                <path d="m22 9-5 6" />
              </>
            ) : (
              <>
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 5a10 10 0 0 1 0 14" />
              </>
            )}
          </svg>

          <span>
            {isMuted ? "ENABLE SOUND" : "MUTE SOUND"}
          </span>
        </button>

      </section>

      {/* ANM GROWTH STATISTICS */}

      <MovementMetrics />

      {/* THE FOUR PILLARS */}

      <div className="w-full bg-[#142b45] text-white">
        <VisionPillars />
      </div>

      {/* NATIONAL STRUGGLE */}

      <NationalStruggle />

      {/* THE FUTURE — DEMOCRATIC DEVELOPMENT */}

      <FutureVision />

    </div>
  );
}
