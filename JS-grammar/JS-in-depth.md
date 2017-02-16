# 深入理解 JavaScript 系列

## 编写高质量 JavaScript 代码的基本要点
1. 书写可维护代码
    * 可读的
    * 一致的
    * 可预测的
    * 看上去就像同一个人写的
    * 已记录
2. 最小全局变量
    1. JS 是函数作用域的(函数内部声明的变量只在函数内部使用)
    2. 全局变量就是在任何函数外面声明或是未声明直接简单使用的
    3. 减少全局变量
        * 使用命名空间模式
        * 使用立即执行函数
        * 始终使用 var 来声明变量
3. 忘记 var 的副作用(能否通过 delete 操作符删除)
    1. 通过 var 创建的全局变量，不能被删除
    2. 无 var 创建的隐式全局变量，能被删除(**隐式全局变量是全局对象的属性**)
    3. ES5 严格模式下，未声明的变量会抛出错误
4. 访问全局变量
    1. 非 ES5 严格模式(被当做函数调用的this总是指向全局对象)   
    ```
    var global = (function() {
        return this;
    })();
    ```
    2. ES5 严格模式(从全局作用域传递一个指向this的引用)
    ```
    (function(global) {
        'use strict';
    })(this);
    ```
5. 单 var 形式
    * 提供了一个单一的地方去寻找功能所需要的所有全局变量
    * 防止变量在定义之前使用的逻辑错误
    * 帮助你记住声明的全局变量，因此减少了全局变量
    * 少代码(类型、传值单线完成)
6. 预解析(var 散布的问题)
    * 预解析(hoisting)：可以在函数任何位置声明多个 var 语句，并且他们就好像是在函数顶部声明一样发生作用
7. for 循环
    1. HTMLCollection(访问时需要实时查询基本文档，访问DOM，因此比较耗时)
        * document.getElementsByName()
        * document.getElementsByTagName()
        * document.getElementsByClassName()
        * document.images
        * document.links
        * document.forms
        * document.forms[0].elements
    2. for 循环时，尤其是访问 HTMLCollection 时，缓存数组(或集合)的长度
    3. 使用 i = i + 1; 或 i += 1; 来替换 i ++
    4. 通过 **倒序 for 循环**
        * 可以减少一个变量：不用定义 max
        * 向下数到0，通常更快，因为和0作比较会比其他不是0的更快
    5. 使用 while 循环
8. for-in 循环
    1. for-in 循环应该用在非数组对象的遍历上，使用 for-in 循环也被称为 "枚举"
    2. 关于使用 for-in 循环数组
        1. 可以使用，因为 JS 中数组也是对象
        2. 反例1：**如果数组已经被自定义属性增强(添加了属性或方法)，可能会发生逻辑错误**
        3. 反例2：**for-in 循环中，属性列表的顺序是不能保证的**
    3. 遍历对象时，通过 hasOwnProperty() 过滤掉继承的属性
9. 不扩展内置原型。扩展了内置原型会导致：
    1. 降低了可维护性
    2. 不使用 hasOwnProperty 属性时在循环中显示出来，造成混乱
10. switch 模式
```
var inspect_me = 0, 
    result = '';

switch(inspect_me) {
    case 0: 
        result = 'zero';
        break;
    case 1: 
        result = 'one';
        break;
    default: 
        result = 'unknown';
}
```
    1. 每个 case 和 switch 对齐(花括号缩进规则除外)
    2. 每个 case 中代码缩进
    3. 每个 case 以 break 清除结束
    4. **避免贯穿(的确需要贯穿时，注明)**
    5. 以 default 结束
11. 避免隐式类型转换
    * 使用严格比较符：=== 或 !==
12. 避免 eval()
    1. eval() 接受任意的字符串，并当作 JavaScript 代码来处理
    2. 当有问题的代码是事先知道的，没有理由使用 eval
    3. 如果代码是运行时动态生成的，可以使用方括号来访问动态属性
13. parseInt() 下的数值转换
    1. parseInt() 的第二个参数接受转换的基数，默认为10
    2. 使用合法数字需要转换成数字类型时，**Number() 方法更快，parseInt() 解析和转换能力更强**
    ```
    Number('09hello');  // NaN
    parseInt('09hello');    // 9
    ```
14. 编码规范
    * 代码一致性
    * 可预测性
    * 易于阅读和理解
15. 缩进 
    * 花括号里面的东西需要缩进(函数体、循环、if、switch以及对象字面量中的对象属性)
16. 花括号
    * 总是在需要的时候使用花括号(尤其是 if,for 循环时)
17. 左花括号的位置
    * 始终使用花括号，并且把它与之前的语句放在同一行
    * 如果放在之前语句的下一行，因为分号插入机制，可能会导致出错
    ```
    function fn() {
        return

        {
            name: 'Batman'
        }
    }
    可能会被解释成：==>
    function fn() {
        return undefined;

        {
            name: 'Batman'
        }
    }
    ```
    * 同时，应该总是使用分号
18. 空格
    * 空格有助于改善代码的可读性和一致性
    * 适合使用空格的地方
        * for 循环分号开始后的部分
        * for 循环初始化的多变量
        * 分隔数组项的逗号的后面
        * 对象属性逗号的后面以及分隔属性名和属性值的冒号后面
        * 限定函数参数
        * 函数声明的花括号前面
        * 匿名函数表达式 function 的后面
        * 分开所有的操作符和操作对象
        * 函数、if-else语句、循环、对象字面量的左花括号的前面
        * else 或 while 之间的右花括号
    * 垂直空格(空行)可以用来分隔代码单元
19. 命名规范
    * 以大写字母写构造函数(命名构造函数时首字母大写有暗示作用，使用小写命名的函数和方法不应该使用 new 调用)
    * 分隔单词
        - 大驼峰式命名法命名构造函数
        - 小驼峰式命名法命名函数和方法名
    * 其他命名形式
        - 常量：单词大写，使用下划线分隔
        - 私有成员：名称前加下划线
21. 注释
    1. 记录函数的 **参数**和 **返回值**，或是任何 **不寻常的技术和方法**
    2. 需要达到的效果：**阅读者仅注释和属性名来理解代码**
    3. **保持注释的实时更新**(过时的注释比没有注释更加误导人)

## 揭秘命名函数表达式
1. debug 或者 profiler 分析的时候描述函数的名称
2. 函数声明和函数表达式
    1. 函数声明必须带标识符，而函数表达式可以忽略标识符
    2. 如果声明了函数名称，ECMAScript 通过上下文来区分：如果是作为 **赋值表达式** 的一部分，就是函数表达式；如果被 **包含在一个函数体内，或者位于程序的最顶部**** ，就是一个函数声明
    3. 括号括住的是函数表达式，因为括号是一个分组操作符，内部只能包含表达式
    ```
    function foo() {}   // 函数声明
    (function foo() {});    // 函数表达式
    ```
    4. 使用 eval 对 JSON 进行执行的时候，JSON 字符串通常被包含在一个圆括号里:eval('(' + json + ')');这样做的原因是因为分组操作符会让解析器强制将 JSON 的花括号解析成表达式而不是代码块
    5. 
3. 

## 全面解析 Module 模式
1. Module 模式的基本特征
    1. 模块化、可重用
    2. 封装了变量和 function，和全局的 namespace 不接触，松耦合
    3. 只暴露了 public 的方法，其他私有方法全部隐藏
2. 匿名函数使用全局变量：全局变量当做参数传入
3. 匿名函数创建全局变量：作为匿名函数的返回值(Module 模式 - 所有代码都要写在一个文件)
```
var blogModule = (function() {
    var my = {}, 
        privateName = 'cnblog';

    function privateAddTopic(data) {
        //
    }

    my.name = privateName;
    my.addTopic = function(data) {
        privateAddTopic(data);
    };

    return my;
}());
```
4. Module 模式的扩展(通过传入全局参数本身，将功能分离成多个文件，更适合多人合作开发)
```
var blogModule = (function(my) {
    my.addPhoto = function() {
        //
    };

    return my;
}(blogModule));
```
5. 松耦合扩展(解决在执行 Module 模式前必须先声明 blogModule 的问题)
```
var blogModule = (function(my) {
    //

    return my;
} (blogModule || {}));
```
6. 紧耦合扩展
    1. 松耦合扩展没办法重写一些属性或函数，不能在初始化的时候就使用 Module 的属性
    2. 紧耦合扩展限制了加载顺序，提供了重载的机会
```
var blogModule = (function(my) {
    var oldAddPhotoMethod = my.addPhoto;

    my.AddPhoto = function() {
        // 重载的方法
    };

    return my;
} (blogModule));
```
7. 克隆与继承
    * for-in 循环，并调用 hasOwnProperty 过滤掉原型链属性
8. 跨文件共享私有对象(`seal:密封`)
    1. 加载模块时，调用 _unseal 方法开锁
    2. 模块加载完毕，调用 _seal 方法上锁
```
var blogModule = (function(my) {
    var _private = my._private = my._private || {},
        _seal = my._seal = my._seal || function() {
            delete my._private;
            delete my._seal;
            delete my._unseal;
        }, 
        _unseal = my._unseal = my._unseal || function() {
            my._private = _private;
            my._seal = _seal;
            my._unseal = _unseal;
        };

    return my;
} (blogModule || {}));
```
9. 子模块
```
blogModule.CommentSubModule = (function() {
    var my = {};

    return my;
} ());
```

## 立即调用的函数表达式
1. 在 JavaScript 里，任何 function 在执行的时候都会创建一个执行上下文，因为为 function 声明的变量和 function 有可能只能在该 function 内部，这个上下文，在调用 function 的时候，提供了一种简单的方式来创建自由变量或私有子 function
2. 声明函数时在后面加括号可以实现自执行
3. 解析器在解析全局的 function 或者 function 内部的 function 关键字时，默认是认为 function 声明，而不是 function 表达式
4. 在表达式后面加上括号 `()`，该表达式会立即执行；在一个语句后面加上括号，只是分组操作符
5. JavaScript 里括号 `()` 里面不能包含语句
6. 在解析自执行函数表达式时，会将相应的代码解析成 function 表达式，而不是 function 声明
7. 可以使用括号、&&、异或、逗号等操作符在函数表达式和函数声明上消除歧义
```
// 括号解析成函数表达式
(function () {}());
(function () {})();
// 消除歧义
var i = function() { return 10; } ();
true && function() { } ();
0, function() {} ();
// 使用一元操作符
!function() {} ();
~function() {} ();
-function() {} ();
+function() {} ();
// 使用 new 关键字
new function() {}
new function() {} ();
```
8. 闭包可以直接饮用传入的参数，利用这些被 lock 的传入参数，自执行函数表达式可以有效的保存状态
9. 自执行匿名函数(self-executing anonymous function)，立即调用的函数表达式(Immediately-invoked function expression)

## 强大的原型和原型链
## S.O.L.I.D 五大原则之单一职责 - SRP
## S.O.L.I.D 五大原则之开闭原则 - OCP
## S.O.L.I.D 五大原则之里氏替换原则 - LSP
## 根本没有“JSON对象”这回事
## JavaScript 核心
1. 对象(Object)
> 对象是一个属性的集合，并且具有单一原型对象引用。原型可以指向一个对象，也可以为 null
2. 原型链(prototype chain)
    1. 原型对象也有自己的原型。`对象有一个非空引用指向它的原型，它的原型也有一个非空引用指向它自己的原型...诸如此类，就是原型链`
    2. 原型链是由有限的对象链接而成，可以用来实现继承和共享属性
    3. 基于继承的委托(delegation based inheritance)，也叫原型继承
3. 

## 执行上下文
## 变量对象
## This, Yes this
## 作用域链
## 函数
## 闭包
## 面向对象编程之概论
## 面向对象编程之ECMAScript 实现
## 求值策略
## 你真懂 JavaScript 吗
## S.O.L.I.D 五大原则之接口隔离原则 -ISP
## S.O.L.I.D 五大原则之依赖倒置原则 - DIP
## JavaScript 与 DOM(上)
## JavaScript 与 DOM(下)
## 设计模式之单例模式
## 设计模式之构造函数模式
## 设计模式之建造者模式
## 设计模式之工厂模式
## 设计模式之装饰者模式
## 设计模式之外观模式
## 设计模式之代理模式
## 设计模式之观察者模式
## 设计模式之策略模式
## 设计模式之命令模式
## 设计模式之迭代器模式
## 设计模式之中介者模式
## 设计模式之享元模式
## 设计模式之职责链模式
## 设计模式之适配器模式
## 设计模式之组合模式
## 设计模式之模板方法
## 设计模式之原型模式
## 设计模式之状态模式
## 设计模式之桥接模式
## 代码复用模式(避免篇)
## 代码复用模式(推荐篇)
## 对象创建模式(上)
## 对象创建模式(下)
## Function 模式(上)
## Function 模式(下)
## 结局篇
