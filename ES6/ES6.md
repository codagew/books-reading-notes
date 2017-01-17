
1. 编程语言 JavaScript 是 ECMAScript 的实现和扩展，由ECMA参与标准化。ECMAScript 定义了：
    1. 语言与法：语法解析规则、关键字、语句、声明、运算符等
    2. 类型：布尔型、数字、字符串、对象等
    3. 原型和继承
    4. 内建对象和函数的标准库-JSON、Math、数组方法、对象自省方法等
2. ECMAScript 涵盖了各种环境的 JS 的使用场景，无论是浏览器环境还是类似 Node.js的非浏览器环境
3. ES5 的改进
    1. Object.create()
    2. Object.defineProperty()
    3. getters 和 setters
    4. 严格模式
    5. JSON 对象
4. 

## 2 迭代器和 for-of 循环
1. 遍历数组
    1. for 循环
    2. forEach
        - 不能使用 break 语句中断循环，也不能使用 return 语句返回到外层函数
    3. for-in
        - 示例：
        ```
        for (var index in arr) {
            console.log(arr[index]);
        }
        ```

        - 赋值给 index 的值不是实际的数字，而是字符串 "0","1","2"，此时可能在无意之间进行字符串计算
        - 作用于数组的 for-in 循环体除了数组元素外，还会遍历自定义属性
        - 在某些情况下，这段代码可能按照随机顺序遍历数组元素
        - for-in循环是为普通对象设计的，可以遍历得到字符串类型的键，不适用于数组遍历
    4. for-of
        - 最简洁、最直接的遍历数组元素的语法
        - 避开了for-in循环的所有陷阱
        - 可以正确响应break,continue和return语句
        - for-in循环用来遍历对象属性。for-of循环用来遍历数据
        - for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象
        - for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历
        - 也支持Map和Set对象遍历
        - for-of循环语句通过方法调用来遍历各种集合
    5. 
2. 解构(destructuring)
```
for (var [key, value] of phoneBookMap) {
    console.log(key + '\'s phone number is: ' + value);
}
```
3. 遍历对象
    1. for-in
    2. Object.keys()
    ```
    for (var key of Object.keys(someObject)) {
        console.log(key + ': ' + someObject[key]);
    }
    ```
4. 迭代器方法
    1. 向任意对象添加 myObject[Symbol.iterator]()方法，就可以遍历这个对象
    2. 所有拥有 [Symbol.iterator]()的对象被称为可迭代的
5. for-of 循环的原理
    1. for-of循环首先调用集合的[Symbol.iterator]()方法
    2. 返回一个新的迭代器对象
    3. 迭代器对象可以是任意具有.next()方法的对象
    4. for-of循环重复调用这个方法，每次循环调用一次
    ```
    var zeroForeverIterator = {
        [Symbol.iterator]: function() {
            return this;
        }, 
        next: function() {
            return { done: false, value: 0 };
        }
    };
    ```

## 3 生成器 Generator
1. demo
```
function* quips(name) {
    yield '你好' + name + '!';
    yield '希望你能喜欢这篇介绍ES6的译文';
    if (name.startsWith('X')) {
        yield '你的名字 ' + name + ' 首字母是X，这很酷!';
    }

    yield '我们下次再见！';
}
```
2. 普通函数与生成器函数的区别：
    1. 普通函数使用 function 声明；生成器函数使用 function* 声明
    2. 普通函数只能使用 return 一次；生成器函数可以 yield 多次。在生成器执行过程中，遇到 yield 表达式立即暂停，后续可恢复执行状态
    3. 最大区别：普通函数不能自动暂停，生成器函数可以
3. 执行过程
    1. 
4. 