/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#F2F7F7",
        "theme-primary": "#0F6F73",
        "theme-accent": "#F2483D",
        "theme-text": "#334155"
      }
    }
  },
  plugins: []
};
