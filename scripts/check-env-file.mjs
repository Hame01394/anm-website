import fs from "node:fs";
import path from "node:path";
const file = path.resolve(".env.local");
console.log("Project directory:", process.cwd());
console.log("Environment file:", file);
console.log("File exists:", fs.existsSync(file));
if (fs.existsSync(file)) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  console.log("Variable names found:");
  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=/);
    if (match) console.log(" -", match[1]);
  }
}
