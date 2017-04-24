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

## Chapter 2. 实战 Promise

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
    * Promise.resolve(value) 的作用就是将传递给它的参数填充到 promise 对象后并返回这个 promise 对象
2. Promise.reject()
    * Promise.reject(error) 是 new Promise() 方法的快捷方式
3. promise chain
    * 链式操作中，上一个 promise 中 return 的返回值，会在下一个 promise 执行时传给它
    * return 的值不仅只局限于字符串或者数值类型，也可以是对象或者 promise 对象等复杂类型
    * return 的值会由 Promise.resolve() 进行相应的包装处理(返回的是 promise 对象)
    * Promise.then() 不仅仅是注册一个回调函数那么简单，还会将回调函数的返回值进行变换，创建并返回一个 promise 对象
4. Promise.catch() 只是 promise.then(undefined, onRejected); 方法的一个别名而已
5. 每次调用 then 都会返回一个新创建的 promise 对象
6. Promise.all([])
    1. 接收一个 promise 对象的数组作为参数，当这个数组里的所有 promise 对象全部变为 resolve 或 reject 状态的时候，才会去调用 .then 方法
    2. 参数数组的所有方法会同时开始执行(同时开始，并行执行)，而且每个 promise 的结果和传递给 Promise.all 的 promise 数组的顺序是一致的(返回的是一个数组)
7. Promise.race([])
    1. 只要有一个 promise 对象进入 Fulfilled 或者 Rejected 状态的话，就会继续进行后面的处理
    2. 在第一个 promise 对象变为 Fulfilled 之后，并不会取消其他 promise 对象的执行
8. then or catch
    1. .then 方法中的 onRejected 参数所指定的回调函数，实际上针对的是其 promise 对象或者之前的 promise 对象，而不是针对 .then 方法里面指定的第一个参数，即 onFulfilled 所指定的对象，这也是 then 和 catch 表现不同的原因
    2. .then 和 .catch 都会创建并返回一个新的 promise 对象。Promise 实际上每次在方法链中增加一次处理的时候所操作的都不是完全相同的 promise 对象
    3. 使用 promise.then(onFulfilled, onRejected) 的话，在 onFulfilled 中发生异常的话，在 onRejected 中是捕获不到的
    4. 在 promise.then(onFulfilled).catch(onRejected) 的情况下，then 中产生的异常能在 catch 中捕获
    5. .then 和 .catch 在本质上没有区别

## Chapter 3.Promise 测试

## Chapter 4.Advanced

1. 