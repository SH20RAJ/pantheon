'use client';

import React from 'react';
import MagicBento, { BentoCardData } from '@/components/ui/MagicBento';
import { SCHEDULE_DAYS } from '@/app/data/pantheonData';

/* ─── icon mapping by category ──────────────────────────────── */

const categoryIcon: Record<string, string> = {
  Keynote: '🎤',
  Hackathon: '💻',
  Design: '✏️',
  Coding: '⚡',
  Esports: '🎮',
  ProNite: '🎶',
  Workshop: '🔬',
  'E-Summit': '🚀',
  Robotics: '🤖',
  Cultural: '🎸',
  Aerospace: '🛩️',
  Ceremony: '🏆',
};

/* ─── accent colours per category ───────────────────────────── */

const categoryColor: Record<string, string> = {
  Keynote: '#4c1d95',
  Hackathon: '#0a0a1a',
  Design: '#0a0a1a',
  Coding: '#0a0a1a',
  Esports: '#0a0a1a',
  ProNite: '#1a0a2e',
  Workshop: '#0a0a1a',
  'E-Summit': '#0a0a1a',
  Robotics: '#0a0a1a',
  Cultural: '#1a0a2e',
  Aerospace: '#0a0a1a',
  Ceremony: '#1a0a20',
};

/* ─── component ─────────────────────────────────────────────── */

export default function DayHighlights() {
  const day1 = SCHEDULE_DAYS[0];

  /** Convert Day 1 schedule events into BentoCardData */
  const cards: BentoCardData[] = day1.events.map(ev => ({
    color: categoryColor[ev.category] || '#0a0a1a',
    title: ev.title,
    description: ev.description,
    label: ev.category,
    icon: <span>{categoryIcon[ev.category] || '📌'}</span>,
    footer: (
      <div className="flex items-center gap-3 text-[10px] font-mono opacity-50 mt-1">
        <span>{ev.time}</span>
        <span className="w-px h-3 bg-white/20" />
        <span>{ev.venue}</span>
      </div>
    ),
  }));

  return (
    <section className="relative py-24 overflow-hidden bg-black" id="day-highlights">
      {/* background bloom */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(124,58,237,0.25) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* heading */}
      <div className="relative z-10 text-center mb-12 px-4">
        <p className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-[0.25em] text-pantheon-purple-light mb-4 opacity-90">
          {day1.day} · {day1.date}
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          {day1.title}
        </h2>
        <p
          className="mt-4 text-sm text-white/50 max-w-lg mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Kick off Pantheon &apos;26 with the grand inauguration, flagship hackathon launch, competitive coding, esports qualifiers, and the opening night spectacle.
        </p>
      </div>

      {/* bento grid */}
      <div className="relative z-10 flex justify-center">
        <MagicBento
          cards={cards}
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt={false}
          enableMagnetism
          clickEffect
          glowColor="124, 58, 237"
          spotlightRadius={320}
          particleCount={10}
        />
      </div>
    </section>
  );
}

