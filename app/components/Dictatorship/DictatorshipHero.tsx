
"use client";

import { useRef, useState } from "react";

export default function DictatorshipHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Video playback could not start:", error);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#101f35] text-white">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/dictatorship-hero-poster.jpg"
        onEnded={() => setIsPlaying(false)}
      >
        <source
          src="/videos/dictatorship-hero.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-[#101f35]/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl font-black uppercase leading-tight tracking-wide md:text-6xl lg:text-7xl">
          THE REALITY OF
          <span className="mt-3 block text-[#e6c987]">
            DICTATORSHIP
          </span>
        </h1>

        <div className="mx-auto mt-8 h-1 w-24 bg-white" />

        
      </div>

      {!isPlaying && (
        <button
          type="button"
          onClick={playVideo}
          aria-label="Play hero video"
          className="absolute left-1/2 top-[70%] z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/20 text-white shadow-xl backdrop-blur-sm transition hover:scale-110 hover:bg-white/30 md:h-24 md:w-24"
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-10 w-10 fill-current md:h-12 md:w-12"
            aria-hidden="true"
          >
            <path d="M8 5.5v13l10-6.5z" />
          </svg>
        </button>
      )}

      </section>
  );
}
