import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(process.cwd(), "out");
const TEXT_EXT = new Set([".html", ".js", ".css", ".json", ".txt", ".map"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function prefixFor(file) {
  const rel = path.relative(ROOT, path.dirname(file)).replaceAll("\\", "/");
  if (!rel || rel === ".") return "./";
  const depth = rel.split("/").filter(Boolean).length;
  return "../".repeat(depth);
}

async function main() {
  const files = await walk(ROOT);
  for (const file of files) {
    if (!TEXT_EXT.has(path.extname(file))) continue;
    const prefix = prefixFor(file);
    let text = await readFile(file, "utf8");
    const next = text
      .replaceAll("/_next/", `${prefix}_next/`)
      .replaceAll('"/icon.svg', `"${prefix}icon.svg`)
      .replaceAll("'/icon.svg", `'${prefix}icon.svg`);
    if (next !== text) await writeFile(file, next);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
