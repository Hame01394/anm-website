
"use client";

import { useState } from "react";

const pillars = [
  {
    id: "nation",
    title: "The Nation",
    lines: ["The", "Nation"],
    color: "#ffffff",
    description:
      "National renewal begins with a clear understanding of who we are as a people. Our identity is rooted in our languages, cultural heritage, shared history, traditions and collective memory. Respecting our diversity while strengthening our common belonging is essential to building a confident, united nation.",
  },
  {
    id: "economy",
    title: "The Economy",
    lines: ["The", "Economy"],
    color: "#ffffff",
    description:
      "A prosperous nation needs an economy in which people are free to create, invest, compete and contribute. We envision competitive markets, private enterprise, entrepreneurship, innovation, industrialisation and genuine economic opportunity.",
  },
  {
    id: "democracy",
    title: "Direct Democracy",
    lines: ["Direct", "Democracy"],
    color: "#ffffff",
    description:
      "Citizens must have meaningful opportunities to shape public decisions, influence national priorities and hold those in power accountable. Political freedom, citizen participation, public oversight and constitutional protections are essential.",
  },
  {
    id: "institutions",
    title: "Institution Building",
    lines: ["Institution", "Building"],
    color: "#ffffff",
    description:
      "National renewal requires durable, professional institutions that serve the public under constitutional law. Independent courts, transparent administration, accountability and the rule of law protect individual rights and ensure responsible government.",
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

export default function VisionPillars() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const activeId = hovered ?? selected;

  return (
    <section
      id="our-vision"
      className="w-full overflow-visible bg-[#142b45] px-5 py-20 text-white sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRODUCTION - WHITE BAND */}
        <div className="relative left-1/2 mb-8 w-screen -translate-x-1/2 bg-white px-5 py-6 text-center sm:px-8 lg:py-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#a77d32]">
              Our Movement
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-[#142b45] sm:text-4xl lg:text-5xl">
              The Foundations of the Aga'azian National Movement
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#526174] sm:text-lg">
              Four pillars express our principles, guide our mission, and shape our vision for Eritrea's democratic future.
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
              aria-label="Four pillars of national renewal"
            >
              <defs>
                <filter
                  id="pillar-shadow"
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
                          padding: "9px",
                          color: "#ffffff",
                          fontFamily: "Arial, sans-serif",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 800,
                            color: "#e6c987",
                            marginBottom: "6px",
                            lineHeight: 1.2,
                          }}
                        >
                          {pillar.title}
                        </div>

                        <div
                          style={{
                            fontSize: "9px",
                            lineHeight: 1.4,
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
                          ? "url(#pillar-shadow)"
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
                        fontSize="27"
                        fontWeight="800"
                        pointerEvents="none"
                      >
                        <tspan x={segment.x} dy="0">
                          {pillar.lines[0]}
                        </tspan>
                        <tspan x={segment.x} dy="32">
                          {pillar.lines[1]}
                        </tspan>
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
                    aria-label={`Explore ${pillar.title}`}
                    aria-pressed={selected === segment.id}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHovered(segment.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(segment.id)}
                    onBlur={() => setHovered(null)}
                    onClick={() =>
                      setSelected(
                        selected === segment.id
                          ? null
                          : segment.id
                      )
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        setSelected(
                          selected === segment.id
                            ? null
                            : segment.id
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

          <h3 className="text-xl font-extrabold tracking-wide text-white sm:text-2xl lg:text-3xl">
            Identity
            <span className="mx-2 text-[#e6c987]">·</span>
            Liberty
            <span className="mx-2 text-[#e6c987]">·</span>
            Prosperity
            <span className="mx-2 text-[#e6c987]">·</span>
            Continuity
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-white/80 sm:text-lg">
            Rooted in heritage. Governed by freedom. Driven by opportunity.
            Secured by enduring institutions.
          </p>
        </div>

      </div>
    </section>
  );
}
