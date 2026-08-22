import { Phone } from "lucide-react";
import type { EventItem } from "@/app/data/pantheonData";

export default function ContactCard({
  contacts,
}: {
  contacts: EventItem["contacts"];
}) {
  if (!contacts?.length) return null;

  const initials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("");

  return (
    <section>
      <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-subtle">
        Coordinators
      </div>

      <div className="space-y-3">
        {contacts.map((c) => (
          <a
            key={c.phone}
            href={`tel:${c.phone.replace(/\s/g, "")}`}
            className="pantheon-card group flex items-center gap-4 px-4 py-4 transition-colors duration-300 hover:border-pantheon-purple-line"
          >
            <span
              className="
                grid size-11 shrink-0 place-items-center rounded-full
                border border-pantheon-border bg-pantheon-purple-wash
                font-display text-sm font-semibold tracking-tight text-pantheon-purple-light
                transition-colors duration-300
                group-hover:border-pantheon-purple-line group-hover:bg-pantheon-purple-dim
              "
            >
              {initials(c.name)}
            </span>

            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-[0.9375rem] font-semibold tracking-tight text-pantheon-white">
                {c.name}
              </div>
              <div className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-[0.2em] text-pantheon-subtle">
                {c.role}
              </div>
            </div>

            <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] tracking-[0.06em] text-pantheon-muted transition-colors duration-300 group-hover:text-pantheon-purple-light">
              <Phone size={11} />
              {c.phone}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
