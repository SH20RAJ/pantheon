'use client';

import DriftWall, { DriftWallItem } from '@/components/ui/DriftWall';
import LightRays from '@/components/ui/LightRays';
import DeveloperCard, { Developer } from '@/components/ui/DeveloperCard';

/* ── all 10 Pantheon event photos ── */
const EVENT_IMAGES: DriftWallItem[] = [
  { image: '/about-us/images/event-1.jpg', title: 'Inauguration Ceremony' },
  { image: '/about-us/images/event-2.jpg', title: 'Keynote Address' },
  { image: '/about-us/images/event-3.jpg', title: 'Faculty and Dignitaries' },
  { image: '/about-us/images/event-4.jpg', title: 'Cultural Performance' },
  { image: '/about-us/images/event-5.jpg', title: 'Traditional Dance' },
  { image: '/about-us/images/event-6.jpg', title: 'DJ Night' },
  { image: '/about-us/images/event-7.jpg', title: 'Solo Singing' },
  { image: '/about-us/images/event-8.jpg', title: 'Rally Parade' },
  { image: '/about-us/images/event-9.jpg', title: 'Team Photo' },
  { image: '/about-us/images/event-10.jpg', title: 'Faculty Reading' },
];

/*
 * Shuffle images using a seeded pseudo-random so the order is
 * deterministic across renders but images are NOT grouped by column.
 */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;          // Park-Miller LCG
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* build 24 tiles from 10 images, shuffled so no column repeats the same image (6 cols × 4 rows) */
const ABOUT_TILES: DriftWallItem[] = seededShuffle(
  Array.from({ length: 24 }, (_, i) => ({
    ...EVENT_IMAGES[i % EVENT_IMAGES.length],
    title: `${EVENT_IMAGES[i % EVENT_IMAGES.length].title} ${i}`,
  })),
  42,
);

/* ── Developer data (placeholder — user will provide photos & names later) ── */
const K24_DEVELOPERS: Developer[] = [
  { name: 'Developer 1', image: '/about-us/images/event-9.jpg', role: 'K24', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 2', image: '/about-us/images/event-9.jpg', role: 'K24', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 3', image: '/about-us/images/event-9.jpg', role: 'K24', instagram: '#', linkedin: '#', github: '#' },
];

const K25_DEVELOPERS: Developer[] = [
  { name: 'Developer 1', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 2', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 3', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 4', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 5', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 6', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
  { name: 'Developer 7', image: '/about-us/images/event-9.jpg', role: 'K25', instagram: '#', linkedin: '#', github: '#' },
];

/* ── Montserrat heading style (shared between ABOUT, LEGACY, DEVELOPERS) ── */
const headingStyle = (size: string) => ({
  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
  fontWeight: 700,
  fontSize: size,
  lineHeight: 1,
  color: 'var(--color-pantheon-white)',
  textShadow: '0 0 80px rgba(124,58,237,0.35), 0 4px 32px rgba(0,0,0,0.6)',
});

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-pantheon-black text-pantheon-white">

      {/* ══════════════════════════════════════════════════════════════
          HERO: "ABOUT" Heading
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center pt-32 pb-2 md:pt-40 md:pb-4">
        {/* Subtle purple glow behind the heading */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[260px] w-[600px] rounded-full opacity-30 blur-[120px]"
          style={{ background: 'var(--color-pantheon-purple)' }}
          aria-hidden="true"
        />
        <h1
          className="relative z-10 text-center uppercase tracking-[0.15em]"
          style={headingStyle('clamp(3.5rem, 10vw, 8rem)')}
        >
          ABOUT
        </h1>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DRIFT WALL SECTION — 6 columns, with overlay text
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full" style={{ height: '85vh', minHeight: '600px', marginTop: '-1rem' }}>

        {/* DriftWall background — Netflix-style, 6 columns */}
        <div className="absolute inset-0 z-0">
          <DriftWall
            items={ABOUT_TILES}
            columns={5}
            tileWidth={200}
            tileHeight={130}
            gap={12}
            radius={10}
            tilt={18}
            turn={-12}
            perspective={1200}
            depth={140}
            speed={36}
            direction="up"
            variance={0.5}
            parallax={0.7}
            lift={50}
            fade={0.65}
            dim={0.92}
            grayscale={false}
            overlayColor="#060010"
          />
        </div>

        {/* Dark gradient overlay for text readability */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Overlay text content */}
        <div className="relative z-20 flex h-full items-center justify-center px-6 md:px-12">
          <div className="max-w-3xl text-center">
            <p
              className="leading-relaxed md:leading-loose"
              style={{
                fontFamily: 'Consolas, "Courier New", monospace',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)',
                color: '#ffffff',
                textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                letterSpacing: '0.02em',
              }}
            >
              Pantheon is the premier annual science and technology festival organized
              by <span className="font-semibold text-pantheon-purple-light">Birla Institute of Technology — Mesra</span>.
              A three-day event which serves as a massive platform for students to
              showcase their technical prowess, creativity, and innovative ideas.
              The festival blends intense technical competitions with exhibitions,
              workshops, and high-energy cultural performances.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LEGACY SECTION — with LightRays background
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ minHeight: '500px' }}>

        {/* LightRays WebGL background */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7c3aed"
            raysSpeed={0.8}
            lightSpread={1.4}
            rayLength={2.5}
            pulsating
            fadeDistance={1.2}
            saturation={1.2}
            followMouse
            mouseInfluence={0.15}
            noiseAmount={0.05}
            distortion={0.3}
          />
        </div>

        {/* Subtle purple glow behind the heading */}
        <div
          className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[200px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'var(--color-pantheon-purple)' }}
          aria-hidden="true"
        />

        <h2
          className="relative z-10 mb-8 text-center uppercase tracking-[0.15em]"
          style={headingStyle('clamp(2.5rem, 7vw, 5.5rem)')}
        >
          LEGACY
        </h2>

        <div className="relative z-10 max-w-3xl text-center">
          <p
            className="leading-relaxed md:leading-loose"
            style={{
              fontFamily: 'Consolas, "Courier New", monospace',
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.3vw, 1.4rem)',
              color: '#ffffff',
              letterSpacing: '0.02em',
            }}
          >
            Deeply rooted in the institute&apos;s 70-year history of academic and research
            excellence, Pantheon boasts a legacy of over 20 years. The festival operates
            around core themes such as{' '}
            <span className="font-semibold text-pantheon-purple-light">
              &ldquo;Science and Technology for Societal Development&rdquo;
            </span>{' '}
            and{' '}
            <span className="font-semibold text-pantheon-purple-light">
              &ldquo;Tradition of Technology&rdquo;
            </span>
            . Over the decades, it has established itself as one of the most prominent
            technical festivals in the region, consistently fostering a culture of coding,
            problem-solving, and entrepreneurship among young engineers.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DEVELOPERS SECTION
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center px-6 py-20 md:px-12 md:py-28">
        {/* Subtle purple glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[240px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'var(--color-pantheon-purple)' }}
          aria-hidden="true"
        />

        <h2
          className="relative z-10 mb-16 text-center uppercase tracking-[0.15em]"
          style={headingStyle('clamp(2.5rem, 7vw, 5.5rem)')}
        >
          DEVELOPERS
        </h2>

        {/* ── K24 Section ── */}
        <div className="relative z-10 mb-20 w-full max-w-5xl flex flex-col items-center">
          <h3
            className="mb-10 text-center uppercase tracking-[0.2em]"
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--color-pantheon-purple-light)',
            }}
          >
            K24
          </h3>

          {/* Tech Lead (First Developer) */}
          <div className="mb-12 flex w-full max-w-sm flex-col items-center">
            <span className="mb-4 text-center font-bold uppercase tracking-[0.2em] text-pantheon-purple-light">
              Tech Lead
            </span>
            <div className="w-full">
              <DeveloperCard developer={K24_DEVELOPERS[0]} />
            </div>
          </div>

          {/* Other Two Developers */}
          <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {K24_DEVELOPERS.slice(1).map((dev, i) => (
              <DeveloperCard key={`k24-rest-${i}`} developer={dev} />
            ))}
          </div>
        </div>

        {/* ── K25 Section ── */}
        <div className="relative z-10 w-full max-w-6xl">
          <h3
            className="mb-10 text-center uppercase tracking-[0.2em]"
            style={{
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--color-pantheon-purple-light)',
            }}
          >
            K25
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {K25_DEVELOPERS.map((dev, i) => (
              <DeveloperCard key={`k25-${i}`} developer={dev} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
