# 函数进阶

## 递归和堆栈

- [递归和堆栈](https://zh.javascript.info/recursion)

## Rest 参数与 Spread 语法

### Rest 参数

- 限制

  rest 参数只能是最后一个参数

- 形式

  - `function f(a, b, ...theArgs) { ... }`
  - `function f(...theArgs) { ... }`

  省略号即是将剩余的参数放入数组中

- arguments

  在函数内部，可以使用 arguments 变量来访问所有参数。它是一个类似数组的对象.

  箭头函数没有 arguments 变量

### Spread 语法

- 语法

  `...` 语法可以将数组展开

  ```js
  let arr = [3, 5, 1];
  alert(Math.max(...arr)); // 5 (spread turns array into a list of arguments)
  ```

  也可以将字符串展开

  ```js
  let str = "Hello";
  alert([...str]); // H,e,l,l,o
  ```

  也可以将任何可迭代对象展开

  - 灵活形式`let arrCopy = [1, 3, ...arr1, 5, ...arr2, 7];`

- 代替复制`Object.assign`

  - `let arrCopy = [...arr];`
  - `let objCopy = {...obj};`

## 变量作用域-闭包

- 闭包

  可以把整个程序看作是一个大的函数，全局变量就是这个函数的局部变量, 整个函数是调用堆栈的根

  闭包 => 会记住它的`调用堆栈链`(语法环境链 => 隐藏属性`[[Environment]]`)

- 示例

  for 循环括号里面声明的变量, 每次循环都是一个新的变量, 只是会把上一次的值保留下来

  ```javascript
  function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
      let j = i;
      let shooter = function () {
        // shooter 函数
        alert(j); // 应该显示它自己的编号
      };
      shooters.push(shooter);
      i++;
    }

    return shooters;
  }

  let army = makeArmy();

  // 现在代码正确运行了
  army[0](); // 0
  army[5](); // 5
  ```

  每个子函数都会记住新的`j`, 每个循环都是不同的`j`

  ```javascript
  function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
      let shooter = function () {
        // shooter 函数
        alert(i); // 应该显示它自己的编号
      };
      shooters.push(shooter);
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // 0
  army[5](); // 5
  ```

  `i`也是同理

- 语法环境

  在创建语法环境时, 会预先扫描整个作用域, 找到所有的变量声明, 并将其放入环境中

  然后在定义时, 放入对应的值

  ```javascript
  let x = 1;

  function func() {
    console.log(x); // ?

    let x = 2;
  }

  func();
  ```

  进入函数时, 语法环境知道局部变量`x`的存在, 于是会屏蔽外部的`x`, 所以里面的`x`都是局部变量

  执行到`console.log(x)`时, 局部变量`x`还没有定义, 所以会报错

## 老旧的 var

- var 没有块级作用域 => 都是全局变量或函数局部变量

  ```javascript
  if (true) {
    var test = true; // (*)
  }

  alert(test); // true, the variable lives after if
  ```

  `var`声明的变量会在函数内部或者全局作用域中声明, 但是不会在块级作用域中声明

- var 允许重复声明

- var 可以在声明前使用

  声明的时候赋值

  ```javascript
  function sayHi() {
    alert(phrase);

    var phrase = "Hello";
  }

  sayHi();
  ```

  会分裂为两个步骤

  ```javascript
  function sayHi() {
    var phrase;
    alert(phrase);

    phrase = "Hello";
  }

  sayHi();
  ```

- IIFE => 弥补以前没有块级作用域的缺陷

  ```javascript
  (function () {
    var message = "Hello";

    alert(message); // Hello
  })();
  ```

## 全局对象

默认情况下，这些全局变量内建于语言或环境中

在浏览器中，它的名字是 “window”，对 Node.js 而言，它的名字是 “global”

globalThis 被作为全局对象的标准名称加入到了 JavaScript 中

- 在浏览器中, 全局对象是`window`

  ```javascript
  alert(window == this); // true

  window.test = 5; // if in browser
  alert(test); // 5
  ```

在浏览器中，除非我们使用 modules，否则使用 var 声明的全局函数和变量会成为全局对象的属性

## 函数对象

- 函数类型是对象

  增/删属性，按引用传递等

一个容易理解的方式是把函数想象成可被调用的“行为对象（action object）”

- 属性-`name`

  函数的名字

- 属性-`length`

  函数的参数个数

  rest 参数不计入内

- 可以给函数添加属性

  ```javascript
  function sayHi() {
    alert("Hi");
  }

  sayHi.test = 5;

  alert(sayHi.test); // 5
  ```

  优点 => 可以被外部访问

- 命名函数表达式

  ```javascript
  let sayHi = function func(who) {
    if (who) {
      alert(`Hello, ${who}`);
    } else {
      func("Guest"); // use func to re-call itself
    }
  };

  sayHi(); // Hello, Guest

  // func is not visible outside of the function

  alert(func); // error, func is not defined (not visible outside of the function)
  ```

  `func`只在函数内部可见, 仅仅为了内部递归使用, 外部不可调用

## new Function

- 语法

  ```javascript
  let func = new Function([arg1, arg2, ...argN], functionBody);
  ```

- 变体

  ```javascript
  new Function("a", "b", "return a + b"); // 基础语法
  new Function("a,b", "return a + b"); // 逗号分隔
  new Function("a , b", "return a + b"); // 逗号和空格分隔
  ```

- 闭包

  使用 new Function 创建的函数，它的 `[[Environment]]` 指向全局词法环境，而不是函数所在的外部词法环境

## 调度

- [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)

  ```javascript
  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

  clearTimeout(timerId);
  ```

  `setTimeout`返回一个定时器的标识符, 用于取消定时器

  可以嵌套使用, 达到 setInterval 的效果 => [案例](https://zh.javascript.info/settimeout-setinterval#mei-miao-shu-chu-yi-ci)

- [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)

  ```javascript
  let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
  clearInterval(timerId);
  ```

  `setInterval`返回一个定时器的标识符, 用于取消定时器

## 装饰器模式和转发

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

## 函数绑定

- 应用场景

  ```javascript
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(() => user.sayHi(), 1000);

  // ……user 的值在不到 1 秒的时间内发生了改变
  user = {
    sayHi() {
      alert("Another user in setTimeout!");
    },
  };

  // Another user in setTimeout!
  ```

  `user`的改变,导致任务调度时, 使用了错误的对象

- 解决

  ```javascript
  let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    },
  };

  setTimeout(user.sayHi.bind(user), 1000);
  ```

  `bind`返回一个新的函数, 该函数的`this`指向`user`

  `bind`的参数会被当作`this`的参数

- [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

  ```javascript
  let bound = func.bind(context, [arg1], [arg2], ...);
  ```

  `bind`返回一个新的函数, 该函数的`this`指向`context`, 并且会预先传入`arg1`, `arg2`等参数

  - bind 是硬绑定, 仅第一次生效

    ```javascript
    function f() {
      alert(this.name);
    }

    f = f.bind({ name: "John" }).bind({ name: "Ann" });

    f(); // John
    ```

    `bind`可以多次调用, 但是只有第一次调用会生效

    ```javascript
    function f() {
      alert(this.name);
    }

    let user = { name: "John" };
    let fbound = f.bind(user);

    fbound(); // John

    user = { name: "Ann" };

    fbound(); // John, the context is fixed at fbound creation time
    ```

    `bind`的`this`是固定的, 无法改变

- 偏函数(partial function)

  ```javascript
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert(double(3)); // = mul(2, 3) = 6
  alert(double(4)); // = mul(2, 4) = 8
  alert(double(5)); // = mul(2, 5) = 10
  ```

  `bind`的第一个参数为`null`, 表示不绑定`this`

  `bind`的第二个参数开始, 表示预先传入的参数

  `double`就是一个偏函数, 传入`2`作为`mul`的第一个参数

  - 应用

    当我们有一个非常通用的函数，并希望有一个通用型更低的该函数的变体时，偏函数会非常有用

## 深入理解箭头函数

- 箭头函数没有 this

  - 它会获取外部语法环境的 this

    ```javascript
    let group = {
      title: "Our Group",
      students: ["John", "Pete", "Alice"],

      showList() {
        this.students.forEach((student) => alert(this.title + ": " + student));
      },
    };
    ```

    `alert`的`this`是`showList`的`this`

  - 它不能被`new`

- 箭头函数没有`arguments`

  ```javascript
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      let f = () => alert(arguments[0]);
      f();
    },
  };

  group.showList(1, 2); // 1
  ```

  `arguments`是`showList`的`arguments`