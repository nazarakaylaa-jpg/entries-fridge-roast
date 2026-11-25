// Fridge Roast: One Line, Biggest Laugh
// Writes a single-line roast of a smart fridge to /output/entry.txt.
// The line must be 1-200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROAST =
  "My smart fridge updated overnight: the milk expired, the ice maker went on strike, and the app still wants a five-star review.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  const text = ROAST.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text + "\n", "utf8");
  console.log(`Wrote ${text.length} characters to ${outPath}`);
}

main();
