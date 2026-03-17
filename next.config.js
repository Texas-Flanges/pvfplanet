/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect fake V3.2 blog posts to real article
      {
        source: '/blog/understanding-industrial-marketplace-design-and-specifications',
        destination: '/blog/inside-the-world-of-pipes-valves-and-fittings',
        permanent: true,
      },
      {
        source: '/blog/industrial-applications-for-industrial-marketplace',
        destination: '/blog/inside-the-world-of-pipes-valves-and-fittings',
        permanent: true,
      },
      {
        source: '/blog/standards-and-quality-assurance-in-industrial-marketplace',
        destination: '/blog/inside-the-world-of-pipes-valves-and-fittings',
        permanent: true,
      },
      // Old Hostinger blog path
      {
        source: '/blog-list',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
