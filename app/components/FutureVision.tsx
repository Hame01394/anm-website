
"use client";

import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

type FutureTopic = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  slogan: string;
  videoUrl: string;
  vimeoId?: string;
  poster: string;
  subtitleUrl: string;
};

type VisionTarget = {
  value: string;
  label: string;
  detail: string;
  color: string;
};

const futureTopics: FutureTopic[] = [
  {
    id: "industrialization",
    number: "01",
    title: "Industrialization",
    category: "INDUSTRY & PRODUCTION",
    description:
      "Explore the potential for productive industries, manufacturing, processing facilities and industrial zones. Investment, skilled workers, reliable infrastructure, energy and effective institutions can all contribute to sustainable industrial development.",
    slogan: "Productive Industries. Skilled Workers. Economic Prosperity.",
    videoUrl: "",
    vimeoId: "1245390741",
    poster: "/images/industrialization-2.jpg",
    subtitleUrl: "",
  },
  {
    id: "modern-cities",
    number: "02",
    title: "Modern Cities & Towns",
    category: "URBAN DEVELOPMENT",
    description:
      "Imagine modern urban development built around improved housing, welcoming public spaces, reliable transport, essential utilities and effective municipal services. Well-planned cities and towns can improve quality of life and support economic activity.",
    slogan: "Homes for All. Smart Cities. Vibrant Communities.",
    videoUrl: "",
    vimeoId: "1249669813",
    poster: "/images/urbunization-1.jpg",
    subtitleUrl: "",
  },
  {
    id: "ports-airports",
    number: "03",
    title: "Ports & Airports",
    category: "CONNECTIVITY & TRADE",
    description:
      "Explore the strategic and economic potential of ports, airports, logistics infrastructure and international connectivity. Modern transport links can help connect communities, facilitate trade and create opportunities for investment.",
    slogan: "Connecting Eritrea. Expanding Trade. Opening Opportunities.",
    videoUrl: "",
    vimeoId: "1249669813",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
  },
  {
    id: "agriculture",
    number: "04",
    title: "Agriculture",
    category: "FOOD & RURAL DEVELOPMENT",
    description:
      "Consider opportunities in modern agricultural production, irrigation, food processing, agricultural technology and rural development. Investment in skills, infrastructure and productive farming can strengthen food security and livelihoods.",
    slogan: "Productive Farms. Food Security. Prosperous Communities.",
    videoUrl: "",
    vimeoId: "1249786858",
    poster: "/images/agriculture-1.jpg",
    subtitleUrl: "",
  },
  {
    id: "digital-transformation",
    number: "05",
    title: "Digital Transformation",
    category: "TECHNOLOGY & INNOVATION",
    description:
      "Explore digital infrastructure, technology-based services, innovation and digital government. Better connectivity and access to technology can expand opportunities for young people, businesses and public institutions.",
    slogan: "Digital Access. Innovation. A Connected Nation.",
    videoUrl: "",
    vimeoId: "1249992509",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
  },
  {
    id: "education",
    number: "06",
    title: "Education",
    category: "KNOWLEDGE & SKILLS",
    description:
      "Envision modern universities, technical education, vocational training, research institutions and improved educational opportunities. Education and lifelong learning can help develop the knowledge and skills needed for national progress.",
    slogan: "Knowledge for All. Skills for Life. Opportunity for Every Generation.",
    videoUrl: "",
    vimeoId: "1249669813",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
  },
  {
    id: "healthcare",
    number: "07",
    title: "Healthcare",
    category: "HEALTH & WELLBEING",
    description:
      "Explore the development of modern hospitals, healthcare infrastructure, medical education, public health programmes and access to essential services. A stronger health system can protect lives and support healthier communities.",
    slogan: "Quality Healthcare. Healthier Lives. Stronger Communities.",
    videoUrl: "",
    vimeoId: "1249928327",
    poster: "/images/healthcare.jpg",
    subtitleUrl: "",
  },
  {
    id: "cultural-renaissance",
    number: "08",
    title: "Cultural Renaissance",
    category: "CULTURE & HERITAGE",
    description:
      "Imagine renewed cultural life through heritage preservation, artistic development, education and the celebration of national traditions. Cultural expression can connect generations and contribute to a confident, creative society.",
    slogan: "Preserve Our Heritage. Revive Our Civilization. Restore Our National Dignity.",
    videoUrl: "",
    vimeoId: "1249820569",
    poster: "/images/cultural-reniansanse-1.jpg",
    subtitleUrl: "",
  },
  {
    id: "institutional-modernization",
    number: "09",
    title: "Institutional Modernization",
    category: "GOVERNANCE & PUBLIC SERVICE",
    description:
      "Explore professional public administration, independent institutions, modern public services and accountable governance. Effective institutions operating under constitutional law can provide continuity, protect rights and serve the public.",
    slogan: "Strong Institutions. Equal Justice. Accountable Government.",
    videoUrl: "",
    vimeoId: "1249669813",
    poster: "/images/Technology-Innovation.png",
    subtitleUrl: "",
  },

    {
    id: "tourism",
    number: "10",
    title: "Tourism",
    category: "TOURISM",
    description:
      "Explore Eritrea's tourism potential through its Red Sea coastline, historic sites, cultural heritage, highland landscapes and unique natural attractions. Investment in hotels, transport, visitor services and heritage preservation can create employment, support local businesses and expand the national economy.",
    slogan: "Discover Eritrea. Preserve Our Heritage. Welcome the World.",
    videoUrl: "",
    poster: "/images/tourism-eritrea.jpg",
    subtitleUrl: "",
  },

];

const visionTargets: Record<string, VisionTarget[]> = {
  industrialization: [
    {
      value: "30%",
      label: "Manufacturing GDP",
      detail: "Share of national economy",
      color: "#c9a45c",
    },
    {
      value: "500K",
      label: "Industrial jobs",
      detail: "New skilled employment",
      color: "#65a9d5",
    },
    {
      value: "10",
      label: "Industrial zones",
      detail: "Across strategic regions",
      color: "#70b99a",
    },
    {
      value: "$10B",
      label: "Industrial exports",
      detail: "Annual export ambition",
      color: "#ad91d8",
    },
    {
      value: "80%",
      label: "Local processing",
      detail: "Domestic value addition",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Reliable industrial power",
      detail: "Electricity access for industry",
      color: "#dfaa64",
    },
    {
      value: "50K",
      label: "Industrial enterprises",
      detail: "Businesses and producers",
      color: "#8bb5d9",
    },
    {
      value: "5",
      label: "Major industrial corridors",
      detail: "Integrated production networks",
      color: "#c9a45c",
    },
  ],

  "modern-cities": [
    {
      value: "1M",
      label: "New homes",
      detail: "Modern and affordable housing",
      color: "#c9a45c",
    },
    {
      value: "100%",
      label: "Clean water access",
      detail: "Reliable urban water supply",
      color: "#65a9d5",
    },
    {
      value: "100%",
      label: "Sanitation coverage",
      detail: "Modern sanitation services",
      color: "#70b99a",
    },
    {
      value: "90%",
      label: "Public transport access",
      detail: "Connected urban communities",
      color: "#ad91d8",
    },
    {
      value: "14",
      label: "Modern urban centres",
      detail: "Planned metropolitan cities",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Reliable electricity",
      detail: "Universal urban access",
      color: "#dfaa64",
    },
    {
      value: "1,000",
      label: "Public green spaces",
      detail: "Parks and community spaces",
      color: "#8bb5d9",
    },
    {
      value: "100%",
      label: "Digital urban services",
      detail: "Smart municipal infrastructure",
      color: "#c9a45c",
    },
  ],

  "ports-airports": [
    {
      value: "50M",
      label: "Port cargo capacity",
      detail: "Annual tonnes of cargo",
      color: "#c9a45c",
    },
    {
      value: "20M",
      label: "Air passengers",
      detail: "Annual passenger capacity",
      color: "#65a9d5",
    },
    {
      value: "5",
      label: "Modern port terminals",
      detail: "Strategic maritime facilities",
      color: "#70b99a",
    },
    {
      value: "10",
      label: "International air routes",
      detail: "Global connectivity hubs",
      color: "#ad91d8",
    },
    {
      value: "100%",
      label: "Modern port systems",
      detail: "Digital logistics operations",
      color: "#df7770",
    },
    {
      value: "24/7",
      label: "Port operations",
      detail: "Continuous cargo services",
      color: "#dfaa64",
    },
    {
      value: "5",
      label: "Regional logistics hubs",
      detail: "Integrated transport networks",
      color: "#8bb5d9",
    },
    {
      value: "$20B",
      label: "Trade ambition",
      detail: "Annual trade value",
      color: "#c9a45c",
    },
  ],

  agriculture: [
    {
      value: "100%",
      label: "Food security",
      detail: "National food requirements met",
      color: "#c9a45c",
    },
    {
      value: "500K",
      label: "Hectares irrigated",
      detail: "Expanded irrigated agriculture",
      color: "#65a9d5",
    },
    {
      value: "5M",
      label: "Tonnes of food",
      detail: "Annual agricultural production",
      color: "#70b99a",
    },
    {
      value: "80%",
      label: "Agricultural productivity",
      detail: "Modern farming adoption",
      color: "#ad91d8",
    },
    {
      value: "100",
      label: "Agro-processing centres",
      detail: "Across agricultural regions",
      color: "#df7770",
    },
    {
      value: "1M",
      label: "Rural livelihoods",
      detail: "Supported farming households",
      color: "#dfaa64",
    },
    {
      value: "$5B",
      label: "Agricultural exports",
      detail: "Annual export ambition",
      color: "#8bb5d9",
    },
    {
      value: "100%",
      label: "Modern farm access",
      detail: "Technology and extension services",
      color: "#c9a45c",
    },
  ],

  "digital-transformation": [
    {
      value: "100%",
      label: "Internet access",
      detail: "Universal national coverage",
      color: "#c9a45c",
    },
    {
      value: "1 Gbps",
      label: "Broadband connectivity",
      detail: "High-speed connectivity target",
      color: "#65a9d5",
    },
    {
      value: "100%",
      label: "Digital literacy",
      detail: "Digitally capable population",
      color: "#70b99a",
    },
    {
      value: "100%",
      label: "Digital government",
      detail: "Public services online",
      color: "#ad91d8",
    },
    {
      value: "50",
      label: "Innovation hubs",
      detail: "Across the country",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Digital businesses",
      detail: "Digital adoption target",
      color: "#dfaa64",
    },
    {
      value: "500K",
      label: "Technology jobs",
      detail: "Direct and indirect jobs",
      color: "#8bb5d9",
    },
    {
      value: "No. 1",
      label: "Africa's leading digital economy",
      detail: "Our national ambition",
      color: "#c9a45c",
    },
  ],

  education: [
    {
      value: "100%",
      label: "School enrolment",
      detail: "Universal access to education",
      color: "#c9a45c",
    },
    {
      value: "100%",
      label: "Adult literacy",
      detail: "A fully literate population",
      color: "#65a9d5",
    },
    {
      value: "20",
      label: "Modern universities",
      detail: "Higher education institutions",
      color: "#70b99a",
    },
    {
      value: "500K",
      label: "University graduates",
      detail: "Highly skilled graduates",
      color: "#ad91d8",
    },
    {
      value: "1,000",
      label: "Technical colleges",
      detail: "Vocational training centres",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Digital classrooms",
      detail: "Technology-enabled education",
      color: "#dfaa64",
    },
    {
      value: "50",
      label: "Research institutions",
      detail: "Science and innovation centres",
      color: "#8bb5d9",
    },
    {
      value: "1M",
      label: "Technical specialists",
      detail: "National skilled workforce",
      color: "#c9a45c",
    },
  ],

  healthcare: [
    {
      value: "80+",
      label: "Life expectancy",
      detail: "Years of healthy life",
      color: "#c9a45c",
    },
    {
      value: "100%",
      label: "Healthcare access",
      detail: "Universal essential healthcare",
      color: "#65a9d5",
    },
    {
      value: "20",
      label: "Modern hospitals",
      detail: "Advanced regional hospitals",
      color: "#70b99a",
    },
    {
      value: "100%",
      label: "Maternal care access",
      detail: "Safe pregnancy and childbirth",
      color: "#ad91d8",
    },
    {
      value: "100%",
      label: "Child immunization",
      detail: "Universal vaccination coverage",
      color: "#df7770",
    },
    {
      value: "50K",
      label: "Medical professionals",
      detail: "Expanded health workforce",
      color: "#dfaa64",
    },
    {
      value: "100%",
      label: "Digital health records",
      detail: "Connected national health system",
      color: "#8bb5d9",
    },
    {
      value: "14",
      label: "Specialist medical centres",
      detail: "Advanced regional treatment",
      color: "#c9a45c",
    },
  ],

  "cultural-renaissance": [
    {
      value: "100%",
      label: "Heritage protection",
      detail: "National heritage inventory",
      color: "#c9a45c",
    },
    {
      value: "9",
      label: "Cultural institutions",
      detail: "National museums and centres",
      color: "#65a9d5",
    },
    {
      value: "100%",
      label: "Language preservation",
      detail: "Protection of national languages",
      color: "#70b99a",
    },
    {
      value: "50",
      label: "Cultural festivals",
      detail: "Annual national and regional events",
      color: "#ad91d8",
    },
    {
      value: "100",
      label: "Heritage sites documented",
      detail: "Digitally preserved national sites",
      color: "#df7770",
    },
    {
      value: "100K",
      label: "Creative industry jobs",
      detail: "Arts, media and cultural work",
      color: "#dfaa64",
    },
    {
      value: "20",
      label: "International cultural centres",
      detail: "Global cultural representation",
      color: "#8bb5d9",
    },
    {
      value: "1M",
      label: "Annual cultural visitors",
      detail: "Heritage and cultural tourism",
      color: "#c9a45c",
    },
  ],

  "institutional-modernization": [
    {
      value: "100%",
      label: "Constitutional governance",
      detail: "Government under constitutional law",
      color: "#c9a45c",
    },
    {
      value: "3",
      label: "Independent branches",
      detail: "Executive, legislative and judiciary",
      color: "#65a9d5",
    },
    {
      value: "100%",
      label: "Judicial independence",
      detail: "Independent courts and justice",
      color: "#70b99a",
    },
    {
      value: "100%",
      label: "Public accountability",
      detail: "Transparent public administration",
      color: "#ad91d8",
    },
    {
      value: "100%",
      label: "Universal civil registration",
      detail: "Accessible national records",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Digital public services",
      detail: "Accessible government services",
      color: "#dfaa64",
    },
    {
      value: "14",
      label: "Regional administrations",
      detail: "Effective local governance",
      color: "#8bb5d9",
    },
    {
      value: "100%",
      label: "Independent auditing",
      detail: "Public financial oversight",
      color: "#c9a45c",
    },
  ],

    tourism: [
    {
      value: "2M",
      label: "Annual visitors",
      detail: "Long-term national ambition",
      color: "#c9a45c",
    },
    {
      value: "$2B",
      label: "Tourism revenue",
      detail: "Annual economic ambition",
      color: "#65a9d5",
    },
    {
      value: "100K",
      label: "Tourism jobs",
      detail: "Direct and indirect employment",
      color: "#70b99a",
    },
    {
      value: "50",
      label: "Heritage sites",
      detail: "Protected and developed destinations",
      color: "#ad91d8",
    },
    {
      value: "20",
      label: "Coastal destinations",
      detail: "Red Sea tourism development",
      color: "#df7770",
    },
    {
      value: "100%",
      label: "Heritage protection",
      detail: "Preservation of national heritage",
      color: "#dfaa64",
    },
    {
      value: "14",
      label: "Tourism regions",
      detail: "Regional tourism development",
      color: "#8bb5d9",
    },
    {
      value: "1",
      label: "Global destination",
      detail: "Eritrea promoted internationally",
      color: "#c9a45c",
    },
  ],
};

export default function FutureVision() {
  const [selectedId, setSelectedId] = useState("industrialization");
  const [showEndMessage, setShowEndMessage] = useState(false);

  const videoFrameRef = useRef<HTMLIFrameElement>(null);
  const thumbnailRow = useRef<HTMLDivElement>(null);

  const activeTopic =
    futureTopics.find((topic) => topic.id === selectedId) ??
    futureTopics[0];

  const activeTargets = visionTargets[activeTopic.id] ?? [];

  const scrollThumbnails = (direction: "left" | "right") => {
    thumbnailRow.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  
useEffect(() => {
  setShowEndMessage(false);

  const iframe = videoFrameRef.current;
  if (!iframe || !activeTopic.vimeoId) return;

  const player = new Player(iframe);
  let isActive = true;

  const handleTimeUpdate = (data: {
    seconds: number;
    duration: number;
  }) => {
    if (!isActive || !data.duration) return;

    const remaining = data.duration - data.seconds;

    setShowEndMessage(remaining <= 12 && remaining > 0);
  };

  const handlePlay = () => {
    if (isActive) setShowEndMessage(false);
  };

  player.on("timeupdate", handleTimeUpdate);
  player.on("play", handlePlay);

  return () => {
    isActive = false;
    player.off("timeupdate", handleTimeUpdate);
    player.off("play", handlePlay);
  };
}, [activeTopic.id, activeTopic.vimeoId]);


  return (
    <section
      id="the-future"
      className="w-full bg-[#142b45] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* SECTION INTRODUCTION */}

        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              The Future
            </p>

            <h2 className="w-full text-center text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              <span className="block">
                Strong Institutions · Prosperity
              </span>

              <span className="block">
                Cultural Renaissance
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
              Ending dictatorship is only the beginning. The task is to build
              strong institutions, create lasting prosperity, and revive the
              nation's cultural heritage.
            </p>
          </div>
        </div>

        {/* FEATURED VIDEO AND INFORMATION */}

<div className="overflow-hidden rounded-xl border border-white/20 bg-white shadow-xl">
  {/* VIDEO DISPLAY */}

  <div className="relative aspect-video w-full overflow-hidden bg-[#142b45]">
    {activeTopic.vimeoId ? (
      <>
        <iframe
          key={activeTopic.id}
          ref={videoFrameRef}
          src={`https://player.vimeo.com/video/${activeTopic.vimeoId}?autoplay=0&muted=0&loop=1&controls=1&title=0&byline=0&portrait=0&playsinline=1&dnt=1`}
          title={`${activeTopic.title} — ANM Future Development`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />

        {showEndMessage && (
          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center bg-gradient-to-t from-[#142b45]/95 to-transparent px-4 pb-8 pt-16 text-center">
            <p className="mb-3 max-w-4xl text-sm font-semibold leading-relaxed tracking-wide text-white sm:text-base lg:text-lg">
  {activeTopic.slogan}
</p>

            <a
              href="/take-action"
              className="inline-flex items-center gap-2 border border-[#c9a45c] bg-[#142b45]/80 px-5 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-[#c9a45c] hover:text-[#142b45]"
            >
              JOIN ANM <span className="text-[#c9a45c]">|</span> TAKE ACTION
              <span className="text-[#c9a45c]">→</span>
            </a>
          </div>
        )}
      </>
    ) : activeTopic.videoUrl ? (
      <video
        key={activeTopic.id}
        className="h-full w-full object-contain"
        controls
        playsInline
        preload="metadata"
        poster={activeTopic.poster || undefined}
      >
        <source
          src={activeTopic.videoUrl}
          type="video/mp4"
        />

        {activeTopic.subtitleUrl && (
          <track
            kind="subtitles"
            src={activeTopic.subtitleUrl}
            srcLang="en"
            label="English"
            default
          />
        )}

        Your browser does not support HTML video.
      </video>
    ) : (
      <div
        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#e9dfc9] via-[#d7c69f] to-[#a9b9b5] px-6 text-center"
        style={
          activeTopic.poster
            ? {
                backgroundImage: `linear-gradient(rgba(20,43,69,.35), rgba(20,43,69,.65)), url(${activeTopic.poster})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : undefined
        }
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#142b45] text-[#142b45]">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.5v13l10-6.5z" />
          </svg>
        </div>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#142b45]">
          Future Development
        </p>

        <h3 className="max-w-2xl text-2xl font-extrabold text-[#142b45] sm:text-3xl">
          {activeTopic.title}
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-6 text-[#263d55]">
          Illustrative video presentation will appear here when
          footage is added to this topic.
        </p>
      </div>
    )}
  </div>

          {/* TOPIC HEADING AND NATIONAL VISION LABEL */}

          <div className="flex flex-col gap-3 border-b border-[#142b45]/15 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <h3 className="text-center text-base font-extrabold uppercase tracking-wide text-[#142b45] sm:text-left sm:text-lg lg:text-xl">
              <span className="text-[#a77d32]">
                {activeTopic.category}
              </span>

              <span className="mx-2 text-[#142b45]/40">–</span>

              <span>{activeTopic.title}</span>
            </h3>

            <div className="shrink-0 text-center sm:text-right">
              <p className="text-xs font-bold text-[#a77d32]">
                Our National Vision
              </p>

              <p className="text-xs font-semibold text-[#64748b]">
                Eritrea 2040
              </p>
            </div>
          </div>

          {/* NATIONAL VISION TARGETS FOR ALL SECTIONS */}

          <div className="p-5 sm:p-8">
            <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-4">
              {activeTargets.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "min-w-0 px-3 text-center sm:px-5",
                    index % 2 !== 0
                      ? "border-l border-[#142b45]/15"
                      : "",
                    index >= 2
                      ? "border-t border-[#142b45]/15 pt-3 sm:border-t-0 sm:pt-0"
                      : "",
                    index >= 4
                      ? "sm:border-t sm:border-[#142b45]/15 sm:pt-3"
                      : "",
                    index % 4 !== 0
                      ? "sm:border-l sm:border-[#142b45]/15"
                      : "",
                  ].join(" ")}
                >
                  <div
                    className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>

                  <h4 className="mt-1 text-sm font-bold leading-5 text-[#142b45] sm:text-base">
                    {item.label}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-[#64748b]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DEVELOPMENT TOPICS */}

        <div className="mt-5">
          {/* TOPIC HEADING AND NAVIGATION */}

          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                Building Tomorrow
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Explore Future Development
              </h3>
            </div>

            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollThumbnails("left")}
                aria-label="Scroll topics left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:border-[#c9a45c] hover:bg-white hover:text-[#142b45]"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => scrollThumbnails("right")}
                aria-label="Scroll topics right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-xl text-white transition hover:border-[#c9a45c] hover:bg-white hover:text-[#142b45]"
              >
                →
              </button>
            </div>
          </div>

          {/* DEVELOPMENT TOPIC THUMBNAILS */}

          <div
            ref={thumbnailRow}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5"
            style={{ scrollbarWidth: "thin" }}
          >
            {futureTopics.map((topic) => {
              const isSelected = selectedId === topic.id;

              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => {
  setSelectedId(topic.id);
  setShowEndMessage(false);
}}
                  aria-pressed={isSelected}
                  className={`group w-[230px] shrink-0 snap-start overflow-hidden rounded-lg border-2 text-left transition duration-200 sm:w-[260px] ${
                    isSelected
                      ? "border-[#c9a45c] bg-[#eee6d5] shadow-md"
                      : "border-white/20 bg-white hover:border-[#a77d32]"
                  }`}
                >
                  {/* TOPIC THUMBNAIL */}

                  <div
                    className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#d8c9a8] to-[#8fa7a4]"
                    style={
                      topic.poster
                        ? {
                            backgroundImage: `linear-gradient(rgba(20,43,69,.25), rgba(20,43,69,.55)), url(${topic.poster})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }
                        : undefined
                    }
                  >
                    <span className="absolute left-3 top-3 text-xs font-bold tracking-widest text-[#142b45]">
                      {topic.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#142b45]/70 bg-white/30 text-xl text-[#142b45] transition group-hover:border-[#c9a45c] group-hover:bg-[#c9a45c]">
                      ▶
                    </span>

                    {isSelected && (
                      <span className="absolute bottom-2 right-2 rounded bg-[#c9a45c] px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-[#142b45]">
                        Selected
                      </span>
                    )}
                  </div>

                  {/* TOPIC INFORMATION */}

                  <div className="p-4">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-[#a77d32]">
                      {topic.category}
                    </p>

                    <h4 className="min-h-[48px] text-sm font-bold leading-6 text-[#142b45]">
                      {topic.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-1 text-xs text-white/70">
            Select a development topic to feature it above. Swipe
            horizontally on mobile to explore.
          </p>
        </div>
      </div>

      {/* WHITE SEPARATION ABOVE FOOTER */}

      <div className="relative left-1/2 mt-20 h-16 w-screen -translate-x-1/2 bg-white" />
    </section>
  );
}
