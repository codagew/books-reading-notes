# Async JavaScript: Build More Responsive Apps with Less Code

JavaScript 异步编程：设计快速响应的的网络应用

## 第1章 深入理解 JavaScript 事件

1. JavaScript 事件模型意味着我们的代码是不可中断的，也意味着调度的事件会整整齐齐的排好队，有条不紊的运行
2. 如果想让 JavaScript 中的某段代码将来再运行，可以把它放在回调中。运行回调时，称已触发某事件
3. 调用 setTimeout 的时候，会有一个延时事件进入队列。只有在主程序运行完以后，才会依次处理事件队列中的事件
4. 事件循环是用于描述队列工作方式的，就像代码从一个循环中不断取出而运行一样
```
runYourScript();
while(atLeastOneEventIsQueued) {
    fireNextQueuedEvent();
}
```
5. 事件的易调度性是 JavaScript 语言最大的特色之一
6. 创造 Node.js，并不是为了人们能在服务器上运行 JavaScript，仅仅是因为 Ryan Dahol 想要建立在某高级语言之上的事件驱动型服务器框架。因为 JavaScript 可以完美的实现非阻塞式 I/O
7. 在现代浏览器中操纵 DOM 对象时，从脚本角度看，更改是即时生效的，但从视效角度看，在返回事件队列之前不会渲染这些 DOM 对象更改
8. Webkit 的 console.log 并没有立即拍摄对象快照，它只存储了一个指向对象的引用，然后在代码返回事件队列时才去拍摄快照
```
var obj = {};
console.log(obj);
obj.foo = 'bar';
```
9. HTML 规范推行的延时/时隔最小值是4毫秒(setTimeout/setInterval)
10. 更小颗粒的延时：
    1. Node 中:process.nextTick
    2. 浏览器中使用垫片技术(shim)
        1. 支持 requestAnimationFrame 的浏览器中，使用
        2. 不支持 requestAnimationFrame，使用 setTimeout
11. JavaScript 中的每个异步函数都构建在其他某个或某些异步函数之上。凡是异步函数，从上到下(一直到原生代码)都是异步的.(任何函数只要使用了异步的函数，就必须以异步的方式给出其操作结果)
12. 何时称函数为异步的：这个函数会在将来再运行另一个函数，后者取自于事件队列
13. 若运行的函数是作为参数传递给前者的，则称其为回调函数，简称回调
14. 通常，那些取用回调的函数都会将其作为自己的最后一个参数(setTimeout 和 setInterval 不是)；有些异步函数也会间接取用回调，它们会返回 Promise 对象或者 PubSub 模式
15. 回调内的错误并不会出现在堆栈轨迹中，因为回调时直接从时间队列运行的
16. 如果异常从未被捕获，不同的 JavaScript 环境的处理方式不同：
    1. 现代浏览器环境中。现代浏览器会在开发人员工具台显示那些未捕获的异常，接着返回事件队列。要想修改这种行为，可以`给 window.onerror 附加一个处理器`，如果 window.onerror 处理器返回 true，则能组织浏览器的默认错误处理行为
    ```
    window.onerror = function() {
        return true;
    };
    ```
    2. Node.js 环境中。正常情况下，Node 应用会因未捕获的异常而立即退出。但只要至少还有一个 uncaughtException 事件处理器(version < 0.8.4)，Node 应用就会直接返回事件队列
    ```
    process.on('uncaughtException', function(err) {
        console.error('err');
    });
    ```
    或者使用 Domain 对象(version > 0.8.4)，Domain 对象时事件化对象，它将 throw 转化为 'error' 事件
    3. 不管在浏览器端还是服务器端，全局的异常处理器都应被视作最后一根稻草，仅在调试时才使用
17. 避免两层以上的函数嵌套

## 第2章 分布式事件

### 2.1 PubSub 模式
1. EventEmitter
```
emitter.on('evacuate', function(message) {
    console.log(message);
});

emitter.emit('evacuate');
```
    1. emitter 的事件名称不存在任何限制，但是 Node 文档规定：通常，事件名称会表示为一个驼峰式大小写混合的字符串
    2. EventEmitter 对象的虽有方法都是共有的，但一般约定只能从 EventEmitter 对象的内部触发事件
2. PubSub 模式简化了事件的命名、分发和堆积

### 2.2 事件化模型
1. 只要对象带有 PubSub 接口，就可以称之为事件化对象
2. MVC
    1. Model-View-Controller，模型-试图-控制器
    2. MVC 的核心理念是应用程序应该以数据为中心，所有模型发生的事件会影响到 DOM(视图) 和服务器(通过控制器而产生影响)
    3. MVC 三层架构最大的利好出现在 change 事件冒泡上溯数据树的时候。不用再去订阅数据树每片叶子上发生的事件，而只需订阅数据树根和枝处发生的事件即可
3. 如果每次有个对象上的事件引发了一系列事件并最终对这个对象本身触发了相同的事件，则结果就是事件循环
4. PubSub 模式尤其不适用于一次性事件，一次性事件要求对异步函数执行的一次性任务的两种结果做不同的处理

## 第3章 Promise 对象和 Deferred 对象

### 3.1 
1. 

## 第4章 Async.js 的工作流控制

## 第5章 worker 对象的多线程技术

## 第6章 异步的脚本加载



