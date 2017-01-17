# JavaScript Promise Book

## Chapter 1:什么是 Promise

1. Promise 是抽象异步处理对象以及对其进行各种操作的组件
2. 基于回调的异步处理如果统一参数使用规则的话，写法也会很明了，但是，这也仅是编码规约而已，即使采用不同的写法也不会出错；而Promise则是把类似的异步处理对象和处理规则进行规范化，并按照采用统一的接口来编写，而采取规定之外方法的写法都会出错
3. Promise 的功能是可以将复杂的异步处理轻松的进行模式化
4. Promise 简介
	1. 实例化
		* ```var promise = new Promise(function(resolve, reject) {});```
	2. Instant Method
		* ```promise.then(onFulfilled, onRejected);```
		* ```promise.catch(onRejected);```(.catch 是 promise.then(undefined, onRejected))的别名
	3. Static Method
		* ```Promise.all();```
		* ```Promise.resolve();```
        * ```Promise.reject();```
5. Promise 的状态(左侧为 ES6 Promise 规范中定义的术语，右侧是在 Promise/A+中描述状态的术语)
    * "has-resolution" - Fulfilled
    * "has-rejection" - Rejected
    * "unresolved" - Pending

Chapter 2. 实战 Promise

1. Promise.resolve()
    * 静态方法 Promise.resolve(value)可以认为是 new Promise() 方法的快捷方式
    ```
    Promise.resolve(value); 等价于:

    new Promise(function(resolve) {
        resolve(value);
    });
    ```
    * Promise.resolve(value)的返回值也是一个 promise 对象
    * Promise.resolve 方法将 thenable 对象(thenable 指的是一个具有 .then 方法的对象)转换为 promise
2. 