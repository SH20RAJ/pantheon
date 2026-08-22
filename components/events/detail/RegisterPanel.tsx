import { ArrowUpRight, Check } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";

export default function RegisterPanel({ event }: { event: EventItem }) {
  return (
    <div className="pantheon-card pantheon-card-flagship sticky top-28 overflow-hidden p-7">
      <span
        aria-hidden
        className="absolute -right-16 -top-16 -z-10 size-48 rounded-full bg-pantheon-purple-glow blur-[64px]"
      />

      <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-pantheon-subtle">
        Prize Pool
      </div>
      <div className="pantheon-display mt-2 text-4xl text-pantheon-white">
        {event.prizePool}
      </div>

      <ul className="mt-6 space-y-2.5 border-t border-pantheon-border-subtle pt-6">
        {[
          "Open to all participants",
          `Team of ${event.teamSize.toLowerCase()}`,
          "Certificate on completion",
        ].map((line) => (
          <li key={line} className="flex items-start gap-2.5">
            <Check size={13} className="mt-0.5 shrink-0 text-pantheon-purple-light" />
            <span className="font-body text-[0.875rem] leading-relaxed text-white/70">
              {line}
            </span>
          </li>
        ))}
      </ul>

      {/* TODO: wire to Hexclave auth + registrations table once auth is enabled */}
      <a
        href="#register"
        className="
          group mt-7 flex items-center justify-between gap-3
          rounded-full border border-white/15 bg-pantheon-white py-3.5 pl-6 pr-3.5
          font-display text-sm font-semibold tracking-tight text-pantheon-black
          transition-colors duration-300
          hover:bg-pantheon-purple hover:text-pantheon-white
        "
      >
        <span>Register Now</span>
        <span className="grid size-8 place-items-center rounded-full bg-pantheon-black text-pantheon-white transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={15} />
        </span>
      </a>

      <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.2em] text-pantheon-subtle">
        All events open to every participant
      </p>
    </div>
  );
}
