/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");  
  const nextConfig = {
  // useFileSystemPublicRoutes: false,
  // output : 'export',
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif' ],
    dangerouslyAllowSVG: true,  
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
    // placeholder: "blur",
    domains: ['admin.leaderstranslation.com' , 'palderma.com','regentsy.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'absi.tawasyme.com',
        port: '',
        // pathname: '/storage/**',
      },
    ],
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
