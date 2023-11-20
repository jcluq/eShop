module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        pgrid: "repeat(3, minmax(0, 33%))",
      },
    },
  },
  plugins: [],
};
