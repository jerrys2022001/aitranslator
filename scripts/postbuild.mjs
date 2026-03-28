import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const sourceDir = resolve(process.cwd(), "src/assets/screens");
const targetDir = resolve(process.cwd(), "dist/src/assets/screens");

if (existsSync(sourceDir)) {
  mkdirSync(targetDir, { recursive: true });
  cpSync(sourceDir, targetDir, { recursive: true });
}
