import pg from "pg";
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
});
try {
  const result = await pool.query(`
    SELECT table_name, column_name
    FROM information_schema.columns
    WHERE table_schema = 'auth'
      AND table_name IN ('user', 'session')
    ORDER BY table_name, ordinal_position
  `);
  for (const row of result.rows) {
    console.log(`${row.table_name}.${row.column_name}`);
  }
} catch (error) {
  console.error("Schema inspection failed:", error.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
