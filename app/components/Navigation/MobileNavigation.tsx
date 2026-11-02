
"use client";

import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    title: "About ANM",
    href: "/movement",
    items: [
      ["Who We Are", "/movement/who-we-are"],
      ["Our Mission & Vision", "/movement/mission-vision"],
      ["Founding Principles", "/movement/principles"],
      ["Our History", "/movement/history"],
      ["Leadership & Structure", "/movement/leadership"],
      ["Membership", "/movement/membership"],
      ["Regional & International Chapters", "/movement/chapters"],
    ],
  },
  {
    title: "Dictatorship",
    href: "/program",
    items: [
      ["The Authoritarian System", "/program/authoritarian-system"],
      ["The Case for Democratic Change", "/program/democratic-change"],
      ["Political Repression", "/program/political-repression"],
      ["Human Rights & Political Prisoners", "/program/human-rights"],
      ["The Path to Freedom", "/program/path-to-freedom"],
    ],
  },
  {
    title: "National Question",
    href: "/resources",
    items: [
      ["National Identity", "/resources/national-identity"],
      ["Nationhood & Citizenship", "/resources/citizenship"],
      ["Equality & Fundamental Rights", "/resources/equality-rights"],
      ["National Unity & Diversity", "/resources/unity-diversity"],
      ["Constitutional Future", "/resources/constitutional-future"],
    ],
  },
  {
    title: "Our Vision",
    href: "/platform",
    items: [
      ["Democratic Governance", "/platform/governance"],
      ["Rule of Law", "/platform/rule-of-law"],
      ["Economic Reconstruction", "/platform/economy"],
      ["National Security", "/platform/security"],
      ["Social Justice & Development", "/platform/social-justice"],
      ["National Reconciliation", "/platform/reconciliation"],
    ],
  },
  {
    title: "Resistance & Advocacy",
    href: "/advocacy",
    items: [
      ["Our Campaigns", "/advocacy/campaigns"],
      ["Civil Resistance", "/advocacy/civil-resistance"],
      ["Human Rights Documentation", "/advocacy/documentation"],
      ["International Advocacy", "/advocacy/diplomacy"],
      ["Official Statements", "/advocacy/statements"],
    ],
  },
  {
    title: "News & Media",
    href: "/media",
    items: [
      ["Latest News", "/media/news"],
      ["Analysis & Commentary", "/media/analysis"],
      ["Press Releases", "/media/press-releases"],
      ["Videos & Interviews", "/media/videos"],
      ["Publications & Reports", "/media/publications"],
    ],
  },
  {
    title: "Take Action",
    href: "/join",
    items: [
      ["Join the Movement", "/join"],
      ["Volunteer", "/organize/volunteer"],
      ["Support Our Campaigns", "/advocacy/campaigns"],
      ["Contact Us", "/contact"],
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b-4 border-[#c9a45c] bg-[#142b45] text-white shadow-lg">
      <div className="mx-auto flex min-h-[100px] max-w-[1800px] items-center justify-between gap-6 px-5 py-4 lg:px-8">

        {/* ANM BRAND */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-md border-2 border-[#c9a45c] bg-[#c9a45c] text-xl font-black tracking-tight text-[#142b45]">
            ANM
          </span>

          <span className="flex flex-col">
            <span className="text-sm font-extrabold tracking-wide sm:text-base lg:text-lg">
              AGA'AZIAN NATIONAL
            </span>
            <span className="text-sm font-extrabold tracking-wide sm:text-base lg:text-lg">
              MOVEMENT
            </span>
            <span className="mt-1 text-[9px] font-semibold tracking-[0.25em] text-[#c9a45c] sm:text-[10px]">
              OUR NATION. OUR FUTURE.
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center xl:flex">
          <ul className="flex items-center justify-center gap-1">
            {menus.map((menu) => (
              <li key={menu.title} className="group relative">
                <Link
                  href={menu.href}
                  className="flex items-center gap-1 whitespace-nowrap rounded px-2 py-3 text-[12px] font-semibold transition-colors hover:bg-white/10 hover:text-[#c9a45c] 2xl:px-3 2xl:text-sm"
                >
                  {menu.title}
                  <span className="text-[10px] text-[#c9a45c]">▼</span>
                </Link>

                <div className="invisible absolute left-0 top-full min-w-[260px] translate-y-2 rounded-b-md border-t-2 border-[#c9a45c] bg-white py-2 text-[#142b45] opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {menu.items.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-5 py-3 text-sm transition-colors hover:bg-[#f8f5ed] hover:text-[#a77d32]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* LANGUAGE AND JOIN */}
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Link href="/?lang=en" className="text-[#c9a45c]">
              ENG
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/?lang=ti" className="hover:text-[#c9a45c]">
              ትግርኛ
            </Link>
          </div>

          <Link
            href="/join"
            className="rounded-md bg-[#c9a45c] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#142b45] transition-colors hover:bg-white"
          >
            Join ANM
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-[#c9a45c] text-2xl text-[#c9a45c] xl:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav className="border-t border-white/15 bg-[#142b45] px-5 py-4 xl:hidden">
          <div className="flex flex-col">
            {menus.map((menu) => (
              <details key={menu.title} className="border-b border-white/10">
                <summary className="cursor-pointer list-none py-4 text-sm font-semibold hover:text-[#c9a45c]">
                  {menu.title}
                  <span className="float-right text-[#c9a45c]">＋</span>
                </summary>

                <div className="flex flex-col pb-3 pl-4">
                  {menu.items.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-white/75 hover:text-[#c9a45c]"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}

            <div className="flex items-center gap-4 py-4 text-sm">
              <Link href="/?lang=en" onClick={() => setMobileOpen(false)}>
                ENG
              </Link>
              <Link href="/?lang=ti" onClick={() => setMobileOpen(false)}>
                ትግርኛ
              </Link>
            </div>

            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-[#c9a45c] px-5 py-3 text-center text-sm font-bold uppercase tracking-wider text-[#142b45]"
            >
              Join ANM
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
