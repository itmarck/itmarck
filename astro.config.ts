import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import fs from 'fs'
import remarkUnwrapImages from 'remark-unwrap-images'
import { redirects } from './src/redirects'
import { remarkReadingTime } from './src/utils/remark-reading-time'

// https://astro.build/config
export default defineConfig({
  site: 'https://itmarck.github.io/',
  integrations: [
    mdx({}),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    prefetch(),
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    remarkRehype: {
      footnoteLabel: 'Notas',
      footnoteBackLabel: 'Volver',
      footnoteLabelProperties: { className: [''] },
    },
    shikiConfig: {
      theme: 'css-variables',
      wrap: true,
    },
  },
  image: {
    domains: ['webmention.io'],
  },
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  redirects,
})

function rawFonts(ext: Array<string>) {
  return {
    name: 'vite-plugin-raw-fonts',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id)
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        }
      }
    },
  }
}
