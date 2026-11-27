
import { Suspense } from "react";
import MediaContent from "./MediaContent";

export default function MediaPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-white">
          <div className="h-96 animate-pulse bg-[#142b45]" />
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="h-8 w-64 animate-pulse bg-[#f8f5ed]" />
          </div>
        </main>
      }
    >
      <MediaContent />
    </Suspense>
  );
}
