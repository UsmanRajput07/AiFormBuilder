import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { forms } from "./Schema/FormSchema";
const sql = neon(process.env.NEXT_PUBLIC_DbConnection);
const db = drizzle({ client: sql, schema: { forms } });

// const result = await db.execute();

export default db;
