
"use client";

import { useState } from "react";

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

function Portrait({
  person,
  featured = false,
}: {
  person: Person;
  featured?: boolean;
}) {
  return (
    <article className={`aop-person ${featured ? "aop-person-featured" : ""}`}>
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
  );
}

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
      className={`aop-circle aop-${group} ${active ? "is-active" : ""}`}
      onMouseEnter={() => onHover(group)}
      onClick={onActivate}
      aria-pressed={active}
    >
      <span>{circleLabels[group]}</span>
    </button>
  );
}

export default function ArchitectureOfPower() {
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

  return (
    <>
      {/* መእተዊ ክፋል */}
      <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
          ኣምባገነን ኢሳያስ ኣፍወርቂ
        </p>

        <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-black md:text-5xl">
          ምልኪ ሓደ ሰብ
        </h2>

        <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
      </header>

      {/* መሓውር ስልጣን */}
      <section className="aop-section">
        <div className="aop-heading">
          <h2>መሓውር ስልጣን</h2>
          <p>
            ኣብ መንጎ ማእከላይ መሪሕነትን ኣብ ዙርያኡ ዘለዉ
            ትካላትን ዘሎ ርክባት ዳህስሱ።
          </p>
        </div>

        <div className="aop-stage">
          {/* መራኸቢ መስመራት */}
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

        {/* ናይ ሰባት ስእልን መግለጺን */}
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
                <Portrait
                  key={person.name}
                  person={person}
                  featured={activeGroup === "dictator" && index === 1}
                />
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

          /* ዋና መድረኽ */

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

          /* ቦታ ናይ ክቢታት */

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

          /* ክቢታት */

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

          /* ናይ ስእሊ ፓነል */

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

          /* መዕጸዊ ቁልፊ */

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

          /* መብርሂ */

          .aop-instructions {
            min-height: 24px;
            margin: 25px auto 0;
            color: #bdc9d4;
            text-align: center;
            font-size: 13px;
            line-height: 1.9;
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
    </>
  );
}
