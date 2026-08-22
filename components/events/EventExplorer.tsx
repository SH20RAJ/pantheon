"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import type { EventItem, EventDay, EventTier } from "@/app/data/pantheonData";
import EventFilters, { type Filters } from "./EventFilters";
import EventGrid from "./EventGrid";
import FeaturedEvent from "./FeaturedEvent";
import SectionHeading from "./SectionHeading";

const TIERS: EventTier[] = ["Flagship", "Formal", "Informal"];

export default function EventExplorer({ events }: { events: EventItem[] }) {
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
      q: params.get("q") ?? "",
    };
  }, [params]);

  const onChange = useCallback(
    (next: Partial<Filters>) => {
      const merged = { ...filters, ...next };
      const sp = new URLSearchParams();

      if (merged.tier) sp.set("tier", merged.tier.toLowerCase());
      if (merged.day) sp.set("day", String(merged.day));
      if (merged.q.trim()) sp.set("q", merged.q.trim());

      const query = sp.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [filters, pathname, router]
  );

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();

    return events.filter(
      (e) =>
        (!filters.tier || e.tier === filters.tier) &&
        // multi-day events surface under every day they run on
        (!filters.day || e.days.includes(filters.day)) &&
        (!q ||
          `${e.title} ${e.subtitle} ${e.club} ${e.category} ${e.description}`
            .toLowerCase()
            .includes(q))
    );
  }, [events, filters]);

  const clearAll = useCallback(
    () => onChange({ tier: null, day: null, q: "" }),
    [onChange]
  );

  const isFiltered =
    filters.tier !== null || filters.day !== null || filters.q.trim() !== "";

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

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        {!isFiltered && featured.length > 0 && (
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
