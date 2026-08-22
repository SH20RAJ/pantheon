'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

/* ── Types ── */
export interface Developer {
  name: string;
  image: string;
  role?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

interface DeveloperCardProps {
  developer: Developer;
  glowColor?: string;
  enableTilt?: boolean;
}

/* ── Social Icons (inline SVGs) ── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* ── Card Component ── */
const DeveloperCard: React.FC<DeveloperCardProps> = ({
  developer,
  glowColor = '124, 58, 237',
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableTilt || !cardRef.current) return;
    const el = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.15,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      el.style.setProperty('--glow-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      el.style.setProperty('--glow-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    };

    const handleMouseLeave = () => {
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.35, ease: 'power2.out' });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enableTilt]);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-pantheon-border bg-pantheon-surface p-8 pb-10 min-h-[320px] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(124,58,237,0.15)]"
      style={{
        '--glow-x': '50%',
        '--glow-y': '50%',
      } as React.CSSProperties}
    >
      {/* Glow border effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(300px circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, 0.15), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Avatar */}
      <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-2 border-pantheon-border transition-all duration-300 group-hover:border-pantheon-purple-light">
        <img
          src={developer.image}
          alt={developer.name}
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Name */}
      <h4
        className="relative z-10 mb-1 text-center text-lg font-semibold text-pantheon-white"
        style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
      >
        {developer.name}
      </h4>

      {/* Role */}
      {developer.role && (
        <p className="relative z-10 mb-4 text-center text-xs uppercase tracking-[0.15em] text-pantheon-muted">
          {developer.role}
        </p>
      )}

      {/* Social Icons */}
      <div className="relative z-10 mt-auto flex items-center gap-4">
        {developer.instagram && (
          <a
            href={developer.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-pantheon-muted transition-colors duration-200 hover:text-[#E1306C]"
            aria-label={`${developer.name} Instagram`}
          >
            <InstagramIcon />
          </a>
        )}
        {developer.linkedin && (
          <a
            href={developer.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-pantheon-muted transition-colors duration-200 hover:text-[#0A66C2]"
            aria-label={`${developer.name} LinkedIn`}
          >
            <LinkedinIcon />
          </a>
        )}
        {developer.github && (
          <a
            href={developer.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-pantheon-muted transition-colors duration-200 hover:text-pantheon-white"
            aria-label={`${developer.name} GitHub`}
          >
            <GithubIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default DeveloperCard;
