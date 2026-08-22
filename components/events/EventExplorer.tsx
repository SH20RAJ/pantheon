"use client";

import { useCallback, useEffect, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  INTEREST_TAGS,
  type EventItem,
  type EventDay,
  type EventTier,
  type InterestTag,
} from "@/app/data/pantheonData";
import EventFilters, { type Filters } from "./EventFilters";
import EventGrid from "./EventGrid";
import EventCard from "./EventCard";
import FeaturedEvent from "./FeaturedEvent";
import SectionHeading from "./SectionHeading";
import PreferenceModal from "./PreferenceModal";
import { usePreferences } from "@/lib/preferences/usePreferences";
import { recommended } from "@/lib/preferences/score";

const TIERS: EventTier[] = ["Flagship", "Formal", "Informal"];

export default function EventExplorer({ events }: { events: EventItem[] }) {
  const prefsCtl = usePreferences();
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  // URL is the source of truth, so a filtered view is linkable and back-safe.
  const filters: Filters = useMemo(() => {
    const rawTier = params.get("tier");
    const rawDay = Number(params.get("day"));

    return {
      tier: TIERS.find((t) => t.toLowerCase() === rawTier?.toLowerCase()) ?? null,
      day: rawDay === 1 || rawDay === 2 || rawDay === 3 ? (rawDay as EventDay) : null,
      interests: (params.get("interest") ?? "")
        .split(",")
        .filter((t): t is InterestTag =>
          (INTEREST_TAGS as readonly string[]).includes(t)
        ),
      q: params.get("q") ?? "",
    };
  }, [params]);

  const onChange = useCallback(
    (next: Partial<Filters>) => {
      const merged = { ...filters, ...next };
      const sp = new URLSearchParams();

      if (merged.tier) sp.set("tier", merged.tier.toLowerCase());
      if (merged.day) sp.set("day", String(merged.day));
      if (merged.interests.length) sp.set("interest", merged.interests.join(","));
      if (merged.q.trim()) sp.set("q", merged.q.trim());

      const query = sp.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [filters, pathname, router]
  );

  // ── TRIGGER ───────────────────────────────────────────────
  // Today: open on first visit to /events.
  // After Hexclave auth ships, delete this effect and call
  // prefsCtl.open() from the sign-in success handler instead.
  // Nothing else in this file changes.
  useEffect(() => {
    if (prefsCtl.shouldPrompt) prefsCtl.open();
  }, [prefsCtl.shouldPrompt]); // eslint-disable-line react-hooks/exhaustive-deps
  // ──────────────────────────────────────────────────────────

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return events.filter(
      (e) =>
        (!filters.tier || e.tier === filters.tier) &&
        // multi-day events surface under every day they run on
        (!filters.day || e.days.includes(filters.day)) &&
        (filters.interests.length === 0 ||
          e.interests.some((t) => filters.interests.includes(t))) &&
        (!q ||
          `${e.title} ${e.subtitle} ${e.club} ${e.category} ${e.description}`
            .toLowerCase()
            .includes(q))
    );
  }, [events, filters]);

  const clearAll = useCallback(
    () => onChange({ tier: null, day: null, interests: [], q: "" }),
    [onChange]
  );

  const isFiltered =
    filters.tier !== null ||
    filters.day !== null ||
    filters.interests.length > 0 ||
    filters.q.trim() !== "";

  const picks = useMemo(
    () => (prefsCtl.prefs ? recommended(events, prefsCtl.prefs, 3) : []),
    [events, prefsCtl.prefs]
  );

  // The featured rail is an unfiltered overview — hiding it once the user
  // starts filtering keeps the result set the single source of truth.
  const featured = useMemo(
    () => events.filter((e) => e.featured).slice(0, 2),
    [events]
  );

  return (
    <>
      <EventFilters
        filters={filters}
        onChange={onChange}
        shown={filtered.length}
        total={events.length}
      />

      <PreferenceModal
        open={prefsCtl.isOpen}
        initial={prefsCtl.prefs}
        onSave={prefsCtl.save}
        onSkip={prefsCtl.skip}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {!isFiltered && picks.length > 0 && (
          <section className="mb-16">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
              <SectionHeading label="Recommended for you" count={picks.length} />
              <button
                type="button"
                onClick={prefsCtl.open}
                className="shrink-0 rounded-full border border-pantheon-border px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-pantheon-muted transition-colors hover:border-pantheon-purple-line hover:text-pantheon-white"
              >
                Edit interests
              </button>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {picks.map((s, i) => (
                <EventCard key={s.event.id} event={s.event} index={i} />
              ))}
            </div>
          </section>
        )}

        {!isFiltered && picks.length === 0 && featured.length > 0 && (
          <section className="mb-16">
            <SectionHeading label="Featured" count={featured.length} />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {featured.map((event, i) => (
                <FeaturedEvent key={event.id} event={event} index={i} />
              ))}
            </div>
          </section>
        )}

        <section>
          <SectionHeading
            label={isFiltered ? "Results" : "All Events"}
            count={filtered.length}
          />
          <EventGrid events={filtered} onClear={clearAll} />
        </section>
      </div>
    </>
  );
}
