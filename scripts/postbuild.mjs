import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

function copyPathIfExists(sourcePath, targetPath) {
  if (!existsSync(sourcePath)) {
    return;
  }

  mkdirSync(dirname(targetPath), { recursive: true });
  cpSync(sourcePath, targetPath, { recursive: true });
}

const sourceDir = resolve(process.cwd(), "src/assets");
const targetDir = resolve(process.cwd(), "dist/src/assets");

copyPathIfExists(sourceDir, targetDir);
copyPathIfExists(
  resolve(process.cwd(), ".nojekyll"),
  resolve(process.cwd(), "dist/.nojekyll")
);
copyPathIfExists(
  resolve(process.cwd(), "apple-app-site-association"),
  resolve(process.cwd(), "dist/apple-app-site-association")
);
copyPathIfExists(
  resolve(process.cwd(), ".well-known/apple-app-site-association"),
  resolve(process.cwd(), "dist/.well-known/apple-app-site-association")
);
