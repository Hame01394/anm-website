
"use client";

import { useState } from "react";

type Topic = {
  title: string;
  description: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  topics: Topic[];
};

const categories: Category[] = [
  {
    id: "social",
    title: "ማሕበራዊ ዕንወት",
    subtitle: "ሳዕቤናት ምልኪ ኣብ ማሕበረሰብ",
    topics: [
      {
        title: "ምጉዳል ብዝሒ ህዝቢ",
        description:
          "ስደት፡ ምስዋርን ሞትን ኣብ ብዝሒ ህዝቢ ዘለዎ ሳዕቤን ይምርምር።",
      },
      {
        title: "ምብትታን ስድራቤት",
        description:
          "ነዊሕ ምፍልላይ ስድራቤታት፡ ስደትን ማእሰርትን ዘስዕብዎ ማሕበራዊ ጉድኣት ይምርምር።",
      },
      {
        title: "ምብትታን ዓድታት",
        description:
          "ምጥራዝ ህዝቢ፡ ምግዳድ ስደትን ምድኻም ማሕበረሰባትን ይምርምር።",
      },
      {
        title: "ምጥፋእ ሰብኣዊ ዓቕሚ",
        description:
          "ምስ ስደት፡ ምእሳርን ምግዳድ ኣገልግሎትን ዝተኣሳሰር ምጥፋእ ክእለትን ተሞክሮን ይምርምር።",
      },
    ],
  },
  {
    id: "economic",
    title: "ቁጠባዊ ዕንወት",
    subtitle: "ሳዕቤናት ኣብ ሃገራዊ ቁጠባ",
    topics: [
      {
        title: "ድኽነትን ስእነት ስራሕን",
        description:
          "ስእነት ዕድላት ስራሕ፡ ምውሳኽ ድኽነትን ምድኻም ኣታዊ ስድራቤታትን ይምርምር።",
      },
      {
        title: "ምድኻም ትካላት ቁጠባ",
        description:
          "ምድኻም ትካላት ምምሕዳር፡ ንግዲ፡ ምህርቲን ዕዳጋታትን ይምርምር።",
      },
      {
        title: "ምጥፋእ ዕድላት ወፍሪ",
        description:
          "ዘይርጉእ ምምሕዳርን ዘይግሉጽ ፖሊሲታትን ኣብ ወፍሪ ዘለዎም ጽልዋ ይምርምር።",
      },
      {
        title: "ምድኻም ሕርሻ",
        description:
          "ምህርቲ ሕርሻ፡ ድሕነት መግቢን ናብራ ሓረስቶትን ይምርምር።",
      },
      {
        title: "ምጥፋእ ሃገራዊ ሃብቲ",
        description:
          "ኣተሓሕዛ ተፈጥሮኣዊ ሃብቲ፡ ሃገራዊ ንብረትን ህዝባዊ ሃብትን ይምርምር።",
      },
      {
        title: "ምድኻም ባጤራን ኣገልግሎታትን",
        description:
          "ጽልዋ ቁጠባዊ ፖሊሲታት ኣብ ባጤራ፡ ባንክታትን ህዝባዊ ኣገልግሎታትን ይምርምር።",
      },
    ],
  },
  {
    id: "military",
    title: "ወተሃደራዊ ዕንወት",
    subtitle: "ወተሃደራዊ ስርዓትን ግዱድ ኣገልግሎትን",
    topics: [
      {
        title: "ዘይተወሰነ ግዱድ ወተሃደራዊ ኣገልግሎት",
        description:
          "ኩነታት ኣገልግሎት፡ ነውሕ ግዜ ምጽናሕን ሳዕቤናቱን ይምርምር።",
      },
      {
        title: "ምግዳድ ሰባት ናብ ሰራዊት",
        description:
          "ኣገባብ ምልመላ፡ ግዱድ ምልመላን ጽልዋኡ ኣብ መንእሰያትን ይምርምር።",
      },
      {
        title: "ምጥሓስ መሰላት ወተሃደራት",
        description:
          "ኣብ ሰራዊት ዘሎ ኣተሓሕዛ፡ ተግባራዊ መሰላትን ኩነታት ናብራን ይምርምር።",
      },
      {
        title: "ምግዳድ ዕማማት",
        description:
          "ወተሃደራዊ ሰብ ኣብ ዘይወተሃደራዊ ስራሓት ምጥቃም ዘለዎ ሳዕቤን ይምርምር።",
      },
      {
        title: "ምፍልላይ ስድራቤታት",
        description:
          "ነዊሕ ኣገልግሎትን ዘይርጉእ ኩነታትን ኣብ ስድራቤታት ዘለዎ ጽልዋ ይምርምር።",
      },
      {
        title: "ምጥፋእ ሞያዊ ዕድላት",
        description:
          "ግዱድ ኣገልግሎት ኣብ ትምህርቲ፡ ሞያዊ ስልጠናን ስራሕን ዘለዎ ጽልዋ ይምርምር።",
      },
    ],
  },
  {
    id: "environmental",
    title: "ከባቢያዊ ዕንወት",
    subtitle: "ምክልኻል ተፈጥሮኣዊ ሃብትን ከባቢን",
    topics: [
      {
        title: "ምጥፋእ ጫካታት",
        description:
          "ምቁራጽ ኣግራብ፡ ምጥፋእ ተፈጥሮኣዊ ኣከባቢን ሳዕቤናቱን ይምርምር።",
      },
      {
        title: "ምድኻም ሃብቲ ማይ",
        description:
          "ምሕደራ ማይ፡ ምብኻን ሃብቲ ማይን ምብካል ማይን ይምርምር።",
      },
      {
        title: "ምምንማን መሬት",
        description:
          "ምምንማን መሬት፡ ምጥፋእ ሓመድን ሳዕቤናቱ ኣብ ሕርሻን ይምርምር።",
      },
      {
        title: "ምጥፋእ ብዙሕነት ህይወት",
        description:
          "ምጉዳል ዝርያታት እንስሳታትን ኣትክልትን ይምርምር።",
      },
      {
        title: "ምብካል ከባቢ",
        description:
          "ምብካል መሬት፡ ማይን ኣየርን ዘስዕቡ ምንጭታትን ሳዕቤናቶምን ይምርምር።",
      },
      {
        title: "ምድኻም ስነ-ምህዳር",
        description:
          "ምልውዋጥ ኣብ ስነ-ምህዳርን ምጥፋእ ተፈጥሮኣዊ ሚዛንን ይምርምር።",
      },
      {
        title: "ምጉዳል ክሊማዊ ጽንዓት",
        description:
          "ለውጢ ክሊማን ዓቕሚ ማሕበረሰባት ንምልውዋጥ ክሊማ ናይ ምጽዋርን ይምርምር።",
      },
    ],
  },
  {
    id: "rights",
    title: "ምግሃስ ሰብኣዊ መሰላት",
    subtitle: "መሰላት፡ ፍትሒን ሓርነትን",
    topics: [
      {
        title: "ዘይሕጋዊ ማእሰርቲ",
        description:
          "ማእሰርቲ ብዘይ ሕጋዊ መስርሕ፡ ምኽንያትን ግሉጽ ፍርዳዊ ቁጽጽርን ይምርምር።",
      },
      {
        title: "ምስዋር ሰባት",
        description:
          "ጉዳያት ምስዋር፡ ዕጫ ግዳያትን ሕቶታት ስድራቤታትን ይምርምር።",
      },
      {
        title: "ምግሃስ ናጽነት ኣገላልጻ",
        description:
          "ኣብ ኣገላልጻ ርእይቶ፡ ሚድያን ሓበሬታን ዘሎ ገደባት ይምርምር።",
      },
      {
        title: "ምግሃስ ናጽነት ሃይማኖት",
        description:
          "ኣብ ልምምድ እምነትን ሃይማኖታዊ ትካላትን ዘሎ ገደባት ይምርምር።",
      },
      {
        title: "ምግሃስ መሰላት ህጻናት",
        description:
          "መሰላት ህጻናት፡ ትምህርቲ፡ ድሕነትን ምክልኻል ካብ ግፍዕን ይምርምር።",
      },
      {
        title: "ምግሃስ መሰላት ደቂ ኣንስትዮ",
        description:
          "መሰላት ደቂ ኣንስትዮ፡ ማዕርነትን ምክልኻል ካብ ግፍዕን ይምርምር።",
      },
      {
        title: "ምግሃስ መሰላት ስደተኛታት",
        description:
          "ኣብ ስደት ዘሎ ድሕነት፡ መሰላትን ኣተሓሕዛን ይምርምር።",
      },
      {
        title: "ስእነት ናጻ ፍርዳዊ ስርዓት",
        description:
          "ናጽነት ፍርዲ፡ ምርግጋጽ ሕጊን ተሓታትነት ስልጣንን ይምርምር።",
      },
    ],
  },
];

export default function DestructionOfEritreaTi() {
  const [activeCategory, setActiveCategory] = useState("social");
  const [activeTopic, setActiveTopic] = useState(0);

  const selectedCategory =
    categories.find((category) => category.id === activeCategory) ??
    categories[0];

  const selectedTopic =
    selectedCategory.topics[activeTopic] ??
    selectedCategory.topics[0];

  const chooseCategory = (id: string) => {
    setActiveCategory(id);
    setActiveTopic(0);
  };

  return (
    <section
      lang="ti"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
      className="bg-[#f8f5ed] px-4 py-20 text-[#142b45] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#a88745]">
            ሳዕቤናት ምልኪ
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            ዕንወት ኤርትራ
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 bg-[#c9a45c]" />

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-8 text-slate-600 md:text-base">
            እቲ ስርዓት ኣብ ማሕበራዊ፡ ቁጠባዊ፡ ወተሃደራዊ፡
            ከባቢያዊን ሰብኣዊ መሰላትን ዘስዕቦ ሳዕቤናት
            ንምርዳእ እዞም ዝስዕቡ ዛዕባታት ይምርምሩ።
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <aside className="space-y-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => chooseCategory(category.id)}
                className={`w-full rounded-xl border p-5 text-right transition-all duration-300 ${
                  activeCategory === category.id
                    ? "border-[#c9a45c] bg-[#142b45] text-white shadow-lg"
                    : "border-[#e3ddcf] bg-white text-[#142b45] hover:border-[#c9a45c] hover:shadow-md"
                }`}
              >
                <span className="block text-lg font-black">
                  {category.title}
                </span>
                <span
                  className={`mt-2 block text-xs ${
                    activeCategory === category.id
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {category.subtitle}
                </span>
                <span
                  className={`mt-3 block text-xs ${
                    activeCategory === category.id
                      ? "text-[#e6c987]"
                      : "text-[#a88745]"
                  }`}
                >
                  {category.topics.length} ዛዕባታት
                </span>
              </button>
            ))}
          </aside>

          <div className="min-w-0">
            <div className="rounded-2xl border border-[#e3ddcf] bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6 border-b border-[#e8e2d6] pb-5">
                <p className="text-xs font-bold tracking-wider text-[#a88745]">
                  ዛዕባ ዝርዝር
                </p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">
                  {selectedCategory.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {selectedCategory.subtitle}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {selectedCategory.topics.map((topic, index) => (
                  <button
                    key={`${selectedCategory.id}-${index}`}
                    type="button"
                    onClick={() => setActiveTopic(index)}
                    className={`rounded-xl border p-4 text-right transition-all duration-300 ${
                      activeTopic === index
                        ? "border-[#c9a45c] bg-[#f8f1df] shadow-sm"
                        : "border-[#e8e2d6] bg-white hover:border-[#c9a45c] hover:bg-[#fcfaf5]"
                    }`}
                  >
                    <span className="mb-2 block text-xs font-bold text-[#a88745]">
                      0{index + 1}
                    </span>
                    <span className="block font-bold leading-7 text-[#142b45]">
                      {topic.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border-r-4 border-[#c9a45c] bg-[#f8f5ed] p-6">
                <p className="text-xs font-bold tracking-wider text-[#a88745]">
                  ብዛዕባ እዚ ዛዕባ
                </p>

                <h4 className="mt-3 text-xl font-black leading-relaxed">
                  {selectedTopic.title}
                </h4>

                <p className="mt-4 text-sm leading-8 text-slate-700">
                  {selectedTopic.description}
                </p>

                <div className="mt-6 border-t border-[#e3ddcf] pt-4">
                  <p className="text-xs leading-6 text-slate-500">
                    ዝርዝር ምርምር፡ ሰነዳት፡ ምስክርነታትን
                    ተኣማንነት ዘለዎም ምንጭታትን ኣብዚ ክውሰኹ እዮም።
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-7 text-slate-500">
          እዚ ክፋል ንምርምርን ሰነዳዊ ሓበሬታን ዝተዳለወ እዩ።
          ክሲታትን ክርክራትን ብተኣማንነት ዘለዎም ምንጭታት
          ክድገፉን ካብ ዝተረጋገጹ ሓቅታት ክፍለዩን ኣለዎም።
        </p>
      </div>
    </section>
  );
}
