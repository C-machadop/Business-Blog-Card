/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        customGray: "#F2F5F9",
        customWhite: "#FFFFFF",
        customDark: "#111729",
        customBlueGray: "#4A5567",
      },
    },
  },
  plugins: [],
};
