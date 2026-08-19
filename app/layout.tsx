import type { Metadata } from "next";
import { HexclaveProvider, HexclaveTheme } from "@hexclave/next";
import { hexclaveServerApp } from "./hexclave/server";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Pantheon '26 — BIT Mesra | Annual Science & Tech Festival",
  description: "Official platform for Pantheon '26, the 26th annual science & technology festival of Birla Institute of Technology (BIT), Mesra, Ranchi. Join 35+ competitions, HackQuest 2.0, RoboWars, and Star ProNites.",
  keywords: ["Pantheon 2026", "BIT Mesra", "Tech Fest", "HackQuest", "RoboWars", "Codezilla", "Ranchi", "Engineering Fest", "Birla Institute of Technology"],
  authors: [{ name: "Pantheon Technical Team, BIT Mesra" }],
  creator: "BIT Mesra Technical Society",
  publisher: "BIT Mesra",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pantheon '26 — BIT Mesra | Annual Science & Tech Festival",
    description: "Experience 35+ technical competitions, HackQuest 2.0, RoboWars, and star cultural nights at BIT Mesra.",
    url: "https://pantheon.shraj.workers.dev",
    siteName: "Pantheon '26 BIT Mesra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantheon '26 — BIT Mesra",
    description: "Annual Science & Technology Festival of BIT Mesra, Ranchi.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark scroll-smooth font-mono", jetbrainsMono.variable)}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0CYFH8FJM7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0CYFH8FJM7');
            `,
          }}
        />
      </head>
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black">
        <HexclaveProvider app={hexclaveServerApp}>
          <HexclaveTheme>
            {children}
          </HexclaveTheme>
        </HexclaveProvider>
      </body>
    </html>
  );
}
