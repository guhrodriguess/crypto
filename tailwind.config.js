const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                primary: colors.emerald[600],
                secondary: colors.emerald[400],
                tertiary: "#1F2C28",
                background: "#101F1A",
            },
            fontFamily: {
                mono: ["Bai Jamjuree", "sans-serif"],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(8px)" },
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
