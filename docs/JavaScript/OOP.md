# 对象

空对象

```javascript
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

## 属性操作

```javascript
// 创建属性
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// 访问属性
alert(user.name); // John
alert(user["name"]); // John
alert(user["likes birds"]); // true
key = "likes birds";
alert(user[key]); // true

// 添加属性
user.surname = "Smith";

// 修改属性
user.name = "Pete";

// 删除属性
delete user.surname;

// 检查属性是否存在
alert("age" in user); // true

// 遍历属性
for (let key in user) {
  // keys
  alert(key); // name, age, likes birds
  // values for the keys
  alert(user[key]); // John, 30, true
}
```

> 相当于字典

属性必须是字符串或者 symbol, 属性会被替换为字符串

Array 也是 object, 继承自 Object

---

计算属性

推延创建

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"
```

> `[fruit]`表示用 fruit 的计算值作为属性名

等价形式

```javascript
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
```

---

属性值简写

```javascript
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

## 引用和复制

对象通过引用复制, 原始类型通过值复制

```js
objectA == objectB;
```

当且仅当对象为同一对象时, 两个变量才相等

---

方法

- 手动, 逐个元素赋值

  - 深层拷贝

    递归判断属性是否是引用, 进一步递归

  - lodash

    ```javascript
    let clone = _.cloneDeep(obj);
    ```

- 用`Object.assign(dest, [src1, src2, ...])`

  dest 中的属性会被 src 中的属性覆盖

- `structuredClone`

?> const 是引用指针不会变, 而对象的属性是可以改变的

## method

```javascript
user = {
  sayHi: function () {
    alert("Hello");
  },
};

// 类似c++
let user = {
  sayHi() {
    alert("Hello!");
  },
};
```

> 在继承方面有细微的差别

## this

this 可以用于任何函数, 即使不是对象的方法

```javascript
function sayHi() {
  alert(this.name);
}

sayHi(); // undefined
```

this 取决于上下文

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)
```

this 并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象

> this 被调用的时候才会被确定, 比如`sayHi()`的时候是 undefined, `user.f()`的时候是 user

---

箭头函数没有自己的 "this", 采用的是 closure, 引用上一层的 this 计算值

可以见[测试 this](/example/test_func/README.md)

---

返回对象

`user => ({ name: "John" })` 等价于 `user => { return { name: "John" } }`

> 注意第一种形式一定要加括号, 否则会被解析为函数体

## new

```javascript
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

let user = new User("Jack");
```

> 也可以`let user = new function() {}`, 这样将没法再次调用, 为的是仅仅创建一个这样的类

---

约定:

- 构造器函数首字母大写

- 构造器函数必须使用 new 来调用

!> new 容易忘记

---

new.target:判断函数是否是 new 调用

```js
function User(name) {
  if (!new.target) {
    // 如果你没有通过 new 运行我
    return new User(name); // ……我会给你添加 new
  }

  this.name = name;
}

let john = User("John"); // 将调用重定向到新用户
```

---

构造器的 return 规则:

- 如果 return 返回的是一个对象，则返回这个对象，而不是 this
- 如果 return 返回的是一个原始类型，则忽略

> 从头到尾可以看到, 类是通过函数构造的, 是一种语法糖而已, 便于动态生成对象

## symbol

只用两种类型可以作为对象属性键

- 字符串
- symbol

---

symbol 值是唯一的

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

---

使用场景

避免不同文件中的变量名冲突, 将属性作为私有属性

保护对象属性不被意外修改

```javascript
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // not "id: 123"
};
```

使用的是 id 的值, 而不是 "id"这个字符串

---

- 在 `for..in` 中不会出现
- 在`Object.keys()`中不会出现
- 在`Object.assign()`中会出现(复制的完整性)

---

- 全局 symbol

  ```javascript
  let id = Symbol.for("id"); // if the symbol did not exist, it is created

  // read it again (maybe from another part of the code)
  let idAgain = Symbol.for("id");

  // the same symbol
  alert(id === idAgain); // true
  ```

  - `Symbol.keyFor(sym)`

    返回一个全局 symbol 的名字, 相当于 `Symbol.for(key)`的逆

- 系统 Symbol

  用来改变一些内建行为

## 对象-原始值转换

!> 不存在 c++的函数重载

- 转化规则 [^modern conversion]

  - 没有转化为布尔值, 只有转化为数字和字符串

    在布尔值上下文中, 对象总是 true

  - 对象转化为数字

    比如`date1 - date2`

  - 对象转化为字符串

    比如`alert(obj)`

!> 强制要求 => 这些方法的返回类型一定要是原始值

感觉可以偷偷地实现运算符重载, 如果根据原始的数据类型来

## References

1.  [-modern conversion] [Object to primitive conversion](https://javascript.info/object-toprimitive)
