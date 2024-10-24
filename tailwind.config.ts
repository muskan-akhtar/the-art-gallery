import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable dark mode using class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        pacifico: ['"Pacifico"', 'cursive'],
        greatVibes: ['"Great Vibes"', 'cursive'],
        satisfy: ['"Satisfy"', 'cursive'],
        alexBrush: ['"Alex Brush"', 'cursive'],
        sacramento: ['"Sacramento"', 'cursive'],
        allura: ['"Allura"', 'cursive'],
        parisienne: ['"Parisienne"', 'cursive'],
        cookie: ['"Cookie"', 'cursive'],
        bilbo: ['"Bilbo"', 'cursive'],
        tangerine: ['"Tangerine"', 'cursive'],
        lobster: ['"Lobster"', 'cursive'],
        handwriting: ['"Shadows Into Light"', 'cursive'],
        indieFlower: ['"Indie Flower"', 'cursive'],
        kaushan: ['"Kaushan Script"', 'cursive'],
        reenie: ['"Reenie Beanie"', 'cursive'],
      },
      colors:{
        Muskan:"#bfdbfe",
        Akhtar:"#2dd4bf",
      }

        },
      },
  plugins: [],
};

export default config;
