import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import { Map } from "lucide-react";

const alliance = localFont({
  src: [
    { path: "/font/AllianceNo2-Regular.ttf", weight: "400", style: "normal" },
    { path: "/font/AllianceNo2-Bold.ttf", weight: "700", style: "normal" },
    { path: "/font/AllianceNo2-Medium.ttf", weight: "500", style: "normal" },
    { path: "/font/AllianceNo2-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/font/AllianceNo2-Light.ttf", weight: "300", style: "normal" },
  ],
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
        <main className="flex w-full relative overflow-y-auto  h-screen">
          <div className=" flex w-min bg-geo-black flex-col py-32 px-2 gap-4 items-center">
            <Link href={"/home"}>
              <Image
                width={30}
                height={30}
                className="relative bottom-20"
                src="/logo2.svg"
                alt="home"
              ></Image>
            </Link>
            <Link href={"/home"}>
              <Image
                width={40}
                height={40}
                className="bg-geo-grey rounded-lg p-2 aspect-square "
                src="/houseicon.svg"
                alt="home"
              ></Image>
            </Link>
            <Link href={"/map"}>
              <Map
                size={40}
                fill="white"
                stroke="none"
                className=" rounded-lg p-2"
              ></Map>
            </Link>
          </div>
          <div className="flex flex-1 flex-col bg-geo-black pr-4 pb-4   relative">
            <div className="flex justify-between my-3">
              <h2 className="text-white  font-semibold ">
                Petr Avenue, Irvine California
              </h2>
              <h2 className="text-white font-semibold ">
                <span className="text-geo-teal">live</span> • 2:04:23 PM [PST]
              </h2>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
