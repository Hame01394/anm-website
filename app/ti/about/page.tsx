
import Image from "next/image";

const leaders = [
  {
    name: "ስም መራሒ",
    position: "መዓርግ / ሓላፍነት",
    image: "",
  },
  {
    name: "ስም መራሒ",
    position: "መዓርግ / ሓላፍነት",
    image: "",
  },
  {
    name: "ስም መራሒ",
    position: "መዓርግ / ሓላፍነት",
    image: "",
  },
  {
    name: "ስም መራሒ",
    position: "መዓርግ / ሓላፍነት",
    image: "",
  },
];

const activities = [
  {
    number: "01",
    title: "ኣብ ኤርትራ ንዝፍጠር ፖለቲካዊ ባዶነት ምድላው",
    description:
      "ንሓላፍነታዊ ዲሞክራስያዊ ስግግርን ዳግመ-ህንጸት ሃገራዊ ትካላትን ዘድሊ ትካላዊ፣ ምምሕዳራዊን ሰብኣዊን ዓቕሚ ምድላው።",
  },
  {
    number: "02",
    title: "ሚድያን ጎስጓስን",
    description:
      "መርገጺታት ANM ምሕባር፣ ንቕሓት ምዕባይ፣ ጌጋ ሓበሬታ ምእራምን ምስ ሃገራዊን ዓለምለኻዊን ተዋሳእቲ ርክብ ምግባርን።",
  },
  {
    number: "03",
    title: "ምዕባለ ፖሊሲ",
    description:
      "ንዲሞክራስያዊ ምምሕዳር፣ ቁጠባዊ ልምዓት፣ ትምህርቲ፣ ጥዕናን ሃገራዊ ዳግመ-ህንጸትን ዝምልከቱ ተግባራዊ ሓሳባት ፖሊሲ ምምዕባል።",
  },
  {
    number: "04",
    title: "ምርምርን ትንተናን",
    description:
      "ፖለቲካዊ፣ ቁጠባዊ፣ ማሕበራዊን ትካላዊን ብድሆታት ኤርትራ ምጽናዕ፣ ኣብ መርትዖ ዝተመርኮሰ ለበዋታት ምቕራብን።",
  },
  {
    number: "05",
    title: "ሃገራዊ ኣጀንዳ ምንጻር",
    description:
      "ፖለቲካዊ መርገጺታት፣ ሃገራዊ ቀዳምነታትን ራእይ መጻኢን ናይቲ ምንቅስቓስ ብንጹር ምግላጽ።",
  },
];

const visionPillars = [
  {
    number: "01",
    title: "ሃገራዊ ዕርሰ-ውሳነ",
    description:
      "ህዝቢ ትግርኛ ንፖለቲካዊ መጻኢኡ ናይ ምውሳንን ሃገራዊ ልዑላውነት ናይ ምጥቃምን መሰሉ ምኽባር።",
  },
  {
    number: "02",
    title: "ዲሞክራስያዊ ምምሕዳር",
    description:
      "ኣብ ቀጥታዊ ዲሞክራሲ፣ ፖለቲካዊ ናጽነት፣ ተሓታትነትን ልዕልና ሕግን ዝተመርኮሰ ሕገ-መንግስታዊ ስርዓት ምህናጽ።",
  },
  {
    number: "03",
    title: "ቁጠባዊ ብልጽግና",
    description:
      "ብናጻ ትካላዊ ንግዲ፣ ኢንዱስትርያዊ ምዕባለ፣ ሓድሽ ምህዞን ዘላቒ ልምዓትን ዕድላት ምፍጣር።",
  },
  {
    number: "04",
    title: "ባህላዊ ሕዳሰ",
    description:
      "ባህላዊ መንነትና፣ ታሪኽና፣ ቋንቋ ግእዝና፣ ልምድታትናን ቅርሲ ኦሪትናን ምዕቃብ።",
  },
];

const organizationalBranches = [
  {
    title: "ዲፓርትመንታት",
    description: "ፍሉይ ሓላፍነትን ምምሕዳርን ዝምልከቱ ክፍልታት።",
  },
  {
    title: "ኮሚቴታት",
    description: "ምውህሃድ፣ ቁጽጽርን ፍሉያት ናይ ስራሕ ጉጅለታትን።",
  },
  {
    title: "ዞባዊ ጨናፍር",
    description: "ዞባዊ ምውዳብን ምውህሃድን።",
  },
];

export default function AboutPageTi() {
  return (
    <main
      lang="ti"
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* =====================================================
          HERO — FULL-WIDTH VIDEO WITH TITLE OVERLAY
      ===================================================== */}
      <section className="relative w-full overflow-hidden bg-[#142b45] text-white">
        <div className="relative min-h-[500px] w-full sm:min-h-[600px] lg:min-h-[700px]">

          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/images/anm-activities-poster.jpg"
          >
            <source
              src="/videos/anm-activities.mp4"
              type="video/mp4"
            />
            እቲ ብራውዘርካ ቪድዮ ክርኢ ኣይክእልን እዩ።
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#142b45]/65 via-[#142b45]/30 to-[#142b45]/75" />

          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-5 pb-16 text-center">
            <div className="max-w-5xl">
              <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
                ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
              </h1>

              <div className="mx-auto my-6 h-1 w-20 rounded-full bg-[#c9a45c]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — WHO WE ARE
      ===================================================== */}
      <section
        id="who-we-are"
        className="bg-white px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              መን ኢና
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-base font-semibold leading-8 text-[#142b45] sm:text-lg">
              ምንቅስቓስ ሃገራዊ ኣጋኣዝያን (ANM) ናይ ህዝቢ ትግርኛ
              ሃገራዊ ፖለቲካዊ ምንቅስቓስ ኮይኑ፣ ንቀጥታዊ
              ዲሞክራሲ፣ ሃገራዊ ዕርሰ-ውሳነን ብልጽግና ዘለዎ
              መጻኢን ዝተወፈየ እዩ።
            </p>
          </div>

          {/* FOUR PRINCIPLES */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                ባህላዊ ሕዳሰ
              </h3>
              <p className="text-sm leading-7 text-[#526174]">
                ታሪኽና፣ ቋንቋ ግእዝና፣ ባህልናን ቅርሲ ኦሪትናን
                ምዕቃብ።
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                ቀጥታዊ ዲሞክራሲ
              </h3>
              <p className="text-sm leading-7 text-[#526174]">
                ተሓታቲ መሪሕነት፣ ሕገ-መንግስታዊ ምምሕዳርን
                ልዕልና ሕግን።
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                ቁጠባዊ ብልጽግና
              </h3>
              <p className="text-sm leading-7 text-[#526174]">
                ናጻ ትካላዊ ንግዲ፣ ኢንዱስትርያዊ ምዕባለ፣
                ሓድሽ ምህዞን ሃገራዊ ልምዓትን።
              </p>
            </div>

            <div className="rounded-xl border border-[#e5e1d8] bg-[#faf9f6] p-6">
              <h3 className="mb-3 text-lg font-extrabold">
                ሃገራዊ ልዑላውነት
              </h3>
              <p className="text-sm leading-7 text-[#526174]">
                ህዝቢ ትግርኛ ንዕርሰ-ውሳነ፣ ናጽነትን ፖለቲካዊ
                መጻኢኡ ንምውሳንን ዘለዎ መሰል ምኽባር።
              </p>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-[#526174] sm:text-base">
            ANM ንታሪኻዊ ባህላዊ መንነትን ሃገራዊ ዕርሰ-ውሳነን
            ብምቕጻል፣ ብዲሞክራስያዊ ትካላት፣ ቁጠባዊ ልምዓት፣
            ዘመናውነትን ባህላዊ ሕዳሰን ንቕድሚት ይስጉም።
          </p>

          {/* OUR VISION */}
          <div
            id="our-vision"
            className="mt-16 overflow-hidden rounded-2xl bg-[#142b45] p-7 text-white sm:p-10 lg:p-12"
          >
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
                ራእይና
              </p>

              <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                ልዑላዊት፣ ዲሞክራስያዊትን ብልጽግና ዝሰፈናን መጻኢ
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                ህዝቢ ትግርኛ ንዕርሰ-ውሳነን ልዑላውነትን ዘለዎ
                መሰል ዝጥቀመሉ፣ ብዲሞክራስያዊ ሕገ-መንግስታዊ
                ምምሕዳር ዝነብረሉ፣ ጽኑዓት ትካላት፣ ቁጠባዊ
                ብልጽግናን ዝተሓደሰ ባህላዊ መንነትን ዝሃንጸሉ
                መጻኢ ንሓስብ።
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {visionPillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-xl border border-white/15 bg-white/5 p-5"
                >
                  <span className="text-sm font-bold text-[#c9a45c]">
                    {pillar.number}
                  </span>

                  <h4 className="mt-2 text-lg font-bold">
                    {pillar.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — LEADERSHIP & STRUCTURE
      ===================================================== */}
      <section
        id="leadership-structure"
        className="bg-[#f1eee6] px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              02 — ምውዳብና
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              መሪሕነትን ኣወዳድባን
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-sm leading-7 text-[#526174] sm:text-base">
              ነቲ ምንቅስቓስ ኣብ ምምራሕ ሓላፍነት ዝተሰከሙ
              ሰባት ተላለዩ፣ ANM ሓላፍነታቱ ዝፍጽመሉ ትካላዊ
              ኣወዳድባ ድማ ተረድኡ።
            </p>
          </div>

          {/* LEADERSHIP PROFILES */}
          <div className="mb-16">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-2xl font-extrabold">
                መሪሕነትና
              </h3>

              <span className="text-xs font-semibold uppercase tracking-wider text-[#a77d32]">
                ጉጅለ መሪሕነት
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-[#e2ded5] bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative flex aspect-[4/5] items-center justify-center bg-[#e6e8e9]">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="text-center text-[#84909c]">
                        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                          <span className="text-3xl font-bold text-[#a77d32]">
                            ANM
                          </span>
                        </div>

                        <p className="text-xs font-medium">
                          ስእሊ መሪሕነት
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h4 className="font-extrabold">
                      {leader.name}
                    </h4>

                    <p className="mt-1 text-sm text-[#a77d32]">
                      {leader.position}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-[#526174]">
                      ወግዓዊ መግለጺን ታሪኽ ህይወትን ናይ መራሒ።
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-[#7a8490]">
              ስማት፣ ስእልታት፣ መዓርጋትን ታሪኽ ህይወትን
              መራሕቲ ብወግዓዊ ዝጸደቐ ሓበሬታ ክምልኡ እዮም።
            </p>
          </div>

          {/* ORGANIZATIONAL STRUCTURE */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
                ኣወዳድባና
              </p>

              <h3 className="text-2xl font-extrabold sm:text-3xl">
                ትካላዊ ኣወዳድባ
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526174]">
                መሪሕነት፣ ሓላፍነታት፣ ኮሚቴታትን ዞባዊ
                ተሳትፎን ንምውህሃድ ዝተዳለወ ትካላዊ መሓውር።
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="mx-auto max-w-sm rounded-xl bg-[#142b45] p-5 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c9a45c]">
                  ሃገራዊ ደረጃ
                </p>

                <h4 className="mt-1 text-lg font-extrabold">
                  ሃገራዊ መሪሕነት
                </h4>
              </div>

              <div className="mx-auto h-10 w-px bg-[#c9a45c]" />

              <div className="grid gap-4 sm:grid-cols-3">
                {organizationalBranches.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border-2 border-[#e5e1d8] p-5 text-center"
                  >
                    <h4 className="font-extrabold text-[#142b45]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-[#526174]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-auto h-10 w-px bg-[#c9a45c]" />

              <div className="mx-auto max-w-lg rounded-xl border-2 border-[#c9a45c] bg-[#faf9f6] p-5 text-center">
                <h4 className="font-extrabold">
                  ከባቢያዊ ጨናፍርን ኣባላትን
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#526174]">
                  ማሕበረሰባዊ ተሳትፎ፣ ከባቢያዊ ምትእስሳርን
                  ካብ ታሕቲ ዝጅምር ምውዳብን።
                </p>
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-[#7a8490]">
              እዚ ንኣብነት ዝቐረበ ትካላዊ መሓውር እዩ።
              እቲ ናይ መወዳእታ ሰኣሊ ብዝጸደቐ ኣወዳድባ
              ANM መሰረት ክዳሎ እዩ።
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — WHAT WE DO
      ===================================================== */}
      <section
        id="what-we-do"
        className="bg-[#142b45] px-5 py-16 text-white sm:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
              03 — ስራሕና
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              እንታይ ንገብር
            </h2>

            <div className="mx-auto my-5 h-1 w-14 rounded-full bg-[#c9a45c]" />

            <p className="text-sm leading-7 text-white/70 sm:text-base">
              ANM ንዲሞክራስያዊ መጻኢ ዘድልዩ ሓሳባት፣
              ፖሊሲታትን ትካላዊ መሰረታትን ንምድላው፣
              ንምውዳብን ንምምዕባልን ይሰርሕ።
            </p>
          </div>

          {/* FIVE AREAS OF WORK */}
          <div className="grid gap-5 md:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.number}
                className="group rounded-xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a45c]/70 hover:bg-white/10 sm:p-8"
              >
                <span className="text-3xl font-extrabold text-[#c9a45c]">
                  {activity.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold">
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
    </main>
  );
}
