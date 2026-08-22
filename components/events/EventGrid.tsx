import type { EventItem } from "@/app/data/pantheonData";
import EventCard from "./EventCard";
import EmptyState from "./EmptyState";

export default function EventGrid({
  events,
  onClear,
}: {
  events: EventItem[];
  onClear?: () => void;
}) {
  if (events.length === 0) return <EmptyState onClear={onClear} />;

  return (
    // Free-standing cards: no container fill or border, so a short final
    // row simply ends instead of leaving empty cells.
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event, i) => (
        <EventCard key={event.id} event={event} index={i} />
      ))}
    </div>
  );
}
