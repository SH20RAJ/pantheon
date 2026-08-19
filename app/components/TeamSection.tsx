"use client";

import React from "react";
import { Users, Mail } from "lucide-react";
import { TEAM_DATA } from "../data/pantheonData";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 text-purple-400 border border-purple-800 text-xs font-semibold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" /> Leadership & Organizers
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Organizing Committee
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Meet the student leaders, club presidents, and faculty coordinators powering Pantheon '26.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAM_DATA.map((m, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex items-center gap-4 shadow-lg"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-slate-950 font-bold text-lg font-mono shrink-0">
              {m.imageInitials}
            </div>
            <div className="space-y-1 overflow-hidden">
              <h3 className="text-base font-bold text-slate-100 truncate">{m.name}</h3>
              <p className="text-xs font-semibold text-cyan-400">{m.role}</p>
              <p className="text-[10px] text-slate-400 font-medium">{m.clubOrDept}</p>
              <a
                href={`mailto:${m.email}`}
                className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors pt-1 truncate"
              >
                <Mail className="w-3 h-3 text-purple-400 shrink-0" />
                <span className="truncate">{m.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
