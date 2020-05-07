const path = require('path')
require('dotenv').config()
const middleware = []
// if (!process.env.NO_LOGIN) {
//   middleware.push('auth')
// }

const router = {
    mode: 'hash',
    middleware
}

if(process.env.NODE_ENV === 'production'){
    router.base = './'
}

export default {
    srcDir: 'src/',
    mode: 'spa',
    router,
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
            { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
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
        ['nuxt-serverless', { iam: false }],
        ['@nuxtjs/axios', {}],
        ["@nuxtjs/dotenv", { path: "./" }],
        '@nuxtjs/proxy'

    ],
    /*
     ** Build configuration
     */
    build: {
        publicPath: process.env.PUBLIC_PATH || '/_nuxt/',
        transpile: [/^element-ui/],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {


        }
    }
}