
"use client";

import { useState } from "react";

type GroupId = "dictator" | "military" | "security" | "loyalists";

type Portrait = {
  name: string;
  description: string;
  image: string;
  profileUrl?: string;
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
    layout: "vertical",
    portraits: [
      {
        name: "Isaias Afwerki",
        description:
          "President of Eritrea and the central figure in the country's political and military power structure.",
        image: "",
      },
      {
        name: "His wife",
        description: "A member of the President's immediate family.",
        image: "",
      },
      {
        name: "His son",
        description: "A member of the President's immediate family.",
        image: "",
      },
    ],
  },
  {
    id: "military",
    title: "Military Commanders",
    layout: "vertical",
    portraits: [
      {
        name: "General 1",
        description: "Senior military commander.",
        image: "",
      },
      {
        name: "General 2",
        description: "Senior military commander.",
        image: "",
      },
      {
        name: "General 3",
        description: "Senior military commander.",
        image: "",
      },
    ],
  },
  {
    id: "security",
    title: "Security Apparatus",
    layout: "vertical",
    portraits: [
      {
        name: "Security Official 1",
        description: "Senior security official.",
        image: "",
      },
      {
        name: "Security Official 2",
        description: "Senior security official.",
        image: "",
      },
      {
        name: "Security Official 3",
        description: "Senior security official.",
        image: "",
      },
    ],
  },
  {
    id: "loyalists",
    title: "Political Loyalists",
    layout: "horizontal",
    portraits: [
      {
        name: "Loyalist 1",
        description: "Political associate.",
        image: "",
      },
      {
        name: "Loyalist 2",
        description: "Political associate.",
        image: "",
      },
      {
        name: "Loyalist 3",
        description: "Political associate.",
        image: "",
      },
    ],
  },
];

function PortraitPanel({ group }: { group: PortraitGroup }) {
  return (
    <>
      {group.portraits.map((portrait, index) => {
        const content = (
          <div className="aop-person-card">
            <div className="aop-photo">
              {portrait.image ? (
                <img src={portrait.image} alt={portrait.name} />
              ) : (
                <span>Photo needed</span>
              )}
            </div>

            <div className="aop-person-info">
              <h4>{portrait.name}</h4>
              <p>{portrait.description}</p>
            </div>
          </div>
        );

        return (
          <div
            key={`${group.id}-${index}`}
            className="aop-portrait-item"
          >
            {portrait.profileUrl ? (
              <a
                href={portrait.profileUrl}
                className="aop-profile-link"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </div>
        );
      })}
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
      className={`aop-node aop-${id} ${
        central ? "aop-central" : ""
      } ${isActive ? "aop-node-active" : ""}`}
      aria-label={`${label}. ${isActive ? "Close" : "Open"} photographs`}
      aria-expanded={isActive}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") {
          setActiveGroup(id);
        }
      }}
      onClick={() => {
        setActiveGroup(isActive ? null : id);
      }}
    >
      <span>{label}</span>
    </button>
  );
}

export default function ArchitectureOfPower() {
  const [activeGroup, setActiveGroup] = useState<GroupId | null>(null);

  return (
    <section className="w-full bg-white text-[#101f35]">
      <style jsx global>{`
        .aop-heading {
          width: 100%;
          background: #ffffff;
          color: #101f35;
          text-align: center;
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
          margin: 10px 0 0;
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

        .aop-section {
          width: 100%;
          background: #101f35;
          color: #ffffff;
          padding: 65px 24px 90px;
          overflow: hidden;
        }

        .aop-intro {
          max-width: 760px;
          margin: 0 auto 35px;
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
          font-size: 16px;
          line-height: 1.8;
        }

        .aop-stage {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 960px;
          margin: 0 auto;
        }

        /* THREE CONNECTING LINES */

        .aop-lines {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .aop-lines line {
          stroke: #ffffff;
          stroke-width: 2;
          vector-effect: non-scaling-stroke;
        }

        /* FOUR CIRCLES */

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

        /* CENTRAL CIRCLE */

        .aop-dictator {
          width: 210px;
          height: 210px;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
        }

        /* OUTER CIRCLES */

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

        /* PORTRAIT PANELS */

        .aop-portrait-panel {
          position: absolute;
          z-index: 5;
          display: flex;
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
          gap: 12px;
        }

        .aop-vertical {
          flex-direction: column;
          gap: 12px;
        }

        /* DEFAULT PHOTO AND TEXT SIDE BY SIDE */

        .aop-portrait-item {
          flex: none;
          min-width: 0;
          text-align: left;
        }

        .aop-person-card {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 260px;
        }

        .aop-profile-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .aop-photo {
          flex: 0 0 90px;
          width: 90px;
          aspect-ratio: 1 / 1;
          border: 1px solid rgba(255, 255, 255, 0.85);
          background: #1b304b;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .aop-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .aop-photo span {
          padding: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 10px;
          text-align: center;
        }

        .aop-person-info {
          flex: 1;
          min-width: 0;
        }

        .aop-person-info h4 {
          margin: 0 0 6px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.35;
        }

        .aop-person-info p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 11px;
          line-height: 1.5;
        }

        /* DICTATOR: TEXT ABOVE THE PICTURE */

        .aop-panel-dictator
          .aop-portrait-item:nth-child(1)
          .aop-person-card {
          flex-direction: column-reverse;
          align-items: center;
          text-align: center;
        }

        .aop-panel-dictator
          .aop-portrait-item:nth-child(1)
          .aop-person-info {
          width: 100%;
          text-align: center;
        }

        /* WIFE: TEXT TO THE LEFT OF THE PICTURE */

        .aop-panel-dictator
          .aop-portrait-item:nth-child(2)
          .aop-person-card {
          flex-direction: row-reverse;
          align-items: center;
          text-align: right;
        }

        .aop-panel-dictator
          .aop-portrait-item:nth-child(2)
          .aop-person-info {
          text-align: right;
        }

        /* SON: TEXT TO THE RIGHT OF THE PICTURE */

        .aop-panel-dictator
          .aop-portrait-item:nth-child(3)
          .aop-person-card {
          flex-direction: row;
          align-items: center;
          text-align: left;
        }

        .aop-panel-dictator
          .aop-portrait-item:nth-child(3)
          .aop-person-info {
          text-align: left;
        }

        /* MILITARY GENERALS: TEXT TO THE LEFT OF EACH IMAGE */

        .aop-panel-military .aop-person-card {
          flex-direction: row-reverse;
          align-items: center;
          text-align: right;
        }

        .aop-panel-military .aop-person-info {
          text-align: right;
        }

        /* POLITICAL LOYALISTS: TEXT BELOW EACH IMAGE */

        .aop-panel-loyalists .aop-person-card {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .aop-panel-loyalists .aop-person-info {
          width: 100%;
          text-align: center;
        }

        /* DICTATOR FAMILY AROUND CENTRAL CIRCLE */

        .aop-panel-dictator {
          left: 50%;
          top: 45%;
          width: 100%;
          height: 210px;
          display: block;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        /* ISAIAS ABOVE CENTRAL CIRCLE */

        .aop-panel-dictator .aop-portrait-item:nth-child(1) {
          position: absolute;
          width: 260px;
          left: 50%;
          top: -175px;
          transform: translateX(-50%);
        }

        /* WIFE LEFT OF CENTRAL CIRCLE */

        .aop-panel-dictator .aop-portrait-item:nth-child(2) {
          position: absolute;
          width: 260px;
          left: calc(50% - 390px);
          top: 55px;
        }

        /* SON RIGHT OF CENTRAL CIRCLE */

        .aop-panel-dictator .aop-portrait-item:nth-child(3) {
          position: absolute;
          width: 260px;
          left: calc(50% + 130px);
          top: 55px;
        }

        .aop-panel-dictator.aop-visible {
          transform: translate(-50%, -50%);
        }

        /* MILITARY: LEFT SIDE */

        .aop-panel-military {
          left: -75px;
          top: 19%;
          transform: translateX(-8px);
        }

        .aop-panel-military.aop-visible {
          transform: translateX(0);
        }
          .aop-panel-military .aop-portrait-item {
  margin-bottom: 24px;
}

        /* SECURITY: RIGHT SIDE */

        .aop-panel-security {
          right: -80px;
          top: 19%;
          transform: translateX(8px);
        }

        .aop-panel-security.aop-visible {
          transform: translateX(0);
        }
          .aop-panel-security .aop-portrait-item {
  margin-bottom: 24px;
}

        /* LOYALISTS: BELOW DIAGRAM */

        .aop-panel-loyalists {
          left: 50%;
          top: 88%;
          transform: translate(-50%, 8px);
        }

        .aop-panel-loyalists.aop-visible {
          transform: translate(-50%, 0);
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .aop-heading {
            padding: 50px 16px 40px;
          }

          .aop-section {
            padding: 45px 10px 55px;
          }

          .aop-intro {
            font-size: 14px;
            padding: 0 8px;
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

          .aop-dictator {
            width: 145px;
            height: 145px;
            left: 50%;
            top: 49%;
            font-size: 16px;
          }

          .aop-military {
            left: 31%;
            top: 27%;
          }

          .aop-security {
            left: 69%;
            top: 27%;
          }

          .aop-loyalists {
            left: 50%;
            top: 76%;
          }

          .aop-person-card {
            width: 210px;
            gap: 8px;
          }

          .aop-photo {
            flex-basis: 68px;
            width: 68px;
          }

          .aop-person-info h4 {
            font-size: 11px;
          }

          .aop-person-info p {
            font-size: 10px;
          }

          /* FAMILY PORTRAITS ON MOBILE */

          .aop-panel-dictator {
            top: 49%;
            height: 145px;
          }

          .aop-panel-dictator .aop-portrait-item:nth-child(1) {
            width: 210px;
            left: 50%;
            top: -125px;
            transform: translateX(-50%);
          }

          .aop-panel-dictator .aop-portrait-item:nth-child(2) {
            width: 210px;
            left: calc(50% - 220px);
            top: 40px;
          }

          .aop-panel-dictator .aop-portrait-item:nth-child(3) {
            width: 210px;
            left: calc(50% + 10px);
            top: 40px;
          }

          .aop-panel-military {
            left: 0;
            top: 18%;
          }

          .aop-panel-security {
            right: 0;
            top: 18%;
          }

          .aop-panel-loyalists {
            top: 84%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .aop-node,
          .aop-portrait-panel {
            transition: none;
          }
        }
      `}</style>

      {/* SECTION HEADING */}

      <header className="aop-heading">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#9b7940]">
          Isaias Afwerki 
        </p>
       <h3>THE DICTATOR: ONE-MAN RULE</h3>
        <div className="aop-divider" />
      </header>

      {/* DIAGRAM AREA */}

      <div
        className="aop-section"
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") {
            setActiveGroup(null);
          }
        }}
      >
        <p className="aop-intro">
          Eritrea has endured more than three decades of uninterrupted
          one-man rule. Political power is concentrated around the
          Dictator, his family, and the inner circle of associates
          connected directly to him. Explore each circle to reveal
          the individuals associated with it.
        </p>

        <div className="aop-stage">
          {/* EXACTLY THREE CONNECTING LINES */}

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

          {/* POLITICAL LOYALISTS */}

          <PowerNode
            id="loyalists"
            label="POLITICAL LOYALISTS"
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

          {/* PORTRAIT PANELS */}

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
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  setActiveGroup(group.id);
                }
              }}
            >
              <PortraitPanel group={group} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
