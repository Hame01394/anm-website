
"use client";

import { useState } from "react";

const pillars = [
  {
    id: "nation",
    title: "ሃገርን ህዝብን",
    lines: ["ሃገርን", "ህዝብን"],
    description:
      "ሃገራዊ ምሕዳስ መንነትና ከም ህዝቢ ብንጹር ካብ ምርዳእ ይጅምር። መንነትና ኣብ ቋንቋታትና፡ ባህላዊ ውርሻና፡ ሓባራዊ ታሪኽና፡ ልምድታትናን ናይ ሓባር ዝኽርናን ዝተመርኮሰ እዩ። ፍልልያትና እናኣኽበርና፡ ናይ ሓባር ምዃንና ምጥንኻር ንሓያልን ሓድነት ዘለዎን ህዝቢ ምህናጽ ኣገዳሲ እዩ።",
  },
  {
    id: "economy",
    title: "ቁጠባ",
    lines: ["", "ቁጠባ"],
    description:
      "ዕዉት ሃገር ሰባት ክፈጥሩ፡ ከውፍሩ፡ ክወዳደሩን ክሳተፉን ናጽነት ዘለዎም ቁጠባ የድልያ። ውድድር ዘለዎ ዕዳጋ፡ ናጻ ትካላት ንግዲ፡ ስራሕ ፈጠራ፡ ሓድሽ ምህዞታት፡ ኢንዱስትሪያዊ ምዕባለን ናይ ቁጠባ ዕድላትን ንራእይና መሰረት እዮም።",
  },
  {
    id: "democracy",
    title: "ቀጥታዊ ዴሞክራሲ",
    lines: ["ቀጥታዊ", "ዴሞክራሲ"],
    description:
      "ዜጋታት ኣብ ውሳነታት ህዝቢ ብትርጉም ክሳተፉ፡ ኣብ ሃገራዊ ቀዳምነታት ጽልዋ ክህልዎምን ኣብ ስልጣን ዘለዉ መራሕቲ ተሓተቲ ክገብሩን ዕድል ክረኽቡ ኣለዎም። ፖለቲካዊ ናጽነት፡ ተሳትፎ ዜጋታት፡ ህዝባዊ ቁጽጽርን ቅዋማዊ ውሕስነታትን ኣገደስቲ እዮም።",
  },
  {
    id: "institutions",
    title: "ምህናጽ ትካላት",
    lines: ["ምህናጽ", "ትካላት"],
    description:
      "ሃገራዊ ምሕዳስ ብቅዋማዊ ሕጊ ንህዝቢ ዘገልግሉ ጽኑዓትን ሞያውያንን ትካላት ይሓትት። ናጻ ቤት ፍርዲ፡ ግሉጽ ምምሕዳር፡ ተሓታትነትን ልዕልና ሕግን ውልቃዊ መሰላት ይከላኸሉን ሓላፍነት ዘለዎ መንግስቲ የረጋግጹን።",
  },
];

const segments = [
  {
    id: "nation",
    path: "M 300 300 L 300 55 A 245 245 0 0 0 55 300 Z",
    x: 190,
    y: 185,
    dx: -165,
    dy: -165,
    square: { x: 205, y: 205, size: 60 },
  },
  {
    id: "economy",
    path: "M 300 300 L 545 300 A 245 245 0 0 0 300 55 Z",
    x: 410,
    y: 185,
    dx: 165,
    dy: -165,
    square: { x: 335, y: 205, size: 60 },
  },
  {
    id: "democracy",
    path: "M 300 300 L 55 300 A 245 245 0 0 0 300 545 Z",
    x: 190,
    y: 415,
    dx: -165,
    dy: 165,
    square: { x: 205, y: 335, size: 60 },
  },
  {
    id: "institutions",
    path: "M 300 300 L 300 545 A 245 245 0 0 0 545 300 Z",
    x: 410,
    y: 415,
    dx: 165,
    dy: 165,
    square: { x: 335, y: 335, size: 60 },
  },
];

export default function VisionPillarsTi() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const activeId = hovered ?? selected;

  return (
    <section
      id="our-vision"
      lang="ti"
      className="w-full overflow-visible bg-[#142b45] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION - WHITE BAND */}
        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-[#a77d32]">
              ምንቅስቓስና
            </p>

            <h2
              className="text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl"
              style={{
                fontFamily: "'Noto Sans Ethiopic', Nyala, serif",
              }}
            >
              መሰረታት ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
            </h2>

            <p
              className="mx-auto mt-3 max-w-2xl text-base leading-8 text-[#526174] sm:text-lg"
              style={{
                fontFamily: "'Noto Sans Ethiopic', Nyala, serif",
              }}
            >
              እዞም ኣርባዕተ መሰረታት መትከላትና ይገልጹ፡
              ተልእኾና ይምርሑ፡ ንዴሞክራስያዊ መጻኢ ኤርትራ
              ዘለና ራእይ ይቐርጹ።
            </p>
          </div>
        </div>

        {/* INTERACTIVE CIRCLE WITH ERITREA BACKGROUND */}
        <div className="mx-auto w-full max-w-[1050px]">
          <div className="relative mx-auto aspect-square w-full">

            {/* GOLD ERITREA SILHOUETTE BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/SVG-Koort_Eritrea.svg"
                alt=""
                aria-hidden="true"
                className="h-[82%] w-[82%] object-contain"
                style={{
                  opacity: 0.20,
                  filter:
                    "brightness(0) saturate(100%) invert(64%) sepia(31%) saturate(642%) hue-rotate(5deg) brightness(91%) contrast(85%)",
                }}
              />
            </div>

            {/* FOUR-PILLAR SVG */}
            <svg
              viewBox="0 0 600 600"
              className="relative z-10 h-full w-full overflow-visible"
              overflow="visible"
              role="group"
              aria-label="ኣርባዕተ መሰረታት ሃገራዊ ምሕዳስ"
            >
              <defs>
                <filter
                  id="pillar-shadow-ti"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="8"
                    floodColor="#000000"
                    floodOpacity="0.35"
                  />
                </filter>
              </defs>

              {/* DESCRIPTIONS INSIDE ORIGINAL QUARTERS */}
              {segments.map((segment) => {
                const pillar = pillars.find(
                  (item) => item.id === segment.id
                )!;

                const isActive = activeId === segment.id;

                return (
                  <g
                    key={`description-${segment.id}`}
                    opacity={isActive ? 1 : 0}
                    pointerEvents="none"
                    style={{
                      transition: "opacity 400ms ease",
                    }}
                  >
                    <foreignObject
                      x={segment.x - 85}
                      y={segment.y - 75}
                      width="170"
                      height="150"
                    >
                      <div
                          style={{
                          width: "100%",
                          height: "100%",
                          boxSizing: "border-box",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          padding: "8px",
                          color: "#ffffff",
                          fontFamily:
                            "'Noto Sans Ethiopic', Nyala, serif",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "12px",
                            fontWeight: 800,
                            color: "#e6c987",
                            marginBottom: "5px",
                            lineHeight: 1.4,
                          }}
                        >
                          {pillar.title}
                        </div>

                        <div
                          style={{
                            fontSize: "8px",
                            lineHeight: 1.6,
                            fontWeight: 500,
                            overflowWrap: "break-word",
                            wordBreak: "normal",
                          }}
                        >
                          {pillar.description}
                        </div>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {/* ANIMATED WHITE QUARTERS */}
              {segments.map((segment) => {
                const pillar = pillars.find(
                  (item) => item.id === segment.id
                )!;

                const isActive = activeId === segment.id;

                return (
                  <g key={`quarter-${segment.id}`}>
                    <g
                      style={{
                        transform: isActive
                          ? `translate(${(segment.dx / 600) * 100}%, ${(segment.dy / 600) * 100}%)`
                          : "translate(0%, 0%)",
                        transformBox: "view-box",
                        transformOrigin: "center",
                        transition:
                          "transform 700ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        filter: isActive
                          ? "url(#pillar-shadow-ti)"
                          : "none",
                      }}
                    >
                      {/* ORIGINAL QUARTER SHAPE */}
                      <path
                        d={segment.path}
                        fill="#ffffff"
                        fillOpacity="1"
                        stroke="#e6c987"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        opacity={isActive ? 0 : 1}
                        style={{
                          transition: "opacity 500ms ease",
                        }}
                      />

                      {/* SQUARE SHAPE ON HOVER */}
                      <rect
                        x={segment.square.x}
                        y={segment.square.y}
                        width={segment.square.size}
                        height={segment.square.size}
                        fill="#ffffff"
                        stroke="#e6c987"
                        strokeWidth="3"
                        opacity={isActive ? 1 : 0}
                        pointerEvents="none"
                        style={{
                          transition: "opacity 500ms ease",
                        }}
                      />

                      {/* PILLAR TITLE */}
                      <text
                        x={segment.x}
                        y={segment.y - 8}
                        textAnchor="middle"
                        fill="#142b45"
                        fontSize="21"
                        fontWeight="800"
                        pointerEvents="none"
                        fontFamily="'Noto Sans Ethiopic', Nyala, serif"
                      >
                        {pillar.lines.map(
                          (line, index) =>
                            line && (
                              <tspan
                                key={`${segment.id}-line-${index}`}
                                x={segment.x}
                                dy={index === 0 ? "0" : "32"}
                              >
                                {line}
                              </tspan>
                            )
                        )}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* FIXED INTERACTIVE AREAS */}
              {segments.map((segment) => {
                const pillar = pillars.find(
                  (item) => item.id === segment.id
                )!;

                return (
                  <path
                    key={`interaction-${segment.id}`}
                    d={segment.path}
                    fill="transparent"
                    stroke="transparent"
                    role="button"
                    tabIndex={0}
                    aria-label={`ዳህስስ ${pillar.title}`}
                    aria-pressed={selected === segment.id}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(segment.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(segment.id)}
                    onBlur={() => setHovered(null)}
                    onClick={() =>
                      setSelected(
                        selected === segment.id ? null : segment.id
                      )
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        setSelected(
                          selected === segment.id ? null : segment.id
                        );
                      }
                    }}
                  />
                );
              })}

              {/* CENTRAL DETAIL */}
              <circle
                cx="300"
                cy="300"
                r="4"
                fill="#e6c987"
                pointerEvents="none"
              />
            </svg>
          </div>
        </div>

        {/* NATIONAL VISION FOOTER */}
        <div className="mx-auto mt-16 max-w-4xl border-t border-white/30 pt-10 text-center sm:mt-20">

          <h3
            className="text-xl font-extrabold tracking-wide text-white sm:text-2xl lg:text-3xl"
            style={{
              fontFamily: "'Noto Sans Ethiopic', Nyala, serif",
            }}
          >
            መንነት
            <span className="mx-2 text-[#e6c987]">·</span>
            ናጽነት
            <span className="mx-2 text-[#e6c987]">·</span>
            ብልጽግና
            <span className="mx-2 text-[#e6c987]">·</span>
            ቀጻልነት
          </h3>

          <p
            className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-white/80 sm:text-lg"
            style={{
              fontFamily: "'Noto Sans Ethiopic', Nyala, serif",
            }}
          >
            ኣብ ባህላዊ ውርሻ ዝተሰረተ። ብናጽነት ዝምራሕ።
            ብዕድላት ዝድረኽ። ብጽኑዓት ትካላት ዝውሓስ።
          </p>
        </div>
      </div>
    </section>
  );
}
