import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Link from "next/link";
import { cn } from "@/lib/utils"
import { Home, Map } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
      <body className={cn(inter.className)}>
        <main className="h-screen flex w-full relative">
          <div className=" flex w-min bg-white flex-col py-32 px-4 gap-4">
            <Link href={"/home"}>
              <Home size={50}></Home>
            </Link>
            <Link href={"/browse"}>
              <Map size={50}></Map>
            </Link>
          </div>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
