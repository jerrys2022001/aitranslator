import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

function copyPathIfExists(sourcePath, targetPath) {
  if (!existsSync(sourcePath)) {
    return;
  }

  mkdirSync(dirname(targetPath), { recursive: true });
  cpSync(sourcePath, targetPath, { recursive: true });
}

function flattenInviteOutput() {
  const builtInviteIndexPath = resolve(process.cwd(), "dist/invite/index.html");
  const builtInvitePath = resolve(process.cwd(), "dist/invite");

  if (!existsSync(builtInviteIndexPath)) {
    return;
  }

  const inviteHTML = readFileSync(builtInviteIndexPath, "utf8");
  rmSync(builtInvitePath, { recursive: true, force: true });
  writeFileSync(builtInvitePath, inviteHTML);
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
flattenInviteOutput();
