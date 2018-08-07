module.exports = {
    /*
    ** Headers of the page
    */
    cache: true,
    head: {
        title: 'cat-girl',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'cat-girl'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'},
            {rel: 'stylesheet', href: '//at.alicdn.com/t/font_780221_wq448pxqagd.css'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#df3b85'},
    router: {
        linkActiveClass: 'router-link-active',
        linkExactActiveClass: 'router-link-exact-active'
    },
    css: [
        './assets/styles/base.less'
        // './assets/styles/normalize.css'
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}

