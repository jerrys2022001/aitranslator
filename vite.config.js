import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        invite: resolve(__dirname, "invite/index.html"),
      },
    },
  },
  test: {
    environment: "jsdom",
  },
});
