module.exports = {
  content: [
    "./src/**/*.{html,js,md,tsx}",
    "./docs/**/*.{html,js,md,tsx}",
    "./static/**/*.{html,js,md,tsx}",
  ],
  xwind: {
    mode: "objectstyles",
  },
  theme: {
    extend: {
      color: {
        primary: "#0D4066",
      },
    },
  },
};
