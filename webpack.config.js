module.exports = {
    entry: {
        app: [
            'angular',
            'angular-route',
            "./app/js/init.js"
        ]
    },
    output: {
        path: __dirname + '/public/',
        publicPath: '/',
        filename: 'js/[name].js'
    },
    watch: true
};