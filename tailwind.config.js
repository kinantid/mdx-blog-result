module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      spacing: {},
      fontSize: {},

    },
  },
  variants: {
    extend: {
      gridTemplateColumns: ['responsive'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
