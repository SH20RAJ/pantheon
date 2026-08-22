import type { EventTier } from "@/app/data/pantheonData";

const TIER_STYLES: Record<EventTier, string> = {
  Flagship: "border-pantheon-purple/40 bg-pantheon-purple/15 text-pantheon-purple-light",
  Formal: "border-pantheon-border text-pantheon-muted",
  Informal: "border-pantheon-border-subtle text-pantheon-subtle",
};

export default function TierBadge({
  tier,
  className = "",
}: {
  tier: EventTier;
  className?: string;
}) {
  return (
    <span
      className={`
        rounded-full border px-2.5 py-1
        font-mono text-[8px] font-bold uppercase tracking-[0.2em]
        ${TIER_STYLES[tier]} ${className}
      `}
    >
      {tier}
    </span>
  );
}
