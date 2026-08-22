/**
 * The navbar floats with a transparent gutter around it, so page content
 * scrolls visibly through that strip. This sits above content (z-40) and
 * below the navbar (z-50) to keep the top edge legible.
 */
export default function TopScrim() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 bg-gradient-to-b from-pantheon-black via-pantheon-black/85 to-transparent"
    />
  );
}
