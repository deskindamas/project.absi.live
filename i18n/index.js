var en = require("./translations.en.json");
var ar = require("./translations.ar.json");

const i18n = {
  translations: {
    en,
    ar,
  },
  defaultLang: "en",
  useBrowserDefault: false,
};

module.exports = i18n;