
"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    number: "01",
    id: "historical-background",
    title: "ታሪኻዊ ድሕረ-ባይታ",
    subtitle: "ታሪኻዊ ኩነታትን መበገሲ ናይቲ ቅልውላውን",
    description:
      "ታሪኻዊ ምዕባለታት፣ ፖለቲካዊ ውሳነታትን ክስተታትን ብምምርማር፣ ንተመኩሮታት ህዝቢ ትግርኛ ንምርዳእ ዘድሊ ድሕረ-ባይታ ምቕራብ።",
    topics: [
      "ታሪኻዊ ድሕረ-ባይታ",
      "ፖለቲካዊ ምዕባለታት",
      "ወሳኒ ክስተታትን ናይ ግዜ ቅደም-ተኸተልን",
    ],
  },
  {
    number: "02",
    id: "human-story",
    title: "ሰብኣዊ ታሪኽ",
    subtitle: "ሰባት፣ ስድራቤታትን ናይ ህይወት ተመኩሮታትን",
    description:
      "ውልቃዊ ምስክርነታት፣ ዝተመዝገቡ ተመኩሮታትን ፖሊሲታትን ክስተታትን ኣብ ውልቀሰባት፣ ስድራቤታትን ማሕበረሰባትን ዘሕደርዎ ሰብኣዊ ሳዕቤናትን ምቕራብ።",
    topics: [
      "ውልቃዊ ምስክርነታት",
      "ተመኩሮታት ስድራቤት",
      "ምስክርነታት ዝተረፉ",
    ],
  },
  {
    number: "03",
    id: "land-displacement",
    title: "መሬት፣ ዓድታትን ምምዝባልን",
    subtitle: "ማሕበረሰባት፣ ግዝኣትን ምምዝባልን",
    description:
      "ዝተገለጹ ኩነታት ምምዝባል፣ ኣብ ማሕበረሰባት ዝተፈጸሙ ለውጢታት፣ ጉዳያት ዋንነት መሬትን ካብ ገዛኦምን ዓድታቶምን ዝተፈልዩ ሰባት ዘጋጠሞም ተመኩሮታትን ምስናድ።",
    topics: [
      "ታሪኽ ዓድታት",
      "መዝገባት ምምዝባል",
      "ሰነዳት መሬትን ንብረትን",
    ],
  },
  {
    number: "04",
    id: "cultural-heritage",
    title: "ባህላውን ቋንቋውን ውርሻ",
    subtitle: "መንነት፣ ታሪኽን ቀጻልነት ባህልን",
    description:
      "ታሪኻዊ፣ ቋንቋዊን ባህላዊን ውርሻ ህዝቢ ትግርኛ ምምርማር፣ ልምድታት ግእዝ፣ ባህላዊ ትካላትን መንነት ማሕበረሰብን ሓዊሱ።",
    topics: [
      "ቋንቋን ውርሻን",
      "ታሪኻዊ ልምድታት",
      "ምዕቃብ ባህሊ",
    ],
  },
  {
    number: "05",
    id: "forced-service",
    title: "ግዱድ ኣገልግሎትን ኩነታት ህይወትን",
    subtitle: "ሰብኣዊ መሰላትን መዓልታዊ ኩነታትን",
    description:
      "ብዛዕባ ግዱድ ኣገልግሎት፣ ገደባት ናጽነት፣ ኩነታት ኣነባብራን ማሕበራውን ቁጠባውን ሳዕቤናቶምን ዝተመዝገቡ ጸብጻባት ምምርማር።",
    topics: [
      "ሃገራዊ ኣገልግሎት",
      "ኩነታት ኣነባብራ",
      "ናጽነትን መሰረታዊ መሰላትን",
    ],
  },
  {
    number: "06",
    id: "chain-of-command",
    title: "ሰንሰለት ትእዛዝ",
    subtitle: "መሪሕነት፣ ትካላትን ሓላፍነትን",
    description:
      "ኣወዳድባ ፖለቲካዊ፣ ወተሃደራውን ጸጥታውን ስልጣን ምምርማር፣ ከምኡውን ብዛዕባ ውሳነታት መሪሕነት፣ ትካላዊ ሓላፍነትን ተራ ውልቀሰባትን ዝቐርቡ ክስታት ምምርማር።",
    topics: [
      "ፖለቲካዊ መሪሕነት",
      "ኣወዳድባ ወተሃደራዊ ትእዛዝ",
      "ትካላት ጸጥታ",
      "ትካላዊ ሓላፍነት",
    ],
  },
  {
    number: "07",
    id: "statements",
    title: "መግለጺታትን ኣዋጃትን",
    subtitle: "ህዝባዊ መግለጺታትን ሰነዳዊ መዝገባትን",
    description:
      "ተዛማዲ ህዝባዊ መግለጺታት፣ ወግዓዊ ኣዋጃት፣ ዘረባታትን ሰነዳዊ ሓበሬታታትን ምእካብን ምምርማርን። ነፍሲ ወከፍ መዝገብ ኦርጅናል ምንጩ፣ ዕለቱን ድሕረ-ባይታኡን ክሕዝ ኣለዎ።",
    topics: [
      "ህዝባዊ ዘረባታት",
      "ወግዓዊ ኣዋጃት",
      "ሰነዳዊ መዝገባት",
    ],
  },
  {
    number: "08",
    id: "legal-framework",
    title: "ሕጋዊ ማዕቀፍ",
    subtitle: "ዓለምለኻዊ ሕግን ተሓታትነትን",
    description:
      "ኣብ ግብሪ ዝውዕሉ መትከላት ዓለምለኻዊ ሕጊ ምምርማር፣ እንተላይ ሕጋዊ ትርጉማት ምጽናት ዓሌት፣ ገበናት ኣንጻር ሰብኣውነት፣ ምስጓግን ካልኦት ከበድቲ ጥሕሰታት ሰብኣዊ መሰላትን።",
    topics: [
      "ስምምዕ ምክልኻል ምጽናት ዓሌት",
      "ገበናት ኣንጻር ሰብኣውነት",
      "ዓለምለኻዊ ገበናዊ ሓላፍነት",
      "ተሓታትነትን ፍትሕን",
    ],
  },
  {
    number: "09",
    id: "evidence-archive",
    title: "ማህደር መርትዖታትን ምንጭታትን",
    subtitle: "ሰነዳት፣ ምርምርን ምርግጋጽን",
    description:
      "ሰነዳት፣ ጸብጻባት፣ ምስክርነታት፣ ስእልታትን ካልኦት ተዛማዲ ንብረታትን ብዝተወደበ ኣገባብ ምቕራብ፣ ምስ ንጹራት መወከሲታትን ሓበሬታ ምንጭን።",
    topics: [
      "ጸብጻባትን ሕትመታትን",
      "ምስክርነታትን መዝገባትን",
      "ስእላዊ ሰነዳዊ መርትዖ",
      "ምርምርን መወከሲታትን",
    ],
  },
];

export default function TigrinyaGenocidePageTi() {
  const videoSrc = "/videos/tigrinya-genocide.mp4";
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = document.getElementById(
      "genocide-hero-video-ti"
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
      "genocide-hero-video-ti"
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
    <main
      lang="ti"
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* FULL-WIDTH VIDEO HERO */}
      <section
        className="relative flex min-h-[75svh] w-full items-center justify-center overflow-hidden bg-[#091725] md:min-h-[85svh]"
        aria-labelledby="genocide-hero-title-ti"
      >
        <video
          id="genocide-hero-video-ti"
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/tigrinya-genocide-poster.jpg"
        />

        <div className="absolute inset-0 bg-[#091725]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/80 via-transparent to-[#091725]/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-[#d5b46b] md:text-sm">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>

          <h1
            id="genocide-hero-title-ti"
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            ምጽናት ዓሌት ትግርኛ
          </h1>

          <div className="mx-auto mt-7 h-1 w-24 bg-[#c9a45c]" />

          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? "ቪድዮ ኣቋርጽ" : "ቪድዮ ኣጻውት"}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-[#c9a45c] bg-[#142b45]/80 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg transition duration-300 hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            <span className="text-base" aria-hidden="true">
              {isPlaying ? "Ⅱ" : "▶"}
            </span>

            <span>{isPlaying ? "ቪድዮ ኣቋርጽ" : "ቪድዮ ኣጻውት"}</span>
          </button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
            ታሪኻዊ መዝገብን ሰነዳዊ ምስናድን
          </p>

          <p className="text-base leading-8 text-[#42536a] md:text-lg">
            እዚ ክፍሊ ታሪኻዊ ምርምር፣ ውልቃዊ ምስክርነታት፣
            ሰነዳዊ መዝገባትን ሕጋዊ ትንተናን ብሓባር
            የቕርብ። እዚ ኣብ ህዝቢ ትግርኛ ዝተጸልዉ
            ክስታት ምስጓግ፣ ምምዝባልን ከበድቲ ጥሕሰታትን
            ንምምርማር ዝዓለመ እዩ።
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
                  ክፍሊ {section.number}
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
                    ምርምር • ሰነዳዊ ምስናድ • ምንጭታት
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
