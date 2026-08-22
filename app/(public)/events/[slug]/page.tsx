import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENTS_DATA } from "@/app/data/pantheonData";
import EventHero from "@/components/events/detail/EventHero";
import SpecStrip from "@/components/events/detail/SpecStrip";
import RulesList from "@/components/events/detail/RulesList";
import ContactCard from "@/components/events/detail/ContactCard";
import RegisterPanel from "@/components/events/detail/RegisterPanel";
import EventCard from "@/components/events/EventCard";
import SectionTitle from "@/components/events/detail/SectionTitle";
import TopScrim from "@/components/layout/TopScrim";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EVENTS_DATA.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found — Pantheon '26" };

  return {
    title: `${event.title} — Pantheon '26 | BIT Mesra`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Params) {
  const { slug } = await params;
  const event = EVENTS_DATA.find((e) => e.slug === slug);
  if (!event) notFound();

  const related = EVENTS_DATA.filter(
    (e) => e.slug !== event.slug && e.category === event.category
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-pantheon-black text-pantheon-white">
      <TopScrim />
      <EventHero event={event} />

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SpecStrip event={event} />

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
          <div className="space-y-16">
            <section>
              <SectionTitle index="01" title="About the event" hint="Overview" />
              <p className="pantheon-lead">{event.description}</p>
              <p className="pantheon-prose mt-6">{event.overview}</p>
            </section>

            <RulesList
              index="02"
              title="Rules & regulations"
              hint={`${event.rules.length} points`}
              items={event.rules}
            />

            {event.judgementCriteria && (
              <RulesList
                index="03"
                title="Judgement criteria"
                hint="How you're scored"
                items={event.judgementCriteria}
              />
            )}
          </div>

          <aside className="space-y-10">
            <RegisterPanel event={event} />
            <ContactCard contacts={event.contacts} />
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-24 border-t border-pantheon-border-subtle pt-14">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-pantheon-purple-light">
                  More {event.category}
                </div>
                <h2 className="pantheon-h2 mt-3">Related events</h2>
              </div>

              <Link
                href="/events"
                className="group inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-pantheon-muted transition-colors hover:text-pantheon-white"
              >
                All events
                <ArrowUpRight
                  size={12}
                  className="text-pantheon-purple-light transition-transform duration-300 group-hover:rotate-45"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((e, i) => (
                <EventCard key={e.id} event={e} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
