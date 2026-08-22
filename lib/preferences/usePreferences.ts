"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getPreferences,
  savePreferences,
  clearPreferences,
  hasSkipped,
  markSkipped,
  type Preferences,
} from "./store";

/**
 * Owns preference state and modal open/close.
 *
 * Note the hook does NOT decide when the modal first opens — the caller
 * does. Today that's the events page on mount; after auth ships it becomes
 * the sign-in success handler, and nothing in here changes.
 */
export function usePreferences() {
  const [prefs, setPrefs] = useState<Preferences | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  // localStorage is client-only, so hydrate after mount
  useEffect(() => {
    setPrefs(getPreferences());
    setReady(true);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const save = useCallback((next: Preferences) => {
    savePreferences(next);
    setPrefs(next);
    setIsOpen(false);
  }, []);

  const skip = useCallback(() => {
    markSkipped();
    setIsOpen(false);
  }, []);

  const reset = useCallback(() => {
    clearPreferences();
    setPrefs(null);
  }, []);

  /** True when we've never asked and the user hasn't dismissed it. */
  const shouldPrompt = ready && prefs === null && !hasSkipped();

  return { prefs, ready, isOpen, shouldPrompt, open, close, save, skip, reset };
}
