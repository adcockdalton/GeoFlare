import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "./wrapper";
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
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
