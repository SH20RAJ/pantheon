"use client";

import React from "react";
import { X, Calendar, Clock, MapPin, Trophy, Users, Shield, Phone, ExternalLink } from "lucide-react";
import { EventItem } from "../data/pantheonData";

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose, onRegister }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-950 text-cyan-400 border border-cyan-800">
              {event.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
              {event.club}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">{event.title}</h2>
          <p className="text-sm text-cyan-400 font-medium">{event.subtitle}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" /> Prize Pool
            </span>
            <p className="text-sm font-bold text-amber-300">{event.prizePool}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-cyan-400" /> Team Size
            </span>
            <p className="text-sm font-semibold text-slate-200">{event.teamSize}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> Date & Time
            </span>
            <p className="text-xs font-medium text-slate-300">{event.date} ({event.time})</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-pink-400" /> Venue
            </span>
            <p className="text-xs font-medium text-slate-300">{event.venue}</p>
          </div>
        </div>

        {/* Event Overview */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" /> Event Overview
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/30 p-4 rounded-xl border border-slate-800/50">
            {event.overview}
          </p>
        </div>

        {/* Rulebook */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-200">Rulebook & Guidelines</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside bg-slate-950/30 p-4 rounded-xl border border-slate-800/50">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="leading-relaxed">{rule}</li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-slate-200">Event Student Coordinators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {event.contacts.map((c, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                <div>
                  <p className="text-xs font-semibold text-slate-200">{c.name}</p>
                  <p className="text-[10px] text-cyan-400">{c.role}</p>
                </div>
                <a
                  href={`tel:${c.phone}`}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {c.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onRegister(event.id);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-2"
          >
            Register for {event.title}
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
