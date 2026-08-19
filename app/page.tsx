"use client";

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EventExplorer } from "./components/EventExplorer";
import { EventModal } from "./components/EventModal";
import { HackQuestSection } from "./components/HackQuestSection";
import { ScheduleTimeline } from "./components/ScheduleTimeline";
import { CampusMap } from "./components/CampusMap";
import { SponsorsSection } from "./components/SponsorsSection";
import { TeamSection } from "./components/TeamSection";
import { RegistrationModal } from "./components/RegistrationModal";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { EventItem } from "./data/pantheonData";

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [registerInitialEventId, setRegisterInitialEventId] = useState<string | undefined>(undefined);

  const handleOpenRegisterForEvent = (eventId?: string) => {
    setRegisterInitialEventId(eventId);
    setRegisterModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Floating Glassmorphic Header */}
      <Navbar onOpenRegister={() => handleOpenRegisterForEvent()} />

      {/* Hero Section */}
      <Hero onOpenRegister={() => handleOpenRegisterForEvent()} />

      {/* Flagship HackQuest 2.0 Feature */}
      <HackQuestSection onRegister={() => handleOpenRegisterForEvent("hackquest-2026")} />

      {/* Event Explorer & Filterable Cards */}
      <EventExplorer
        onSelectEvent={(ev) => setSelectedEvent(ev)}
        onRegister={(eventId) => handleOpenRegisterForEvent(eventId)}
      />

      {/* Festival Schedule Itinerary */}
      <ScheduleTimeline />

      {/* BIT Mesra Campus Venue Map */}
      <CampusMap />

      {/* Sponsors & Innovation Partners */}
      <SponsorsSection />

      {/* Organizing Team & Committee */}
      <TeamSection />

      {/* FAQs Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Event Detail Rulebook Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={(eventId) => handleOpenRegisterForEvent(eventId)}
        />
      )}

      {/* Registration & Pass Generator Modal */}
      {registerModalOpen && (
        <RegistrationModal
          initialEventId={registerInitialEventId}
          onClose={() => {
            setRegisterModalOpen(false);
            setRegisterInitialEventId(undefined);
          }}
        />
      )}
    </main>
  );
}
