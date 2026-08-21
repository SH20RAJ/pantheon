import React from 'react';
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/[0.05] bg-black/80 backdrop-blur-2xl overflow-hidden font-sans pt-16 pb-6">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-[1920px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/[0.1] pb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
           
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white uppercase leading-none">
              Pantheon <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-white/20">'26</span>
            </h2>
            <p className="mt-3 text-[10px] font-semibold tracking-[0.3em] text-white/50 uppercase">
              Tradition to Technology
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-[10px] font-mono tracking-[0.1em] text-white/40">
              LOC: 23°24'58"N 85°26'12"E
            </p>
            <p className="text-[10px] font-mono tracking-[0.1em] text-white/40">
              DATE: 04—06 SEP
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 py-12">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold text-white/70 tracking-[0.2em] uppercase mb-2">Navigation</h3>
            {['Events', 'Team', 'Schedule', 'Sponsors', 'Register'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="group flex items-center gap-2 text-[12px] font-medium text-white/40 hover:text-violet-300 transition-colors w-fit">
                <span className="text-violet-500/0 group-hover:text-violet-500 transition-colors duration-300 font-mono">{'>'}</span>
                <span className="tracking-[0.1em] uppercase">{link}</span>
              </a>
            ))}
          </div>


          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-bold text-white/70 tracking-[0.2em] uppercase mb-2">Initialize Contact</h3>
            <a href="mailto:pantheon@bitmesra.ac.in" className="flex items-center gap-3 text-[11px] text-white/40 hover:text-white transition-colors tracking-[0.1em]">
              <FiMail size={16} className="text-violet-400/70" />
              pantheon@bitmesra.ac.in
            </a>
            <div className="flex items-start gap-3 text-[11px] text-white/40 tracking-[0.1em] leading-relaxed">
              <FiMapPin size={16} className="text-violet-400/70 shrink-0 mt-0.5" />
              <p>Birla Institute of Technology<br/>Mesra, Ranchi<br/>Jharkhand 835215</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2 lg:items-end">
            <h3 className="text-[11px] font-bold text-white/70 tracking-[0.2em] uppercase mb-2">Network</h3>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, label: "Insta" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaGithub, label: "GitHub" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)]"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            <a href="#register" className="group mt-4 flex items-center justify-between gap-4 border border-violet-500/30 bg-violet-500/10 px-6 py-3 rounded-sm hover:bg-violet-500/20 transition-all duration-300 w-full md:w-auto min-w-[200px]">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Enter Pantheon</span>
              <FiArrowUpRight size={14} className="text-violet-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-[9px] font-mono tracking-[0.15em] text-white/30 uppercase">
            &copy; {new Date().getFullYear()} Pantheon. All Rights Reserved.
          </p>
          
          <a 
            href="#"
            className="group flex items-center gap-2 text-[9px] font-mono tracking-[0.2em] text-white/30 hover:text-violet-400 transition-colors uppercase"
          >
            <span className="w-4 h-px bg-white/30 group-hover:bg-violet-400 transition-colors"></span>
            Return to Top
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;