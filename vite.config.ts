import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // GitHub Pages uses /skinfood/; Netlify and local preview use /.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "github-pages-spa-fallback",
      closeBundle() {
        const outputDirectory = path.resolve(projectRoot, "dist")
        const indexFile = path.join(outputDirectory, "index.html")
        if (fs.existsSync(indexFile)) {
          fs.copyFileSync(indexFile, path.join(outputDirectory, "404.html"))
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "src"),
    },
  },
})
