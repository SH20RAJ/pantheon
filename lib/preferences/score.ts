import { TIER_PRIORITY, type EventItem } from "@/app/data/pantheonData";
import type { Preferences } from "./store";

/** Weights are relative only to each other; tweak freely. */
const W_INTEREST = 50; // per matching tag
const W_TEAM_FIT = 30; // team range overlaps

export type ScoredEvent = {
  event: EventItem;
  score: number;
  matchedInterests: string[];
  teamFits: boolean;
};

/** Two inclusive ranges overlap. */
function rangesOverlap(aMin: number, aMax: number, bMin: number, bMax: number) {
  return aMin <= bMax && bMin <= aMax;
}

export function scoreEvent(event: EventItem, prefs: Preferences): ScoredEvent {
  const matchedInterests = event.interests.filter((t) =>
    prefs.interests.includes(t)
  );

  const teamFits = rangesOverlap(
    event.teamMin,
    event.teamMax,
    prefs.teamMin,
    prefs.teamMax
  );

  const score =
    matchedInterests.length * W_INTEREST + (teamFits ? W_TEAM_FIT : 0);

  return { event, score, matchedInterests, teamFits };
}

/**
 * Rank events for a personalised view.
 *
 * Order: score desc → tier priority (Flagship, Formal, Informal) → title.
 * Nothing is removed, so the full catalogue stays browsable; personalisation
 * only decides what surfaces first.
 */
export function rankEvents(
  events: EventItem[],
  prefs: Preferences
): ScoredEvent[] {
  return events
    .map((e) => scoreEvent(e, prefs))
    .sort(
      (a, b) =>
        b.score - a.score ||
        TIER_PRIORITY[a.event.tier] - TIER_PRIORITY[b.event.tier] ||
        a.event.title.localeCompare(b.event.title)
    );
}

/** Events worth putting in the "Recommended" rail. */
export function recommended(
  events: EventItem[],
  prefs: Preferences,
  limit = 3
): ScoredEvent[] {
  return rankEvents(events, prefs)
    .filter((s) => s.matchedInterests.length > 0)
    .slice(0, limit);
}
