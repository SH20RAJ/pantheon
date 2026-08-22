'use client';

import DeveloperCard, { Developer } from '@/components/ui/DeveloperCard';

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

/* ── Montserrat heading style ── */
const headingStyle = (size: string) => ({
  fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
  fontWeight: 700,
  fontSize: size,
  lineHeight: 1,
  color: 'var(--color-pantheon-white)',
  textShadow: '0 0 80px rgba(124,58,237,0.35), 0 4px 32px rgba(0,0,0,0.6)',
});

export default function DevelopersPage() {
  return (
    <main className="min-h-screen bg-pantheon-black text-pantheon-white pt-32 pb-12">
      <section className="relative flex flex-col items-center px-6 md:px-12">
        {/* Subtle purple glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[240px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'var(--color-pantheon-purple)' }}
          aria-hidden="true"
        />

        <h1
          className="relative z-10 mb-16 text-center uppercase tracking-[0.15em]"
          style={headingStyle('clamp(3.5rem, 10vw, 8rem)')}
        >
          DEVELOPERS
        </h1>

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
