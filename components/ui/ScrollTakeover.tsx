"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTakeoverProps {
  hero: React.ReactNode;
  children: React.ReactNode;
}

export default function ScrollTakeover({ hero, children }: ScrollTakeoverProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const useIsomorphic = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  useIsomorphic(() => {
    if (!heroRef.current || !contentWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroRef.current, {
        scale: 0.96,
        y: -50,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: contentWrapperRef.current,
          start: "top 100%", // When the top of the content hits the bottom of the viewport
          end: "top top",    // When the top of the content hits the top of the viewport
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-black">
      {/* Sticky Hero Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0">
        <div ref={heroRef} className="w-full h-full origin-top">
          {hero}
        </div>
      </div>

      {/* Content that scrolls over the hero */}
      <div 
        ref={contentWrapperRef} 
        className="relative z-10 w-full min-h-screen bg-[#050505] rounded-t-[40px] border-t border-purple-500/20 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}
