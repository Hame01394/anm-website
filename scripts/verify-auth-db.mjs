import pg from "pg";
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: true },
});
try {
  const result = await pool.query(`
    SELECT table_schema, table_name
    FROM information_schema.tables
    WHERE table_schema IN ('auth', 'public')
      AND table_type = 'BASE TABLE'
    ORDER BY table_schema, table_name
  `);
  for (const row of result.rows) {
    console.log(`${row.table_schema}.${row.table_name}`);
  }
} catch (error) {
  console.error("Verification failed:", error.message);
  process.exitCode = 1;
} finally {
  await pool.end();
}
