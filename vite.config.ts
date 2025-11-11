import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),         
    tailwindcss(),   
    tsconfigPaths(), 
  ],
  base: mode === 'production' ? '/BilingualSite/' : '/',
}));
