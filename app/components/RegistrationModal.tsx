"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Rocket, Ticket, User, Mail, School, Phone, Building } from "lucide-react";
import { EVENTS_DATA } from "../data/pantheonData";

interface RegistrationModalProps {
  initialEventId?: string;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ initialEventId, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    selectedEvent: initialEventId || EVENTS_DATA[0].id,
    teamName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.college) {
      setSubmitted(true);
    }
  };

  const selectedEventObj = EVENTS_DATA.find((e) => e.id === formData.selectedEvent) || EVENTS_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Ticket className="w-3.5 h-3.5" /> Delegate Pass Registration
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Register for Pantheon '26
              </h2>
              <p className="text-xs text-slate-400">
                Fill in your details to secure your spot and generate your official digital pass.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="block text-slate-300 font-semibold">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shaswat Raj"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-slate-300 font-semibold">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="student@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-300 font-semibold">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-slate-300 font-semibold">College / University Name *</label>
                <div className="relative">
                  <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. BIT Mesra, Ranchi"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-slate-300 font-semibold">Select Event Track *</label>
                  <select
                    value={formData.selectedEvent}
                    onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {EVENTS_DATA.map((ev) => (
                      <option key={ev.id} value={ev.id}>
                        {ev.title} ({ev.category.toUpperCase()})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-300 font-semibold">Team Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. CyberKnights"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                Confirm & Generate Digital Pass
                <Rocket className="w-4 h-4" />
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-200">
            <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-100">Registration Successful!</h2>
              <p className="text-xs text-slate-300">
                Welcome to Pantheon '26! Your digital entry badge has been generated.
              </p>
            </div>

            {/* Simulated Digital Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 border border-cyan-500/40 text-left space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-cyan-300 tracking-wider">PANTHEON '26 DELEGATE PASS</span>
                <span className="text-[10px] font-mono text-purple-400">ID: #PAN26-8942</span>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-extrabold text-slate-100">{formData.name}</div>
                <div className="text-xs text-slate-400">{formData.college}</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 block">EVENT TRACK</span>
                  <span className="font-semibold text-cyan-400">{selectedEventObj.title}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">TEAM</span>
                  <span className="font-semibold text-purple-300">{formData.teamName || "Individual"}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Done & Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
