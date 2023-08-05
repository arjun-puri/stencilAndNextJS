/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => { // this might be optional, check and remove later if not needed
    if (!isServer) {
      config.resolve.alias["@stencil/core"] = "@stencil/core/dist/client";
    }
    return config;
  },
}

module.exports = nextConfig
