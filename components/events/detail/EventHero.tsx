import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";
import TierBadge from "../TierBadge";

export default function EventHero({ event }: { event: EventItem }) {
  return (
    <section className="relative overflow-hidden border-b border-pantheon-border">
      <div aria-hidden className="pantheon-grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pantheon-bloom animate-glow pointer-events-none absolute -top-40 left-[8%] size-[34rem]"
      />
      <div
        aria-hidden
        className="pantheon-bloom animate-drift pointer-events-none absolute -bottom-48 right-[2%] size-[26rem] opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pantheon-purple-line to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-14 md:px-6">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em]">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-pantheon-muted transition-colors hover:text-pantheon-white"
          >
            <ArrowLeft
              size={12}
              className="text-pantheon-purple-light transition-transform duration-300 group-hover:-translate-x-1"
            />
            Events
          </Link>
          <span className="text-pantheon-subtle">/</span>
          <span className="text-pantheon-purple-light">{event.category}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <TierBadge tier={event.tier} />
              <span className="rounded-full border border-pantheon-border px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-pantheon-muted">
                {event.club}
              </span>
            </div>

            {/* headline — display face, tight tracking, big */}
            <h1 className="pantheon-display mt-7 text-[2.75rem] text-pantheon-white sm:text-6xl lg:text-[4.25rem]">
              {event.title}
            </h1>

            <p className="pantheon-lead mt-6">{event.subtitle}</p>
          </div>

          {/* schedule block — mono stays, as chrome */}
          <div className="lg:justify-self-end">
            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] text-pantheon-subtle">
              <Calendar size={11} className="text-pantheon-purple-light" />
              Schedule
            </div>

            <div className="mt-3 font-display text-2xl font-semibold tracking-tight text-pantheon-white">
              {event.date}
            </div>
            <div className="mt-1 font-mono text-[11px] tracking-[0.08em] text-pantheon-muted">
              {event.time}
            </div>

            <div className="mt-5 flex gap-2">
              {([1, 2, 3] as const).map((d) => {
                const on = event.days.includes(d);
                return (
                  <span
                    key={d}
                    className={`rounded-full border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] transition-colors ${
                      on
                        ? "border-pantheon-purple-line bg-pantheon-purple-dim text-pantheon-purple-light"
                        : "border-pantheon-border-subtle text-pantheon-subtle/50"
                    }`}
                  >
                    Day 0{d}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
