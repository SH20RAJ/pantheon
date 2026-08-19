import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pantheon '26 — BIT Mesra | Science & Technology Festival",
  description: "Clean, minimal template for Pantheon '26, the 26th annual science & technology festival of Birla Institute of Technology (BIT), Mesra, Ranchi.",
  keywords: ["Pantheon 2026", "BIT Mesra", "Tech Fest", "HackQuest", "Ranchi"],
  authors: [{ name: "Pantheon Team, BIT Mesra" }],
  creator: "BIT Mesra Technical Society",
  publisher: "BIT Mesra",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pantheon '26 — BIT Mesra",
    description: "Annual Science & Technology Festival of BIT Mesra, Ranchi.",
    url: "https://pantheon.shraj.workers.dev",
    siteName: "Pantheon '26",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantheon '26 — BIT Mesra",
    description: "Annual Science & Technology Festival of BIT Mesra, Ranchi.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-slate-800/80 pb-6 max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center text-slate-950 font-bold font-mono text-sm">
            P
          </div>
          <span className="font-bold tracking-wider text-base">PANTHEON '26</span>
        </div>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
          BIT MESRA • RANCHI
        </span>
      </header>

      {/* Hero Body */}
      <section className="max-w-3xl mx-auto w-full my-auto py-16 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-purple-400">
            26TH ANNUAL SCIENCE & TECH FESTIVAL
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Pantheon '26 <span className="text-cyan-400">Template</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A clean, minimal, production-ready template for BIT Mesra's annual technical convention. Powered by vinext, Cloudflare Workers, and Hexclave auth.
          </p>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-mono text-slate-400">DATES</span>
            <p className="text-sm font-bold text-slate-200">October 16 - 18, 2026</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-mono text-slate-400">LOCATION</span>
            <p className="text-sm font-bold text-slate-200">BIT Mesra, Ranchi</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-[10px] uppercase font-mono text-slate-400">DEPLOYMENT</span>
            <p className="text-sm font-bold text-cyan-400">Cloudflare Workers</p>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="https://pantheon25.com"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-semibold transition-colors"
          >
            Explore Pantheon 2025 Archive →
          </a>
          <a
            href="https://github.com/SH20RAJ/pantheon"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold transition-colors"
          >
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 pt-6 max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <span>© {new Date().getFullYear()} PANTHEON • BIT MESRA</span>
        <span>Minimal Template</span>
      </footer>
    </main>
  );
}
