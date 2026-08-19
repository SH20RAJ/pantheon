import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pantheon '26 — BIT Mesra | Annual Science & Tech Festival",
  description: "Official platform for Pantheon '26, the 26th annual science & technology festival of Birla Institute of Technology (BIT), Mesra, Ranchi. Join 35+ competitions, HackQuest 2.0, RoboWars, and Star ProNites.",
  keywords: ["Pantheon 2026", "BIT Mesra", "Tech Fest", "HackQuest", "RoboWars", "Codezilla", "Ranchi", "Engineering Fest"],
  authors: [{ name: "Pantheon Technical Team, BIT Mesra" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
