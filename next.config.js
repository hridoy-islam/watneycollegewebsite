/** @type {import('next').NextConfig} */
const nextConfig = {
  // `@react-pdf/renderer` v4 ships ESM only; webpack needs it transpiled
  // rather than treated as an external ESM package.
  transpilePackages: ['@react-pdf/renderer'],
  typescript: {
    ignoreBuildErrors: true, // ✅ Skips type checking
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/watney/**',
      },
     
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/600x400',
      },
    ],
  },
  env: {
    NEXTAUTH_SECRET:
      "a700e108609605671fb5e33419636e8417c7dadcbf4b4116dfc002860a291e19",
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports =  nextConfig ;
