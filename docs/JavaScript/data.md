# data

常见的数据类型 [^modern data]

原始类型, 通过`对象包装器`, 使得原始类型可以像对象一样有方法可以操作

## array

遍历

- `for ... of`

- `for ... in`

  不推荐, iterates over all properties, not only the numeric ones.

!> `for ... in`是针对对象的键值对遍历的 [^modern array]

---

多维数组

```js
let arr = [
  [1, 2],
  [3, 4],
];

let b = arr[0][0];
```

---

了解 array 的 map, forEach, filter, reduce 等方法 [^mdn array] , 和 Haskell 是一样的, 运用 functional programming 的编程思维

---

`thisArg`是为了 bind 传入的函数的 this 指针

`users.filter(army.canJoin, army)`等价于`users.filter(user => army.canJoin(user));`

## Map

可以转化为 object [^modern map]

## Set

常用于去重

## json

与语言无关的纯数据规范

```markmap
# json

- 数字
- 字符串
- 布尔值
- 数组
- 对象
- null
```

!> 属性名必须是双引号包裹的字符串, 不得出现循环引用

---

json 是将对象中的数据序列化, 而忽略:

- 函数
- Symbol
- undefined

为的是便于数据交换, 函数交由另一边约定好协议即可

由于 js 的 this 是动态的, 可以采用如下技巧

```js
const objA = JSON.parse(receiveData);
objClass.func.apply(objA, params);
```

也可以利用 prototype 属性 [^stack parse json]

## References

1. [比较字符串与 unicode](https://zh.javascript.info/string#bi-jiao-zi-fu-chuan)
2. [toString](https://zh.javascript.info/array#tostring)
3. [-modern data] [Data types](https://javascript.info/data-types)
4. [-mdn array] [Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
5. [-modern array] [Arrays](https://javascript.info/array#loops)
6. [-modern map] [Map and Set](https://javascript.info/map-set)
7. [JSON methods, toJSON](https://javascript.info/json)
8. [-stack parse json] [Parse JSON String into a Particular Object Prototype in JavaScript - Stack Overflow](https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript)
