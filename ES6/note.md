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
3. http://es6.ruanyifeng.com/#docs/let
