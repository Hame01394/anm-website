import Image from "next/image";
import {
  chairperson,
  nationalLeadership,
} from "../../about/structure/structureData";

const activities = [
  {
    number: "01",
    title: "ኣብ ኤርትራ ንዝፍጠር ክፍተት ምምላእ ምድላው",
    description:
      "ንሓላፍነታዊ ደሞክራስያዊ ምስግጋርን ንዳግመ-ህንጸት ሃገራዊ ትካላትን ዘድሊ ትካላዊ፡ ምምሕዳራዊን ሰብኣዊን ዓቕሚ ምድላው።",
  },
  {
    number: "02",
    title: "ሚድያን ተጣባቕነትን",
    description:
      "መርገጺታት ANM ምሕባር፡ ንቕሓት ምዕባይ፡ ጌጋ ሓበሬታ ምእራምን ምስ ሃገራውን ዓለምለኻውን ተዓዘብቲ ርክብ ምፍጣርን።",
  },
  {
    number: "03",
    title: "ምምዕባል ፖሊሲ",
    description:
      "ንደሞክራስያዊ ምሕደራ፡ ቁጠባዊ ልምዓት፡ ትምህርቲ፡ ጥዕናን ሃገራዊ ዳግመ-ህንጸትን ዝምልከቱ ተግባራዊ ሓሳባት ፖሊሲ ምምዕባል።",
  },
  {
    number: "04",
    title: "ምርምርን ትንተናን",
    description:
      "ፖለቲካዊ፡ ቁጠባዊ፡ ማሕበራውን ትካላውን ብድሆታት ኤርትራ ምጽናዕ፡ ኣብ መርትዖ ዝተመርኮሱ ለበዋታት ምድላውን።",
  },
  {
    number: "05",
    title: "ሃገራዊ ኣጀንዳ ምግላጽ",
    description:
      "ፖለቲካዊ መርገጺታት፡ ሃገራዊ ቀዳምነታትን ራእይ መጻኢን ናይቲ ምንቅስቓስ ብንጹር ምቕራብ።",
  },
];

const departments = [
  {
    number: "01",
    name: "ፖለቲካዊ ጉዳያትን ስትራተጂን",
    description: "ፖለቲካዊ ኣንፈት፡ ስትራተጂን ሃገራዊ ኣጀንዳን።",
    leader: "Yehshelu Gebremariam",
    position: "ሓላፊ ፖለቲካዊ ጉዳያት",
    image: "/images/head-of-political-affairs.png",
  },
  {
    number: "02",
    name: "ፖሊሲ፡ ምርምርን ምድላውን",
    description: "ምርምርን ተግባራዊ ምምዕባል ፖሊሲን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "03",
    name: "ሚድያን ርክብን",
    description: "ህዝባዊ ሓበሬታ፡ ሚድያን ርክብን።",
    leader: "Futsum Kidane",
    position: "ሓላፊ ሚድያን ርክብን",
    image: "/images/head-of-media-and-communication.png",
  },
  {
    number: "04",
    name: "ወጻኢ ጉዳያትን ዲፕሎማሲን",
    description: "ዓለምለኻዊ ርክባትን ወጻኢ ምትእስሳራትን።",
    leader: "Asmerom Asmelash",
    position: "ሓላፊ ወጻኢ ጉዳያት",
    image: "/images/head-of-external-relations.png",
  },
  {
    number: "05",
    name: "ውደባን ኣባልነትን",
    description: "ኣባልነት፡ ውሽጣዊ ውደባን ምምዕባልን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "06",
    name: "ፋይናንስን ምምሕዳርን",
    description: "ምሕደራ ገንዘብን ምምሕዳራዊ ስራሕን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "07",
    name: "ሕጋዊ ጉዳያትን ምምዕባል ቅዋምን",
    description: "ሕጋዊ ምርምር፡ መሰላትን ምምዕባል ቅዋምን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "08",
    name: "ባህላዊ ጉዳያትን ትምህርትን",
    description: "ባህላዊ ውርሻ፡ ቋንቋን ትምህርትን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "09",
    name: "ቁጠባዊ ልምዓት",
    description: "ቁጠባዊ ፖሊሲ፡ ወፍሪን ልምዓትን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "10",
    name: "ሰብኣዊን ማሕበራዊን ጉዳያት",
    description: "ሰብኣዊ ጉዳያትን ማሕበራዊ ልምዓትን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "11",
    name: "ጉዳያት መንእሰያትን ደቂ ኣንስትዮን",
    description: "ተሳትፎን ምምዕባል መሪሕነትን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
  {
    number: "12",
    name: "ዲጂታላዊ ቴክኖሎጂን ስርዓታት ሓበሬታን",
    description: "ዲጂታላዊ መሰረተ-ልምዓትን ስርዓታት ሓበሬታን።",
    leader: "",
    position: "ሓላፊ ዲፓርትመንት",
    image: "",
  },
];

const committees = [
  "ኮሚቴ ሕገ-መንግስታዊ ጉዳያት",
  "ኮሚቴ ስነ-ምግባርን ተሓታትነትን",
  "ኮሚቴ ፋይናንስን ኦዲትን",
  "ኮሚቴ ኣባልነትን ምርጫታትን",
  "ኮሚቴ ግምገማ ፖሊሲ",
  "ኮሚቴ ዲሲፕሊንን ሽምግልናን",
  "ኮሚቴ ጉባኤን ዋዕላን",
];

const regionalChapters = [
  "ኤርትራ",
  "ኢትዮጵያ",
  "እስራኤል",
  "ኤውሮጳ",
  "ሰሜን ኣመሪካ",
  "ካልኦት ዓለምለኻዊ ቦታታት",
];

function PersonCard({
  name,
  position,
  image,
  vacant = false,
}: {
  name: string;
  position: string;
  image?: string;
  vacant?: boolean;
}) {
  const category = position.includes("ዞባዊ")
    ? "ሓላፊ ዞባዊ ጨንፈር"
    : position.includes("ኮሚቴ")
      ? "ሓላፊ ኮሚቴ"
      : "ሓላፊ ዲፓርትመንት";

  return (
    <div className="mx-auto w-full max-w-[250px] text-center">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#173653]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 250px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/45">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c9a45c]/50">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-10 w-10"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider">
              {vacant ? "ሹመት ይጽበ ኣሎ" : "መሪሕነት"}
            </span>
          </div>
        )}
      </div>

      <div className="px-2 pt-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c9a45c]">
          {category}
        </p>

        <h4 className="text-base font-extrabold leading-snug text-white">
          {name || "ገና ይምደብ"}
        </h4>

        <p className="mt-2 text-sm leading-6 text-white/65">
          {position}
        </p>
      </div>
    </div>
  );
}

/* Full-width white heading band */
function SectionHeading({
  eyebrow,
  title,
  description,
  count,
}: {
  eyebrow: string;
  title: string;
  description: string;
  count?: string;
}) {
  return (
    <div className="relative left-1/2 mb-10 w-screen -translate-x-1/2 bg-white px-5 py-10 text-[#142b45] sm:px-8 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#a77d32]">
          {eyebrow}
        </p>

        <h3 className="text-2xl font-extrabold sm:text-3xl">
          {title}
        </h3>

        <div className="my-4 h-1 w-14 rounded-full bg-[#c9a45c]" />

        <p className="max-w-3xl text-sm leading-7 text-[#526174] sm:text-base">
          {description}
        </p>

        {count && (
          <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#a77d32]">
            {count}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AboutPageTi() {
  return (
    <main
      className="min-h-screen overflow-hidden bg-[#142b45] text-white"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#142b45] text-white">
        <div className="relative min-h-[500px] w-full sm:min-h-[600px] lg:min-h-[700px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/images/anm-activities-poster.jpg"
          >
            <source src="/videos/anm-activities.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#142b45]/65 via-[#142b45]/30 to-[#142b45]/75" />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 pb-16 text-center">
            <div className="max-w-5xl">
              <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                ኣጋኣዝያዊ ሃገራዊ ምንቅስቓስ
              </h1>
              <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#c9a45c]" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        id="who-we-are"
        className="bg-[#142b45] px-5 py-16 text-white sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              መን ኢና
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-base font-semibold leading-8 text-white/85 sm:text-lg">
              ኣጋኣዝያዊ ሃገራዊ ምንቅስቓስ (ANM)፡ ናይ ትግርኛ ህዝቢ
              ሃገራዊ ፖለቲካዊ ምንቅስቓስ ኮይኑ፡ ንቀጥታዊ ደሞክራሲ፡
              ሃገራዊ ርእሰ-ውሳነን ብልጽግና ዘለዎ መጻኢን ዝተወፈየ እዩ።
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "ባህላዊ ምሕዳስ",
                description:
                  "ታሪኽና፡ ቋንቋ ግእዝ፡ ባህልናን ባህላዊ ውርሻ ኦሪትናን ምዕቃብ።",
              },
              {
                title: "ቀጥታዊ ደሞክራሲ",
                description:
                  "ተሓታቲ መሪሕነት፡ ቅዋማዊ ምሕደራን ልዕልና ሕግን።",
              },
              {
                title: "ቁጠባዊ ብልጽግና",
                description:
                  "ናጻ ትካላዊ ቁጠባ፡ ኢንዱስትሪያዊ ምዕባለ፡ ምህዞን ሃገራዊ ልምዓትን።",
              },
              {
                title: "ሃገራዊ ልዑላውነት",
                description:
                  "ናይ ትግርኛ ህዝቢ ርእሰ-ውሳነ፡ ናጽነትን ናይ ገዛእ ርእሱ ፖለቲካዊ መጻኢ ንምውሳንን ዘለዎ መሰል ምእማን።",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/15 bg-[#173653] p-6 transition duration-300 hover:border-[#c9a45c]/70"
              >
                <h3 className="mb-3 text-lg font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-white/65 sm:text-base">
            ANM ታሪኻዊ ውርሻ ሃገራዊ ባህላዊ መንነትን ርእሰ-ውሳነን
            ኣብ ምቕጻል፡ ብደሞክራስያዊ ትካላት፡ ቁጠባዊ ልምዓት፡
            ዘመናዊነትን ባህላዊ ምሕዳስን ኣቢሉ የማዕብሎ።
          </p>
        </div>
      </section>

      {/* LEADERSHIP AND ORGANIZATION */}
      <section
        id="leadership-structure"
        className="bg-[#102944] px-5 py-16 text-white sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              02 — ውደባና
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              መሪሕነትን ውደባን
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-sm leading-7 text-white/75 sm:text-base">
              ነቲ ምንቅስቓስ ንምምራሕ ሓላፍነት ዝተዋህቦም ሰባትን፡
              ANM ሓላፍነታቱ ዝፍጽመሎም ትካላዊ መዋቕራትን ርኣዩ።
            </p>
          </div>

          {/* CHAIRPERSON */}
          <div className="mx-auto max-w-sm">
            <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.22em] text-[#c9a45c]">
              ሃገራዊ መሪሕነት
            </p>

            <div className="overflow-hidden border border-[#c9a45c]/60 bg-[#173653]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={chairperson.image!}
                  alt={chairperson.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 85vw, 380px"
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                  ኣቦ መንበር
                </p>
                <h3 className="text-xl font-extrabold text-white">
                  {chairperson.name}
                </h3>
                <p className="mt-2 text-sm text-white/65">
                  {chairperson.position}
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto my-10 h-12 w-px bg-[#c9a45c]" />

          {/* NATIONAL EXECUTIVE COUNCIL */}
          <div className="mb-20">
            <div className="mb-9 text-center">
              <h3 className="text-2xl font-extrabold sm:text-3xl">
                ሃገራዊ ፈጻሚ ባይቶ ANM
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
                ሃገራዊ ኣንፈት ናይቲ ምንቅስቓስን ቀንዲ ዓውድታት
                ሓላፍነትን ንምውህሃድ ሓላፍነት ዝወስድ ፈጻሚ መሪሕነት።
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {nationalLeadership.map((leader) => (
                <div
                  key={leader.name}
                  className="overflow-hidden border border-white/15 bg-[#173653] transition duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70"
                >
                  <div className="relative aspect-[4/5]">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#173653] text-white/45">
                        ስእሊ ኣይተረኽበን
                      </div>
                    )}
                  </div>

                  <div className="min-h-[130px] p-5 text-center">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c9a45c]">
                      ኣባል ፈጻሚ ባይቶ
                    </p>
                    <h4 className="font-extrabold text-white">
                      {leader.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {leader.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ORGANIZATIONAL STRUCTURE INTRODUCTION */}
        <SectionHeading
          eyebrow="ከመይ ኢና ተወዲብና"
          title="ትካላዊ መዋቕር"
          description="ነቲ ስራሕን ውደባን ANM ዝድግፉ ዲፓርትመንታት፡ ኮሚቴታትን ዞባዊ ጨናፍርን።"
        />

        {/* DEPARTMENTS */}
        <section id="departments" className="scroll-mt-24 pb-16">
          <SectionHeading
            eyebrow="01 — ትካላዊ ኣሃዱታት"
            title="ዲፓርትመንታት"
            description="ንቀንዲ ዓውድታት ስራሕ ናይቲ ምንቅስቓስ ሓላፍነት ዝወስዱ ፍሉያት ዲፓርትመንታት።"
            count="12 ዲፓርትመንታት"
          />

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-7 gap-y-14 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
            {departments.map((department) => (
              <article key={department.number} className="min-w-0">
                <div className="mb-5">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#c9a45c]">
                    {department.number}
                  </span>
                  <h4 className="mt-2 min-h-[52px] text-lg font-extrabold leading-snug text-white">
                    {department.name}
                  </h4>
                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/65">
                    {department.description}
                  </p>
                </div>

                <PersonCard
                  name={department.leader}
                  position={department.position}
                  image={department.image}
                  vacant={!department.leader}
                />
              </article>
            ))}
          </div>
        </section>

        {/* COMMITTEES */}
        <section id="committees" className="scroll-mt-24 pb-16">
          <SectionHeading
            eyebrow="02 — ክትትልን ምውህሃድን"
            title="ኮሚቴታት"
            description="ተሓታትነት፡ ግምገማ ፖሊሲ፡ ቅዋማዊ ጉዳያትን ትካላዊ መስርሓትን ዝድግፉ ኮሚቴታት።"
            count={`${committees.length} ኮሚቴታት`}
          />

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-7 gap-y-14 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
            {committees.map((committee, index) => (
              <article key={committee}>
                <div className="mb-5">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#c9a45c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 min-h-[52px] text-lg font-extrabold leading-snug text-white">
                    {committee}
                  </h4>
                </div>

                <PersonCard
                  name=""
                  position="ሓላፊ ኮሚቴ"
                  vacant
                />
              </article>
            ))}
          </div>
        </section>

        {/* REGIONAL CHAPTERS */}
        <section id="regional-chapters" className="scroll-mt-24 pb-16">
          <SectionHeading
            eyebrow="03 — ዞባዊ ውደባ"
            title="ዞባዊ ጨናፍር"
            description="ኣባላት ዘራኽቡን ኣብ ዝተፈላለዩ ቦታታት ንጥፈታት ናይቲ ምንቅስቓስ ዘወሃህዱን ዞባዊ ጨናፍር።"
            count={`${regionalChapters.length} ዞባዊ ጨናፍር`}
          />

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-7 gap-y-14 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
            {regionalChapters.map((region, index) => (
              <article key={region}>
                <div className="mb-5">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#c9a45c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 min-h-[52px] text-lg font-extrabold leading-snug text-white">
                    {region}
                  </h4>
                </div>

                <PersonCard
                  name=""
                  position="ሓላፊ ዞባዊ ጨንፈር"
                  vacant
                />
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* WHAT WE DO */}
      <section
        id="what-we-do"
        className="bg-[#142b45] pb-16 text-white sm:pb-20"
      >
        {/* WHITE HEADING BAND */}
        <div className="w-full bg-white px-5 py-12 text-center text-[#142b45] sm:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              03 — ንጥፈታትና
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              እንታይ ንገብር
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="mx-auto max-w-3xl text-sm leading-7 text-[#526174] sm:text-base">
              ANM ንደሞክራስያዊ መጻኢ ዘድልዩ ሓሳባት፡ ፖሊሲታትን
              ትካላዊ መሰረታትን ንምድላው፡ ንምውዳብ፡ ንምጥባቕን
              ንምምዕባልን ይሰርሕ።
            </p>
          </div>
        </div>

        {/* ACTIVITY CARDS */}
        <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.number}
                className="border border-white/15 bg-[#173653] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70 sm:p-8"
              >
                <span className="text-3xl font-extrabold text-[#c9a45c]">
                  {activity.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold text-white">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE SEPARATION BEFORE FOOTER */}
      <div className="h-10 w-full bg-white" />
    </main>
  );
}