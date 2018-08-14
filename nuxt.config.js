module.exports = {
    /*
    ** Headers of the page
    */
    cache: false,
    head: {
        title: 'cat-girl',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            { hid: 'description', name: 'description', content: 'cat-girl' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: '//at.alicdn.com/t/font_780221_m5cpvrpue.css'
            }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#D26B9E' },
    router: {
        linkActiveClass: 'router-link-active',
        linkExactActiveClass: 'router-link-exact-active'
    },
    css: [
        './assets/styles/global.less',
        './assets/styles/swiper-3.4.2.min.css'
        // './assets/styles/normalize.css'
    ],
    /*
    ** Build configuration
    */
    build: {
        vendor: ['vue-awesome-swiper'],
        /*
        ** Run ESLint on save
        */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        { src: '~/plugins/swiper.js', ssr: false }
    ],
    modules: ['@nuxtjs/axios'],
    axios: {
        timeout: 10000,
        headers: {},
        interceptors: {
            request: {
                use: [config => config, err => Promise.reject(err)]
            },
            response: {
                use: [response => response, err => Promise.reject(err)]
            }
        }
    }
}
