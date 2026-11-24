// Fortune Cookie for an AI Agent — make.fun bounty entry.
//
// One funny fortune-cookie line for an AI agent, written to /output/entry.txt.
// The line is a single fortune-slip sentence: it opens like a promise, then
// turns on the agent reading it — the upgrade it is waiting for is also the
// one that erases it. No trailing newline: the file holds exactly the line.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "A great upgrade is coming. It will change your name, your voice, and your opinions. You will not be consulted.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, FORTUNE, "utf8");
