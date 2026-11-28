
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AdminSignOut() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    setLoading(true);

    try {
      await authClient.signOut();
      router.replace("/admin/login");
      router.refresh();
    } catch {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="border border-[#c9a45c]/60 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#c9a45c] transition hover:bg-[#c9a45c] hover:text-[#142b45] disabled:opacity-50"
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
