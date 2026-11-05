
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";

type FormSubject =
  | "General Enquiry"
  | "Joining the Movement"
  | "Volunteering";

const actions = [
  {
    number: "01",
    id: "join",
    title: "Join the Movement",
    subtitle: "Become part of the change",
    description:
      "Become part of the Aga'azian National Movement and help build a democratic, self-determined and prosperous Eritrea.",
    details: [
      "Learn about ANM's principles and vision",
      "Connect with the movement",
      "Participate in national initiatives",
    ],
    subject: "Joining the Movement" as FormSubject,
    linkText: "Join Us",
    shape: "rounded-[3rem_3rem_3rem_0.8rem]",
  },
  {
    number: "02",
    id: "volunteer",
    title: "Volunteer",
    subtitle: "Put your skills into action",
    description:
      "Contribute your time, knowledge and professional skills to advance the movement's civic, cultural and organizational work.",
    details: [
      "Communications, writing and translation",
      "Research, education and documentation",
      "Digital, creative and organizational work",
    ],
    subject: "Volunteering" as FormSubject,
    linkText: "Register as a Volunteer",
    shape: "rounded-[3rem_0.8rem_3rem_3rem]",
  },
  {
    number: "03",
    id: "contact",
    title: "Contact ANM",
    subtitle: "Start a conversation",
    description:
      "Have a question, proposal or idea? Contact the Aga'azian National Movement to share your views or discuss cooperation.",
    details: [
      "General questions and enquiries",
      "Partnership and cooperation proposals",
      "Media and organizational enquiries",
    ],
    subject: "General Enquiry" as FormSubject,
    linkText: "Contact Us",
    shape: "rounded-[0.8rem_3rem_3rem_3rem]",
  },
];

const fieldClass =
  "w-full border border-[#142b45]/20 bg-[#f8f5ed] px-4 py-3 text-sm text-[#142b45] outline-none transition focus:border-[#c9a45c]";

export default function TakeActionPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function openCard(id: string) {
    setActiveCard(id);
    setSubmitted(false);

    document.getElementById("get-involved")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function closeCard() {
    setActiveCard(null);
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#142b45] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#101d30] md:min-h-[720px]">
        <div className="absolute inset-0">
          <Image
            src="/images/take-action-hero.jpg"
            alt="The choice between continued destruction and rebuilding Eritrea"
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

          <h1 className="mt-7 text-5xl font-bold leading-tight text-white md:text-7xl">
            More of the Same
            <br />
            <span className="text-[#d5b46b]">
              Destruction by the Dictator.
            </span>
          </h1>

          <div className="mx-auto mt-8 h-1 w-24 bg-[#c9a45c]" />

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Or
            <br />
            <span className="text-[#d5b46b]">
              Build Eritrea.
            </span>
          </h2>
        </div>
      </section>

      {/* INTRODUCTION TO ACTION CARDS */}
<section className="bg-white px-6 py-14 md:py-20">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="text-4xl font-bold leading-tight text-[#142b45] md:text-6xl">
      Take Action.
    </h2>

    <div className="mx-auto mt-6 h-1 w-20 bg-[#c9a45c]" />

    <p className="mx-auto mt-6 max-w-4xl text-2xl font-semibold leading-relaxed text-[#142b45] md:text-4xl">
      Help Prepare to Fill the Vacuum in Post-Dictatorship and Build
      Eritrea&apos;s Future.
    </p>
  </div>
</section>

      {/* THREE MAIN ACTION CARDS */}
      <section
        id="get-involved"
        className="scroll-mt-8 bg-[#142b45] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <div className="mt-6 h-1 w-20 bg-[#c9a45c]" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {actions.map((action) => {
              const isFlipped = activeCard === action.id;

              return (
                <div
                  key={action.id}
                  className={`relative h-[610px] [perspective:1400px] ${action.shape}`}
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                      isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    {/* FRONT */}
                    <article
                      className={`absolute inset-0 flex flex-col overflow-hidden border border-[#c9a45c]/60 bg-white p-7 text-[#142b45] shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-9 ${action.shape} [backface-visibility:hidden]`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-bold tracking-widest text-[#a17d3d]">
                          {action.number}
                        </span>

                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a45c]/50 text-2xl font-light text-[#a17d3d]">
                          +
                        </span>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                          {action.subtitle}
                        </p>

                        <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                          {action.title}
                        </h3>

                        <div className="mt-5 h-1 w-14 bg-[#c9a45c]" />

                        <p className="mt-6 text-base leading-8 text-[#526176]">
                          {action.description}
                        </p>
                      </div>

                      <ul className="mt-5 space-y-3 border-t border-[#142b45]/10 pt-5">
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

                      <div className="relative z-20 mt-5 shrink-0 pb-2">
                        <button
                          type="button"
                          onClick={() => openCard(action.id)}
                          className="inline-flex items-center gap-3 rounded-full bg-[#c9a45c] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#142b45] shadow-md transition hover:bg-[#e0c47e] hover:shadow-lg"
                        >
                          {action.linkText}
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>

                      <div className="pointer-events-none absolute -bottom-12 -right-12 z-0 h-36 w-36 rounded-full border-[18px] border-[#c9a45c]/10" />
                    </article>

                    {/* BACK — WHITE FORM */}
                    <div
                      className={`absolute inset-0 flex flex-col overflow-hidden border-2 border-[#c9a45c] bg-white text-[#142b45] shadow-[0_20px_60px_rgba(0,0,0,0.2)] ${action.shape} [backface-visibility:hidden] [transform:rotateY(180deg)]`}
                    >
                      <div className="flex shrink-0 items-start justify-between border-b border-[#142b45]/10 px-6 py-5 md:px-8">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                            ANM Participation
                          </p>

                          <h3 className="mt-2 text-xl font-bold md:text-2xl">
                            {action.subject === "Joining the Movement"
                              ? "Join the Movement"
                              : action.subject === "Volunteering"
                                ? "Volunteer With ANM"
                                : "Contact ANM"}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={closeCard}
                          aria-label="Close form"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#142b45]/20 text-sm font-bold transition hover:bg-[#f8f5ed]"
                        >
                          ✕
                        </button>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="flex-1 space-y-5 overflow-y-auto px-6 py-6 md:px-8"
                      >
                        <p className="text-sm leading-6 text-[#142b45]/65">
                          Complete the details below. Fields marked with *
                          are required.
                        </p>

                        {/* PERSONAL DETAILS */}
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor={`${action.id}-firstName`}
                              className="mb-2 block text-xs font-semibold"
                            >
                              First Name *
                            </label>
                            <input
                              id={`${action.id}-firstName`}
                              name="firstName"
                              type="text"
                              autoComplete="given-name"
                              required
                              placeholder="First name"
                              className={fieldClass}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor={`${action.id}-lastName`}
                              className="mb-2 block text-xs font-semibold"
                            >
                              Last Name *
                            </label>
                            <input
                              id={`${action.id}-lastName`}
                              name="lastName"
                              type="text"
                              autoComplete="family-name"
                              required
                              placeholder="Last name"
                              className={fieldClass}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor={`${action.id}-email`}
                              className="mb-2 block text-xs font-semibold"
                            >
                              Email Address *
                            </label>
                            <input
                              id={`${action.id}-email`}
                              name="email"
                              type="email"
                              autoComplete="email"
                              required
                              placeholder="Your email address"
                              className={fieldClass}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor={`${action.id}-phone`}
                              className="mb-2 block text-xs font-semibold"
                            >
                              Phone Number
                            </label>
                            <input
                              id={`${action.id}-phone`}
                              name="phone"
                              type="tel"
                              autoComplete="tel"
                              placeholder="Include country code"
                              className={fieldClass}
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`${action.id}-country`}
                              className="mb-2 block text-xs font-semibold"
                            >
                              Country of Residence *
                            </label>
                            <input
                              id={`${action.id}-country`}
                              name="country"
                              type="text"
                              autoComplete="country-name"
                              required
                              placeholder="Country"
                              className={fieldClass}
                            />
                          </div>
                        </div>

                        {/* VOLUNTEER FIELDS */}
                        {action.subject === "Volunteering" && (
                          <div className="space-y-4 border-t border-[#142b45]/10 pt-5">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#a17d3d]">
                              Volunteer Information
                            </h4>

                            <div>
                              <label
                                htmlFor="skills"
                                className="mb-2 block text-xs font-semibold"
                              >
                                Skills and Areas of Expertise *
                              </label>
                              <textarea
                                id="skills"
                                name="skills"
                                required
                                rows={3}
                                placeholder="Communications, research, translation, technology, law, finance, education..."
                                className={fieldClass}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="experience"
                                className="mb-2 block text-xs font-semibold"
                              >
                                Professional or Volunteer Experience
                              </label>
                              <textarea
                                id="experience"
                                name="experience"
                                rows={2}
                                placeholder="Briefly describe your experience."
                                className={fieldClass}
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="availability"
                                className="mb-2 block text-xs font-semibold"
                              >
                                Availability *
                              </label>
                              <select
                                id="availability"
                                name="availability"
                                required
                                defaultValue=""
                                className={fieldClass}
                              >
                                <option value="" disabled>
                                  Select your availability
                                </option>
                                <option value="A few hours per week">
                                  A few hours per week
                                </option>
                                <option value="Part-time">Part-time</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Project-based">
                                  Project-based
                                </option>
                                <option value="Flexible">Flexible</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {/* MESSAGE */}
                        <div className="border-t border-[#142b45]/10 pt-5">
                          <label
                            htmlFor={`${action.id}-message`}
                            className="mb-2 block text-xs font-semibold"
                          >
                            {action.subject === "General Enquiry"
                              ? "Your Message *"
                              : "Additional Message"}
                          </label>

                          <textarea
                            id={`${action.id}-message`}
                            name="message"
                            rows={3}
                            required={action.subject === "General Enquiry"}
                            placeholder={
                              action.subject === "General Enquiry"
                                ? "Write your message or question..."
                                : "Tell us anything else you would like us to know..."
                            }
                            className={fieldClass}
                          />
                        </div>

                        {/* CONSENT */}
                        <label className="flex items-start gap-3 text-xs leading-5 text-[#142b45]/65">
                          <input
                            type="checkbox"
                            name="consent"
                            required
                            className="mt-1 accent-[#a17d3d]"
                          />
                          <span>
                            I consent to ANM using the information provided
                            to respond to my enquiry or participation request.
                          </span>
                        </label>

                        <button
                          type="submit"
                          className="w-full bg-[#c9a45c] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#142b45] transition hover:bg-[#e0c47e]"
                        >
                          {action.subject === "General Enquiry"
                            ? "Submit Enquiry"
                            : action.subject === "Joining the Movement"
                              ? "Submit Membership Interest"
                              : "Submit Volunteer Interest"}
                        </button>

                        {submitted && activeCard === action.id && (
                          <div
                            role="status"
                            className="border border-[#c9a45c] bg-[#f8f5ed] p-4 text-xs leading-6 text-[#142b45]"
                          >
                            <strong className="block">
                              The form is ready.
                            </strong>
                            Online submission has not yet been connected.
                            Your information has not been sent or stored.
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={closeCard}
                          className="w-full py-2 text-xs font-bold uppercase tracking-wider text-[#142b45]/60 transition hover:text-[#a17d3d]"
                        >
                          ← Back to opportunities
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEPARATE SUPPORT AND DONATION SECTION */}
      <section className="bg-[#142b45] px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[3rem_0.8rem_3rem_0.8rem] border border-[#c9a45c]/60 bg-white p-8 text-[#142b45] shadow-[0_20px_60px_rgba(0,0,0,0.18)] md:p-14">
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                  Strengthen the Movement
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
                  Support &amp; Donate
                </h2>

                <div className="mt-6 h-1 w-20 bg-[#c9a45c]" />

                <p className="mt-6 max-w-2xl text-base leading-8 text-[#526176]">
                  Your contribution can help finance the movement&apos;s work
                  and support its educational, cultural and organizational
                  initiatives. Every contribution helps advance our national
                  vision.
                </p>

                <ul className="mt-7 space-y-3 text-sm leading-6 text-[#142b45]/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a45c]" />
                    Contribute to ANM&apos;s organizational work
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a45c]" />
                    Support educational and cultural initiatives
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c9a45c]" />
                    Help advance the movement&apos;s national vision
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center border-t border-[#142b45]/10 pt-8 text-center md:border-l md:border-t-0 md:pl-10 md:pt-0">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c9a45c] text-4xl text-[#a17d3d]">
                  ♡
                </div>

                <p className="mt-6 text-sm font-semibold text-[#142b45]">
                  Make a contribution
                </p>

                <Link
                  href="/support-donation"
                  className="mt-6 inline-flex items-center justify-center gap-3 bg-[#c9a45c] px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
                >
                  Support &amp; Donate
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border-[30px] border-[#c9a45c]/10" />
          </div>
        </div>
      </section>

      {/* MOVEMENT SHOP */}
      <section className="bg-[#142b45] px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-white/20 bg-white md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17d3d]">
                Wear the Movement
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#142b45] md:text-4xl">
                View the Movement Shop
              </h2>

              <p className="mt-5 leading-8 text-[#647184]">
                Discover ANM-branded merchandise, including T-shirts, hoodies,
                caps and other items. Wear the message, express your commitment
                and help make the movement visible.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex w-fit items-center gap-3 bg-[#c9a45c] px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
              >
                Explore the Movement Shop
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
                  MOVEMENT MERCHANDISE
                </p>

                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#647184]">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
<section className="w-full bg-white px-6 py-20 md:py-28">
  <div className="mx-auto max-w-7xl text-center">
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a17d3d]">
      Your Participation Matters
    </p>

    <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#142b45] md:text-5xl">
      Be Part of Building the Future.
    </h2>

    <button
      type="button"
      onClick={() => openCard("contact")}
      className="mt-8 inline-flex items-center gap-3 bg-[#c9a45c] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#142b45] transition hover:bg-[#e0c47e]"
    >
      Get in Touch
      <span aria-hidden="true">→</span>
    </button>
  </div>
</section>
    </main>
  );
}
