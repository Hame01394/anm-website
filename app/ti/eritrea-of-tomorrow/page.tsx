"use client";

import { useRef, useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Person = {
  name: string;
  description: string;
  image: string;
};

type Category = {
  id: string;
  title: string;
  subtopics: string[];
};

/* =========================================================
   ኣቃውማ ስልጣን — ARCHITECTURE OF POWER
========================================================= */

const groups: Record<GroupId, Person[]> = {
  dictator: [
    {
      name: "Isaias Afwerki",
      description:
        "ኣብ ልዕሊ መንግስቲን ትካላቱን ውልቃዊ ቁጽጽር ዘካይድ ቀንዲ ሰብ።",
      image: "/images/isaias-afwerki-1.png",
    },
    {
      name: "Saba Haile",
      description:
        "በዓልቲ ቤት ኢሳያስ ኣፈወርቂ፣ ኣብ ዙርያ ፕረዚደንት ዝርከብ ናይ ስድራቤት ውሽጣዊ ዓንኬል ኣባል።",
      image: "/images/wife.png",
    },
    {
      name: "Abraham Afewerki",
      description:
        "ወዲ ኢሳያስ ኣፈወርቂ፣ ኣባል ናይቲ ኣብ ዙርያ ፕረዚደንት ዝርከብ ስድራቤት።",
      image: "/images/son.png",
    },
  ],

  military: [
    {
      name: "Filipos Weldehyones",
      description: "ሓለቓ ስታፍ ሓይልታት ምክልኻል።",
      image: "/images/military-filios-woldeyohannes.png",
    },
    {
      name: "Tekle Kiflay (Manjus)",
      description: "ላዕለዋይ ወተሃደራዊ ኣዛዚ።",
      image: "/images/military-tekle-manjus.png",
    },
    {
      name: "Military Commander 3",
      description: "ላዕለዋይ ወተሃደራዊ መሻርኽቲ ኣብ ኣወዳድባ ወተሃደራዊ ትእዛዝ።",
      image: "/images/military-commander-3.png",
    },
  ],

  security: [
    {
      name: "Abraha Kassa Nemariam",
      description: "ሓላፊ ሃገራዊ ጸጥታ።",
      image: "/images/security-abraha-kassa.png",
    },
    {
      name: "Security Official 2",
      description: "ላዕለዋይ ሓላፊ ኣብ መሓውር ሃገራዊ ጸጥታ።",
      image: "/images/security-official-2.png",
    },
    {
      name: "Security Official 3",
      description: "ላዕለዋይ ሓላፊ ኣብ መሓውር ሃገራዊ ጸጥታ።",
      image: "/images/security-official-3.png",
    },
  ],

  loyalists: [
    {
      name: "Yemane Gebreab",
      description: "ሓላፊ ፖለቲካዊ ጉዳያት ህግደፍ።",
      image: "/images/political-yemane-gebreab.png",
    },
    {
      name: "Yemane Gebremeskel",
      description: "ሚኒስተር ዜና።",
      image: "/images/political-yemane-gebremeskel.png",
    },
    {
      name: "Hagos Ghebrehiwot",
      description: "ሓላፊ ቁጠባዊ ጉዳያት ህግደፍ።",
      image: "/images/political-hagos-gebrehiwot.png",
    },
  ],
};

const circleLabels: Record<GroupId, string> = {
  dictator: "ኣምባገነንን ስድራቤቱን",
  military: "ወተሃደራዊ ኣዘዝቲ",
  security: "መሓውር ጸጥታ",
  loyalists: "ፖለቲካዊ ደገፍቲ",
};

const groupDescriptions: Record<GroupId, string> = {
  dictator: "ኣምባገነንን ስድራቤቱን",
  military: "ላዕለዎት ወተሃደራዊ ኣዘዝቲ",
  security: "ላዕለዎት ሓለፍቲ ጸጥታ",
  loyalists: "ላዕለዎት ፖለቲካዊ ደገፍቲ",
};

/* =========================================================
   ምፍራስ ኤርትራ — DESTRUCTION OF ERITREA
========================================================= */

const categories: Category[] = [
  {
    id: "social",
    title: "ማሕበራዊ ዕንወት",
    subtopics: [
      "ምጉዳል ብዝሒ ህዝቢ",
      "ምብትታን ስድራቤት",
      "ምብትታን ገጠራትን ዓድታትን",
      "ምጥፋእ ሰብኣዊ ዓቕሚ",
    ],
  },
  {
    id: "economic",
    title: "ቁጠባዊ ዕንወት",
    subtopics: [
      "ሸለልትነት መሰረተ ልምዓት",
      "ማይን ኤለክትሪክን",
      "መጎዓዝያ",
      "ቱሪዝም",
      "ቁጠባዊ ምዝሕታል",
      "ምምርኳስ ኣብ ገንዘብ ስደተኛታትን ማዕድንን",
    ],
  },
  {
    id: "military",
    title: "ወተሃደራዊ ዕንወት",
    subtopics: [
      "ዘይተወሰነ ግዜ ሃገራዊ ኣገልግሎት",
      "ዘይዘመነ ወተሃደራዊ ሓይሊ",
      "ምስ ዕድመ ዝደፍኡ መራሕቲ",
      "ሕጽረት ሞያዊ ምዕባለ",
      "ዘይእኹል ደሞዝን ጡረታን",
      "ምውታር ሕብረተሰብ",
    ],
  },
  {
    id: "environmental",
    title: "ከባብያዊ ዕንወት",
    subtopics: [
      "ጉድኣት ማዕድን",
      "ምብስባስ መሬት",
      "ምጉዳል ሃብቲ ማይ",
      "ብከላ",
      "ምጥፋእ ብዙሕነት ህይወታዊ ዓይነታት",
      "ተቓላዕነት ንለውጢ ክሊማ",
      "ሸለልትነት ከባቢ",
    ],
  },
  {
    id: "rights",
    title: "ምግሃስ ሰብኣዊ መሰላት",
    subtopics: [
      "ብዘይ ሕጋዊ መሰረት ምእሳር",
      "ብግዲ ምስዋር ሰባት",
      "ስቅያት",
      "ፖለቲካዊ ማእሰርቲ",
      "ምስጓግ ሃይማኖታት",
      "ግዱድ ጉልበታዊ ስራሕ",
      "ምጭፍላቕ ናጽነታት",
      "ዘይምህላው ፍትሒ",
    ],
  },
];

/* =========================================================
   ስእላዊ መግለጺ ሰባት
========================================================= */

function Portrait({
  person,
}: {
  person: Person;
}) {
  return (
    <article className="aop-person">
      <div className="aop-photo">
        <img src={person.image} alt={person.name} />
      </div>

      <h3>{person.name}</h3>
      <p>{person.description}</p>
    </article>
  );
}

/* =========================================================
   ክቢ መምረጺ
========================================================= */

function Circle({
  group,
  active,
  onActivate,
  onHover,
}: {
  group: GroupId;
  active: boolean;
  onActivate: () => void;
  onHover: (group: GroupId) => void;
}) {
  return (
    <button
      type="button"
      className={`aop-circle aop-${group} ${
        active ? "is-active" : ""
      }`}
      onMouseEnter={() => onHover(group)}
      onClick={onActivate}
      aria-pressed={active}
      aria-label={`ን${circleLabels[group]} ዳህስ`}
    >
      <span>{circleLabels[group]}</span>
    </button>
  );
}

/* =========================================================
   ቀንዲ ገጽ — DICTATORSHIP
========================================================= */

export default function DictatorshipPage() {
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

  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);

  const activate = (group: GroupId) => {
    setActiveGroup((current) =>
      current === group ? null : group
    );
  };

  const handleMouseEnter = (group: GroupId) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveGroup(group);
    }
  };

  const [activeCategory, setActiveCategory] = useState<string | null>(
    null
  );

  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <main className="w-full overflow-hidden">
      {/* =====================================================
          1 — ሓፈሻዊ መእተዊ
      ===================================================== */}

      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#101f35] text-white">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/dictatorship-hero-poster.jpg"
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="/videos/dictatorship-hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-[#101f35]/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-black uppercase leading-tight tracking-wide md:text-6xl lg:text-7xl">
            እቲ ሓቀኛ ኩነታት
            <span className="mt-3 block text-[#e6c987]">
              ምልኪ
            </span>
          </h1>

          <div className="mx-auto mt-8 h-1 w-24 bg-white" />
        </div>

        {!isPlaying && (
          <button
            type="button"
            onClick={playVideo}
            aria-label="ቪድዮ ኣጻውት"
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

      {/* =====================================================
          2 — ኣቃውማ ስልጣን
      ===================================================== */}

      <header className="bg-white px-5 py-16 text-center text-[#101f35] md:px-10 md:py-20">
        <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#9b7940]">
          ኣምባገነን ኢሳያስ ኣፈወርቂ
        </p>

        <h2 className="text-3xl font-black leading-tight md:text-5xl">
          ውልቃዊ ምልኪ
        </h2>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
      </header>

      <section className="aop-section">
        <div className="aop-heading">
          <h2>ኣቃውማ ስልጣን</h2>

          <p>
            ኣብ መንጎ ማእከላይ መሪሕነትን ኣብ ዙርያኡ ዝርከቡ
            ትካላትን ውልቀሰባትን ዘሎ ርክባት ዳህስሱ።
          </p>
        </div>

        <div className="aop-stage">
          <svg
            className="aop-connectors"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="line" d="M500 300 L150 105" />
            <path className="line" d="M500 300 L850 105" />
            <path className="line" d="M500 300 L500 520" />
          </svg>

          <div className="aop-node node-dictator">
            <Circle
              group="dictator"
              active={activeGroup === "dictator"}
              onActivate={() => activate("dictator")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-military">
            <Circle
              group="military"
              active={activeGroup === "military"}
              onActivate={() => activate("military")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-security">
            <Circle
              group="security"
              active={activeGroup === "security"}
              onActivate={() => activate("security")}
              onHover={handleMouseEnter}
            />
          </div>

          <div className="aop-node node-loyalists">
            <Circle
              group="loyalists"
              active={activeGroup === "loyalists"}
              onActivate={() => activate("loyalists")}
              onHover={handleMouseEnter}
            />
          </div>
        </div>

        {activeGroup !== null && (
          <div className="aop-details" key={activeGroup}>
            <div className="aop-details-heading">
              <div>
                <p className="aop-eyebrow">ዝርዝር ጉጅለ</p>

                <h2>{groupDescriptions[activeGroup]}</h2>
              </div>

              <button
                type="button"
                className="aop-reset-button"
                onClick={() => setActiveGroup(null)}
                aria-label="ዝርዝር ዕጸው"
              >
                <span aria-hidden="true">×</span>
                <span>ዕጸው</span>
              </button>
            </div>

            <div className="aop-portrait-layout">
              {groups[activeGroup].map((person) => (
                <Portrait key={person.name} person={person} />
              ))}
            </div>
          </div>
        )}

        <div className="aop-instructions">
          {activeGroup
            ? "ካልእ ክቢ ብምምራጽ ንኻልእ ጉጅለ ዳህስሱ፣ ወይ ነቲ ዝርዝር ንምሕባእ 'ዕጸው' ዝብል ጠውቑ።"
            : "ኣባላት ነፍሲ ወከፍ ጉጅለ ንምርኣይ ኣብ ሓደ ካብቶም ክቢታት ጠውቑ ወይ ማውስ ኣብ ልዕሊኡ ኣንብሩ።"}
        </div>
      </section>

      {/* =====================================================
          3 — ምፍራስ ኤርትራ
      ===================================================== */}

      <section
        id="destruction-of-eritrea"
        className="w-full bg-white text-[#101f35]"
      >
        <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#9b7940]">
            ሳዕቤናት ምልኪ
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            ምፍራስ ኤርትራ
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
        </header>

        <div className="w-full bg-[#101f35] px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            {/* ምድባት */}

            <nav
              aria-label="ምድባት ዕንወት"
              className="mb-10 flex gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible"
            >
              {categories.map((category, index) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => {
                      setActiveCategory(
                        isActive ? null : category.id
                      );
                      setActiveTopic(null);
                    }}
                    className={`min-h-[112px] min-w-[190px] flex-1 border px-5 py-5 text-left transition-colors duration-200 lg:min-w-0 ${
                      isActive
                        ? "border-[#d9bd82] bg-[#d9bd82] text-[#101f35]"
                        : "border-white/35 bg-transparent text-white hover:border-[#d9bd82] hover:bg-white/10"
                    }`}
                  >
                    <span className="mb-3 block text-xs font-bold tracking-[0.2em] opacity-70">
                      0{index + 1}
                    </span>

                    <span className="block text-sm font-extrabold leading-6">
                      {category.title}
                    </span>

                    <span className="mt-3 block text-xs font-bold">
                      {isActive ? "− ዕጸው" : "+ ዳህስስ"}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* ዝተመርጸ ምድብ */}

            {selectedCategory && (
              <div className="border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9b7940]">
                      ሳዕቤናት ዳህስሱ
                    </p>

                    <h3 className="text-2xl font-black md:text-3xl">
                      {selectedCategory.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(null);
                      setActiveTopic(null);
                    }}
                    className="border border-[#101f35]/40 px-4 py-2 text-xs font-bold text-[#101f35] transition hover:border-[#9b7940] hover:text-[#9b7940]"
                  >
                    ምድብ ዕጸው ×
                  </button>
                </div>

                {/* ንኡሳን ኣርእስቲ */}

                <div className="grid gap-3 md:grid-cols-2">
                  {selectedCategory.subtopics.map((topic, index) => {
                    const isSelected = activeTopic === topic;

                    return (
                      <button
                        key={topic}
                        type="button"
                        aria-expanded={isSelected}
                        onClick={() =>
                          setActiveTopic(
                            isSelected ? null : topic
                          )
                        }
                        className={`flex items-center justify-between gap-4 border px-5 py-5 text-left transition duration-200 ${
                          isSelected
                            ? "border-[#c9a45c] bg-[#f8f5ed] text-[#101f35]"
                            : "border-[#e3ddcf] bg-white text-[#101f35] hover:border-[#c9a45c] hover:bg-[#fcfaf5]"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-sm font-bold text-[#9b7940]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm font-bold">
                            {topic}
                          </span>
                        </span>

                        <span className="text-xl text-[#9b7940]">
                          {isSelected ? "−" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* ዝርዝር መግለጺ */}

                {activeTopic && (
                  <article
                    className="mt-8 border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9"
                    aria-live="polite"
                  >
                    <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#9b7940]">
                      {selectedCategory.title}
                    </p>

                    <h4 className="mb-6 text-xl font-black md:text-2xl">
                      {activeTopic}
                    </h4>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <h5 className="mb-3 text-sm font-bold text-[#9b7940]">
                          መብርሂን መርትዖን
                        </h5>

                        <p className="text-sm leading-8 text-slate-600">
                          ብዛዕባ {activeTopic} ዝምልከት መጽናዕቲ፣
                          ዝተረጋገጸ መርትዖን ዝርዝር መብርሂን
                          ኣብዚ ክቐርብ እዩ።
                        </p>

                        <p className="mt-5 text-sm leading-8 text-slate-600">
                          እዚ ክፋል እዚ ንዝተመዝገቡ ሓቅታት፣
                          ዝተረጋገጹ ስታቲስቲክስን መረዳእታን፣
                          ቀጥታዊ ምስክርነታትን ካብ እሙናት
                          ምንጭታት ዝተወስዱ ጸብጻባትን
                          ንምቕራብ ዝተዳለወ እዩ።
                        </p>
                      </div>

                      <div className="border-t border-[#e3ddcf] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <h5 className="mb-3 text-sm font-bold text-[#9b7940]">
                          ደገፍቲ መረዳእታታት
                        </h5>

                        <ul className="space-y-3 text-sm leading-7 text-slate-600">
                          <li>• እቲ ጉዳይ ዝምልከቶ ስእልታት</li>
                          <li>• ዝተረጋገጹ ስታቲስቲክስን መረዳእታን</li>
                          <li>• ምስክርነታትን ውልቃዊ ተመኩሮታትን</li>
                          <li>• ደገፍቲ ጸብጻባትን ምንጭታትን</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          4 — መደምደምታ: ርክብ ክልቲኦም ክፋላት
      ===================================================== */}

      <section
        id="relationship-between-sections"
        className="relationship-section"
      >
        <div className="relationship-container">
          <div className="relationship-heading">
            <p>ንስርዓቱ ምርዳእ</p>

            <h2>
              ካብ ውልቃዊ ምልኪ
              <span>ናብ ሃገራዊ ዕንወት</span>
            </h2>

            <div className="relationship-divider" />

            <p className="relationship-intro">
              ምእካብ ፖለቲካዊ ስልጣን ኣብ ሓደ ሰብ እቲ ምልኪ
              ብኸመይ ቁጽጽር ከም ዝገብር የብርህ። ሳዕቤናቱ
              ድማ እቲ ስርዓት ኣብ ልዕሊ ሃገርን ህዝብን ዘስዕቦ
              ጉድኣት የርኢ።
            </p>
          </div>

          <div className="relationship-diagram">
            {/* ውልቃዊ ምልኪ */}

            <div className="relationship-block">
              <div className="relationship-main">
                <span className="relationship-number">01</span>

                <h3>ውልቃዊ ምልኪ</h3>

                <p className="relationship-subtitle">
                  ምእካብ ፖለቲካዊ ስልጣን
                </p>
              </div>

              <div className="relationship-detail">
                <span className="relationship-detail-label">
                  ኣወዳድባ ስልጣን
                </span>

                <h4>ኣቃውማ ስልጣን</h4>

                <p>
                  ወተሃደራዊ <span>·</span> ጸጥታ <span>·</span>{" "}
                  ፖለቲካዊ ደገፍቲ
                </p>
              </div>

              <div className="relationship-detail relationship-breakdown">
                <span className="relationship-detail-label">
                  ትካላዊ ሳዕቤን
                </span>

                <h4>ምፍራስ ትካላት</h4>

                <p>
                  ናጻ ተሓታትነትን ውጽኢታዊ ምቁጽጻር ስልጣንን
                  ዘይምህላው።
                </p>
              </div>
            </div>

            {/* መራኸቢ ምልክት */}

            <div className="relationship-connector">
              <div className="relationship-line" />

              <div className="relationship-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <span>ሳዕቤናት</span>
            </div>

            {/* ምፍራስ ኤርትራ */}

            <div className="relationship-block relationship-destruction">
              <div className="relationship-main">
                <span className="relationship-number">02</span>

                <h3>ምፍራስ ኤርትራ</h3>

                <p className="relationship-subtitle">
                  ኣብ ልዕሊ ሃገር ዝወርድ ሳዕቤናት
                </p>
              </div>

              <div className="relationship-detail relationship-impact">
                <span className="relationship-detail-label">
                  ሃገራዊ ጽልዋ
                </span>

                <div className="relationship-impact-list">
                  <span>ማሕበራዊ</span>
                  <span>ቁጠባዊ</span>
                  <span>ወተሃደራዊ</span>
                  <span>ከባብያዊ</span>
                  <span>ሰብኣዊ መሰላት</span>
                </div>
              </div>
            </div>
          </div>

          {/* መደምደምታ */}

          <div className="relationship-conclusion">
            <p>
              ካብ ምእካብ ስልጣን ኣብ ሓደ ሰብ ክሳብ ምፍራስ ሓንቲ
              ሃገር።
            </p>

            <h3>
              ንስርዓቱ ምርዳእ፡ ንሳዕቤናቱ ምርዳእ ማለት እዩ።
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx global>{`
        /* ARCHITECTURE OF POWER */

        .aop-section {
          width: 100%;
          padding: 65px 24px 75px;
          background: #10263d;
          color: #ffffff;
          overflow: hidden;
        }

        .aop-heading {
          max-width: 850px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .aop-heading h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
        }

        .aop-heading p {
          margin: 0;
          color: #cbd5df;
          font-size: 16px;
          line-height: 1.9;
        }

        .aop-stage {
          position: relative;
          width: 100%;
          max-width: 1150px;
          height: 600px;
          margin: 0 auto;
          isolation: isolate;
        }

        .aop-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .aop-connectors .line {
          fill: none;
          stroke: #c6a45c;
          stroke-width: 2;
          opacity: 0.75;
        }

        .aop-node {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .node-dictator {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .node-military {
          left: 7%;
          top: 7%;
        }

        .node-security {
          right: 7%;
          top: 7%;
        }

        .node-loyalists {
          left: 50%;
          bottom: 3%;
          transform: translateX(-50%);
        }

        .aop-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 145px;
          height: 145px;
          padding: 18px;
          border: 2px solid #c6a45c;
          border-radius: 50%;
          background: #ffffff;
          color: #10263d;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .aop-circle span {
          max-width: 115px;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.6;
        }

        .aop-circle:hover,
        .aop-circle.is-active {
          background: #ffffff;
          border-color: #e4c47c;
          color: #10263d;
          box-shadow: 0 0 0 8px rgba(198, 164, 92, 0.18);
        }

        .aop-circle:focus-visible {
          outline: 3px solid #ffffff;
          outline-offset: 5px;
        }

        .aop-details {
          width: 100%;
          max-width: 1050px;
          margin: 10px auto 0;
          padding: 30px;
          border-top: 1px solid rgba(198, 164, 92, 0.65);
          animation: aopAppear 0.4s ease both;
        }

        .aop-details-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .aop-eyebrow {
          margin: 0 0 8px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .aop-details-heading h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
        }

        .aop-portrait-layout {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: start;
          gap: clamp(16px, 3vw, 45px);
        }

        .aop-person {
          min-width: 0;
          max-width: 245px;
          margin: 0 auto;
          text-align: center;
          color: #ffffff;
        }

        .aop-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 2px solid #c6a45c;
          border-radius: 5px;
          background: #1c3b55;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
        }

        .aop-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .aop-person h3 {
          margin: 13px 0 7px;
          color: #e4c47c;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .aop-person p {
          margin: 0 auto;
          max-width: 245px;
          color: #d2dbe3;
          font-size: 13px;
          line-height: 1.9;
        }

        .aop-reset-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 42px;
          padding: 9px 17px;
          border: 1px solid rgba(228, 196, 124, 0.75);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .aop-reset-button:hover {
          background: #c6a45c;
          color: #10263d;
        }

        .aop-reset-button span:first-child {
          font-family: Arial, sans-serif;
          font-size: 22px;
          line-height: 1;
        }

        .aop-instructions {
          min-height: 24px;
          margin: 25px auto 0;
          color: #bdc9d4;
          text-align: center;
          font-size: 13px;
          line-height: 1.9;
        }

        @keyframes aopAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* FINAL RELATIONSHIP DIAGRAM */

        .relationship-section {
          width: 100%;
          padding: 90px 24px;
          background: #101f35;
          color: #ffffff;
        }

        .relationship-container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
        }

        .relationship-heading {
          max-width: 850px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .relationship-heading > p:first-child {
          margin: 0 0 18px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .relationship-heading h2 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 900;
          line-height: 1.4;
        }

        .relationship-heading h2 span {
          display: block;
          margin-top: 10px;
          color: #e6c987;
        }

        .relationship-divider {
          width: 80px;
          height: 3px;
          margin: 28px auto;
          background: #c6a45c;
        }

        .relationship-intro {
          max-width: 700px;
          margin: 0 auto;
          color: #d2dbe3;
          font-size: 16px;
          line-height: 2;
        }

        .relationship-diagram {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 90px minmax(0, 1fr);
          align-items: center;
          gap: 20px;
        }

        .relationship-block {
          min-width: 0;
          border: 1px solid rgba(198, 164, 92, 0.7);
          background: #142b45;
        }

        .relationship-main {
          min-height: 190px;
          padding: 35px 25px;
          border-bottom: 1px solid rgba(198, 164, 92, 0.55);
          text-align: center;
        }

        .relationship-number {
          display: block;
          margin-bottom: 15px;
          color: #c6a45c;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .relationship-main h3 {
          margin: 0;
          color: #e6c987;
          font-size: clamp(22px, 2.5vw, 31px);
          font-weight: 900;
          line-height: 1.5;
        }

        .relationship-subtitle {
          margin: 15px 0 0;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.9;
        }

        .relationship-detail {
          padding: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          text-align: center;
        }

        .relationship-detail:last-child {
          border-bottom: 0;
        }

        .relationship-detail-label {
          display: block;
          margin-bottom: 12px;
          color: #c6a45c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .relationship-detail h4 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
        }

        .relationship-detail p {
          margin: 0;
          color: #d2dbe3;
          font-size: 13px;
          line-height: 2;
        }

        .relationship-detail p span {
          color: #e6c987;
          padding: 0 4px;
        }

        .relationship-breakdown {
          background: rgba(0, 0, 0, 0.13);
        }

        .relationship-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #e6c987;
        }

        .relationship-line {
          width: 100%;
          height: 2px;
          background: #c6a45c;
        }

        .relationship-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin-top: -35px;
          border: 1px solid #c6a45c;
          border-radius: 50%;
          background: #101f35;
        }

        .relationship-arrow svg {
          width: 22px;
          height: 22px;
        }

        .relationship-connector > span {
          font-size: 9px;
          font-weight: 800;
          text-align: center;
        }

        .relationship-impact {
          min-height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .relationship-impact-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px;
        }

        .relationship-impact-list span {
          padding: 9px 12px;
          border: 1px solid rgba(198, 164, 92, 0.65);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
        }

        .relationship-conclusion {
          max-width: 900px;
          margin: 65px auto 0;
          padding: 35px 20px 0;
          border-top: 1px solid rgba(198, 164, 92, 0.55);
          text-align: center;
        }

        .relationship-conclusion p {
          margin: 0 0 16px;
          color: #c6a45c;
          font-size: 12px;
          font-weight: 800;
          line-height: 2;
        }

        .relationship-conclusion h3 {
          margin: 0;
          color: #ffffff;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          line-height: 1.8;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .aop-stage {
            height: 540px;
          }

          .aop-circle {
            width: 120px;
            height: 120px;
            padding: 12px;
          }

          .aop-circle span {
            font-size: 13px;
          }

          .aop-details {
            padding: 25px 10px;
          }

          .aop-portrait-layout {
            gap: 16px;
          }

          .aop-person h3 {
            font-size: 14px;
          }

          .aop-person p {
            font-size: 12px;
          }

          .relationship-diagram {
            grid-template-columns: minmax(0, 1fr) 55px minmax(0, 1fr);
            gap: 12px;
          }

          .relationship-main {
            padding: 28px 16px;
          }

          .relationship-detail {
            padding: 20px 14px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .aop-section {
            padding: 45px 15px 50px;
          }

          .aop-heading {
            margin-bottom: 25px;
          }

          .aop-heading p {
            font-size: 14px;
          }

          .aop-stage {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            justify-items: center;
            align-items: center;
            gap: 22px 10px;
            height: auto;
            min-height: 0;
            padding: 15px 0 25px;
          }

          .aop-connectors {
            display: none;
          }

          .aop-node {
            position: static;
            inset: auto;
            transform: none;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .node-dictator,
          .node-military,
          .node-security,
          .node-loyalists {
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            transform: none;
          }

          .aop-circle {
            width: 112px;
            height: 112px;
            padding: 12px;
          }

          .aop-circle span {
            font-size: 12px;
          }

          .aop-details {
            margin-top: 5px;
            padding: 22px 0;
          }

          .aop-details-heading {
            align-items: flex-start;
            margin-bottom: 22px;
          }

          .aop-details-heading h2 {
            font-size: 19px;
            line-height: 1.7;
          }

          .aop-reset-button {
            flex-shrink: 0;
            min-height: 40px;
            padding: 8px 12px;
            font-size: 11px;
          }

          .aop-portrait-layout {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 9px;
          }

          .aop-person {
            width: 100%;
            max-width: none;
          }

          .aop-photo {
            aspect-ratio: 3 / 4;
          }

          .aop-person h3 {
            margin-top: 9px;
            font-size: 11px;
            line-height: 1.6;
            overflow-wrap: anywhere;
          }

          .aop-person p {
            font-size: 10px;
            line-height: 1.7;
            overflow-wrap: anywhere;
          }

          .aop-instructions {
            font-size: 12px;
            line-height: 1.8;
            padding: 0 8px;
          }

          .relationship-section {
            padding: 60px 17px;
          }

          .relationship-heading {
            margin-bottom: 40px;
          }

          .relationship-intro {
            font-size: 14px;
          }

          .relationship-diagram {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .relationship-main {
            min-height: 155px;
            padding: 25px 16px;
          }

          .relationship-main h3 {
            font-size: 24px;
          }

          .relationship-detail {
            padding: 22px 15px;
          }

          .relationship-connector {
            min-height: 70px;
            gap: 7px;
          }

          .relationship-line {
            width: 2px;
            height: 24px;
          }

          .relationship-arrow {
            width: 42px;
            height: 42px;
            margin-top: -2px;
            transform: rotate(90deg);
          }

          .relationship-connector > span {
            font-size: 9px;
          }

          .relationship-impact {
            min-height: 150px;
          }

          .relationship-conclusion {
            margin-top: 45px;
            padding: 28px 5px 0;
          }

          .relationship-conclusion p {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aop-section *,
          .aop-section *::before,
          .aop-section *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}