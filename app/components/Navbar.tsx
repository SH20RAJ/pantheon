"use client";

import React, { useState, useEffect } from "react";
import { Zap, Menu, X, Rocket, Compass, Calendar, MapPin, Award, Users, HelpCircle } from "lucide-react";
import { FEST_DETAILS } from "../data/pantheonData";

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Events", href: "#events", icon: Compass },
    { name: "HackQuest", href: "#hackquest", icon: Rocket },
    { name: "Schedule", href: "#schedule", icon: Calendar },
    { name: "Campus Map", href: "#map", icon: MapPin },
    { name: "Sponsors", href: "#sponsors", icon: Award },
    { name: "Team", href: "#team", icon: Users },
    { name: "FAQs", href: "#faq", icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-cyan-950/20" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20 group-hover:animate-bounce" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                {FEST_DETAILS.name}
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                BIT MESRA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 rounded-full transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Register Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenRegister}
              className="relative group px-5 py-2 rounded-full text-xs font-semibold text-slate-950 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400 transition-all duration-300 group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-slate-950" />
                Register Now
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-950/95 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.name}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Rocket className="w-4 h-4" />
              Register Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
