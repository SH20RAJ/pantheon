"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { EventExplorer } from "./EventExplorer";
import { EventModal } from "./EventModal";
import { HackQuestSection } from "./HackQuestSection";
import { ScheduleTimeline } from "./ScheduleTimeline";
import { CampusMap } from "./CampusMap";
import { SponsorsSection } from "./SponsorsSection";
import { TeamSection } from "./TeamSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
import { RegistrationModal } from "./RegistrationModal";
import { EventItem } from "../data/pantheonData";

export const PantheonAppClient: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const [registerInitialEventId, setRegisterInitialEventId] = useState<string | undefined>(undefined);

  const handleOpenRegisterForEvent = (eventId?: string) => {
    setRegisterInitialEventId(eventId);
    setRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
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
    </div>
  );
};
