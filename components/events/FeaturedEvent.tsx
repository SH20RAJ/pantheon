import Link from "next/link";
import { ArrowUpRight, MapPin, Trophy, Users } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";
import TierBadge from "./TierBadge";

/** Wide showcase card — used for the featured rail above the main grid. */
export default function FeaturedEvent({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="
        pantheon-card pantheon-card-interactive pantheon-card-flagship group relative flex min-h-[300px]
        flex-col justify-between overflow-hidden rounded-pantheon-lg p-8
      "
    >
      {/* static bloom — no hover transition */}
      <span
        aria-hidden
        className="
          absolute -right-20 -top-20 -z-10 size-72 rounded-full
          bg-pantheon-purple-glow blur-[80px] opacity-50
        "
      />
      <span aria-hidden className="pantheon-grid-bg absolute inset-0 -z-10 opacity-50" />

      <span
        aria-hidden
        className="
          pointer-events-none absolute right-6 top-3 -z-10 select-none
          text-[8rem] font-black leading-none tracking-tighter text-white/[0.03]
          transition-all duration-700 ease-pantheon group-hover:text-white/[0.06]
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <TierBadge tier={event.tier} />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-pantheon-purple-light">
            {event.category}
          </span>
        </div>

        <h3 className="mt-6 max-w-md text-2xl font-black uppercase leading-[1.05] tracking-[0.03em] text-pantheon-white transition-colors duration-500 group-hover:text-pantheon-purple-light md:text-3xl">
          {event.title}
        </h3>

        <p className="mt-4 max-w-md font-mono text-[10px] leading-relaxed tracking-[0.06em] text-pantheon-muted">
          {event.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-pantheon-border-subtle pt-5">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { icon: Trophy, label: "Prize", value: event.prizePool },
            { icon: Users, label: "Team", value: event.teamSize },
            { icon: MapPin, label: "Venue", value: event.venue },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="min-w-0">
              <div className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-pantheon-subtle">
                <Icon size={10} className="text-pantheon-purple-light" />
                {label}
              </div>
              <div className="mt-1.5 max-w-[13rem] truncate font-mono text-[12px] font-bold tracking-[0.03em] text-pantheon-white">
                {value}
              </div>
            </div>
          ))}
        </div>

        <span className="flex shrink-0 items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-pantheon-white">
          Explore
          <span className="grid size-8 place-items-center rounded-full border border-pantheon-border transition-all duration-500 ease-pantheon group-hover:border-pantheon-purple group-hover:bg-pantheon-purple">
            <ArrowUpRight
              size={14}
              className="text-pantheon-purple-light transition-all duration-500 group-hover:rotate-45 group-hover:text-pantheon-white"
            />
          </span>
        </span>
      </div>
    </Link>
  );
}
