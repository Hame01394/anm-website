import Image from "next/image";
import Link from "next/link";
import { OrganizationUnit } from "./structureData";

type Props = {
  item: OrganizationUnit;
  backPath: string;
  backLabel: string;
};

export default function OrganizationProfile({
  item,
  backPath,
  backLabel,
}: Props) {
  const hasImage = Boolean(item.head.image);

  return (
    <main className="min-h-screen bg-[#f8f5ed] text-[#142b45]">
      <section className="bg-[#142b45] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href={backPath}
            className="mb-8 inline-flex text-sm text-[#d4b574] hover:text-white"
          >
            ← Back to {backLabel}
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#c9a45c]">
            Aga'azian National Movement
          </p>

          <h1 className="max-w-4xl text-3xl font-extrabold sm:text-5xl">
            {item.name}
          </h1>

          <div className="my-6 h-1 w-16 bg-[#c9a45c]" />

          <p className="max-w-3xl leading-8 text-white/75">
            {item.shortDescription}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[350px_1fr]">
          <aside>
            <div className="overflow-hidden border border-[#e5e1d8] bg-white">
              <div className="relative aspect-[4/5] bg-[#e9e5dc]">
                {hasImage ? (
                  <Image
                    src={item.head.image!}
                    alt={item.head.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 350px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-[#87909b]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c9a45c]">
                      <span className="text-4xl">ANM</span>
                    </div>
                    <span className="text-sm font-semibold">
                      Leadership photograph
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#a77d32]">
                  Department / Committee / Branch Head
                </p>

                <h2 className="mt-3 text-xl font-extrabold">
                  {item.head.name}
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#9b762e]">
                  {item.head.position}
                </p>

                {item.head.name === "To be appointed" && (
                  <p className="mt-4 border-t border-[#eeeae2] pt-4 text-xs leading-6 text-[#7a8490]">
                    This position has not yet been publicly appointed.
                  </p>
                )}
              </div>
            </div>
          </aside>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a77d32]">
              About this organization
            </p>

            <h2 className="mt-3 text-3xl font-extrabold">
              Mandate and Responsibilities
            </h2>

            <p className="mt-5 text-base leading-8 text-[#526174]">
              {item.head.bio}
            </p>

            <div className="mt-10 border-t border-[#ded9ce] pt-8">
              <h3 className="text-xl font-extrabold">
                Main Responsibilities
              </h3>

              <div className="mt-6 space-y-5">
                {item.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-none items-center justify-center bg-[#142b45] text-xs font-bold text-[#c9a45c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-7 text-[#526174]">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 border-l-4 border-[#c9a45c] bg-white p-6">
              <h3 className="font-extrabold">Organizational Role</h3>
              <p className="mt-2 text-sm leading-7 text-[#647184]">
                This unit operates within the Aga'azian National Movement's
                organizational framework and coordinates its work with the
                relevant national leadership structures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}