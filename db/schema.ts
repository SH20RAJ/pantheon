import { pgTable, text, timestamp, varchar, uuid } from "drizzle-orm/pg-core";

export const registrations = pgTable("registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }),
  college: text("college").notNull(),
  eventTrack: text("event_track").notNull(),
  teamName: text("team_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
