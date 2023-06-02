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
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
      },
    },
  },
  plugins: [],
  xwind: {
    mode: "objectstyles",
  },
};
