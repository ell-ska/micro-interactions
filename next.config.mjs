/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/squishy-cards',
      },
    ]
  },
}

export default nextConfig
