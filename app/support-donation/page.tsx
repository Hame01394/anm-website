
"use client";

import { useState } from "react";

const amounts = ["10", "25", "50", "100", "250", "500"];

export default function SupportDonationPage() {
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
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      {/* HEADER */}
      <section className="bg-[#142b45] px-6 py-14 text-center text-white md:py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
          Aga'azian National Movement
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Support Our Movement
        </h1>

        <h2 className="mt-4 text-xl font-bold md:text-2xl">
          Be Part of the Future We Are Building
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
          Help us end the suffering under brutal dictatorship and advance
          direct democracy, economic prosperity, and cultural revival.
        </p>
      </section>

      {/* DONATION CHECKOUT */}
      <section className="px-4 pb-12 pt-6">
        <div className="mx-auto grid max-w-6xl items-start gap-5 lg:grid-cols-[1.5fr_0.8fr]">

          {/* DONOR FORM */}
          <div className="bg-white p-5 shadow-sm md:p-6">
            <h2 className="mb-5 border-b border-[#142b45]/10 pb-3 text-xl font-bold">
              Make Your Donation
            </h2>

            {/* AMOUNT */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                1. Choose Your Donation Amount (USD)
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
                Other Amount
              </button>

              {amount === "other" && (
                <div className="mt-3">
                  <label className="mb-1.5 block text-sm font-semibold">
                    Enter Amount (USD)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    placeholder="Enter your amount"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 outline-none focus:border-[#c9a45c]"
                  />
                </div>
              )}
            </div>

            {/* FREQUENCY */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                2. Donation Frequency
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
                    One-Time Donation
                  </span>
                  <span className="mt-1 block text-xs opacity-75">
                    Make a single contribution
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
                    Monthly Donation
                  </span>
                  <span className="mt-1 block text-xs opacity-75">
                    Support ANM every month
                  </span>
                </button>
              </div>
            </div>

            {/* PERSONAL DETAILS */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                3. Your Details
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    First Name *
                  </label>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    placeholder="First name"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Last Name *
                  </label>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    placeholder="Last name"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="Your email"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-semibold">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="Phone number (optional)"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-semibold">
                    City / Country *
                  </label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    placeholder="Your city or country"
                    className="w-full border border-[#142b45]/20 px-3 py-2.5 text-sm outline-none focus:border-[#c9a45c]"
                  />
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="mb-6">
              <h3 className="mb-3 text-base font-bold">
                4. Payment Method
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
                    Credit or Debit Card
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
              <label className="flex items-start gap-2 text-xs leading-5">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 accent-[#142b45]"
                />
                <span>
                  I have read and agree to the{" "}
                  <a href="/terms-of-use" className="font-semibold underline">
                    Terms of Use
                  </a>
                  .
                </span>
              </label>

              <label className="flex items-start gap-2 text-xs leading-5">
                <input
                  type="checkbox"
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-1 accent-[#142b45]"
                />
                <span>
                  I have read the{" "}
                  <a href="/privacy-policy" className="font-semibold underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="button"
              disabled={!canContinue}
              onClick={() => {
                alert(
                  "The donation form is ready for payment integration. No payment has been taken."
                );
              }}
              className="mt-5 w-full bg-[#c9a45c] px-6 py-3.5 text-sm font-bold text-[#142b45] transition hover:bg-[#b18b45] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue to Payment
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-[#142b45]/50">
              Payment processing is not yet connected. No payment will be
              taken through this demonstration form.
            </p>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="h-fit bg-[#142b45] p-5 text-white lg:sticky lg:top-28">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Your Contribution
            </p>

            <h2 className="mb-5 text-xl font-bold">
              Donation Summary
            </h2>

            <div className="space-y-3 border-b border-white/20 pb-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-white/70">Donation</span>
                <span className="font-semibold">
                  {validAmount ? `$${Number(donation).toFixed(2)}` : "—"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-white/70">Frequency</span>
                <span className="font-semibold">
                  {frequency === "monthly" ? "Monthly" : "One-time"}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-white/70">Payment</span>
                <span className="font-semibold">
                  {payment === "card" ? "Card" : "PayPal"}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="font-bold">Total</span>
              <span className="text-2xl font-bold text-[#c9a45c]">
                {validAmount ? `$${Number(donation).toFixed(2)}` : "—"}
              </span>
            </div>

            {frequency === "monthly" && (
              <p className="mb-4 text-xs text-white/60">
                This amount is selected as a monthly contribution.
              </p>
            )}

            <div className="border-t border-white/20 pt-4">
              <h3 className="mb-2 text-sm font-bold">
                Thank You for Your Support
              </h3>
              <p className="text-xs leading-6 text-white/70">
                Your support helps ANM communicate its principles,
                develop its programme, and build organisational capacity.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
