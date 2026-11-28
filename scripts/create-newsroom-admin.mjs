import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
});
const authUserId = "MoZwZekGSRqyf8BXbcFlq5FjRW8yH9W5";
const email = "admin@agazianmovement.com";
try {
  const result = await pool.query(`
    INSERT INTO public.newsroom_users
      (auth_user_id, display_name, email, role, is_active)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, auth_user_id, display_name, email, role, is_active
  `, [
    authUserId,
    "ANM Administrator",
    email,
    "admin",
    true
  ]);
  console.log("Newsroom administrator registered successfully:");
  console.table(result.rows);
} finally {
  await pool.end();
}
