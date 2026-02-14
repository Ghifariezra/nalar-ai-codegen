import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  productionBrowserSourceMaps: false, // Disable source maps in production for better performance and security
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Kamu bisa menambahkan plugin seperti remark-gfm di sini nanti
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);