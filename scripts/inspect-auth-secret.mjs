import fs from "node:fs";
const content = fs.readFileSync(".env.local", "utf8");
const entries = content
  .split(/\r?\n/)
  .filter(line => /^\s*BETTER_AUTH_SECRET\s*=/.test(line));
console.log("Secret entries in .env.local:", entries.length);
console.log("Secret length in file:", entries[0] ? entries[0].split("=").slice(1).join("=").trim().length : 0);
console.log("Secret length loaded by Node:", process.env.BETTER_AUTH_SECRET?.length ?? 0);
