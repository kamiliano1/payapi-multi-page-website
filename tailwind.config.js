/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkPink: "hsl(337, 48%, 49%)",
      charmPink: "hsl(337, 60%, 64%)",
      linkWaterWhite: "hsl(220, 60%, 99%)",
      sanJuanBlue: "hsl(207, 33%, 32%)",
      lightSanJuanBlue: "hsl(207°, 16%, 50%)",
      mirageBlue: "hsl(207, 27%, 15%)",
    },
    extend: {
      fontSize: {
        900: ["4,5rem", "4.5rem"],
        800: ["3,5rem", "3.5rem"],
        700: ["3rem", "3.5rem"],
        600: ["2rem", "2.5rem"],
        500: ["1.5rem", "2rem"],
        400: ["1.25rem", "1.5rem"],
        300: ["1.125rem", "1.5625rem"],
        200: [".9375rem", "1.75rem"],
      },
      fontFamily: {
        publicSans: "'Public Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
