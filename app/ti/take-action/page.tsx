
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

type FormSubject =
  | "ምስ ምንቅስቓስና ምጽንባር"
  | "ወለንታዊ ኣገልግሎት"
  | "ሓፈሻዊ ሕቶ";

const actions = [
  {
    number: "01",
    id: "join",
    title: "ምስ ምንቅስቓስና ተጸንበሩ",
    subtitle: "ኣካል ናይቲ ለውጢ ኩኑ",
    description:
      "ኣካል ሃገራዊ ምንቅስቓስ Aga'azian ብምዃን፡ ደሞክራስያዊት፡ ብርእሳ እትውስንን ብልጽግና ዝመልኣን ኤርትራ ንምህናጽ ሓግዙ።",
    details: [
      "መትከላትን ራእይን ANM ፍለጡ",
      "ምስ ምንቅስቓስና ርክብ ፍጠሩ",
      "ኣብ ሃገራዊ ተበግሶታት ተሳተፉ",
    ],
    subject: "ምስ ምንቅስቓስና ምጽንባር" as FormSubject,
    linkText: "ተጸንበሩና",
    shape: "rounded-[3rem_3rem_3rem_0.8rem]",
  },
  {
    number: "02",
    id: "volunteer",
    title: "ወለንታዊ ኣገልግሎት",
    subtitle: "ክእለትኩም ኣብ ተግባር ኣውዕሉ",
    description:
      "ስዓታትኩም፡ ፍልጠትኩምን ሞያዊ ክእለትኩምን ብምብርካት፡ ሲቪካዊ፡ ባህላውን ውዳበኣውን ስራሕቲ ምንቅስቓስና ኣበርክቱ።",
    details: [
      "ርክብ፡ ምጽሓፍን ትርጉምን",
      "ምርምር፡ ትምህርትን ሰነዳዊ ስራሕን",
      "ዲጂታላዊ፡ ፈጠራውን ውዳበኣውን ስራሕ",
    ],
    subject: "ወለንታዊ ኣገልግሎት" as FormSubject,
    linkText: "ከም ወለንታዊ ኣባል ተመዝገቡ",
    shape: "rounded-[3rem_0.8rem_3rem_3rem]",
  },
  {
    number: "03",
    id: "contact",
    title: "ምስ ANM ርክብ ግበሩ",
    subtitle: "ዝርርብ ጀምሩ",
    description:
      "ሕቶ፡ ሓሳብ ወይ ሓድሽ ርእይቶ ኣለኩምዶ? ሓሳባትኩም ንምክፋል ወይ ምትሕብባር ንምዝታይ ምስ ሃገራዊ ምንቅስቓስ Aga'azian ርክብ ግበሩ።",
    details: [
      "ሓፈሻዊ ሕቶታትን ሓበሬታን",
      "ናይ ሽርክነትን ምትሕብባርን ሓሳባት",
      "ሚድያውን ውዳበኣውን ሕቶታት",
    ],
    subject: "ሓፈሻዊ ሕቶ" as FormSubject,
    linkText: "ርክብ ግበሩ",
    shape: "rounded-[0.8rem_3rem_3rem_3rem]",
  },
  {
    number: "04",
    id: "support",
    title: "ደገፍን ወፈያን",
    subtitle: "ሓይሊ ምንቅስቓስና ኣደልድሉ",
    description:
      "ንስራሕቲ ምንቅስቓስና ብምምዋል፡ ንተበግሶታቱ ብገንዘባዊ ኣበርክቶ ደግፉ።",
    details: [
      "ንውዳበኣዊ ስራሕቲ ANM ኣበርክቱ",
      "ንትምህርታውን ባህላውን ተበግሶታት ደግፉ",
      "ንሃገራዊ ራእይ ምንቅስቓስና ኣብ ምዕዋት ሓግዙ",
    ],
    href: "/ti/support-donation",
    linkText: "ደግፉን ወፍዩን",
    shape: "rounded-[3rem_3rem_0.8rem_3rem]",
  },
];

const fieldClass =
  "w-full border border-[#142b45]/20 bg-[#f8f5ed] px-4 py-3 text-sm text-[#142b45] outline-none transition focus:border-[#c9a45c]";

export default function TigrinyaTakeActionPage() {
  const [formSubject, setFormSubject] = useState<FormSubject | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function openForm(subject: FormSubject) {
    setFormSubject(subject);
    setSubmitted(false);

    setTimeout(() => {
      document.getElementById("participation-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function closeForm() {
    setFormSubject(null);
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const formTitle =
    formSubject === "ምስ ምንቅስቓስና ምጽንባር"
      ? "ምስ ምንቅስቓስና ተጸንበሩ"
      : formSubject === "ወለንታዊ ኣገልግሎት"
        ? "ምስ ANM ብወለንታ ኣገልግሉ"
        : "ምስ ANM ርክብ ግበሩ";

  return (
    <main className="min-h-screen bg-[#142b45] text-white">
      {/* HERO: THE NATIONAL CHOICE */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#101d30] md:min-h-[720px]">
        <div className="absolute inset-0">
          <Image
            src="/images/take-action-hero.jpg"
            alt="ኣብ መንጎ ቀጻሊ ዕንወትን ምህናጽ መጻኢ ኤርትራን ዘሎ ምርጫ"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#101d30]/95 via-[#101d30]/75 to-[#101d30]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142b45]/80 via-transparent to-[#101d30]/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 text-center md:py-32">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d5b46b]">
            Aga&apos;azian National Movement
          </p>

          <h1 className="mt-7 text-4xl font-bold leading-tight text-white md:text-7xl">
            ተመሳሳሊ ዕንወት
            <br />
            <span className="text-[#d5b46b]">
              ብምልኪ እቲ መላኺ።
            </span>
          </h1>

          <div className="mx-auto mt-8 h-1 w-24 bg-[#c9a45c]" />

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            ወይ
            <br />
            <span className="text-[#d5b46b]">
              ንኤርትራ ንህነጽ።
            </span>
          </h2>
        </div>
      </section>

      {/* WHITE INTRODUCTION */}
      <section className="w-full bg-white px-6 py-14 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-[#142b45] md:text-6xl">
            ስጉምቲ ውሰዱ።
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 bg-[#c9a45c]" />

          <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-[#142b45] md:text-4xl">
            ኣብ ድሕሪ ምልኪ ዝመጽእ ምስግጋር፡ ነቲ ዝተፈጥረ ክፍተት
            ንምምላእን መጻኢ ኤርትራ ንምህናጽን ተዳለዉ።
          </p>
        </div>
      </section>

      {/* FOUR PARTICIPATION OPTIONS */}
      <section
        id="get-involved"
        className="scroll-mt-8 bg-[#142b45] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d5b46b]">
              ተሳትፎኹም ኣገዳሲ እዩ
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
              ብኸመይ ክትሳተፉ ትደልዩ?
            </h2>

            <div className="mt-6 h-1 w-20 bg-[#c9a45c]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {actions.map((action) => (
              <article
                key={action.id}
                className={`group flex min-h-[570px] flex-col border border-[#c9a45c]/60 bg-white p-7 text-[#142b45] shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:p-8 ${action.shape}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#a17d3d]">
                    {action.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a45c]/50 text-xl font-light text-[#a17d3d]">
                    +
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                  {action.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight">
                  {action.title}
                </h3>

                <div className="mt-5 h-1 w-12 bg-[#c9a45c]" />

                <p className="mt-6 text-sm leading-8 text-[#526176]">
                  {action.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[#142b45]/10 pt-6">
                  {action.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-[#142b45]/80"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a45c]" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  {action.href ? (
                    <Link
                      href={action.href}
                      className="inline-flex items-center gap-3 border-b-2 border-[#c9a45c] pb-2 text-xs font-bold uppercase tracking-wider text-[#142b45] transition hover:gap-5 hover:text-[#a17d3d]"
                    >
                      {action.linkText}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
  if (action.subject) openForm(action.subject);
}}
                      className="inline-flex items-center gap-3 border-b-2 border-[#c9a45c] pb-2 text-xs font-bold uppercase tracking-wider text-[#142b45] transition hover:gap-5 hover:text-[#a17d3d]"
                    >
                      {action.linkText}
                      <span aria-hidden="true">→</span>
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPATION FORM */}
      {formSubject && (
        <section
          id="participation-form"
          className="scroll-mt-8 bg-[#f8f5ed] px-6 py-16 text-[#142b45] md:px-12 md:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17d3d]">
                ድምጽኹም። ተሳትፎኹም።
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                ኣብ ምቕራጽ ሃገራዊ መጻኢና ተሳተፉ።
              </h2>

              <p className="mt-7 text-base leading-8 text-[#142b45]/70">
                ሃገራዊ ምንቅስቓስ Aga&apos;azian ብዛዕባ ምንቅስቓስና
                ክፈልጡ፡ ሓሳባት ከበርክቱ፡ ኣባላት ክኾኑ ወይ
                ሞያዊ ክእለቶም ብወለንታ ከበርክቱ ንዝደልዩ
                ውልቀሰባት ብምሉእ ልቢ ይቕበል።
              </p>

              <div className="mt-10 border-l-2 border-[#c9a45c] pl-6">
                <p className="text-sm font-bold uppercase tracking-wider">
                  መንነት · ናጽነት · ብልጽግና · ቀጻልነት
                </p>

                <p className="mt-3 text-sm leading-7 text-[#142b45]/65">
                  ኣብ ባህልና ሱር ዝሰደደ። ብናጽነት ዝመሓደር።
                  ብዕድላት ዝምራሕ። ብዘላቒ ትካላት ዝውሓስ።
                </p>
              </div>
            </div>

            <div className="bg-white p-6 shadow-sm md:p-10">
              <div className="flex items-start justify-between gap-4 border-b border-[#142b45]/10 pb-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                    ናይ ANM ተሳትፎ ቅጥዒ
                  </p>

                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                    {formTitle}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#142b45]/60">
                    እቲ ቅጥዒ ምልኡ፡ ናይ ርክብ ሓበሬታኹም ድማ ኣእትዉ።
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeForm}
                  aria-label="ቅጥዒ ዕጸዉ"
                  className="shrink-0 border border-[#142b45]/20 px-3 py-2 text-sm font-bold text-[#142b45] transition hover:bg-[#f8f5ed]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-7">
                <div>
                  <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                    ውልቃዊ ሓበሬታ
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-xs font-semibold">
                        ስም *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        placeholder="ስም"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-xs font-semibold">
                        ስም ኣቦ *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        placeholder="ስም ኣቦ"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold">
                        ኢመይል *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="ናይ ኢመይል ኣድራሻ"
                        className={fieldClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold">
                        ቁጽሪ ተሌፎን
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="ኮድ ሃገር ሓዊስኩም ኣእትዉ"
                        className={fieldClass}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="country" className="mb-2 block text-xs font-semibold">
                        እትነብሩላ ሃገር *
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        required
                        placeholder="ሃገር"
                        className={fieldClass}
                      />
                    </div>
                  </div>
                </div>

                {formSubject === "ወለንታዊ ኣገልግሎት" && (
                  <div className="border-t border-[#142b45]/10 pt-7">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                      ሓበሬታ ወለንታዊ ኣገልግሎት
                    </h3>

                    <p className="mb-6 text-sm leading-7 text-[#142b45]/60">
                      ብዛዕባ ክእለትኩምን ከተበርክቱ እትደልዩሉ መገድን ንገሩና።
                    </p>

                    <div className="space-y-5">
                      <div>
                        <label htmlFor="skills" className="mb-2 block text-xs font-semibold">
                          ክእለትን ሞያዊ ፍልጠትን *
                        </label>
                        <textarea
                          id="skills"
                          name="skills"
                          required
                          rows={3}
                          placeholder="ርክብ፡ ምርምር፡ ትርጉም፡ ቴክኖሎጂ፡ ሕጊ፡ ፋይናንስ፡ ትምህርቲ..."
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="experience" className="mb-2 block text-xs font-semibold">
                          ሞያዊ ወይ ወለንታዊ ተመኩሮ
                        </label>
                        <textarea
                          id="experience"
                          name="experience"
                          rows={3}
                          placeholder="ኣገዳሲ ተመኩሮኹም ብሓጺሩ ግለጹ።"
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="availability" className="mb-2 block text-xs font-semibold">
                          እትህልወኩም ግዜ *
                        </label>
                        <select
                          id="availability"
                          name="availability"
                          required
                          defaultValue=""
                          className={fieldClass}
                        >
                          <option value="" disabled>
                            እትህልወኩም ግዜ ምረጹ
                          </option>
                          <option value="A few hours per week">
                            ኣብ ሰሙን ሒደት ሰዓታት
                          </option>
                          <option value="Part-time">ፍርቂ ግዜ</option>
                          <option value="Full-time">ምሉእ ግዜ</option>
                          <option value="Project-based">ብመሰረት ፕሮጀክት</option>
                          <option value="Flexible">ተለዋዋጢ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                <div className="border-t border-[#142b45]/10 pt-7">
                  <label htmlFor="message" className="mb-2 block text-xs font-semibold">
                    {formSubject === "ሓፈሻዊ ሕቶ"
                      ? "መልእኽትኹም *"
                      : "ተወሳኺ መልእኽቲ"}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required={formSubject === "ሓፈሻዊ ሕቶ"}
                    placeholder={
                      formSubject === "ሓፈሻዊ ሕቶ"
                        ? "መልእኽትኹም ወይ ሕቶኹም ጽሓፉ..."
                        : "ካልእ ክንፈልጦ እትደልዩ ነገር ኣብዚ ጽሓፉ..."
                    }
                    className={fieldClass}
                  />
                </div>

                <div className="border-t border-[#142b45]/10 pt-6">
                  <label className="flex items-start gap-3 text-xs leading-6 text-[#142b45]/65">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 accent-[#a17d3d]"
                    />
                    <span>
                      ንANM ነዚ ዝሃብክዎ ሓበሬታ ንሕቶይ ወይ ናይ ተሳትፎ
                      ጠለበይ ንምምላስ ክጥቀመሉ ፍቓደይ እህብ።
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#142b45] px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#203d5e]"
                >
                  {formSubject === "ሓፈሻዊ ሕቶ"
                    ? "ሕቶ ስደዱ"
                    : formSubject === "ምስ ምንቅስቓስና ምጽንባር"
                      ? "ናይ ኣባልነት ሕቶ ኣቕርቡ"
                      : "ናይ ወለንታዊ ኣገልግሎት ሕቶ ኣቕርቡ"}
                </button>

                {submitted && (
                  <div
                    role="status"
                    className="border border-[#c9a45c] bg-[#f8f5ed] p-5 text-sm leading-7 text-[#142b45]"
                  >
                    <strong className="block">
                      ቅጥዒ ተዳልዩ ኣሎ።
                    </strong>
                    ናይ ኦንላይን ምስዳድ ገና ኣይተራኸበን።
                    ሓበሬታኹም ኣይተላእከን ወይ ኣይተቐመጠን።
                  </div>
                )}

                <button
                  type="button"
                  onClick={closeForm}
                  className="w-full py-2 text-xs font-bold uppercase tracking-wider text-[#142b45]/60 transition hover:text-[#a17d3d]"
                >
                  ← ናብ ዕድላት ተሳትፎ ተመለሱ
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* MOVEMENT SHOP */}
      <section className="bg-[#142b45] px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-white/20 bg-white md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                ምንቅስቓስና ልበሱ
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#142b45] md:text-4xl">
                ድኳን ምንቅስቓስና ርኣዩ
              </h2>

              <p className="mt-5 leading-8 text-[#647184]">
                ቲ-ሸርት፡ ሁዲ፡ ካፕን ካልኦት ኣቑሑትን ዝርከብዎ
                ብምልክት ANM ዝተሰርሑ ኣቑሑት ርኣዩ። መልእኽትና
                ልበሱ፡ ተወፋይነትኩም ግለጹ፡ ምንቅስቓስና ኣብ
                ህዝቢ ንኽረአ ሓግዙ።
              </p>

              <Link
                href="/ti/shop"
                className="mt-8 inline-flex w-fit items-center gap-3 bg-[#c9a45c] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
              >
                ድኳን ምንቅስቓስና ርኣዩ
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="flex min-h-[280px] items-center justify-center bg-[#f8f5ed] p-8 md:min-h-[360px]">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                  Aga&apos;azian National Movement
                </p>

                <p className="mt-4 text-5xl font-black tracking-[0.3em] text-[#142b45]">
                  ANM
                </p>

                <p className="mt-3 text-sm font-semibold tracking-wider text-[#a17d3d]">
                  ኣቑሑት ምንቅስቓስ
                </p>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#647184]">
                  ኣብ ቀረባ ክቐርብ እዩ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH WHITE CLOSING SECTION */}
      <section className="w-full bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17d3d]">
            ተሳትፎኹም ኣገዳሲ እዩ
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#142b45] md:text-5xl">
            ኣብ ምህናጽ መጻኢ ኤርትራ ተሳተፉ።
          </h2>

          <button
            type="button"
            onClick={() => openForm("ሓፈሻዊ ሕቶ")}
            className="mt-8 inline-flex items-center gap-3 bg-[#c9a45c] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
          >
            ርክብ ግበሩ
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </main>
  );
}
