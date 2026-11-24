import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry line (109 chars, no trailing newline): the one-liner pitch the
// grader scores. Kept as a single literal so the output is byte-stable.
const LINE = "PressZero sells lazy AI voice agents $0.01 live keypad cheats to dodge per-minute fees on airline hold music.";

// Output-dir resolution order: argv[2] > $MAKEFUN_OUTPUT_DIR > "/output"
// (the grader's contract). No fallback: a failed mkdir must surface, not
// silently write elsewhere.
function resolveOutDir(): string {
  return process.argv[2] || process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

const outDir = resolveOutDir();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
