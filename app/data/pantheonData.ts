export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'hackathon' | 'robotics' | 'coding' | 'esummit' | 'gaming' | 'workshops';
  club: string;
  prizePool: string;
  teamSize: string;
  venue: string;
  date: string;
  time: string;
  description: string;
  overview: string;
  rules: string[];
  contacts: { name: string; phone: string; role: string }[];
  status: 'Open' | 'Filling Fast' | 'Closed';
  featured?: boolean;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: string;
  venue: string;
  organizer: string;
  description: string;
}

export interface VenueItem {
  id: string;
  name: string;
  code: string;
  description: string;
  coordinates: { x: number; y: number };
  eventsHosted: string[];
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Title' | 'Powered By' | 'Platinum' | 'Gold' | 'Media';
  category: string;
  logoText: string;
}

export interface TeamMember {
  name: string;
  role: string;
  clubOrDept: string;
  email: string;
  imageInitials: string;
}

export const FEST_DETAILS = {
  name: "PANTHEON '26",
  tagline: "Convergence of Human Intellect & Artificial Singularity",
  theme: "Cyber-Nexus & Future Frontiers",
  institution: "Birla Institute of Technology, Mesra, Ranchi",
  dates: "October 16 - 18, 2026",
  edition: "26th Annual Science & Technical Festival",
  prizePoolTotal: "₹6,50,000+",
  footfallTarget: "6,000+ Innovators & Delegates",
  collegesExpected: "50+ Premier Institutes Across India",
  eventsCount: "35+ Competitions & Workshops",
};

export const EVENTS_DATA: EventItem[] = [
  {
    id: "hackquest-2026",
    title: "HackQuest 2.0",
    subtitle: "36-Hour Flagship National Hackathon",
    category: "hackathon",
    club: "ACM & IEEE Student Branch BIT Mesra",
    prizePool: "₹1,50,000",
    teamSize: "2 - 4 Members",
    venue: "R&D Building & CAT Labs",
    date: "Oct 16 - 17, 2026",
    time: "09:00 AM (36 hrs non-stop)",
    description: "Build cutting-edge solutions across AI/ML, Web3 & Decentralized Tech, FinTech, Autonomous Mobility, and Open Innovation.",
    overview: "HackQuest 2.0 is the crowning jewel of Pantheon '26. Teams will assemble in BIT Mesra's state-of-the-art R&D complex for 36 hours of intensive prototyping, pitch reviews by industry leaders, and mentorship from top silicon valley engineers.",
    rules: [
      "Inter-college teams of 2 to 4 participants are allowed.",
      "All code must be written during the 36-hour hackathon timeline.",
      "Use of open-source frameworks and APIs is permitted with proper disclosure.",
      "Plagiarism or pre-existing complete repositories will result in immediate disqualification.",
      "Final pitch to judges includes a 3-minute live demo + 2-minute Q&A."
    ],
    contacts: [
      { name: "Aarav Sharma", phone: "+91 98765 43210", role: "Hackathon Lead" },
      { name: "Ananya Roy", phone: "+91 98123 45678", role: "Technical Logistics" }
    ],
    status: "Filling Fast",
    featured: true
  },
  {
    id: "robowars-2026",
    title: "RoboWars: Steel Carnage",
    subtitle: "Heavyweight & Lightweight Robot Combat Arena",
    category: "robotics",
    club: "Robolution BIT Mesra",
    prizePool: "₹1,20,000",
    teamSize: "3 - 5 Members",
    venue: "Main Sports Complex Arena",
    date: "Oct 17, 2026",
    time: "02:00 PM - 07:00 PM",
    description: "Custom-built kinetic combat robots battle inside a bulletproof steel enclosure to dominate the ring.",
    overview: "Engage in maximum destruction as custom spinner, flipper, and wedge bots fight for survival. Built inside a reinforced polycarbonate enclosure under international RoboGames arena specifications.",
    rules: [
      "Robots must comply with weight categories: 15kg (Featherweight) or 30kg (Lightweight).",
      "Wireless control only (2.4GHz spectrum binding).",
      "Pneumatics & hydraulics permitted under safe pressure bounds (< 150 PSI).",
      "Hazardous chemical, flame, or untethered projectile weapons are strictly prohibited.",
      "Match duration: 3 minutes. Winner decided by knockout or judges' damage scoring."
    ],
    contacts: [
      { name: "Rohan Verma", phone: "+91 97654 32109", role: "RoboWars Convener" },
      { name: "Vikram Singh", phone: "+91 96543 21098", role: "Arena Safety Officer" }
    ],
    status: "Open",
    featured: true
  },
  {
    id: "codezilla-2026",
    title: "Codezilla 2026",
    subtitle: "Speed Competitive Programming Clash",
    category: "coding",
    club: "ACM Student Chapter",
    prizePool: "₹60,000",
    teamSize: "Individual / Pair",
    venue: "Computer Centre (Lab 1 & 2)",
    date: "Oct 16, 2026",
    time: "02:00 PM - 05:00 PM",
    description: "Algorithmic showdown testing data structures, dynamic programming, dynamic graph theory, and mathematical optimization.",
    overview: "Codezilla tests speed, accuracy, and algorithmic ingenuity under strict time limits. Hosted on an automated online judge platform with real-time leaderboard updates.",
    rules: [
      "Languages permitted: C++, Java, Python 3, Rust, Go.",
      "Scoring based on test cases passed and penalty time for incorrect submissions.",
      "No external code references or generative AI assistance permitted during the contest window."
    ],
    contacts: [
      { name: "Priya Malhotra", phone: "+91 95432 10987", role: "ACM Lead" }
    ],
    status: "Open",
    featured: false
  },
  {
    id: "inventors-forge",
    title: "Inventor's Forge",
    subtitle: "National B-Plan & Startup Pitch Competition",
    category: "esummit",
    club: "EDC (Entrepreneurship Development Cell)",
    prizePool: "₹80,000 + Incubation Grant",
    teamSize: "2 - 5 Members",
    venue: "CAT Hall 1",
    date: "Oct 17, 2026",
    time: "10:00 AM - 01:30 PM",
    description: "Pitch your startup idea, MVP, or patentable prototype to venture capitalists, angel investors, and startup mentors.",
    overview: "Turn groundbreaking tech research into market-viable products. Finalists get 10 minutes pitch time followed by 5 minutes grilling from top venture capital partners.",
    rules: [
      "Submissions require pitch deck (PPTX/PDF) covering Problem, Solution, TAM/SAM, Business Model & Financial projections.",
      "Early-stage startups (bootstrapped or seed < ₹25L raised) eligible.",
      "Winning teams gain direct incubation mentorship opportunities at BIT Mesra STEP."
    ],
    contacts: [
      { name: "Aditya Vardhan", phone: "+91 94321 09876", role: "EDC President" }
    ],
    status: "Open",
    featured: true
  },
  {
    id: "cad-clash",
    title: "CAD Clash & Aero Design",
    subtitle: "3D Mechanical Modeling & FEA Challenge",
    category: "workshops",
    club: "Team Firebolt & Team Srijan",
    prizePool: "₹45,000",
    teamSize: "1 - 3 Members",
    venue: "Mechanical CAD Lab",
    date: "Oct 16, 2026",
    time: "11:00 AM - 03:00 PM",
    description: "Design aerodynamic structures and automotive chassis under real-world stress, weight, and drag constraints.",
    overview: "Challenge your SolidWorks/ANSYS wizardry. Participants receive a dynamic problem statement and must submit optimized CAD models with FEA stress heatmaps.",
    rules: [
      "Software allowed: SolidWorks, Fusion 360, CATIA, ANSYS.",
      "Evaluation based on structural integrity factor, weight reduction ratio, and design aesthetics."
    ],
    contacts: [
      { name: "Kunal Ghosh", phone: "+91 93210 98765", role: "Team Srijan Lead" }
    ],
    status: "Open",
    featured: false
  },
  {
    id: "valorant-showdown",
    title: "Pixel Arena: Valorant Championship",
    subtitle: "5v5 Collegiate Esports Tournament",
    category: "gaming",
    club: "Esports & Gaming Society BIT Mesra",
    prizePool: "₹50,000",
    teamSize: "5 + 1 Substitute",
    venue: "Gaming Lounge (Student Activity Centre)",
    date: "Oct 16 - 18, 2026",
    time: "06:00 PM Onwards",
    description: "Tactical 5v5 FPS tournament streamed live on Twitch & YouTube with commentary by pro casters.",
    overview: "Battle through single-elimination qualifiers into a LAN finals atmosphere with high-refresh monitors and low-latency fiber network.",
    rules: [
      "Custom lobbies with standard competitive ruleset (13 wins per map).",
      "Map veto system for semi-finals and BO3 finals.",
      "All team members must be active university students with valid ID."
    ],
    contacts: [
      { name: "Siddharth Jha", phone: "+91 92109 87654", role: "Esports Head" }
    ],
    status: "Filling Fast",
    featured: true
  },
  {
    id: "maze-runner-bot",
    title: "Maze Runner & Line Follower",
    subtitle: "Autonomous Micro-Robotics Challenge",
    category: "robotics",
    club: "Robolution",
    prizePool: "₹40,000",
    teamSize: "2 - 4 Members",
    venue: "Inner Quadrangle",
    date: "Oct 18, 2026",
    time: "10:00 AM - 01:00 PM",
    description: "Autonomous bots navigate complex grid mazes with dynamic obstacles and variable line grid widths.",
    overview: "Test sensor calibration, PID tuning, and flood-fill algorithms in real-time.",
    rules: [
      "Bot dimensions must fit inside a 20cm x 20cm x 20cm bounding box.",
      "Autonomous operation only; no human intervention during runs."
    ],
    contacts: [
      { name: "Megha Sahu", phone: "+91 91098 76543", role: "Robotics Core" }
    ],
    status: "Open",
    featured: false
  },
  {
    id: "ai-llm-workshop",
    title: "Hands-on Generative AI & Edge LLMs",
    subtitle: "Industrial Masterclass & Certification",
    category: "workshops",
    club: "IEEE Student Branch",
    prizePool: "Certificates & Cloud Credits",
    teamSize: "Individual",
    venue: "Main Auditorium",
    date: "Oct 17, 2026",
    time: "09:30 AM - 12:30 PM",
    description: "Learn to fine-tune open weights LLMs, build RAG pipelines, and deploy on Cloudflare Workers AI.",
    overview: "Led by Senior AI Engineers from top tech companies. Includes free \$200 API credits for participants.",
    rules: [
      "Laptops with web browser and Node/Python installed required.",
      "Certificate of Completion issued by IEEE BIT Mesra."
    ],
    contacts: [
      { name: "Tanmay Das", phone: "+91 90123 45678", role: "IEEE Chair" }
    ],
    status: "Open",
    featured: false
  }
];

export const SCHEDULE_DAYS = [
  {
    day: "Day 1",
    date: "October 16, 2026",
    title: "Genesis & Cyber Kickoff",
    events: [
      { id: "s1", time: "09:00 AM", title: "Pantheon '26 Grand Inauguration & Keynote", category: "Keynote", venue: "Main Auditorium", organizer: "Organizing Committee", description: "Dignitaries, Chief Guest Address, and Unveiling of the Tech Expo." },
      { id: "s2", time: "10:30 AM", title: "HackQuest 2.0 Hackathon Kickoff", category: "Hackathon", venue: "R&D Building", organizer: "ACM & IEEE", description: "Problem statements released; 36-hour timer starts." },
      { id: "s3", time: "11:00 AM", title: "CAD Clash & Aero Design Challenge", category: "Design", venue: "Mechanical CAD Lab", organizer: "Team Srijan", description: "3D CAD modeling and FEA simulation begins." },
      { id: "s4", time: "02:00 PM", title: "Codezilla Algorithmic Contest", category: "Coding", venue: "Computer Centre", organizer: "ACM Chapter", description: "3-hour competitive programming sprint." },
      { id: "s5", time: "06:00 PM", title: "Pixel Arena Valorant Qualifiers", category: "Esports", venue: "Student SAC Arena", organizer: "Esports Club", description: "Knockout tournament rounds." },
      { id: "s6", time: "08:00 PM", title: "EDM Prelude & Laser Tech Show", category: "ProNite", venue: "OAT Ground", organizer: "Cultural Core", description: "Night of visual projections, light synths, and DJ prelude." }
    ]
  },
  {
    day: "Day 2",
    date: "October 17, 2026",
    title: "Battleground & Innovation Pitch",
    events: [
      { id: "s7", time: "09:30 AM", title: "GenAI & Edge Computing Masterclass", category: "Workshop", venue: "Main Auditorium", organizer: "IEEE Branch", description: "RAG & LLM deployment workshop." },
      { id: "s8", time: "10:00 AM", title: "Inventor's Forge B-Plan Pitch Finals", category: "E-Summit", venue: "CAT Hall 1", organizer: "EDC BIT Mesra", description: "VC panel evaluation of shortlisted startups." },
      { id: "s9", time: "02:00 PM", title: "RoboWars: Heavyweight Bot Carnage", category: "Robotics", venue: "Sports Arena", organizer: "Robolution", description: "High-octane metal combat in the arena." },
      { id: "s10", time: "06:30 PM", title: "HackQuest 2.0 Project Evaluation & Demos", category: "Hackathon", venue: "R&D Complex", organizer: "ACM & IEEE", description: "36-hour hackathon ending; live judging demo." },
      { id: "s11", time: "08:30 PM", title: "Battle of the Bands (Rock-Tech Night)", category: "Cultural", venue: "OAT Amphitheatre", organizer: "Music Club", description: "Live rock and indie band showcase." }
    ]
  },
  {
    day: "Day 3",
    date: "October 18, 2026",
    title: "Apex Finals & Grand ProNite",
    events: [
      { id: "s12", time: "10:00 AM", title: "Maze Runner & Line Follower Finals", category: "Robotics", venue: "Inner Quadrangle", organizer: "Robolution", description: "Autonomous pathfinding showdown." },
      { id: "s13", time: "01:30 PM", title: "Drone Racing & Sky Mobility Expo", category: "Aerospace", venue: "BIT Oval Ground", organizer: "AeroBIT", description: "FPV drone slalom obstacles." },
      { id: "s14", time: "04:30 PM", title: "Grand Valedictory & Prize Ceremony", category: "Ceremony", venue: "Main Auditorium", organizer: "Organizing Committee", description: "Awarding ₹6.5 Lakhs+ cash prizes and trophies." },
      { id: "s15", time: "07:30 PM", title: "Pantheon '26 Star ProNite (Live Concert)", category: "ProNite", venue: "BIT Main Sports Ground", organizer: "Fest Committee", description: "Celebrity Artist Live Performance & Closing Fireworks." }
    ]
  }
];

export const VENUES_DATA: VenueItem[] = [
  {
    id: "main-audi",
    name: "Main Auditorium",
    code: "AUDI",
    description: "2,500-seat acoustics center hosting inauguration, keynotes, and valedictory ceremony.",
    coordinates: { x: 35, y: 40 },
    eventsHosted: ["Inauguration", "AI Workshop", "Valedictory Ceremony"]
  },
  {
    id: "cat-halls",
    name: "CAT Complex & Labs",
    code: "CAT",
    description: "State-of-the-art Lecture Halls equipped with high-speed fiber internet and projection rigs.",
    coordinates: { x: 50, y: 30 },
    eventsHosted: ["Codezilla", "Inventor's Forge", "Seminar Sessions"]
  },
  {
    id: "rd-building",
    name: "R&D Building Complex",
    code: "RND",
    description: "BIT Mesra's premier Research and Development hub for HackQuest 2.0 hackathon hackers.",
    coordinates: { x: 65, y: 55 },
    eventsHosted: ["HackQuest 2.0 (36 Hrs)", "Tech Exhibition"]
  },
  {
    id: "sports-arena",
    name: "Sports Complex & Arena",
    code: "SPORTS",
    description: "Spacious outdoor and indoor grounds housing the bulletproof RoboWars cage and ProNite stage.",
    coordinates: { x: 25, y: 70 },
    eventsHosted: ["RoboWars", "Star ProNite", "Drone Racing"]
  },
  {
    id: "oat",
    name: "Open Air Theatre (OAT)",
    code: "OAT",
    description: "Open-sky amphitheatre for cultural evenings, laser light shows, and musical performances.",
    coordinates: { x: 75, y: 35 },
    eventsHosted: ["EDM Prelude", "Battle of the Bands"]
  }
];

export const SPONSORS_DATA: SponsorItem[] = [
  { id: "sp1", name: "Cloudflare", tier: "Title", category: "Edge Cloud Computing Partner", logoText: "CLOUDFLARE" },
  { id: "sp2", name: "NVIDIA Inception", tier: "Powered By", category: "AI & Compute Partner", logoText: "NVIDIA" },
  { id: "sp3", name: "GitHub", tier: "Platinum", category: "Developer Ecosystem Partner", logoText: "GITHUB" },
  { id: "sp4", name: "Postman", tier: "Platinum", category: "API Innovation Partner", logoText: "POSTMAN" },
  { id: "sp5", name: "Polygon", tier: "Gold", category: "Web3 Track Sponsor", logoText: "POLYGON" },
  { id: "sp6", name: "Unstop", tier: "Media", category: "Official Competition Portal", logoText: "UNSTOP" }
];

export const TEAM_DATA: TeamMember[] = [
  { name: "Dr. K. R. Sharma", role: "Faculty Convener", clubOrDept: "Dean of Student Affairs", email: "dosa@bitmesra.ac.in", imageInitials: "KS" },
  { name: "Aarav Roy", role: "Student President", clubOrDept: "Technical Society BIT Mesra", email: "president.pantheon@bitmesra.ac.in", imageInitials: "AR" },
  { name: "Sneha Mukherjee", role: "Vice President & Operations", clubOrDept: "IEEE Branch", email: "vp.pantheon@bitmesra.ac.in", imageInitials: "SM" },
  { name: "Rishabh Prasad", role: "Hackathon Lead", clubOrDept: "ACM Chapter", email: "hackathon@bitmesra.ac.in", imageInitials: "RP" },
  { name: "Devika Nair", role: "Sponsorship & PR Lead", clubOrDept: "EDC Cell", email: "sponsorship@bitmesra.ac.in", imageInitials: "DN" },
  { name: "Vivek Kulkarni", role: "Robotics Core Lead", clubOrDept: "Robolution", email: "robolution@bitmesra.ac.in", imageInitials: "VK" }
];

export const FAQS_DATA = [
  {
    q: "Who can participate in Pantheon '26?",
    a: "Pantheon '26 is open to undergraduate, postgraduate, and PhD students from any recognized college or university across India. High school students participating in designated junior tracks are also welcome."
  },
  {
    q: "Is accommodation provided for outstation participants at BIT Mesra?",
    a: "Yes! On-campus hostel accommodation, food mess passes, and security clearance are provided for registered outstation participants at a nominal charge during the 3 days of the festival."
  },
  {
    q: "Are the hackathons and competitions free to register?",
    a: "Registration for HackQuest 2.0 and most major technical events is free of cost. Selected specialized workshops may carry a minimal pass fee for physical kit materials."
  },
  {
    q: "How do I get to BIT Mesra campus?",
    a: "BIT Mesra is located approximately 16 km from Ranchi Railway Station (RNC) and 25 km from Birsa Munda Airport (IXR). Dedicated fest shuttle buses run continuously between the station, airport, and main campus gates."
  },
  {
    q: "Can I participate in multiple events?",
    a: "Yes, as long as event timings do not overlap. Check the interactive Schedule section to plan your festival timeline."
  }
];
