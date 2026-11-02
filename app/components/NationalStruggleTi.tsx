
"use client";

import { useRef, useState } from "react";

const documentaries = [
  {
    id: "governance",
    number: "01",
    title: "ምምሕዳር ብምልኪ",
    category: "ፖለቲካዊ ስርዓት",
    description:
      "ኣቃውማ ፖለቲካዊ ስልጣን፣ ምእካብ ስልጣን ኣብ ሓደ ኣካል፣ ከምኡውን ናጻን ካብ ጽልዋ ዝተሓለዉን ትካላት ፖለቲካ ምህላው ወይ ምድኻሞም ይምርምር።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "repression",
    number: "02",
    title: "ፖለቲካዊ ጭቆና",
    category: "ሲቪላዊ ናጽነታት",
    description:
      "ኣብ ፖለቲካዊ ምውዳብ፣ ህዝባዊ ርእይቶ ምግላጽ፣ ናጻ ጋዜጠኝነት፣ ምእካብን ንጥፈታት ተቓውሞን ዝግበር ገደባት ይድህስስ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "human-rights",
    number: "03",
    title: "መሰላት ሰብን ፖለቲካዊ እሱራትን",
    category: "መሰላት ሰብ",
    description:
      "ብሰነዳት ዝተረጋገጹ ጉዳያት፣ ኩነታት ማእሰርቲ፣ ሕጋዊ መስርሕ ፍትሒ ከምኡውን ኣህጉራዊ ጸብጻባት መሰላት ሰብ ይምርምር።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "economy",
    number: "04",
    title: "ቁጠባዊ ጸገማት",
    category: "ቁጠባዊ ኩነታት",
    description:
      "ቁጠባዊ ኩነታት፣ ውሱን ዕድላት ናይ ውልቃዊ ትካላት፣ ብድሆታት ወፍሪ፣ ስራሕን ዕንቅፋታት ልምዓትን ይድህስስ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "migration",
    number: "05",
    title: "ምንካይ ብዝሒ ህዝብን ስደትን",
    category: "ብዝሒ ህዝብን ስደትን",
    description:
      "ስደት፣ ምፍንቓል፣ ለውጢ ብዝሒ ህዝቢ፣ ምውጻእ መንእሰያትን ኣብ ነዊሕ ግዜ ኣብ ሃገራዊ ልምዓት ዘለዎ ጽልዋን ይድህስስ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "national-service",
    number: "06",
    title: "ሃገራዊ ኣገልግሎትን ወተሃደራዊ ትካላትን",
    category: "ሃገራዊ ኣገልግሎት",
    description:
      "ሃገራዊ ኣገልግሎት፣ ወተሃደራዊ ትካላት፣ ተራ መንግስቲ፣ ከምኡውን ሳዕቤናት ናይ ነዊሕ ግዜ ኣገልግሎት ይምርምር።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "regional-security",
    number: "07",
    title: "ዞባዊ ድሕነትን ወጻኢ ዝምድናታትን",
    category: "ዞባዊ ጉዳያት",
    description:
      "ዞባዊ ኣቀማምጣ ኤርትራ፣ ምስ ጎረባብቲ ሃገራት ዘለዋ ዝምድና፣ ድሕነት ቀይሕ ባሕሪን ሰፊሕ ጂኦፖለቲካዊ ኩነታትን ይድህስስ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "accountability",
    number: "08",
    title: "ብልሽውናን ተሓታትነት ትካላትን",
    category: "ህዝባዊ ተሓታትነት",
    description:
      "ግሉጽነት፣ ህዝባዊ ምምሕዳር፣ ናጽነት ትካላትን ኣገባባት ተሓታትነትን ይድህስስ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "martyrs-veterans",
    number: "09",
    title: "ሰማእታትን ገዳይም ተጋደልትን",
    category: "ታሪኽን ውርሻን",
    description:
      "ኣብ ዝምልከቶም ዘተኣማምኑ ዶክመንታዊ ሓበሬታታት ተመርኲሱ፣ ተመኩሮታት፣ ኣበርክቶን ታሪኻዊ ኣገዳስነትን ሰማእታትን ገዳይም ተጋደልትን የቕርብ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
    sourceUrl: "",
  },
];

export default function NationalStruggleTi() {
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
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#a77d32]">
              ኤርትራ ብትሕቲ ምልኪ
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              ክንገጥሞም ዘለና ብድሆታት
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#526174] sm:text-lg">
              ከቢድ ማሕበራዊ፣ ቁጠባዊ፣ ስነ-ህዝባዊ፣ ከባቢያዊን ሰብኣዊ መሰላትን ቅልውላዋት።
            </p>
          </div>
        </div>

        {/* FEATURED DOCUMENTARY */}
        <div className="overflow-hidden rounded-xl border border-[#142b45]/15 bg-[#172b42] shadow-2xl">
          <div className="relative aspect-video w-full bg-black">
            {activeDocumentary.videoUrl ? (
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
                    srcLang="ti"
                    label="ትግርኛ"
                    default
                  />
                )}

                መርበብ ሓበሬታኻ ቪድዮ ክጻወት ኣይክእልን እዩ።
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

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#c9a45c]">
                  ቀንዲ ዶክመንታዊ ፊልም
                </p>

                <h3 className="max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
                  {activeDocumentary.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-300">
                  ኣብዚ ኣርእስቲ ዝምልከት ቪድዮ ምስ ዝውሰኽ፣ ዶክመንታዊ ምስልታት ኣብዚ ክቐርቡ እዮም።
                </p>
              </div>
            )}
          </div>

          {/* FEATURED VIDEO INFORMATION */}
          <div className="grid gap-6 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#c9a45c]">
                {activeDocumentary.category}
              </p>

              <h3 className="text-2xl font-bold sm:text-3xl">
                {activeDocumentary.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-300 sm:text-base">
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
                ተወሳኺ ምንጪ ↗
              </a>
            )}
          </div>
        </div>

        {/* DOCUMENTARY LIBRARY */}
        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a77d32]">
                ናብ ቤት መዘክር ዶክመንታዊ ፊልምታት
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#142b45] sm:text-2xl">
                ዛዕባታት ዶክመንታዊ ፊልምታት
              </h3>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="ንዶክመንታዊ ፊልምታት ናብ ጸጋም ኣንቀሳቕስ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="ንዶክመንታዊ ፊልምታት ናብ የማን ኣንቀሳቕስ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
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
                        ተመሪጹ
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#e6c987]">
                      {documentary.category}
                    </p>

                    <h4 className="min-h-[48px] text-sm font-bold leading-7 text-white">
                      {documentary.title}
                    </h4>

                    <p className="mt-2 text-xs text-gray-400">
                      ነዚ ዛዕባ ዶክመንታዊ ፊልም ርአ →
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-1 text-xs leading-6 text-[#64748b]">
            ኣብ ላዕሊ ንምቕራብ ሓደ ዛዕባ ምረጽ። ኣብ ሞባይል ተጠቒምካ ንኻልኦት ዛዕባታት ብኣግማድ ኣንቀሳቕስ።
          </p>
        </div>
      </div>
    </section>
  );
}
