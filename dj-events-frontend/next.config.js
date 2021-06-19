module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}:path*`,
      },
    ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}
