const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/layouts/*.njk", "./src/*.njk"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
