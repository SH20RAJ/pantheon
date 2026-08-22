import { Suspense } from "react";
import type { Metadata } from "next";
import { EVENTS_DATA } from "@/app/data/pantheonData";
import EventsHero from "@/components/events/EventsHero";
import EventExplorer from "@/components/events/EventExplorer";
import TopScrim from "@/components/layout/TopScrim";

export const metadata: Metadata = {
  title: "Events — Pantheon '26 | BIT Mesra",
  description:
    "Browse every competition at Pantheon '26 — HackQuest 2.0, RoboWars, Codezilla, Inventor's Forge and more, across three days at BIT Mesra, Ranchi.",
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-pantheon-black text-pantheon-white">
      <TopScrim />
      <EventsHero />

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <EventExplorer events={EVENTS_DATA} />
      </Suspense>
    </main>
  );
}
