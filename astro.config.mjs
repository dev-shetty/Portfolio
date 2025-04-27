// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import icon from "astro-icon"

import react from "@astrojs/react"

import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    icon({
      include: {
        fa: ["*"],
        tabler: ["*"],
        simpleIcons: ["*"],
      },
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
