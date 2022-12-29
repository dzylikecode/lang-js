# function

函数的高级概念

## recursion

```js
function pow(x, n) {
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return x;
  }
  const half = pow(x, Math.floor(n / 2));
  return half * half * (n % 2 == 0 ? 1 : x);
}
```

---

For web-developers there are much better-known examples: HTML and XML documents.

In the HTML document, an **HTML-tag** may contain a list of:

- Text pieces.
- HTML-comments.
- Other **HTML-tags** (that in turn may contain text pieces/comments or other tags etc).

---

链表: linked list

```txt
list = {value, next -> list}
```

## stack

context, 函数的上下文

## scope

作用域

---

分块作用

```js
// show message
{
  const msg = "hello";
  send(msg);
}

// show another message
{
  const msg = "start";
  send(msg);
}
```

此时 code block 具有划分块的作用, 用于表示注释中**目的**的起止

## closure

- 闭包

  可以把整个程序看作是一个大的函数，全局变量就是这个函数的局部变量, 整个函数是调用堆栈的根

  闭包 => 会记住它的`调用堆栈链`(语法环境链 => 隐藏属性`[[Environment]]`)

### lexical environment

[词法作用域](https://javascript.info/closure#lexical-environment)

When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

---

示例

for 循环括号里面声明的变量, 每次循环都是一个新的变量, 只是会把上一次的值保留下来

```javascript
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () {
      // shooter 函数
      alert(i); // 应该显示它自己的编号
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 5
army[5](); // 5
```

每个子函数都会记住`i`, 而最终 i 变成了 5, 所有的输出都是 5

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

每次循环都是新的 i, 与上一个 i 不是同一个变量

---

语法环境

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

## var

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
