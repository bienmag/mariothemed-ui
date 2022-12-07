const withTM = require("next-transpile-modules")(["tailwind-simba-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});
