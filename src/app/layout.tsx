import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Wrapper from "./wrapper";

/**
 * Represents the Alliance font used in the application layout.
 *
 * @typedef {Object} AllianceFont
 * @property {Array<{ path: string, weight: string, style: string }>} src - The array of font sources.
 * @property {string} display - The CSS value for the font display property.
 * @property {string} variable - The CSS variable name for the font.
 * @property {boolean} preload - Indicates whether the font should be preloaded.
 */

/**
 * Creates an instance of the Alliance font.
 *
 * @param {AllianceFont} options - The options for creating the Alliance font.
 * @returns {void}
 */
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




/**
 * Renders the root layout of the application.
 *
 * @param children - The child components to be rendered within the layout.
 * @returns The JSX element representing the root layout.
 */
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
