"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Info, ExternalLink } from "lucide-react";
import { VENUES_DATA, VenueItem } from "../data/pantheonData";

export const CampusMap: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<VenueItem>(VENUES_DATA[0]);

  return (
    <section id="map" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 text-amber-400 border border-amber-800 text-xs font-semibold uppercase tracking-wider">
          <Navigation className="w-3.5 h-3.5" /> Campus Guide
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          BIT Mesra Venue Map & Locations
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Locate event halls, research complexes, combat arenas, and open-air theatres across the BIT Mesra campus.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Interactive Campus Map Visualizer */}
        <div className="lg:col-span-2 relative aspect-[16/10] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          {/* Map Title Header */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-widest bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
              BIT MESRA CAMPUS MAP OVERLAY
            </span>
            <span className="text-xs text-cyan-400 font-medium">Click markers for details</span>
          </div>

          {/* Interactive Venue Pins */}
          <div className="relative w-full h-full min-h-[300px]">
            {VENUES_DATA.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setSelectedVenue(venue)}
                style={{ top: `${venue.coordinates.y}%`, left: `${venue.coordinates.x}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                  selectedVenue.id === venue.id ? "z-30 scale-125" : "z-10 hover:scale-110"
                }`}
              >
                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
                      selectedVenue.id === venue.id
                        ? "bg-cyan-400 text-slate-950 shadow-cyan-500/50 ring-4 ring-cyan-400/30"
                        : "bg-slate-900 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-950"
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/90 text-slate-200 border border-slate-800 whitespace-nowrap">
                    {venue.code}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Map Footer Legend */}
          <div className="relative z-10 text-[10px] text-slate-400 font-mono flex items-center justify-between">
            <span>RANCHI, JHARKHAND • 835215</span>
            <span>LAT: 23.4124° N, LONG: 85.4399° E</span>
          </div>
        </div>

        {/* Selected Venue Details Card */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800">
              {selectedVenue.code}
            </span>
            <h3 className="text-2xl font-bold text-slate-100">{selectedVenue.name}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedVenue.description}</p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Events Hosted at this Venue</h4>
            <div className="flex flex-wrap gap-2">
              {selectedVenue.eventsHosted.map((ev, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-950 text-purple-300 border border-purple-800/40"
                >
                  {ev}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <a
              href="https://www.bitmesra.ac.in"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Get Directions via Google Maps
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
