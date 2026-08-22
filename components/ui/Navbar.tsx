"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Hexagon, Menu, X } from "lucide-react";

const navItems = [
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Schedule", href: "#schedule" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`
            pointer-events-auto relative flex items-center justify-between w-full max-w-5xl 
            rounded-full border border-white/[0.08] p-1.5
            transition-all duration-500 ease-out
            ${
              scrolled
                ? "bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(124,58,237,0.1)]"
                : "bg-black/30 backdrop-blur-md"
            }
          `}
        >
          <div className="absolute inset-x-0 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 pl-4 pr-6 py-2 border-r border-white/[0.08] group"
          >
            <div className="relative flex items-center justify-center">
              <Hexagon size={20} className="text-violet-400/80 group-hover:text-violet-400 transition-colors" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[13px] font-bold tracking-[0.2em] text-white leading-none uppercase">
                Pantheon <span className="text-violet-300 font-light">'26</span>
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  relative px-5 py-2 rounded-full
                  text-[11px] font-medium uppercase tracking-[0.15em] text-white/60
                  transition-all duration-300
                  hover:text-white hover:bg-white/[0.06]
                "
              >
                {item.label}
              </a>
            ))}
          </div>

        
          <div className="hidden lg:flex items-center gap-4 pl-6 pr-1 border-l border-white/[0.08]">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase">
              04—06 Sep
            </span>
            
            <a
              href="#register"
              className="
                group flex items-center gap-2 
                rounded-full bg-white text-black 
                px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em]
                transition-all duration-300
                hover:bg-violet-400 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]
              "
            >
              Enter Pantheon
              <ArrowRight 
                size={14} 
                strokeWidth={2.5} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center h-10 w-10 mr-1 rounded-full bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <div
        className={`
          fixed top-24 left-4 right-4 z-40 max-w-5xl mx-auto
          transition-all duration-500 ease-out origin-top
          ${menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
        `}
      >
        <div className="rounded-3xl border border-white/[0.08] bg-black/80 backdrop-blur-2xl p-4 shadow-2xl flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors text-white/70 hover:text-white"
            >
              <span className="text-[12px] font-medium tracking-[0.2em] uppercase">
                {item.label}
              </span>
              <ArrowRight size={16} className="opacity-30" />
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-violet-500 text-white text-[12px] font-bold uppercase tracking-[0.2em]"
          >
            Enter Pantheon
          </a>
        </div>
      </div>
    </>
  );
}