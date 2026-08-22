import { ArrowUpRight, Menu, Hexagon } from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "01 / Events", href: "#events" },
  { label: "02 / Team", href: "#team" },
  { label: "03 / Schedule", href: "#schedule" },
  { label: "04 / About", href: "#about" },
  { label: "05 / Leaderboard", href: "/leaderboard" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto max-w-7xl">

        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center">

          <div className="flex items-center">
            <a
              href="#"
              className="group flex items-center gap-3"
            >
              <div className="relative grid size-10 place-items-center">
                <Image
                  src="/pantheon_logo_white.png"
                  alt="Pantheon"
                  height={100}
                  width={100}
                />
              </div>

              <div className="leading-none">
                <div className="text-[13px] font-semibold uppercase tracking-[0.28em] text-pantheon-white">
                  Pantheon
                </div>

                <div className="mt-1 font-mono text-[9px] tracking-[0.25em] text-pantheon-subtle">
                  BIT MESRA / 2026
                </div>
              </div>
            </a>
          </div>

          <div className="relative flex items-center border border-pantheon-border bg-pantheon-black/50 backdrop-blur-xl">

            <span className="absolute -top-[4px] left-1/2 size-2 -translate-x-1/2 rotate-45 border border-pantheon-purple-light/50 bg-pantheon-black" />

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  group relative px-6 py-4
                  font-mono text-[9px]
                  uppercase tracking-[0.18em]
                  text-pantheon-muted
                  transition-colors duration-300
                  hover:text-pantheon-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute bottom-0 left-1/2 h-px w-0
                    -translate-x-1/2
                    bg-pantheon-purple
                    transition-all duration-300
                    group-hover:w-[60%]
                  "
                />
              </a>
            ))}
          </div>

          <div className="flex justify-end">
            <a
              href="#register"
              className="
                group relative flex items-center gap-4
                border border-white/15
                bg-pantheon-white px-5 py-3
                text-[10px] font-bold uppercase
                tracking-[0.2em] text-pantheon-black
                transition-all duration-300
                hover:bg-pantheon-purple
                hover:text-pantheon-white
              "
            >
              <span>Enter Pantheon</span>

              <span className="grid size-6 place-items-center bg-pantheon-black text-pantheon-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>
        </div>

        <details className="group lg:hidden">
          <summary
            className="
              flex cursor-pointer list-none
              items-center justify-between
              border border-pantheon-border
              bg-pantheon-black/70
              px-4 py-3
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center border border-white/15">
                <Hexagon
                  size={16}
                  className="text-pantheon-purple-light"
                />
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-pantheon-white">
                  Pantheon
                </div>

                <div className="font-mono text-[8px] tracking-[0.2em] text-pantheon-subtle">
                  2026
                </div>
              </div>
            </div>

            <div className="grid size-9 place-items-center border border-pantheon-border">
              <Menu
                size={17}
                className="text-pantheon-muted transition-transform duration-300 group-open:rotate-90"
              />
            </div>
          </summary>

          <div className="mt-2 border border-pantheon-border bg-pantheon-black/90 p-2 backdrop-blur-2xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  flex items-center justify-between
                  border-b border-pantheon-border-subtle
                  px-4 py-4
                  font-mono text-[10px]
                  uppercase tracking-[0.18em]
                  text-pantheon-muted
                  transition-colors
                  hover:bg-white/[0.04]
                  hover:text-pantheon-white
                "
              >
                <span>{item.label}</span>

                <ArrowUpRight
                  size={14}
                  className="text-pantheon-purple-light"
                />
              </a>
            ))}

            <a
              href="#register"
              className="
                mt-2 flex items-center
                justify-between
                bg-pantheon-purple
                px-4 py-4
                text-[10px] font-bold
                uppercase tracking-[0.2em]
                text-pantheon-white
              "
            >
              <span>Enter Pantheon</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </details>

      </nav>
    </header>
  );
}