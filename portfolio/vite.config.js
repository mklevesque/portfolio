import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ remplace ton-user par ton pseudo GitHub et ton-repo par le nom du repo
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", 
});