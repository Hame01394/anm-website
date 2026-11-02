
import CivicParticipation from "./CivicParticipation";
import FutureVision from "./FutureVision";
import VisionPillars from "./VisionPillars";
import NationalStruggle from "./NationalStruggle";

const pillars = [
  {
    number: "01",
    title: "The Nation",
    description:
      "Strengthening national unity, identity, sovereignty and the equal dignity of every citizen.",
  },
  {
    number: "02",
    title: "The Economy",
    description:
      "Building economic opportunity, productive institutions and shared prosperity.",
  },
  {
    number: "03",
    title: "Direct Democracy",
    description:
      "Promoting popular participation, accountable leadership and democratic decision-making.",
  },
  {
    number: "04",
    title: "Institution Building",
    description:
      "Establishing independent institutions, constitutional government and the rule of law.",
  },
];

export default function HomeExperience() {
  const heroVideoSrc = "";

  return (
    <div className="bg-[#f8f5ed] text-[#142b45]">

      {/* HERO SECTION — INTRODUCTORY FILM */}
      <section
        className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#142b45] px-5 py-20 text-center text-white"
        aria-labelledby="hero-title"
      >
        {/* VIDEO BACKGROUND */}
        {heroVideoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={heroVideoSrc}
            autoPlay
            muted
            playsInline
            preload="metadata"
            aria-label="ANM introductory film: Eritrea Today and Eritrea Tomorrow"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#091725] via-[#142b45] to-[#80683e]" />
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#091725]/65" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-5xl">

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b] sm:text-sm">
            Aga'azian National Movement
          </p>

          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Eritrea Today.
            <span className="mt-2 block text-[#d5b46b]">
              Eritrea Tomorrow.
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
                Play Video
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <VisionPillars />

      {/* NATIONAL STRUGGLE */}
      <NationalStruggle />

      {/* THE FUTURE — DEMOCRATIC DEVELOPMENT */}
      <FutureVision />

            
    </div>
  );
}
