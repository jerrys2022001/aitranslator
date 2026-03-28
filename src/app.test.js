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

  it("uses edge-to-edge hero screen styling so the phone bottom does not show a thick gutter", () => {
    const stylesheet = readFileSync(resolve(process.cwd(), "src/style.css"), "utf8");

    expect(stylesheet).toContain(".hero-carousel__viewport");
    expect(stylesheet).toContain("padding: 1.5px;");
    expect(stylesheet).toContain("inset: 1.5px;");
    expect(stylesheet).toContain("object-fit: cover;");
  });
});
