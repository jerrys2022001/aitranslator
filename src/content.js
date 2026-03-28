const darkWorkspaceImage = "./src/assets/screens/dark-workspace.png";
const liveTranslateImage = "./src/assets/screens/live-translate.png";
const objectLearningImage = "./src/assets/screens/object-learning.png";
const offlineModeImage = "./src/assets/screens/offline-mode.png";
export const APP_STORE_URL = "https://apps.apple.com/app/id6757105258";

export const siteContent = {
  nav: [
    { label: "Features", href: "#features" },
    { label: "Scenarios", href: "#scenarios" },
    { label: "Demo", href: "#demo" },
  ],
  hero: {
    eyebrow: "AI-powered language support",
    title: "Translate text, voice, photos, and offline moments with one radiant AI workspace.",
    body: "AI Translator helps you speak, read, and understand more naturally with live translation, photo capture, offline packs, and built-in learning tools.",
    primaryCta: { label: "Get the app", href: APP_STORE_URL },
    secondaryCta: {
      label: "Watch the demo",
      href: "https://youtube.com/shorts/5CNDHGiT3Po?si=4o5JamEPmshbP7kq",
    },
  },
  proofPoints: [
    "AI-aware phrasing",
    "Photo and OCR capture",
    "Offline language packs",
    "Object learning tools",
  ],
  screenshots: [
    {
      title: "Live translate",
      caption: "Hold to translate with a bright, immediate workspace.",
      image: liveTranslateImage,
      alt: "AI Translator live translate screen",
    },
    {
      title: "Object learning",
      caption: "Turn everyday objects into vocabulary moments.",
      image: objectLearningImage,
      alt: "AI Translator object recognition screen",
    },
    {
      title: "Offline mode",
      caption: "Stay prepared when the signal drops.",
      image: offlineModeImage,
      alt: "AI Translator offline translation screen",
    },
    {
      title: "Dark workspace",
      caption: "Review AI-assisted meaning, examples, and tone in one place.",
      image: darkWorkspaceImage,
      alt: "AI Translator dark mode screen",
    },
  ],
  features: [
    {
      label: "Live Translate",
      title: "React in the moment, not after it.",
      body: "Translate short phrases quickly when you need a fast, readable answer while talking, moving, or listening.",
      image: liveTranslateImage,
      alt: "Live translation app screenshot",
    },
    {
      label: "Object Learning",
      title: "See the word behind the world.",
      body: "Recognize objects, review examples, and connect vocabulary to real situations instead of abstract lists.",
      image: objectLearningImage,
      alt: "Object learning app screenshot",
    },
    {
      label: "Offline Anywhere",
      title: "Keep essential translation close.",
      body: "Downloaded language packs help you stay grounded when the connection is weak, expensive, or unavailable.",
      image: offlineModeImage,
      alt: "Offline mode app screenshot",
    },
    {
      label: "Dark AI Workspace",
      title: "Go deeper when wording matters.",
      body: "Move from basic translation to context, examples, and pronunciation in a focused interface built for clarity.",
      image: darkWorkspaceImage,
      alt: "Dark AI workspace app screenshot",
    },
  ],
  scenarios: [
    {
      title: "Travel with confidence",
      body: "Read menus, signs, station boards, labels, and directions without switching between five different tools.",
    },
    {
      title: "Talk more naturally",
      body: "Use voice and AI-aware wording to understand faster and respond with phrasing that feels more human.",
    },
    {
      title: "Read what is in front of you",
      body: "Capture posters, notes, product labels, and simple documents with photo and OCR translation in seconds.",
    },
    {
      title: "Learn while you translate",
      body: "Use meanings, examples, and object recognition to turn daily moments into vocabulary practice that sticks.",
    },
  ],
  demo: {
    title: "See AI Translator in motion",
    body: "Watch the short demo to see how the product feels when live translation, offline mode, and visual recognition come together.",
    cta: {
      label: "Open YouTube demo",
      href: "https://youtube.com/shorts/5CNDHGiT3Po?si=4o5JamEPmshbP7kq",
    },
  },
  finalCta: {
    title: "Keep translation close when the moment is moving fast.",
    body: "A single AI translator for speech, photos, text, and offline support.",
    primary: { label: "Get the app", href: APP_STORE_URL },
    secondary: {
      label: "Watch the short video",
      href: "https://youtube.com/shorts/5CNDHGiT3Po?si=4o5JamEPmshbP7kq",
    },
  },
};
