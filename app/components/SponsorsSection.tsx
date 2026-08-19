"use client";

import React from "react";
import { Award, Sparkles } from "lucide-react";
import { SPONSORS_DATA } from "../data/pantheonData";

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" /> Innovation Partners
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Supported by Global Tech Leaders
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Pantheon '26 is powered by industry innovators driving cutting-edge edge cloud, AI, and developer tools.
        </p>
      </div>

      {/* Tiered Sponsor Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {SPONSORS_DATA.map((sp) => (
          <div
            key={sp.id}
            className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-3 shadow-lg"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-950 text-cyan-400 border border-slate-800">
              {sp.tier}
            </span>
            <div className="text-xl font-extrabold tracking-wider text-slate-200 group-hover:text-cyan-300 font-mono">
              {sp.logoText}
            </div>
            <span className="text-[10px] text-slate-400 font-medium">{sp.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
