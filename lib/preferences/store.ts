import type { InterestTag } from "@/app/data/pantheonData";

export type Preferences = {
  interests: InterestTag[];
  teamMin: number;
  teamMax: number;
};

const KEY = "pantheon:prefs";

/**
 * The ONLY place storage is touched.
 *
 * Today: localStorage, so guests get personalisation with no account.
 * Later: read from the signed-in user's Hexclave metadata, falling back
 * to localStorage for guests and migrating guest values up on first
 * login. Nothing outside this file needs to change when that happens.
 */
export function getPreferences(): Preferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Preferences;
    if (!Array.isArray(parsed.interests)) return null;
    return parsed;
  } catch {
    // private mode, blocked storage, corrupt JSON — behave as "no prefs"
    return null;
  }
}

export function savePreferences(prefs: Preferences): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(prefs));
  } catch {
    /* non-fatal: personalisation just won't persist */
  }
}

export function clearPreferences(): void {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* no-op */
  }
}

/** Set when the user dismisses the modal, so it isn't shown again. */
const SKIP_KEY = "pantheon:prefs-skipped";

export function hasSkipped(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(SKIP_KEY) === "1";
  } catch {
    return false;
  }
}

export function markSkipped(): void {
  try {
    window.localStorage.setItem(SKIP_KEY, "1");
  } catch {
    /* no-op */
  }
}
