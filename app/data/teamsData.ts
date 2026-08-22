export interface PermanentTeam {
  id: string;
  name: string;
  slug: string;
  slogan?: string;
  logoUrl?: string;
  totalPoints: number;
  rank: number;
  memberCount: number;
}

export interface Student {
  id: string;
  name: string;
  avatarUrl?: string;
  permanentTeamId: string;
  totalPointsContributed: number;
  imageInitials: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
}

export interface GroupedEventHistoryItem {
  eventId: string;
  eventGroupId?: string;
  date: string;
  eventName: string;
  participants: { studentName: string; pointsEarned: number }[];
}

// lixt of Permanent Teams with realistic details, varying points, and ranks
export const MOCK_TEAMS: PermanentTeam[] = [
  {
    id: "syntax-terror",
    name: "Syntax Terror",
    slug: "syntax-terror",
    slogan: "Fear the missing semicolon.",
    logoUrl: "/team_logos/syntax_terror.png",
    totalPoints: 1850,
    rank: 1,
    memberCount: 5,
  },
  {
    id: "sabke-damad",
    name: "Sabke Damad",
    slug: "sabke-damad",
    slogan: "The ultimate sons-in-law of engineering.",
    logoUrl: "/team_logos/sabke_damad.png",
    totalPoints: 1720,
    rank: 2,
    memberCount: 5,
  },
  {
    id: "not-my-type",
    name: "Not My Type",
    slug: "not-my-type",
    slogan: "Compilation successful, but runtime error.",
    logoUrl: "/team_logos/not_my_type.png",
    totalPoints: 1605,
    rank: 3,
    memberCount: 5,
  },
  {
    id: "runtime-rebels",
    name: "Runtime Rebels",
    slug: "runtime-rebels",
    slogan: "Rebelling against the main thread.",
    logoUrl: "/team_logos/runtime_rebels.png",
    totalPoints: 1490,
    rank: 4,
    memberCount: 5,
  },
  {
    id: "ctrl-alt-elite",
    name: "Ctrl Alt Elite",
    slug: "ctrl-alt-elite",
    slogan: "Rebooting the standards.",
    logoUrl: "/team_logos/ctrl_alt_elite.png",
    totalPoints: 1380,
    rank: 5,
    memberCount: 5,
  },
  {
    id: "null-pointers",
    name: "Null Pointers",
    slug: "null-pointers",
    slogan: "Pointing to the void.",
    logoUrl: "/team_logos/null_pointers.png",
    totalPoints: 1250,
    rank: 6,
    memberCount: 5,
  },
  {
    id: "code-blooded",
    name: "Code Blooded",
    slug: "code-blooded",
    slogan: "Cold logic running through our veins.",
    logoUrl: "/team_logos/code_blooded.png",
    totalPoints: 1120,
    rank: 7,
    memberCount: 5,
  },
  {
    id: "out-of-scope",
    name: "Out of Scope",
    slug: "out-of-scope",
    slogan: "Features that didn't make the sprint.",
    logoUrl: "/team_logos/out_of_scope.png",
    totalPoints: 990,
    rank: 8,
    memberCount: 5,
  },
  {
    id: "byte-me",
    name: "Byte Me",
    slug: "byte-me",
    slogan: "Nibble by nibble, byte by byte.",
    logoUrl: "/team_logos/byte_me.png",
    totalPoints: 870,
    rank: 9,
    memberCount: 5,
  },
  {
    id: "stack-overflowers",
    name: "Stack Overflowers",
    slug: "stack-overflowers",
    slogan: "Copy, paste, compile, pray.",
    logoUrl: "/team_logos/stack_overflowers.png",
    totalPoints: 760,
    rank: 10,
    memberCount: 5,
  },
  {
    id: "bug-slayers",
    name: "Bug Slayers",
    slug: "bug-slayers",
    slogan: "No bug survives our compiler.",
    logoUrl: "/team_logos/bug_slayers.png",
    totalPoints: 650,
    rank: 11,
    memberCount: 5,
  },
  {
    id: "the-debuggers",
    name: "The Debuggers",
    slug: "the-debuggers",
    slogan: "Finding the needle in the stack trace.",
    logoUrl: "/team_logos/the_debuggers.png",
    totalPoints: 530,
    rank: 12,
    memberCount: 5,
  },
];

// Exactly 5 members per team, sum of contributions equals team total points exactly
export const MOCK_STUDENTS: Student[] = [
  // Syntax Terror (1850 pts)
  { id: "s-st-1", name: "Aarav Sharma", permanentTeamId: "syntax-terror", totalPointsContributed: 480, imageInitials: "AS" },
  { id: "s-st-2", name: "Devika Nair", permanentTeamId: "syntax-terror", totalPointsContributed: 390, imageInitials: "DN" },
  { id: "s-st-3", name: "Rohan Verma", permanentTeamId: "syntax-terror", totalPointsContributed: 360, imageInitials: "RV" },
  { id: "s-st-4", name: "Aditya Vardhan", permanentTeamId: "syntax-terror", totalPointsContributed: 320, imageInitials: "AV" },
  { id: "s-st-5", name: "Megha Sahu", permanentTeamId: "syntax-terror", totalPointsContributed: 300, imageInitials: "MS" },

  // Sabke Damad (1720 pts)
  { id: "s-sd-1", name: "Ayushman Sen", permanentTeamId: "sabke-damad", totalPointsContributed: 420, imageInitials: "AS" },
  { id: "s-sd-2", name: "Shiv Kumar", permanentTeamId: "sabke-damad", totalPointsContributed: 350, imageInitials: "SK" },
  { id: "s-sd-3", name: "Vaibhav Nath", permanentTeamId: "sabke-damad", totalPointsContributed: 280, imageInitials: "VN" },
  { id: "s-sd-4", name: "Amrit Raj", permanentTeamId: "sabke-damad", totalPointsContributed: 450, imageInitials: "AR" },
  { id: "s-sd-5", name: "Rahul Prasad", permanentTeamId: "sabke-damad", totalPointsContributed: 220, imageInitials: "RP" },

  // Not My Type (1605 pts)
  { id: "s-nmt-1", name: "Sneha Mukherjee", permanentTeamId: "not-my-type", totalPointsContributed: 460, imageInitials: "SM" },
  { id: "s-nmt-2", name: "Aarav Roy", permanentTeamId: "not-my-type", totalPointsContributed: 380, imageInitials: "AR" }, // Logged-in User
  { id: "s-nmt-3", name: "Vivek Kulkarni", permanentTeamId: "not-my-type", totalPointsContributed: 350, imageInitials: "VK" },
  { id: "s-nmt-4", name: "Tanmay Das", permanentTeamId: "not-my-type", totalPointsContributed: 265, imageInitials: "TD" },
  { id: "s-nmt-5", name: "Ananya Roy", permanentTeamId: "not-my-type", totalPointsContributed: 150, imageInitials: "AR" },

  // Runtime Rebels (1490 pts)
  { id: "s-rr-1", name: "Kabir Mehta", permanentTeamId: "runtime-rebels", totalPointsContributed: 410, imageInitials: "KM" },
  { id: "s-rr-2", name: "Neha Gupta", permanentTeamId: "runtime-rebels", totalPointsContributed: 320, imageInitials: "NG" },
  { id: "s-rr-3", name: "Arjun Malhotra", permanentTeamId: "runtime-rebels", totalPointsContributed: 290, imageInitials: "AM" },
  { id: "s-rr-4", name: "Divya Nair", permanentTeamId: "runtime-rebels", totalPointsContributed: 250, imageInitials: "DN" },
  { id: "s-rr-5", name: "Karan Singh", permanentTeamId: "runtime-rebels", totalPointsContributed: 220, imageInitials: "KS" },

  // Ctrl Alt Elite (1380 pts)
  { id: "s-cae-1", name: "Amit Patel", permanentTeamId: "ctrl-alt-elite", totalPointsContributed: 390, imageInitials: "AP" },
  { id: "s-cae-2", name: "Pooja Rao", permanentTeamId: "ctrl-alt-elite", totalPointsContributed: 310, imageInitials: "PR" },
  { id: "s-cae-3", name: "Rahul Mishra", permanentTeamId: "ctrl-alt-elite", totalPointsContributed: 260, imageInitials: "RM" },
  { id: "s-cae-4", name: "Shruti Sharma", permanentTeamId: "ctrl-alt-elite", totalPointsContributed: 220, imageInitials: "SS" },
  { id: "s-cae-5", name: "Varun Joshi", permanentTeamId: "ctrl-alt-elite", totalPointsContributed: 200, imageInitials: "VJ" },

  // Null Pointers (1250 pts)
  { id: "s-np-1", name: "Kshitiz Anand", permanentTeamId: "null-pointers", totalPointsContributed: 340, imageInitials: "KA" },
  { id: "s-np-2", name: "Abhinav Sinha", permanentTeamId: "null-pointers", totalPointsContributed: 280, imageInitials: "AS" },
  { id: "s-np-3", name: "Swati Kumari", permanentTeamId: "null-pointers", totalPointsContributed: 240, imageInitials: "SK" },
  { id: "s-np-4", name: "Rohit Kumar", permanentTeamId: "null-pointers", totalPointsContributed: 210, imageInitials: "RK" },
  { id: "s-np-5", name: "Simran Kaur", permanentTeamId: "null-pointers", totalPointsContributed: 180, imageInitials: "SK" },

  // Code Blooded (1120 pts)
  { id: "s-cb-1", name: "Vikram Seth", permanentTeamId: "code-blooded", totalPointsContributed: 310, imageInitials: "VS" },
  { id: "s-cb-2", name: "Priya Sen", permanentTeamId: "code-blooded", totalPointsContributed: 270, imageInitials: "PS" },
  { id: "s-cb-3", name: "Rakesh Das", permanentTeamId: "code-blooded", totalPointsContributed: 210, imageInitials: "RD" },
  { id: "s-cb-4", name: "Nisha Paul", permanentTeamId: "code-blooded", totalPointsContributed: 180, imageInitials: "NP" },
  { id: "s-cb-5", name: "Sameer Goel", permanentTeamId: "code-blooded", totalPointsContributed: 150, imageInitials: "SG" },

  // Out of Scope (990 pts)
  { id: "s-oos-1", name: "Kunal Ghosh", permanentTeamId: "out-of-scope", totalPointsContributed: 280, imageInitials: "KG" },
  { id: "s-oos-2", name: "Megha Sahu", permanentTeamId: "out-of-scope", totalPointsContributed: 240, imageInitials: "MS" },
  { id: "s-oos-3", name: "Siddharth Jha", permanentTeamId: "out-of-scope", totalPointsContributed: 190, imageInitials: "SJ" },
  { id: "s-oos-4", name: "Riya Kapoor", permanentTeamId: "out-of-scope", totalPointsContributed: 160, imageInitials: "RK" },
  { id: "s-oos-5", name: "Harish Rao", permanentTeamId: "out-of-scope", totalPointsContributed: 120, imageInitials: "HR" },

  // Byte Me (870 pts)
  { id: "s-bm-1", name: "Yash Verma", permanentTeamId: "byte-me", totalPointsContributed: 250, imageInitials: "YV" },
  { id: "s-bm-2", name: "Tanvi Jain", permanentTeamId: "byte-me", totalPointsContributed: 200, imageInitials: "TJ" },
  { id: "s-bm-3", name: "Aman Gupta", permanentTeamId: "byte-me", totalPointsContributed: 180, imageInitials: "AG" },
  { id: "s-bm-4", name: "Kiran Roy", permanentTeamId: "byte-me", totalPointsContributed: 140, imageInitials: "KR" },
  { id: "s-bm-5", name: "Uday Shah", permanentTeamId: "byte-me", totalPointsContributed: 100, imageInitials: "US" },

  // Stack Overflowers (760 pts)
  { id: "s-so-1", name: "Deepa Lal", permanentTeamId: "stack-overflowers", totalPointsContributed: 210, imageInitials: "DL" },
  { id: "s-so-2", name: "Manoj Joshi", permanentTeamId: "stack-overflowers", totalPointsContributed: 180, imageInitials: "MJ" },
  { id: "s-so-3", name: "Shreya Das", permanentTeamId: "stack-overflowers", totalPointsContributed: 150, imageInitials: "SD" },
  { id: "s-so-4", name: "Alok Sen", permanentTeamId: "stack-overflowers", totalPointsContributed: 120, imageInitials: "AS" },
  { id: "s-so-5", name: "Jyoti Pal", permanentTeamId: "stack-overflowers", totalPointsContributed: 100, imageInitials: "JP" },

  // Bug Slayers (650 pts)
  { id: "s-bs-1", name: "Nitin Roy", permanentTeamId: "bug-slayers", totalPointsContributed: 190, imageInitials: "NR" },
  { id: "s-bs-2", name: "Preeti Sen", permanentTeamId: "bug-slayers", totalPointsContributed: 150, imageInitials: "PS" },
  { id: "s-bs-3", name: "Rajat Verma", permanentTeamId: "bug-slayers", totalPointsContributed: 120, imageInitials: "RV" },
  { id: "s-bs-4", name: "Sonu Mehta", permanentTeamId: "bug-slayers", totalPointsContributed: 100, imageInitials: "SM" },
  { id: "s-bs-5", name: "Aarti Lal", permanentTeamId: "bug-slayers", totalPointsContributed: 90, imageInitials: "AL" },

  // The Debuggers (530 pts)
  { id: "s-td-1", name: "Gagan Deep", permanentTeamId: "the-debuggers", totalPointsContributed: 150, imageInitials: "GD" },
  { id: "s-td-2", name: "Tarun Sen", permanentTeamId: "the-debuggers", totalPointsContributed: 120, imageInitials: "TS" },
  { id: "s-td-3", name: "Ritu Goel", permanentTeamId: "the-debuggers", totalPointsContributed: 100, imageInitials: "RG" },
  { id: "s-td-4", name: "Mona Paul", permanentTeamId: "the-debuggers", totalPointsContributed: 90, imageInitials: "MP" },
  { id: "s-td-5", name: "Bobby Lal", permanentTeamId: "the-debuggers", totalPointsContributed: 70, imageInitials: "BL" },
];

// Mock Logged In User set to Aarav Roy from Not My Type
export const MOCK_LOGGED_IN_STUDENT: Student = MOCK_STUDENTS.find(s => s.id === "s-nmt-2")!;

// Dynamic event history generator.
// Generates grouped history items so that the points earned sum up exactly to the student's contributed score.
export function getTeamEventHistory(teamId: string): GroupedEventHistoryItem[] {
  const teamMembers = MOCK_STUDENTS.filter(s => s.permanentTeamId === teamId);
  if (teamMembers.length === 0) return [];

  const history: GroupedEventHistoryItem[] = [];

  const events = [
    { id: "event-gaming", name: "Pixel Arena: Gaming Tournament", date: "2026-10-18" },
    { id: "event-robocombat", name: "RoboWars: Robo Challenge", date: "2026-10-17" },
    { id: "event-treasurehunt", name: "Cyber-Nexus: Treasure Hunt", date: "2026-10-17" },
    { id: "event-webdesign", name: "Future Frontiers: Web Design", date: "2026-10-16" },
    { id: "event-techquiz", name: "Code-Nexus: Tech Quiz", date: "2026-10-16" }
  ];

  const participations: { eventId: string; eventGroupId?: string; studentName: string; pointsEarned: number }[] = [];

  teamMembers.forEach((member, index) => {
    const total = member.totalPointsContributed;
    if (total <= 0) return;

    if (index === 0) {
      const p1 = Math.floor(total * 0.5);
      const p2 = Math.floor(total * 0.3);
      const p3 = total - p1 - p2;
      
      if (p1 > 0) participations.push({ eventId: "event-gaming", eventGroupId: `eg-gaming-${teamId}`, studentName: member.name, pointsEarned: p1 });
      if (p2 > 0) participations.push({ eventId: "event-webdesign", studentName: member.name, pointsEarned: p2 });
      if (p3 > 0) participations.push({ eventId: "event-techquiz", studentName: member.name, pointsEarned: p3 });
    } else if (index === 1) {
      const p1 = Math.floor(total * 0.5);
      const p2 = Math.floor(total * 0.3);
      const p3 = total - p1 - p2;
      
      if (p1 > 0) participations.push({ eventId: "event-gaming", eventGroupId: `eg-gaming-${teamId}`, studentName: member.name, pointsEarned: p1 });
      if (p2 > 0) participations.push({ eventId: "event-techquiz", studentName: member.name, pointsEarned: p2 });
      if (p3 > 0) participations.push({ eventId: "event-robocombat", studentName: member.name, pointsEarned: p3 });
    } else if (index === 2) {
      const p1 = Math.floor(total * 0.6);
      const p2 = total - p1;
      
      if (p1 > 0) participations.push({ eventId: "event-treasurehunt", eventGroupId: `eg-treasure-${teamId}`, studentName: member.name, pointsEarned: p1 });
      if (p2 > 0) participations.push({ eventId: "event-robocombat", studentName: member.name, pointsEarned: p2 });
    } else if (index === 3) {
      const p1 = Math.floor(total * 0.6);
      const p2 = total - p1;
      
      if (p1 > 0) participations.push({ eventId: "event-treasurehunt", eventGroupId: `eg-treasure-${teamId}`, studentName: member.name, pointsEarned: p1 });
      if (p2 > 0) participations.push({ eventId: "event-webdesign", studentName: member.name, pointsEarned: p2 });
    } else if (index === 4) {
      participations.push({ eventId: "event-robocombat", studentName: member.name, pointsEarned: total });
    }
  });

  events.forEach(evt => {
    const eventParts = participations.filter(p => p.eventId === evt.id);
    if (eventParts.length === 0) return;

    const groupedParts: { [groupId: string]: typeof eventParts } = {};
    const ungroupedParts: typeof eventParts = [];

    eventParts.forEach(p => {
      if (p.eventGroupId) {
        if (!groupedParts[p.eventGroupId]) {
          groupedParts[p.eventGroupId] = [];
        }
        groupedParts[p.eventGroupId].push(p);
      } else {
        ungroupedParts.push(p);
      }
    });

    Object.keys(groupedParts).forEach(gId => {
      history.push({
        eventId: evt.id,
        eventGroupId: gId,
        date: evt.date,
        eventName: evt.name,
        participants: groupedParts[gId].map(p => ({ studentName: p.studentName, pointsEarned: p.pointsEarned }))
      });
    });

    ungroupedParts.forEach(p => {
      history.push({
        eventId: evt.id,
        date: evt.date,
        eventName: evt.name,
        participants: [{ studentName: p.studentName, pointsEarned: p.pointsEarned }]
      });
    });
  });

  return history.sort((a, b) => b.date.localeCompare(a.date));
}
