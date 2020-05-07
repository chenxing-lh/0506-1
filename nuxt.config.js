const path = require('path')
require('dotenv').config()
const middleware = []
if (!process.env.NO_LOGIN) {
  middleware.push('auth')
}
export default {
    srcDir: 'src/',
    mode: 'spa',
    router: {
        mode: 'hash',
        middleware,
    },
    proxy: {
        '/open-api': {
            target: 'http://serverless-platform-dev.deepexi.top',
            secure: false
        },
        '/serverless-dev': {
          target: 'http://serverless-platform-dev.deepexi.top',
          secure: false
        },
    },
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: []
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'normalize.css',
        '@/static/iconfont/iconfont.css',
        '@/assets/global.less'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
      '@/plugins/axios',
      '@/plugins/globalPlugin',

    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        ['nuxt-serverless', {}],
        ['@nuxtjs/axios', {}],
        ["@nuxtjs/dotenv", { path: "./" }],
        '@nuxtjs/proxy'

    ],
    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {


        }
    }
}