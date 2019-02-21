const pkg = require('./package');


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name, htmlAttrs: {
      lang: 'pt_BR',
      amp: undefined // "amp" has no value
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Empresa de desenvolvimento de software, integradora de sistemas ERP.' },

      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://ajaxti.com.br'},
      {property: 'og:image', content: 'http://www.ajaxti.com.br/images/seo/index.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'I have things here on my site.'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://ajaxti.com.br'},
      {name: 'twitter:title', content: 'Ajax Tecnologia & Inovação'},
      {name: 'twitter:description', content: 'Empresa de desenvolvimento de software, integradora de sistemas ERP.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@davipmdev'},
      {name: 'twitter:image:src', content: 'http://www.ajaxti.com.br/images/seo/index.jpg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Ajax Tecnologia & Inovação'},
      {itemprop: 'description', content: 'I have things here on my site.'},
      {itemprop: 'image', content: 'http://www.ajaxti.com.br/images/seo/index.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.ajaxti.com.br/favicon.png' },
      { rel: 'stylesheet', href: '//unpkg.com/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500' },
    ],
    script: [
      { src: '//unpkg.com/@babel/polyfill@latest/dist/polyfill.min.js' },
      { src: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
};
