/**
 * Single source of truth for theme values needed in JavaScript.
 *
 * Everything that can be a CSS class should use the `pantheon-*` tokens in
 * app/globals.css instead. This file exists only for values passed as props
 * to canvas/WebGL components, which cannot read Tailwind classes.
 */
export const PANTHEON_THEME = {
  black: "#000000",
  elevated: "#0a0a0c",
  purple: "#7c3aed",
  purpleLight: "#a78bfa",
  white: "#ffffff",
} as const;
