import { date } from "drizzle-orm/mysql-core";
import { integer,varchar, text, boolean, pgTable, uuid, pgEnum, timestamp } from "drizzle-orm/pg-core";


export const STATUS_ENUM = pgEnum("status", [
    "PENDING",
    "APPROVED",
    "REJECTED",
  ]);

export const ROLE_ENUM = pgEnum("role", [
    "ADMIN",
    "USER",
  ]);

export const BORROW_ENUM = pgEnum("borrow_status", [
    "BORROWED",
    "RETURNED",
  ]);

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", {length: 255}).notNull(),
  email: text("email").notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  universityCard: text("university_card").notNull(),
  password: text("password").notNull(),
  status: STATUS_ENUM("status").notNull().default("PENDING"),
  role: ROLE_ENUM("role").default("USER"),
  lastActivityDate: timestamp("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});
 

