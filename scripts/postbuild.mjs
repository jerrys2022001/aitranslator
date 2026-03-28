import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

function copyPathIfExists(sourcePath, targetPath) {
  if (!existsSync(sourcePath)) {
    return;
  }

  mkdirSync(dirname(targetPath), { recursive: true });
  cpSync(sourcePath, targetPath, { recursive: true });
}

const sourceDir = resolve(process.cwd(), "src/assets/screens");
const targetDir = resolve(process.cwd(), "dist/src/assets/screens");

copyPathIfExists(sourceDir, targetDir);
copyPathIfExists(
  resolve(process.cwd(), "apple-app-site-association"),
  resolve(process.cwd(), "dist/apple-app-site-association")
);
copyPathIfExists(
  resolve(process.cwd(), ".well-known/apple-app-site-association"),
  resolve(process.cwd(), "dist/.well-known/apple-app-site-association")
);
