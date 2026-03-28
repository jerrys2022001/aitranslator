import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const APP_STORE_URL = "https://apps.apple.com/app/id6757105258";
const INVITE_HTML_PATH = resolve(process.cwd(), "invite/index.html");
const INVITE_MODULE_PATH = resolve(process.cwd(), "src/invite.js");
const INVITE_STYLES_PATH = resolve(process.cwd(), "src/invite.css");
const INVITE_QR_PATH = resolve(process.cwd(), "src/assets/invite/qrcode.png");

describe("invite page", () => {
  it("ships a standalone static invite entry with dedicated assets", () => {
    expect(existsSync(INVITE_HTML_PATH)).toBe(true);
    expect(existsSync(INVITE_MODULE_PATH)).toBe(true);
    expect(existsSync(INVITE_STYLES_PATH)).toBe(true);
    expect(existsSync(INVITE_QR_PATH)).toBe(true);

    const inviteHtml = existsSync(INVITE_HTML_PATH)
      ? readFileSync(INVITE_HTML_PATH, "utf8")
      : "";

    expect(inviteHtml).toContain('<link rel="stylesheet" href="../src/invite.css"');
    expect(inviteHtml).toContain('<script type="module" src="../src/invite.js"></script>');
    expect(inviteHtml).toContain("<div id=\"invite-app\"></div>");
  });

  it("registers the invite page as a dedicated Vite build entry", () => {
    const viteConfig = readFileSync(resolve(process.cwd(), "vite.config.js"), "utf8");

    expect(viteConfig).toContain('resolve(__dirname, "invite/index.html")');
  });

  it("keeps the QR code centered inside the white frame", () => {
    const stylesheet = readFileSync(INVITE_STYLES_PATH, "utf8");

    expect(stylesheet).toContain(".invite-qr-link {");
    expect(stylesheet).toContain("display: inline-flex;");
    expect(stylesheet).toContain("justify-content: center;");
    expect(stylesheet).toContain(".invite-qr-frame {");
    expect(stylesheet).toContain("width: fit-content;");
    expect(stylesheet).toContain("margin-inline: auto;");
  });

  it("renders a one-screen download page with QR and App Store CTAs", async () => {
    let createInvitePage;
    const inviteModulePath = "./invite.js";

    try {
      ({ createInvitePage } = await import(/* @vite-ignore */ inviteModulePath));
    } catch {
      createInvitePage = undefined;
    }

    expect(typeof createInvitePage).toBe("function");

    document.body.innerHTML = '<div id="invite-app"></div>';
    const mountNode = document.querySelector("#invite-app");

    createInvitePage({ mountNode });

    const heading = document.querySelector("h1");
    const qrLink = document.querySelector("[data-invite-qr-link]");
    const qrImage = document.querySelector("[data-invite-qr-image]");
    const downloadButton = document.querySelector("[data-invite-download-link]");
    const helperText = document.querySelector("[data-invite-helper]");

    expect(heading?.textContent).toBe("Download AI Translator");
    expect(qrLink?.getAttribute("href")).toBe(APP_STORE_URL);
    expect(qrImage?.getAttribute("src")).toBe("../src/assets/invite/qrcode.png");
    expect(qrImage?.getAttribute("alt")).toMatch(/qr code/i);
    expect(downloadButton?.getAttribute("href")).toBe(APP_STORE_URL);
    expect(downloadButton?.textContent).toMatch(/app store/i);
    expect(helperText?.textContent).toMatch(/scan the qr code/i);
  });
});
