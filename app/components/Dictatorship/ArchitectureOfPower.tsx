
"use client";

import { useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Portrait = {
  name: string;
  image: string;
};

type PortraitGroup = {
  id: GroupId;
  title: string;
  layout: "horizontal" | "vertical";
  portraits: Portrait[];
};

const portraitGroups: PortraitGroup[] = [
  {
    id: "dictator",
    title: "The Dictator",
    layout: "horizontal",
    portraits: [
      { name: "Isaias Afwerki", image: "" },
      { name: "His wife", image: "" },
      { name: "His son", image: "" },
    ],
  },
  {
    id: "military",
    title: "Military Commanders",
    layout: "vertical",
    portraits: [
      { name: "General 1", image: "" },
      { name: "General 2", image: "" },
      { name: "General 3", image: "" },
    ],
  },
  {
    id: "security",
    title: "Security Apparatus",
    layout: "vertical",
    portraits: [
      { name: "Security Official 1", image: "" },
      { name: "Security Official 2", image: "" },
      { name: "Security Official 3", image: "" },
    ],
  },
  {
    id: "loyalists",
    title: "Political Loyalists",
    layout: "horizontal",
    portraits: [
      { name: "Loyalist 1", image: "" },
      { name: "Loyalist 2", image: "" },
      { name: "Loyalist 3", image: "" },
    ],
  },
];

function PortraitPanel({ group }: { group: PortraitGroup }) {
  return (
    <>
      {group.portraits.map((portrait, index) => (
        <div
          key={`${group.id}-${index}`}
          className="aop-portrait-item"
        >
          <div className="aop-photo">
            {portrait.image ? (
              <img src={portrait.image} alt={portrait.name} />
            ) : (
              <span>Photo to be supplied</span>
            )}
          </div>
          <p>{portrait.name}</p>
        </div>
      ))}
    </>
  );
}

function PowerNode({
  id,
  label,
  activeGroup,
  setActiveGroup,
  central = false,
}: {
  id: GroupId;
  label: string;
  activeGroup: GroupId | null;
  setActiveGroup: (group: GroupId | null) => void;
  central?: boolean;
}) {
  const isActive = activeGroup === id;

  return (
    <button
      type="button"
      className={`aop-node ${central ? "aop-central" : ""} ${
        isActive ? "aop-node-active" : ""
      }`}
      aria-label={`${label}. ${isActive ? "Close" : "Open"} photographs`}
      aria-expanded={isActive}
      onMouseEnter={() => setActiveGroup(id)}
      onClick={() => setActiveGroup(isActive ? null : id)}
    >
      <span>{label}</span>
    </button>
  );
}

export default function ArchitectureOfPower() {
  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);

  return (
    <section className="w-full bg-white text-[#101f35]">
      <style jsx>{`
        /* WHITE SECTION HEADING */
        .aop-heading {
          width: 100%;
          background: #ffffff;
          color: #101f35;
          text-align: center;
          margin: 0;
          padding: 65px 24px 55px;
        }

        .aop-heading h2 {
          margin: 0;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 800;
          letter-spacing: 0.07em;
          line-height: 1.35;
        }

        .aop-heading h3 {
          margin: 8px 0 0;
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 900;
          letter-spacing: 0.055em;
          line-height: 1.2;
        }

        .aop-divider {
          width: 90px;
          height: 2px;
          background: #101f35;
          margin: 25px auto 0;
        }

        /* NAVY DIAGRAM AREA */
        .aop-section {
          width: 100%;
          background: #101f35;
          color: #ffffff;
          padding: 75px 24px 90px;
          overflow: hidden;
        }

        .aop-stage {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 960px;
          margin: 0 auto;
        }

        /* THREE DIRECT CONNECTOR LINES */
        .aop-lines {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          overflow: visible;
        }

        .aop-lines line {
          stroke: #ffffff;
          stroke-width: 2;
          vector-effect: non-scaling-stroke;
        }

        /* FOUR CIRCULAR NODES */
        .aop-node {
          position: absolute;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
          padding: 16px;
          border: 0;
          border-radius: 50%;
          background: #ffffff;
          color: #101f35;
          font-size: 15px;
          font-weight: 900;
          line-height: 1.35;
          text-align: center;
          cursor: pointer;
          transition: box-shadow 180ms ease;
        }

        .aop-node:hover,
        .aop-node-active,
        .aop-node:focus-visible {
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.28);
          outline: none;
        }

        .aop-central {
          width: 210px;
          height: 210px;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          font-size: 22px;
        }

        .aop-military {
          left: 29%;
          top: 28%;
          transform: translate(-50%, -50%);
        }

        .aop-security {
          left: 71%;
          top: 28%;
          transform: translate(-50%, -50%);
        }

        .aop-loyalists {
          left: 50%;
          top: 78%;
          transform: translate(-50%, -50%);
        }

        /* PHOTOGRAPH PANELS */
        .aop-portrait-panel {
          position: absolute;
          z-index: 5;
          display: flex;
          gap: 12px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition:
            opacity 220ms ease,
            transform 220ms ease,
            visibility 220ms ease;
        }

        .aop-portrait-panel.aop-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        .aop-horizontal {
          flex-direction: row;
          width: 360px;
        }

        .aop-vertical {
          flex-direction: column;
          width: 125px;
        }

        .aop-portrait-item {
          flex: 1;
          min-width: 0;
          text-align: center;
        }

        .aop-photo {
          width: 100%;
          aspect-ratio: 1 / 1;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: #1b304b;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .aop-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .aop-photo span {
          padding: 8px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 10px;
          line-height: 1.4;
        }

        .aop-portrait-item p {
          margin: 7px 0 0;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
        }

        /* DICTATOR PHOTOGRAPHS: ABOVE CENTRAL NODE */
        .aop-panel-dictator {
          left: 50%;
          top: 4%;
          transform: translate(-50%, 8px);
        }

        .aop-panel-dictator.aop-visible {
          transform: translate(-50%, 0);
        }

        /* MILITARY PHOTOGRAPHS: LEFT */
        .aop-panel-military {
          left: 1%;
          top: 19%;
          transform: translateX(-8px);
        }

        .aop-panel-military.aop-visible {
          transform: translateX(0);
        }

        /* SECURITY PHOTOGRAPHS: RIGHT */
        .aop-panel-security {
          right: 1%;
          top: 19%;
          transform: translateX(8px);
        }

        .aop-panel-security.aop-visible {
          transform: translateX(0);
        }

        /* LOYALIST PHOTOGRAPHS: BELOW NODE */
        .aop-panel-loyalists {
          left: 50%;
          top: 88%;
          transform: translate(-50%, 8px);
        }

        .aop-panel-loyalists.aop-visible {
          transform: translate(-50%, 0);
        }

        @media (max-width: 700px) {
          .aop-heading {
            padding: 50px 16px 40px;
          }

          .aop-section {
            padding: 55px 14px 65px;
          }

          .aop-stage {
            height: 900px;
            max-width: 440px;
          }

          .aop-node {
            width: 112px;
            height: 112px;
            padding: 10px;
            font-size: 11px;
          }

          .aop-central {
            width: 145px;
            height: 145px;
            top: 49%;
            font-size: 16px;
          }

          .aop-military {
            left: 25%;
            top: 27%;
          }

          .aop-security {
            left: 75%;
            top: 27%;
          }

          .aop-loyalists {
            top: 76%;
          }

          .aop-horizontal {
            width: min(78vw, 300px);
            gap: 7px;
          }

          .aop-vertical {
            width: 78px;
            gap: 8px;
          }

          .aop-portrait-item p {
            font-size: 10px;
            overflow-wrap: anywhere;
          }

          .aop-photo span {
            font-size: 8px;
          }

          .aop-panel-dictator {
            top: 2%;
          }

          .aop-panel-military {
            left: 0;
            top: 20%;
          }

          .aop-panel-security {
            right: 0;
            top: 20%;
          }

          .aop-panel-loyalists {
            top: 88%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aop-node,
          .aop-portrait-panel {
            transition: none;
          }
        }
      `}</style>

      {/* WHITE HEADING */}
      <header className="aop-heading">
        <h2>THE DICTATOR: ONE-MAN RULE</h2>
        <div className="aop-divider" />
      </header>

      {/* NAVY DIAGRAM */}
      <div
        className="aop-section"
        onMouseLeave={() => setActiveGroup(null)}
      >
        <div className="aop-stage">
          {/* EXACTLY THREE DIRECT CONNECTIONS */}
          <svg
            className="aop-lines"
            viewBox="0 0 1000 960"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="290" y1="269" x2="500" y2="432" />
            <line x1="710" y1="269" x2="500" y2="432" />
            <line x1="500" y1="748" x2="500" y2="554" />
          </svg>

          {/* MILITARY COMMANDERS */}
          <PowerNode
            id="military"
            label="MILITARY COMMANDERS"
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
          />

          {/* SECURITY APPARATUS */}
          <PowerNode
            id="security"
            label="SECURITY APPARATUS"
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
          />

          {/* CENTRAL DICTATOR */}
          <PowerNode
            id="dictator"
            label="THE DICTATOR"
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
            central
          />

          {/* POLITICAL LOYALISTS */}
          <PowerNode
            id="loyalists"
            label="POLITICAL LOYALISTS"
            activeGroup={activeGroup}
            setActiveGroup={setActiveGroup}
          />

          {/* PHOTOGRAPH PANELS */}
          {portraitGroups.map((group) => (
            <div
              key={group.id}
              className={`aop-portrait-panel aop-panel-${group.id} ${
                group.layout === "vertical"
                  ? "aop-vertical"
                  : "aop-horizontal"
              } ${
                activeGroup === group.id ? "aop-visible" : ""
              }`}
              aria-hidden={activeGroup !== group.id}
              onMouseEnter={() => setActiveGroup(group.id)}
            >
              <PortraitPanel group={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
