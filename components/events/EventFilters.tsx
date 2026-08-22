"use client";

import { Search, X } from "lucide-react";
import type { EventDay, EventTier } from "@/app/data/pantheonData";

export type Filters = {
  tier: EventTier | null;
  day: EventDay | null;
  q: string;
};

const TIERS: EventTier[] = ["Flagship", "Formal", "Informal"];
const DAYS: EventDay[] = [1, 2, 3];

/** One control group: a tiny mono label followed by an inline pill rail. */
function Group<T extends string | number>({
  label,
  options,
  value,
  onChange,
  renderLabel,
}: {
  label: string;
  options: T[];
  value: T | null;
  onChange: (next: T | null) => void;
  renderLabel: (v: T) => string;
}) {
  const base = `
    relative rounded-full px-4 py-2
    font-mono text-[9px] font-bold uppercase tracking-[0.18em]
    whitespace-nowrap transition-all duration-300 ease-pantheon
  `;
  const on =
    "bg-pantheon-white text-pantheon-black shadow-[0_0_20px_-4px_var(--color-pantheon-purple)]";
  const off = "text-pantheon-muted hover:bg-white/[0.06] hover:text-pantheon-white";

  const items: (T | null)[] = [null, ...options];

  return (
    <div className="flex items-center gap-3">
      <span className="hidden shrink-0 font-mono text-[8px] uppercase tracking-[0.28em] text-pantheon-subtle lg:block">
        {label}
      </span>

      <div className="flex items-center gap-1">
        {items.map((opt) => (
          <button
            key={opt === null ? "all" : String(opt)}
            type="button"
            onClick={() => onChange(opt)}
            className={`${base} ${value === opt ? on : off}`}
          >
            {opt === null ? "All" : renderLabel(opt)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function EventFilters({
  filters,
  onChange,
  shown,
  total,
}: {
  filters: Filters;
  onChange: (next: Partial<Filters>) => void;
  shown: number;
  total: number;
}) {
  const active =
    filters.tier !== null || filters.day !== null || filters.q.trim() !== "";

  return (
    // Sits in the document flow — scrolls away with the page.
    <div className="border-b border-pantheon-border-subtle px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* ── the control bar ─────────────────────────── */}
        <div
          className="
            pantheon-card flex flex-wrap items-center gap-x-2 gap-y-3
            rounded-full px-3 py-2.5
            lg:flex-nowrap
          "
        >
          <Group
            label="Tier"
            options={TIERS}
            value={filters.tier}
            onChange={(tier) => onChange({ tier })}
            renderLabel={(t) => t}
          />

          <span
            aria-hidden
            className="mx-1 hidden h-7 w-px shrink-0 bg-pantheon-border lg:block"
          />

          <Group
            label="Day"
            options={DAYS}
            value={filters.day}
            onChange={(day) => onChange({ day })}
            renderLabel={(d) => `0${d}`}
          />

          {/* search sits inside the same rail, pushed right */}
          <div
            className="
              ml-auto flex min-w-[180px] flex-1 items-center gap-2
              rounded-full border border-pantheon-border-subtle bg-white/[0.03]
              px-4 py-2 transition-colors duration-300
              focus-within:border-pantheon-purple-line focus-within:bg-white/[0.05]
              lg:max-w-[240px] lg:flex-none
            "
          >
            <Search size={13} className="shrink-0 text-pantheon-purple-light" />
            <input
              value={filters.q}
              onChange={(e) => onChange({ q: e.target.value })}
              placeholder="SEARCH"
              className="
                w-full bg-transparent
                font-mono text-[10px] uppercase tracking-[0.15em]
                text-pantheon-white outline-none
                placeholder:text-pantheon-subtle
              "
            />
            {filters.q && (
              <button
                type="button"
                onClick={() => onChange({ q: "" })}
                aria-label="Clear search"
                className="shrink-0 text-pantheon-subtle transition-colors hover:text-pantheon-white"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* ── readout ─────────────────────────────────── */}
        <div className="mt-3 flex items-center justify-between px-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-pantheon-subtle">
            <span className="text-pantheon-purple-light">
              {String(shown).padStart(2, "0")}
            </span>
            {" / "}
            {String(total).padStart(2, "0")} Events
          </span>

          {active && (
            <button
              type="button"
              onClick={() => onChange({ tier: null, day: null, q: "" })}
              className="
                group flex items-center gap-2 rounded-full
                border border-pantheon-border px-3 py-1.5
                font-mono text-[9px] uppercase tracking-[0.2em]
                text-pantheon-muted transition-colors duration-300
                hover:border-pantheon-purple-line hover:text-pantheon-white
              "
            >
              Reset
              <X
                size={11}
                className="text-pantheon-purple-light transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
