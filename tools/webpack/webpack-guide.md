# Webpack Guide

1. 运行 webpack 的方式
    * `webpack app/index.js dist/bundle.js`
    * 配置 `webpack.config.js` (`webpack`)
    ```
    var path = require('path');

    module.exports = {
        entry: './app/index.js', 
        output: {
            path: path.resolve(__dirname, 'dist'), 
            filename: 'bundle.js'
        }
    };
    ```
    * 配置 `package.json` 的 `scripts` 属性(`npm run build`)
    ```
    "scripts": {
        "build": "webpack"
    }
    ```
2. 