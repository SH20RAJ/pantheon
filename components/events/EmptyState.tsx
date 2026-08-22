export default function EmptyState({ onClear }: { onClear?: () => void }) {
  return (
    <div className="pantheon-card flex min-h-[300px] flex-col items-center justify-center px-6 py-16 text-center">
      <span className="grid size-12 place-items-center rounded-full border border-pantheon-border">
        <span className="size-3 rotate-45 border border-pantheon-purple-edge" />
      </span>

      <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-pantheon-white">
        No events match
      </p>

      <p className="mt-3 max-w-sm font-mono text-[9px] uppercase leading-relaxed tracking-[0.15em] text-pantheon-subtle">
        Try widening the tier or day selection.
      </p>

      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="
            mt-8 rounded-full border border-white/15 bg-pantheon-white px-6 py-3
            font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-pantheon-black
            transition-colors duration-300
            hover:bg-pantheon-purple hover:text-pantheon-white
          "
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}
