import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Menggunakan URL standar untuk menentukan path src
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
