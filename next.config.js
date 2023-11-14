/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const withTranslateRoutes = require('next-translate-routes/plugin')
// const nextConfig = withTranslateRoutes({
  const nextConfig = {
  // useFileSystemPublicRoutes: false,
  // output : 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // swcMinify : true ,
  // i18n : {
  //   locales: ["en", "ar"],
  //   defaultLocale: "en" ,
  // //   localeDetection: false,
  // // },
  i18n ,
  // localePath: "./public/locales",
};

const removeImports = require("next-remove-imports")({
  test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
  matchImports: "\\.(less|css|scss|sass|styl)$",
});

module.exports = nextConfig;
