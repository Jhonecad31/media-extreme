import type { NextConfig } from "next";

const getEndpointHost = (): string | null => {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "";
  try {
    if (endpoint.startsWith("http://") || endpoint.startsWith("https://")) {
      return new URL(endpoint).hostname;
    }
  } catch (e) {
    // Ignore invalid URLs
  }
  return null;
};

const imageKitHost = getEndpointHost();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      ...(imageKitHost ? [{
        protocol: "https" as const,
        hostname: imageKitHost,
        pathname: "/**",
      }] : []),
    ],
  },
};

export default nextConfig;
