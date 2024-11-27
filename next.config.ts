import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */

//  https://image.cnbcfm.com/api/v1/image/108068284-1732637566122-moana_2_moana_Cropped.jpg?

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
        port: "",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
        port: "",
        pathname: "/file/publicdatany/finnhubimage/**",
      },
      {
        protocol: "https",
        hostname: "data.bloomberglp.com",
        port: "",
        pathname: "/company/sites/2/2019/01/**",
      },
    ],
  },
};

export default nextConfig;
