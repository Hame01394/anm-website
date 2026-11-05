
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/AGAAZIANISRAEL" },
  { name: "Instagram", href: "" },
  { name: "YouTube", href: "" },
  { name: "X", href: "" },
  { name: "Telegram", href: "" },
];

const mainNavigation = [
  { label: "About ANM", labelTi: "ብዛዕባ ANM", href: "/about" },
  { label: "Dictatorship", labelTi: "ምልኪ", href: "/dictatorship" },
  { label: "Policy Framework", labelTi: "ሃገራዊ ሕቶ", href: "/national-question" },
  { label: "Tigrinya Genocide", labelTi: "ተቓውሞን ጎስጓስን", href: "/tigrinya-genocide" },
  { label: "News & Media", labelTi: "ዜናን ሚድያን", href: "/media" },
  { label: "Take Action", labelTi: "ስጉምቲ ውሰድ", href: "/take-action" },
];

const legalLinks = [
  { label: "Privacy Policy", labelTi: "ፖሊሲ ብሕታዊነት", href: "/privacy-policy" },
  { label: "Accessibility", labelTi: "ተበጻሕነት", href: "/accessibility" },
  { label: "Terms of Use", labelTi: "ናይ ኣጠቓቕማ ስምምዕ", href: "/terms-of-use" },
];

function getSocialSymbol(name: string) {
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
}

export default function Footer() {
  const pathname = usePathname();

  const isTigrinya =
    pathname === "/ti" || pathname.startsWith("/ti/");

  const homeHref = isTigrinya ? "/ti" : "/";

  return (
    <footer
      lang={isTigrinya ? "ti" : "en"}
      className="bg-[#142b45] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Organization identity */}
          <div>
            <Link href={homeHref} className="inline-block">
              <span className="block text-2xl font-bold tracking-[0.16em] text-[#c9a45c]">
                ANM
              </span>

              <span className="mt-1 block max-w-xs text-xs font-semibold tracking-wide text-white">
                {isTigrinya
                  ? "ምንቅስቓስ ሃገራዊ ኣጋኣዝያን"
                  : "TIGRINYA NATIONAL MOVEMENT"}
              </span>
            </Link>

            <div className="mt-3 h-[2px] w-12 bg-[#c9a45c]" />

            <p className="mt-3 max-w-xs text-xs leading-6 text-white/70">
              {isTigrinya ? (
                <>
                  ሃገርና። መጻኢና።
                  <br />
                  ንሃገራዊ ሓድሽ ምሕዳስ፣ ክብሪ፣ ናጽነትን
                  ደሞክራስያዊ መጻኢን ዝተወፈየ ምንቅስቓስ።
                </>
              ) : (
                <>
                  Our Nation. Our Future.
                  <br />
                  A movement dedicated to direct democracy, economic prosperity, and cultural revival.
                </>
              )}
            </p>
          </div>

          {/* Main navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#c9a45c]">
              {isTigrinya ? "ቀንዲ መርበብ" : "Main Navigation"}
            </h2>

            <ul className="mt-4 space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={isTigrinya ? `/ti${item.href}` : item.href}
                    className="text-xs text-white/75 transition-colors hover:text-[#c9a45c]"
                  >
                    {isTigrinya ? item.labelTi : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and social media */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#c9a45c]">
              {isTigrinya ? "ርክብን ምትእስሳርን" : "Contact & Connect"}
            </h2>

            <a
              href="https://wa.me/972542366696"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#c9a45c]"
            >
              <span>WhatsApp</span>
              <span>+972 54-236-6696</span>
            </a>

            <h3 className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c9a45c]">
              {isTigrinya ? "ተኸታተሉና" : "Follow ANM"}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href || undefined}
                  target={href ? "_blank" : undefined}
                  rel={href ? "noopener noreferrer" : undefined}
                  aria-label={name}
                  title={name}
                  aria-disabled={!href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white transition-colors hover:border-[#c9a45c] hover:bg-[#c9a45c]"
                >
                  <span
                    style={{
                      color: "#142b45",
                      display: "block",
                      fontSize: "20px",
                      fontWeight: 900,
                      lineHeight: "20px",
                      fontFamily: "Arial, sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {getSocialSymbol(name)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Legal information */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#c9a45c]">
              {isTigrinya ? "ሓበሬታ" : "Information"}
            </h2>

            <ul className="mt-4 space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={isTigrinya ? `/ti${item.href}` : item.href}
                    className="text-xs text-white/75 transition-colors hover:text-[#c9a45c]"
                  >
                    {isTigrinya ? item.labelTi : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[11px] text-white/60">
            {isTigrinya
              ? "© 2026 ምንቅስቓስ ሃገራዊ ኣጋኣዝያን። ኩሉ መሰላት ዝተሓለወ እዩ።"
              : "© 2026 Aga'azian National Movement. All Rights Reserved."}
          </p>

          <p className="text-[11px] font-medium tracking-wide text-[#c9a45c]">
            {isTigrinya
              ? "ሃገርና። መጻኢና።"
              : "OUR NATION. OUR FUTURE."}
          </p>
        </div>
      </div>
    </footer>
  );
}
