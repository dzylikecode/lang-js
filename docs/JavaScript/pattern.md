# pattern

## generator-iteration

generator

创建数据流

- 函数面前添加`*`
- 通过`yield`发送数据流

  - 数据格式

    `{value: result, done: true/false}`

  - 是双向的

    通过`next(result)`, 让`let res = yield "2+2=?"`得到 `result` 值

    通过`throw(err)`, 传递错误

  - 透明嵌入(委托构造)

    `yield* generateSequence()`

- generator 具有迭代性

  - 可以使用`for...of`

    但是 return 的值会被忽略

  - 可以使用`return(value)`方法打断迭代

---

异步迭代和 generator

- 对象重写`[Symbol.asyncIterator]`方法
- `next()`返回的是 `promise` 对象

  用`async`

- 使用`for await ... of`迭代
- 无法使用`spread`语法

- 使用 generator 方法

  在函数前面添加`async`即可

  !> `result = await generator.next()`来获得值

- 实际的例子: [分页的数据](https://zh.javascript.info/async-iterators-generators#shi-ji-de-li-zi-fen-ye-de-shu-ju)

## decorator

- 装饰器模式

  ```javascript
  function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        // if there's such key in cache
        return cache.get(x); // read the result from it
      }

      let result = func(x); // otherwise call func

      cache.set(x, result); // and cache (remember) the result
      return result;
    };
  }

  slow = cachingDecorator(slow);

  alert(slow(1)); // slow(1) is cached
  alert("Again: " + slow(1)); // the same

  alert(slow(2)); // slow(2) is cached
  alert("Again: " + slow(2)); // the same as the previous line
  ```

  1. `cachingDecorator`接收一个函数作为参数, 并返回一个新的函数
  2. 新的函数在第一次调用时, 会将结果缓存起来, 之后再次调用时, 会直接返回缓存的结果

- `sayHi.call(context, arg1, arg2, ...argN)`

  ```javascript
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // 现在 "this" 被正确地传递了
      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存

  alert(worker.slow(2)); // 工作正常
  alert(worker.slow(2)); // 工作正常，没有调用原始函数（使用的缓存）
  ```

  `func.call`的 this 是返回的函数`function`的 this, 而`function`被赋值给了`worker.slow`, 所以调用`worker.slow`时, `this`指向`worker`

  类似的有`func.apply`

  `func.call(context, ...args)`等价于`func.apply(context, args)`

  - 呼叫转移

    ```javascript
    let wrapper = function () {
      return func.apply(this, arguments);
    };
    ```

- 传递多个参数

  ```javascript
  function sayHi() {
    alert(arguments);
  }

  sayHi("Hello"); // Hello
  sayHi("Hello", "John"); // Hello, John
  ```

  通过利用`arguments`对象, 可以传递任意数量的参数

- 借用方法

  ```javascript
  function hash() {
    alert([].join.call(arguments)); // 1,2
  }

  hash(1, 2);
  ```

  `call`相当于替换了对象, 然后借助数组的`join`方法

- 装饰器

  装饰器会丢失原始函数的属性

  要保留函数属性则使用`代理模式`

- [经典练习](https://zh.javascript.info/call-apply-decorators#tasks)
