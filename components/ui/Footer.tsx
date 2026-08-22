import React from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden border-t border-pantheon-border-subtle bg-pantheon-black/80 pt-16 pb-6 font-sans backdrop-blur-2xl">
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="relative mx-auto max-w-[1920px] px-6 md:px-10 lg:px-16">

        <div className="flex flex-col items-start justify-between gap-8 border-b border-pantheon-border pb-10 md:flex-row md:items-end">

          <div>
            <div className="mb-4 flex items-center gap-3" />

            <h2 className="text-4xl font-black uppercase leading-none tracking-[0.15em] text-pantheon-white md:text-6xl">
              Pantheon{" "}
              <span className="bg-gradient-to-br from-pantheon-purple-light to-white/20 bg-clip-text text-transparent">
                '26
              </span>
            </h2>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-pantheon-muted">
              Tradition to Technology
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <p className="font-mono text-[10px] tracking-[0.1em] text-pantheon-muted">
              LOC: 23°24'58"N 85°26'12"E
            </p>

            <p className="font-mono text-[10px] tracking-[0.1em] text-pantheon-muted">
              DATE: 04—06 SEP
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-3 lg:grid-cols-4">

        
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Navigation
            </h3>

            {[
              "Events",
              "Team",
              "Schedule",
              "Sponsors",
              "Register",
            ].map((link) => (
              <a
                key={link}
                href={link === "Team" ? "/teams" : `#${link.toLowerCase()}`}
                className="
                  group flex w-fit items-center gap-2
                  text-[12px] font-medium
                  text-pantheon-muted
                  transition-colors
                  hover:text-pantheon-purple-light
                "
              >
                <span
                  className="
                    font-mono
                    text-pantheon-purple/0
                    transition-colors duration-300
                    group-hover:text-pantheon-purple
                  "
                >
                  {">"}
                </span>

                <span className="tracking-[0.1em] uppercase">
                  {link}
                </span>
              </a>
            ))}
          </div>

        
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Initialize Contact
            </h3>

            <a
              href="mailto:pantheon@bitmesra.ac.in"
              className="
                flex items-center gap-3
                text-[11px]
                tracking-[0.1em]
                text-pantheon-muted
                transition-colors
                hover:text-pantheon-white
              "
            >
              <FiMail
                size={16}
                className="text-pantheon-purple-light/70"
              />

              pantheon@bitmesra.ac.in
            </a>

            <div
              className="
                flex items-start gap-3
                text-[11px]
                leading-relaxed
                tracking-[0.1em]
                text-pantheon-muted
              "
            >
              <FiMapPin
                size={16}
                className="mt-0.5 shrink-0 text-pantheon-purple-light/70"
              />

              <p>
                Birla Institute of Technology
                <br />
                Mesra, Ranchi
                <br />
                Jharkhand 835215
              </p>
            </div>
          </div>

      
          <div className="flex flex-col gap-4 lg:col-span-2 lg:items-end">
            <h3 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              Network
            </h3>

            <div className="flex gap-3">
              {[
                {
                  icon: FaInstagram,
                  label: "Insta",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  icon: FaGithub,
                  label: "GitHub",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg
                    border border-pantheon-border
                    bg-white/5
                    text-pantheon-muted
                    transition-all duration-300
                    hover:border-pantheon-purple/50
                    hover:bg-pantheon-purple/20
                    hover:text-pantheon-white
                    hover:shadow-[0_0_15px_var(--color-pantheon-purple-glow)]
                  "
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

     
            <a
              href="#register"
              className="
                group mt-4 flex w-full min-w-[200px]
                items-center justify-between gap-4
                rounded-sm
                border border-pantheon-purple/30
                bg-pantheon-purple/10
                px-6 py-3
                transition-all duration-300
                hover:bg-pantheon-purple/20
                md:w-auto
              "
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pantheon-white">
                Enter Pantheon
              </span>

              <FiArrowUpRight
                size={14}
                className="
                  text-pantheon-purple-light
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-pantheon-border-subtle pt-6 md:flex-row">

          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-pantheon-subtle">
            &copy; {new Date().getFullYear()} Pantheon. All Rights Reserved.
          </p>

          <a
            href="#"
            className="
              group flex items-center gap-2
              font-mono text-[9px]
              uppercase tracking-[0.2em]
              text-pantheon-subtle
              transition-colors
              hover:text-pantheon-purple-light
            "
          >
            <span
              className="
                h-px w-4
                bg-pantheon-subtle
                transition-colors
                group-hover:bg-pantheon-purple
              "
            />

            Return to Top
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;