/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rusticBrown: "rgb(130, 68, 30)",
        ashGray: "rgb(88, 88, 88)",
        neutralGray: "rgb(85, 85, 85)",
      },
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        darker: ["Darker Grotesque", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "29ch": "29ch",
        "30ch": "30ch",
        "31ch": "31ch",
        "49ch": "49ch",
        "62ch": "62ch",
      },
      spacing: {
        "max-w-29ch": "29ch",
        "max-w-30ch": "30ch",
        "max-w-31ch": "31ch",
        "max-w-49ch": "49ch",
        "max-w-62ch": "62ch",
      },
      lineHeight: {
        9: "2.25rem",
        10: "2.5rem",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          "@screen xs": {
            maxWidth: "475px",
          },
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
          },
        },
      });
    },
  ],
};
