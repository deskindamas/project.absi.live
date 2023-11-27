const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "ar" ,
    localeDetection: false,
    // localePath: "./public/locales",
  },
  localePath: path.resolve("./public/locales"),
};