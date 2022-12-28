# syntactic sugar

语法糖

## Optional chaining

- 解决属性不存在的问题

- 形式

  - `obj?.prop` —— 如果 `obj` 存在则返回 `obj.prop`，否则返回 `undefined`
  - `obj?.[prop]` —— 如果 `obj` 存在则返回 `obj[prop]`，否则返回 `undefined`
  - `obj.method?.()` —— 如果 `obj.method` 存在则调用 `obj.method()`，否则返回 `undefined`

- 短路效应

  如果可选链某个环节已经是 undefined/null, 则后面的不会再执行

- 忠告

  谨慎地使用

  保证在代码中有编程上的错误出现时，也不会对我们隐藏

## Nullish coalescing operator

- `??`

  空值合并运算符(优先级和 `||` 相同)

  !> `||`针对的是 Boolean 值, `??`针对的是 null/undefined

  `result = a ?? b;`

  若 a 为 null 或 undefined, 返回 b

  否则返回 a

  - eg: `alert( firstName ?? lastName ?? "Anonymous" );`

  > 一般不要和 `||`以及`&&` 混用

## 解构赋值

### 数组解构

- `let [a, b, c] = "abc"` 可以将字符串解构为数组

```javascript
// 不需要第二个元素
let [firstName, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

alert(title); // Consul
```

> 剩余的元素也跳过了

- 交换变量 => `[a, b] = [b, a]`
- 默认值

  - `let [firstName = "Guest", lastName = "Anonymous"] = [];`
  - `let [firstName = prompt("name?"), lastName = prompt("last name?")] = [];`

- 储存剩余的元素

  - `let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];`
  - `rest` 是一个数组, 可以使用任意别名, 不一定是`rest`

### 对象解构

- `let {prop : varName = default, ...rest} = object`

  - `prop` 是对象的属性
  - `varName` 是变量名
  - `default` 是默认值
  - `rest` 是剩余的属性

- `let {width, height, title} = {title: "Menu", height: 200, width: 100};`

  - `width` 和 `height` 会被赋值为 100 和 200
  - `title` 会被赋值为 "Menu"

  > 顺序无关, 但是属性名必须一致, 否则需要用`{prop: varName}`的形式指定

- 不用 let

  ```javascript
  let title, width, height;

  // 现在就可以了
  ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

  alert(title); // Menu
  ```

  > 需要括号包裹, 避免花括号被解析为代码块

- 嵌套

  ```javascript
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ["Cake", "Donut"],
    extra: true, // something extra that we will not destruct
  };

  // destructuring assignment split in multiple lines for clarity

  // 先解构 size

  let {
    size: {
      // put size here
      width,
      height,
    },
    items: [item1, item2], // assign items here
    title = "Menu", // not present in the object (default value is used)
  } = options;
  ```

  > `:`相当于递归的解析形式(也可以理解为别名)

### 智能函数参数

- 参数过多

  ```javascript
  function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
  }

  showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);
  ```

  > 传入 undefined 以跳过参数

- 利用对象解构

  ```javascript
  function showMenu({
    title = "Untitled",
    width = 200,
    height = 100,
    items = [],
  }) {
    // title, items – taken from the object
    // width, height – defaults used
    alert(`${title} ${width} ${height}`); // My Menu 200 100
    alert(items); // Item1, Item2
  }

  showMenu({
    title: "My Menu",
    items: ["Item1", "Item2"],
  });
  ```

- 参数为空的函数设置默认值

  ```javascript
  function showMenu({ title = "Untitled", width = 200, height = 100 } = {}) {
    // ...
  }

  showMenu(); // ok now
  ```

  > 传入空对象以跳过参数

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
