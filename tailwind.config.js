const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      md: "680px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        light: {},
        dark: {
          primary: "#6366F1",
          secondary: "",
          background: "#1f2937",
          text: "#e5e7eb",
          hover: "#2A3441",
          border: "#374151",
        },
      },
    },
  },
  plugins: [],
};
