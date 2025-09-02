import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      sdk: path.resolve(__dirname, "../sdk/src"),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
    watch: {
      ignored: [],
    },
  },
});
