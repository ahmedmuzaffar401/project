/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "car-rental-website-five.vercel.app",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com", // ✅ Add this
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // ✅ If using Sanity images
      },
    ],
  },
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     swr: require.resolve("swr"),
  //     "swr/infinite": require.resolve("swr/infinite"),
  //   };

    // return config;
  // },
};

module.exports = nextConfig;
 