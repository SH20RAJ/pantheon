"use client";

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import DotGrid from '@/components/ui/Dotgrid';
import { Terminal, Hexagon, Activity, Share2, Target, Zap } from 'lucide-react';

const mockUser = {
  name: "ALEX_MERCER",
  role: "NETRUNNER",
  level: 42,
  avatar: "/globe_1.jpeg", // Using existing placeholder images
};

const mockTeam = {
  name: "NEON_SYNDICATE",
  rank: 3,
  score: 8450,
  members: [
    { name: "ALEX_MERCER", role: "CAPTAIN", isMe: true },
    { name: "SARA_CONNOR", role: "HACKER", isMe: false },
    { name: "JOHN_DOE", role: "ENGINEER", isMe: false },
    { name: "JANE_SMITH", role: "DESIGNER", isMe: false },
  ]
};

const mockEvents = [
  { id: 1, title: "HACKATHON_V2", category: "CODING", status: "COMPLETED", date: "24.10.2026", score: 1200 },
  { id: 2, title: "ROBO_WARS", category: "ROBOTICS", status: "UPCOMING", date: "26.10.2026", score: 0 },
  { id: 3, title: "UI_UX_DESIGN_CHALLENGE", category: "DESIGN", status: "ACTIVE", date: "CURRENT", score: 450 },
  { id: 4, title: "CAPTURE_THE_FLAG", category: "SECURITY", status: "COMPLETED", date: "22.10.2026", score: 950 },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-hidden font-mono flex flex-col relative">
      <Navbar />
      
      {/* Dynamic Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-[#050505]/80 to-[#050505]" />
        {/* Spotlight effect behind header */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        {/* CRT Scanline Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] mix-blend-overlay opacity-50" />
      </div>

      <div className="relative z-10 flex-grow container mx-auto px-4 md:px-8 pt-40 md:pt-48 pb-24">
        
        {/* HEADER: Identity */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-20 relative">
          {/* Avatar box */}
          <div className="relative w-32 h-32 md:w-48 md:h-48 border border-white/20 p-2 bg-[#050505] group shrink-0 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transition-all duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-purple-500" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500" />
            
            <img src={mockUser.avatar} className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt="Avatar" />
            
            <div className="absolute bottom-0 left-0 right-0 bg-purple-500 text-black text-[10px] md:text-xs font-black text-center py-1.5 uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              LVL {mockUser.level}
            </div>
          </div>

          <div className="flex flex-col justify-center flex-grow mt-4 md:mt-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              {mockUser.name}
            </h1>
            <p className="text-purple-400 text-sm md:text-base tracking-[0.3em] uppercase mb-6 flex items-center gap-3 font-bold">
              <span className="text-gray-500">&gt;_</span> {mockUser.role}
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COL: Team Info */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            
            <div className="border border-white/10 bg-[#0a0a0a] p-6 relative group shadow-2xl">
               {/* Cyberpunk accents */}
               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 to-transparent opacity-50" />
               <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                 <h2 className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
                   <Hexagon className="w-5 h-5 text-purple-400" /> SQUAD
                 </h2>
                 <span className="text-[10px] text-purple-400 tracking-widest border border-purple-500/30 px-2 py-1 bg-purple-500/10">ACTIVE</span>
               </div>

               <div className="text-center mb-8">
                 <p className="text-xs text-gray-500 tracking-widest mb-1">TEAM_NAME</p>
                 <h3 className="text-3xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                   {mockTeam.name}
                 </h3>
               </div>

               <div className="flex justify-between items-center bg-black/80 p-4 mb-6 border border-white/5">
                 <div className="text-center">
                   <p className="text-[10px] text-gray-400 tracking-widest mb-1">RANK</p>
                   <p className="text-2xl font-black text-purple-400">#{mockTeam.rank}</p>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="text-center">
                   <p className="text-[10px] text-gray-400 tracking-widest mb-1">SCORE</p>
                   <p className="text-2xl font-black text-white">{mockTeam.score}</p>
                 </div>
               </div>

               <div className="space-y-3">
                 <p className="text-xs text-gray-500 tracking-widest mb-2 border-b border-white/5 pb-2">ROSTER</p>
                 {mockTeam.members.map((member, i) => (
                   <div key={i} className={`flex items-center justify-between p-3 text-sm ${member.isMe ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-black/40 border border-white/5 hover:bg-white/5'} transition-colors cursor-default`}>
                     <span className={`font-bold uppercase ${member.isMe ? 'text-purple-400' : 'text-gray-300'}`}>{member.name}</span>
                     <span className="text-[10px] text-gray-500 tracking-widest">{member.role}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-6 flex flex-col gap-2">
                  <button className="w-full py-3 bg-purple-600 text-white text-xs font-bold tracking-widest uppercase hover:bg-purple-500 transition-colors border border-purple-500">
                    EDIT TEAM
                  </button>
               </div>
            </div>

          </div>

          {/* RIGHT COL: Event Participations */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 bg-[#050505] sticky top-20 z-20">
              <h2 className="text-2xl font-black tracking-widest uppercase flex items-center gap-2">
                <Activity className="w-6 h-6 text-purple-400" /> Events Participated
              </h2>
              <div className="text-xs tracking-widest text-gray-500 border border-white/10 px-3 py-1 bg-black/50">
                TOTAL: {mockEvents.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockEvents.map((event) => (
                <div key={event.id} className="border border-white/10 bg-[#0a0a0a] p-6 relative group hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] tracking-widest px-2 py-1 border border-white/10 bg-black uppercase text-gray-300">
                        {event.category}
                      </span>
                      <span className={`text-[10px] tracking-widest uppercase font-bold flex items-center gap-1 ${
                        event.status === 'COMPLETED' ? 'text-gray-500' : 
                        event.status === 'ACTIVE' ? 'text-purple-400 animate-pulse' : 'text-green-400'
                      }`}>
                        {event.status === 'ACTIVE' && <Zap className="w-3 h-3" />}
                        {event.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight uppercase mb-6 text-white group-hover:text-purple-300 transition-colors">
                      {event.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs tracking-widest text-gray-500 border-t border-white/10 pt-4">
                      <span>{event.date}</span>
                      {event.score > 0 && (
                         <span className="text-purple-400 font-bold">+{event.score} PTS</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state / explore more */}
            <div className="mt-4 border border-dashed border-white/20 p-8 text-center bg-[#0a0a0a] hover:bg-[#111] transition-colors cursor-pointer group">
              <Target className="w-8 h-8 text-gray-600 mx-auto mb-4 group-hover:text-purple-400 transition-colors" />
              <h4 className="text-lg font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors mb-2">NO NEW MISSIONS</h4>
              <p className="text-sm text-gray-600 tracking-widest">BROWSE EVENTS TO DEPLOY</p>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
