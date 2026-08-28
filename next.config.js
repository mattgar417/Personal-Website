/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The home page used to live at /home; keep old links working.
    return [{ source: '/home', destination: '/', permanent: true }];
  },
};

module.exports = nextConfig;
