import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // *** THIS IS THE CRITICAL CHANGE ***
  // It must exactly match your NEW repository name: ecotrackpro
  base: '/ecotrackpro/', // <--- UPDATE THIS LINE

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'build', // Ensure this is 'build' as per your last successful build.
                     // Your package.json deploy script currently points to 'dist'
                     // so you'll need to decide on 'build' or 'dist' and be consistent.
  }
}));