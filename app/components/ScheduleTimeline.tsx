"use client";

import React, { useState } from "react";
import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { SCHEDULE_DAYS } from "../data/pantheonData";

export const ScheduleTimeline: React.FC = () => {
  const [activeDayIdx, setActiveDayIdx] = useState<number>(0);
  const currentDay = SCHEDULE_DAYS[activeDayIdx];

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-400 border border-purple-800 text-xs font-semibold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" /> Festival Itinerary
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          3 Days of Innovation & Passion
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore the full schedule from morning technical competitions to star-studded night events across BIT Mesra campus venues.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex justify-center items-center gap-3">
        {SCHEDULE_DAYS.map((day, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDayIdx(idx)}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeDayIdx === idx
                ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            <div>{day.day}</div>
            <div className="text-[10px] opacity-80 font-normal">{day.date}</div>
          </button>
        ))}
      </div>

      {/* Day Subtitle */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-cyan-300">{currentDay.title}</h3>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-8">
        {currentDay.events.map((ev) => (
          <div key={ev.id} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all"></div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded-lg border border-amber-800/40">
                  <Clock className="w-3.5 h-3.5" />
                  {ev.time}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                    {ev.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    {ev.venue}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {ev.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ev.description}</p>
              </div>

              <div className="text-[10px] text-slate-400 font-medium">
                Organized by: <span className="text-slate-300 font-semibold">{ev.organizer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
