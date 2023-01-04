/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        test: "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
        tick: "url('./tick.svg')",
      }),
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
