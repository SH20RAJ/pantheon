"use client";

import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: "INITIATIVE_01",
    label: "INNOVATION",
    image: "/globe_1.jpeg",
  },
  {
    id: 2,
    title: "INITIATIVE_02",
    label: "CULTURE",
    image: "/globe_7.jpeg",
  },
  {
    id: 3,
    title: "INITIATIVE_03",
    label: "TECHNOLOGY",
    image: "/globe_8.jpeg",
  }
];

export default function AboutPantheon() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden z-20 border-t border-white/5">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        
        {/* Flex container set to stretch so both sides are exactly equal height on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch lg:h-[600px]">
          
          {/* Left: Brutalist Text Content */}
          <div className="flex flex-col text-left lg:w-5/12 w-full h-full">            
            <h2 className="text-5xl md:text-7xl font-black mb-6 lg:mb-8 leading-none tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0">
              Legacy <br />
            </h2>

            {/* The text box uses flex-grow to fill the exact remaining space to match the right column */}
            <div className="flex flex-col text-left font-mono border border-white/10 w-full relative group overflow-hidden bg-black/50 flex-grow">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-px bg-purple-500 z-20" />
              <div className="absolute top-0 left-0 w-px h-4 bg-purple-500 z-20" />
              <div className="absolute bottom-0 right-0 w-4 h-px bg-purple-500 z-20" />
              <div className="absolute bottom-0 right-0 w-px h-4 bg-purple-500 z-20" />

              {/* Image at the Bottom (Absolute, edge-to-edge) */}
              <div className="absolute bottom-0 left-0 right-0 w-full h-40 md:h-48 z-0 pointer-events-none">
                {/* Gradient to fade the top of the image into the black background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-30 z-10 mix-blend-overlay" />
                {/* <img 
                  src="/bit_main.png" 
                  alt="BIT Mesra Main Building" 
                  className="absolute inset-0 w-full h-full object-cover object-bottom opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                /> */}
              </div>

              {/* Text Content at the Top */}
              <div className="relative z-10 p-6 md:p-8 pb-32 md:pb-40 h-full flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-2 border-b border-white/5 pb-4">
                  <span className="w-2 h-2 bg-purple-500 animate-pulse" />
                  <span className="text-purple-400 text-xs tracking-[0.1em] md:tracking-[0.2em] uppercase">PANTHEON CORE</span>
                </div>
                
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4 drop-shadow-md">
                Pantheon stands as the ultimate convergence of historic legacy and bleeding-edge technology. It is not just a festival; it is a high-octane proving ground where the sharpest minds across the country gather to push the boundaries of innovation, coding, and robotics.
                </p>
                
                <p className="text-gray-400 text-sm md:text-sm leading-relaxed mt-4 drop-shadow-md">
                  grueling 36-hour hackathons, intense competitive programming, and hardware exhibitions challenge every technical limit. Pantheon seamlessly bridges this raw historic energy with future-facing tech, culminating in electrifying DJ nights and a massive community experience.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Brutalist Accordion Gallery */}
          {/* Matches the parent height on desktop, 450px on mobile */}
          <div className="lg:w-7/12 w-full h-[450px] lg:h-full flex gap-1 md:gap-2 p-2 border border-white/10 bg-black/50">
            {accordionItems.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div 
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                  className="relative h-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group border border-white/10 bg-black"
                  style={{ flex: isHovered ? 4 : 1 }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] opacity-70 ${isHovered ? 'scale-105 grayscale-0 opacity-100' : 'scale-100 grayscale'}`}
                  />
                  
                  {/* HUD Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-30" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-80' : 'opacity-90'}`} />
                  
                  {/* Vertical Title (when collapsed) */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-purple-500 font-mono text-[10px] tracking-widest mb-4">{'//'}</span>
                    <h3 className="text-gray-400 font-mono font-bold tracking-[0.4em] uppercase text-xs -rotate-90 whitespace-nowrap">
                      {item.label}
                    </h3>
                  </div>

                  {/* Horizontal Title (when expanded) */}
                  <div className="absolute bottom-6 left-6 right-6 font-mono">
                    <div className={`transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <span className="text-purple-400 text-xs tracking-widest uppercase block mb-2">
                        [{item.title}]
                      </span>
                      <h3 className="text-white font-black text-3xl md:text-5xl tracking-tighter uppercase">
                        {item.label}
                      </h3>
                    </div>
                  </div>

                  {/* Cyberpunk borders */}
                  {isHovered && (
                    <>
                      <div className="absolute top-0 left-0 w-8 h-px bg-purple-500" />
                      <div className="absolute top-0 left-0 w-px h-8 bg-purple-500" />
                      <div className="absolute bottom-0 right-0 w-8 h-px bg-purple-500" />
                      <div className="absolute bottom-0 right-0 w-px h-8 bg-purple-500" />
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
