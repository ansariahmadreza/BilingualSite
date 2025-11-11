// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),         // پلاگین React برای Vite
    tailwindcss(),   // Tailwind CSS
    tsconfigPaths(), // استفاده از مسیرهای tsconfig
  ],
  


});
