
"use client";

import { useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Person = {
  name: string;
  description: string;
  image: string;
};

const groups: Record<GroupId, Person[]> = {
  dictator: [
    {
      name: "Isaias Afwerki",
      description:
        "The central figure exercising personal control over the state and its institutions.",
      image: "",
    },
    {
      name: "His Wife",
      description:
        "A member of the dictator's immediate family and inner circle.",
      image: "",
    },
    {
      name: "His Son",
      description: "A member of the dictator's immediate family.",
      image: "",
    },
  ],
  military: [
    {
      name: "Military Commander 1",
      description:
        "Senior military leadership within the ruling power structure.",
      image: "",
    },
    {
      name: "Military Commander 2",
      description:
        "Senior military leadership within the ruling power structure.",
      image: "",
    },
    {
      name: "Military Commander 3",
      description:
        "Senior military leadership within the ruling power structure.",
      image: "",
    },
  ],
  security: [
    {
      name: "Security Official 1",
      description:
        "A senior figure within the national security apparatus.",
      image: "",
    },
    {
      name: "Security Official 2",
      description:
        "A senior figure within the national security apparatus.",
      image: "",
    },
    {
      name: "Security Official 3",
      description:
        "A senior figure within the national security apparatus.",
      image: "",
    },
  ],
  loyalists: [
    {
      name: "Political Loyalist 1",
      description:
        "A political figure aligned with the ruling leadership.",
      image: "",
    },
    {
      name: "Political Loyalist 2",
      description:
        "A political figure aligned with the ruling leadership.",
      image: "",
    },
    {
      name: "Political Loyalist 3",
      description:
        "A political figure aligned with the ruling leadership.",
      image: "",
    },
  ],
};

const circleLabels: Record<GroupId, string> = {
  dictator: "The Dictator",
  military: "Military Commanders",
  security: "Security Apparatus",
  loyalists: "Political Loyalists",
};

function Portrait({
  person,
  featured = false,
}: {
  person: Person;
  featured?: boolean;
}) {
  return (
    <div className={`aop-person ${featured ? "aop-person-featured" : ""}`}>
      <div className="aop-photo">
        {person.image ? (
          <img src={person.image} alt={person.name} />
        ) : (
          <div className="aop-photo-placeholder" />
        )}
      </div>

      <h3>{person.name}</h3>
      <p>{person.description}</p>
    </div>
  );
}

function Circle({
  group,
  active,
  onActivate,
  onHover,
}: {
  group: GroupId;
  active: boolean;
  onActivate: () => void;
  onHover: (group: GroupId) => void;
}) {
  return (
    <button
      type="button"
      className={`aop-circle aop-${group} ${
        active ? "is-active" : ""
      }`}
      onMouseEnter={() => onHover(group)}
      onClick={onActivate}
      aria-pressed={active}
    >
      <span>{circleLabels[group]}</span>
    </button>
  );
}

export default function ArchitectureOfPower() {
  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);

  const activate = (group: GroupId) => {
    setActiveGroup((current) =>
      current === group ? null : group
    );
  };

  const handleMouseEnter = (group: GroupId) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveGroup(group);
    }
  };

  const handleMouseLeave = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveGroup(null);
    }
  };

  const isFocused = activeGroup !== null;

  return (
  <>
    {/* INTRODUCTION SECTION — WHITE BACKGROUND */}
    <header className="bg-white px-5 py-16 text-center md:px-10 md:py-20">
  <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
    Dictator Isaias Afwerki
  </p>

  <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-black md:text-5xl">
    One Man Rule
  </h2>

  <div className="mx-auto mt-7 h-[2px] w-24 bg-[#101f35]" />
</header>

    {/* EXISTING ARCHITECTURE OF POWER SECTION */}
    <section className="aop-section">
      <div className="aop-heading">
        <p>
          Explore the relationships between the central leadership
          and the institutions surrounding it.
        </p>
      </div>

      <div
        className={`aop-stage ${isFocused ? "has-focus" : ""} ${
          activeGroup ? `focus-${activeGroup}` : ""
        }`}
        onMouseLeave={handleMouseLeave}
      >
        {/* CONNECTOR LINES */}
        <svg
          className="aop-connectors"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="line line-military"
            d="M500 300 L150 105"
          />
          <path
            className="line line-security"
            d="M500 300 L850 105"
          />
          <path
            className="line line-loyalists"
            d="M500 300 L500 520"
          />
        </svg>

        {/* DICTATOR CIRCLE */}
        <div className="aop-node node-dictator">
          <Circle
            group="dictator"
            active={activeGroup === "dictator"}
            onActivate={() => activate("dictator")}
            onHover={handleMouseEnter}
          />
        </div>

        {/* MILITARY CIRCLE */}
        <div className="aop-node node-military">
          <Circle
            group="military"
            active={activeGroup === "military"}
            onActivate={() => activate("military")}
            onHover={handleMouseEnter}
          />
        </div>

        {/* SECURITY CIRCLE */}
        <div className="aop-node node-security">
          <Circle
            group="security"
            active={activeGroup === "security"}
            onActivate={() => activate("security")}
            onHover={handleMouseEnter}
          />
        </div>

        {/* POLITICAL LOYALISTS CIRCLE */}
        <div className="aop-node node-loyalists">
          <Circle
            group="loyalists"
            active={activeGroup === "loyalists"}
            onActivate={() => activate("loyalists")}
            onHover={handleMouseEnter}
          />
        </div>

        {/* DICTATOR: WIFE, DICTATOR, SON */}
        {activeGroup === "dictator" && (
          <div className="aop-portrait-layout dictator-layout">
            <Portrait person={groups.dictator[1]} />
            <Portrait person={groups.dictator[0]} featured />
            <Portrait person={groups.dictator[2]} />
          </div>
        )}

        {/* MILITARY COMMANDERS */}
        {activeGroup === "military" && (
          <div className="aop-portrait-layout group-layout military-layout">
            {groups.military.map((person) => (
              <Portrait key={person.name} person={person} />
            ))}
          </div>
        )}

        {/* SECURITY APPARATUS */}
        {activeGroup === "security" && (
          <div className="aop-portrait-layout group-layout security-layout">
            {groups.security.map((person) => (
              <Portrait key={person.name} person={person} />
            ))}
          </div>
        )}

        {/* POLITICAL LOYALISTS */}
        {activeGroup === "loyalists" && (
          <div className="aop-portrait-layout group-layout loyalists-layout">
            {groups.loyalists.map((person) => (
              <Portrait key={person.name} person={person} />
            ))}
          </div>
        )}
      </div>

      <div className="aop-instructions">
        {activeGroup
          ? "Select another circle or move the pointer away to return to the full structure."
          : "Hover over a circle, or tap it on a mobile device, to explore its members."}
      </div>

      <style jsx global>{`
        .aop-section {
          width: 100%;
          padding: 65px 24px 75px;
          background: #10263d;
          color: #ffffff;
          overflow: hidden;
        }

        .aop-heading {
          max-width: 850px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .aop-heading h2 {
          margin: 0 0 14px;
          color: #ffffff;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
        }

        .aop-heading p {
          margin: 0;
          color: #cbd5df;
          font-size: 16px;
          line-height: 1.7;
        }

        .aop-stage {
          position: relative;
          width: 100%;
          max-width: 1150px;
          min-height: 650px;
          margin: 0 auto;
          isolation: isolate;
        }

        /* CONNECTOR LINES */

        .aop-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: visible;
        }

        .aop-connectors .line {
          fill: none;
          stroke: #c6a45c;
          stroke-width: 2;
          opacity: 0.75;
          transition: opacity 0.45s ease, d 0.6s ease;
        }

        /* CIRCLE POSITIONS */

        .aop-node {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          transition:
            left 0.65s ease,
            top 0.65s ease,
            right 0.65s ease,
            bottom 0.65s ease,
            opacity 0.45s ease,
            transform 0.65s ease;
        }

        .node-dictator {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .node-military {
          left: 7%;
          top: 7%;
        }

        .node-security {
          right: 7%;
          top: 7%;
        }

        .node-loyalists {
          left: 50%;
          bottom: 3%;
          transform: translateX(-50%);
        }

        /* WHITE CIRCLES */

        .aop-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 145px;
          height: 145px;
          padding: 18px;
          border: 2px solid #c6a45c;
          border-radius: 50%;
          background: #ffffff;
          color: #10263d;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            color 0.35s ease,
            transform 0.45s ease,
            opacity 0.4s ease,
            box-shadow 0.35s ease;
        }

        .aop-circle span {
          max-width: 115px;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }

        .aop-circle:hover,
        .aop-circle.is-active {
          background: #ffffff;
          border-color: #e4c47c;
          color: #10263d;
          transform: scale(1.06);
          box-shadow: 0 0 0 8px rgba(198, 164, 92, 0.18);
        }

        /* PORTRAITS */

        .aop-portrait-layout {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: clamp(16px, 3vw, 45px);
          width: min(850px, 88%);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: aopAppear 0.55s ease both;
        }

        .aop-person {
          flex: 1 1 0;
          min-width: 0;
          max-width: 245px;
          text-align: center;
          color: #ffffff;
        }

        .aop-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border: 2px solid #c6a45c;
          border-radius: 5px;
          background: #1c3b55;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
        }

        .aop-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .aop-photo-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #24445e, #142b41);
        }

        .aop-person h3 {
          margin: 13px 0 7px;
          color: #e4c47c;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
        }

        .aop-person p {
          margin: 0 auto;
          max-width: 245px;
          color: #d2dbe3;
          font-size: 13px;
          line-height: 1.55;
        }

        .aop-person-featured {
          transform: translateY(-15px);
        }

        .aop-person-featured .aop-photo {
          border-width: 3px;
          border-color: #e4c47c;
        }

        /* DICTATOR HOVER: PRESERVE THE EXISTING PRESENTATION */

        .focus-dictator .node-dictator {
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, -50%) scale(0.7);
        }

        .focus-dictator .node-military {
          left: 2%;
          top: 3%;
          transform: scale(0.82);
        }

        .focus-dictator .node-security {
          right: 2%;
          top: 3%;
          transform: scale(0.82);
        }

        .focus-dictator .node-loyalists {
          bottom: 0;
          transform: translateX(-50%) scale(0.82);
        }

        /* OTHER VIEWS: DICTATOR ABOVE THE PORTRAITS */

        .focus-military .node-dictator,
        .focus-security .node-dictator,
        .focus-loyalists .node-dictator {
          left: 50%;
          top: 7%;
          transform: translate(-50%, 0) scale(0.88);
          z-index: 5;
          opacity: 1;
        }

        /* SELECTED CIRCLE MOVES TO THE SIDE */

        .focus-military .node-military,
        .focus-security .node-security,
        .focus-loyalists .node-loyalists {
          top: 50%;
          right: -2%;
          left: auto;
          bottom: auto;
          transform: translateY(-50%) scale(0.85);
          z-index: 5;
          opacity: 1;
        }

        /* UNRELATED CIRCLES DISSOLVE */

        .focus-security .node-military,
        .focus-security .node-loyalists,
        .focus-military .node-security,
        .focus-military .node-loyalists,
        .focus-loyalists .node-military,
        .focus-loyalists .node-security {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.55);
        }

        /* PORTRAITS BELOW THE DICTATOR */

        .dictator-layout {
          width: min(790px, 78%);
          left: 53%;
        }

        .military-layout,
        .security-layout,
        .loyalists-layout {
          width: min(760px, 70%);
          left: 50%;
          top: 58%;
          transform: translate(-50%, -50%);
        }

        .focus-military .military-layout,
        .focus-security .security-layout,
        .focus-loyalists .loyalists-layout {
          z-index: 2;
        }

        /* ONLY THE DICTATOR IS CONNECTED TO THE GROUPS */

        .focus-security .line-military,
        .focus-security .line-loyalists,
        .focus-military .line-security,
        .focus-military .line-loyalists,
        .focus-loyalists .line-military,
        .focus-loyalists .line-security {
          opacity: 0;
        }

        .focus-dictator .aop-connectors .line {
          opacity: 0.3;
        }

        .aop-instructions {
          min-height: 24px;
          margin: 25px auto 0;
          color: #bdc9d4;
          text-align: center;
          font-size: 13px;
        }

        @keyframes aopAppear {
          from {
            opacity: 0;
            transform: translate(-50%, -47%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .aop-stage {
            min-height: 590px;
          }

          .aop-circle {
            width: 120px;
            height: 120px;
          }

          .aop-circle span {
            font-size: 13px;
          }

          .aop-portrait-layout {
            width: 75%;
            gap: 16px;
          }

          .aop-person h3 {
            font-size: 15px;
          }

          .aop-person p {
            font-size: 12px;
          }

          .focus-military .node-dictator,
          .focus-security .node-dictator,
          .focus-loyalists .node-dictator {
            left: 50%;
          }

          .military-layout,
          .security-layout,
          .loyalists-layout {
            width: 70%;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .aop-section {
            padding: 45px 15px 50px;
          }

          .aop-heading {
            margin-bottom: 25px;
          }

          .aop-heading p {
            font-size: 14px;
          }

          .aop-stage {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            min-height: 0;
            padding: 10px 0 20px;
          }

          .aop-connectors {
            display: none;
          }

          .aop-node {
            position: relative;
            inset: auto !important;
            transform: none !important;
            opacity: 1;
            width: 100%;
            transition:
              opacity 0.4s ease,
              transform 0.4s ease;
          }

          .aop-circle {
            width: 112px;
            height: 112px;
            padding: 12px;
          }

          .aop-circle span {
            font-size: 12px;
          }

          /* DEFAULT MOBILE ORDER */

          .node-dictator {
            order: 1;
          }

          .node-military {
            order: 2;
          }

          .node-security {
            order: 3;
          }

          .node-loyalists {
            order: 4;
          }

          .aop-stage:not(.has-focus) .aop-node {
            display: flex;
          }

          /* MOBILE PORTRAIT LAYOUT */

          .aop-portrait-layout {
            position: relative;
            inset: auto;
            width: 100%;
            left: auto;
            top: auto;
            transform: none;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            align-items: start;
            gap: 10px;
            order: 5;
            animation: aopMobileAppear 0.4s ease both;
          }

          .aop-person {
            width: 100%;
            max-width: none;
          }

          .aop-photo {
            aspect-ratio: 3 / 4;
          }

          .aop-person h3 {
            margin-top: 9px;
            font-size: 12px;
            overflow-wrap: anywhere;
          }

          .aop-person p {
            font-size: 11px;
            line-height: 1.45;
            overflow-wrap: anywhere;
          }

          .aop-person-featured {
            transform: none;
          }

          /* DICTATOR VIEW: KEEP THIS PRESENTATION */

          .dictator-layout {
            order: 1;
          }

          .focus-dictator .node-dictator {
            display: none;
          }

          .focus-dictator .node-military,
          .focus-dictator .node-security,
          .focus-dictator .node-loyalists {
            opacity: 0.45;
            transform: scale(0.9) !important;
          }

          /* MILITARY VIEW */

          .focus-military .node-dictator,
          .focus-military .node-military {
            display: flex;
          }

          .focus-military .node-dictator {
            order: 1;
          }

          .focus-military .node-military {
            order: 2;
          }

          .focus-military .node-security,
          .focus-military .node-loyalists,
          .focus-security .node-military,
          .focus-security .node-loyalists,
          .focus-loyalists .node-military,
          .focus-loyalists .node-security {
            display: none;
          }

          .focus-military .military-layout {
            order: 3;
          }

          /* SECURITY VIEW */

          .focus-security .node-dictator,
          .focus-security .node-security {
            display: flex;
          }

          .focus-security .node-dictator {
            order: 1;
          }

          .focus-security .node-security {
            order: 2;
          }

          .focus-security .security-layout {
            order: 3;
          }

          /* LOYALISTS VIEW */

          .focus-loyalists .node-dictator,
          .focus-loyalists .node-loyalists {
            display: flex;
          }

          .focus-loyalists .node-dictator {
            order: 1;
          }

          .focus-loyalists .node-loyalists {
            order: 2;
          }

          .focus-loyalists .loyalists-layout {
            order: 3;
          }

          /* MOBILE OVERRIDES FOR DESKTOP POSITIONS */

          .focus-military .node-dictator,
          .focus-security .node-dictator,
          .focus-loyalists .node-dictator,
          .focus-military .node-military,
          .focus-security .node-security,
          .focus-loyalists .node-loyalists {
            left: auto;
            right: auto;
            top: auto;
            bottom: auto;
            transform: none;
          }

          .focus-military .military-layout,
          .focus-security .security-layout,
          .focus-loyalists .loyalists-layout {
            width: 100%;
            left: auto;
            top: auto;
            transform: none;
          }

          .aop-instructions {
            line-height: 1.6;
            padding: 0 8px;
          }
        }

        @keyframes aopMobileAppear {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aop-stage *,
          .aop-stage *::before,
          .aop-stage *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
    </>
  );
}
