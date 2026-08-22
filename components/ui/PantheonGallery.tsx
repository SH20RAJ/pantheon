import React from 'react';

interface PantheonGalleryProps {
  images: string[];
}

import CurvedLoop from './CurvedLoop';

export default function PantheonGallery({ images }: PantheonGalleryProps) {
  
  // This function dictates the "big/small" chaotic bento pattern.
  // It loops through these sizes no matter how many images you pass!
  const getBentoStyle = (index: number) => {
    const pattern = [
      "md:col-span-2 md:row-span-2", // 1. Big Featured Square
      "md:col-span-1 md:row-span-1", // 2. Small Square
      "md:col-span-1 md:row-span-2", // 3. Tall Portrait
      "md:col-span-1 md:row-span-1", // 4. Small Square
      "md:col-span-2 md:row-span-1", // 5. Wide Landscape
      "md:col-span-1 md:row-span-1", // 6. Small Square
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-12 py-16 md:py-24 relative overflow-hidden">
      
      {/* Hype Header */}
      <div className="text-center mb-8 relative w-full flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[100px] bg-purple-900/40 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 uppercase">
          The Experience
        </h2>
        <p className="mt-4 text-purple-400 text-sm md:text-lg font-bold tracking-[0.4em] uppercase drop-shadow-md">
          A Glimpse Into Pantheon
        </p>
      </div>

      <div className="container px-4 md:px-8 mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px] w-full grid-flow-dense relative z-20">
        
        {images.map((src, index) => (
          <div 
            key={index}
            className={`
              ${getBentoStyle(index)}
              group relative overflow-hidden bg-black rounded-[1.5rem]
              border border-white/5 hover:border-purple-500/50 
              transition-all duration-700 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] cursor-pointer
            `}
          >
            {/* Image (Normal color, no grayscale) */}
            <img 
              src={src} 
              alt={`Pantheon hype moment ${index + 1}`} 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
              loading="lazy"
            />
            
            {/* Cyberpunk Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay" />
            
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 group-hover:from-black/80" />
            
            {/* Corner Brackets that appear on hover */}
            <div className="absolute top-0 left-0 w-6 h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-100" />
            <div className="absolute top-0 left-0 w-[2px] h-6 bg-purple-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 delay-100" />
            
            <div className="absolute bottom-0 right-0 w-6 h-[2px] bg-purple-500 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 delay-100" />
            <div className="absolute bottom-0 right-0 w-[2px] h-6 bg-purple-500 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 delay-100" />

            {/* Persistent subtle index */}
            <div className="absolute top-4 right-4 font-mono text-[10px] text-white/30 tracking-widest group-hover:text-purple-400 transition-colors duration-500">
              {'//'} 0{index + 1}
            </div>
            
            {/* Hover Text overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="translate-y-4 opacity-50 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <p className="text-white font-black text-xl md:text-2xl tracking-tighter drop-shadow-lg uppercase group-hover:text-purple-200">
                  {/* Dynamically labeling them just for the vibe */}
                  {index % 5 === 0 ? "Main Stage" : index % 3 === 0 ? "The Crowd" : "Raw Energy"}
                </p>
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                  <span className="w-2 h-2 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></span>
                  <p className="text-purple-300 text-[10px] font-bold tracking-[0.3em] uppercase">
                    Archive Memory
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}