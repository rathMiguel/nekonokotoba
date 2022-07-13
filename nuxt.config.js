import * as FontAwesome from './build/fontawesome'

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '猫のことば研究所',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphone5_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphone6_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphoneplus_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphonex_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/iphonexr_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: '/splashscreens/iphonexsmax_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipad_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro1_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro3_splash.png' },
      { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: '/splashscreens/ipadpro2_splash.png' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: '猫のことば研究所' }
    ],
    css: [
      {src: '~/assets/scss/common.scss'}
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'modern-css-reset'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filter.js',
    { src: '~/plugins/persistedstate.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
    '@nuxtjs/pwa',
    '@nuxt/image'
  ],

  webfontloader: {
    google: {
      families: [
        'Karla'
      ]
    }
  },
  
  pwa: {
    icon: {
      source: 'icon_pwa.png',
      fileName: 'icon_pwa.png'
    },
    manifest: {
      lang: 'ja',
      name: '猫のことば研究所',
      short_name: '猫のことば研究所',
      description: 'ラグナロクオンライン内で集めたデータやちょっと便利かもしれないツール等を公開しています。',
      display: 'standalone',
      theme_color: '#25374B',
      background_color: '#E0D9BC',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon_pwa.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  env: {
    BASETITLE: process.env.BASETITLE,
    BASEURL: process.env.BASEURL
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    'nuxt-webfontloader',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: process.env.GTMID
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  }
}