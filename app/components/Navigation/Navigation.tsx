
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export interface MenuItem {
  href: string;
  label: string;
  labelTi: string;
}

export interface NavigationMenu {
  title: string;
  titleTi: string;
  href: string;
  items: MenuItem[];
}

const menus: NavigationMenu[] = [
  {
    title: "About ANM",
    titleTi: "ብዛዕባ ANM",
    href: "/about",
    items: [],
  },
  {
    title: "Dictatorship",
    titleTi: "ምልኪ",
    href: "/dictatorship",
    items: [],
  },
  {
    title: "Eritrea of Tomorrow",
    titleTi: "ኤርትራ ናይ ጽባሕ",
    href: "/eritrea-of-tomorrow",
    items: [],
  },
  {
    title: "Policy Framework",
    titleTi: "ሃገራዊ ሕቶ",
    href: "/national-question",
    items: [],
  },
  {
    title: "Tigrinya Genocide",
    titleTi: "ጃምላዊ ምጽናት ትግርኛ",
    href: "/tigrinya-genocide",
    items: [],
  },
  {
    title: "News & Media",
    titleTi: "ዜናን ሚድያን",
    href: "/media",
    items: [],
  },
  {
    title: "Take Action",
    titleTi: "ስጉምቲ ውሰድ",
    href: "/take-action",
    items: [],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AGAAZIANISRAEL",
  },
  { name: "Instagram", href: "" },
  { name: "YouTube", href: "" },
  { name: "X", href: "" },
  { name: "Telegram", href: "" },
];

export default function Navigation() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const isTigrinya =
    pathname === "/ti" || pathname.startsWith("/ti/");

  // Corresponding English page
  const englishHref = isTigrinya
    ? pathname.replace(/^\/ti(?=\/|$)/, "") || "/"
    : pathname;

  // Corresponding Tigrinya page
  const tigrinyaHref = isTigrinya
    ? pathname
    : pathname === "/"
      ? "/ti"
      : `/ti${pathname}`;

  const switchLanguage = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  const supportHref = isTigrinya
    ? "/ti/support-donation"
    : "/support-donation";

  const supportLabel = isTigrinya
    ? "ደገፍን ወፈያን"
    : "Support and Donation";

  const getSocialSymbol = (name: string) => {
    switch (name) {
      case "Facebook":
        return "f";
      case "Instagram":
        return "◎";
      case "YouTube":
        return "▶";
      case "X":
        return "𝕏";
      case "Telegram":
        return "➤";
      default:
        return "";
    }
  };

  return (
    <header
      className={`sticky top-0 z-[100] w-full border-b-4 border-[#c9a45c] bg-[#142b45] text-white shadow-lg ${
        isTigrinya
          ? "[font-family:'Noto_Sans_Ethiopic',Nyala,serif]"
          : ""
      }`}
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1800px] items-center justify-between gap-2 px-3 py-2 xl:min-h-[100px] xl:gap-6 xl:px-6 xl:py-4">

        {/* BRAND */}
        <Link
          href={isTigrinya ? "/ti" : "/"}
          className="flex min-w-0 shrink items-center gap-1"
        >
          <img
            src="/images/menorah.png.png"
            alt="Aga'azian National Movement"
            className="h-12 w-12 shrink-0 object-contain brightness-150 contrast-125 drop-shadow-[0_0_8px_rgba(255,220,150,0.65)] sm:h-14 sm:w-14 xl:h-20 xl:w-20"
          />

          <span className="flex min-w-0 flex-col">
            <span className="grid w-full grid-cols-3 text-center text-3xl font-black leading-none tracking-normal text-white sm:text-4xl xl:text-6xl">
              {isTigrinya ? (
                <span className="col-span-3">ሃምኣ</span>
              ) : (
                <>
                  <span>A</span>
                  <span>N</span>
                  <span>M</span>
                </>
              )}
            </span>

            <span className="mt-0.5 whitespace-nowrap text-[9px] font-extrabold tracking-wide text-white sm:text-[10px] xl:mt-1 xl:text-sm">
              {isTigrinya
                ? "ምንቅስቓስ ሃገራዊ ኣጋኣዝያን"
                : "Aga'azian National Movement"}
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-1">
            {menus.map((menu) => {
              const menuHref = isTigrinya
                ? `/ti${menu.href}`
                : menu.href;

              return (
                <li
                  key={menu.href}
                  className="relative"
                  onMouseEnter={() =>
                    menu.items.length > 0
                      ? setActiveMenu(menu.href)
                      : setActiveMenu(null)
                  }
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={menuHref}
                    onFocus={() =>
                      menu.items.length > 0
                        ? setActiveMenu(menu.href)
                        : setActiveMenu(null)
                    }
                    className="flex items-center gap-1 whitespace-nowrap rounded px-2 py-3 text-xs font-semibold transition hover:bg-white/10 hover:text-[#c9a45c] 2xl:px-3"
                  >
                    {isTigrinya ? menu.titleTi : menu.title}
                  </Link>

                  {menu.items.length > 0 &&
                    activeMenu === menu.href && (
                      <div className="absolute left-0 top-full min-w-[270px] rounded-b-md border-t-2 border-[#c9a45c] bg-white py-2 text-[#142b45] shadow-xl">
                        {menu.items.map((item) => (
                          <Link
                            key={item.href}
                            href={
                              isTigrinya
                                ? `/ti${item.href}`
                                : item.href
                            }
                            onClick={() => setActiveMenu(null)}
                            className="block px-5 py-3 text-sm hover:bg-[#f8f5ed] hover:text-[#a77d32]"
                          >
                            {isTigrinya
                              ? item.labelTi
                              : item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* DESKTOP SUPPORT */}
        <div className="hidden shrink-0 xl:flex">
          <Link
            href={supportHref}
            className="whitespace-nowrap rounded px-2 py-3 text-xs font-semibold transition hover:bg-white/10 hover:text-[#c9a45c] 2xl:px-3"
          >
            {supportLabel}
          </Link>
        </div>

        {/* SINGLE LANGUAGE SWITCH — ALWAYS VISIBLE */}
        <div className="flex shrink-0 items-center whitespace-nowrap text-[11px] font-bold sm:text-xs">
          {isTigrinya ? (
            <Link
              href={englishHref}
              onClick={switchLanguage}
              aria-label="Switch to English"
              className="transition hover:text-[#c9a45c]"
            >
              ENG
            </Link>
          ) : (
            <Link
              href={tigrinyaHref}
              onClick={switchLanguage}
              aria-label="Switch to Tigrinya"
              className="transition hover:text-[#c9a45c]"
            >
              ትግርኛ
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={isTigrinya ? "መርበብ ክፈት" : "Toggle navigation"}
          className="shrink-0 rounded-md border border-[#c9a45c] px-3 py-1.5 text-xl text-[#c9a45c] xl:hidden"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-white/20 bg-[#142b45] px-6 py-4 xl:hidden">

          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={
                isTigrinya
                  ? `/ti${menu.href}`
                  : menu.href
              }
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 py-4 text-sm font-semibold hover:text-[#c9a45c]"
            >
              {isTigrinya ? menu.titleTi : menu.title}
            </Link>
          ))}

          {/* SUPPORT BUTTON */}
          <Link
            href={supportHref}
            onClick={() => setMobileOpen(false)}
            className="mt-5 block border border-[#c9a45c] px-5 py-3 text-center text-sm font-semibold text-[#d5b46b] transition hover:bg-[#c9a45c] hover:text-[#142b45]"
          >
            {supportLabel}
          </Link>

          {/* SOCIAL MEDIA */}
          <div className="mt-5 border-t border-white/15 pt-5 pb-3">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c9a45c]">
              {isTigrinya ? "ተኸታተሉና" : "CONNECT WITH ANM"}
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  aria-label={name}
                  title={name}
                  aria-disabled={!href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-colors hover:border-[#c9a45c] hover:bg-[#c9a45c]"
                >
                  <span
                    style={{
                      color: "#142b45",
                      display: "block",
                      fontSize: "20px",
                      fontWeight: 900,
                      lineHeight: 1,
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {getSocialSymbol(name)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
