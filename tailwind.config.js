/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        logo: ["Spicy Rice"],
        main: ["Playfair Display"],
        contact: ["Dosis"],
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

        backdrop: {
          100: "rgba(0, 0, 0, 0.75)",
        },
      },
      boxShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "4xl": "0px 8px 8px rgba(0, 0, 0, 0.3)",
        "2xl": "0px 2px 2px rgba(0, 0, 0, 0.25)",
        "1xl": " 0px 2px 8px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "cover-pic":
          "linear-gradient(to right, rgba(0, 0, 0),45%, transparent),url('/public/Hero.jpeg')",
        profile: "url('/public/profile.jpeg')",
        "jellof-rice": "url('/public/jellof-rice.png')",
        "ofada-rice": "url('/public/rice-moin-moin.jpeg')",
        "pounded-yam": "url('/public/pounded-yam.jpeg')",
        porridge: "url('/public/porridge.jpeg')",
        "ewa-agoyin": "url('/public/ewa-agoyin-nigerian-food.jpeg')",
        "amala-ewedu": "url('/public/Amala-and-Ewedu.webp')",
        "eba-efo": "url('/public/efo-riro-alternative-ingredients.jpeg')",
        facebook: "url('/public/facebook-black-removebg-preview.png')",
        whatsapp: "url('/public/WhatsApp-black.png')",
        instagram: "url('/public/Instagram-black-removebg-preview.png')",
        twitter: "url('/public/twitter-black.png')",
        "meal-item": "url('/public/African_Dishes.jpeg')",
      },

      keyframes: {
        mealsAppear: {
          from: { transform: "translateY(3rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },

      keyframes: {
        slideDown: {
          from: { transform: "translateY(3rem)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

// from {
//   opacity: 0;
//   transform: translateY(3rem);
// }

// to {
//   opacity: 1;
//   transform: translateY(0);
// }
