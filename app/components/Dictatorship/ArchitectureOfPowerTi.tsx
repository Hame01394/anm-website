
"use client";

import { useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Person = {
  name: string;
  role: string;
  initials: string;
};

type PowerGroup = {
  id: GroupId;
  title: string;
  people: Person[];
};

const groups: PowerGroup[] = [
  {
    id: "dictator",
    title: "እቲ መላኺ",
    people: [
      {
        name: "ኢሳያስ ኣፈወርቂ",
        role: "ፕረዚደንት",
        initials: "ኢኣ",
      },
      {
        name: "በዓልቲ ቤቱ",
        role: "ኣባል ውሽጣዊ ክቢ",
        initials: "በቤ",
      },
      {
        name: "ወዱ",
        role: "ኣባል ስድራቤት",
        initials: "ወ",
      },
    ],
  },
  {
    id: "military",
    title: "ወተሃደራዊ ኣዘዝቲ",
    people: [
      {
        name: "ወተሃደራዊ ኣዛዚ 1",
        role: "ላዕለዋይ ወተሃደራዊ ሓላፊ",
        initials: "ወ1",
      },
      {
        name: "ወተሃደራዊ ኣዛዚ 2",
        role: "ወተሃደራዊ ኣዛዚ",
        initials: "ወ2",
      },
      {
        name: "ወተሃደራዊ ኣዛዚ 3",
        role: "ወተሃደራዊ ኣዛዚ",
        initials: "ወ3",
      },
    ],
  },
  {
    id: "security",
    title: "ስርዓት ጸጥታ",
    people: [
      {
        name: "ሓላፊ ጸጥታ 1",
        role: "ላዕለዋይ ሓላፊ ጸጥታ",
        initials: "ጸ1",
      },
      {
        name: "ሓላፊ ጸጥታ 2",
        role: "ሓላፊ ጸጥታ",
        initials: "ጸ2",
      },
      {
        name: "ሓላፊ ጸጥታ 3",
        role: "ሓላፊ ጸጥታ",
        initials: "ጸ3",
      },
    ],
  },
  {
    id: "loyalists",
    title: "ፖለቲካዊ ተኣማንነት ዘለዎም",
    people: [
      {
        name: "ፖለቲካዊ ሓላፊ 1",
        role: "ላዕለዋይ ፖለቲካዊ ሓላፊ",
        initials: "ፖ1",
      },
      {
        name: "ፖለቲካዊ ሓላፊ 2",
        role: "ፖለቲካዊ ሓላፊ",
        initials: "ፖ2",
      },
      {
        name: "ፖለቲካዊ ሓላፊ 3",
        role: "ፖለቲካዊ ሓላፊ",
        initials: "ፖ3",
      },
    ],
  },
];

function PortraitPanel({ group }: { group: PowerGroup }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {group.people.map((person, index) => (
        <div
          key={`${group.id}-${index}`}
          className="min-w-0 overflow-hidden rounded-lg border border-[#d5b46b]/40 bg-[#203b59] text-center shadow-lg"
        >
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-[#52677d] to-[#142b45] text-2xl font-bold text-[#e6c987]">
            {person.initials}
          </div>
          <div className="p-2">
            <p className="text-xs font-bold leading-snug text-white">
              {person.name}
            </p>
            <p className="mt-1 text-[10px] leading-snug text-slate-300">
              {person.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ArchitectureOfPowerTi() {
  const [activeGroup, setActiveGroup] = useState<GroupId>("dictator");

  const selectedGroup = groups.find(
    (group) => group.id === activeGroup
  )!;

  const selectGroup = (id: GroupId) => {
    setActiveGroup(id);
  };

  const groupButtonClass = (id: GroupId) =>
    `relative z-10 w-full rounded-xl border px-4 py-4 text-center transition-all duration-300 ${
      activeGroup === id
        ? "border-[#e6c987] bg-[#d5b46b] text-[#142b45] shadow-xl"
        : "border-white/20 bg-[#203b59] text-white hover:border-[#e6c987] hover:bg-[#294968]"
    }`;

  return (
    <section
      lang="ti"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
      className="bg-white px-4 py-20 text-[#142b45] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#a88745]">
            መዋቅር ስልጣን
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            እቲ መላኺ፦ ብሓደ ሰብ ዝቆጻጸር ስርዓት
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-[#c9a45c]" />
        </div>

        <div className="rounded-3xl bg-[#142b45] p-5 text-white shadow-2xl md:p-10">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              እቲ ስርዓት ስልጣን ኣብ ኢድ ሓደ ሰብ ዝእከበሉ፡
              ወተሃደራዊ፡ ጸጥታዊን ፖለቲካዊን ትካላት
              ኣብ ትሕቲ ማእከላይ ቁጽጽር ዝሰርሑሉ መዋቕር።
            </p>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-[1fr_260px_1fr]">
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onMouseEnter={() => selectGroup("military")}
                onFocus={() => selectGroup("military")}
                onClick={() => selectGroup("military")}
                className={groupButtonClass("military")}
              >
                <span className="block text-lg font-black">
                  ወተሃደራዊ ኣዘዝቲ
                </span>
                <span className="mt-1 block text-xs opacity-80">
                  ወተሃደራዊ ቁጽጽር
                </span>
              </button>

              <button
                type="button"
                onMouseEnter={() => selectGroup("security")}
                onFocus={() => selectGroup("security")}
                onClick={() => selectGroup("security")}
                className={groupButtonClass("security")}
              >
                <span className="block text-lg font-black">
                  ስርዓት ጸጥታ
                </span>
                <span className="mt-1 block text-xs opacity-80">
                  ውሽጣዊ ጸጥታን ስለያን
                </span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                type="button"
                onMouseEnter={() => selectGroup("dictator")}
                onFocus={() => selectGroup("dictator")}
                onClick={() => selectGroup("dictator")}
                aria-label="እቲ መላኺ"
                className={`flex h-44 w-44 items-center justify-center rounded-full border-4 p-5 text-center shadow-2xl transition-all duration-300 md:h-52 md:w-52 ${
                  activeGroup === "dictator"
                    ? "border-[#f0d99f] bg-[#d5b46b] text-[#142b45] scale-105"
                    : "border-[#d5b46b] bg-[#203b59] text-white hover:bg-[#294968]"
                }`}
              >
                <span className="text-2xl font-black leading-relaxed">
                  እቲ
                  <br />
                  መላኺ
                </span>
              </button>

              <p className="mt-4 text-xs font-bold tracking-wider text-[#e6c987]">
                ማእከላይ ስልጣን
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="button"
                onMouseEnter={() => selectGroup("loyalists")}
                onFocus={() => selectGroup("loyalists")}
                onClick={() => selectGroup("loyalists")}
                className={groupButtonClass("loyalists")}
              >
                <span className="block text-lg font-black">
                  ፖለቲካዊ ተኣማንነት ዘለዎም
                </span>
                <span className="mt-1 block text-xs opacity-80">
                  ፖለቲካዊ ደገፍ
                </span>
              </button>

              <button
                type="button"
                onMouseEnter={() => selectGroup("dictator")}
                onFocus={() => selectGroup("dictator")}
                onClick={() => selectGroup("dictator")}
                className={groupButtonClass("dictator")}
              >
                <span className="block text-lg font-black">
                  ውሽጣዊ ክቢ
                </span>
                <span className="mt-1 block text-xs opacity-80">
                  ኣብ ቀረባ ዝርከቡ ሰባት
                </span>
              </button>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl border-t border-white/20 pt-8">
            <div className="mb-5 text-center">
              <h3 className="text-xl font-black text-[#e6c987] md:text-2xl">
                {selectedGroup.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                ንምርኣይ ኣብ ላዕሊ ዘሎ ክፋል ምረጽ
              </p>
            </div>

            <PortraitPanel group={selectedGroup} />
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-slate-400">
            መብርሂ፦ እዚ ስእላዊ መግለጺ ናይ መዋቕር ስልጣን
            እዩ። ስሞምን ሓላፍነቶምን ዝተጠቕሱ ሰባት
            ብምንጪታት ክረጋገጹ ኣለዎም።
          </p>
        </div>
      </div>
    </section>
  );
}
