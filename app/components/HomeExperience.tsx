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
  const heroVideoEmbed = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&muted=1&loop=1&controls=0&title=0&byline=0&portrait=0`;

  const heroVideoLink = `https://vimeo.com/${VIMEO_VIDEO_ID}`;

  return (
    <div className="bg-[#f8f5ed] text-[#142b45]">

      {/* HERO SECTION — INTRODUCTORY FILM */}

      <section
        className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#142b45] px-5 py-20 text-center text-white"
        aria-labelledby="hero-title"
      >

        {/* VIMEO VIDEO BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <iframe
            src={heroVideoEmbed}
            title="ANM introductory film: Eritrea Today and Eritrea Tomorrow"
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />

        </div>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-[#091725]/65" />

        {/* HERO CONTENT */}

        
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