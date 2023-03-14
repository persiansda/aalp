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

  css: [
    resolve('./assets/scss/style.scss'),
  ],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },

  components: {
    dirs: [
      {
        global: true,
        path: resolve('./components/aalp'),
        prefix: 'a',
      },
    ],
  },

  modules: [
    'nuxt-icon',
    '@nuxt/devtools',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    hid: 'color-mode-script',
    globalName: '__COLOR_MODE__',
    storageKey: 'color-mode',
  },

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
