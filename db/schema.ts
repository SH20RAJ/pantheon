import { pgTable, text, timestamp, varchar, uuid, integer } from "drizzle-orm/pg-core";

export const registrations = pgTable("registrations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id"), // Hexclave User ID
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 20 }),
  college: text("college").notNull(),
  eventTrack: text("event_track").notNull(),
  teamName: text("team_name"),
  teamId: text("team_id"), // Hexclave Team ID
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const teamStats = pgTable("team_stats", {
  id: uuid("id").primaryKey().defaultRandom(),
  teamId: text("team_id").notNull().unique(), // Hexclave Team ID
  score: integer("score").default(0).notNull(),
  rank: integer("rank"),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});
