// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // این خط همه خطاهای ESLint رو در Build نادیده می‌گیره
  },
  typescript: {
    ignoreBuildErrors: false, // ولی TypeScript رو نگه دار
  },
};

export default nextConfig;
