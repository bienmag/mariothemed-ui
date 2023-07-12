/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        mario:
          "url('https://visualpharm.com/assets/350/Super%20Mario-595b40b85ba036ed117de511.svg')",
      },
      fontFamily: {
        mario: ["SuperMario", "sans-serif"],
      },
      backgroundColor: {
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
        myellowhover: "#D7B207",
        mgreenhover: "#288C1A",
        mbluehover: "#126180",
      },
      textColor: {
        myellow: "#FCCF00",
        mblue: "#009BD9",
        mred: "#E62310",
        mgreen: "#44AF35",
      },
      borderColor: {
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
