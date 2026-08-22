"use client";

import React, { use, useMemo, useState } from "react";
import {
  MOCK_TEAMS,
  MOCK_STUDENTS,
  MOCK_LOGGED_IN_STUDENT,
  getTeamEventHistory
} from "@/app/data/teamsData";

// Team emblem SVG renderer supporting all 12 teams
function TeamEmblem({ teamId, className = "size-16" }: { teamId: string; className?: string }) {
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

interface PageProps {
  params: Promise<{
    teamId: string;
  }> | {
    teamId: string;
  };
}

export default function TeamProfilePage({ params }: PageProps) {
  const [activeTab, setActiveTab] = useState<"roster" | "history" | "achievements">("roster");

  // Unwrap params if it is a Promise (React 19 / Next 15) or resolve synchronously
  const resolvedParams = params && typeof (params as any).then === "function"
    ? use(params as any) as { teamId: string }
    : params as { teamId: string };

  const teamIdResolved = resolvedParams?.teamId;

  // Find Team
  const team = useMemo(() => {
    return MOCK_TEAMS.find(
      (t) => t.id === teamIdResolved || t.slug === teamIdResolved
    );
  }, [teamIdResolved]);

  // Is Viewer a Member of this team?
  const isUserTeam = useMemo(() => {
    return team?.id === MOCK_LOGGED_IN_STUDENT.permanentTeamId;
  }, [team]);

  // Roster: Students belonging to this team, sorted by points contribution descending
  const teamRoster = useMemo(() => {
    if (!team) return [];
    return MOCK_STUDENTS.filter((s) => s.permanentTeamId === team.id).sort(
      (a, b) => b.totalPointsContributed - a.totalPointsContributed
    );
  }, [team]);

  // Top Contributor
  const topContributor = useMemo(() => {
    if (teamRoster.length === 0) return null;
    return teamRoster[0].totalPointsContributed > 0 ? teamRoster[0] : null;
  }, [teamRoster]);

  // History: Reverse-chronological event participations of students belonging to this team
  const eventHistory = useMemo(() => {
    if (!team) return [];
    return getTeamEventHistory(team.id);
  }, [team]);

  // Milestones/Achievements based on team stats
  const teamAchievements = useMemo(() => {
    if (!team) return [];
    const list = [
      {
        title: "NEXUS INITIATED",
        desc: "Officially registered in the Pantheon '26 Database Roster.",
        achieved: true,
      },
    ];

    if (team.totalPoints >= 500) {
      list.push({
        title: "CENTURY MARK",
        desc: "Accumulated more than 500 total points across events.",
        achieved: true,
      });
    }

    if (team.totalPoints >= 1000) {
      list.push({
        title: "MILLENNIUM CLUB",
        desc: "Surpassed the 1000 total points threshold. Elite performance.",
        achieved: true,
      });
    }

    if (team.totalPoints >= 1500) {
      list.push({
        title: "NEXUS TITANS",
        desc: "Exceeded 1500 total points. A leading powerhouse in the arena.",
        achieved: true,
      });
    }

    if (team.rank <= 3) {
      list.push({
        title: "PODIUM CONTENDER",
        desc: "Currently holding a Top 3 seed in the active standings.",
        achieved: true,
      });
    }

    if (team.id === "syntax-terror") {
      list.push({
        title: "FLAGSHIP CHAMPIONS",
        desc: "Claimed 1st place in the 36-hour HackQuest 2.0 hackathon.",
        achieved: true,
      });
    }

    return list;
  }, [team]);

  if (!team) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 pb-20 font-mono flex items-center justify-center">
        <div className="text-center p-8 border border-pantheon-purple/35 bg-pantheon-purple/5 max-w-md mx-auto">
          <h1 className="text-2xl font-black uppercase text-pantheon-purple-light mb-2">
            [ERR: 404_TEAM_NOT_FOUND]
          </h1>
          <p className="text-xs text-pantheon-muted mb-6 leading-relaxed">
            The requested team identifier does not exist or has been de-registered from the registry database.
          </p>
          <a
            href="/teams"
            className="inline-block border border-white/20 bg-white text-black px-4 py-2 text-xs uppercase font-bold tracking-wider hover:bg-pantheon-purple hover:text-white hover:border-pantheon-purple transition-all"
          >
            ← Back to Directory
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-28 pb-20 font-mono">
      {/* Background grid lines */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 h-[600px]
          bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)]
          bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
        "
      />

      <div className="relative mx-auto max-w-5xl px-4 md:px-6">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <a
            href="/teams"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-pantheon-muted hover:text-pantheon-purple-light transition-colors duration-300"
          >
            <span>← Directory</span>
          </a>
        </div>

        {/* Identity Header Card */}
        <div className={`
          relative rounded-[1rem] bg-gradient-to-b from-white/[0.03] to-transparent
          shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] border p-6 md:p-8 mb-10
          ${
            isUserTeam
              ? "border-pantheon-purple/50 bg-pantheon-purple/[0.02]"
              : "border-pantheon-border"
          }
        `}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Logo, Name, Slogan */}
            <div className="flex items-center gap-5">
              <div className={`
                grid size-16 md:size-20 place-items-center border rounded-xl
                ${
                  isUserTeam
                    ? "border-pantheon-purple/40 bg-pantheon-purple/[0.08] text-pantheon-purple-light"
                    : "border-pantheon-border bg-white/[0.02] text-pantheon-muted"
                }
              `}>
                <TeamEmblem teamId={team.id} className="size-10 md:size-12" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1">
                  <h1 className="text-xl md:text-3xl font-black uppercase tracking-wider text-white">
                    {team.name}
                  </h1>
                  {isUserTeam && (
                    <span className="rounded-full bg-pantheon-purple/8 border border-pantheon-purple/35 text-pantheon-purple-light text-[8px] px-2 py-0.5 tracking-[0.1em] font-bold uppercase">
                      Your Team
                    </span>
                  )}
                </div>
                {team.slogan && (
                  <p className="text-xs text-pantheon-muted italic tracking-wide">
                    "{team.slogan}"
                  </p>
                )}
                <span className="text-[9px] uppercase tracking-[0.15em] text-pantheon-subtle block mt-1">
                  ID: {team.id}
                </span>
              </div>
            </div>

            {/* Quick Stats & Leaderboard Redirect */}
            <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:gap-8 border-t border-pantheon-border-subtle pt-6 md:border-t-0 md:pt-0">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.12em] text-pantheon-subtle">
                  Standing Rank
                </span>
                <span className="text-lg font-bold text-white">
                  Rank #{team.rank}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.12em] text-pantheon-subtle">
                  Cumulative Score
                </span>
                <span className="text-lg font-bold text-pantheon-purple-light">
                  {team.totalPoints} PTS
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 flex items-end">
                <a
                  href="/"
                  className="
                    w-full text-center border border-white/10 bg-white/5 hover:border-pantheon-purple/50
                    px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] font-bold text-pantheon-white
                    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:shadow-[0_0_15px_var(--color-pantheon-purple-glow)]
                  "
                >
                  View Leaderboard
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-pantheon-border mb-8">
          {(["roster", "history", "achievements"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative px-6 py-3 font-mono text-[10px] uppercase tracking-[0.18em] font-semibold
                transition-colors duration-300
                ${activeTab === tab ? "text-pantheon-white" : "text-pantheon-muted hover:text-pantheon-white"}
              `}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-pantheon-purple" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="space-y-6">
          {/* ROSTER TAB */}
          {activeTab === "roster" && (
            <div className="grid gap-4">
              {teamRoster.map((student) => {
                const isTop = topContributor?.id === student.id;

                return (
                  <div
                    key={student.id}
                    className={`
                      flex items-center justify-between p-4 rounded-[1rem] border bg-gradient-to-b from-white/[0.015] to-transparent
                      transition-all duration-300
                      ${
                        isTop
                          ? "border-pantheon-purple/35 bg-pantheon-purple/[0.02] shadow-[0_0_10px_rgba(124,58,237,0.05)]"
                          : "border-pantheon-border hover:border-pantheon-border-subtle"
                      }
                    `}
                  >
                    {/* Avatar Initials & Student Info */}
                    <div className="flex items-center gap-4">
                      <div className={`
                        flex size-10 items-center justify-center rounded-full text-xs font-bold border
                        ${
                          isTop
                            ? "bg-pantheon-purple/15 text-pantheon-purple-light border-pantheon-purple/40"
                            : "bg-white/5 text-pantheon-muted border-pantheon-border"
                        }
                      `}>
                        {student.imageInitials}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white uppercase tracking-wider">
                            {student.name}
                          </span>
                          {isTop && (
                            <span className="rounded-full bg-pantheon-purple/10 border border-pantheon-purple/40 text-pantheon-purple-light text-[7px] px-2 py-0.5 tracking-[0.1em] font-black uppercase">
                              ★ Top Contributor
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.1em] text-pantheon-subtle block">
                          Student ID: {student.id}
                        </span>
                      </div>
                    </div>

                    {/* Contribution readout */}
                    <div className="text-right">
                      <span className="text-[9px] uppercase tracking-[0.1em] text-pantheon-subtle block">
                        Contributed
                      </span>
                      <span className="text-xs font-bold text-pantheon-purple-light">
                        {student.totalPointsContributed} PTS
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* HISTORY TAB */}
          {activeTab === "history" && (
            <div className="space-y-4">
              {eventHistory.length === 0 ? (
                <div className="text-center p-8 border border-pantheon-border rounded-[1rem] bg-white/[0.01]">
                  <p className="text-xs text-pantheon-muted">No historical event entries logged for this team.</p>
                </div>
              ) : (
                eventHistory.map((item, idx) => (
                  <div
                    key={`${item.eventId}-${idx}`}
                    className="p-5 rounded-[1rem] border border-pantheon-border bg-gradient-to-b from-white/[0.01] to-transparent"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          {item.eventName}
                        </h4>
                        <span className="text-[9px] uppercase tracking-[0.1em] text-pantheon-subtle">
                          Event Date: {item.date}
                        </span>
                      </div>
                      <div className="text-left sm:text-right">
                        <span className="text-[9px] uppercase tracking-[0.1em] text-pantheon-subtle block">
                          Total Earned
                        </span>
                        <span className="text-xs font-black text-pantheon-purple-light">
                          +{item.participants.reduce((sum, p) => sum + p.pointsEarned, 0)} PTS
                        </span>
                      </div>
                    </div>

                    {/* Group/Individual Participant List */}
                    <div className="pl-4 border-l border-pantheon-purple/35 space-y-2">
                      <span className="text-[8px] uppercase tracking-[0.15em] text-pantheon-subtle block">
                        {item.eventGroupId ? "COLLABORATIVE WORKFLOW" : "INDIVIDUAL CONTRIBUTION"}
                      </span>
                      {item.participants.map((participant, pIdx) => (
                        <div key={pIdx} className="flex justify-between items-center text-[10px]">
                          <span className="text-pantheon-muted">
                            &gt; {participant.studentName}
                          </span>
                          <span className="text-pantheon-purple-light font-bold">
                            +{participant.pointsEarned} PTS
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* ACHIEVEMENTS TAB */}
          {activeTab === "achievements" && (
            <div className="grid gap-4 md:grid-cols-2">
              {teamAchievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-[1rem] border border-pantheon-border bg-gradient-to-b from-white/[0.015] to-transparent flex items-start gap-4"
                >
                  {/* Badge Emblem */}
                  <div className="grid size-8 place-items-center bg-pantheon-purple/8 border border-pantheon-purple/35 text-pantheon-purple-light rounded-full shrink-0">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-[10px] text-pantheon-muted leading-relaxed">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
