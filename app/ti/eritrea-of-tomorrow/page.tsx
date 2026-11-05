
"use client";

import React, { useId, useState } from "react";

type DevelopmentArea = {
  number: string;
  title: string;
  description: string;
};

type Pillar = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  areas: DevelopmentArea[];
};

const pillars: Pillar[] = [
  {
    number: "01",
    title: "ተኣማንን ብቕዓት ዘለዎምን ትካላት",
    subtitle: "ተሓታትነት ዘለዎም፡ ሞያውያንን ናጻን ትካላት ምቛም",
    description:
      "ንህዝቢ ዘገልግሉ እምበር ንውልቀሰባት ወይ ንፖለቲካዊ ረብሓታት ዘይኮኑ ትካላት ምህናጽ። እዚ መሰረት ሕገ-መንግስታዊ ምምሕዳር፡ ሞያዊ ሲቪላዊ ኣስተዳደር፡ ናጻ ፍትሒ፡ ግሉጽ ምምሕዳር ሃገራዊ ገንዘብን ተሓታቲ ሃገራዊ መሪሕነትን ይምስርት።",
    image: "/images/trustworthy-institutions.jpg",
    areas: [
      { number: "01", title: "ሃገራዊ መንግስቲ", description: "ስልጣናቱ ብንጹር ዝተገልጹ፡ ዲሞክራስያዊ ሕጋዊነት ዘለዎን ንህዝቢ ተሓታቲ ዝኾነን ሕገ-መንግስታዊ ሃገራዊ መንግስቲ ምቛም።" },
      { number: "02", title: "ዞባዊ መንግስታት", description: "ንጹር ሓላፍነታት፡ ናይ ከባቢ ውክልናን ተገቢ ስልጣን ውሳነን ዘለዎም ሓያላት ዞባዊ መንግስታት ምምዕባል።" },
      { number: "03", title: "ናይ ከባቢ ምምሕዳራትን ምምሕዳራዊ ከተማታትን", description: "ንድሌታት ማሕበረሰባቶም ብቐጥታ ዝምልሱ ውጽኢታውያን ናይ ከባቢ ምምሕዳራትን ምምሕዳራዊ ከተማታትን ምቛም።" },
      { number: "04", title: "ሃገራዊ ባንክን ትካላት ፋይናንስን", description: "ርጉእነት ገንዘብ፡ ወፍሪን ቁጠባዊ ምዕባለን ዝድግፉ ናጻን ሞያውያንን ትካላት ፋይናንስ ምህናጽ።" },
      { number: "05", title: "ሃገራዊ ቤት ጽሕፈት ገንዘብን ባጀትን", description: "ግሉጽ ምምሕዳር ህዝባዊ ገንዘብ፡ ሓላፍነታዊ ባጀት፡ ተሓታትነት ወጻኢታትን ግቡእ ኣጠቓቕማ ሃገራዊ ጸጋታትን ምርግጋጽ።" },
      { number: "06", title: "ናጻ ፍርዳዊ ስርዓት", description: "ሕገ-መንግስታዊ መሰላት ዝሕሉ፡ ሕጊ ብማዕረ ዘተግብርን ንኹሉ ፍትሒ ክረክብ ዘኽእልን ናጻ ፍርዳዊ ስርዓት ምቛም።" },
      { number: "07", title: "ሞያዊ ሲቪላዊ ኣገልግሎት", description: "ብቕዓት ዘለዎ፡ ካብ ፖለቲካዊ ወገንተኝነት ናጻ ዝኾነን ብብቕዓት ዝምረጽን ሲቪላዊ ምምሕዳር ምህናጽ።" },
      { number: "08", title: "ምክልኻል፡ ፖሊስን ጸጥታን", description: "ብሕጊ ተሓተትቲ ዝኾኑ፡ ሞያውያንን ኣብ ትሕቲ ሕገ-መንግስታዊ ሲቪላዊ ቁጽጽር ዝሰርሑን ትካላት ምክልኻል፡ ፖሊስን ጸጥታን ምቛም።" },
      { number: "09", title: "ናጻ ትካላት ምርጫ", description: "ተኣማንን ግሉጽን ተወዳዳሪ ምርጫታት ንምክያድ ሓላፍነት ዝወስዱ ዘይወገኑ ትካላት ምርጫ ምቛም።" },
      { number: "10", title: "ናጻ ሚድያን ሓበሬታን", description: "ናጽነት ኣገላልጻ ምሕላው፡ ከምኡውን ናጻ ሚድያን ህዝባዊ ሓበሬታን ብናጽነት ክንቀሳቐሱ ዝኽእሉሉ ኩነታት ምፍጣር።" },
      { number: "11", title: "ሃገራዊ ትካላት ቁጽጽር", description: "ህዝባዊ ምምሕዳር ዝከታተሉ፡ ግጉይ ኣሰራርሓ ዝምርምሩን ሕገ-መንግስታዊ ምምሕዳር ዝሕልዉን ናጻ ትካላት ምቛም።" },
      { number: "12", title: "ህዝባዊ ተሓታትነት", description: "ህዝባዊ ሰበ-ስልጣንን ትካላትን ብዛዕባ ውሳነታቶም፡ ተግባራቶምን ኣጠቓቕማ ህዝባዊ ጸጋታትን ተሓተትቲ ምዃኖም ምርግጋጽ።" },
    ],
  },
  {
    number: "02",
    title: "ሓያልን ዕዉትን ቁጠባ",
    subtitle: "ፍርያም፡ ዝተኣሳሰረን ቁጠባዊ ናጽነት ዘለዋን ኤርትራ ምህናጽ",
    description:
      "ዕድላት ስራሕ ዝፈጥር፡ ቁጠባዊ ምርትን ናይ ህይወት ደረጃን ዘመሓይሽ ዝተፈላለየ፡ ፍርያምን ተወዳዳርን ቁጠባ ምምዕባል። እዚ መሰረት ኢንዱስትሪያዊ ምዕባለ፡ ዘመናዊ ትሕተ-ቅርጺ፡ ሕርሻ፡ ጸዓቲ፡ ንግዲ፡ ምዕባለ ባሕሪን ሓድሽ ቴክኖሎጂን የጠቓልል።",
    image: "/images/state-building.jpg",
    areas: [
      { number: "01", title: "ሃገራዊ ቁጠባ", description: "ስራሕ ዝፈጥር፡ ትካላት ንግዲ ዝተባብዕን ናይ ህይወት ደረጃ ዘመሓይሽን ዝተፈላለየ፡ ፍርያምን ተወዳዳርን ሃገራዊ ቁጠባ ምምዕባል።" },
      { number: "02", title: "ወደባትን ትሕተ-ቅርጺ ባሕርን", description: "ስትራተጂያዊ ገማግም ቀይሕ ባሕሪ ኤርትራ፡ ዘመናዊ ወደባት፡ ኣገልግሎታት ባሕርን ኣህጉራዊ ትሕተ-ቅርጺ ንግድን ምምዕባል።" },
      { number: "03", title: "መዓርፎ ነፈርትን ኣቪየሽንን", description: "ኣህጉራዊ ምትእስሳር ንምሕያል መዓርፎ ነፈርቲ፡ ትሕተ-ቅርጺ ኣቪየሽንን ኣገልግሎታት መጎዓዝያ ኣየርን ምዝማን።" },
      { number: "04", title: "ፈኮስቲ ኢንዱስትሪታት", description: "ምፍራይ ኣቑሑት፡ ምምስራሕ ጥረ ነገራት፡ ጨርቂ፡ ምርትን ምግቢ፡ ከምኡውን ንኣሽቱን ማእከሎትን ኢንዱስትሪያዊ ትካላት ምትብባዕ።" },
      { number: "05", title: "ከበድቲ ኢንዱስትሪታት", description: "ሓጺን፡ ናይ ህንጻ ንብረታት፡ ማሽነሪን ምምስራሕ ማዕድናትን ዝርከብዎ ዓበይቲ ኢንዱስትሪያዊ ምዕባለ መሰረት ምንጻፍ።" },
      { number: "06", title: "መጎዓዝያን ምትእስሳርን", description: "ከተማታት፡ ከተማታት ንኣሽቱ፡ ወደባትን ገጠራትን ብዘመናዊ መንገድታት፡ ምድሪ ባቡር፡ ህዝባዊ መጎዓዝያን መርበባት ሎጂስቲክስን ምትእስሳር።" },
      { number: "07", title: "ጸዓትን ትሕተ-ቅርጽን", description: "ተኣማኒ ኤሌክትሪክ፡ ተሓዳሲ ጸዓቲ፡ ስርዓታት ማይ፡ ቴሌኮሙኒኬሽንን ኣገደስቲ ሃገራዊ ትሕተ-ቅርጺን ምስፋሕ።" },
      { number: "08", title: "ሕርሻን ውሕስነት ምግብን", description: "ሃገራዊ ውሕስነት ምግቢ ንምሕያል ሕርሻ፡ መስኖ፡ ምርባሕ እንስሳትን ምምስራሕ ምግብን ምዝማን።" },
      { number: "09", title: "ዲጂታላዊ ቁጠባ", description: "ኣብ ፍልጠት ዝተመርኮሰ ቁጠባ ንምህናጽ ዲጂታላዊ ትሕተ-ቅርጺ፡ ቴክኖሎጂ፡ ሓድሽ ምህዞ፡ ዘመናዊ ርክባትን ዕድላትን ምምዕባል።" },
    ],
  },
  {
    number: "03",
    title: "ኩርዕቲ ሃገር፦ ባህላዊ ሕዳሰን ሃገራዊ ስኒትን",
    subtitle: "ሃገራዊ መንነት፡ ባህላዊ ውርሻን ሓባራዊ ስምዒት ተዛማድነትን ምሕዳስ",
    description:
      "ታሪኻዊ ዝኽሪ ብምዕቃብ፡ ትምህርቲ ብምሕያል፡ ባህላዊ ውርሻ ብምክልኻልን ምህዞን ፈጠራን ብምትብባዕን ብርቱዕን ብባህሊ ዝማዕበለን ሃገር ምህናጽ። ዕዉት ሃገር ብርቱዕ መንነት፡ ስምዒት ኣባልነት፡ ታሪኻዊ ንቕሓትን ሓባራዊ ባህላዊ ውርሻን ከም ዘድልያ እዚ መሰረት የረጋግጽ።",
    image: "/images/nation-building.jpg",
    areas: [
      { number: "01", title: "ባህላዊ ሕዳሰ", description: "ባህላዊ ህይወት፡ ልምድታት፡ ቋንቋታትን ኣእምሮኣዊ ውርሻን ኤርትራ ብምሕዳስ፡ ባህላዊ ምልውዋጥን ፈጠራን ምትብባዕ።" },
      { number: "02", title: "ቤተ-መዘክራትን ሃገራዊ ውርሻን", description: "ታሪኻዊን ኣርኪዮሎጂያዊን ውርሻ ሃገር ንምዕቃብን ንምቕራብን ቤተ-መዘክራትን ትካላት ውርሻን ምቛምን ምምዕባልን።" },
      { number: "03", title: "ቤተ-መጻሕፍትን ሃገራዊ ማህደራትን", description: "ፍልጠት፡ ሰነዳትን ታሪኻዊ መዛግብትን ንምዕቃብ ብቐሊሉ ክብጻሕ ዝኽእል ቤተ-መጻሕፍቲ፡ ማእከላት ምርምርን ሃገራዊ ማህደራትን ምቛም።" },
      { number: "04", title: "ሃይማኖታዊ ውርሻ", description: "ታሪኻውያን ሃይማኖታውያን ትካላት፡ ልምድታት፡ ቅዱሳት ቦታታትን ኣበርክቶኦምን ኣብ ባህላዊ ውርሻ ሃገር ምሕላው።" },
      { number: "05", title: "ታሪኽን ትምህርትን", description: "ታሪኻዊ ምርምር፡ ጽሬት ዘለዎ ትምህርቲን ብዛዕባ ሕሉፍ ታሪኽ ሃገርን ኣብ ዓለም ዘለዋ ቦታን ዝዓሞቐ ርድኢት ምትብባዕ።" },
      { number: "06", title: "ስነ-ጥበብን ፈጠራን", description: "ስነ-ጽሑፍ፡ ሙዚቃ፡ ስእሊ፡ ሲነማ፡ ህንጻን ካልኦት መግለጺታት ስነ-ጥበብን ባህልን ምድጋፍ።" },
      { number: "07", title: "ሃገራዊ መንነትን ስኒትን", description: "ኣብ ታሪኻዊ ንቕሓት፡ ባህላዊ ብዙሕነት፡ ሲቪላዊ ኣባልነትን ሓድሕዳዊ ኣኽብሮትን ዝተመርኮሰ ሓባራዊ ሃገራዊ መንነት ምሕያል።" },
    ],
  },
];

type CircleItem = {
  title: string;
  shortTitle: string;
  secondLine: string;
  description: string;
  path: string;
  textX: number;
  textY: number;
  descriptionX: number;
  descriptionY: number;
  moveX: number;
  moveY: number;
  target: string;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
      {children}
    </p>
  );
}

function NationalFrameworkHeading() {
  return (
    <section className="w-full border-b border-[#e7e0d3] bg-white px-5 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl text-center">
        <SectionLabel>ሃገራዊ ቅርጺ ምህናጽ</SectionLabel>
        <h2 className="text-3xl font-bold leading-tight text-[#142b45] md:text-5xl">
          ሰለስተ መሰረታት ኤርትራ ናይ ጽባሕ
        </h2>
        <div className="mx-auto mt-6 h-1 w-20 bg-[#c9a45c]" />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#596779] md:text-lg">
          ዕዉት ቁጠባ፡ ኩርዕቲን ስኒት ዘለዋን ሃገር፡ ከምኡውን ንህዝቢ ዘገልግሉ ትካላት ንምህናጽ ዝሕግዙ ሰለስተ ኣብ ሓድሕዶም ዝተኣሳሰሩ መሰረታት።
        </p>
      </div>
    </section>
  );
}

function ThreePillarCircle() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const uniqueId = useId().replace(/:/g, "");
  const clipId = `eritreaCircleClip-${uniqueId}`;
  const shadowId = `threePillarShadow-${uniqueId}`;

  const activePillar = hovered ?? selected;

  const circleItems: CircleItem[] = [
    {
      title: pillars[0].title,
      shortTitle: "ተኣማኒ",
      secondLine: "ትካላት",
      description: "ሕገ-መንግስታዊ መንግስቲ፡ ናጻ ትካላት፡ ሞያዊ ህዝባዊ ኣገልግሎትን ተሓታትነትን።",
      path: "M250 250 L250 40 A210 210 0 0 1 431.9 355 Z",
      textX: 345,
      textY: 165,
      descriptionX: 285,
      descriptionY: 125,
      moveX: 155,
      moveY: -125,
      target: "pillar-01",
    },
    {
      title: pillars[1].title,
      shortTitle: "ሓያልን",
      secondLine: "ዕዉትን ቁጠባ",
      description: "ኢንዱስትሪያዊ ምዕባለ፡ ትሕተ-ቅርጺ፡ ሕርሻ፡ ንግዲ፡ ጸዓትን ቁጠባዊ ዕድላትን።",
      path: "M250 250 L431.9 355 A210 210 0 0 1 68.1 355 Z",
      textX: 250,
      textY: 345,
      descriptionX: 170,
      descriptionY: 265,
      moveX: 0,
      moveY: 165,
      target: "pillar-02",
    },
    {
      title: pillars[2].title,
      shortTitle: "ኩርዕቲን",
      secondLine: "ሓባራዊትን ሃገር",
      description: "ባህላዊ ውርሻ፡ ሃገራዊ መንነት፡ ታሪኻዊ ዝኽሪ፡ ትምህርትን ሓባራዊ ኣባልነትን።",
      path: "M250 250 L68.1 355 A210 210 0 0 1 250 40 Z",
      textX: 165,
      textY: 165,
      descriptionX: 55,
      descriptionY: 125,
      moveX: -155,
      moveY: -125,
      target: "pillar-03",
    },
  ];

  const goToPillar = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePillarClick = (index: number) => {
    const item = circleItems[index];

    if (selected === index) {
      setSelected(null);
      setHovered(null);
      goToPillar(item.target);
      return;
    }

    setSelected(index);
    setHovered(index);
  };

  return (
    <section className="w-full overflow-visible bg-[#142b45] px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#d5b46b]">
            ሰለስተ መሰረታት ሃገራዊ ራእይና ዳህስስ
          </p>

          <div
            className="relative w-full max-w-[950px]"
            onPointerLeave={() => setHovered(null)}
          >
            <svg
              viewBox="0 0 500 500"
              className="h-auto w-full overflow-visible"
              overflow="visible"
              role="group"
              aria-label="ስእላዊ መግለጺ ሰለስተ መሰረታት"
            >
              <defs>
                <clipPath id={clipId}>
                  <circle cx="250" cy="250" r="210" />
                </clipPath>
                <filter id={shadowId} x="-80%" y="-80%" width="260%" height="260%">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.35" />
                </filter>
              </defs>

              <g clipPath={`url(#${clipId})`}>
                <image
                  href="https://upload.wikimedia.org/wikipedia/commons/3/32/SVG-Koort_Eritrea.svg"
                  x="105"
                  y="55"
                  width="290"
                  height="390"
                  preserveAspectRatio="xMidYMid meet"
                  opacity="0.30"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(72%) sepia(33%) saturate(550%) hue-rotate(7deg) brightness(95%) contrast(90%)",
                  }}
                />
                <rect x="40" y="40" width="420" height="420" fill="#142b45" opacity="0.12" />
              </g>

              {circleItems.map((item, index) => {
                const isActive = activePillar === index;
                return (
                  <g
                    key={`description-${index}`}
                    opacity={isActive ? 1 : 0}
                    pointerEvents="none"
                    style={{ transition: "opacity 450ms ease" }}
                  >
                    <foreignObject x={item.descriptionX} y={item.descriptionY} width="160" height="150">
                      <div
                        className="flex h-full w-full flex-col items-center justify-center px-2 py-2 text-center"
                        style={{ boxSizing: "border-box", overflow: "hidden", fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
                      >
                        <p style={{ color: "#e6c987", fontSize: "12px", fontWeight: 800, lineHeight: 1.4, marginBottom: "8px" }}>
                          {item.title}
                        </p>
                        <p style={{ color: "#ffffff", fontSize: "10px", lineHeight: 1.6, fontWeight: 500 }}>
                          {item.description}
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}

              {circleItems.map((item, index) => {
                const isActive = activePillar === index;
                return (
                  <g key={`sector-${index}`}>
                    <g
                      style={{
                        transform: isActive
                          ? `translate(${(item.moveX / 500) * 100}%, ${(item.moveY / 500) * 100}%)`
                          : "translate(0%, 0%)",
                        transformBox: "view-box",
                        transformOrigin: "center",
                        transition: "transform 750ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                        filter: isActive ? `url(#${shadowId})` : "none",
                      }}
                    >
                      <path d={item.path} fill="#ffffff" stroke="#c9a45c" strokeWidth="3" strokeLinejoin="round" />
                      {!isActive && (
                        <>
                          <text x={item.textX} y={item.textY} fill="#142b45" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" pointerEvents="none">
                            {item.shortTitle}
                          </text>
                          <text x={item.textX} y={item.textY + 19} fill="#142b45" textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="800" pointerEvents="none">
                            {item.secondLine}
                          </text>
                        </>
                      )}
                    </g>
                  </g>
                );
              })}

              {circleItems.map((item, index) => (
                <path
                  key={`interaction-${index}`}
                  d={item.path}
                  fill="transparent"
                  stroke="transparent"
                  role="button"
                  tabIndex={0}
                  aria-label={`ዳህስስ፦ ${item.title}`}
                  aria-pressed={selected === index}
                  style={{ cursor: "pointer" }}
                  onPointerEnter={() => setHovered(index)}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered(null)}
                  onClick={() => handlePillarClick(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      handlePillarClick(index);
                    }
                  }}
                />
              ))}
            </svg>
          </div>

          <p className="mt-7 max-w-xl text-center text-xs leading-7 tracking-wide text-white/65">
            መግለጺኡ ንምርኣይ ኣብ ልዕሊ ዝኾነ ክፋል ናይቲ ክቢ ኣንቀሳቕስ። ምሉእ ዝርዝር ንምርኣይ ኣብቲ ክፋል ጠውቕ።
          </p>
        </div>
      </div>
    </section>
  );
}

function DevelopmentAreaCard({ area }: { area: DevelopmentArea }) {
  return (
    <article className="border border-[#e7e0d3] bg-[#f8f5ed] p-5 transition duration-300 hover:border-[#c9a45c] hover:shadow-sm md:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.15em] text-[#a77d32]">{area.number}</span>
        <div className="h-px flex-1 bg-[#ded8ca]" />
      </div>
      <h4 className="mb-3 text-lg font-bold text-[#142b45]">{area.title}</h4>
      <p className="text-sm leading-8 text-[#596779]">{area.description}</p>
    </article>
  );
}

function PillarSection({
  pillar,
  isOpen,
  onToggle,
}: {
  pillar: Pillar;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article id={`pillar-${pillar.number}`} className="w-full scroll-mt-24 overflow-hidden">
      {/* FULL-WIDTH WHITE PILLAR BAR */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`pillar-content-${pillar.number}`}
        className="group flex min-h-[88px] w-full items-center justify-between gap-5 border border-[#e7e0d3] bg-white px-5 py-5 text-left transition-colors duration-300 hover:bg-[#f8f5ed] md:min-h-[100px] md:px-9"
      >
        <div className="flex min-w-0 items-center gap-5 md:gap-8">
          <span className="shrink-0 text-sm font-bold tracking-[0.2em] text-[#a77d32]">
            {pillar.number}
          </span>
          <h2 className="text-lg font-bold leading-snug text-[#142b45] md:text-2xl">
            {pillar.title}
          </h2>
        </div>

        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#c9a45c] transition-colors duration-300 group-hover:bg-[#d8b873] md:h-12 md:w-12"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-6 w-6 text-[#142b45] transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}
            fill="none"
          >
            <path d="M6 5 H18 V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </span>
      </button>

      {/* EXPANDABLE PILLAR CONTENT */}
      <div
        id={`pillar-content-${pillar.number}`}
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-[#e7e0d3] bg-white">
            <div className="relative h-64 overflow-hidden bg-[#10263d] md:h-80">
              <img src={pillar.image} alt={pillar.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/65 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e2c47e]">
                  ኤርትራ ናይ ጽባሕ
                </span>
              </div>
            </div>

            <div className="px-6 py-9 md:px-10 md:py-12">
              <div className="mb-10 max-w-4xl">
                <SectionLabel>ስትራተጂያዊ ራእይ</SectionLabel>
                <p className="text-base leading-8 text-[#42536a] md:text-lg">
                  {pillar.description}
                </p>
              </div>

              <div className="mb-7 flex flex-col gap-3 border-b border-[#ded8ca] pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <SectionLabel>መደብ ምዕባለ</SectionLabel>
                  <h3 className="text-2xl font-bold text-[#142b45] md:text-3xl">
                    ቀንዲ ዓውድታት ምዕባለ
                  </h3>
                </div>
                <p className="text-sm text-[#8a795b]">
                  {pillar.areas.length} ስትራተጂያዊ ዓውድታት
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pillar.areas.map((area) => (
                  <DevelopmentAreaCard key={`${pillar.number}-${area.number}`} area={area} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EritreaOfTomorrowTi() {
  const videoSrc = "/videos/eritrea-of-tomorrow.mp4";
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  const togglePillar = (number: string) => {
    setOpenPillar((current) => (current === number ? null : number));
  };

  return (
    <main className="min-h-screen bg-white text-[#142b45]" style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}>
      {/* FULL-WIDTH VIDEO HERO */}
      <section
        className="relative flex min-h-[75svh] w-full items-center justify-center overflow-hidden bg-[#091725] md:min-h-[85svh]"
        aria-labelledby="tomorrow-hero-title"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/eritrea-of-tomorrow-poster.jpg"
        />
        <div className="absolute inset-0 bg-[#091725]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091725]/80 via-transparent to-[#091725]/30" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center text-white">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#d5b46b] md:text-sm">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>
          <h1 id="tomorrow-hero-title" className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            ኤርትራ ናይ ጽባሕ
          </h1>
          <div className="mx-auto mt-7 h-1 w-24 bg-[#c9a45c]" />
          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/85 md:text-xl">
            ዕዉት ቁጠባ፡ ብባህሊ ዝማዕበለትን ብትካላዊ መሰረት ዝሓየለትን ኤርትራ ንምህናጽ ዝቐርብ ራእይ።
          </p>
          <a
            href="#national-pillars"
            className="mt-12 inline-flex items-center gap-3 border border-[#c9a45c] bg-[#142b45]/80 px-8 py-4 text-sm font-bold tracking-[0.1em] text-white shadow-lg transition duration-300 hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            ሰለስተ መሰረታት ዳህስስ
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <NationalFrameworkHeading />

      <div id="national-pillars">
        <ThreePillarCircle />
      </div>

      {/* THREE FULL-WIDTH WHITE PILLAR BARS */}
      <section className="w-full bg-white px-5 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl space-y-4">
          {pillars.map((pillar) => (
            <PillarSection
              key={pillar.number}
              pillar={pillar}
              isOpen={openPillar === pillar.number}
              onToggle={() => togglePillar(pillar.number)}
            />
          ))}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="relative overflow-hidden bg-[#142b45] px-6 py-20 text-center text-white md:px-10 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#142b45] via-[#10263d] to-[#091725]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d5b46b]">
            ሃገራዊ ራእይ
          </p>
          <h2 className="mb-7 text-3xl font-extrabold leading-tight md:text-5xl">
            እታ ብሓባር እንሃንጻ መጻኢት ሃገር
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#c9a45c]" />
          <p className="text-base leading-8 text-white/75 md:text-lg">
            ዕዉት ኤርትራ ሓያል ቁጠባ፡ ኩርዕቲን ስኒት ዘለዋን ሃገር፡ ከምኡውን ተኣማኒ ትካላት የድልያ። እዞም ሰለስተ መሰረታት እዚኦም ንራእይና መሰረት መጻኢ ይኾኑ።
          </p>
        </div>
      </section>

      <div className="h-16 w-full bg-white md:h-20" aria-hidden="true" />
    </main>
  );
}
