"use client";

import React from "react";
import { MOCK_TEAMS, MOCK_LOGGED_IN_STUDENT } from "@/app/data/teamsData";

// Team emblem SVG renderer supporting all 12 teams
function TeamEmblem({ teamId, className = "size-10" }: { teamId: string; className?: string }) {
  switch (teamId) {
    case "syntax-terror":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      );
    case "sabke-damad":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l4 4m-4-4L8 7m4 14l4-4m-4 4L8 17" />
        </svg>
      );
    case "not-my-type":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
        </svg>
      );
    case "runtime-rebels":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "ctrl-alt-elite":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21m9-3.75v1.007a3 3 0 00.879 2.122L16.5 21M3 6.75h18M3 12h18M3 17.25h18" />
        </svg>
      );
    case "null-pointers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      );
    case "code-blooded":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case "out-of-scope":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
        </svg>
      );
    case "byte-me":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" />
        </svg>
      );
    case "stack-overflowers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9m-9 4.5h9m-9 4.5h9M3 3.75h18M3 20.25h18" />
        </svg>
      );
    case "bug-slayers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      );
    case "the-debuggers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function TeamsPage() {
  const currentTeamId = MOCK_LOGGED_IN_STUDENT.permanentTeamId;

  // Pin user's team to the top, then sort others by rank (or name alphabetically)
  // Let's sort alphabetically by name as the default directory order, with the pinned one at index 0.
  const sortedTeams = [...MOCK_TEAMS].sort((a, b) => {
    if (a.id === currentTeamId) return -1;
    if (b.id === currentTeamId) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 font-mono">
      {/* Decorative Grid Line Overlay */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-[600px]
          bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]
          bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Header Section */}
        <div className="border-b border-pantheon-border pb-8 mb-12">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-pantheon-purple animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-pantheon-purple-light font-bold">
                  Pantheon '26 Registry
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.1em] text-white">
                Teams Directory
              </h1>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-[10px] uppercase tracking-[0.15em] text-pantheon-muted block">
                Session Active
              </span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-pantheon-purple-light font-semibold">
                Student: {MOCK_LOGGED_IN_STUDENT.name}
              </span>
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTeams.map((team) => {
            const isUserTeam = team.id === currentTeamId;

            return (
              <a
                key={team.id}
                href={`/teams/${team.id}`}
                className={`
                  group relative flex flex-col justify-between
                  rounded-[1rem] bg-gradient-to-b from-white/[0.03] to-transparent
                  shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]
                  p-6 border min-h-[220px]
                  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-0.5
                  ${
                    isUserTeam
                      ? "border-pantheon-purple/50 bg-pantheon-purple/[0.03] shadow-[0_0_20px_rgba(124,58,237,0.12),inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-pantheon-purple"
                      : "border-pantheon-border hover:border-pantheon-purple/40 hover:shadow-[0_4px_25px_rgba(124,58,237,0.1)]"
                  }
                `}
              >
                {/* Background wash for user team */}
                {isUserTeam && (
                  <div className="absolute inset-0 rounded-[1rem] bg-pantheon-purple/[0.02] pointer-events-none" />
                )}

                {/* Card Top Block */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    {/* Emblem & Name */}
                    <div className="flex items-center gap-3">
                      <div className={`
                        grid size-12 place-items-center border rounded-lg
                        ${
                          isUserTeam
                            ? "border-pantheon-purple/35 bg-pantheon-purple/[0.08] text-pantheon-purple-light"
                            : "border-pantheon-border bg-white/[0.02] text-pantheon-muted group-hover:text-pantheon-purple-light group-hover:border-pantheon-purple/30"
                        }
                        transition-colors duration-300
                      `}>
                        <TeamEmblem teamId={team.id} className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-pantheon-purple-light transition-colors duration-300">
                          {team.name}
                        </h3>
                        <span className="text-[9px] uppercase tracking-[0.1em] text-pantheon-subtle">
                          {team.slug}
                        </span>
                      </div>
                    </div>

                    {/* Badge tags */}
                    <div className="flex flex-col items-end gap-1.5">
                      {isUserTeam && (
                        <span className="rounded-full bg-pantheon-purple/8 border border-pantheon-purple/35 text-pantheon-purple-light text-[8px] px-2 py-0.5 tracking-[0.1em] font-bold uppercase whitespace-nowrap">
                          Your Team
                        </span>
                      )}
                      <span className="rounded-full bg-white/[0.04] border border-white/5 text-pantheon-muted text-[8px] px-2 py-0.5 tracking-[0.1em] font-semibold uppercase">
                        Rank #{team.rank}
                      </span>
                    </div>
                  </div>

                  {/* Slogan */}
                  {team.slogan && (
                    <p className="text-[11px] text-pantheon-muted italic tracking-wide leading-relaxed line-clamp-2 mt-2">
                      "{team.slogan}"
                    </p>
                  )}
                </div>

                {/* Card Bottom Block */}
                <div className="mt-6 pt-4 border-t border-pantheon-border-subtle flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.12em] text-pantheon-subtle">
                      Total Score
                    </span>
                    <span className="text-xs font-bold text-pantheon-purple-light">
                      {team.totalPoints} PTS
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[9px] uppercase tracking-[0.12em] text-pantheon-subtle">
                      Roster Size
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {team.memberCount} Members
                    </span>
                  </div>
                </div>

                {/* Hover arrow element */}
                <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pantheon-purple-light">
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
