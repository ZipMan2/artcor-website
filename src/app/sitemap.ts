import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://artcor.pl',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://artcor.pl/o-nas',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://artcor.pl/galeria',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://artcor.pl/kontakt',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}
