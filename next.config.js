/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
    images : {
      domains: ['cdn.imagin.studio']
    },
    typescript : {
      ignoreBuildErrors : true
    }
}

module.exports = nextConfig
