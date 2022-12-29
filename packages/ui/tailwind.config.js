/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        tick: "url(../tick.svg) ')",
      }),
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
