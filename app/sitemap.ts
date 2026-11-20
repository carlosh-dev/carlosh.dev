import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site-config'

/* Página única: o idioma vem de cookie, então não há URL por locale. */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
