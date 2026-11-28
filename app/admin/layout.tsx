import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom Administration | ANM",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full bg-[#f8f5ed] text-[#142b45]">
      {children}
    </div>
  );
}