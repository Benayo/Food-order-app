/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        logo: ["Spicy Rice"],
        main: ["Playfair Display SC"],
      },

      colors: {
        primary: "#B94517",
        secondary: {
          100: "#FFC108",
        },
        tertiary: {
          100: "#4D1601",
          200: "#2C0D00",
        },
        white: {
          100: "#ffffff",
          200: "rgba(247, 247, 247, 0.75)",
        },
      },
    },
  },
  plugins: [],
};
