const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sono Variable"],
        sans: ["Work Sans Variable"],
      },
      colors: {
        gray: colors.neutral,
        primary: "#fafcfc",
        secondary: "#fbbcd1",
      },
    },
  },
  plugins: [],
};
