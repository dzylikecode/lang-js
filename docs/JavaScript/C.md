# C

## 历史遗迹

分号大部分时间可省

最好还是写

```javascript
alert("There will be an error") // 此时换行没作用
  [(1, 2)].forEach(alert);
```

一般代码块`{}`(如循环, 函数)不需要分号

---

现代模式

- 了解 `use strict`

## 变量

### 声明

使用`var`或`let`(推荐)来声明变量

和 C 类似, 可以同时赋值, 且多个一起

没有类型

### 命名

可以使用`$`

相比于 C 多了一个`$`

---

约定的习惯:

- 大写: 硬编码常量, 比如设定颜色
- 尽可能使用 const
- camelCase: 驼峰格式

### 常量

使用`const`来声明常量, 不需要`let`

## 数据类型

js 为动态类型编程语言

类型是为了类型转化, 进而进行对应的操作

- 7 种原始类型和 1 种引用类型

### number

- 特殊数值

  - `NaN`:计算错误

    例外, `NaN ** 0` 结果为 1

  - `Infinity`:数学上的无穷大

### bigInt

一般数字范围是 -2^53 到 2^53-1

在数字末尾加上 `n` 可以表示大数字

### string

- 单双引号: 基本相同
- 反引号: 可以嵌入变量, 支持多行字符

### boolean

true 或 false

### null

不是 null 指针或引用, 仅仅代表未知, 无, 空

### undefined

代表未定义, 未赋值

> 通常，使用 null 将一个“空”或者“未知”的值写入变量中，而 undefined 则保留作为未进行初始化的事物的默认初始值

```JavaScript
let value;

alert(value == undefined); // true
```

### object-and-symbol

- object

  上述数据为原始类型

  object 包含了数据集合

- symbol

  创建对象的唯一标识符

### typeof

- 形式

  `typeof x`

  `typeof(x)`

!>`typeof null` 为 `object`, 这是官方的错误

function 隶属于 Object 类型, 但是 typeof 会特地区分

## IO

- alert

  模态窗输出

- prompt

  模态窗输入

  `result = prompt(title, [default]);`

- confirm

  模态窗确认

## 类型转化

- `Number()`

  undefined -> NaN

  null -> 0

  string -> number(NaN)

- `String()`
- `Boolean()`

  0, null, undefined, NaN, '' -> false

  " ", "0" -> true

## operator

- 额外支持

  `**`: 求幂

- `+`运算

  - [用二元运算符 + 连接字符串](https://zh.javascript.info/operators#yong-er-yuan-yun-suan-fu-lian-jie-zi-fu-chuan)

  - `+apples + +oranges`

    在二元运算符加号起作用之前，所有的值都被转化为了数字

- 位操作

  `>>>` 无符号右移

- [测验](https://zh.javascript.info/operators#lei-xing-zhuan-huan)

### 值的比较

- `==`

  会进行类型转化

- `===`

  不会进行类型转化, 严格相等

- 注意

  需要警惕 `undefined` 和 `null`

## condition

与 C 语言相同, 也是用`{}`作为语句块

- `?`

  `result = condition ? value1 : value2;`

  与 C 语言的相同

### 逻辑运算符

- `||`

  逻辑或

  `result = a || b || c;`

  从左到右, 返回第一个真值(同时, 短路原理)

  eg:

  1. `alert( firstName || lastName || "Anonymous" );`

     若所有变量都是 false, 返回'Anonymous'

  2. 默认赋值

     ```js
     newMarkdown = originalMarkdown || {};
     ```

- `&&`

  逻辑与

  `result = a && b && c;`

  从左到右, 返回第一个假值

  - eg: `alert( 1 && 0 && 1 );`

    返回 0

- `!`

  逻辑非

  `result = !value;`

  返回布尔值

  双感叹`!!`常用于转化为 Boolean

## loop

和 C 语言相同

> `break/continue` 不能放在`?`里面

- break 跳出到这个标签的下一句

  ```javascript
  outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, "");

      // 如果是空字符串或被取消，则中断并跳出这两个循环。
      if (!input) break outer; // (*)

      // 用得到的值做些事……
    }
  }

  alert("Done!");
  ```

- continue 标签同理

## switch

与 C 语言相同

## function

- 形式

  ```javascript
  function name([param[, param[, ... param]]]) {
    statements
  }
  ```

- 重名的局部变量会屏蔽外部变量

  就近解释原则, 找不到就一层一层往上找

- `return;` 等价于 `return undefined;`
- 支持默认参数

  ```js
  function showMessage(from, text = anotherFunction()) {
    alert(from + ": " + text);
  }
  ```

  当 text 没有赋值的时候, 每次都会调用默认参数

- return 的注意点

  `return`

  `some + long + expression + or + whatever * f(a) + f(b);`

  会被解析为

  ```javascript
  return;
  some + long + expression + or + whatever * f(a) + f(b);
  ```

  也就是说, return 后面的表达式会被忽略

  正确的写法是

  ```javascript
  return (
    // 用括号括起来, 然后另起一行
    some + long + expression + or + whatever * f(a) + f(b)
  );
  ```

### function-expressions

- 函数表达式

  ```javascript
  let sayHi = function () {
    alert("Hello");
  };
  ```

  > 类似函数指针, 函数本身没有分号结尾, 但是赋值语句有分号结尾

- 函数是一个值

  函数可以像其他值一样被复制、传递、存储在变量中

  ```javascript
  let sayHi = function () {
    alert("Hello");
  };
  alert(sayHi); // 显示函数代码
  ```

- 函数表达式的函数名是可选的

  如果函数名存在，那么它只在函数内部可见

  供递归使用

  - 函数表达式可以被赋值给变量

    ```javascript
    let sayHi = function func(who) {
      if (who) {
        alert(`Hello, ${who}`);
      } else {
        func("Guest"); // 使用 func 调用自身
      }
    };

    sayHi(); // Hello, Guest

    // 也可以这样调用
    // func(); // Error: func is not defined
    ```

  - 函数表达式可以被赋值给其他函数

    回调函数

    ```javascript
    function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }

    function showOk() {
      alert("You agreed.");
    }

    function showCancel() {
      alert("You canceled the execution.");
    }

    // 使用函数表达式
    ask(
      "Do you agree?",
      function () {
        alert("You agreed.");
      },
      function () {
        alert("You canceled the execution.");
      }
    );

    // 使用函数声明, 回调函数
    ask("Do you agree?", showOk, showCancel);
    ```

- 函数表达式可以像变量一样事先声明

  解决代码块引用的问题

  ```javascript
  let age = prompt("What is your age?", 18);

  let welcome;

  if (age < 18) {
    welcome = function () {
      alert("Hello!");
    };
  } else {
    welcome = function () {
      alert("Greetings!");
    };
  }

  welcome(); // ok now
  ```

- 函数表达式可以被赋值给其他函数的返回值

  ```javascript
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  alert(counter()); // 0
  alert(counter()); // 1

  alert(counter2()); // 0
  alert(counter2()); // 1
  ```

函数表达式与函数声明的重要区别:

> 函数在被声明之前也是可见的

在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}
```

!> 函数表达式在执行流程到达时创建

### arrow-function

- 形式

  ```javascript
  let func = (arg1, arg2, ...argN) => expression;
  ```

  > 返回 expression 的结果

- 如果没有参数，括号是必须的

  ```javascript
  let sayHi = () => alert("Hello!");
  ```

- 如果只有一个参数，括号是可选的

  ```javascript
  let double = (n) => n * 2;
  ```

- 如果函数体有多条语句，需要用大括号包裹，并且需要显式地使用 return

  ```javascript
  let sum = (a, b) => {
    let result = a + b;
    return result; // 如果没有 return 语句，就会返回 undefined
  };
  ```

  > 简而言之, 花括号的函数体需要 return

- 返回对象

  ```javascript
  let sayHi = () => ({ name: "John" });
  ```
