import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pantheon '26 — BIT Mesra | Science & Technology Festival",
  description: "Clean, minimal black & white template for Pantheon '26, the 26th annual science & technology festival of Birla Institute of Technology (BIT), Mesra, Ranchi.",
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
    <main className="min-h-screen bg-black text-white flex flex-col justify-between p-6 sm:p-12 font-mono selection:bg-white selection:text-black">
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-neutral-800 pb-6 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-white text-black font-bold flex items-center justify-center text-xs">
            P
          </div>
          <span className="font-bold tracking-widest text-sm uppercase">PANTHEON '26</span>
        </div>
        <Badge variant="outline" className="border-neutral-700 text-neutral-300 font-mono text-[11px] py-0.5 px-2">
          BIT MESRA • RANCHI
        </Badge>
      </header>

      {/* Hero Body */}
      <section className="max-w-3xl mx-auto w-full my-auto py-12 space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
            26TH ANNUAL SCIENCE & TECH FESTIVAL
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
            Pantheon '26 Template
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Minimal, monochrome template for BIT Mesra's annual technical festival. Powered by vinext, Cloudflare Workers, Neon PostgreSQL, Drizzle ORM, Hexclave, and shadcn/ui.
          </p>
        </div>

        {/* Info Cards Grid using Pure shadcn UI */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <Card className="bg-neutral-950 border-neutral-800 text-white rounded-none">
            <CardHeader className="p-4">
              <CardDescription className="text-[10px] uppercase font-mono text-neutral-500">
                DATES
              </CardDescription>
              <CardTitle className="text-xs font-semibold text-white">
                October 16 - 18, 2026
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800 text-white rounded-none">
            <CardHeader className="p-4">
              <CardDescription className="text-[10px] uppercase font-mono text-neutral-500">
                LOCATION
              </CardDescription>
              <CardTitle className="text-xs font-semibold text-white">
                BIT Mesra, Ranchi
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-neutral-950 border-neutral-800 text-white rounded-none">
            <CardHeader className="p-4">
              <CardDescription className="text-[10px] uppercase font-mono text-neutral-500">
                INFRASTRUCTURE
              </CardDescription>
              <CardTitle className="text-xs font-semibold text-white">
                Cloudflare Workers
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Action Buttons using pure shadcn Button */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href="https://pantheon25.com" target="_blank" rel="noreferrer">
            <Button variant="default" className="bg-white text-black hover:bg-neutral-200 text-xs rounded-none font-mono">
              Archive '25 →
            </Button>
          </a>
          <a href="https://github.com/SH20RAJ/pantheon" target="_blank" rel="noreferrer">
            <Button variant="outline" className="border-neutral-800 bg-black text-neutral-300 hover:bg-neutral-900 hover:text-white text-xs rounded-none font-mono">
              GitHub Repo
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 pt-6 max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
        <span>© {new Date().getFullYear()} PANTHEON • BIT MESRA</span>
        <span>SHADCN MONOCHROME TEMPLATE</span>
      </footer>
    </main>
  );
}
