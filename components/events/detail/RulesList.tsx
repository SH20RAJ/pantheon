import SectionTitle from "./SectionTitle";

export default function RulesList({
  index,
  title,
  hint,
  items,
}: {
  index: string;
  title: string;
  hint?: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <section>
      <SectionTitle index={index} title={title} hint={hint} />

      <ol className="space-y-px">
        {items.map((item, i) => (
          <li
            key={i}
            className="
              group flex gap-5 rounded-pantheon-sm px-4 py-4
              transition-colors duration-300
              hover:bg-white/[0.025]
            "
          >
            <span
              className="
                mt-0.5 grid size-7 shrink-0 place-items-center rounded-full
                border border-pantheon-border font-mono text-[10px] font-bold
                text-pantheon-purple-light
                transition-colors duration-300
                group-hover:border-pantheon-purple-line group-hover:bg-pantheon-purple-dim
              "
            >
              {i + 1}
            </span>

            <span className="pantheon-prose text-[0.9375rem]">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
