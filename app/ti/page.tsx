
import { NewsMediaTi } from "../components/NewsMediaTi";
import FutureVisionTi from "../components/FutureVisionTi";
import NationalStruggleTi from "../components/NationalStruggleTi";
import VisionPillarsTi from "../components/VisionPillarsTi";

export default function TigrinyaHomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      <section className="bg-[#142b45] px-5 py-24 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#d5b46b]">
            ምንቅስቓስ ሃገራዊ ኣጋኣዝያን
          </p>

          <h1
            className="text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Noto Sans Ethiopic', Nyala, serif",
            }}
          >
            ኤርትራ ሎሚ።
            <span className="mt-3 block text-[#d5b46b]">
              ኤርትራ ጽባሕ።
            </span>
          </h1>
        </div>
      </section>

      <VisionPillarsTi />
      <NationalStruggleTi />
      <FutureVisionTi />
      <NewsMediaTi />
    </main>
  );
}
