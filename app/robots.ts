import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/site-config'

/* Tudo liberado, inclusive para crawlers de IA: ser citado é o objetivo. */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: siteConfig.url,
    }
}
