module.exports = {
  purge: ["./index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "nlw-gradient":
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(149,114,252,1) 0%, rgba(91,197,196,1) 30%, rgba(67,231,173,1) 70%, rgba(225,213,93,1) 100%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
