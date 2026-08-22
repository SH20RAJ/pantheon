"use client";

import { useMemo, useState, useEffect } from "react";
import {
    Trophy,
    Users,
    Zap,
    LayoutGrid,
    Search,
    ArrowUp,
    ArrowDown,
    Minus,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

/**
 * LeaderboardPage
 * ----------------
 * Adapted to use Pantheon global tokens.
 */

type EventName =
    | "Code Sprint"
    | "Robo Rumble"
    | "Pixel Arena"
    | "Beat Battle"
    | "Quiz Storm";

type EventFilter = "All" | EventName;

interface Team {
    rank: number;
    prevRank: number;
    name: string;
    code: string;
    dept: string;
    points: number;
    wins: number;
    events: EventName[];
}

const FEST_NAME = "PANTHEON '26";

const EVENTS: EventFilter[] = [
    "All",
    "Code Sprint",
    "Robo Rumble",
    "Pixel Arena",
    "Beat Battle",
    "Quiz Storm",
];

const TEAMS: Team[] = [
    {
        rank: 1,
        prevRank: 2,
        name: "BYTE BANDITS",
        code: "TEAM-0042",
        dept: "CSE",
        points: 480,
        wins: 4,
        events: ["Code Sprint", "Robo Rumble", "Quiz Storm"],
    },
    {
        rank: 2,
        prevRank: 1,
        name: "NULL POINTERS",
        code: "TEAM-0017",
        dept: "IT",
        points: 460,
        wins: 3,
        events: ["Code Sprint", "Pixel Arena"],
    },
    {
        rank: 3,
        prevRank: 3,
        name: "KERNEL PANIC",
        code: "TEAM-0029",
        dept: "ECE",
        points: 410,
        wins: 3,
        events: ["Robo Rumble", "Quiz Storm"],
    },
    {
        rank: 4,
        prevRank: 6,
        name: "STACK OVERFLOWERS",
        code: "TEAM-0008",
        dept: "CSE",
        points: 375,
        wins: 2,
        events: ["Code Sprint", "Beat Battle", "Quiz Storm"],
    },
    {
        rank: 5,
        prevRank: 4,
        name: "GRADIENT DESCENT",
        code: "TEAM-0033",
        dept: "MECH",
        points: 350,
        wins: 2,
        events: ["Robo Rumble", "Pixel Arena"],
    },
    {
        rank: 6,
        prevRank: 5,
        name: "SYNTAX ERROR",
        code: "TEAM-0011",
        dept: "IT",
        points: 320,
        wins: 2,
        events: ["Code Sprint", "Quiz Storm"],
    },
    {
        rank: 7,
        prevRank: 7,
        name: "GHOST PROTOCOL",
        code: "TEAM-0021",
        dept: "ECE",
        points: 290,
        wins: 1,
        events: ["Pixel Arena", "Beat Battle"],
    },
    {
        rank: 8,
        prevRank: 9,
        name: "GIT GUD",
        code: "TEAM-0014",
        dept: "CIVIL",
        points: 260,
        wins: 1,
        events: ["Robo Rumble", "Beat Battle"],
    },
    {
        rank: 9,
        prevRank: 8,
        name: "THE COMPILERS",
        code: "TEAM-0026",
        dept: "CSE",
        points: 230,
        wins: 1,
        events: ["Code Sprint"],
    },
    {
        rank: 10,
        prevRank: 10,
        name: "GARBAGE COLLECTORS",
        code: "TEAM-0039",
        dept: "MECH",
        points: 190,
        wins: 0,
        events: ["Quiz Storm", "Beat Battle"],
    },
    { rank: 11, prevRank: 12, name: "CYBER PUNKS", code: "TEAM-0099", dept: "CSE", points: 150, wins: 0, events: [] },
    { rank: 12, prevRank: 11, name: "THE EXCEPTIONS", code: "TEAM-0088", dept: "IT", points: 145, wins: 0, events: [] },
    { rank: 13, prevRank: 13, name: "CTRL ALT DEFEAT", code: "TEAM-0077", dept: "ECE", points: 120, wins: 0, events: [] },
];

interface RankDeltaProps {
    rank: number;
    prevRank: number;
}

function RankDelta({ rank, prevRank }: RankDeltaProps) {
    const diff = prevRank - rank;
    if (diff > 0)
        return (
            <span className="inline-flex items-center gap-1 text-pantheon-purple-light">
                <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
                {diff}
            </span>
        );
    if (diff < 0)
        return (
            <span className="inline-flex items-center gap-1 text-pantheon-muted">
                <ArrowDown className="h-3.5 w-3.5" strokeWidth={2.5} />
                {Math.abs(diff)}
            </span>
        );
    return (
        <span className="inline-flex items-center gap-1 text-pantheon-muted">
            <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
    );
}

export default function LeaderboardPage() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    const filtered = useMemo(() => {
        return TEAMS.filter((t) => {
            const matchesQuery =
                t.name.toLowerCase().includes(query.toLowerCase()) ||
                t.code.toLowerCase().includes(query.toLowerCase());
            return matchesQuery;
        }).sort((a, b) => b.points - a.points);
    }, [query]);

    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedTeams = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const totalPointsToday = TEAMS.reduce((sum, t) => sum + t.wins * 20, 0);
    const eventsLive = EVENTS.length - 1;

    return (
        <div className="relative min-h-screen bg-pantheon-black text-pantheon-white font-mono pt-24 overflow-hidden">
            {/* Cyberpunk Grid & Glow Background */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
            <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-pantheon-purple/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 md:px-8 md:pb-14">
                {/* eyebrow */}
                <div className="mb-8 flex items-center gap-3 text-xs tracking-widest text-pantheon-muted">
                    <span className="h-1.5 w-1.5 bg-pantheon-purple" />
                    {FEST_NAME} · LIVE STANDINGS
                </div>

                {/* hero */}
                <h1 className="text-5xl font-black leading-none tracking-[0.05em] sm:text-6xl md:text-7xl font-[family-name:var(--font-heading)] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-pantheon-purple-light drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]">
                    PANTHEON
                </h1>
                <div className="mt-4 inline-block bg-pantheon-purple px-5 py-2 relative overflow-hidden border border-pantheon-purple-light/50 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                    <span className="text-2xl font-black tracking-widest text-white sm:text-3xl font-[family-name:var(--font-heading)] relative z-10">
                        // LEADERBOARD
                    </span>
                </div>

                {/* stat strip */}
                <div className="mt-10 grid grid-cols-2 border border-pantheon-border md:grid-cols-4">
                    {[
                        {
                            label: "TEAMS REGISTERED",
                            value: TEAMS.length,
                            icon: Users,
                            active: false,
                        },
                        {
                            label: "POINTS AWARDED TODAY",
                            value: totalPointsToday,
                            icon: Trophy,
                            active: true,
                        },
                        {
                            label: "EVENTS LIVE",
                            value: eventsLive,
                            icon: Zap,
                            active: false,
                        },
                        {
                            label: "TOTAL WINS LOGGED",
                            value: TEAMS.reduce((s, t) => s + t.wins, 0),
                            icon: LayoutGrid,
                            active: false,
                        },
                    ].map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.label}
                                className={`relative border-pantheon-border p-6 backdrop-blur-md ${i % 2 === 0 ? "border-r" : "md:border-r"
                                    } ${i < 2 ? "border-b md:border-b-0" : ""} ${stat.active ? "bg-pantheon-purple/10" : "bg-pantheon-black/40"
                                    }`}
                            >
                                {stat.active && (
                                    <span className="absolute left-0 top-0 h-full w-[3px] bg-pantheon-purple shadow-[0_0_10px_rgba(124,58,237,0.4)]" />
                                )}
                                <div className="mb-6 flex items-center justify-between text-pantheon-muted">
                                    <span className="text-xs tracking-widest uppercase">
                                        {stat.label}
                                    </span>
                                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                                </div>
                                <div
                                    className={`text-4xl font-bold font-[family-name:var(--font-heading)] ${stat.active ? "text-pantheon-purple-light drop-shadow-[0_0_10px_rgba(167,139,250,0.5)]" : ""
                                        }`}
                                >
                                    {stat.value}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* controls */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-1 items-center gap-3 sm:max-w-xs">
                        <div className="flex flex-1 items-center gap-2 border border-pantheon-border bg-pantheon-surface px-3 py-2">
                            <Search className="h-4 w-4 text-pantheon-muted" />
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="search team or code"
                                className="w-full bg-transparent text-sm text-pantheon-white placeholder:text-pantheon-muted focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="text-xs tracking-widest text-pantheon-muted">
                        [{TEAMS.length} REGISTERED]
                    </div>
                </div>

                {/* leaderboard list */}
                <div className="border-x border-b border-t border-pantheon-border mt-8">
                    {filtered.length === 0 && (
                        <div className="p-10 text-center text-sm text-pantheon-muted">
                            no teams match that search.
                        </div>
                    )}

                    {paginatedTeams.map((team, idx) => {
                        const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + idx;
                        const isTop = globalIndex === 0;
                        return (
                            <div
                                key={team.code}
                                className="flex flex-col border-t border-pantheon-border first:border-t-0 sm:flex-row"
                            >
                                {/* rank block */}
                                <div
                                    className={`flex w-full items-center justify-center py-6 text-5xl font-black sm:w-32 font-[family-name:var(--font-heading)] transition-all duration-300 ${isTop ? "shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" : ""
                                        }`}
                                    style={{
                                        backgroundColor: `rgba(124, 58, 237, ${Math.max(0.02, 1 - globalIndex * 0.35)})`,
                                        color: `rgba(255, 255, 255, ${Math.max(0.2, 1 - globalIndex * 0.25)})`
                                    }}
                                >
                                    {String(globalIndex + 1).padStart(2, "0")}
                                </div>

                                {/* main info */}
                                <div className="flex flex-1 flex-col justify-center gap-3 border-t border-pantheon-border p-6 sm:border-t-0 sm:border-l">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-2xl font-bold tracking-widest font-[family-name:var(--font-heading)] uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                                {team.name}
                                            </div>
                                        </div>
                                        <div className="whitespace-nowrap text-xs tracking-widest text-pantheon-muted">
                                            [ID: {team.code.split("-")[1]}]
                                        </div>
                                    </div>

                                    <div className="mt-4 flex gap-10">
                                        <div>
                                            <div className="text-xs tracking-widest text-pantheon-muted">
                                                POINTS
                                            </div>
                                            <div className="text-xl font-bold">{team.points}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs tracking-widest text-pantheon-muted">
                                                EVENTS
                                            </div>
                                            <div className="text-xl font-bold">
                                                {team.events.length}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs tracking-widest text-pantheon-muted">
                                                WINS
                                            </div>
                                            <div className="text-xl font-bold">{team.wins}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* right rail: wins badge + rank delta */}
                                <div className="flex flex-row items-center justify-center gap-6 border-t border-pantheon-border p-6 sm:flex-col sm:border-l sm:border-t-0 sm:w-32">
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-full ${isTop ? "bg-pantheon-purple shadow-[0_0_15px_rgba(124,58,237,0.3)]" : "bg-pantheon-surface"
                                            }`}
                                    >
                                        <Trophy
                                            className={`h-5 w-5 ${isTop ? "text-white" : "text-pantheon-muted"
                                                }`}
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-xs">
                                        <span className="tracking-widest text-pantheon-muted">
                                            Δ RANK
                                        </span>
                                        <RankDelta rank={team.rank} prevRank={team.prevRank} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* pagination controls */}
                {totalPages > 1 && (
                    <div className="mt-8 flex items-center justify-between border border-pantheon-border bg-pantheon-black/40 p-4 backdrop-blur-md">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest text-pantheon-muted transition-colors hover:text-pantheon-white disabled:opacity-30 disabled:pointer-events-none"
                        >
                            <ChevronLeft className="h-4 w-4" /> PREV
                        </button>
                        <div className="font-[family-name:var(--font-heading)] text-pantheon-muted tracking-widest">
                            PAGE <span className="text-white">{currentPage}</span> / {totalPages}
                        </div>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest text-pantheon-muted transition-colors hover:text-pantheon-white disabled:opacity-30 disabled:pointer-events-none"
                        >
                            NEXT <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
