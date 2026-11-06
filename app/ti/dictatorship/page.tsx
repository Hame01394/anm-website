
"use client";

import { useRef, useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Person = {
  name: string;
  description: string;
  image: string;
};

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
        "በዓልቲ ቤት ኢሳያስ ኣፍወርቂ፡ ኣባል ናይቲ ኣብ ዙርያ ፕረዚደንት ዘሎ ናይ ስድራቤት ውሽጣዊ ክቢ።",
      image: "/images/wife.png",
    },
    {
      name: "Abraham Afewerki",
      description:
        "ወዲ ኢሳያስ ኣፍወርቂ፡ ኣባል ናይታ ፕረዚደንታዊት ስድራቤት።",
      image: "/images/son.png",
    },
  ],
  military: [
    {
      name: "Filipos Weldehyones",
      description: "ሓላፊ ስታፍ ሓይልታት ምክልኻል።",
      image: "/images/military-filios-woldeyohannes.png",
    },
    {
      name: "Tekle Kiflay (Manjus)",
      description: "ላዕለዋይ ኣዛዚ ወተሃደራዊ ሓይሊ።",
      image: "/images/military-tekle-manjus.png",
    },
    {
      name: "Military Commander 3",
      description: "ላዕለዋይ ወተሃደራዊ መሻርኽቲ።",
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
      description: "ላዕለዋይ ሰብ ኣብ መሓውር ሃገራዊ ጸጥታ።",
      image: "/images/security-official-2.png",
    },
    {
      name: "Security Official 3",
      description: "ላዕለዋይ ሰብ ኣብ መሓውር ሃገራዊ ጸጥታ።",
      image: "/images/security-official-3.png",
    },
  ],
  loyalists: [
    {
      name: "Yemane Gebreab",
      description: "ሓላፊ ፖለቲካዊ ጉዳያት PFDJ።",
      image: "/images/political-yemane-gebreab.png",
    },
    {
      name: "Yemane Gebremeskel",
      description: "ሚኒስተር ዜና።",
      image: "/images/political-yemane-gebremeskel.png",
    },
    {
      name: "Hagos Ghebrehiwot",
      description: "ሓላፊ ቁጠባዊ ጉዳያት PFDJ።",
      image: "/images/political-hagos-gebrehiwot.png",
    },
  ],
};

const circleLabels: Record<GroupId, string> = {
  dictator: "ኣምባገነን",
  military: "ወተሃደራዊ ኣዘዝቲ",
  security: "መሓውር ጸጥታ",
  loyalists: "ፖለቲካዊ ደገፍቲ",
};

const groupDescriptions: Record<GroupId, string> = {
  dictator: "ኣምባገነንን ኣባላት ስድራቤቱን",
  military: "ላዕለዎት ወተሃደራዊ ኣዘዝቲ",
  security: "ላዕለዎት ሰበስልጣን ጸጥታ",
  loyalists: "ላዕለዎት ፖለቲካዊ ደገፍቲ",
};

const categories = [
  {
    id: "social",
    title: "ማሕበራዊ ዕንወት",
    subtopics: [
      "ምጉዳል ብዝሒ ህዝቢ",
      "ምብትታን ስድራቤት",
      "ምብትታን ዓድታት",
      "ምጥፋእ ሰብኣዊ ዓቕሚ",
    ],
  },
  {
    id: "economic",
    title: "ቁጠባዊ ዕንወት",
    subtopics: [
      "ዕሽሽ ዝተባህለ ትሕተ ቅርጺ",
      "ማይን ኤሌክትሪክን",
      "መጓዓዝያ",
      "ቱሪዝም",
      "ቁጠባዊ ምቁራት",
      "ምምርኳስ ኣብ ገንዘብ ስደተኛታትን ማዕድንን",
    ],
  },
  {
    id: "military",
    title: "ወተሃደራዊ ዕንወት",
    subtopics: [
      "ዘይተወሰነ ግዜ ኣገልግሎት ሃገር",
      "ዘይዘመነ ወተሃደራዊ ሓይሊ",
      "እርጋን መሪሕነት",
      "ሕጽረት ሞያዊ ምዕባለ",
      "ዘይእኹል ደሞዝን ጡረታን",
      "ወተሃደራዊ ዝኾነ ሕብረተሰብ",
    ],
  },
  {
    id: "environmental",
    title: "ከባቢያዊ ዕንወት",
    subtopics: [
      "ጉድኣት ማዕድን",
      "ምብስባስ መሬት",
      "ምጉዳል ሃብቲ ማይ",
      "ብከላ",
      "ምጥፋእ ብዙሕነት ህይወት",
      "ተቓላዕነት ንለውጢ ክሊማ",
      "ንከባቢ ዝግበር ዕሽሽታ",
    ],
  },
  {
    id: "rights",
    title: "ምግሃስ ሰብኣዊ መሰላት",
    subtopics: [
      "ብዘይ ሕጋዊ ምእሳር",
      "ብግዲ ምስዋር ሰባት",
      "ስቓይን ምስቓይን",
      "ፖለቲካዊ ማእሰርቲ",
      "ምስጓግ ሃይማኖታት",
      "ብግዲ ስራሕ",
      "ምጭፍላቕ ናጽነታት",
      "ዘይምህላው ፍትሒ",
    ],
  },
];

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
    setActiveGroup((current) => (current === group ? null : group));
  };

  const handleMouseEnter = (group: GroupId) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveGroup(group);
    }
  };

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <main lang="ti" style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}>
      {/* ======================================================
          1. DICTATORSHIP HERO
      ====================================================== */}

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
          <source src="/videos/dictatorship-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#101f35]/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-black uppercase leading-tight tracking-wide md:text-6xl lg:text-7xl">
            እቲ ናይ ሓቂ ኩነታት
            <span className="mt-3 block text-[#e6c987]">ምልኪ</span>
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

      {/* ======================================================
          2. ONE-MAN RULE — ARCHITECTURE OF POWER
      ====================================================== */}

      <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
          ኣምባገነን ኢሳያስ ኣፍወርቂ
        </p>

        <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-black md:text-5xl">
          ምልኪ ሓደ ሰብ
        </h2>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
      </header>

      <section className="aop-section">
        <div className="aop-heading">
          <h2>መሓውር ስልጣን</h2>
          <p>
            ኣብ መንጎ ማእከላይ መሪሕነትን ኣብ ዙርያኡ ዘለዉ
            ትካላትን ዘሎ ርክባት ዳህስሱ።
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

          {(
            ["dictator", "military", "security", "loyalists"] as GroupId[]
          ).map((group) => (
            <div key={group} className={`aop-node node-${group}`}>
              <button
                type="button"
                className={`aop-circle aop-${group} ${
                  activeGroup === group ? "is-active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(group)}
                onClick={() => activate(group)}
                aria-pressed={activeGroup === group}
              >
                <span>{circleLabels[group]}</span>
              </button>
            </div>
          ))}
        </div>

        {activeGroup !== null && (
          <div className="aop-details" key={activeGroup}>
            <div className="aop-details-heading">
              <div>
                <p className="aop-eyebrow">ዝርዝር ሓበሬታ</p>
                <h2>{groupDescriptions[activeGroup]}</h2>
              </div>

              <button
                type="button"
                className="aop-reset-button"
                onClick={() => setActiveGroup(null)}
                aria-label="ናብ ምሉእ መሓውር ስልጣን ተመለስ"
              >
                <span aria-hidden="true">×</span>
                <span>ዕጸው</span>
              </button>
            </div>

            <div className="aop-portrait-layout">
              {groups[activeGroup].map((person, index) => (
                <article
                  key={person.name}
                  className={`aop-person ${
                    activeGroup === "dictator" && index === 1
                      ? "aop-person-featured"
                      : ""
                  }`}
                >
                  <div className="aop-photo">
                    {person.image ? (
                      <img src={person.image} alt={person.name} />
                    ) : (
                      <div className="aop-photo-placeholder" />
                    )}
                  </div>

                  <h3>{person.name}</h3>
                  <p>{person.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="aop-instructions">
          {activeGroup
            ? "ናብ ካልእ ክቢ ብምጥዋቕ ካልእ ጉጅለ ክትርእዩ ትኽእሉ። ንምዕጻው ድማ ዕጸው ዝብል ቁልፊ ጠውቑ።"
            : "ኣብ ሓደ ክቢ ጠውቑ ወይ መዳፍኩም ኣብ ልዕሊኡ ኣንብሩ፡ ኣባላቱ ንምርኣይ።"}
        </div>

        <style jsx global>{`
          .aop-section {
            width: 100%;
            padding: 65px 24px 75px;
            background: #10263d;
            color: #ffffff;
            overflow: hidden;
            font-family: "Noto Sans Ethiopic", Nyala, serif;
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
            font-weight: 700;
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
            font-weight: 700;
            line-height: 1.7;
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

          .aop-photo-placeholder {
            width: 100%;
            height: 100%;
            background: #1c3b55;
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

          .aop-person-featured {
            transform: translateY(-10px);
          }

          .aop-person-featured .aop-photo {
            border-width: 3px;
            border-color: #e4c47c;
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
            transition: background 0.3s ease, color 0.3s ease;
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
          }

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

            .aop-person-featured {
              transform: none;
            }

            .aop-instructions {
              font-size: 12px;
              line-height: 1.8;
              padding: 0 8px;
            }
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

          @media (prefers-reduced-motion: reduce) {
            .aop-section *,
            .aop-section *::before,
            .aop-section *::after {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </section>

      {/* ======================================================
          3. ካብ ምልኪ ሓደ ሰብ ናብ ሃገራዊ ዕንወት
      ====================================================== */}

      <section className="w-full bg-[#101F35] px-5 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              ርክብ ኣብ መንጎ ክልቲኦም ክፋላት
            </p>

            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-wide md:text-5xl">
              ካብ ምልኪ ሓደ ሰብ ናብ ሃገራዊ ዕንወት
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
              ምእካብ ስልጣን ኣብ ኢድ ሓደ ሰብ፡ እቲ ምልኪ ቁጽጽሩ
              ብኸመይ ከም ዝሕሉ ይገልጽ። ሳዕቤናቱ ድማ እቲ ስርዓት
              ኣብ ልዕሊ ሃገርን ህዝብን ዘስዕቦ ጉድኣት የርኢ።
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <div className="flex flex-col border border-[#c9a45c]/50 px-6 py-10 text-center md:px-10 md:py-14">
              <span className="mb-5 text-xs font-bold tracking-[0.25em] text-[#c9a45c]">
                እቲ ስርዓት
              </span>

              <h3 className="text-2xl font-extrabold uppercase tracking-wide md:text-3xl">
                ምልኪ ሓደ ሰብ
              </h3>

              <div className="mx-auto my-7 h-1 w-16 bg-[#c9a45c]" />

              <p className="text-lg font-semibold text-white md:text-xl">
                ምእካብ ፖለቲካዊ ስልጣን
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65 md:text-base">
                መሓውር ስልጣን
              </p>

              <div className="mt-7 border-t border-white/15 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                  መቆጻጸሪ መሳርሒታት
                </p>

                <p className="mt-4 text-sm font-medium leading-8 text-white/85 md:text-base">
                  ወተሃደራዊ ሓይሊ
                  <span className="px-2 text-[#c9a45c]">·</span>
                  ጸጥታ
                  <span className="px-2 text-[#c9a45c]">·</span>
                  ፖለቲካዊ ደገፍቲ
                </p>
              </div>

              <div className="mt-7 border-t border-white/15 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                  ምፍራስ ትካላት
                </p>

                <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
                  ናጻ ተሓታትነትን ኣብ ልዕሊ ስልጣን ዝገብር ውጽኢታዊ
                  ቁጽጽርን የለን።
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center py-2 md:py-0">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                  ሳዕቤናት
                </span>

                <div className="hidden h-px w-12 bg-[#c9a45c] md:block" />
                <div className="h-10 w-px bg-[#c9a45c] md:hidden" />

                <span className="text-3xl font-light text-[#c9a45c] md:text-4xl">
                  →
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center border border-[#c9a45c]/50 bg-white/[0.03] px-6 py-10 text-center md:px-10 md:py-14">
              <span className="mb-5 text-xs font-bold tracking-[0.25em] text-[#c9a45c]">
                ሳዕቤናቱ
              </span>

              <h3 className="text-2xl font-extrabold uppercase leading-tight tracking-wide md:text-3xl">
                ዕንወት ኤርትራ
              </h3>

              <div className="mx-auto my-7 h-1 w-16 bg-[#c9a45c]" />

              <p className="text-sm leading-8 text-white/75 md:text-base">
                ማሕበራዊ
                <span className="px-2 text-[#c9a45c]">·</span>
                ቁጠባዊ
                <span className="px-2 text-[#c9a45c]">·</span>
                ወተሃደራዊ
                <br />
                ከባቢያዊ
                <span className="px-2 text-[#c9a45c]">·</span>
                ሰብኣዊ መሰላት
              </p>

              <p className="mt-8 border-t border-white/15 pt-7 text-sm leading-7 text-white/65 md:text-base">
                ሳዕቤን ምእካብ ስልጣን ካብ ፖለቲካዊ ቁጽጽር ንላዕሊ
                ይኸይድ። ንኹሉ መዳያት ሃገራዊ ህይወት ይጸሉ።
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl border-t border-[#c9a45c]/40 pt-10 text-center">
            <p className="text-lg font-semibold leading-8 text-white md:text-2xl">
              ካብ ምእካብ ስልጣን ናብ ዕንወት ሃገር፦ ነቲ ስርዓት
              ምርዳእ፡ ሳዕቤናቱ ምርዳእ ማለት እዩ።
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          4. ዕንወት ኤርትራ
      ====================================================== */}

      <section
        id="destruction-of-eritrea"
        className="w-full bg-white text-[#101f35]"
      >
        <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
            ሳዕቤናት ምልኪ
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-wide md:text-5xl">
            ዕንወት ኤርትራ
          </h2>

          <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
        </header>

        <div className="w-full bg-[#101f35] px-5 py-16 text-white md:px-10 md:py-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <nav
              aria-label="ዓውድታት ዕንወት"
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
                      setActiveCategory(isActive ? null : category.id);
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

                    <span className="block text-sm font-extrabold uppercase leading-5">
                      {category.title}
                    </span>

                    <span className="mt-3 block text-xs font-bold">
                      {isActive ? "− ዕጸው" : "+ ዳህስስ"}
                    </span>
                  </button>
                );
              })}
            </nav>

            {selectedCategory && (
              <div className="border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7940]">
                      ሳዕቤናት ዳህስስ
                    </p>

                    <h3 className="text-2xl font-black uppercase md:text-3xl">
                      {selectedCategory.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(null);
                      setActiveTopic(null);
                    }}
                    className="border border-[#101f35]/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101f35] transition hover:border-[#9b7940] hover:text-[#9b7940]"
                  >
                    ክፋል ዕጸው ×
                  </button>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {selectedCategory.subtopics.map((topic, index) => {
                    const isSelected = activeTopic === topic;

                    return (
                      <button
                        key={topic}
                        type="button"
                        aria-expanded={isSelected}
                        onClick={() =>
                          setActiveTopic(isSelected ? null : topic)
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

                          <span className="text-sm font-bold uppercase tracking-wide">
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

                {activeTopic && (
                  <article
                    className="mt-8 border border-[#e3ddcf] bg-white p-6 text-[#101f35] md:p-9"
                    aria-live="polite"
                  >
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#9b7940]">
                      {selectedCategory.title}
                    </p>

                    <h4 className="mb-6 text-xl font-black uppercase md:text-2xl">
                      {activeTopic}
                    </h4>

                    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                      <div>
                        <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b7940]">
                          መብርሂን መርትዖን
                        </h5>

                        <p className="text-sm leading-8 text-slate-600">
                          መጽናዕቲ፡ ዝተረጋገጸ መርትዖን ዝርዝር መብርሂን
                          ብዛዕባ {activeTopic} ኣብዚ ክቐርብ እዩ።
                        </p>

                        <p className="mt-5 text-sm leading-8 text-slate-600">
                          እዚ ክፋል እዚ፡ ብሰነድ ዝተረጋገጹ ሓቅታት፡
                          ኣገደስቲ ስታቲስቲክስ፡ ቀጥታዊ ምስክርነታትን
                          ካብ እሙናት ጸብጻባት ዝተወሰዱ መወከሲታትን
                          ንምቕራብ ዝተሓዝአ እዩ።
                        </p>
                      </div>

                      <div className="border-t border-[#e3ddcf] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                        <h5 className="mb-3 text-sm font-bold uppercase tracking-wider text-[#9b7940]">
                          ደገፍቲ ሰነዳት
                        </h5>

                        <ul className="space-y-3 text-sm text-slate-600">
                          <li>• ተዛማዲ ስእልታት</li>
                          <li>• ዝተረጋገጹ ስታቲስቲክስን ሓበሬታን</li>
                          <li>• ምስክርነታትን ውልቃዊ ተመኩሮታትን</li>
                          <li>• ደገፍቲ ጸብጻባትን መወከሲ መላግቦታትን</li>
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
    </main>
  );
}
