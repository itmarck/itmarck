import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  corePlugins: {
    // disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
    aspectRatio: false,
    // disable some core plugins as they are included in the css, even when unused
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    fontVariantNumeric: false,
  },
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--theme-background) / 100%)',
        accent: 'hsl(var(--theme-accent) / 100%)',
        link: 'hsl(var(--theme-link) / 100%)',
        text: 'hsl(var(--theme-text) / 100%)',
        surface: 'hsl(var(--theme-surface) / 100%)',
        quote: 'hsl(var(--theme-quote) / 100%)',
        hint: 'hsl(var(--theme-text) / 10%)',
      },
      fontFamily: {
        // Add any custom fonts here
        sans: [...fontFamily.sans],
        serif: [...fontFamily.serif],
      },
      transitionProperty: {
        height: 'height',
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // Remove above once tailwindcss exposes theme type
      typography: (theme) => ({
        cactus: {
          css: {
            '--tw-prose-body': theme('colors.text / 1'),
            '--tw-prose-headings': theme('colors.accent / 1'),
            '--tw-prose-links': theme('colors.text / 1'),
            '--tw-prose-bold': theme('colors.text / 1'),
            '--tw-prose-bullets': theme('colors.text / 1'),
            '--tw-prose-quotes': theme('colors.quote / 1'),
            '--tw-prose-code': theme('colors.text / 1'),
            '--tw-prose-hr': '0.5px dashed #666',
            '--tw-prose-th-borders': '#666',
          },
        },
        DEFAULT: {
          css: {
            a: {
              '@apply cactus-link no-underline': '',
            },
            'a[data-footnote-backref]': {
              filter: 'grayscale()',
            },
            strong: {
              fontWeight: '700',
            },
            code: {
              padding: '2px 6px',
              borderRadius: '2px',
              backgroundColor: theme('colors.text / 10%'),
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            blockquote: {
              borderLeftWidth: '0',
            },
            hr: {
              borderTopStyle: 'dashed',
            },
            thead: {
              borderBottomWidth: 'none',
            },
            'thead th': {
              fontWeight: '700',
              borderBottom: '1px dashed #666',
            },
            'tbody tr': {
              borderBottomWidth: 'none',
            },
            tfoot: {
              borderTop: '1px dashed #666',
            },
            sup: {
              '@apply ms-0.5': '',
              a: {
                '@apply bg-none': '',
                '&:hover': {
                  '@apply text-link no-underline bg-none': '',
                },
              },
            },
          },
        },
        sm: {
          css: {
            code: {
              fontSize: theme('fontSize.sm')[0],
              fontWeight: '400',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.cactus-link': {
          '@apply bg-[size:100%_6px] bg-bottom bg-repeat-x': {},
          backgroundImage:
            'linear-gradient(transparent,transparent 5px,hsl(var(--theme-text)) 5px,hsl(var(--theme-text)))',
          '&:hover': {
            backgroundImage:
              'linear-gradient(transparent,transparent 4px,hsl(var(--theme-accent)) 4px,hsl(var(--theme-accent)))',
          },
        },
        '.title': {
          '@apply text-2xl font-semibold': {},
        },
      })
    }),
  ],
} satisfies Config
