import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  base: "/to-do-list-app/",
  plugins: [
    react(),
    viteCompression({
      threshold: 50000,
      algorithm: "gzip",
    }),
  ],
});
