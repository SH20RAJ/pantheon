import React from 'react'
import DotGrid from './Dotgrid';
import Link from 'next/link';

const events = [
  {
    title: 'HACKQUEST',
    desc: '36-hour non-stop coding & innovation',
    category: 'FLAGSHIP',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    href: '/events/hackathon'
  },
  {
    title: 'TECH EXPO',
    desc: 'Showcasing the future of hardware',
    category: 'FORMAL',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    href: '/events/tech-expo'
  },
  {
    title: 'ROBO WARS',
    desc: 'Metal crashing madness',
    category: 'FLAGSHIP',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-2',
    img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop',
    href: '/events/robo-wars'
  },
  {
    title: 'GAMING ARENA',
    desc: 'Valorant & BGMI Finals',
    category: 'INFORMAL',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    href: '/events/gaming-arena'
  },
  {
    title: 'GUEST LECTURE',
    desc: 'Industry experts talk',
    category: 'FORMAL',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    href: '/events/guest-lecture'
  },
  {
    title: 'LIVE CONCERT',
    desc: 'Closing the day with music',
    category: 'INFORMAL',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    img: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&auto=format&fit=crop',
    href: '/events/live-concert'
  }
];

export default function Dayhighlight() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#050505] text-white z-20 flex flex-col justify-center py-6 md:py-10 border-t border-white/5">
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <DotGrid
          dotSize={4}
          gap={24}
          baseColor="#1A1525"
          activeColor="#7C3AED"
          proximity={150}
          shockRadius={300}
          shockStrength={6}
          resistance={800}
          returnDuration={1.5}
          className="!p-0"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col">
        
        {/* Clean Header */}
        <div className="mb-6 relative flex-shrink-0 flex items-baseline gap-4">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 uppercase drop-shadow-sm">
            DAY - 1
          </h2>
          <h3 className="text-xl md:text-3xl font-bold text-gray-400 tracking-tight">
            Highlights
          </h3>
        </div>

        {/* Pinterest/Bento Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 flex-grow min-h-0 pb-4">
          {events.map((event, i) => (
            <Link 
              href={event.href}
              key={i} 
              className={`group relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-white/10 ${event.colSpan} ${event.rowSpan} hover:border-purple-500/40 transition-all duration-300 h-full block cursor-pointer`}
            >
              {/* Background Image with Clean Overlay */}
              <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              </div>

              {/* Clean Tag */}
              <div className="absolute top-5 left-5 z-20">
                <span className="text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md uppercase text-gray-300">
                  {event.category}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <h4 className="text-2xl md:text-4xl font-black uppercase mb-1 group-hover:text-purple-400 transition-colors duration-300 drop-shadow-md tracking-tight">
                  {event.title}
                </h4>
                <p className="text-gray-400 text-sm font-medium drop-shadow-md group-hover:text-gray-200 transition-colors duration-300">
                  {event.desc}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-20 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
