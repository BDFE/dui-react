module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-import')(),
        require('precss')(),
        require('autoprefixer')(),
        require('postcss-assets')({
            // loadPaths: ['**'], // ** 表示当前路径下所有文件夹和文件进行搜索。
            loadPaths: ['src/static/images/', '/src/static/images/', '.static/images/']
        }),
        require('postcss-inline-svg')(),
    ]
}