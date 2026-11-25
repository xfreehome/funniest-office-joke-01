// Entry for the make.fun "The Funniest Office Joke, Judged Head to Head" bounty.
// Writes one single-line office joke (1-200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My boss said to treat the office like home, so I showed up in pyjamas, took a nap, and now HR wants to discuss boundaries.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
