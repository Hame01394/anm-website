"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
};

export default function SiteShell({
  children,
  navigation,
  footer,
}: SiteShellProps) {
  const pathname = usePathname();
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

  return (
    <div className="flex min-h-screen w-full flex-col">
      {!isAdmin && navigation}

      <main className="w-full flex-1">
        {children}
      </main>

      {!isAdmin && footer}
    </div>
  );
}