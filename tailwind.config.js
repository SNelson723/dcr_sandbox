/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        themeText: "rgb(var(--color-themeText) / <alpha-value>)",
        bkgBlue: "rgb(var(--color-blue) / <alpha-value>)",
        bkgOrange: "rgb(var(--color-orange) / <alpha-value>)",
        bkgGreen: "rgb(var(--color-green) / <alpha-value>)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeOut: "fadeOut 0.3s ease-in-out",
        slideDown: "slideDown 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
