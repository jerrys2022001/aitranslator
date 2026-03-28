import { siteContent } from "./content.js";

const renderProofPoints = () =>
  siteContent.proofPoints
    .map(
      (proofPoint) =>
        `<li class="proof-strip__item"><span></span>${proofPoint}</li>`,
    )
    .join("");

const renderFeatureCards = () =>
  siteContent.features
    .map(
      (feature) => `
        <article class="feature-card" data-feature-card>
          <div class="feature-card__copy">
            <p class="feature-card__label">${feature.label}</p>
            <h3>${feature.title}</h3>
            <p>${feature.body}</p>
          </div>
          <div class="feature-card__visual">
            <div class="feature-card__device-frame">
              <img src="${feature.image}" alt="${feature.alt}" />
            </div>
          </div>
        </article>
      `,
    )
    .join("");

const renderScenarios = () =>
  siteContent.scenarios
    .map(
      (scenario) => `
        <article class="scenario-card">
          <h3>${scenario.title}</h3>
          <p>${scenario.body}</p>
        </article>
      `,
    )
    .join("");

const renderHeroCarousel = () =>
  `
    <div class="hero-carousel">
      <div class="hero-carousel__glow"></div>
      <div class="hero-carousel__viewport">
        ${siteContent.screenshots
          .map(
            (screenshot, index) => `
              <figure
                class="hero-shot${index === 0 ? " is-active" : ""}"
                data-slide
                data-slide-index="${index}"
                data-slide-title="${screenshot.title}"
                data-slide-caption="${screenshot.caption}"
                data-active-slide="${index === 0 ? "true" : "false"}"
              >
                <img src="${screenshot.image}" alt="${screenshot.alt}" />
              </figure>
            `,
          )
          .join("")}
      </div>
      <div class="hero-carousel__footer">
        <div class="hero-carousel__meta">
          <p data-carousel-title>${siteContent.screenshots[0].title}</p>
          <span data-carousel-caption>${siteContent.screenshots[0].caption}</span>
        </div>
        <div class="hero-carousel__controls">
          <button type="button" class="hero-carousel__button" data-carousel-prev aria-label="Show previous screenshot">
            Prev
          </button>
          <button type="button" class="hero-carousel__button" data-carousel-next aria-label="Show next screenshot">
            Next
          </button>
        </div>
        <div class="hero-carousel__dots" aria-label="Screenshot selector">
          ${siteContent.screenshots
            .map(
              (screenshot, index) => `
                <button
                  type="button"
                  class="hero-carousel__dot${index === 0 ? " is-active" : ""}"
                  data-carousel-dot
                  data-target-slide="${index}"
                  aria-label="Show ${screenshot.title}"
                ></button>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

export function createLandingPage({ mountNode, autoRotateMs = 4600 }) {
  mountNode.innerHTML = `
    <div class="page-shell">
      <header class="site-header">
        <a class="brand-mark" href="#hero">AI Translator</a>
        <nav class="site-nav" aria-label="Primary">
          ${siteContent.nav
            .map((item) => `<a href="${item.href}">${item.label}</a>`)
            .join("")}
        </nav>
        <a
          class="site-header__cta"
          href="${siteContent.hero.primaryCta.href}"
          aria-label="Open AI Translator on the App Store"
        >
          Get the app
        </a>
      </header>

      <main>
        <section class="hero" id="hero" data-section="hero">
          <div class="hero__copy" data-reveal>
            <p class="hero__eyebrow">${siteContent.hero.eyebrow}</p>
            <h1>${siteContent.hero.title}</h1>
            <p class="hero__body">${siteContent.hero.body}</p>
            <div class="hero__actions">
              <a class="button button--primary" href="${siteContent.hero.primaryCta.href}">${siteContent.hero.primaryCta.label}</a>
              <a class="button button--secondary" href="${siteContent.hero.secondaryCta.href}" target="_blank" rel="noreferrer">${siteContent.hero.secondaryCta.label}</a>
            </div>
          </div>
          <div class="hero__visual" data-carousel aria-live="polite" data-reveal>
            ${renderHeroCarousel()}
          </div>
        </section>

        <section class="proof-strip" aria-label="Product proof" data-reveal>
          <ul>${renderProofPoints()}</ul>
        </section>

        <section class="features" id="features" data-section="features">
          <div class="section-heading" data-reveal>
            <p>Features</p>
            <h2>Real app screens, built for real language moments.</h2>
          </div>
          <div class="feature-grid">
            ${renderFeatureCards()}
          </div>
        </section>

        <section class="scenarios" id="scenarios" data-section="scenarios">
          <div class="section-heading" data-reveal>
            <p>Scenarios</p>
            <h2>Made for moving conversations, signs, and everyday learning.</h2>
          </div>
          <div class="scenario-grid">
            ${renderScenarios()}
          </div>
        </section>

        <section class="demo-band" id="demo" data-section="demo">
          <div class="demo-band__copy" data-reveal>
            <p>Demo</p>
            <h2>${siteContent.demo.title}</h2>
            <p>${siteContent.demo.body}</p>
          </div>
          <a
            class="demo-band__card"
            href="${siteContent.demo.cta.href}"
            target="_blank"
            rel="noreferrer"
            data-reveal
          >
            <span>Watch the YouTube Shorts demo</span>
            <strong>${siteContent.demo.cta.label}</strong>
          </a>
        </section>

        <section class="final-cta" id="final-cta" data-section="final-cta" data-reveal>
          <p>Ready</p>
          <h2>${siteContent.finalCta.title}</h2>
          <p>${siteContent.finalCta.body}</p>
          <div class="hero__actions">
            <a class="button button--primary" href="${siteContent.finalCta.primary.href}">${siteContent.finalCta.primary.label}</a>
            <a class="button button--secondary" href="${siteContent.finalCta.secondary.href}" target="_blank" rel="noreferrer">${siteContent.finalCta.secondary.label}</a>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <p>AI Translator</p>
        <span>Text, voice, photo, OCR, offline packs, and vocabulary support.</span>
      </footer>
    </div>
  `;

  const slideElements = Array.from(mountNode.querySelectorAll("[data-slide]"));
  const dotElements = Array.from(mountNode.querySelectorAll("[data-carousel-dot]"));
  const previousButton = mountNode.querySelector("[data-carousel-prev]");
  const nextButton = mountNode.querySelector("[data-carousel-next]");
  const carouselElement = mountNode.querySelector("[data-carousel]");
  const carouselTitleElement = mountNode.querySelector("[data-carousel-title]");
  const carouselCaptionElement = mountNode.querySelector("[data-carousel-caption]");
  const revealElements = Array.from(mountNode.querySelectorAll("[data-reveal]"));
  const featureCards = Array.from(mountNode.querySelectorAll("[data-feature-card]"));
  const scenarioCards = Array.from(mountNode.querySelectorAll(".scenario-card"));
  const headerElement = mountNode.querySelector(".site-header");
  const reduceMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeSlideIndex = 0;
  let intervalId = null;
  let revealObserver = null;

  const syncSlides = () => {
    slideElements.forEach((slideElement, index) => {
      const isActive = index === activeSlideIndex;
      slideElement.classList.toggle("is-active", isActive);
      slideElement.setAttribute("data-active-slide", isActive ? "true" : "false");
    });

    const activeSlide = slideElements[activeSlideIndex];
    if (activeSlide) {
      carouselTitleElement.textContent =
        activeSlide.getAttribute("data-slide-title") ?? "";
      carouselCaptionElement.textContent =
        activeSlide.getAttribute("data-slide-caption") ?? "";
    }

    dotElements.forEach((dotElement, index) => {
      dotElement.classList.toggle("is-active", index === activeSlideIndex);
      dotElement.setAttribute(
        "aria-pressed",
        index === activeSlideIndex ? "true" : "false",
      );
    });
  };

  const stopAutoRotate = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      intervalId = null;
    }
  };

  const startAutoRotate = () => {
    if (reduceMotion || autoRotateMs <= 0 || slideElements.length <= 1) {
      return;
    }

    stopAutoRotate();
    intervalId = window.setInterval(goToNextSlide, autoRotateMs);
  };

  const goToSlide = (index) => {
    const slideCount = slideElements.length;

    if (slideCount === 0) {
      return;
    }

    activeSlideIndex = (index + slideCount) % slideCount;
    syncSlides();
  };

  const goToNextSlide = () => {
    goToSlide(activeSlideIndex + 1);
  };

  const goToPreviousSlide = () => {
    goToSlide(activeSlideIndex - 1);
  };

  previousButton?.addEventListener("click", goToPreviousSlide);
  nextButton?.addEventListener("click", goToNextSlide);

  dotElements.forEach((dotElement) => {
    dotElement.addEventListener("click", () => {
      const nextIndex = Number.parseInt(
        dotElement.getAttribute("data-target-slide") ?? "0",
        10,
      );
      goToSlide(nextIndex);
    });
  });

  carouselElement?.addEventListener("mouseenter", stopAutoRotate);
  carouselElement?.addEventListener("mouseleave", startAutoRotate);

  const syncHeader = () => {
    const scrolled = window.scrollY > 18;
    headerElement?.classList.toggle("is-scrolled", scrolled);
  };

  if (reduceMotion || typeof window.IntersectionObserver !== "function") {
    [...revealElements, ...featureCards, ...scenarioCards].forEach((element) =>
      element.classList.add("is-visible"),
    );
  } else {
    revealObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    [...revealElements, ...featureCards, ...scenarioCards].forEach((element) =>
      revealObserver?.observe(element),
    );
  }

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
  startAutoRotate();

  syncSlides();

  return {
    destroy() {
      stopAutoRotate();
      revealObserver?.disconnect();
      window.removeEventListener("scroll", syncHeader);
    },
  };
}
