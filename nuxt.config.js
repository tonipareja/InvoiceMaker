export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'InvoiceMaker | Como crear facturas rápidamente',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Tailwind CSS
    '@nuxtjs/tailwindcss',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
          apiKey: 'AIzaSyDXzUoswUVCOuRIgJNgJKbcS5VZZztv5lo',
          authDomain: 'invoicemaker-b5d75.firebaseapp.com',
          databaseURL: 'https://invoicemaker-b5d75-default-rtdb.firebaseio.com/',
          projectId: 'invoicemaker-b5d75',
          storageBucket: 'invoicemaker-b5d75.appspot.com',
          messagingSenderId: '267070805983',
          appId: '1:267070805983:web:bb5637909477c970af566a',
          measurementId: 'G-YY0M02PGLB'
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          storage: true,
          analytics: true,
          performance: true,
        }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
