export default function SectionTitle({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-pantheon-purple-light">
          {index}
        </span>
        <span className="h-px w-8 bg-pantheon-purple-line" />
        {hint && (
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-pantheon-subtle">
            {hint}
          </span>
        )}
      </div>

      <h2 className="pantheon-h2 mt-3">{title}</h2>
    </div>
  );
}
