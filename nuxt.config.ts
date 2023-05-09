import { createResolver, logger } from '@nuxt/kit'

logger.success('AALP | Adventist App Landing Page')

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({

  app: {
    keepalive: true,
    head: {
      link: [],
      meta: [],
    },
  },

  alias: {
    '~aalp': resolve('./'),
  },

  components: {
    dirs: [
      {
        global: true,
        path: resolve('./components/app'),
        prefix: 'app',
      },
      {
        global: true,
        path: resolve('./components/aalp'),
        prefix: 'a',
      },
    ],
  },

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
    // '@nuxtjs/tailwindcss',
  ],

  unocss: {
    configFile: resolve('./uno.config.ts'),
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'one-dark-pro',
      },
    },
    navigation: {
      fields: ['title', 'icon', '_path'],
    },
  },

  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'mode',
    classSuffix: '',
  },

  // tailwindcss: {
  //   viewer: false,
  // },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: true,
    },
  },
})
