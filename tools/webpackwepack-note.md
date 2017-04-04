# Webpack 中文指南

[TOC]

[Reference](http://webpackdoc.com/index.html)

## 前言

### 模块系统
1. 前端开发和其他开发工作的主要区别:
    * 前端是基于多语言、多层次的编码和组织工作
    * 前端产品的交付是基于浏览器，这些资源是通过 **增量加载** 的方式运行到浏览器端
2. 模块系统主要解决模块的定义，依赖和导出
3. CommonJS
    核心思想是允许模块通过 `require` 方法来 **同步加载** 所要依赖的其它模块，然后通过 `exports` 或 `module.exports` 来导出需要暴露的接口
4. AMD(Asynchronous Modules Definition)
    * `define(id?, dependencies?, factory)`，它要在声明模块的时候指定所有的依赖 dependencies ,并且还要当做形参传到 factory 中，对于依赖的模块提前执行，依赖前置
    ```
    define('module', ['dep1', 'dep2'], function(d1, d2) {
        return someExportedValue;
    });

    require(['module', '../file'], function(module, file) {
        // 
    });
    ```
    * 实现
        - RequireJS
        - curl
5. CMD(Common Modules Definition)
    * 使用方式
    ```
    define(function(require, exports, module) {
        var $ = require('jquery');
        var Spinning = require('./spinning');
        exports.doSomething = ...;
        module.exports = ...;
    });
    ```
    * 实现
        - Sea.js
        - coolie
6. UMD(Universal Module Definition)：类似于兼容 CommonJS 和 AMD 的语法糖，是模块定义的跨平台解决方案
7. ES6 模块
ES6 标准增加了 JavaScript 语言层面的模块体系定义。

### 什么是 Webpack
1. Webpack 是一个 **模块打包器**。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源
2. Webpack 的特点   
    * 代码拆分(可以同步或异步的方式来组织依赖)
    * Loader(Webpack 本身只能处理原生的 JS 模块，但是 loader 转换器可以将各种类型的资源转换成 JS 模块)
    * 智能分析(几乎可以处理任何第三方库)
    * 插件系统
    * 快速运行(异步I/O和多级缓存提高运行效率)

## 准备开始
### 安装
1. `npm install webpack -g`
2. `npm install --save-dev webpack`
3. `npm install --save-dev webpack-dev-server`(Webpack 开发工具)

### 使用
1. `webpack entry.js bundle.js`
2. Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件(模块)都打包到 bundle.js。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 entry.js 中的代码，其它模块在运行 require 的时候再执行

### Loader
1. **对其它非 JS 模块进行转换**
2. 可以理解为是模块和资源的转换器，本身是一个函数，接受源文件作为参数，返回转换的结果。可以通过 `require` 来加载任何类型的模块或文件
3. 特性:
    * 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式传递给下一个 loader，**最后一个 loader 必须返回 JS**
    * 可以同步或异步执行
    * 运行在 node.js 环境中
    * 可以接受参数，以此来传递配置项给 loader
    * 可以通过文件扩展名(或正则表达式)绑定给不同类型的文件
    * 可以通过 `npm` 发布和安装
    * 除了通过 `package.json` 的 `main` 指定，通常的模块也可以导出一个 loader 来使用
    * 可以访问配置
    * 插件可以让 loader 拥有更多特性
    * loader 可以分发出附加的任意文件
4. 按照惯例，loader 一般以 `xxx-loader` 的方式命名，`xxx` 代表 loader 要做的转换功能
5. 在引用 `loader` 的时候可以使用全名 `json-loader`，或者使用短名 `json`。这个命名规则和搜索优先级顺序在 webpack 的 `resolveLoader.moduleTemplates` api 中定义。
6. Loader 可以在 `require()` 引用模块的时候添加，也可以在 webpack 全局配置中进行绑定，还可以通过命令行的方式使用
    * `require('!style-loader!css-loader!./style.css')` `bundle entry.js bundle.js`
    * `require('./style/css')` `webpack entry.js bundle.js --module-bind css=style-loader!css-loader`

### 配置文件
1. 默认情况下，会搜索当前目录的 `webpack.config.js` 文件进行配置。或者通过 `--config` 选项来指定配置文件
```
var webpack = require('webpack');

module.exports = {
    entry: './entry.js', 
    output: {
        path: __dirname, 
        filename: 'bundle.js'
    }, 
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
}
```

### 插件
1. 插件的使用一般是在 webpack 的配置信息 `plugins` 选项中指定
```
...
module: {
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
}, 
plugins: [
    new webpack.BannerPlugin('The file is created by w.')
]
...
```

### 开发环境
1. `webpack --progress --colors` 编译的输出带有进度和颜色
2. `webpack --progress --colors --watch` 启动监听模式(没有变化的模块会在编译后缓存到内存中)
3. `webpack-dev-server` 会在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack
    * npm install webpack-dev-server -g
    * webpack-dev-server --progress --colors

### 故障处理
1. `webpack --display-error-detail` 打印错误详情
2. `resolve` 用来配置应用层的模块(要被打包的模块)解析
3. `resolveLoader` 用来配置 `loader` 模块的解析
4. Node.js 模块的依赖解析是通过查看模块的每一层父目录中的 `node_modules` 文件夹来查询依赖的。当出现 Node.js 模块依赖查找失败的时候，可以尝试设置 `resolve.fallback` 和 `resolveLoader.fallback` 来解决问题
```
module.exports = {
    resolve: { fallback: path.join(__dirname, 'node_modules') }, 
    resolveLoader: { fallback: path.join(__dirname, 'node_modules') }
};
```
5. Webpack 中涉及路径配置最好使用绝对路径，建议通过 `path.resolve(__dirname, "app/folder")` 或 `path.join(__dirname, "app", "folder")` 的方式来配置，以兼容 Windows 环境

## 高级
### CommonJS 规范
1. 是以在浏览器环境之外构建 JS 生态系统为目标而产生的项目，比如在服务器和桌面环境中
2. CommonJS 是一套规范，它的创建和核准是开放的。这个规范已经有很多版本的和具体实现
3. CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式，可以使每个模块在它自身的命名空间中执行。该规范的主要内容是，模块必须通过 `module.exports` 导出对外的变量或接口，通过 `require()` 来导入其他模块的输出到当前模块作用域中。
4. CommonJS 是同步加载模块

### AMD 规范
1. AMD(异步模块定义)是为浏览器环境设计的
2. AMD 定义了一套 JS 模块依赖异步加载标准，来解决 **同步加载** 的问题
`define(id?:String, dependencies?: String[], factory: Function|Object)`
3. 如果没有指定 `dependencies`，那么它的默认值是 `["require", "exports", "module"]`
```
define(function(require, exports, module) {});
```
4. `factory` 是最后一个参数，它包裹了模块的具体实现，它是一个函数或者对象。如果是函数，那么它的返回值就是模块的输出接口或值
```
// 定义 myModule
define('myModule', ['jquery'], function($) {
    $('body').text('hello world!');
});

// 使用
define(['myModule'], function(myModule) {});
```
5. 在 webpack 中，模块名只有局部作用域，在 Require.js 中，模块名是全局作用域，可以在全局引用
6. 定义一个没有 `id` 的匿名模块，通常作为应用的启动函数
```
define(['jquery'], function($) {
    $('body').text('hello world!');
});
```