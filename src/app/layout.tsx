import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Image from "next/image";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'GeoFlare',
  description: 'Wildfire fighting tool powered by AI.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={cn(inter.className)}>
          <main className="h-screen flex w-full relative">
                <div className="flex gap-2 absolute left-4 top-8 items-center">
                  <Image
                    src={"/logo.svg"}
                    width={60}
                    alt="geoflare logo"
                    height={60}
                    className=""
                  />
                  <h1 className="text-2xl font-extrabold">GeoFlare</h1>
                </div>
                <div className=" flex w-1/6 bg-white flex-col py-32 px-4 gap-4">
                </div>
           
            <div className="flex-1 py-8 pr-8">{children}</div>
          </main>
        </body>

    </html>
  );
}
