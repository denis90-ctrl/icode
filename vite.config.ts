import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ВАЖНО: замени <REPO_NAME> на реальное имя
export default defineConfig({
  plugins: [react()],
  base: "/icode/",
});
