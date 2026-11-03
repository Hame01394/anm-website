
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavigation = [
  {
    label: "About ANM",
    labelTi: "ብዛዕባ ANM",
    href: "/about",
  },
  {
    label: "Dictatorship",
    labelTi: "ምልኪ",
    href: "/dictatorship",
  },
  {
    label: "Policy Framework",
    labelTi: "ሃገራዊ ሕቶ",
    href: "/national-question",
  },
  
  {
    label: "Tigrinya Genocide",
    labelTi: "ተቓውሞን ጎስጓስን",
    href: "/tigrinya-genocide",
  },

  
  {
    label: "News & Media",
    labelTi: "ዜናን ሚድያን",
    href: "/media",
  },
  {
    label: "Take Action",
    labelTi: "ስጉምቲ ውሰድ",
    href: "/take-action",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    labelTi: "ፖሊሲ ብሕታዊነት",
    href: "/privacy-policy",
  },
  {
    label: "Accessibility",
    labelTi: "ተበጻሕነት",
    href: "/accessibility",
  },
  {
    label: "Terms of Use",
    labelTi: "ናይ ኣጠቓቕማ ስምምዕ",
    href: "/terms-of-use",
  },
];

export default function Footer() {
  const pathname = usePathname();

  const isTigrinya =
    pathname === "/ti" || pathname.startsWith("/ti/");

  const homeHref = isTigrinya ? "/ti" : "/";

  return (
    <footer
      className={`bg-[#142b45] text-white ${
        isTigrinya
          ? "[font-family:'Noto_Sans_Ethiopic',Nyala,serif]"
          : ""
      }`}
      lang={isTigrinya ? "ti" : "en"}
    >
      {/* Main footer */}
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
                  : "AGA'AZIAN NATIONAL MOVEMENT"}
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
                  A movement committed to national renewal, dignity, freedom,
                  and a democratic future.
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
                    href={
                      isTigrinya
                        ? `/ti${item.href}`
                        : item.href
                    }
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

  <p className="mt-4 max-w-xs text-xs leading-6 text-white/70">
    {isTigrinya
      ? "ብዋትስኣፕ ርኸቡና።"
      : "Connect with the Aga'azian National Movement through WhatsApp."}
  </p>

  <a
    href="https://wa.me/972542366696"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#c9a45c]"
  >
    <span>WhatsApp</span>
    <span>+972 54-236-6696</span>
  </a>
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
                    href={
                      isTigrinya
                        ? `/ti${item.href}`
                        : item.href
                    }
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
