# 🚀 PANTHEON '26 — Official Tech Fest Platform & Documentation
> **Annual Science and Technology Festival of Birla Institute of Technology (BIT), Mesra, Ranchi**  
> *Theme: Cyber-Nexus & Future Frontiers — "Innovation Meets Infinity"*

[![Deployed on Cloudflare Workers](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-orange?logo=cloudflare)](https://pantheon.shraj.workers.dev/)
[![Built with vinext](https://img.shields.io/badge/Framework-vinext%20%2B%20Vite-646CFF?logo=vite)](https://github.com/cloudflare/vinext)
[![Tailwind CSS v4](https://img.shields.io/badge/Styling-Tailwind%20v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 📖 Master Documentation & Scanned Archive

For exhaustive documentation, scanned event archives from `pantheon25.com`, problem statements, and festival heritage, visit the official documentation link below:

👉 **[Complete Pantheon 2025 & 2026 Documentation File](file:///Users/shaswatraj/Desktop/pantheon/docs/PANTHEON_2025_2026_DOCS.md)** (`docs/PANTHEON_2025_2026_DOCS.md`)

---

## 🌟 Overview

**Pantheon** is the premier annual science and technology festival of **BIT Mesra, Ranchi**. Bringing together over 6,000+ innovators, developers, engineers, and researchers from 50+ colleges across India, Pantheon features high-stakes hackathons, combat robotics, speed competitive programming, aerospace exhibitions, B-plan pitches, gaming tournaments, and star-studded cultural nights.

- **Live Site:** [https://pantheon.shraj.workers.dev/](https://pantheon.shraj.workers.dev/)
- **Archive Site:** [https://pantheon25.com](https://pantheon25.com)
- **Host Institution:** Birla Institute of Technology (BIT), Mesra, Ranchi - 835215, Jharkhand, India.

---

## 🛠️ Architecture & Technology Stack

The platform is designed with an edge-first, high-performance architecture optimized for Cloudflare Workers:

- **Core Framework:** [`vinext`](https://github.com/cloudflare/vinext) — Next.js App Router paradigm on top of Vite & React Server Components (RSC).
- **Runtime Target:** Cloudflare Workers (`wrangler`).
- **Styling System:** Tailwind CSS v4 + Glowing Sci-Fi Dark Palette (`#030712`, `#06b6d4`, `#8b5cf6`, `#f59e0b`).
- **Iconography:** [`lucide-react`](https://lucide.dev/) vector icons.
- **Data Architecture:** Fully typed static & dynamic schema in [`app/data/pantheonData.ts`](file:///Users/shaswatraj/Desktop/pantheon/app/data/pantheonData.ts).

---

## 📁 Repository Structure

```
pantheon/
├── app/
│   ├── components/         # React UI modules (Hero, EventExplorer, Schedule, Map, Modals, FAQ)
│   ├── data/
│   │   └── pantheonData.ts # Typed dataset for events, schedules, venues, sponsors, and FAQs
│   ├── globals.css         # Custom sci-fi design system, glassmorphism, glow tokens & grid overlays
│   ├── layout.tsx          # Root layout with complete SEO metadata & viewport config
│   └── page.tsx            # Main interactive single-page application entry point
├── docs/
│   └── PANTHEON_2025_2026_DOCS.md # Scanned documentation archive & detailed festival guide
├── public/                 # Static assets and emblems
├── dist/                   # Cloudflare Worker production build output
├── wrangler.jsonc          # Cloudflare Workers environment binding & deployment config
├── vite.config.ts          # Vite bundler configuration
├── tsconfig.json           # TypeScript strict configuration
└── package.json            # Dependencies and npm scripts
```

---

## ⚡ Quick Start & Development Guide

### Prerequisites
- [Bun](https://bun.sh/) `v1.3+` (recommended package manager) or `Node.js 20+` / `pnpm`
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### 1. Install Dependencies
```bash
bun install
```

### 2. Run Local Development Server
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in local development mode.

### 3. Build Production Worker Output
```bash
bun run build
```

### 4. Preview Worker Locally with Wrangler
```bash
bun run preview
```

### 5. Deploy to Cloudflare Workers Edge
```bash
bun run deploy
```

---

## 🏆 Key Highlights & Event Categories

### 1. **HackQuest 2.0 (Flagship Hackathon)**
- **36-Hour Non-stop Sprint** in BIT Mesra's R&D Complex.
- Tracks: AI/ML, Web3 & Decentralized Systems, Smart City TrafficOps+, Health Tech, FinTech (SplitKaro), and Open Innovation.
- Cash Prize Pool: **₹1,50,000+**

### 2. **RoboRealm & Combat Robotics**
- **RoboWars: Steel Carnage** (15kg & 30kg kinetic spinner bots in polycarbonate arena).
- **Maze Runner & Line Follower** (Autonomous micro-bot pathfinding).
- **Bot Soccer** (Wireless RC bot soccer).

### 3. **Coding & Algorithmic Sprint**
- **Codezilla 2026** (ACM speed competitive programming contest).
- **Commit Storm** (Git workflow & reverse-engineering challenge).
- **Blind Coding** (Algorithm sprint without display feedback).

### 4. **E-Summit & B-Plan**
- **Inventor's Forge** (EDC startup pitch to VCs and angel investors with STEP incubation support).

### 5. **Cultural ProNites**
- **Day 1:** अभिनंदन (Ghazal Night with Neeraj Gandhi)
- **Day 2:** उदघोष (Heritage Night with Shalini Dubey & Diljeet Lal)
- **Day 3:** अनहद (Band Night with Sleeping Pills) & Grand Celebrity ProNite

---

## 📞 Contacts & Socials

- **Student Conveners:**
  - Mrityunjay Raj: `+91 9471828932`
  - Rishav Kamal: `+91 7667993009`
- **Email:** `pantheon@bitmesra.ac.in`
- **Instagram:** [@pantheon_techfest](https://www.instagram.com/pantheon_techfest/)
- **Facebook:** [bitmesra.pantheon](https://www.facebook.com/bitmesra.pantheon/)

---

## 📄 License & Ownership

Created for **Birla Institute of Technology, Mesra, Ranchi**. All rights reserved.
