import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires every `quality` value used by <Image> to be allow-listed.
    qualities: [75, 85],
  },
};

export default nextConfig;
