const colors = require("tailwindcss/colors")

// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.tsx"],
  darkMode: false,
  theme: {
    colors: {
      primary: "#4338ca",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
