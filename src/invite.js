import { APP_STORE_URL } from "./content.js";

const INVITE_QR_IMAGE_PATH = "../src/assets/invite/qrcode.png";

export function createInvitePage({ mountNode }) {
  mountNode.innerHTML = `
    <div class="invite-shell">
      <a class="invite-brand" href="../">AI Translator</a>

      <main class="invite-card" aria-labelledby="invite-title">
        <p class="invite-kicker">Direct download</p>
        <h1 id="invite-title">Download AI Translator</h1>
        <p class="invite-body">
          Translate text, voice, photos, and offline moments in one focused AI workspace.
        </p>

        <a
          class="invite-qr-link"
          href="${APP_STORE_URL}"
          aria-label="Open AI Translator on the App Store"
          data-invite-qr-link
        >
          <span class="invite-qr-frame">
            <img
              src="${INVITE_QR_IMAGE_PATH}"
              alt="QR code to download AI Translator from the App Store"
              data-invite-qr-image
            />
          </span>
        </a>

        <a
          class="invite-download-link"
          href="${APP_STORE_URL}"
          aria-label="Download AI Translator on the App Store"
          data-invite-download-link
        >
          Download on the App Store
        </a>

        <p class="invite-helper" data-invite-helper>
          Scan the QR code on your phone or tap the button to open the App Store.
        </p>
      </main>
    </div>
  `;
}

const mountNode = document.querySelector("#invite-app");

if (mountNode) {
  createInvitePage({ mountNode });
}
