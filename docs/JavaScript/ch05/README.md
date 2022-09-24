# 数据类型

## 原始类型的方法

通过`对象包装器`, 使得原始类型可以像对象一样有方法可以操作

## 数字类型

- `123456..toString(16)` => `1e240`

  16 表示 16 进制

  两个小数点, 一个表示小数点, 一个表示调用方法

  等价于 `(123456).toString(16)`

- 语法糖

  - `let billion = 1_000_000_000`

    1_000_000_000 表示 1000000000

    用于分隔数字, 便于阅读

  - 用 e 表示法表示

    - `1e3` => `1000`

    - `1.23e6` => `1230000`

    - `1.23e-6` => `0.00000123`

  - 支持 16 进制

    - `0xff` => `255`

    - `0xFF` => `255`

- 读取数字

  - `parseInt(str, radix)`

    - `str` 表示要解析的字符串

    - `radix` 表示基数, 默认为 10

    - 返回解析后的整数

  - `parseFloat(str)`

    - `str` 表示要解析的字符串

    - 返回解析后的浮点数

### 数学操作

- `Math.floor`

  向下取整

- `Math.ceil`

  向上取整

- `Math.round`

  四舍五入

- `Math.trunc`

  去除小数部分

- 精度

  `12.34.toFixed(2)`

  返回的是字符串

  利用`+`转化为数字

  `+12.34.toFixed(2)`

### 判断数字

- Infinity

  正无穷

  常被用于验证是否为常规数字字符

- NaN

  代表一个 error

  字符串转数字时, 如果不是数字, 就会返回 NaN

  `NaN === NaN` => `false`

  - `Object.is(NaN, NaN)` => `true`

    用于判断是否相等

## 字符串

- 编码 => UTF-16

- 引号跨行 => 报错

- 长度 => `str.length`

- 访问

  - `str[0]`
  - `str.charAt(0)`

  - 遍历

    ```javascript
    for (let char of str) {
      console.log(char);
    }
    ```

  - 字符串是不可变的

    - `str[0] = 'a'` => `TypeError`

- 改变大小写

  - `str.toUpperCase()`

  - `str.toLowerCase()`

- 搜索子字符串

  - `str.indexOf(substr, pos)`

    - `substr` 表示要搜索的子字符串

    - `pos` 表示开始搜索的位置

    - 返回子字符串第一次出现的位置, 如果没有, 返回 -1

    > `~-1` => `0`, 取反为 0

  - `str.lastIndexOf(substr, pos)`

    - `substr` 表示要搜索的子字符串

    - `pos` 表示开始搜索的位置

    - 返回子字符串最后一次出现的位置, 如果没有, 返回 -1

  - `str.includes(substr, pos)`

    - `substr` 表示要搜索的子字符串

    - `pos` 表示开始搜索的位置

    - 返回是否包含子字符串

  - `str.startsWith(substr, pos)`

    - `substr` 表示要搜索的子字符串

    - `pos` 表示开始搜索的位置

    - 返回是否以子字符串开头

  - `str.endsWith(substr, pos)`

    - `substr` 表示要搜索的子字符串

    - `pos` 表示开始搜索的位置

    - 返回是否以子字符串结尾

- 获取子字符串

  - `str.slice(start, end)`

    - `start` 表示开始位置

    - `end` 表示结束位置

    - 返回从 `start` 到 `end` 的子字符串

    - `start` 为负数, 表示从后往前数

    - `end` 为负数, 表示从后往前数

    - `end` 不写, 表示到最后

    - `start` 大于 `end`, 返回空字符串

    > 左闭右开

  - `str.substring(start, end)`

    - `start` 表示开始位置

    - `end` 表示结束位置

    - 返回从 `start` 到 `end` 的子字符串

    - `start` 为负数, 表示 0

    - `end` 为负数, 表示 0

    - `end` 不写, 表示到最后

    - `start` 大于 `end`, 交换两个值

  - `str.substr(start, length)`

    - `start` 表示开始位置

    - `length` 表示长度

    - 返回从 `start` 开始, 长度为 `length` 的子字符串

    - `start` 为负数, 表示从后往前数

    - `length` 为负数, 表示 0

    - `length` 不写, 表示到最后

- [比较字符串与 unicode](https://zh.javascript.info/string#bi-jiao-zi-fu-chuan)

## 数组

- 创建

  - `let arr = new Array()`

  - `let arr = new Array(1, 2, 3)`

  - `let arr = new Array(3)`

    - 创建一个长度为 3 的数组

  - `let arr = []`

  - `let arr = [1, 2, 3]`

  > 可以混合存放任何类型的数据

- 长度 => `arr.length`

- 访问

  - `arr[0]`

    不直接支持负数

  - `arr.at(-1)`

  - 栈

    - `pop()`

      - 删除最后一个元素

      - 返回删除的元素

    - `push()`

      - 添加一个元素到最后

      - 返回新的长度

  - 队列

    - `shift()`

      - 删除第一个元素

      - 返回删除的元素

    - `unshift()`

      - 添加一个元素到最前面

      - 返回新的长度

    - `push()`

- 修改大小

  - `arr.length = 0`

    - 清空数组

  - `arr.length = 1`

    - 保留第一个元素, 其他元素删除

  - `arr.length = 3`

    - 保留前三个元素, 其他元素删除

  - `arr.length = 4`

    - 保留前三个元素, 后面补 `undefined`

- 遍历

  - `for ... of`

  - `for ... in`

    不推荐, 因为会把其他属性也遍历出来

    这个是针对对象遍历的

- 多维数组

  - `let arr = [[1, 2], [3, 4]]`

  - `arr[0][0]`

- [toString](https://zh.javascript.info/array#tostring)

## 数组方法

- 删除元素

  `delete arr[0]` => 不会改变数组长度, 不合理

  - `arr.splice(start, deleteCount, item1, item2, ...)` => 推荐

    - `start` 表示开始位置 => 负数表示从后往前数
    - `deleteCount` 表示删除的个数 => 0 表示不删除, 功能变为插入
    - `item1, item2, ...` 表示要插入的元素

- `arr.slice(start, end)`

  - `start` 表示开始位置

  - `end` 表示结束位置

  - 返回从 `start` 到 `end` 的子数组

  - `start` 为负数, 表示从后往前数

  - `end` 为负数, 表示从后往前数

  - `end` 不写, 表示到最后

  - `start` 大于 `end`, 返回空数组

  > 左闭右开, 类似于 `str.slice(start, end)`

- `arr.concat(arr1, arr2, ...)`

  创建一个`arr + arr1 + arr2 + ...`的新数组

  可以加入对象, 但是不会展开对象(作为一个整体添加 => 复制的形式)

  如果对象有 `Symbol.isConcatSpreadable` 属性, 且值为 `true`, 则会展开对象

  ```javascript
  let arr = [1, 2];

  let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
  };

  alert(arr.concat(arrayLike)); // 1,2,something,else
  ```

- 遍历

  - `arr.forEach(function(item, index, array) {})`

    - `item` 表示当前元素

    - `index` 表示当前元素的索引

    - `array` 表示当前数组

  - `arr.find(function(item, index, array) {})`

    - `item` 表示当前元素

    - `index` 表示当前元素的索引

    - `array` 表示当前数组

    - 返回第一个符合条件的元素(即`return true`的元素)

    - 如果没有符合条件的元素, 返回 `undefined`

    > 类似的方法还有 `arr.findIndex()`和 `arr.lastIndexOf()`

  - `arr.map(function(item, index, array) {})`

    - `item` 表示当前元素

    - `index` 表示当前元素的索引

    - `array` 表示当前数组

    - 返回一个新数组

  - `arr.filter(function(item, index, array) {})`

    - `item` 表示当前元素

    - `index` 表示当前元素的索引

    - `array` 表示当前数组

    - 返回一个新数组

    - 返回的数组中的元素是 `item` 返回 `true` 的元素

  - `arr.reduce(function(accumulator, item, index, array) {}, initialValue)`

    - `accumulator` 上一个函数的返回值, 或者 `initialValue`

    - `item` 表示当前元素

    - `index` 表示当前元素的索引

    - `array` 表示当前数组

    - `initialValue` 初始值

    - 返回一个值

    - 从左到右遍历数组

    - 如果没有 `initialValue`, 则 `accumulator` 为数组的第一个元素, `item` 为数组的第二个元素

    > 类似的方法还有 `arr.reduceRight()`, 从右到左遍历数组
    >
    > 具有逐步累加, 添加, 扩展的功能

    - [一个例子](https://zh.javascript.info/array-methods#cong-shu-zu-chuang-jian-jian-zhi-dui-xiang)

- 搜索

  - `arr.indexOf(item, from)`

    - `item` 表示要搜索的元素

    - `from` 表示从哪个位置开始搜索

    - 返回第一个匹配的元素的索引

    - 如果没有找到, 返回 `-1`

  - `arr.lastIndexOf(item, from)`

    - `item` 表示要搜索的元素

    - `from` 表示从哪个位置开始搜索

    - 返回最后一个匹配的元素的索引

    - 如果没有找到, 返回 `-1`

  - `arr.includes(item, from)`

    - `item` 表示要搜索的元素

    - `from` 表示从哪个位置开始搜索

    - 返回 `true` 或 `false`

- 排序

  - `arr.sort(function(a, b) {})`

    - `a` 表示当前元素

    - `b` 表示下一个元素

    - 返回值为 `-1` 表示 `a` 在前, `b` 在后

    - 返回值为 `1` 表示 `b` 在前, `a` 在后

    - 返回值为 `0` 表示不变

    - 如果不写 `function`, 则按照字典顺序排序

    - 如果数组中有 `undefined` 或 `null`, 则会排到最后

    - 如果数组中有对象, 则会按照字典顺序排序

    - eg: `alert( firstName.sort((a, b) => a.age - b.age) );` 按照年龄排序

  - `arr.reverse()`

    - 返回一个新数组, 元素顺序为反序

- split 和 join

  - `str.split(delim)`

    - `delim` 表示分隔符

    - 返回一个数组

    - 如果 `delim` 是空字符串, 则返回一个数组, 其中每个元素是字符串的一个字符

  - `arr.join(delim)`

    - `delim` 表示分隔符

    - 返回一个字符串

    - 如果 `delim` 是空字符串, 则返回一个字符串, 其中每个元素是数组的一个元素

- 判断数组

  - `Array.isArray(arr)`

    - 返回 `true` 或 `false`

  - `typeof arr` 不能判断数组

- `thisArg`

  ```javascript
  let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    },
  };

  let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

  // 找到可以加入军队的用户
  let soldiers = users.filter(army.canJoin, army);
  ```

  如果用`users.filter(army.canJoin)`, 则 `army.canJoin` 会被当做普通函数调用, `this` 是 `undefined`

  > 可以明白`let tempFunc = army.canJoin;`然后再调用`tempFunc(param)`与`army.canJoin(param)`的 `this` 是不一样的, `this`一定是在`.`运算的时候确定的

  `army.canJoin` 中的 `this` 会被第二个参数 `army` 替换

  等价于

  `let soldiers = users.filter(user => army.canJoin(user));`

## iterable 对象

- 可迭代对象

  - 可以使用 `for..of` 循环

  - 可以使用 `Array.from` 方法

  - 可以使用 `...` 运算符

  > 调用迭代器的 `next()` 方法

- 满足可迭代

  - 重写 `[Symbol.iterator]()` 方法

    - 要求返回一个迭代器

  - 迭代器

    - 重写 `next()` 方法

      - 要求返回 `{done: true/false, value: ...}`

        - `value` 表示当前值

        - `done` 表示是否迭代结束

- 显示调用迭代器

  ```javascript
  let str = "Hello";

  // 显示调用迭代器
  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // 输出每个字符
  }
  ```

- 可迭代对象与类数组对象

  - 可迭代对象是可迭代

  - 类数组对象要求有 `length` 属性和索引

  > 二者没有包含关系

- `Array.from(obj[, mapFn, thisArg])`

  - `obj` 是可迭代对象或类数组对象

  - `mapFn` 是可选参数, 表示映射函数

  - `thisArg` 是可选参数, 表示映射函数的 `this`

  - 返回一个数组

## Map 和 Set

### Map

与 Object 的区别 => 允许任何类型的键

- `new Map()` 创建一个空的 Map

  ```javascript
  let map = new Map([
    ["1", "str1"],
    [1, "num1"],
    [true, "bool1"],
  ]);
  ```

- `map.set(key, value)` 设置键值对
- `map.get(key)` 获取键对应的值
- `map.has(key)` 判断是否存在键
- `map.delete(key)` 删除键
- `map.clear()` 清空 Map
- `map.size` 返回 Map 的长度

- 迭代

  - `map.keys()` 返回键的迭代器

  - `map.values()` 返回值的迭代器

  - `map.entries()` 返回键值对的迭代器

  - `map.forEach((value, key, map) => {})` 遍历 Map

    - `value` 表示值

    - `key` 表示键

    - `map` 表示 正在被迭代的 Map

- `Object.entries(obj)`

  - 返回一个数组, 数组中的每个元素是一个键值对

  - `obj` 是一个对象

  `let map = new Map(Object.entries(obj));`

- `Object.fromEntries(arr)` 将键值对数组转换为对象

  `let obj = Object.fromEntries(map.entries());`

### Set

- `new Set(iterable)` 创建一个 Set

  - `iterable` 是可迭代对象

- `set.add(value)` 添加值

- `set.delete(value)` 删除值

- `set.has(value)` 判断是否存在值

- `set.clear()` 清空 Set

- `set.size` 返回 Set 的长度

- 迭代

  出于兼容 map 的考虑

  - `set.keys()` 返回值的迭代器

  - `set.values()` 返回值的迭代器

  - `set.entries()` 返回值的迭代器

  - `set.forEach((value, value, set) => {})` 遍历 Set

    - `value` 表示值

    - `set` 表示 正在被迭代的 Set

## WeakMap 和 WeakSet

与可达性无关, 不影响垃圾回收

- 场景

  当对象的其他引用都被删除时, weakMap 里面的对象会被垃圾回收

  减少内存占用

- 不支持

  - `keys()`

  - `values()`

  - `entries()`

  - `forEach()`

  - `size`

- 使用案例

  - [额外的数据](https://zh.javascript.info/weakmap-weakset#shi-yong-an-li-ewai-de-shu-ju)
  - [缓存](https://zh.javascript.info/weakmap-weakset#shi-yong-an-li-huan-cun)

## Object.keys-values-entries

- 约定

  如果自定义一个数据结构, 那么应该支持以下方法

  - Object.keys, Object.values, Object.entries
  - Map, Set, Array

- `Object.keys(obj)`

  - 返回一个数组, 数组中的元素是对象的键

  - `obj` 是一个对象

- `Object.values(obj)`

  - 返回一个数组, 数组中的元素是对象的值

  - `obj` 是一个对象

- `Object.entries(obj)`

  - 返回一个数组, 数组中的元素是对象的键值对`[key, value]`

  - `obj` 是一个对象

- 与 map 的区别

  - `map.keys()`
  - map 返回的是可迭代对象, 而`Object.keys()`返回的是数组

- 转化对象

  - `Object.fromEntries(arr)` 将键值对数组转换为对象
  - `Object.entries(obj)` 将对象转换为键值对数组

  方便使用其他数据结构的方法

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

## 日期和时间

- 详细阅读: [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [日期和时间](https://zh.javascript.info/date)

## json 方法

与语言无关的纯数据规范

- 规范

  - 属性名必须是双引号包裹的字符串
  - 支持

    - 数字
    - 字符串
    - 布尔值
    - 数组
    - 对象
    - null

  - 忽略

    - 函数
    - Symbol
    - undefined

  - 不得出现循环引用

- `JSON.stringify(value[, replacer, space])`

  将对象转换为 JSON 字符串

  - `value` 要转换的值

  - `replacer` 可选, 用于转换结果的函数

    - 数组

      只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中

    - `function(key, value)`

      - `key` 是对象的键, `value` 是值

      - 返回值将替换原来的值

      被递归调用, 包括嵌套的对象和数组项

      this 指向当前属性的对象

    可以用于滤掉循环引用

    - 递归示例

      ```javascript
      let room = {
        number: 23,
      };

      let meetup = {
        title: "Conference",
        participants: [{ name: "John" }, { name: "Alice" }],
        place: room, // meetup 引用了 room
      };

      room.occupiedBy = meetup; // room 引用了 meetup

      alert(
        JSON.stringify(meetup, function replacer(key, value) {
          alert(`${key}: ${value}`);
          return key == "occupiedBy" ? undefined : value;
        })
      );

      /* key:value pairs that come to replacer:
      :             [object Object] // the whole object, 空字符串表示
      title:        Conference
      participants: [object Object],[object Object]
      0:            [object Object] // the first element of participants
      name:         John
      1:            [object Object] // the second element of participants
      name:         Alice
      place:        [object Object]
      number:       23
      occupiedBy: [object Object]
      */
      ```

  - `space` 可选, 用于格式化结果的字符串或数字

    - 如果是数字, 则表示缩进的空格数

    - 如果是字符串, 则表示缩进的字符串

    - 如果是空字符串, 则没有缩进

    - 如果是 undefined, 则没有缩进

- toJson

  ```javascript
  let user = {
    name: "John Smith",
    age: 35,

    toJSON() {
      return {
        name: this.name,
        age: this.age,
      };
    },
  };

  alert(JSON.stringify(user)); // {"name":"John Smith","age":35}
  ```

  用于自定义序列化

- `JSON.parse(str[, reviver])`

  将 JSON 字符串转换为对象, 包含数组

  - `str` 要转换的 JSON 字符串

  - `reviver` 可选, 用于转换结果的函数

    - `function(key, value)`

      - `key` 是对象的键, `value` 是值

      - 返回值将替换原来的值 => 如将字符串转换为对象

      被递归调用, 包括嵌套的对象和数组项

      this 指向当前属性的对象
