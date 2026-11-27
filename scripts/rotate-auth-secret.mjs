import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
const file = path.resolve(".env.local");
const secret = crypto.randomBytes(64).toString("hex");
let content = fs.readFileSync(file, "utf8");
content = content.replace(/^\uFEFF/, "");
const lines = content.split(/\r?\n/);
const matching = lines.filter(line => /^\s*BETTER_AUTH_SECRET\s*=/.test(line));
if (matching.length > 1) {
  throw new Error("Duplicate secret entries. No changes made.");
}
const output = lines.filter(line => !/^\s*BETTER_AUTH_SECRET\s*=/.test(line));
output.push(`BETTER_AUTH_SECRET=${secret}`);
fs.writeFileSync(file, output.join("\n") + "\n", "utf8");
const saved = fs.readFileSync(file, "utf8");
const savedLines = saved.split(/\r?\n/);
const entry = savedLines.find(line => /^BETTER_AUTH_SECRET=/.test(line));
const savedValue = entry?.slice("BETTER_AUTH_SECRET=".length) ?? "";
console.log("File:", file);
console.log("Secret entries:", savedLines.filter(line => /^BETTER_AUTH_SECRET=/.test(line)).length);
console.log("Saved secret length:", savedValue.length);
console.log("Verification:", savedValue.length === 128 ? "SUCCESS" : "FAILED");
