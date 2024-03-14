import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Marcelo Velásquez',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'itmarck',
  // Meta property used as the default description meta property
  description: 'La arquitectura de software perfecta no existe, pero la sigo buscando.',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'es',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'es',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'es-PE',
    options: {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    },
  },
  // Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
  includeViewTransitions: true,
  webmentions: {
    link: 'https://webmention.io/itmarck.com/webmention',
  },
}

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog/',
  },
]
