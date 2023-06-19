/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'zh-HK'],
    defaultLocale: 'zh-HK',
    localeDetection: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
