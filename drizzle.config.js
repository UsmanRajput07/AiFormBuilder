import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/Configs/Db/Schema/FormSchema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DbConnection,
  }
})