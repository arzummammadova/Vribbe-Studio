import { fileURLToPath } from 'node:url';

const nextConfig = {
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/work.html', destination: '/work', permanent: true },
      { source: '/works.html', destination: '/work', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};
export default nextConfig;
