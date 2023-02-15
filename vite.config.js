import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/blended3-practice/",
  server: {
    open: "/index.html",
    port: 8000,
  },
});
