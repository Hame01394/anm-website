const checks = {
  DATABASE_URL: Boolean(process.env.DATABASE_URL),
  BETTER_AUTH_SECRET: (process.env.BETTER_AUTH_SECRET?.length ?? 0) >= 128,
  BETTER_AUTH_URL: Boolean(process.env.BETTER_AUTH_URL),
};
for (const [key, valid] of Object.entries(checks)) {
  console.log(`${key}: ${valid ? "OK" : "MISSING OR INVALID"}`);
}
if (Object.values(checks).some(valid => !valid)) {
  process.exitCode = 1;
}
