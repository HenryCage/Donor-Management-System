/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A64F5",
        secondary: "#FF4D4D",
        "background-light": "#F5F7FA",
        "background-dark": "#101822",
        "text-light": "#333333",
        "text-dark": "#F5F7FA",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
