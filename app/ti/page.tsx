
import { NewsMediaTi } from "../components/NewsMediaTi";
import FutureVisionTi from "../components/FutureVisionTi";
import NationalStruggleTi from "../components/NationalStruggleTi";
import VisionPillarsTi from "../components/VisionPillarsTi";

function MovementMetricsTi() {
  const metrics = [
    {
      value: "500+",
      label: "ኣባላት",
      description: "ብወግዒ ምስ ANM ዝተጸንበሩ ሰባት።",
    },
    {
      value: "26K+",
      label: "ተኸታተልቲ ማሕበራዊ ሚድያ",
      description: "ንወግዓዊ መርበባት ANM ዝከታተሉ ሰባት።",
    },
    {
      value: "10K+",
      label: "ተጠቀምቲ መርበብ ሓበሬታ",
      description: "ንመርበብ ሓበሬታ ANM ዝበጽሑ ሰባት።",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-14 text-[#142b45] md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b7940]">
            ዝዓቢ ዘሎ ሃገራዊ ምንቅስቓስ
          </p>

          <h2 className="text-2xl font-bold md:text-3xl">
            ዝተሓየለ ሃገራዊ ማሕበረሰብ ምህናጽ
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#142b45]/70">
            ሓድነት ዘለዎ፡ ንጡፍን ሓበሬታ ዝረክብን ሃገራዊ ማሕበረሰብ ንምህናጽ።
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-[#142b45]/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-5 py-7 text-center sm:py-3">
              <div className="text-4xl font-extrabold tracking-tight text-[#9b7940] md:text-5xl">
                {metric.value}
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#142b45]">
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

export default function TigrinyaHomePage() {
  return (
    <main
      lang="ti"
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
    >
      {/* HERO SECTION */}
      <section className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden bg-[#142b45] px-5 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#091725] via-[#142b45] to-[#80683e]" />
        <div className="absolute inset-0 bg-[#091725]/65" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#d5b46b]">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            ኤርትራ ሎሚ።
            <span className="mt-3 block text-[#d5b46b]">
              ኤርትራ ጽባሕ።
            </span>
          </h1>
        </div>
      </section>

      {/* MOVEMENT STATISTICS */}
      <MovementMetricsTi />

      {/* FOUR FOUNDATIONS */}
      <div className="w-full bg-[#142b45] text-white">
        <VisionPillarsTi />
      </div>

      {/* NATIONAL STRUGGLE */}
      <NationalStruggleTi />

      {/* FUTURE VISION */}
      <FutureVisionTi />

      {/* NEWS AND MEDIA */}
      <NewsMediaTi />
    </main>
  );
}
