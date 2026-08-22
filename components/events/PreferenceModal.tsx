"use client";

import { useEffect, useState } from "react";
import { Sparkles, X, ArrowUpRight } from "lucide-react";
import {
  INTEREST_TAGS,
  INTEREST_LABELS,
  type InterestTag,
} from "@/app/data/pantheonData";
import type { Preferences } from "@/lib/preferences/store";

const TEAM_OPTIONS: { label: string; min: number; max: number }[] = [
  { label: "Solo", min: 1, max: 1 },
  { label: "Pair", min: 2, max: 2 },
  { label: "Small · 3-4", min: 3, max: 4 },
  { label: "Large · 5+", min: 5, max: 8 },
  { label: "Any", min: 1, max: 99 },
];

/**
 * Dumb form — props in, callbacks out. It has no idea WHY it was opened,
 * which is what makes the trigger relocatable (page load today, post-login
 * later) without touching this file.
 */
export default function PreferenceModal({
  open,
  initial,
  onSave,
  onSkip,
}: {
  open: boolean;
  initial: Preferences | null;
  onSave: (prefs: Preferences) => void;
  onSkip: () => void;
}) {
  const [interests, setInterests] = useState<InterestTag[]>(
    initial?.interests ?? []
  );
  const [team, setTeam] = useState(() => {
    if (!initial) return TEAM_OPTIONS[4];
    return (
      TEAM_OPTIONS.find(
        (o) => o.min === initial.teamMin && o.max === initial.teamMax
      ) ?? TEAM_OPTIONS[4]
    );
  });

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onSkip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onSkip]);

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const toggle = (tag: InterestTag) =>
    setInterests((cur) =>
      cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]
    );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prefs-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onSkip}
      />

      <div className="pantheon-card relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto p-7 md:p-9">
        <button
          type="button"
          onClick={onSkip}
          aria-label="Skip personalisation"
          className="absolute right-5 top-5 grid size-8 place-items-center rounded-full border border-pantheon-border text-pantheon-subtle transition-colors hover:border-pantheon-purple-line hover:text-pantheon-white"
        >
          <X size={14} />
        </button>

        <div className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-purple-light">
          <Sparkles size={12} />
          Personalise
        </div>

        <h2
          id="prefs-title"
          className="mt-4 text-2xl font-black uppercase tracking-[0.03em] text-pantheon-white md:text-3xl"
        >
          Find your events
        </h2>
        <p className="mt-3 max-w-md font-mono text-[10px] leading-relaxed tracking-[0.06em] text-pantheon-muted">
          Pick what you&apos;re into and how you like to compete. We&apos;ll put
          the closest matches first — nothing gets hidden.
        </p>

        {/* ── interests ─────────────────────────────── */}
        <div className="mt-8">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-subtle">
              01 / Interests
            </span>
            <span className="font-mono text-[9px] tracking-[0.15em] text-pantheon-purple-light">
              {String(interests.length).padStart(2, "0")} selected
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {INTEREST_TAGS.map((tag) => {
              const on = interests.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggle(tag)}
                  aria-pressed={on}
                  className={`
                    rounded-full border px-3.5 py-2
                    font-mono text-[9px] uppercase tracking-[0.16em]
                    transition-colors duration-200
                    ${
                      on
                        ? "border-pantheon-purple-line bg-pantheon-purple-dim text-pantheon-purple-light"
                        : "border-pantheon-border-subtle text-pantheon-subtle hover:border-pantheon-border hover:text-pantheon-white"
                    }
                  `}
                >
                  {INTEREST_LABELS[tag]}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── team size ─────────────────────────────── */}
        <div className="mt-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-subtle">
            02 / Team size
          </span>

          <div className="mt-4 flex flex-wrap gap-2">
            {TEAM_OPTIONS.map((opt) => {
              const on = opt.label === team.label;
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setTeam(opt)}
                  aria-pressed={on}
                  className={`
                    rounded-full border px-4 py-2
                    font-mono text-[9px] font-bold uppercase tracking-[0.18em]
                    transition-colors duration-200
                    ${
                      on
                        ? "border-transparent bg-pantheon-white text-pantheon-black"
                        : "border-pantheon-border-subtle text-pantheon-subtle hover:border-pantheon-border hover:text-pantheon-white"
                    }
                  `}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── actions ───────────────────────────────── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-pantheon-border-subtle pt-6">
          <button
            type="button"
            onClick={onSkip}
            className="font-mono text-[9px] uppercase tracking-[0.22em] text-pantheon-subtle transition-colors hover:text-pantheon-white"
          >
            Skip for now
          </button>

          <button
            type="button"
            disabled={interests.length === 0}
            onClick={() =>
              onSave({ interests, teamMin: team.min, teamMax: team.max })
            }
            className="
              group flex items-center gap-3 rounded-full border border-white/15
              bg-pantheon-white py-3 pl-6 pr-3
              font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pantheon-black
              transition-colors duration-300
              hover:bg-pantheon-purple hover:text-pantheon-white
              disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-pantheon-white disabled:hover:text-pantheon-black
            "
          >
            Show my events
            <span className="grid size-7 place-items-center rounded-full bg-pantheon-black text-pantheon-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={13} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
