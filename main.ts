// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, then the unsent line
// itself, exactly as it was typed. Fully deterministic, no network,
// no files outside the repo, no secrets, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "To: Mrs. Alvarez, my high school English teacher\n" +
  "I still have the essay you handed back with 'you write like someone with something to say' in the margin — I read it whenever I think about quitting, and I never told you it was why I stayed.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
