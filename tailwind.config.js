import {fontFamily} from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {400: "#666", 800: "#333"},
        neutral: {
          400: "#333333",
          500: "#666666",
        },
        lime: {500: "#66CC33"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "1.08em"}],
      sm: ["14px", {lineHeight: "1.14em"}],
      md: ["16px", {}],
      base: ["18px", {}],
      lg: ["21px", {lineHeight: "1.1em"}],
      xl: ["28px", {lineHeight: "1.11em"}],
      "2xl": ["35px", {lineHeight: "1.11em"}],
      "3xl": ["42px", {lineHeight: "1.71em"}],
      "4xl": ["69px", {lineHeight: "1.04em"}],
      "5xl": ["72px", {}],
    },
    shadows: {
      sm: "0px 4px 11px rgba(0, 0, 0, 0.25)",
      md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {
      inter: ["'Inter'", ...fontFamily.sans],
    },
    backgroundImage: {},
  },
  plugins: [],
};
