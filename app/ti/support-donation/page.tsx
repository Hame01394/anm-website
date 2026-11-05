"use client";

import { useState } from "react";

const amounts = ["10", "25", "50", "100", "250", "500"];

export default function SupportDonationPageTi() {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("once");
  const [payment, setPayment] = useState("card");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
  });

  const donation = amount === "other" ? customAmount : amount;
  const validAmount =
    Number(donation) > 0 && Number.isFinite(Number(donation));

  const updateField = (field: string, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const canContinue =
    validAmount &&
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.city.trim() &&
    acceptedPrivacy &&
    acceptedTerms;

  return (
    <main
      className="min-h-screen bg-[#f8f5ed] text-[#142b45]"
      style={{ fontFamily: "'Noto Sans Ethiopic', Nyala, serif" }}
    >
      {/* HEADER */}
      <section className="bg-[#142b45] px-6 py-14 text-center text-white md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
          Aga'azian National Movement
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          ንምንቅስቓስና ደግፉ
        </h1>

        <h2 className="mt-4 text-xl font-bold md:text-2xl">
          ኣብ ምህናጽ እቲ እንሃንጾ ዘለና መጻኢ ተሳተፉ
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
          ኣብ ትሕቲ ጨካን ምልኪ ዘሎ ስቓይ ንምውጋድ፡ ቀጥታዊ ደሞክራሲ፡
          ቁጠባዊ ብልጽግናን ባህላዊ ምሕዳስን ንምስፋሕ ሓግዙና።
        </p>
      </section>

      {/* DONATION CHECKOUT */}
      <section className="px-4 pb-12 pt-6">
        <div className="mx-auto grid max-w-6xl items-start gap-5 lg:grid-cols-[1.5fr_0.8fr]">

          {/* DONOR FORM */}
          <div className="bg-white p-5 shadow-sm md:p-6">
            <h2 className="mb-5 border-b border-[#142b45]/10 pb-3 text-xl font-bold">
              ወፈያኻ ግበር
            </h2>

            {/* AMOUNT */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                1. መጠን ወፈያኻ ምረጽ (USD)
              </h3>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {amounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(value)}
                    className={`border px-3 py-2.5 text-base font-bold transition ${
                      amount === value
                        ? "border-[#142b45] bg-[#142b45] text-white"
                        : "border-[#142b45]/20 hover:border-[#c9a45c]"
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setAmount("other")}
                className={`mt-2 w-full border px-3 py-2.5 text-sm font-semibold transition ${
                  amount === "other"
                    ? "border-[#142b45] bg-[#142b45] text-white"
                    : "border-[#142b45]/20 hover:border-[#c9a45c]"
                }`}
              >
                ካልእ መጠን
              </button>

              {amount === "other" && (
                <div className="mt-3">
                  <label className="mb-1.5 block text-sm font-semibold">
                    መጠን ወፈያ ኣእቱ (USD)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    placeholder="መጠን ወፈያ ኣእቱ"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 outline-none focus:border-[#c9a45c]"
                  />
                </div>
              )}
            </div>

            {/* FREQUENCY */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                2. ድግግሞሽ ወፈያ
              </h3>

              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setFrequency("once")}
                  className={`border p-3 text-left transition ${
                    frequency === "once"
                      ? "border-[#142b45] bg-[#142b45] text-white"
                      : "border-[#142b45]/20 hover:border-[#c9a45c]"
                  }`}
                >
                  <span className="block text-sm font-bold">
                    ሓንሳብ ጥራይ ወፈያ
                  </span>
                  <span className="mt-1 block text-xs opacity-75">
                    ሓደ ግዜ ወፈያ ግበር
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`border p-3 text-left transition ${
                    frequency === "monthly"
                      ? "border-[#142b45] bg-[#142b45] text-white"
                      : "border-[#142b45]/20 hover:border-[#c9a45c]"
                  }`}
                >
                  <span className="block text-sm font-bold">
                    ወርሓዊ ወፈያ
                  </span>
                  <span className="mt-1 block text-xs opacity-75">
                    ንANM ኣብ ነፍሲ ወከፍ ወርሒ ደግፍ
                  </span>
                </button>
              </div>
            </div>

            {/* PERSONAL DETAILS */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                3. ውልቃዊ ሓበሬታኻ
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    ስም *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    placeholder="ስም"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    ናይ ኣቦ ስም *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    placeholder="ናይ ኣቦ ስም"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    ኢመይል ኣድራሻ *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="ኢመይልካ"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    ቁጽሪ ተሌፎን (ኣማራጺ)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="ቁጽሪ ተሌፎን (ኣማራጺ)"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold">
                    ከተማ / ሃገር *
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="ከተማኻ ወይ ሃገርካ"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                4. ኣገባብ ክፍሊት
              </h3>

              <div className="grid gap-2 sm:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 border border-[#142b45]/20 p-3 text-sm hover:border-[#c9a45c]">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "card"}
                    onChange={() => setPayment("card")}
                    className="accent-[#142b45]"
                  />
                  <span className="font-semibold">
                    ክሬዲት ወይ ዴቢት ካርድ
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 border border-[#142b45]/20 p-3 text-sm hover:border-[#c9a45c]">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "paypal"}
                    onChange={() => setPayment("paypal")}
                    className="accent-[#142b45]"
                  />
                  <span className="font-semibold">PayPal</span>
                </label>
              </div>
            </div>

            {/* TERMS */}
            <div className="space-y-3 border-t border-[#142b45]/10 pt-4">
              <label className="flex items-start gap-2 text-xs leading-6">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 accent-[#142b45]"
                />
                <span>
                  ኣንቢበ ኣብ{" "}
                  <a href="/ti/terms-of-use" className="font-semibold underline">
                    ውዕላት ኣጠቓቕማ
                  </a>{" "}
                  እሰማማዕ።
                </span>
              </label>

              <label className="flex items-start gap-2 text-xs leading-6">
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1 accent-[#142b45]"
                />
                <span>
                  ነቲ{" "}
                  <a href="/ti/privacy-policy" className="font-semibold underline">
                    ናይ ምስጢራዊነት ፖሊሲ
                  </a>{" "}
                  ኣንቢበዮ ኣለኹ።
                </span>
              </label>
            </div>

            <button
              type="button"
              disabled={!canContinue}
              onClick={() => {
                alert(
                  "እቲ ቅጥዒ ምስ ስርዓት ክፍሊት ንምትእስሳር ድሉው እዩ። ክፍሊት ኣይተፈጸመን።"
                );
              }}
              className="mt-5 w-full bg-[#c9a45c] px-6 py-3.5 text-sm font-bold text-[#142b45] transition hover:bg-[#b18b45] disabled:cursor-not-allowed disabled:opacity-40"
            >
              ናብ ክፍሊት ቀጽል
            </button>

            <p className="mt-3 text-center text-xs leading-6 text-[#142b45]/50">
              ስርዓት መስርሕ ክፍሊት ገና ኣይተኣሳሰረን። በዚ መርኣያ ቅጥዒ
              ክፍሊት ኣይክፍጸምን እዩ።
            </p>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="h-fit bg-[#142b45] p-5 text-white lg:sticky lg:top-28">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              ወፈያኻ
            </p>

            <h2 className="mb-5 text-xl font-bold">
              ጽማቕ ወፈያ
            </h2>

            <div className="space-y-3 border-b border-white/20 pb-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-white/70">ወፈያ</span>
                <span className="font-semibold">
                  {validAmount ? `$${Number(donation).toFixed(2)}` : "—"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-white/70">ድግግሞሽ</span>
                <span className="font-semibold">
                  {frequency === "monthly" ? "ወርሓዊ" : "ሓንሳብ"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-white/70">ክፍሊት</span>
                <span className="font-semibold">
                  {payment === "card" ? "ካርድ" : "PayPal"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="font-bold">ጠቕላላ</span>
              <span className="text-2xl font-bold text-[#c9a45c]">
                {validAmount ? `$${Number(donation).toFixed(2)}` : "—"}
              </span>
            </div>

            {frequency === "monthly" && (
              <p className="mb-4 text-xs leading-6 text-white/60">
                እዚ መጠን እዚ ከም ወርሓዊ ወፈያ ተመሪጹ ኣሎ።
              </p>
            )}

            <div className="border-t border-white/20 pt-4">
              <h3 className="mb-2 text-sm font-bold">
                ስለ ደገፍካ ነመስግነካ
              </h3>
              <p className="text-xs leading-6 text-white/70">
                ደገፍካ ንANM መትከላቱ ንምስፋሕ፡ መደባቱ ንምምዕባልን
                ውዳበኣዊ ዓቕሙ ንምህናጽን ይሕግዞ።
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}