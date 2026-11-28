import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
});
try {
  const columns = await pool.query(`
    SELECT column_name, data_type, is_nullable, column_default
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'newsroom_users'
    ORDER BY ordinal_position
  `);
  console.table(columns.rows);
  const existing = await pool.query(`
    SELECT id, auth_user_id, display_name, email, role, is_active
    FROM public.newsroom_users
    WHERE auth_user_id = $1 OR email = $2
  `, [
    "MoZwZekGSRqyf8BXbcFlq5FjRW8yH9W5",
    "admin@agazianmovement.com"
  ]);
  console.log("Existing matching newsroom users:");
  console.table(existing.rows);
} finally {
  await pool.end();
}
