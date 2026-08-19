"use client";

import React from "react";
import { Zap, Phone, Mail, Globe, Shield } from "lucide-react";
import { FEST_DETAILS } from "../data/pantheonData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold text-slate-100 tracking-wider font-mono">
              {FEST_DETAILS.name}
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The annual science & technology festival of Birla Institute of Technology, Mesra, Ranchi. Celebrating 26 years of technical innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="#events" className="hover:text-cyan-400 transition-colors">Events & Rules</a></li>
            <li><a href="#hackquest" className="hover:text-cyan-400 transition-colors">HackQuest 2.0</a></li>
            <li><a href="#schedule" className="hover:text-cyan-400 transition-colors">Fest Itinerary</a></li>
            <li><a href="#map" className="hover:text-cyan-400 transition-colors">BIT Mesra Map</a></li>
            <li><a href="#sponsors" className="hover:text-cyan-400 transition-colors">Sponsors</a></li>
          </ul>
        </div>

        {/* Official Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Resources & Docs</h4>
          <ul className="space-y-2">
            <li><a href="https://pantheon25.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> Pantheon 2025 Archive</a></li>
            <li><a href="https://www.bitmesra.ac.in" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">BIT Mesra Official Site</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Code of Conduct</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Student Conveners & Contacts */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Emergency Contacts</h4>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-slate-300">Mrityunjay Raj</p>
              <a href="tel:+919471828932" className="text-cyan-400 font-mono hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> +91 9471828932
              </a>
            </div>
            <div>
              <p className="font-semibold text-slate-300">Rishav Kamal</p>
              <a href="tel:+917667993009" className="text-cyan-400 font-mono hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> +91 7667993009
              </a>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a href="https://www.instagram.com/pantheon_techfest/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/bitmesra.pantheon/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p>© {new Date().getFullYear()} PANTHEON • Birla Institute of Technology, Mesra, Ranchi. All rights reserved.</p>
        <p className="text-slate-400 font-mono">Built with vinext + Cloudflare Workers</p>
      </div>
    </footer>
  );
};
