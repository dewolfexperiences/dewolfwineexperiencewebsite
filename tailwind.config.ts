import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-burgundy": {
          "50": "#fdf2f2",
          "100": "#fbe7e7",
          "200": "#f8d5d5",
          "300": "#f3b9b9",
          "400": "#ea9292",
          "500": "#dc6b6b",
          "600": "#c94a4a",
          "700": "#a93838",
          "800": "#8b3030",
          "900": "#722d2d",
          "950": "#4a1919"
        },
        "brand-gold": {
          "50": "#fffbeb",
          "100": "#fff4d0",
          "200": "#ffe7a0",
          "300": "#ffda6b",
          "400": "#ffca3a",
          "500": "#ffb814",
          "600": "#e59a07",
          "700": "#bf7704",
          "800": "#9a5b08",
          "900": "#7e4a0c",
          "950": "#4e2a05"
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
