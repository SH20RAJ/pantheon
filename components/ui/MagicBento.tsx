'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/* ─── public types ──────────────────────────────────────────── */

export interface BentoCardData {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  icon?: React.ReactNode;
  /** Extra slot rendered below the description */
  footer?: React.ReactNode;
}

export interface BentoProps {
  cards: BentoCardData[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

/* ─── constants ─────────────────────────────────────────────── */

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
/** Pantheon purple (matches --color-pantheon-purple: #7c3aed) */
const DEFAULT_GLOW_COLOR = '124, 58, 237';
const MOBILE_BREAKPOINT = 768;

/* ─── helpers ───────────────────────────────────────────────── */

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'bento-particle';
  el.style.cssText = `
    position:absolute;width:4px;height:4px;border-radius:50%;
    background:rgba(${color},1);box-shadow:0 0 6px rgba(${color},0.6);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;`;
  return el;
};

const calculateSpotlightValues = (r: number) => ({ proximity: r * 0.5, fadeDistance: r * 0.75 });

const updateCardGlowProperties = (card: HTMLElement, mx: number, my: number, glow: number, radius: number) => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--glow-x', `${((mx - r.left) / r.width) * 100}%`);
  card.style.setProperty('--glow-y', `${((my - r.top) / r.height) * 100}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

/* ─── ParticleCard ──────────────────────────────────────────── */

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children, className = '', disableAnimations = false, style,
  particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true, clickEffect = false, enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach(p => {
      gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete: () => p.parentNode?.removeChild(p) });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();
    memoizedParticles.current.forEach((p, i) => {
      const id = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = p.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, { x: (Math.random() - 0.5) * 100, y: (Math.random() - 0.5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
        gsap.to(clone, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
      }, i * 100);
      timeoutsRef.current.push(id);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const el = cardRef.current;
    const onEnter = () => { isHoveredRef.current = true; animateParticles(); if (enableTilt) gsap.to(el, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 }); };
    const onLeave = () => { isHoveredRef.current = false; clearAllParticles(); if (enableTilt) gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' }); if (enableMagnetism) gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' }); };
    const onMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;
      const r = el.getBoundingClientRect(); const cx = r.width / 2; const cy = r.height / 2;
      const x = e.clientX - r.left; const y = e.clientY - r.top;
      if (enableTilt) gsap.to(el, { rotateX: ((y - cy) / cy) * -10, rotateY: ((x - cx) / cx) * 10, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
      if (enableMagnetism) magnetismAnimationRef.current = gsap.to(el, { x: (x - cx) * 0.05, y: (y - cy) * 0.05, duration: 0.3, ease: 'power2.out' });
    };
    const onClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const r = el.getBoundingClientRect(); const x = e.clientX - r.left; const y = e.clientY - r.top;
      const md = Math.max(Math.hypot(x, y), Math.hypot(x - r.width, y), Math.hypot(x, y - r.height), Math.hypot(x - r.width, y - r.height));
      const ripple = document.createElement('div');
      ripple.style.cssText = `position:absolute;width:${md * 2}px;height:${md * 2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.4) 0%,rgba(${glowColor},0.2) 30%,transparent 70%);left:${x - md}px;top:${y - md}px;pointer-events:none;z-index:1000;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() });
    };
    el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); el.addEventListener('mousemove', onMove); el.addEventListener('click', onClick);
    return () => { isHoveredRef.current = false; el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); el.removeEventListener('mousemove', onMove); el.removeEventListener('click', onClick); clearAllParticles(); };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div ref={cardRef} className={`${className} relative overflow-hidden`} style={{ ...style, position: 'relative', overflow: 'hidden' }}>
      {children}
    </div>
  );
};

/* ─── GlobalSpotlight ───────────────────────────────────────── */

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({ gridRef, disableAnimations = false, enabled = true, spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS, glowColor = DEFAULT_GLOW_COLOR }) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'bento-global-spotlight';
    spotlight.style.cssText = `position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(${glowColor},0.15) 0%,rgba(${glowColor},0.08) 15%,rgba(${glowColor},0.04) 25%,rgba(${glowColor},0.02) 40%,rgba(${glowColor},0.01) 65%,transparent 70%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const onMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const inside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      const cards = gridRef.current.querySelectorAll('.bento-card');
      if (!inside) { gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' }); cards.forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0')); return; }
      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minD = Infinity;
      cards.forEach(c => {
        const el = c as HTMLElement; const cr = el.getBoundingClientRect();
        const d = Math.max(0, Math.hypot(e.clientX - (cr.left + cr.width / 2), e.clientY - (cr.top + cr.height / 2)) - Math.max(cr.width, cr.height) / 2);
        minD = Math.min(minD, d);
        updateCardGlowProperties(el, e.clientX, e.clientY, d <= proximity ? 1 : d <= fadeDistance ? (fadeDistance - d) / (fadeDistance - proximity) : 0, spotlightRadius);
      });
      gsap.to(spotlightRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: 'power2.out' });
      const tO = minD <= proximity ? 0.8 : minD <= fadeDistance ? ((fadeDistance - minD) / (fadeDistance - proximity)) * 0.8 : 0;
      gsap.to(spotlightRef.current, { opacity: tO, duration: tO > 0 ? 0.2 : 0.5, ease: 'power2.out' });
    };
    const onLeave = () => {
      gridRef.current?.querySelectorAll('.bento-card').forEach(c => (c as HTMLElement).style.setProperty('--glow-intensity', '0'));
      if (spotlightRef.current) gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    };
    document.addEventListener('mousemove', onMove); document.addEventListener('mouseleave', onLeave);
    return () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseleave', onLeave); spotlightRef.current?.parentNode?.removeChild(spotlightRef.current); };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

/* ─── useMobileDetection ────────────────────────────────────── */

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { const c = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c); }, []);
  return isMobile;
};

/* ─── MagicBento ────────────────────────────────────────────── */

const MagicBento: React.FC<BentoProps> = ({
  cards,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const off = disableAnimations || isMobile;

  return (
    <>
      <style>{`
        .bento-section{--glow-x:50%;--glow-y:50%;--glow-intensity:0;--glow-radius:200px;--glow-color:${glowColor};--bento-border:#1a1525;--bento-bg:#0a0a0f;--bento-white:#ffffff;--bento-purple:rgba(124,58,237,1);--bento-purple-glow:rgba(124,58,237,0.2);--bento-purple-border:rgba(124,58,237,0.8);}
        .bento-card-grid{grid-template-columns:1fr;width:100%;padding:0.5rem;}
        @media(min-width:600px){.bento-card-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:1024px){.bento-card-grid{grid-template-columns:repeat(4,1fr);}
          .bento-card-grid .bento-card:nth-child(3){grid-column:span 2;grid-row:span 2;}
          .bento-card-grid .bento-card:nth-child(4){grid-column:1/span 2;grid-row:2/span 2;}
          .bento-card-grid .bento-card:nth-child(6){grid-column:4;grid-row:3;}}
        .bento-card--border-glow::after{content:'';position:absolute;inset:0;padding:6px;background:radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),rgba(${glowColor},calc(var(--glow-intensity)*0.8)) 0%,rgba(${glowColor},calc(var(--glow-intensity)*0.4)) 30%,transparent 60%);border-radius:inherit;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;pointer-events:none;opacity:1;transition:opacity .3s ease;z-index:1;}
        .bento-card--border-glow:hover::after{opacity:1;}
        .bento-card--border-glow:hover{box-shadow:0 4px 20px rgba(76,29,149,0.4),0 0 30px rgba(${glowColor},0.2);}
        .bento-particle::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;background:rgba(${glowColor},0.2);border-radius:50%;z-index:-1;}
        .bento-text-clamp-1{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;line-clamp:1;overflow:hidden;text-overflow:ellipsis;}
        .bento-text-clamp-2{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2;overflow:hidden;text-overflow:ellipsis;}
      `}</style>

      {enableSpotlight && <GlobalSpotlight gridRef={gridRef} disableAnimations={off} enabled={enableSpotlight} spotlightRadius={spotlightRadius} glowColor={glowColor} />}

      <div className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }} ref={gridRef}>
        <div className="bento-card-grid grid gap-2">
          {cards.map((card, index) => {
            const cls = `bento-card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-colors duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? 'bento-card--border-glow' : ''}`;
            const sty = { backgroundColor: card.color || 'var(--bento-bg)', borderColor: 'var(--bento-border)', color: 'var(--bento-white)', '--glow-x': '50%', '--glow-y': '50%', '--glow-intensity': '0', '--glow-radius': '200px' } as React.CSSProperties;

            if (enableStars) {
              return (
                <ParticleCard key={index} className={cls} style={sty} disableAnimations={off} particleCount={particleCount} glowColor={glowColor} enableTilt={enableTilt} clickEffect={clickEffect} enableMagnetism={enableMagnetism}>
                  <div className="flex items-center justify-between gap-3 relative text-white">
                    {card.icon && <span className="text-lg opacity-80">{card.icon}</span>}
                    <span className="text-xs font-mono uppercase tracking-wider opacity-60">{card.label}</span>
                  </div>
                  <div className="flex flex-col relative text-white mt-auto">
                    <h3 className={`font-semibold text-base m-0 mb-1 ${textAutoHide ? 'bento-text-clamp-1' : ''}`} style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                    <p className={`text-xs leading-5 opacity-70 ${textAutoHide ? 'bento-text-clamp-2' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>{card.description}</p>
                    {card.footer && <div className="mt-2">{card.footer}</div>}
                  </div>
                </ParticleCard>
              );
            }

            return (
              <div key={index} className={cls} style={sty}>
                <div className="flex items-center justify-between gap-3 relative text-white">
                  {card.icon && <span className="text-lg opacity-80">{card.icon}</span>}
                  <span className="text-xs font-mono uppercase tracking-wider opacity-60">{card.label}</span>
                </div>
                <div className="flex flex-col relative text-white mt-auto">
                  <h3 className={`font-semibold text-base m-0 mb-1 ${textAutoHide ? 'bento-text-clamp-1' : ''}`} style={{ fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                  <p className={`text-xs leading-5 opacity-70 ${textAutoHide ? 'bento-text-clamp-2' : ''}`} style={{ fontFamily: 'var(--font-body)' }}>{card.description}</p>
                  {card.footer && <div className="mt-2">{card.footer}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MagicBento;
