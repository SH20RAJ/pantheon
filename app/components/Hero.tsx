"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Calendar, MapPin, Trophy, ShieldAlert, Cpu } from "lucide-react";
import { FEST_DETAILS } from "../data/pantheonData";

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-10-16T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient">
      {/* Background ambient elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
        {/* Edition Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
            {FEST_DETAILS.edition} • {FEST_DETAILS.dates}
          </span>
        </div>

        {/* Main Sci-Fi Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="block text-slate-100 uppercase tracking-widest text-shadow">
              PANTHEON
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300 bg-clip-text text-transparent glow-cyan mt-1">
              '26
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            {FEST_DETAILS.tagline}
          </p>
        </div>

        {/* Institution Badge & Venue */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <Cpu className="w-4 h-4 text-purple-400" />
            {FEST_DETAILS.institution}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <MapPin className="w-4 h-4 text-amber-400" />
            Ranchi, Jharkhand
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="pt-4">
          <div className="inline-grid grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 bg-slate-950/70 border border-slate-800/80 rounded-2xl backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
            {[
              { label: "DAYS", val: timeLeft.days },
              { label: "HOURS", val: timeLeft.hours },
              { label: "MINS", val: timeLeft.minutes },
              { label: "SECS", val: timeLeft.seconds },
            ].map((t, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]">
                <span className="text-3xl sm:text-5xl font-mono font-bold bg-gradient-to-b from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  {String(t.val).padStart(2, "0")}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 mt-1">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenRegister}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 text-slate-950 font-bold text-sm sm:text-base tracking-wide flex items-center gap-2 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Register for Pantheon '26
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#events"
            className="px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:bg-slate-800"
          >
            Explore 35+ Events
          </a>
        </div>

        {/* Live Statistics Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 max-w-4xl mx-auto">
          {[
            { label: "Prizes & Grants", val: FEST_DETAILS.prizePoolTotal, icon: Trophy, color: "text-amber-400" },
            { label: "Expected Footfall", val: FEST_DETAILS.footfallTarget, icon: ShieldAlert, color: "text-cyan-400" },
            { label: "Participating Institutes", val: FEST_DETAILS.collegesExpected, icon: Calendar, color: "text-purple-400" },
            { label: "Technical Competitions", val: FEST_DETAILS.eventsCount, icon: Cpu, color: "text-pink-400" },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center space-y-1">
                <Icon className={`w-5 h-5 mx-auto ${stat.color}`} />
                <div className="text-xl sm:text-2xl font-bold text-slate-100">{stat.val}</div>
                <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
