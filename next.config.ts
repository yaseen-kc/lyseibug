const nextConfig = {
  trailingSlash: false,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://192.168.10.145:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yaseen-personal-work.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/services/it-support",
        destination: "/services/it-support-consultancy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
