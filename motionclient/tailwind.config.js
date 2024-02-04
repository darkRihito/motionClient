/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bkg0: "url('/assets/bkg/bkg0.jpg')",
        bkg1: "url('/assets/bkg/bkg1.jpg')",
        bkg2: "url('/assets/bkg/bkg2.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: {
          white: "#FAFAFA",
        },
        black: {
          100: "#18181b",
          200: "#262626",
          DEFAULT: "#171717",
        },
        primary: "#",
        secondary: "#",
        ternary: "#",
        ternary2: "#",
      },
    },
  },
  plugins: [],
};
