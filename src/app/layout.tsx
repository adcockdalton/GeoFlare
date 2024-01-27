import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Home, Map } from "lucide-react";

const alliance = localFont({
  src: "/font/AllianceNo1-Regular.ttf",
  display: "swap",
  variable: "--font-alliance",
  preload: true,
});

export const metadata: Metadata = {
  title: "GeoFlare",
  description: "Wildfire fighting tool powered by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alliance.className}>
        <main className="h-screen flex w-full relative">
          <div className=" flex w-min bg-geo-black flex-col py-32 px-2 gap-4 items-center">
            <Link href={"/home"}>
              <Home
                size={40}
                fill="white"
                stroke="none"
                className="bg-geo-light rounded-lg p-1"
              ></Home>
            </Link>
            <Link href={"/browse"}>
              <Map
                size={40}
                fill="white"
                stroke="none"
                className="bg-geo-light rounded-lg p-1"
              ></Map>
            </Link>
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
