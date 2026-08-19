import type { Metadata } from "next";
import { PantheonAppClient } from "./components/PantheonAppClient";

export const metadata: Metadata = {
  title: "Pantheon '26 — BIT Mesra | Innovation Meets Infinity",
  description: "Official portal for Pantheon '26. Explore 35+ national technical competitions, HackQuest 2.0 36-hr hackathon, RoboWars combat robotics, speed coding, and star cultural nights.",
  keywords: ["Pantheon '26", "BIT Mesra Tech Fest", "HackQuest 2.0", "RoboWars", "Codezilla", "Ranchi", "Engineering Competitions"],
  openGraph: {
    title: "Pantheon '26 — BIT Mesra | Innovation Meets Infinity",
    description: "Annual science and technology festival of BIT Mesra, Ranchi.",
    url: "https://pantheon.shraj.workers.dev",
    siteName: "Pantheon '26",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantheon '26 — BIT Mesra",
    description: "Annual Science & Technology Festival of BIT Mesra, Ranchi.",
  },
};

export default function Home() {
  return <PantheonAppClient />;
}
