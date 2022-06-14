/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar', 'ur', 'fr', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
