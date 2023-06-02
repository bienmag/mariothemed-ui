/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: () => ({
        test: "url('https://img.freepik.com/free-icon/okay-mark-vector_318-10246.jpg?w=2000')",
        tick: "url('./tick.svg')",
      }),
      fontFamily: {
        mario: ["SuperMario", "sans-serif"],
      },
      colors: {
        myellow: "#FBD000",
        mblue: "#049CD8",
        mred: "#E52521",
        mgreen: "#43B047",
      },
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
