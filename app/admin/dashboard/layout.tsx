
import { Suspense, type ReactNode } from "react";
import { requireNewsroomAdmin } from "@/lib/require-newsroom-admin";

export const instant = false;
async function ProtectedDashboard({
  children,
}: {
  children: ReactNode;
}) {
  await requireNewsroomAdmin();

  return <>{children}</>;
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f8f5ed] text-sm text-[#142b45]">
          Loading newsroom...
        </div>
      }
    >
      <ProtectedDashboard>{children}</ProtectedDashboard>
    </Suspense>
  );
}
