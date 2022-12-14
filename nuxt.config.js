export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "onboard",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "onBoard e-commerce website with 3D capabilities" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/google-fonts",
    "@nuxtjs/style-resources",
    "@nuxtjs/axios",
  ],

  googleFonts: {
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    families: {
      "Open Sans": true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "nuxt-material-design-icons-iconfont",
    "@nuxtjs/i18n",
    "cookie-universal-nuxt"
  ],

  styleResources: {
    scss: ["~/assets/scss/*.scss"],
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: '',
      redirectOn: 'root',
      useCookie: true,
      cookieAge: 365,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
