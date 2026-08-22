import React from 'react';
import { Hexagon, Triangle, Box, Aperture, Cpu, Globe, Rocket, Shield } from 'lucide-react';
import DotGrid from './Dotgrid';

const sponsors = [
  { name: 'VERTEX', icon: <Triangle className="w-8 h-8 md:w-10 md:h-10" />, tier: 'Title Sponsor', color: 'text-purple-400', border: 'hover:border-purple-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] group-hover:bg-purple-900/10' },
  { name: 'NEXUS', icon: <Hexagon className="w-6 h-6 md:w-8 md:h-8" />, tier: 'Powered By', color: 'text-blue-400', border: 'hover:border-blue-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] group-hover:bg-blue-900/10' },
  { name: 'QUANTUM', icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />, tier: 'Powered By', color: 'text-emerald-400', border: 'hover:border-emerald-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] group-hover:bg-emerald-900/10' },
  { name: 'CYPHER', icon: <Aperture className="w-6 h-6 md:w-8 md:h-8" />, tier: 'Tech Partner', color: 'text-orange-400', border: 'hover:border-orange-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] group-hover:bg-orange-900/10' },
  { name: 'ASTRAL', icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />, tier: 'Innovation Partner', color: 'text-pink-400', border: 'hover:border-pink-500/50', glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.3)] group-hover:bg-pink-900/10' },
];

export default function Sponsors() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-[#050505] text-white z-20 flex flex-col justify-center items-center py-20 md:py-32 border-t border-white/5">
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <DotGrid
          dotSize={2}
          gap={32}
          baseColor="#1A1525"
          activeColor="#7C3AED"
          proximity={200}
          shockRadius={300}
          shockStrength={4}
          resistance={800}
          returnDuration={1.5}
          className="!p-0"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-center max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-purple-900/20 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Our Partners
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase relative z-10">
            The visionary brands making Pantheon possible
          </p>
        </div>

        {/* Premium Sponsor Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {sponsors.map((sponsor, idx) => (
            <div 
              key={idx} 
              className={`group relative overflow-hidden rounded-[2rem] bg-[#0a0a0a]/80 border border-white/10 ${sponsor.border} transition-all duration-500 flex flex-col items-center justify-center p-8 md:p-10 w-[200px] sm:w-[240px] md:w-[280px] backdrop-blur-md cursor-pointer ${sponsor.glow}`}
            >
              {/* Subtle top gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
              
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase whitespace-nowrap">
                {sponsor.tier}
              </span>
              
              <div className={`flex flex-col items-center gap-4 mt-6 ${sponsor.color} group-hover:text-white transition-colors duration-500`}>
                <div className="transform group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  {sponsor.icon}
                </div>
                <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase">{sponsor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
