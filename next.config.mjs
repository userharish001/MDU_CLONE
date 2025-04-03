import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('src/components'),
      '@components/ui': path.resolve('src/components/ui'),
      '@lib': path.resolve('src/lib'),
      '@hooks': path.resolve('src/hooks'),
    };
    return config;
  },
};

export default nextConfig;
