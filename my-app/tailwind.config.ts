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
        "abbah-main-green": "#228b22",
        "abbah-dark-green": "#114411",
        "abbah-light-green": "#34d334",
        "abbah-dark-slate": "#101928",
        "abbah-dark-grey": "#645D5D",
        "abbah-milk": "#f5f5dc",
        "abbah-red": "#e23939",
        "abbah-black": {
          100: "#000800",
          200: "#0D0D0D",
        },
        "abbah-grey": {
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
