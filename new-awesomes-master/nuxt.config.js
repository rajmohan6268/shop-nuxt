module.exports = {
  /*
  ** Headers of the page
  */
  cache: {
    max: 1000,
    maxAge: 900000
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['auth', 'i18n']
  },
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'normalize.css',
    'prismjs/themes/prism.css',
    'element-ui/lib/theme-default/index.css',
    'animate.css',
    '~assets/css/main.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#da552f' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-i18n'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/vue-icon', '~plugins/icon', '~plugins/element-ui', '~plugins/common', { src: '~plugins/pagination.js', ssr: false }, { src: '~plugins/editor.js', ssr: false }, { src: '~plugins/upload', ssr: false }, { src: '~plugins/i18n.js', injectAs: 'i18n' }]
}
