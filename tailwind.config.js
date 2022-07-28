/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        logo: ["Spicy Rice"],
        main: ["Playfair Display"],
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
      boxShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "2xl": "0px 2px 2px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "cover-pic":
          "linear-gradient(to right, rgba(0, 0, 0),45%, transparent),url('/public/Hero.jpeg')",
        "jellof-rice": "url('/public/Hero.jpeg')",
      },
    },
  },
  plugins: [],
};
