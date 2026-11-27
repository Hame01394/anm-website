
"use client";

import { useRef, useState } from "react";

type Documentary = {
  id: string;
  number: string;
  title: string;
  category: string;
  videoUrl: string;
  vimeoId?: string;
  poster: string;
  subtitleUrl: string;
  sourceUrl: string;
};

type ResearchSource = {
  label: string;
  year: string;
  url: string;
};

type Metric = {
  value: string;
  label: string;
  detail: string;
  color: string;
  source?: ResearchSource;
  status: "documented" | "historical" | "illustrative";
};

// ============================================================
// FONT SETTINGS
// Adjust these classes to experiment with typography.
// These settings apply consistently to all nine topics.
// ============================================================

const FONT_STYLES = {
  sectionEyebrow: "font-sans text-sm font-bold tracking-[0.25em]",
  sectionTitle: "font-sans text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl",
  sectionDescription: "font-sans text-base leading-7 sm:text-lg",

  documentaryTitle: "font-sans text-base font-extrabold uppercase tracking-wide sm:text-lg lg:text-xl",

  legacyLabel: "font-sans text-xs font-bold uppercase tracking-[0.18em]",
  legacyDate: "font-sans text-xs font-medium tracking-wide",
  legacyTitle: "font-sans text-lg font-bold",

  metricsEyebrow: "font-sans text-xs font-bold uppercase tracking-[0.2em]",
  metricsTitle: "font-sans text-lg font-bold sm:text-xl",

  metricValue: "font-sans break-words text-2xl font-extrabold tracking-tight sm:text-3xl",
metricLabel: "font-sans mt-1 text-sm font-bold leading-5",
metricDetail: "font-sans mt-1 text-xs leading-5",
metricSource: "font-sans mt-1 inline-block text-[10px] font-semibold uppercase tracking-wide",

  libraryEyebrow: "font-sans text-xs font-bold uppercase tracking-[0.2em]",
  libraryTitle: "font-sans mt-2 text-xl font-bold sm:text-2xl",
  thumbnailTitle: "font-sans min-h-[48px] text-sm font-bold leading-6",
};

// Font family examples:
// font-sans
// font-serif
// font-mono
//
// Example:
// metricValue: "font-serif break-words text-2xl font-bold sm:text-3xl",

// ============================================================
// DOCUMENTARY TOPICS
// ============================================================

const documentaries: Documentary[] = [
  {
    id: "governance",
    number: "01",
    title: "Authoritarian Governance",
    category: "POLITICAL SYSTEM",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "repression",
    number: "02",
    title: "Political Repression",
    category: "CIVIL LIBERTIES",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "human-rights",
    number: "03",
    title: "Human Rights & Political Prisoners",
    category: "HUMAN RIGHTS",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "economy",
    number: "04",
    title: "Economic Hardship",
    category: "ECONOMIC CONDITIONS",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "migration",
    number: "05",
    title: "Demographic Decline & Migration",
    category: "POPULATION & MIGRATION",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "national-service",
    number: "06",
    title: "National Service & Military Institutions",
    category: "NATIONAL SERVICE",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "regional-security",
    number: "07",
    title: "Regional Security & Foreign Relations",
    category: "REGIONAL AFFAIRS",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "accountability",
    number: "08",
    title: "Corruption & Institutional Accountability",
    category: "PUBLIC ACCOUNTABILITY",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
  {
    id: "martyrs-veterans",
    number: "09",
    title: "Martyrs & Veterans",
    category: "HISTORY & LEGACY",
    videoUrl: "",
    vimeoId: "1245387887",
    poster: "/images/authoritarian-governance-1.jpg",
    subtitleUrl: "",
    sourceUrl: "",
  },
];

// ============================================================
// RESEARCH SOURCES
// ============================================================

const SOURCES = {
  freedomHouse: {
    label: "Freedom House – Freedom in the World",
    year: "2026",
    url: "https://freedomhouse.org/country/eritrea/freedom-world/2026",
  },

  worldBank: {
    label: "World Bank – Eritrea Country Data",
    year: "Latest available data",
    url: "https://data.worldbank.org/country/eritrea",
  },

  doingBusiness: {
    label: "World Bank – Doing Business 2020",
    year: "2020",
    url: "https://documents1.worldbank.org/curated/en/806711574857166244/pdf/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Eritrea.pdf",
  },

  unCommission: {
    label: "UN Commission of Inquiry on Eritrea",
    year: "2016",
    url: "https://www.ohchr.org/Documents/HRBodies/HRCouncil/CoIEritrea/A_HRC_29_CRP-1_Chapter_III.pdf",
  },

  humanRightsWatch: {
    label: "Human Rights Watch – Eritrea",
    year: "2026",
    url: "https://www.hrw.org/world-report/2026/country-chapters/eritrea",
  },

  nationalService: {
    label: "UK Government – National Service in Eritrea",
    year: "2025",
    url: "https://www.gov.uk/government/publications/eritrea-country-policy-and-information-notes/country-policy-and-information-note-national-service-and-illegal-exit-eritrea-december-2025-accessible",
  },

  transparency: {
    label: "Transparency International – Eritrea",
    year: "CPI 2024",
    url: "https://www.transparency.org/en/countries/eritrea",
  },

  unPeace: {
    label: "United Nations – Algiers Peace Agreement",
    year: "2000",
    url: "https://unmee.unmissions.org/en/algiers-peace-agreement",
  },

  unSanctions: {
    label: "United Nations Security Council – Resolution 2444",
    year: "2018",
    url: "https://main.un.org/securitycouncil/en/content/sres24442018",
  },

  unReferendum: {
    label: "United Nations – Eritrean Referendum",
    year: "1993",
    url: "https://unpos.unmissions.org/en/united-nations-observer-mission-to-verify-the-referendum-in-eritrea-unover-1992-1993",
  },

  unHumanRights: {
    label: "United Nations – Human Rights Documentation",
    year: "2016",
    url: "https://www.ohchr.org/en/countries/eritrea",
  },
};

// ============================================================
// METRIC HELPER
// ============================================================

const metric = (
  value: string,
  label: string,
  detail: string,
  color: string,
  source?: ResearchSource,
  status: Metric["status"] = "documented"
): Metric => ({
  value,
  label,
  detail,
  color,
  source,
  status,
});

// ============================================================
// SIX INDICATORS FOR EACH OF THE NINE DOCUMENTARY TOPICS
// ============================================================

const sectionData: Record<string, Metric[]> = {

  // ----------------------------------------------------------
  // 01. POLITICAL SYSTEM
  // ----------------------------------------------------------

  governance: [
    metric(
      "3/100",
      "Freedom score",
      "Freedom House 2026 – classified as Not Free.",
      "#df7770",
      SOURCES.freedomHouse
    ),
    metric(
      "1/40",
      "Political rights",
      "Freedom House assessment of political rights.",
      "#c9a45c",
      SOURCES.freedomHouse
    ),
    metric(
      "2/60",
      "Civil liberties",
      "Freedom House assessment of civil liberties.",
      "#65a9d5",
      SOURCES.freedomHouse
    ),
    metric(
      "0",
      "National elections",
      "No national elections since independence in 1993.",
      "#ad91d8",
      SOURCES.freedomHouse
    ),
    metric(
      "1",
      "Legal political party",
      "The People's Front for Democracy and Justice (PFDJ).",
      "#70b99a",
      SOURCES.freedomHouse
    ),
    metric(
      "1997",
      "National Constitution",
      "Ratified but never implemented.",
      "#dfaa64",
      SOURCES.humanRightsWatch,
      
    ),
  ],

  // ----------------------------------------------------------
  // 02. CIVIL LIBERTIES
  // ----------------------------------------------------------

  repression: [
    metric(
      "2001",
      "Independent press shutdown",
      "Private independent newspapers were closed.",
      "#df7770",
      SOURCES.freedomHouse,
      
    ),
    metric(
      "3/100",
      "Overall freedom score",
      "Freedom House 2026 country assessment.",
      "#c9a45c",
      SOURCES.freedomHouse
    ),
    metric(
      "NO",
      "Independent domestic press",
      "Freedom House reports that independent media were shut down.",
      "#65a9d5",
      SOURCES.freedomHouse
    ),
    metric(
      "0",
      "National elections",
      "No national elections since 1993.",
      "#ad91d8",
      SOURCES.freedomHouse
    ),
    metric(
      "RESTRICTED",
      "Freedom of assembly",
      "Independent public organizing faces severe restrictions.",
      "#70b99a",
      SOURCES.freedomHouse
    ),
    metric(
      "RESTRICTED",
      "Freedom of expression",
      "Public criticism of the government is severely restricted.",
      "#dfaa64",
      SOURCES.humanRightsWatch
    ),
  ],

  // ----------------------------------------------------------
  // 03. HUMAN RIGHTS
  // ----------------------------------------------------------

  "human-rights": [
    metric(
      "2016",
      "UN Commission of Inquiry",
      "Published a major investigation into human rights violations.",
      "#df7770",
      SOURCES.unCommission,
      
    ),
    metric(
      "CRIMES AGAINST HUMANITY",
      "UN Commission findings",
      "The Commission found reasonable grounds to believe crimes against humanity had been committed.",
      "#c9a45c",
      SOURCES.unCommission
    ),
    metric(
      "INDEFINITE",
      "Arbitrary detention",
      "Reports document prolonged detention without charge or trial.",
      "#65a9d5",
      SOURCES.unHumanRights
    ),
    metric(
      "UNRESOLVED",
      "Enforced disappearances",
      "Families continue to seek information about missing relatives.",
      "#ad91d8",
      SOURCES.unCommission
    ),
    metric(
      "DOCUMENTED",
      "Forced labour concerns",
      "UN investigations documented forced-labour concerns in national service.",
      "#70b99a",
      SOURCES.unCommission
    ),
    metric(
      "LIMITED",
      "Judicial protection",
      "Serious concerns about due process and judicial independence.",
      "#dfaa64",
      SOURCES.freedomHouse
    ),
  ],

  // ----------------------------------------------------------
  // 04. ECONOMIC CONDITIONS
  // ----------------------------------------------------------

  economy: [
    metric(
      "189/190",
      "Ease of Doing Business",
      "World Bank's final Doing Business 2020 ranking.",
      "#df7770",
      SOURCES.doingBusiness,
      
    ),
    metric(
      "21.6/100",
      "Business environment score",
      "World Bank Doing Business 2020.",
      "#c9a45c",
      SOURCES.doingBusiness,
      
    ),
    metric(
      "84 DAYS",
      "Time to start a business",
      "World Bank 2020 estimate for starting a business in Asmara.",
      "#65a9d5",
      SOURCES.doingBusiness,
      
    ),
    metric(
      "13",
      "Registration procedures",
      "Procedures reported by Doing Business 2020.",
      "#ad91d8",
      SOURCES.doingBusiness,
      
    ),
    metric(
      "55.3%",
      "Access to electricity",
      "Share of the population – World Bank 2024.",
      "#70b99a",
      SOURCES.worldBank
    ),
    metric(
      "6.0%",
      "Unemployment estimate",
      "Modeled ILO estimate – World Bank 2025.",
      "#dfaa64",
      SOURCES.worldBank
    ),
  ],

  // ----------------------------------------------------------
  // 05. POPULATION & MIGRATION
  // ----------------------------------------------------------

  migration: [
    metric(
      "3.68 MILLION",
      "Estimated population",
      "Freedom House country profile population figure.",
      "#df7770",
      SOURCES.freedomHouse
    ),
    metric(
      "YOUTH",
      "Disproportionate impact",
      "Young people are particularly affected by prolonged national service.",
      "#c9a45c",
      SOURCES.nationalService
    ),
    metric(
      "REFUGEES",
      "Forced displacement",
      "Eritreans continue to seek international protection.",
      "#65a9d5",
      SOURCES.humanRightsWatch
    ),
    metric(
      "BRAIN DRAIN",
      "Loss of skilled people",
      "Emigration affects the country's human and professional capital.",
      "#ad91d8",
      SOURCES.humanRightsWatch
    ),
    metric(
      "FAMILY SEPARATION",
      "Social consequences",
      "Migration and displacement affect family and community life.",
      "#70b99a",
      SOURCES.humanRightsWatch
    ),
    metric(
      "DATA GAP",
      "Migration statistics",
      "A current, comprehensive and independently verifiable migration series is needed.",
      "#dfaa64",
      undefined,
      "illustrative"
    ),
  ],

  // ----------------------------------------------------------
  // 06. NATIONAL SERVICE
  // ----------------------------------------------------------

  "national-service": [
    metric(
      "1995",
      "National Service Proclamation",
      "Proclamation No. 82/1995 established national service.",
      "#df7770",
      SOURCES.nationalService,
      
    ),
    metric(
      "18 MONTHS",
      "Legal service duration",
      "Six months of military training and twelve months of service.",
      "#c9a45c",
      SOURCES.nationalService
    ),
    metric(
      "2002",
      "Indefinite extension",
      "The government extended national service indefinitely.",
      "#65a9d5",
      SOURCES.nationalService,
      "historical"
    ),
    metric(
      "18–40",
      "Compulsory service age",
      "Statutory age range for active national service.",
      "#ad91d8",
      SOURCES.nationalService
    ),
    metric(
      "UP TO 50",
      "National reserve obligation",
      "The law provides for reserve obligations up to age 50.",
      "#70b99a",
      SOURCES.nationalService
    ),
    metric(
      "INDEFINITE",
      "Actual service experience",
      "Many citizens have reportedly served beyond the statutory period.",
      "#dfaa64",
      SOURCES.humanRightsWatch
    ),
  ],

  // ----------------------------------------------------------
  // 07. REGIONAL SECURITY
  // ----------------------------------------------------------

  "regional-security": [
    metric(
      "1998–2000",
      "Eritrea–Ethiopia war",
      "A devastating interstate conflict.",
      "#df7770",
      SOURCES.unPeace,
      
    ),
    metric(
      "18 JUNE 2000",
      "Cessation of hostilities",
      "Agreement signed by Eritrea and Ethiopia in Algiers.",
      "#c9a45c",
      SOURCES.unPeace,
     
    ),
    metric(
      "2000",
      "Algiers Peace Agreement",
      "Agreement established the framework for ending the war.",
      "#65a9d5",
      SOURCES.unPeace,
      
    ),
    metric(
      "2009",
      "UN sanctions imposed",
      "Security Council Resolution 1907.",
      "#ad91d8",
      SOURCES.unSanctions,
      
    ),
    metric(
      "2018",
      "UN sanctions lifted",
      "Security Council Resolution 2444.",
      "#70b99a",
      SOURCES.unSanctions,
      
    ),
    metric(
      "2020–2022",
      "Tigray conflict",
      "Eritrean forces were involved in the conflict in Ethiopia.",
      "#dfaa64",
      SOURCES.humanRightsWatch,
      
    ),
  ],

  // ----------------------------------------------------------
  // 08. PUBLIC ACCOUNTABILITY
  // ----------------------------------------------------------

  accountability: [
    metric(
      "13/100",
      "Corruption Perceptions Index",
      "Transparency International CPI 2024.",
      "#df7770",
      SOURCES.transparency,
      
    ),
    metric(
      "177/182",
      "CPI country ranking",
      "Transparency International CPI 2024.",
      "#c9a45c",
      SOURCES.transparency,
    
    ),
    metric(
      "1997",
      "Constitution",
      "Ratified but never implemented.",
      "#65a9d5",
      SOURCES.humanRightsWatch,
      
    ),
    metric(
      "0",
      "National elections",
      "No national elections since independence.",
      "#ad91d8",
      SOURCES.freedomHouse
    ),
    metric(
      "NO",
      "Independent judiciary",
      "Freedom House reports no independent judicial system.",
      "#70b99a",
      SOURCES.freedomHouse
    ),
    metric(
      "2001",
      "G-15 political arrests",
      "Senior government and party officials were detained.",
      "#dfaa64",
      SOURCES.humanRightsWatch,
     
    ),
  ],

  // ----------------------------------------------------------
  // 09. HISTORY & LEGACY
  // ----------------------------------------------------------

  "martyrs-veterans": [
    metric(
      "30 YEARS",
      "Liberation struggle",
      "The independence war culminated in 1991.",
      "#df7770",
      SOURCES.unReferendum,
      
    ),
    metric(
      "1991",
      "End of the liberation war",
      "Eritrean forces entered Asmara.",
      "#c9a45c",
      SOURCES.unReferendum,
      
    ),
    metric(
      "99.8%",
      "Referendum vote",
      "UN-observed referendum: voters chose independence in April 1993.",
      "#65a9d5",
      SOURCES.unReferendum,
      
    ),
    metric(
      "24 MAY 1993",
      "Formal independence",
      "Eritrea became an independent state.",
      "#ad91d8",
      SOURCES.unReferendum,
      
    ),
    metric(
      "1997",
      "Constitution ratified",
      "The constitution was ratified but never implemented.",
      "#70b99a",
      SOURCES.humanRightsWatch,
      
    ),
    metric(
      "35 YEARS",
      "Since liberation",
      "1991–2026: a generation since the end of the liberation war.",
      "#dfaa64",
      SOURCES.unReferendum,
     
    ),
  ],
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function NationalStruggle() {
  const [selectedId, setSelectedId] = useState("governance");

  const thumbnailRow = useRef<HTMLDivElement>(null);

  const activeDocumentary =
    documentaries.find((item) => item.id === selectedId) ??
    documentaries[0];

  const activeMetrics = sectionData[activeDocumentary.id] ?? [];

  const scrollThumbnails = (direction: "left" | "right") => {
    thumbnailRow.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="national-struggle"
      className="w-full bg-[#142b45] px-5 pt-20 pb-0 text-white sm:px-8 lg:pt-28 lg:pb-0"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION */}

<div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-12 text-center sm:px-8 sm:py-14 lg:py-16">
  <div className="mx-auto max-w-4xl text-center">

    <p className={`mb-3 text-[#a77d32] ${FONT_STYLES.sectionEyebrow}`}>
      Eritrea Under Dictatorship
    </p>

    <h2 className={`text-[#142b45] ${FONT_STYLES.sectionTitle}`}>
      The Challenges We Must Confront
    </h2>

    <p className={`mx-auto mt-4 max-w-2xl text-[#526174] ${FONT_STYLES.sectionDescription}`}>
      Severe social, economic, demographic, environmental and human
      rights crises.
    </p>

  </div>
</div>

        {/* FEATURED DOCUMENTARY */}

        <div className="overflow-hidden rounded-xl border border-[#142b45]/15 bg-[#172b42] shadow-2xl">

          {/* VIDEO DISPLAY */}

          <div className="relative aspect-video w-full overflow-hidden bg-black">

            {activeDocumentary.vimeoId ? (
              <iframe
  key={activeDocumentary.vimeoId}
  src={`https://player.vimeo.com/video/${activeDocumentary.vimeoId}?autoplay=0&muted=0&loop=1&controls=1&title=0&byline=0&portrait=0&playsinline=1`}
  title={`ANM Documentary — ${activeDocumentary.title}`}
  className="absolute inset-0 h-full w-full"
  allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
  allowFullScreen
/>
            ) : activeDocumentary.videoUrl ? (
              <video
                key={activeDocumentary.id}
                className="h-full w-full object-contain"
                controls
                playsInline
                preload="metadata"
                poster={activeDocumentary.poster || undefined}
              >
                <source
                  src={activeDocumentary.videoUrl}
                  type="video/mp4"
                />

                {activeDocumentary.subtitleUrl && (
                  <track
                    kind="subtitles"
                    src={activeDocumentary.subtitleUrl}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}

                Your browser does not support HTML video.
              </video>
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#203b58] via-[#142b45] to-[#091522] px-6 text-center"
                style={
                  activeDocumentary.poster
                    ? {
                        backgroundImage: `linear-gradient(rgba(10,25,42,.65), rgba(10,25,42,.85)), url(${activeDocumentary.poster})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }
                    : undefined
                }
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a45c] text-[#c9a45c]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5.5v13l10-6.5z" />
                  </svg>
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
                  Featured Documentary
                </p>

                <h3 className="max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
                  {activeDocumentary.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-300">
                  Documentary footage will appear here when a video is
                  added to this topic.
                </p>

              </div>
            )}

          </div>

          {/* DOCUMENTARY HEADING AND LEGACY */}

<div className="flex flex-col gap-4 border-b border-[#142b45]/15 bg-white px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            {/* LEFT */}

            <h3 className={`text-center text-[#142b45] sm:text-left ${FONT_STYLES.documentaryTitle}`}>
  <span className="text-[#a77d32]">
    {activeDocumentary.category}
  </span>

  <span className="mx-2 text-[#142b45]/40">–</span>

  <span>{activeDocumentary.title}</span>
</h3>

            {/* RIGHT */}

            <div className="shrink-0 text-center sm:text-right">

  <div className="flex flex-wrap items-center justify-center gap-x-3 sm:justify-end">

    <span className={`text-[#a77d32] ${FONT_STYLES.legacyLabel}`}>
      The Dictator's Legacy
    </span>

    <span className={`text-[#526174] ${FONT_STYLES.legacyDate}`}>
      Eritrea 1991–2026
    </span>

  </div>

  <h3 className={`mt-1 text-[#142b45] ${FONT_STYLES.legacyTitle}`}>
    35 Years of Destruction
  </h3>

</div>

          </div>

          {/* TOPIC-SPECIFIC INDICATORS */}

          <div className="bg-white px-5 py-5 sm:px-8 sm:py-6">

            
            {/* SIX-CARD GRID */}

            <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">

              {activeMetrics.map((item, index) => (

                <div
                  key={`${activeDocumentary.id}-${item.label}`}
                  className={`min-w-0 px-3 text-center sm:px-4 ${
                    index % 3 !== 0
                      ? "sm:border-l sm:border-[#142b45]/15"
                      : ""
                  } ${
                    index % 2 !== 0
                      ? "border-l border-[#142b45]/15 sm:border-l"
                      : ""
                  } ${
                    index >= 3
  ? "border-t 6 pt-3 sm:border-t-0 sm:pt-0"
  : ""
                  } lg:border-l lg:border-[#142b45]/15 lg:pt-0 ${
                    index === 0 || index === 3
                      ? "lg:border-l-0"
                      : ""
                  }`}
                >

                  {/* VALUE */}

                  <div
                    className={FONT_STYLES.metricValue}
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>

                  {/* LABEL */}

                  <h5 className={`text-[#142b45] ${FONT_STYLES.metricLabel}`}>
  {item.label}
</h5>

                  {/* DESCRIPTION */}

                  <p className={`text-[#526174] ${FONT_STYLES.metricDetail}`}>
  {item.detail}
</p>

                  {/* STATUS */}

                  <div className="mt-1">

                    {item.status === "historical" && (
  <span className="inline-block border border-white/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70">
    Historical
  </span>
)}

                    {item.status === "illustrative" && (
                      <span className="inline-block border border-white/20 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-400">
                        Research gap
                      </span>
                    )}

                  </div>

                  {/* SOURCE */}

                  {item.source ? (
                    <a
                      href={item.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.source.label}
                      className={`text-[#c9a45c] transition hover:text-white ${FONT_STYLES.metricSource}`}
                    >
                      Source · {item.source.year} ↗
                    </a>
                  ) : (
  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
    Further research required
  </p>
)}

                </div>

              ))}

            </div>

            {/* RESEARCH NOTE */}

            
          </div>

          {/* OPTIONAL SUPPORTING SOURCE */}

          {activeDocumentary.sourceUrl && (
            <div className="px-6 pb-6 text-center">
              <a
                href={activeDocumentary.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[#c9a45c] px-5 py-3 text-sm font-semibold text-[#e4c47e] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
              >
                Supporting source ↗
              </a>
            </div>
          )}

        </div>

        {/* DOCUMENTARY LIBRARY */}

        <div className="mt-5">

          {/* LIBRARY HEADING */}

          <div className="mb-5 flex items-center justify-between gap-4">

            <div>

              <p className={`text-[#a77d32] ${FONT_STYLES.libraryEyebrow}`}>
                Explore the Library
              </p>

              <h3 className={`text-white ${FONT_STYLES.libraryTitle}`}>
  Documentary Topics
</h3>

            </div>

            {/* THUMBNAIL NAVIGATION */}

            <div className="hidden gap-2 sm:flex">

              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="Scroll documentaries left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="Scroll documentaries right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#142b45]/30 text-xl text-[#142b45] transition hover:border-[#a77d32] hover:text-[#a77d32]"
              >
                →
              </button>

            </div>

          </div>

          {/* DOCUMENTARY THUMBNAILS */}

          <div
            ref={thumbnailRow}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
            style={{ scrollbarWidth: "thin" }}
          >

            {documentaries.map((documentary) => {

              const isSelected = selectedId === documentary.id;

              return (

                <button
                  key={documentary.id}
                  type="button"
                  onClick={() => setSelectedId(documentary.id)}
                  aria-pressed={isSelected}
                  className={`group w-[230px] shrink-0 snap-start overflow-hidden rounded-lg border-2 text-left transition duration-200 sm:w-[260px] ${
  isSelected
    ? "border-[#c9a45c] bg-white"
    : "border-white/20 bg-white hover:border-[#c9a45c]"
}`}
                >

                  {/* THUMBNAIL IMAGE */}

                  <div
                    className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#34516d] to-[#0b1828]"
                    style={
                      documentary.poster
                        ? {
                            backgroundImage: `linear-gradient(rgba(10,25,42,.35), rgba(10,25,42,.65)), url(${documentary.poster})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >

                    <span className="absolute left-3 top-3 text-xs font-bold tracking-widest text-[#e6c987]">
                      {documentary.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/25 text-xl text-white transition group-hover:border-[#c9a45c] group-hover:text-[#e6c987]">
                      ▶
                    </span>

                    {isSelected && (
                      <span className="absolute bottom-2 right-2 rounded bg-[#c9a45c] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#142b45]">
                        Selected
                      </span>
                    )}

                  </div>

                  {/* THUMBNAIL INFORMATION */}

                  <div className="p-4">

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#a77d32]">
  {documentary.category}
</p>

                    <h4 className={`text-[#142b45] ${FONT_STYLES.thumbnailTitle}`}>
  {documentary.title}
</h4>

                    
                  </div>

                </button>

              );

            })}

          </div>

          <p className="mt-1 text-xs text-[#64748b]">
            Select a topic to feature it above. Swipe horizontally on mobile
            to explore the library.
          </p>

        </div>

      </div>
    </section>
  );
}
