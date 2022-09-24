# 对象基础

## 对象

相当于字典

- 空对象

  ```javascript
  let user = new Object(); // "object constructor" syntax
  let user = {}; // "object literal" syntax
  ```

- 属性必须是字符串或者 symbol
- Array 也是对象, 是对象的扩展

### 属性操作

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

- 属性会被替换为字符串

  - 不受关键字影响, 可以使用"for"作为属性名
  - 可以用 0 作为属性名, 会被转换为字符串"0"

- 计算属性

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

- 属性值简写

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

## 对象引用和复制

对象通过引用复制, 原始类型通过值复制

- 当且仅当对象为同一对象时, 两个变量才相等

- clone 对象

  - 手动, 逐个元素赋值

    - 深层拷贝

      递归判断属性是否是引用, 进一步递归

    - lodash

      ```javascript
      let clone = _.cloneDeep(obj);
      ```

  - 用`Object.assign(dest, [src1, src2, ...])`

    dest 中的属性会被 src 中的属性覆盖

- const 对象

  const 是引用(是整个整体), 而对象的属性是可以改变的

## 垃圾回收

- 详细理解:[一个简单的例子](https://zh.javascript.info/garbage-collection)

- 可达性

## 对象方法-this

### 方法简写

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

### this

this 可以用于任何函数, 即使不是对象的方法

- eg

  ```javascript
  function sayHi() {
    alert(this.name);
  }

  sayHi(); // undefined
  ```

- this 取决于上下文

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

  this 是“自由”的，它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象

  > this 被调用的时候才会被确定, 比如`sayHi()`的时候是 undefined, `user.f()`的时候是 user

- 箭头函数没有自己的 "this"

  它们没有自己的 this。如果我们在这样的函数中引用 this，this 值取决于外部“正常的”函数。

  也就是会引入上一个层级的 this

  ```javascript
  let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    },
  };
  ```

  当我们并不想要一个独立的 this，反而想从外部上下文中获取时，它很有用

- [经典检验](https://zh.javascript.info/object-methods#zai-dui-xiang-zi-mian-liang-zhong-shi-yong-this)

  第一个例子中,this 不是作为方法调用, 而是直接取值

  第二个例子是, this 在某个方法中调用

- 返回对象

  `user => ({ name: "John" })` 等价于 `user => { return { name: "John" } }`

  > 注意第一种形式一定要加括号, 否则会被解析为函数体

## 构造器和操作符-new

- 构造器

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

  > 也可以`let user = new function() {}`, 仅仅调用一次

- 约定

  - 构造器函数首字母大写

  - 构造器函数必须使用 new 来调用

- new.target(boolean 值)

  判断构造器函数是否是 new 调用

  详细:[构造器模式测试：new.target](https://zh.javascript.info/constructor-new#gou-zao-qi-mo-shi-ce-shi-newtarget)

- 构造器的 return

  - 如果 return 返回的是一个对象，则返回这个对象，而不是 this
  - 如果 return 返回的是一个原始类型，则忽略

## 可选链

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

## symbol 类型

- 只用两种类型可以作为对象属性键

  - 字符串
  - symbol

- symbol 值是唯一的

  ```javascript
  let id1 = Symbol("id");
  let id2 = Symbol("id");

  alert(id1 == id2); // false
  ```

- 使用场景

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

  - 在 `for..in` 中不会出现
  - 在`Object.keys()`中不会出现
  - 在`Object.assign()`中会出现(复制的完整性)

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

不存在 c++的函数重载

- 转化规则

  - 没有转化为布尔值, 只有转化为数字和字符串

    在布尔值上下文中, 对象总是 true

  - 对象转化为数字

    比如`date1 - date2`

  - 对象转化为字符串

    比如`alert(obj)`

- 类型转化

  语境

  hint 指示转化的语境

  - hint == "string"

    当用对象作为属性名时, 会自动转化为字符串

    - `anotherObj[obj]` => obj 转化为字符串

  - hint == "number"

    数学运算的时候

  - hint == "default"

    不确定期望的类型, 类型转化将依赖 default 的来转化

- 设置类型转化

  JavaScript 尝试查找并调用三个对象方法

  调用 `obj[Symbol.toPrimitive](hint)`

  否则，如果 hint 是 "string" => 尝试调用 obj.toString() 或 obj.valueOf()

  > 优先调用 toString(), 然后是 valueOf()

  否则，如果 hint 是 "number" 或 "default" => 尝试调用 obj.valueOf() 或 obj.toString()

  > 优先调用 valueOf(), 然后是 toString()

  > 方法调用是有优先级的

- Symbol.toPrimitive

  ```javascript
  let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },
  };

  // conversions demo:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500
  ```

  可以用 hint 进行判断当前的语境, 根据不同的语境选择不同的行为

- 强制要求 => 这些方法的返回类型一定要是原始值
