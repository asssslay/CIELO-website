/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rusticBrown: "rgb(130, 68, 30)",
        ashGray: "rgb(88, 88, 88)",
      },
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        darker: ["Darker Grotesque", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
