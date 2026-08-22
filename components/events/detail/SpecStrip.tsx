import { Trophy, Users, MapPin, Clock } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";

export default function SpecStrip({ event }: { event: EventItem }) {
  const specs = [
    { icon: Trophy, label: "Prize Pool", value: event.prizePool, accent: true },
    { icon: Users, label: "Team Size", value: event.teamSize, accent: false },
    { icon: MapPin, label: "Venue", value: event.venue, accent: false },
    { icon: Clock, label: "Duration", value: event.time, accent: false },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {specs.map(({ icon: Icon, label, value, accent }) => (
        <div key={label} className="pantheon-card group px-5 py-5">
          <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] text-pantheon-subtle">
            <Icon size={11} className="text-pantheon-purple-light" />
            {label}
          </div>

          <div
            className={`mt-3 font-display text-lg font-semibold leading-snug tracking-tight ${
              accent ? "text-pantheon-purple-light" : "text-pantheon-white"
            }`}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
