const path = require('path')

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, 'src/assets/less/variable.less')
            ]
        }
    },

    devServer: {
        proxy: {//代理
            '/api': {
                //target: 'http://www.waitui.com/mobile/Index_controller',
                target: 'http://132.232.212.128/mobile/Index_controller',
                changeOrigin: true,//是否跨域
                pathRewrite: {
                    '^/api' : ''// rewrite path
                },
                //代理pathRewrite说明：
                //用代理, 首先你得有一个标识, 告诉他你这个连接要用代理. 不然的话, 可能你的 html, css, js这些静态资源都跑去代理. 所以我们只要接口用代理, 静态文件用本地.
                //'/api': {}, 就是告诉node, 我接口只要是'/api'开头的才用代理.所以你的接口就要这么写 /api/xx/xx. 最后代理的路径就是 http://xxx.xx.com/api/xx/xx.
                //可是不对啊, 我正确的接口路径里面没有/api啊. 所以就需要 pathRewrite,用''^/api'':'', 把'/api'去掉, 这样既能有正确标识, 又能在请求接口的时候去掉api.
            }
        }
    },

    lintOnSave: undefined
}
