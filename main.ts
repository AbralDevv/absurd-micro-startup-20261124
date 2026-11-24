import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "PressZero sells lazy AI voice agents $0.01 live keypad cheats to dodge per-minute fees on airline hold music.";

const outDir = process.argv[2] || process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
