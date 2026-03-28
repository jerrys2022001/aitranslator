import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createLandingPage } from "./app.js";

describe("createLandingPage", () => {
  it("renders the core landing sections", () => {
    document.body.innerHTML = '<div id="app"></div>';
    const mountNode = document.querySelector("#app");

    createLandingPage({ mountNode });

    expect(
      document.querySelector('[data-section="hero"] h1')?.textContent,
    ).toMatch(/translate/i);
    expect(document.querySelectorAll("[data-feature-card]").length).toBe(4);
    expect(document.querySelector('a[href*="youtube.com/shorts/5CNDHGiT3Po"]')).not.toBeNull();
    expect(document.querySelector('[data-section="final-cta"]')).not.toBeNull();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("cycles hero screenshots through controls and autoplay", () => {
    vi.useFakeTimers();
    document.body.innerHTML = '<div id="app"></div>';
    const mountNode = document.querySelector("#app");

    const page = createLandingPage({ mountNode, autoRotateMs: 1200 });
    const activeLabel = () =>
      document.querySelector("[data-active-slide='true']")?.getAttribute("data-slide-title");

    expect(activeLabel()).toBe("Live translate");

    document.querySelector("[data-carousel-next]")?.click();
    expect(activeLabel()).toBe("Object learning");

    document.querySelector("[data-carousel-prev]")?.click();
    expect(activeLabel()).toBe("Live translate");

    vi.advanceTimersByTime(1200);
    expect(activeLabel()).toBe("Object learning");

    page?.destroy?.();
  });

  it("exposes accessible navigation and outbound CTA links", () => {
    document.body.innerHTML = '<div id="app"></div>';
    const mountNode = document.querySelector("#app");

    createLandingPage({ mountNode });

    const headerCta = document.querySelector(".site-header__cta");
    const carouselRegion = document.querySelector("[data-carousel]");
    const demoLinks = Array.from(
      document.querySelectorAll('a[href*="youtube.com/shorts/5CNDHGiT3Po"]'),
    );

    expect(headerCta?.getAttribute("aria-label")).toBe(
      "Jump to the final call to action section",
    );
    expect(carouselRegion?.getAttribute("aria-live")).toBe("polite");
    expect(document.querySelector('.site-nav a[href="#features"]')).not.toBeNull();
    expect(document.querySelector('.site-nav a[href="#scenarios"]')).not.toBeNull();
    expect(document.querySelector('.site-nav a[href="#demo"]')).not.toBeNull();
    expect(demoLinks.every((link) => link.getAttribute("target") === "_blank")).toBe(true);
  });

  it("uses a slightly smaller hero viewport with the screenshots' real aspect ratio so the full image stays visible", () => {
    const stylesheet = readFileSync(resolve(process.cwd(), "src/style.css"), "utf8");

    expect(stylesheet).toContain(".hero-carousel__viewport");
    expect(stylesheet).toContain("width: min(100%, 400px);");
    expect(stylesheet).toContain("aspect-ratio: 23 / 50;");
    expect(stylesheet).toContain("padding: 1px;");
    expect(stylesheet).toContain("inset: 1px;");
    expect(stylesheet).toContain("margin: 0;");
    expect(stylesheet).toContain("overflow: hidden;");
    expect(stylesheet).toContain("border-radius: inherit;");
    expect(stylesheet).toContain("object-fit: contain;");
    expect(stylesheet).toContain("object-position: center top;");
  });

  it("is compatible with direct static hosting without relying on Vite-only css and image imports", () => {
    const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
    const mainModule = readFileSync(resolve(process.cwd(), "src/main.js"), "utf8");
    const contentModule = readFileSync(resolve(process.cwd(), "src/content.js"), "utf8");
    const packageJson = readFileSync(resolve(process.cwd(), "package.json"), "utf8");

    expect(html).toContain('<link rel="stylesheet" href="./src/style.css"');
    expect(html).toContain('<script type="module" src="./src/main.js"></script>');
    expect(mainModule).not.toContain('import "./style.css";');
    expect(contentModule).toContain('./src/assets/screens/live-translate.png');
    expect(contentModule).not.toContain('import liveTranslateImage from');
    expect(packageJson).toContain('"build": "vite build && node scripts/postbuild.mjs"');
  });

  it("uses a wider feature device column with the screenshots' real aspect ratio so the image can be seen fully", () => {
    const stylesheet = readFileSync(resolve(process.cwd(), "src/style.css"), "utf8");

    expect(stylesheet).toContain(
      "grid-template-columns: minmax(0, 1fr) minmax(300px, 380px);",
    );
    expect(stylesheet).toContain("width: min(100%, 360px);");
    expect(stylesheet).toContain("aspect-ratio: 23 / 50;");
    expect(stylesheet).toContain(".feature-card__device-frame img");
    expect(stylesheet).toContain("object-fit: contain;");
  });

  it("centers the feature, scenario, and final call-to-action headings", () => {
    const stylesheet = readFileSync(resolve(process.cwd(), "src/style.css"), "utf8");

    expect(stylesheet).toContain(".section-heading {");
    expect(stylesheet).toContain("text-align: center;");
    expect(stylesheet).toContain("align-items: center;");
    expect(stylesheet).toContain("margin-inline: auto;");
    expect(stylesheet).toContain(".final-cta .hero__actions");
    expect(stylesheet).toContain("justify-content: center;");
  });
});
