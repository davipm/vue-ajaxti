const pkg = require('./package');
import axios from 'axios'
axios.defaults.baseURL = 'https://ajaxwebapp.azurewebsites.net/wp-json';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'AjaxTI',
    htmlAttrs: {
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
      {property: 'og:url', content: 'https://ajaxti.netlify.com'},
      {property: 'og:image', content: 'https://www.ajaxti.com.br/images/seo/index.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Empresa de desenvolvimento de software, integradora de sistemas ERP.'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://ajaxti.netlify.com'},
      {name: 'twitter:title', content: 'Ajax Tecnologia & Inovação'},
      {name: 'twitter:description', content: 'Empresa de desenvolvimento de software, integradora de sistemas ERP.'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@davipmdev'},
      {name: 'twitter:image:src', content: 'https://www.ajaxti.com.br/images/seo/index.jpg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Ajax Tecnologia & Inovação'},
      {itemprop: 'description', content: 'Empresa de desenvolvimento de software, integradora de sistemas ERP.'},
      {itemprop: 'image', content: 'https://www.ajaxti.com.br/images/seo/index.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//unpkg.com/bootstrap/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.8/SmoothScroll.min.js' },
      { src: '//unpkg.com/@babel/polyfill@latest/dist/polyfill.min.js' },
      { src: '//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0000' },

  /*
  ** Forcing the scroll position to the top for every route
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/_loading.scss',
    '@/assets/css/_main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    '~/plugins/axios.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', {
      baseURL: 'https://ajaxwebapp.azurewebsites.net/wp-json',
    }],
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

  // generate blog routes
  generate: {
    routes: function () {
      return axios
        .get('/wp/v2/posts')
        .then((res) => {
          return res.data.map((blog) => {
            return `/blog/${blog.slug}`;
          })
        })
    }
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
