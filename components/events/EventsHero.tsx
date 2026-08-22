import { EVENTS_DATA, FEST_DETAILS } from "@/app/data/pantheonData";

const pad = (n: number) => String(n).padStart(2, "0");

export default function EventsHero() {
  const total = EVENTS_DATA.length;
  const flagship = EVENTS_DATA.filter((e) => e.tier === "Flagship").length;
  const clubs = new Set(EVENTS_DATA.map((e) => e.club)).size;

  const stats = [
    { label: "Total Events", value: pad(total), accent: true },
    { label: "Flagship", value: pad(flagship), accent: false },
    { label: "Clubs", value: pad(clubs), accent: false },
    { label: "Days", value: "03", accent: false },
  ];

  // doubled so the marquee can loop seamlessly at -50%
  const ticker = [...EVENTS_DATA, ...EVENTS_DATA];

  return (
    <section className="relative overflow-hidden border-b border-pantheon-border">
      {/* ── depth stack ────────────────────────────────── */}
      <div aria-hidden className="pantheon-grid-bg absolute inset-0" />

      <div
        aria-hidden
        className="pantheon-bloom animate-glow absolute -top-40 left-[15%] size-[38rem]"
      />
      <div
        aria-hidden
        className="pantheon-bloom animate-drift absolute -bottom-52 right-[5%] size-[30rem] opacity-60"
      />

      {/* horizon line + travelling scan */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pantheon-purple-line to-transparent"
      />
      <div
        aria-hidden
        className="animate-scan absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-pantheon-purple-wash to-transparent"
      />

      {/* ── content ────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-0 md:px-6">
        <div className="animate-rise flex items-center gap-3">
          <span className="size-2 rotate-45 border border-pantheon-purple-edge bg-pantheon-black" />
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-pantheon-purple-light">
            01 / Events
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-pantheon-border to-transparent" />
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-subtle sm:block">
            {FEST_DETAILS.dates}
          </span>
        </div>

        {/* stacked headline — outline echo behind the solid word */}
        <div className="relative mt-10">
          <h1
            aria-hidden
            className="pantheon-stroke pointer-events-none absolute -top-6 left-0 select-none text-[19vw] font-black uppercase leading-[0.8] tracking-[0.02em] md:-top-10 md:text-[9rem]"
          >
            Events
          </h1>

          <h1 className="animate-rise relative text-[15vw] font-black uppercase leading-[0.85] tracking-[0.02em] text-pantheon-white md:text-[7rem]">
            Ev
            <span className="text-pantheon-purple-light">e</span>
            nts
          </h1>
        </div>

        <div className="mt-8 grid gap-8 border-t border-pantheon-border-subtle pt-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-lg font-mono text-[11px] leading-loose tracking-[0.08em] text-pantheon-muted">
            Three days of hackathons, combat robotics, algorithmic sprints and
            pitch battles across the BIT Mesra campus.
            <span className="text-pantheon-white"> Every event is open to all participants.</span>
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
            {stats.map((s) => (
              <div key={s.label} className="group/stat relative">
                <div
                  className={`text-3xl font-black leading-none tracking-[0.02em] md:text-4xl ${
                    s.accent ? "text-pantheon-purple-light" : "text-pantheon-white"
                  }`}
                >
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.25em] text-pantheon-subtle">
                  {s.label}
                </div>
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-pantheon-purple transition-all duration-500 group-hover/stat:w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* ── event-name ticker rail ───────────────────── */}
        <div className="pantheon-fade-x mt-12 overflow-hidden border-t border-pantheon-border-subtle py-4">
          <div className="animate-marquee flex w-max items-center gap-6">
            {ticker.map((e, i) => (
              <span key={`${e.id}-${i}`} className="flex items-center gap-6">
                <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.25em] text-pantheon-subtle">
                  {e.title}
                </span>
                <span className="size-1 rotate-45 bg-pantheon-purple-line" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
