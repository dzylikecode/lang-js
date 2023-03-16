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

`??`

空值合并运算符(优先级和 `||` 相同)

!> `||`针对的是 Boolean 值, `??`针对的是 null/undefined

---

```js
result = a ?? b;
```

若 a 为 null 或 undefined, 返回 b

否则返回 a

eg:

```js
alert(firstName ?? lastName ?? "Anonymous");
```

!> 一般不要和 `||`以及`&&` 混用

## 解构

### 数组

```js
let [a, b, c] = "abc";
```

可以将字符串解构为数组

---

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

---

提供默认值

```js
let [firstName = "Guest", lastName = "Anonymous"] = [];
let [firstName = prompt("name?"), lastName = prompt("last name?")] = [];
```

---

储存剩余的元素

```js
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
```

`rest` 是一个数组, 可以使用任意别名, 不一定是`rest`

> 像 Haskell 地对待 array

---

交换变量或者遍历

```js
[a, b] = [b, a];
```

```js
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`);
}
```

### 对象

```js
let {prop : varName = default, ...rest} = object;
```

- `prop` 是对象的属性
- `varName` 是变量名
- `default` 是默认值
- `rest` 是剩余的属性

---

简写, 默认使用相同的名字, 不另取别名

```js
let { width, height, title } = { title: "Menu", height: 200, width: 100 };
```

- `width` 和 `height` 会被赋值为 100 和 200
- `title` 会被赋值为 "Menu"

> 顺序无关, 但是属性名必须一致, 否则需要用`{prop: varName}`的形式指定

---

!> 不用 let, 需要括号包裹, 避免花括号被解析为代码块

```javascript
let title, width, height;

({ title, width, height } = { title: "Menu", width: 200, height: 100 });
```

---

嵌套 [^modern destructing]

> 相当于递归地 destruct 下去

### 智能函数参数

解决参数过多的问题, 采用传入 object 的方式, 作为参数, 然后 destruct, 同时设置一些默认参数 [^modern smart]

> 类似于 interface 了

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

## References

1.  [-modern destructing] [Nested destructuring](https://javascript.info/destructuring-assignment#nested-destructuring)
2.  [-modern smart] [Smart function parameters](https://javascript.info/destructuring-assignment#smart-function-parameters)
