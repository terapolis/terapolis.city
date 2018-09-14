const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  head: {
    titleTemplate: '%s | Terapolis',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Advanced solution for efficient and secure mining' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/img/icons/favicon-32.png' },
      { rel: 'apple-touch-icon', href: '/img/icons/favicon-144.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif:400,400i' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.7.94/css/materialdesignicons.min.css' }
    ]
  },
  plugins: [
    {src: '~/plugins/vuetify.js'},
    '~/plugins/fireauth.js'
  ],
  css: [
    { src: '~/assets/css/main.css', lang: 'css'},
    { src: '~/assets/css/app.styl', lang: 'styl'}
  ],
  loading: {
    color: 'rgba(0,0,0,0.5)',
    height: '5px'
  },
  // mode: 'spa',
  router: {
    middleware: 'router-auth'
  },
  build: {
    // babel: {
    //   plugins: [
    //     ["transform-imports", {
    //       "vuetify": {
    //         "transform": "vuetify/es5/components/${member}",
    //         "preventFullImport": true
    //       }
    //     }]
    //   ]
    // },
    vendor: [
      // '~/plugins/vuetify.js',
      'vuetify',
      'firebase'
    ],
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      // if (ctx.isServer) {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/^vuetify/]
      //     })
      //   ]
      }
    },
    analyze: {
      analyzerMode: 'static'
    }
  },
  generate: {
    routes: [
    ]
  }
}
