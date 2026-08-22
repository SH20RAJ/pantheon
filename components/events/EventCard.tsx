import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, Trophy, Users } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";
import TierBadge from "./TierBadge";

const CATEGORY_INDEX: Record<EventItem["category"], string> = {
  hackathon: "01",
  robotics: "02",
  coding: "03",
  esummit: "04",
  gaming: "05",
  workshops: "06",
};

export default function EventCard({
  event,
  index = 0,
}: {
  event: EventItem;
  index?: number;
}) {
  const isFlagship = event.tier === "Flagship";

  return (
    <Link
      href={`/events/${event.slug}`}
      className={`
        pantheon-card pantheon-card-interactive group relative flex flex-col overflow-hidden
        ${isFlagship ? "pantheon-card-flagship" : ""}
      `}
    >
      {/* hover bloom, clipped by the rounded surface */}
      <span
        aria-hidden
        className="
          absolute -left-16 -top-16 -z-10 size-52 rounded-full
          bg-pantheon-purple-glow blur-[64px]
          opacity-0 transition-opacity duration-700 ease-pantheon
          group-hover:opacity-100
        "
      />

      <span aria-hidden className="pantheon-sheen absolute inset-0 z-10 overflow-hidden" />

      {/* ghost numeral */}
      <span
        aria-hidden
        className="
          pointer-events-none absolute -right-2 top-16 -z-10 select-none
          text-[6.5rem] font-black leading-none tracking-tighter
          text-white/[0.025] transition-all duration-700 ease-pantheon
          group-hover:text-white/[0.055] group-hover:-translate-y-1
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* ── header ──────────────────────────────────── */}
      <div className="flex items-center justify-between gap-3 px-6 pt-5 pb-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-pantheon-subtle transition-colors duration-500 group-hover:text-pantheon-purple-light">
          {CATEGORY_INDEX[event.category]} / {event.category}
        </span>
        <TierBadge tier={event.tier} />
      </div>

      {/* ── body ────────────────────────────────────── */}
      <div className="relative flex flex-1 flex-col px-6 pb-6">
        <h3 className="text-[19px] font-black uppercase leading-[1.15] tracking-[0.04em] text-pantheon-white transition-colors duration-500 group-hover:text-pantheon-purple-light">
          {event.title}
        </h3>

        <span className="mt-4 block h-px w-10 rounded-full bg-pantheon-purple-line transition-all duration-600 ease-pantheon group-hover:w-20" />

        <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-pantheon-muted">
          {event.subtitle}
        </p>

        {/* prize / team — soft inset panel */}
        <div
          className="
            mt-6 grid grid-cols-2 overflow-hidden rounded-pantheon-sm
            border border-pantheon-border-subtle bg-white/[0.02]
            transition-colors duration-500
            group-hover:border-pantheon-purple-line/40
          "
        >
          <div className="border-r border-pantheon-border-subtle px-4 py-3.5">
            <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-pantheon-subtle">
              <Trophy size={10} className="text-pantheon-purple-light" />
              Prize
            </div>
            <div className="mt-1.5 font-mono text-[12px] font-bold tracking-[0.03em] text-pantheon-white">
              {event.prizePool}
            </div>
          </div>

          <div className="px-4 py-3.5">
            <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-pantheon-subtle">
              <Users size={10} className="text-pantheon-purple-light" />
              Team
            </div>
            <div className="mt-1.5 font-mono text-[12px] font-bold tracking-[0.03em] text-pantheon-white">
              {event.teamSize}
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-2.5 pt-6">
          <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-pantheon-subtle">
            <MapPin size={11} className="shrink-0 text-pantheon-purple-light" />
            <span className="truncate">{event.venue}</span>
          </div>
          <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-pantheon-subtle">
            <Clock size={11} className="shrink-0 text-pantheon-purple-light" />
            <span className="truncate">{event.time}</span>
          </div>
        </div>

        {/* day pips */}
        <div className="mt-5 flex gap-1.5">
          {([1, 2, 3] as const).map((d) => {
            const on = event.days.includes(d);
            return (
              <span
                key={d}
                title={`Day ${d}`}
                className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                  on ? "bg-pantheon-purple" : "bg-white/[0.06]"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* ── footer ──────────────────────────────────── */}
      <div className="flex items-center justify-between gap-3 border-t border-pantheon-border-subtle px-6 py-4 transition-colors duration-500 group-hover:border-pantheon-purple-line/30">
        <span className="truncate font-mono text-[9px] uppercase tracking-[0.15em] text-pantheon-muted">
          {event.club}
        </span>
        <span className="flex shrink-0 items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-pantheon-white">
          View
          <span className="grid size-6 place-items-center rounded-full border border-pantheon-border transition-all duration-500 ease-pantheon group-hover:border-pantheon-purple group-hover:bg-pantheon-purple">
            <ArrowUpRight
              size={12}
              className="text-pantheon-purple-light transition-all duration-500 group-hover:rotate-45 group-hover:text-pantheon-white"
            />
          </span>
        </span>
      </div>
    </Link>
  );
}
