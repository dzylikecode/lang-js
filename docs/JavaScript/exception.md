# 异常

## 错误处理

- 形式

  ```js
  try {
    //... 尝试执行的代码 ...
  } catch (err) {
    //... 处理 error ...
  } finally {
    //... 总是会执行的代码 ...
  }
  ```

  也可以省略 err, 使用`catch`

  - `finally`适用于`return`

    会先执行`finally`, 然后执行`try`里面的`return`

- 抛出错误

  `throw err`

- 错误

  - `Error`
  - `SyntaxError`
  - `ReferenceError`
  - `TypeError`

  - 属性

    - `name`
    - `message`
    - `stack`

## 自定义和扩展 error

- 内建`Error`的伪代码

  ```js
  // JavaScript 自身定义的内建的 Error 类的“伪代码”
  class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error"; // (不同的内建 error 类有不同的名字)
      this.stack = <call stack>; // 非标准的，但大多数环境都支持它
    }
  }
  ```

- 通过继承拓展`Error`

  ```js
  class MyError extends Error {
    constructor(message) {
      super(message);
      this.name = "MyError";
    }
  }
  ```

  通过`instanceof`检查类型

- 包装异常

  将一些异常合并, 希望处理`比它高一个层级`的异常

  将“低级别”的异常“包装”到了更抽象的 ReadError 中
