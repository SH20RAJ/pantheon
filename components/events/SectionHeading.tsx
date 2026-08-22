export default function SectionHeading({
  label,
  count,
}: {
  label: string;
  count?: number;
}) {
  return (
    <div className="mb-7 flex items-center gap-4">
      <span className="size-2 shrink-0 rotate-45 border border-pantheon-purple-edge bg-pantheon-black" />

      <h2 className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-pantheon-white">
        {label}
      </h2>

      {count !== undefined && (
        <span className="shrink-0 border border-pantheon-border px-2 py-1 font-mono text-[8px] tracking-[0.2em] text-pantheon-purple-light">
          {String(count).padStart(2, "0")}
        </span>
      )}

      <span className="h-px flex-1 bg-gradient-to-r from-pantheon-border to-transparent" />
    </div>
  );
}
