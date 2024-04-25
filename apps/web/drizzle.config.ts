import { type Config } from "drizzle-kit";

import { env } from "~/env";

console.log(env);

export default {
  schema: "./src/server/db/schema.ts",
  driver: "better-sqlite",
  dbCredentials: {
    // url: env.DATABASE_URL,
    url: env.DATABASE_URL ?? "./db.sqlite",
  },
  tablesFilter: ["web_*"],
} satisfies Config;
