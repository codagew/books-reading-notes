# Understanding ECMAScript 6

[TOC]

## How Block Binding Work
1. `var` 关键字声明的变量，无论其实际声明位置在何处，都会被视为声明于所在函数的顶部(如果声明不在任意函数内，则视为在全局作用域的顶部)，这就是变量提升(hoisting)
2. 块级声明
    * 让所声明的变量在指定块的作用域外无法被访问
    * 块级作用域又被称为词法作用域
    * 创建块级作用域：
        1. 在一个函数内部
        2. 在一个代码块(一对花括号包裹)内部
3. `let` 会将变量的作用域限制在当前代码块中，不会被提升到当前代码块的顶部
4. `let` 在同一个代码块内禁止重复声明(可以在嵌套的作用域内声明)
    `SyntaxError: Identifier 'count' has already been declared`
5. `const` 声明常量(constant)，它们的值在被设置后就不能再被改变(声明时进行初始化)
    `SyntaxError: Missing initializer in const declaration`
6. 常量声明与 `let` 声明一样，都是块级声明(声明的语句外无法访问，声明不会提升，在同一作用域内定义一个已有变量时会报错)
7. 

## Strings and Regular Expressions
## Functions in ECMAScript 6
## Expanded Object Functionality
## Destructuring for Easier Data Access
## Symbols and Symbol Properties
## Sets and Maps
## Iterators and Generators
## Introducing JavaScript Class
## Improved Array Capabilities
## Promises and Asynchronous Programming
## Proxies and the Reflection API
## Encapsulating Code with Modules
## Small ECMAScript 6 Changes
## Understanding ECMAScript 7(2016)