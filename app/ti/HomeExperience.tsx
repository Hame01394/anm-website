
"use client";

import CivicParticipation from "@/app/components/CivicParticipation";
import FutureVision from "@/app/components/FutureVision";
import VisionPillars from "@/app/components/VisionPillars";
import NationalStruggle from "@/app/components/NationalStruggle";

function MovementMetrics() {
  const metrics = [
    {
      value: "500+",
      label: "ዝተመዝገቡ ኣባላት",
      description: "ብወግዒ ምስ ANM ዝተጸንበሩ ሰባት።",
    },
    {
      value: "26K+",
      label: "ተኸታተልቲ ማሕበራዊ ሚድያ",
      description: "ኣብ ወግዓዊ መርበባት ማሕበራዊ ሚድያ ANM ዝከታተሉ ሰባት።",
    },
    {
      value: "10K+",
      label: "በጻሕቲ መርበብ ሓበሬታ",
      description: "ንመርበብ ሓበሬታ ANM ዝበጽሑ ሰባት።",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-14 text-[#142b45] md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#9b7940]">
            ዝዓቢ ዘሎ ሃገራዊ ምንቅስቓስ
          </p>

          <h2 className="text-2xl font-bold md:text-3xl">
            ዝተኣሳሰረ ሃገራዊ ማሕበረሰብ ምህናጽ
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#142b45]/70">
            ዝተኣሳሰረ፡ ንጡፍን ሓበሬታ ዝረኸበን ሃገራዊ ማሕበረሰብ ንምህናጽ ንሰርሕ።
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

export default function HomeExperienceTi() {
  const heroVideoSrc = "";

  return (
    <div className="bg-[#f8f5ed] text-[#142b45]" lang="ti">
      {/* HERO SECTION */}
      <section
        className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#142b45] px-5 py-20 text-center text-white"
        aria-labelledby="hero-title"
      >
        {heroVideoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideoSrc}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-label="መእተዊ ፊልም ANM፦ ኤርትራ ሎሚን ኤርትራ ጽባሕን"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#091725] via-[#142b45] to-[#80683e]" />
        )}

        <div className="absolute inset-0 bg-[#091725]/65" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b] sm:text-sm">
            ሃገራዊ ምንቅስቓስ ኣጋኣዝያን
          </p>

          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
          >
            ኤርትራ ሎሚ።
            <span className="mt-2 block text-[#d5b46b]">
              ኤርትራ ጽባሕ።
            </span>
          </h1>

          {/* PLAY VIDEO BUTTON */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center gap-4 rounded-full bg-[#d5b46b] px-9 py-4 font-bold text-[#142b45] shadow-xl transition duration-300 hover:scale-105 hover:bg-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#142b45] text-lg text-white">
                ▶
              </span>

              <span className="text-base uppercase tracking-wider">
                ቪድዮ ኣጻውት
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* MOVEMENT STATISTICS */}
      <MovementMetrics />

      {/* THE FOUR PILLARS */}
      <div className="w-full bg-[#142b45] text-white">
        <VisionPillars />
      </div>

      {/* NATIONAL STRUGGLE */}
      <NationalStruggle />

      {/* FUTURE VISION */}
      <FutureVision />

      {/* CIVIC PARTICIPATION */}
      <CivicParticipation />
    </div>
  );
}
