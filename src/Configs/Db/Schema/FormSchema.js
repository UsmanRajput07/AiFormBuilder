import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
export const forms = pgTable('forms', {
  id: serial('id').primaryKey(),
  Form: text('JsonForm').notNull(),
  createdBy: varchar('createdBy').notNull(),
  updatedAt: varchar('updatedAt').notNull(),
});