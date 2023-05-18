/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#059669",
        secondary: "#34D399",
        tertiary: "#1F2C28",
        background: "#101F1A",
      },
      fontFamily: {
        alt: ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0.4", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease",
      },
    },
  },
  plugins: [],
};
