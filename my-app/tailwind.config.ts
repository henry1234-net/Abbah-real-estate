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
        "bakson-main-green": "#228b22",
        "bakson-dark-green": "#114411",
        "bakson-light-green": "#34d334",
        "bakson-dark-slate": "#101928",
        "bakson-dark-grey": "#645D5D",
        "bakson-milk": "#edf2f7",
        "bakson-red": "#e23939",
        "bakson-dark-red": "#791e1e",
        "bakson-black": {
          100: "#000800",
          200: "#0D0D0D",
        },
        "bakson-grey": {
          100: "#F0F2F5",
          500: "#667185",
          600: "#475367",
          700: "#344054",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
