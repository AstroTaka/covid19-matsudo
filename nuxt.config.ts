import { Configuration } from '@nuxt/types'
const purgecss = require('@fullhuman/postcss-purgecss')
const environment = process.env.NODE_ENV || 'development'

const config: Configuration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s | 松戸市 新型コロナウイルス感染症対策サイト',
    meta: [
      {
        name: 'google-site-verification',
        content: 'Xd_24d_3-BXlHx_sUGTUOiGp3kwVsev9D4fKsl_CNZc'
      },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '当サイトは新型コロナウイルス感染症（COVID-19）に関する状況を調べるために個人で開設した松戸市とは関係無い非公式のサイトです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '松戸市 新型コロナウイルス感染症対策サイト'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content:
          'https://www.city.matsudo.chiba.jp/kenko_fukushi/kansenshou/index.html'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '松戸市 新型コロナウイルス感染症対策サイト'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '当サイトは新型コロナウイルス感染症（COVID-19）に関する状況を調べるために個人で開設した松戸市とは関係無い非公式のサイトです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'top_title.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@chibaken_saigai'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@chibaken_saigai'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'top_title.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/top_title.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue-chart.ts',
      ssr: true
    },
    {
      src: '@/plugins/axe',
      ssr: true
    },
    {
      src: '@/plugins/vuetify.ts',
      ssr: true
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: `.env.${environment}` }],
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'ja',
            iso: 'ja-JP'
          }
        ],
        defaultLocale: 'ja',
        vueI18n: {
          fallbackLocale: 'ja',
          formatFallbackMessages: true
        },
        vueI18nLoader: true
      }
    ],
    'nuxt-svg-loader',
    'nuxt-purgecss',
    ['vue-scrollto/nuxt', { duration: 1000, offset: -72 }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      icons: false
    }
  },
  googleAnalytics: {
    id: 'UA-163722832-1'
  },
  build: {
    postcss: {
      plugins: [
        purgecss({
          content: [
            './pages/**/*.vue',
            './layouts/**/*.vue',
            './components/**/*.vue',
            './node_modules/vuetify/dist/vuetify.js',
            './node_modules/vue-spinner/src/ScaleLoader.vue'
          ],
          whitelist: ['html', 'body', 'nuxt-progress', 'DataCard'],
          whitelistPatterns: [/(col|row)/]
        })
      ]
    },
    // https://ja.nuxtjs.org/api/configuration-build/#hardsource
    hardSource: process.env.NODE_ENV === 'development'
  },
  manifest: {
    name: '松戸市 新型コロナウイルス感染症対策サイト',
    theme_color: '#00a040',
    background_color: '#ffffff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null
  },
  generate: {
    fallback: true
  },
  // /*
  // ** hot read configuration for docker
  // */
  watchers: {
    webpack: {
      poll: true
    }
  }
}

export default config
