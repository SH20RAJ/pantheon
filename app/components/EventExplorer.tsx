"use client";

import React, { useState } from "react";
import { Search, Trophy, Users, Calendar, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { EVENTS_DATA, EventItem } from "../data/pantheonData";

interface EventExplorerProps {
  onSelectEvent: (event: EventItem) => void;
  onRegister: (eventId: string) => void;
}

export const EventExplorer: React.FC<EventExplorerProps> = ({ onSelectEvent, onRegister }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Events" },
    { id: "hackathon", label: "Hackathons" },
    { id: "robotics", label: "Robotics" },
    { id: "coding", label: "Coding" },
    { id: "esummit", label: "E-Summit" },
    { id: "gaming", label: "Gaming" },
    { id: "workshops", label: "Workshops" },
  ];

  const filteredEvents = EVENTS_DATA.filter((event) => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.club.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Competition Arena
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Explore Pantheon '26 Events
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          From high-powered combat robotics to 36-hour hackathons and algorithmic sprints, showcase your skills across 35+ national competitions.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950/70 p-3 rounded-2xl border border-slate-800/80 backdrop-blur-xl">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search events, clubs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="group relative flex flex-col justify-between p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
          >
            {/* Featured Badge */}
            {event.featured && (
              <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/10 text-amber-400 border border-amber-400/30">
                Flagship
              </span>
            )}

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                  {event.club}
                </span>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{event.subtitle}</p>
              </div>

              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {event.description}
              </p>

              {/* Event Metadata */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/60 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Trophy className="w-3.5 h-3.5" />
                  {event.prizePool}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Users className="w-3.5 h-3.5 text-cyan-400" />
                  {event.teamSize}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 col-span-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {event.venue}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
              <button
                onClick={() => onSelectEvent(event)}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
              >
                Rulebook & Details
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
              <button
                onClick={() => onRegister(event.id)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all"
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
