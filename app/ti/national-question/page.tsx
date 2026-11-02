
"use client";

import { useState } from "react";

const sections = [
  {
    number: "01",
    id: "tigrinya-national-question",
    symbol: "◈",
    title: "ሃገራዊ ሕቶ ትግርኛ",
    subtitle: "መንነት፣ ሃገራዊ መበቆልን ባዕላዊ ውሳነን",
    description:
      "ታሪኻዊ መንነት፣ ሃገራዊ ምንቅስቓሳትን ፖለቲካዊ መጻኢን ህዝቢ ትግርኛ ዳህስስ። ኣብ ባዕላዊ ውሳነ ሃገራዊ መርገጺ ANM፣ ታሪኻዊ ሃገራዊ መበቆልን ኣብ ኤርትራን ትግራይን ዝነብሩ ማሕበረሰባት ትግርኛ ዘለዎም ርክብን መርምር።",
    topics: [
      "ተወላዳዊ መንነትን ታሪኻዊ ሃገራዊ መበቆልን",
      "ባዕላዊ ውሳነ ሃገራዊ",
      "ፖለቲካዊ መጻኢን ደሞክራስያዊ ምርጫን",
      "ታሪኻውን ባህላውን ምትእስሳር ምስ ትግራይ",
      "ዶባዊ ርክባትን ዞባዊ ምትሕብባርን",
      "ሰላም፣ ዶባትን ሓድሕዳዊ ኣፍልጦን",
    ],
    principle:
      "ህዝቢ ትግርኛ ብዛዕባ ሃገራውን ፖለቲካውን መጻኢኡ ንምውሳን ትርጉም ዘለዎ ደሞክራስያዊ ድምጺ ክህልዎ ኣለዎ።",
  },
  {
    number: "02",
    id: "minority-rights",
    symbol: "◇",
    title: "መሰላትን ውሕስነታትን ኣናእሽቶ ማሕበረሰባት",
    subtitle: "ማዕርነት፣ ክብርን መሰረታዊ ናጽነታትን",
    description:
      "መሰላትን ውሕስነታትን ኩሎም ኣናእሽቶ ማሕበረሰባት ኣብ ምቕራጽ ኣተኩር። ኣብ ባዕላዊ ውሳነ ዝተመርኮሰ ፖለቲካዊ መጻኢ፣ ማዕርነት፣ ውልቃዊ ናጽነታት፣ ምክልኻል ባህልን ትርጉም ዘለዎ ፖለቲካዊ ተሳትፎን ክረጋገጹ ኣለዎም።",
    topics: [
      "ማዕረ ሰብኣውን ሲቪላውን መሰላት",
      "ማሕበራዊ፣ ቁጠባውን ፖለቲካውን ተሳትፎ",
      "ሃይማኖታዊ ናጽነትን ምክልኻል ባህልን",
      "መሰላት ቋንቋን ትምህርትን",
      "ፍትሓዊ ውክልና ኣብ ህዝባዊ ትካላት",
      "ካብ ኣድልዎ ምክልኻል",
    ],
    principle:
      "ነፍሲ ወከፍ ሰብን ማሕበረሰብን ማዕረ መሰረታዊ መሰላት፣ ክብርን ብሕጊ ዝረጋገጽ ውሕስነትን ክህልዎ ኣለዎ።",
  },
  {
    number: "03",
    id: "veterans-martyrs-wounded",
    symbol: "✧",
    title: "ተጋደልቲ፣ ሰማእታትን ስንኩላንን",
    subtitle: "ኣፍልጦ፣ ክንክንን ማሕበራዊ ሓላፍነትን",
    description:
      "ኣብ ቃልሲ ሃገር ንዝተሳተፉ ተጋደልቲ፣ ንዝተጎድኡ፣ ስድራቤታት ሰማእታትን ንኹሎም መስዋእቲ ዝኸፈሉን ዝግብኦም ሓላፍነታት ዳህስስ። ኣፍልጦ ምሃብ ብግብራውን ዘላቕን ደገፍ ክስነ ኣለዎ።",
    topics: [
      "ኣፍልጦን ሃገራዊ ዝኽርን",
      "ክንክን ጥዕናን ምሕዋይን",
      "ጡረታን ገንዘባዊ ደገፍን",
      "መንበሪ ገዛን ማሕበራዊ ውሕስነትን",
      "ደገፍ ንስድራቤታት ሰማእታት",
      "ትምህርቲ፣ ስራሕን ዳግመ ምውህሃድን",
    ],
    principle:
      "እቶም መስዋእቲ ዝኸፈሉን ስድራቤታቶምን ክብሪ፣ ኣፍልጦን ቀጻሊ ማሕበራዊ ደገፍን ይግብኦም።",
  },
  {
    number: "04",
    id: "environment-natural-resources",
    symbol: "❋",
    title: "ከባቢን ተፈጥሮኣዊ ሃብትን",
    subtitle: "ምድሪ ምሕላውን መጻኢ ምርግጋጽን",
    description:
      "ምድሪ፣ ማይ፣ ገማግም ባሕሪ፣ ህይወታዊ ብዙሕነትን ተፈጥሮኣዊ ሃብትን ኤርትራ ብሓላፍነት ምሕላውን ምምሕዳርን ዳህስስ። ፖሊሲ ከባቢ ዘላቒ ናብራን ድሌታት ወለዶታት መጻኢን ክድግፍ ኣለዎ።",
    topics: [
      "ምሕላው መሬትን ሓመድን",
      "ውሕስነትን ምምሕዳርን ማይ",
      "ሕርሻን ዘላቒ ውሕስነት መግብን",
      "ምክልኻል ገማግም ባሕርን ሃይቃትን",
      "ህይወታዊ ብዙሕነትን ምሕዳስ ከባቢን",
      "ምጽዋር ለውጢ ክሊማን ተሓደስቲ ጸዓትን",
    ],
    principle:
      "ተፈጥሮኣዊ ሃብቲ ንሎሚን ንወለዶታት መጻኢን ብሓላፍነት ክሕሎን ክመሓደርን ኣለዎ።",
  },
  {
    number: "05",
    id: "economic-transformation",
    symbol: "▧",
    title: "ቁጠባዊ ለውጢ",
    subtitle: "ዕድላት፣ ምፍራይን ብልጽግናን",
    description:
      "ዕድላት ዝፈጥር፣ ስራሕ ፈጠራ ዝድግፍን ደረጃ ናብራ ዘመሓይሽን ፍርያምን ዘላቕን ቁጠባ ንምህናጽ ራእይ ኣቕርብ። ቁጠባዊ ምዕባለ ምስ ትምህርቲ፣ ትሕተ-ቅርጺን ሓላፍነታዊ ወፍርን ክተኣሳሰር ኣለዎ።",
    topics: [
      "ሕርሻን ውሕስነት መግብን",
      "ኢንዱስትሪን ምፍራይን",
      "ንግዲ፣ ወደባትን ትሕተ-ቅርጺን",
      "ጸዓትን ቴክኖሎጂያዊ ምዕባለን",
      "ውልቃዊ ትካላትን ወፍርን",
      "ትምህርቲ፣ ክእለትን ስራሕን",
    ],
    principle:
      "ቁጠባዊ ምዕባለ ዕድላት ክፈጥር፣ ፍርያም ዓቕሚ ከደልድልን ጽሬት ናብራ ከመሓይሽን ኣለዎ።",
  },
  {
    number: "06",
    id: "regional-global-strategy",
    symbol: "◎",
    title: "ዞባውን ዓለምለኻውን ስትራተጂ",
    subtitle: "ጂኦፖለቲክስ፣ ሽርክነታትን ተራ ANMን",
    description:
      "ኣብ ቀርኒ ኣፍሪቃ፣ ቀይሕ ባሕሪ፣ ማእከላይ ምብራቕን ሰፊሕ ዓለምለኻዊ ስርዓትን ጽልዋ ዘለዎም ሓይልታት መርምር። ኣብ ዞባዊ ድሕነት፣ ስትራተጂያዊ ሽርክነት፣ ዲፕሎማሲን ዓለምለኻዊ ውድድርን ዝምልከት ዝቐርብ ኣገባብ ANM ኣነጽር።",
    topics: [
      "ኢራንን ቱርኪን፦ ዞባዊ ምንቅስቓስን ብወከልቲ ዝግበር ጽልዋን",
      "ሱዳን፣ የመን፣ ሶማልያን ኢትዮጵያን፦ ዞባዊ ምብትታንን ዘይርጉእነትን",
      "እስራኤል፦ ስትራተጂያዊ ሽርክነትን ዞባዊ ምትሕብባርን",
      "ሕቡራት መንግስታት ኣመሪካን ቻይናን፦ ዓለምለኻዊ ውድድርን ኣህጉራዊ ተራ ANMን",
    ],
    principle:
      "ዞባውን ዓለምለኻውን ኣገባብ ANM ብሉኣላውነት፣ ሃገራዊ ረብሓታት፣ ሰላማዊ ምትሕብባርን ስትራተጂያዊ ናጽነትን ክምራሕ ኣለዎ።",
    subtopics: [
      {
        title: "ኢራንን ቱርኪን",
        subtitle: "ዞባዊ ምንቅስቓስን ብወከልቲ ዝግበር ጽልዋን",
        description:
          "ዞባዊ ስትራተጂታት ኢራንን ቱርኪን፣ ፖለቲካዊ፣ ወተሃደራውን ቁጠባውን ጽልዋአን፣ ምስ መንግስታዊ ዘይኮኑ ተዋሳእቲ ዘለወን ርክብን ኣብ ቀርኒ ኣፍሪቃን ቀይሕ ባሕርን ዘለዎ ሳዕቤንን መርምር።",
        points: [
          "ዞባዊ ፖለቲካውን ወተሃደራውን ጽልዋ",
          "መርበባት ወከልትን ዕጡቓት መንግስታዊ ዘይኮኑ ተዋሳእትን",
          "ስትራተጂያዊ ህላወ ኣብ ቀይሕ ባሕርን ቀርኒ ኣፍሪቃን",
          "ሳዕቤን ኣብ ሉኣላውነት ኤርትራን ዞባዊ ድሕነትን",
        ],
      },
      {
        title: "ሱዳን፣ የመን፣ ሶማልያን ኢትዮጵያን",
        subtitle: "ዞባዊ ምብትታንን ዘይርጉእነትን",
        description:
          "ኣብ ጎረባብቲ ሃገራት ዘሎ ግጭታት፣ ፖለቲካዊ ፍልልያት፣ ትካላዊ ብድሆታትን ወጻኢ ምትእትታዋትን፣ ከምኡውን ኣብ ኤርትራን ሰፊሕ ዞባን ዘለዎም ሳዕቤናት መርምር።",
        points: [
          "ሱዳን፦ ግጭት፣ ምብትታን መንግስትን ዝተፈላለዩ ረብሓታትን",
          "የመን፦ ግጭትን ስትራተጂያዊ ኣገዳስነት ባብ ኤል-መንደብን",
          "ሶማልያ፦ ምህናጽ መንግስትን ፖለቲካዊ ፍልልያትን ድሕነትን",
          "ኢትዮጵያ፦ ውሽጣዊ ግጭታትን ዞባዊ ወጥርን",
          "ድሕነት ዶባት፣ ንግድን ምፍንቓል ህዝብን",
        ],
      },
      {
        title: "እስራኤል",
        subtitle: "ስትራተጂያዊ ሽርክነትን ዞባዊ ምትሕብባርን",
        description:
          "እቲ ANM ዝቐርቦ ስትራተጂያዊ ርክብ ምስ እስራኤል ዳህስስ። እዚ ዲፕሎማስያዊ ምትእስሳር፣ ቁጠባዊ ምትሕብባር፣ ቴክኖሎጂን ኣብ ዞባዊ ርግኣት ዘለዉ ሓባራዊ ረብሓታትን የጠቓልል።",
        points: [
          "ዲፕሎማስያውን ስትራተጂያውን ርክባት",
          "ድሕነት ቀይሕ ባሕርን ምንቅስቓስ ባሕራውን",
          "ሕርሻ፣ ምምሕዳር ማይን ቴክኖሎጂን",
          "ንግዲ፣ ወፍሪ፣ ትምህርትን ምህዞን",
          "ዞባዊ ዘተን ምትሕብባርን",
        ],
      },
      {
        title: "ሕቡራት መንግስታት ኣመሪካን ቻይናን",
        subtitle: "ዓለምለኻዊ ውድድርን ኣህጉራዊ ኣቀማምጣን",
        description:
          "ኣብ ቀርኒ ኣፍሪቃን ቀይሕ ባሕርን ዘሎ ጽልዋ ዓለምለኻዊ ሓይልታት ገምግም። እዚ ኣብ ንግዲ፣ ትሕተ-ቅርጺ፣ ወደባት፣ ወፍርን መስመራት ምንቅስቓስ ባሕርን ዝግበር ውድድር የጠቓልል። ኣብ ሃገራዊ ረብሓታት ዝተመርኮሰ ኣገባብ ኣህጉራዊ ሽርክነት ኣነጽር።",
        points: [
          "ጂኦፖለቲካውን ቁጠባውን ውድድር ኣመሪካን ቻይናን",
          "ወጻኢ ወተሃደራዊ ህላወን ስትራተጂያዊ ትሕተ-ቅርጺን",
          "ወደባት፣ መስመራት ባሕርን ዓለምለኻዊ ንግድን",
          "ርክባት ምስ ዓለምለኻዊ ሓይልታትን ትካላትን",
          "ዲፕሎማስያውን ኣህጉራውን ተራ ANM",
        ],
      },
    ],
  },
];

export default function NationalQuestionPageTi() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      lang="ti"
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* HERO */}
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-[#091725] px-6 py-24 text-center text-white md:min-h-[78svh]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full border border-[#c9a45c]/50" />
          <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full border border-[#c9a45c]/40" />
          <div className="absolute -right-48 -bottom-64 h-[650px] w-[650px] rounded-full border border-[#c9a45c]/50" />
          <div className="absolute -right-20 -bottom-40 h-[450px] w-[450px] rounded-full border border-[#c9a45c]/40" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#091725]/30 via-transparent to-[#091725]" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.4em] text-[#d5b46b] md:text-sm">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-8xl">
            ሃገራዊ
            <span className="mt-2 block text-[#d5b46b]">ሕቶ</span>
          </h1>

          <div className="mx-auto mt-8 h-1 w-24 bg-[#c9a45c]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 md:text-xl">
            መንነት፣ ባዕላዊ ውሳነ፣ ማዕረ መሰላት፣ ሃገራዊ
            ሓላፍነት፣ ቁጠባዊ ለውጢን ኣብ ዞባናን ዓለምን
            ዘለና መጻኢ ቦታን።
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("national-agenda")}
            className="mt-12 inline-flex items-center gap-3 border border-[#c9a45c] bg-[#c9a45c] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#142b45] transition hover:bg-transparent hover:text-white"
          >
            ሃገራዊ ሕቶ ዳህስስ
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              ሃገራዊ ኣጀንዳና
            </p>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
              መጻኢና ዝቐርጹ ሕቶታት ንምንጻር።
            </h2>

            <div className="mt-6 h-1 w-16 bg-[#c9a45c]" />

            <p className="mt-7 text-base leading-8 text-[#526176] md:text-lg">
              ሃገራዊ ሕቶ ነቶም መንነት፣ ፖለቲካዊ መጻኢ፣
              መሰላት፣ ሓላፍነታትን ምዕባለን ህዝቢ ትግርኛ
              ዝምልከቱ መሰረታዊ ጉዳያት የጠቓልል። ከምኡውን
              መሰላት ኣናእሽቶ ማሕበረሰባትን ንዞባውን
              ዓለምለኻውን መጻኢና ዝቐርጹ ርክባትን ይምርምር።
            </p>
          </div>

          <div className="border-l-4 border-[#c9a45c] bg-white p-8 shadow-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
              ማእከላይ መትከል
            </p>

            <p className="mt-5 text-2xl font-bold leading-relaxed text-[#142b45] md:text-3xl">
              ኣብ ባዕላዊ ውሳነ፣ ማዕረ መሰላት፣ ክብርን
              ሓላፍነታዊ ምዕባለን ዝተመርኮሰ ሃገራዊ መጻኢ።
            </p>

            <p className="mt-6 text-sm leading-7 text-[#657287]">
              ሽዱሽተ ሓባራዊ ዓውድታት ንሃገራዊ፣ ዞባውን
              ዓለምለኻውን ኣጀንዳ ANM ንምምርማር መሰረት
              ይኾኑ።
            </p>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <section
        id="national-agenda"
        className="scroll-mt-20 border-y border-[#e4dccd] bg-white px-5 py-10 md:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              ኣጀንዳና ዳህስስ
            </p>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">
              ሽዱሽተ ዓውድታት። ሓደ ሃገራዊ መጻኢ።
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className="group border border-[#e7e0d3] bg-[#f8f5ed] p-4 text-left transition hover:border-[#c9a45c] hover:bg-[#142b45] hover:text-white"
              >
                <span className="block text-xs font-bold tracking-widest text-[#a77d32] group-hover:text-[#d5b46b]">
                  {section.number}
                </span>

                <span className="mt-3 block text-2xl text-[#c9a45c]">
                  {section.symbol}
                </span>

                <span className="mt-3 block text-sm font-bold leading-snug">
                  {section.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SIX SECTIONS */}
      <section className="mx-auto max-w-7xl space-y-7 px-5 py-20 md:px-10 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77d32]">
            ሽዱሽተ ሃገራዊ ሕቶታት
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
            መሰረታት ኣጀንዳና።
          </h2>
        </div>

        {sections.map((section) => {
          const isExpanded = expanded === section.id;

          return (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 overflow-hidden border border-[#ded8ca] bg-white shadow-sm transition duration-300 hover:shadow-md"
            >
              {/* SECTION HEADER */}
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => {
                  setExpanded(isExpanded ? null : section.id);
                  setActiveSubtopic(0);
                }}
                className="group flex w-full flex-col gap-5 border-l-[6px] border-[#c9a45c] bg-[#142b45] p-6 text-left text-white transition hover:bg-[#1b3858] md:flex-row md:items-center md:justify-between md:px-10 md:py-9"
              >
                <div className="flex items-start gap-5 md:items-center">
                  <span className="mt-1 text-3xl text-[#d5b46b] md:text-4xl">
                    {section.symbol}
                  </span>

                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#d5b46b]">
                      ሃገራዊ ሕቶ {section.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">
                      {section.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/65 md:text-base">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center self-end border border-[#c9a45c]/60 text-xl text-[#d5b46b] transition group-hover:bg-[#c9a45c] group-hover:text-[#142b45] md:self-center">
                  {isExpanded ? "−" : "+"}
                </span>
              </button>

              {/* EXPANDED CONTENT */}
              {isExpanded && (
                <div className="animate-in fade-in duration-300">
                  <div className="grid gap-10 p-6 md:grid-cols-[1fr_0.85fr] md:p-10">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                        ሓፈሻዊ መግለጺ
                      </p>

                      <p className="mt-4 text-base leading-8 text-[#526176] md:text-lg">
                        {section.description}
                      </p>

                      <div className="mt-8 border-l-4 border-[#c9a45c] bg-[#f8f5ed] p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a77d32]">
                          መምርሒ መትከል
                        </p>

                        <p className="mt-3 text-lg font-bold leading-8 text-[#142b45]">
                          {section.principle}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                        ቀንዲ መዳያት ትኹረት
                      </p>

                      <div className="mt-5 space-y-3">
                        {section.topics.map((topic, index) => (
                          <div
                            key={topic}
                            className="flex items-start gap-3 border-b border-[#e9e2d6] pb-3"
                          >
                            <span className="mt-0.5 text-sm font-bold text-[#c9a45c]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-sm font-semibold leading-6 text-[#142b45]">
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* REGIONAL STRATEGY SUBSECTIONS */}
                  {section.subtopics && (
                    <div className="border-t border-[#e7e0d3] bg-[#f8f5ed] p-6 md:p-10">
                      <div className="mb-7">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                          ዞባውን ዓለምለኻውን ኣረኣእያ
                        </p>

                        <h4 className="mt-2 text-2xl font-extrabold">
                          ንዞባናን ዓለምን ዝቐርጹ ሓይልታት።
                        </h4>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {section.subtopics.map((subtopic, index) => (
                          <button
                            key={subtopic.title}
                            type="button"
                            onClick={() => setActiveSubtopic(index)}
                            className={`border p-5 text-left transition ${
                              activeSubtopic === index
                                ? "border-[#c9a45c] bg-[#142b45] text-white"
                                : "border-[#e1d9ca] bg-white text-[#142b45] hover:border-[#c9a45c]"
                            }`}
                          >
                            <span
                              className={`text-xs font-bold tracking-widest ${
                                activeSubtopic === index
                                  ? "text-[#d5b46b]"
                                  : "text-[#a77d32]"
                              }`}
                            >
                              ስትራተጂያዊ ዓውዲ 0{index + 1}
                            </span>

                            <span className="mt-3 block text-lg font-bold">
                              {subtopic.title}
                            </span>

                            <span
                              className={`mt-2 block text-sm ${
                                activeSubtopic === index
                                  ? "text-white/65"
                                  : "text-[#657287]"
                              }`}
                            >
                              {subtopic.subtitle}
                            </span>
                          </button>
                        ))}
                      </div>

                      {/* SELECTED STRATEGIC AREA */}
                      <div className="mt-5 border border-[#ded8ca] bg-white p-6 md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                            ዝተመርጸ ስትራተጂያዊ ዓውዲ
                          </span>

                          <span className="text-xs font-bold text-[#a77d32]">
                            0{activeSubtopic + 1} / 04
                          </span>
                        </div>

                        <h5 className="mt-4 text-2xl font-extrabold">
                          {section.subtopics[activeSubtopic].title}
                        </h5>

                        <p className="mt-4 max-w-4xl text-base leading-8 text-[#526176]">
                          {section.subtopics[activeSubtopic].description}
                        </p>

                        <div className="mt-7 grid gap-3 md:grid-cols-2">
                          {section.subtopics[activeSubtopic].points.map(
                            (point) => (
                              <div
                                key={point}
                                className="flex items-start gap-3 bg-[#f8f5ed] p-4"
                              >
                                <span className="mt-1 text-[#c9a45c]">◆</span>
                                <span className="text-sm font-semibold leading-6 text-[#142b45]">
                                  {point}
                                </span>
                              </div>
                            )
                          )}
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-[#e7e0d3] pt-5">
                          <button
                            type="button"
                            disabled={activeSubtopic === 0}
                            onClick={() =>
                              setActiveSubtopic((current) => current - 1)
                            }
                            className="text-xs font-bold uppercase tracking-widest text-[#142b45] transition hover:text-[#a77d32] disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            ← ዝሓለፈ
                          </button>

                          <button
                            type="button"
                            disabled={activeSubtopic === 3}
                            onClick={() =>
                              setActiveSubtopic((current) => current + 1)
                            }
                            className="text-xs font-bold uppercase tracking-widest text-[#142b45] transition hover:text-[#a77d32] disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            ዝቕጽል →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </section>

      {/* CLOSING STATEMENT — SEPARATE FROM FOOTER */}
    </main>
  );
}
