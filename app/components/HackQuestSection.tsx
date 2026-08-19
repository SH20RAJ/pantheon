"use client";

import React from "react";
import { Rocket, Cpu, Terminal, Shield, Award, CheckCircle2, ArrowRight } from "lucide-react";

interface HackQuestSectionProps {
  onRegister: () => void;
}

export const HackQuestSection: React.FC<HackQuestSectionProps> = ({ onRegister }) => {
  const tracks = [
    { title: "Generative AI & LLMs", desc: "Build agentic tools, RAG architectures, and fine-tuned open-weights models." },
    { title: "Smart Cities & Mobility", desc: "Computer vision traffic systems, FPV drone routing, and eco-efficiency playbooks." },
    { title: "Web3 & Decentralized Tech", desc: "Tokenized reputation systems, zero-knowledge proofs, and smart contracts." },
    { title: "FinTech & Conversational Automation", desc: "SplitKaro AI expense chatbots and automated banking signal parsing." },
    { title: "HealthTech & Wearable Baselines", desc: "Privacy-preserving digital exhaust tracking and clinical baseline analytics." },
    { title: "Open Innovation", desc: "Unrestricted track to solve bold real-world problems using hybrid tech stacks." },
  ];

  return (
    <section id="hackquest" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-cyan-950/40 space-y-12">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5" /> Flagship Hackathon
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              HackQuest 2.0 <span className="text-cyan-400 font-mono text-2xl sm:text-3xl">(36 Hours)</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Assemble at BIT Mesra's R&D Complex for 36 hours of non-stop coding, hardware hacking, VC mentorship, and ₹1.5 Lakhs in cash prizes & cloud credits.
            </p>
          </div>

          <button
            onClick={onRegister}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            Apply for HackQuest 2.0
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
            <Award className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-slate-100">₹1,50,000 Cash Pool</div>
              <div className="text-xs text-slate-400">+ Incubation Grant & Swag</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
            <Cpu className="w-8 h-8 text-cyan-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-slate-100">36 Hours Non-Stop</div>
              <div className="text-xs text-slate-400">R&D Labs & Fiber Internet</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
            <Terminal className="w-8 h-8 text-purple-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-slate-100">1-on-1 VC Mentorship</div>
              <div className="text-xs text-slate-400">Pitch to Industry Leaders</div>
            </div>
          </div>
        </div>

        {/* Tracks List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" /> Hackathon Tracks & Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-cyan-500/40 transition-colors space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  Track 0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-200">{track.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
