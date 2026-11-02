
"use client";

import { useRef, useState } from "react";

const futureTopics = [
  {
    id: "industrialization",
    number: "01",
    title: "ስነ-ኢንዱስትሪያዊ ምዕባለ",
    category: "ኢንዱስትሪን ምፍራይን",
    description:
      "ውጽኢታዊ ኢንዱስትሪታት፣ ምፍራይ ኣቕሑ፣ መስርሕ ምትሕልላፍ ፍርያትን ዞባታት ኢንዱስትሪን ንምምዕባል ዘሎ ዕድላት ይድህስስ። ወፍሪ፣ ሞያዊ ክእለት ዘለዎም ሰራሕተኛታት፣ ዝተኣማምን ትሕተ-ቅርጺ፣ ጸዓትን ውጽኢታውያን ትካላትን ንዘላቒ ኢንዱስትሪያዊ ምዕባለ ክሕግዙ ይኽእሉ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "modern-cities",
    number: "02",
    title: "ዘመናዊ ከተማታትን ዓበይቲ ዓድታትን",
    category: "ምዕባለ ከተማ",
    description:
      "ዝተመሓየሸ መንበሪ ኣባይቲ፣ ምቹእ ህዝባዊ ቦታታት፣ ዝተኣማምን መጓዓዝያ፣ ኣገደስቲ ኣገልግሎታትን ውጽኢታዊ ህዝባዊ ምምሕዳራትን ዝሓቖፈ ዘመናዊ ምዕባለ ከተማ ይስእል። ብግቡእ ዝተሓንጸጹ ከተማታትን ዓበይቲ ዓድታትን ጽሬት ህይወት ከመሓይሹን ቁጠባዊ ንጥፈታት ክድግፉን ይኽእሉ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "ports-airports",
    number: "03",
    title: "ወደባትን መዓርፎ ነፈርትን",
    category: "ርክብን ንግድን",
    description:
      "ስትራተጂያዊን ቁጠባዊን ዓቕሚ ወደባት፣ መዓርፎ ነፈርቲ፣ ትራንስፖርት ኣቑሑን ኣህጉራዊ ርክባትን ይድህስስ። ዘመናዊ መራኸቢ መጓዓዝያ ማሕበረሰባት ንምትእስሳር፣ ንግዲ ንምቅላልን ዕድላት ወፍሪ ንምፍጣርን ክሕግዝ ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "agriculture",
    number: "04",
    title: "ሕርሻ",
    category: "መግብን ገጠራዊ ምዕባለን",
    description:
      "ዘመናዊ ምፍራይ ሕርሻ፣ መስኖ፣ ምስንዳእ ፍርያት ሕርሻ፣ ቴክኖሎጂ ሕርሻን ገጠራዊ ምዕባለን ዘለዎም ዕድላት ይድህስስ። ወፍሪ ኣብ ክእለት፣ ትሕተ-ቅርጺን ውጽኢታዊ ሕርሻን ድሕነት መግቢን ናብራ ህዝብን ከደልድል ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "digital-transformation",
    number: "05",
    title: "ዲጂታላዊ ለውጢ",
    category: "ቴክኖሎጂን ምህዞን",
    description:
      "ዲጂታላዊ ትሕተ-ቅርጺ፣ ኣብ ቴክኖሎጂ ዝተመርኮሱ ኣገልግሎታት፣ ምህዞን ዲጂታላዊ ምምሕዳርን ይድህስስ። ዝሓሸ ርክብን ኣጠቓቕማ ቴክኖሎጂን ንመንእሰያት፣ ንትካላት ንግዲን ህዝባዊ ትካላትን ዝዓበዩ ዕድላት ክፈጥር ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "education",
    number: "06",
    title: "ትምህርቲ",
    category: "ፍልጠትን ክእለትን",
    description:
      "ዘመናዊ ዩኒቨርሲታት፣ ቴክኒካዊ ትምህርቲ፣ ሞያዊ ስልጠና፣ ትካላት ምርምርን ዝተመሓየሹ ዕድላት ትምህርትን ይስእል። ትምህርትን ናይ ምሉእ ህይወት ትምህርቲን ንሃገራዊ ምዕባለ ዘድሊ ፍልጠትን ክእለትን ንምምዕባል ክሕግዝ ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "healthcare",
    number: "07",
    title: "ኣገልግሎት ጥዕና",
    category: "ጥዕናን ድሕነት ህይወትን",
    description:
      "ምምዕባል ዘመናዊ ሆስፒታላት፣ ትሕተ-ቅርጺ ጥዕና፣ ሕክምናዊ ትምህርቲ፣ ህዝባዊ መደባት ጥዕናን ምብጻሕ ኣገደስቲ ኣገልግሎታትን ይድህስስ። ዝሓየለ ስርዓት ጥዕና ህይወት ክዕቅብን ጥዑያት ማሕበረሰባት ክሃንጽን ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "cultural-renaissance",
    number: "08",
    title: "ምልሕሓሕ ባህላዊ ህዳሰ",
    category: "ባህልን ቅርስን",
    description:
      "ብምዕቃብ ቅርሲ፣ ምምዕባል ስነ-ጥበብ፣ ትምህርትን ምኽባር ሃገራዊ ልምድታትን ዳግማይ ዝለምለመ ባህላዊ ህይወት ይስእል። ባህላዊ ኣገላልጻ ወለዶታት ከራኽብን ብርእሰ-ተኣማንነት ዝተላዕለ ፈጠራዊ ሕብረተሰብ ክፈጥርን ይኽእል።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
  {
    id: "institutional-modernization",
    number: "09",
    title: "ዘመናዊ ምምሕዳር ትካላት",
    category: "ምምሕዳርን ህዝባዊ ኣገልግሎትን",
    description:
      "ሞያዊ ህዝባዊ ምምሕዳር፣ ናጻ ትካላት፣ ዘመናዊ ህዝባዊ ኣገልግሎታትን ተሓታትነት ዘለዎ ምምሕዳርን ይድህስስ። ብሕገ-መንግስቲ ዝሰርሑ ውጽኢታውያን ትካላት ቀጻልነት ከረጋግጹ፣ መሰላት ክሕልዉን ንህዝቢ ከገልግሉን ይኽእሉ።",
    videoUrl: "",
    poster: "",
    subtitleUrl: "",
  },
];

export default function FutureVisionTi() {
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
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION INTRODUCTION */}
        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#a77d32]">
              መጻኢ ዕድል
            </p>

            <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              <span className="block">ሓያላት ትካላት · ቁጠባዊ ብልጽግና</span>
              <span className="block">ባህላዊ ህዳሰ</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#526174] sm:text-lg">
              ምውዳቕ ምልኪ መጀመርታ ጥራይ እዩ። ዕማምና ሓያላት ትካላት ምህናጽ፣ ዘላቒ ቁጠባዊ ብልጽግና ምፍጣርን ሃገራዊ ባህላዊ ቅርሲ ዳግም ምሕዳስን እዩ።
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
                    srcLang="ti"
                    label="ትግርኛ"
                    default
                  />
                )}

                መርበብ ሓበሬታኻ ቪድዮ ክጻወት ኣይክእልን እዩ።
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

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#142b45]">
                  ራእይ ልምዓት
                </p>

                <h3 className="max-w-2xl text-2xl font-extrabold text-[#142b45] sm:text-3xl">
                  {activeTopic.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-[#263d55]">
                  ኣብዚ ዛዕባ ዝምልከት ምስላዊ ቪድዮ ምስ ዝውሰኽ፣ ኣብዚ ክቐርብ እዩ።
                </p>
              </div>
            )}
          </div>

          {/* VIDEO INFORMATION */}
          <div className="grid gap-6 p-6 sm:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a77d32]">
                {activeTopic.category}
              </p>

              <h3 className="text-2xl font-bold text-[#142b45] sm:text-3xl">
                {activeTopic.title}
              </h3>

              <p className="mt-4 max-w-4xl text-sm leading-8 text-[#526174] sm:text-base">
                {activeTopic.description}
              </p>
            </div>
          </div>
        </div>

        {/* DEVELOPMENT TOPICS */}
        <div className="mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a45c]">
                መጻኢ ዕድል ምህናጽ
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                መጻኢ ሃገራዊ ምዕባለ ዳህስስ
              </h3>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="ንዛዕባታት ናብ ጸጋም ኣንቀሳቕስ"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:border-[#c9a45c] hover:bg-white hover:text-[#142b45]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="ንዛዕባታት ናብ የማን ኣንቀሳቕስ"
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
                        ተመሪጹ
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#a77d32]">
                      {topic.category}
                    </p>

                    <h4 className="min-h-[48px] text-sm font-bold leading-7 text-[#142b45]">
                      {topic.title}
                    </h4>

                    <p className="mt-2 text-xs text-[#64748b]">
                      እዚ ዕድል ዳህስስ →
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-1 text-xs leading-6 text-white/70">
            ኣብ ላዕሊ ንምቕራብ ሓደ ዛዕባ ምረጽ። ኣብ ሞባይል ንኻልኦት ዛዕባታት ብኣግማድ ኣንቀሳቕስ።
          </p>
        </div>

        {/* IMPORTANT DISTINCTION */}
        <div className="mt-14 border-l-2 border-[#c9a45c] bg-white px-6 py-6 shadow-sm sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a77d32]">
            ራእይ እምበር ውሕስነት ኣይኮነን
          </p>

          <p className="mt-3 max-w-4xl text-sm leading-8 text-[#526174] sm:text-base">
            እዞም ምስላዊ መቕረባት ክኾኑ ዝኽእሉ ኣንፈታት ሃገራዊ ምዕባለ የርእዩ። እዚኦም ሓሳባትን ራእያትን እምበር ውሕስነት ዘለዎም ውጽኢታት ኣይኮኑን። ንምዕዋቶም ህዝባዊ ተሳትፎ፣ ጥዑያት ፖሊሲታት፣ ወፍሪ፣ ብቕዓት ዘለዎም ትካላትን ቀጻሊ ሃገራዊ ጻዕርን የድሊ። ዝኾነ ሓሳባዊ ቪድዮ ብንጹር ከም መግለጺ ሓሳብ ክምልከት ኣለዎ።
          </p>
        </div>
      </div>
    </section>
  );
}
