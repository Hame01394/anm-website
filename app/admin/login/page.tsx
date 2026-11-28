
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email: email.trim(),
        password,
      });

      if (result.error) {
        setError(result.error.message || "Unable to sign in.");
        return;
      }

      router.replace("/admin/dashboard");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#142b45] px-5 py-12">
      <div className="w-full max-w-md">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a45c]">
            Aga'azian National Movement
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-white">
            Newsroom Administration
          </h1>

          <p className="mt-3 text-sm text-white/55">
            Sign in to access the ANM newsroom.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-white/10 bg-white p-8 shadow-xl"
        >
          <h2 className="mb-7 text-xl font-semibold text-[#142b45]">
            Administrator Login
          </h2>

          <label
            htmlFor="email"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            className="mb-6 w-full border border-[#142b45]/20 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
          />

          <label
            htmlFor="password"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#142b45]/65"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            className="mb-6 w-full border border-[#142b45]/20 px-4 py-3 text-sm text-[#142b45] outline-none focus:border-[#c9a45c]"
          />

          {error && (
            <div className="mb-5 border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#142b45] px-5 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#203d5d] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="mt-6 text-center text-xs text-[#142b45]/45">
            ANM Newsroom · Secure Administration
          </p>
        </form>
      </div>
    </main>
  );
}
