# ECMAScript 6 入门

## ECMAScript 6简介

1. ES6 是什么？
> ES6 于 2015年6月正式发布。目标是使 JavaScript 语言可以用来编写复杂的大型应用程序，称为企业级开发语言；

2. ECMAScript 与 JavaScript 的关系
> ECMAScript 是 JavaScript 的规格，JavaScript 是 ECMAScript 的一种实现
3. 语法提案的批准流程   
    * Stage 0 - Strawman(展示阶段)
    * Stage 1 - Proposal(征求意见阶段)
    * Stage 2 - Draft(草案阶段)
    * Stage 3 - Candidate(候选人阶段)
    * Stage 4 - Finished(正案阶段)
4. ECMAScript 的历史   
    * ECMAScript 1.0 - 1997
    * ECMAScript 2.0 - 1998.6
    * ECMAScript 3.0 - 1999.12
    * ECMAScript 3.1/ECMAScript 5 - 2008.7
    * ECMAScript 5.0 - 2009.12
    * ECMAScript 5.1 - 2011.6   
    * ECMAScript 6 - 2015.6   

## let 和 const 命令

1. let 申明的变量
    * 只在 let 命令锁在的代码块内有效
    ```
    var a = [];
    for (let i = 0; i < 10; i++) {
        a[i] = function() {
            console.log(i);
        };
    }
    a[6]();
    ```
    * 不存在变量提升
    * 暂时性死区(temporal dead zone):如果在区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
        - 暂时性死区意味着 typeof 不再是一个百分之百安全的操作(可能会 ReferenceError)
        - ES6 规定暂时性死区和 let、const 语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为
        - 暂时性死区的本质就是，`只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量`
    ```
    if (true) {
        tmp = 'abc';
        console.log(tmp);

        let tmp;
        console.log(tmp);

        tmp =  123;
        console.log(tmp);

        typeof x;
        let x;

        function bar(x = y, y = 2) {
            return [x, y];
        }

        bar();
    }
    ```
    * 不允许重复声明
2. 块级作用域
    * 之前可以使用 IIFE 获得块级作用域效果
    ```
    (function() {
        var tmp = '';
        }());
    ```
    * ES5 规定，函数只能在顶层作用域和函数作用域中声明，不能在块级作用域声明
    * 浏览器的实现支持在块级作用域之中声明函数，严格模式不允许
    * ES6 规定，块级作用域中，函数声明语句类似于 let，在块级作用域外不可引用
3. const
    * const 声明常量。一旦声明，不能改变
    * 类似于 let 定义的变量:只在声明所在的块级作用域有效，不提升，不可重复声明
    * 对于复合类型的变量，const 命令只是保证变量名指向的地址不变，并不保证该地址的数据不变(`可以改变属性的值，不能整体赋值`)
    * 冻结对象:Object.freeze()
    ```
    const foo = Object.freeze({});

    foo.prop = 123;

    // 彻底冻结对象(对象本身和对象属性)
    var constantize = obj => {
        Object.freeze(obj);
        Object.keys(obj).forEach( (key, value) => {
            if (typeof obj[key] === 'object') {
                constantize( obj[key] );
            }
        });
    };
    ```
    * ES5 中只有两种声明变量的方法:var, function
    * ES6 中有6种声明变量的方法:var, function, let, const, import, class
4. 顶层对象的属性
    * 顶层对象在浏览器指 window 对象，在 Node 指 global。ES5 中，顶层对象的属性与全局变量等价
        - 没法在编译时就报出变量未声明的错误，只有运行时才知道(因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的)
        - 会不知不觉中创建全局变量
        - 顶层对象的属性随时可以读写，非常不利于模块化编程
    * ES6 中，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性；let、const、class 声明的全局变量，不属于顶层对象的属性
5. 顶层对象
    * 浏览器中，顶层对象是 window，Node 和 Web Worker 没有 window
    * 浏览器和 Web Worker 中， self 也指向顶层对象，Node 中没有 self
    * Node 中，顶层对象是 global，其他环境不支持
6. this
    * 全局环境中，this 会返回顶层对象。但是，Node 模块和 ES6模块中， this 返回的是当前模块
    * 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，会指向顶层对象。严格模式下，this会返回undefined
    * new Function('return this')();会返回全局对象。如果浏览器用了CSP(Content Security Policy, 内容安全策略)，那么eval, new Function 这些方法都可能无法使用

## 变量的解构赋值
1. 数组的解构赋值
    * ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，被称为解构(Destructuring)
    * 如果解构不成功，变量的值就等于 undefined
    * 如果等号右边不是可遍历的结构(不具有 Iterator 接口)，就会报错
    * 解构赋值允许指定默认值
    * ES6 内部使用严格相等运算符来判断一个位置是否有值。所以，如果一个数组成员不严格等于 undefined，默认值不会生效
    * 如果默认值是表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值
    ```
    var [a, b, c] = [1, 2, 4];
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    var [foo = true] = [];

    var [x = 1] = [null];
    ```
2. 对象的解构赋值
    *  
3. 
