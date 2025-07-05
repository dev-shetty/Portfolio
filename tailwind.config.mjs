/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#9ca3af", // text-gray-400
            a: {
              color: "#60a5fa", // text-blue-400
              "&:hover": {
                color: "#93c5fd", // text-blue-300
              },
            },
            "h1, h2, h3, h4": {
              color: "#ffffff", // text-white
            },
            blockquote: {
              borderLeftColor: "#374151", // border-gray-700
              color: "#9ca3af", // text-gray-400
            },
            hr: {
              borderColor: "#374151", // border-gray-700
            },
            code: {
              color: "#9ca3af", // text-gray-400
              backgroundColor: "#23262f",
            },
            pre: {
              backgroundColor: "#23262f",
              code: {
                backgroundColor: "transparent",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
