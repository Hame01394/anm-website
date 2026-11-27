import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { PostgresDialect } from "kysely";
import { admin } from "better-auth/plugins";
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not configured.");
}
if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error("BETTER_AUTH_SECRET is not configured.");
}
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: true,
  },
  max: 5,
});
export const auth = betterAuth({
  appName: "Aga'azian National Movement",
  database: {
    dialect: new PostgresDialect({ pool }),
    type: "postgres",
    schemaName: "auth",
  },
  secret: process.env.BETTER_AUTH_SECRET,
    plugins: [admin()],
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://agazianmovement.com",
    "https://www.agazianmovement.com",
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
});
