import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pvfplanet.com';

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: baseUrl + '/about', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: baseUrl + '/services', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: baseUrl + '/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: baseUrl + '/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: baseUrl + '/blog/inside-the-world-of-pipes-valves-and-fittings', lastModified: new Date('2024-05-08'), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: baseUrl + '/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
  ];
}
