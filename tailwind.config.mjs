/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "theme-bg": "#E2EFEF",
        "theme-surface": "#FFFFFF",
        "theme-primary": "#0A8B9A",
        "theme-accent": "#FF0000",
        "theme-pink": "#FADADD",
        "theme-text": "#334155"
      }
    }
  },
  plugins: []
};
