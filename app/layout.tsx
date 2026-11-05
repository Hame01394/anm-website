
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  variable: "--font-noto-ethiopic",
  subsets: ["ethiopic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aga'azian National Movement | ANM",
    template: "%s | Aga'azian National Movement",
  },
  description:
    "Official website of the Aga'azian National Movement (ANM), committed to freedom, democracy, equality, justice, and a prosperous Eritrea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansEthiopic.variable}`}
    >
      <body className="min-h-screen w-full flex flex-col">
        <Navigation />

        <main className="flex-1 w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
