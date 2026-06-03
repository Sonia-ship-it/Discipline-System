import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "recharts",
      "date-fns",
      "@radix-ui/react-icons",
    ],
  },
  async rewrites() {
    const backendUrl =
      process.env.BACKEND_URL ||
      (process.env.NODE_ENV === 'production'
        ? 'https://discipline-management-system-rgr8.onrender.com'
        : 'http://localhost:2009');
    return [
      {
        source: '/api-proxy/:path*',
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
