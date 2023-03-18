# generator

generator

创建数据流

- 函数面前添加`*`
- 通过`yield`发送数据流

  - 数据格式

    `{value: result, done: true/false}`

  - 是双向的

    通过`next(result)`, 让`let res = yield "2+2=?"`得到 `result` 值

    通过`throw(err)`, 传递错误

  - 透明嵌入(委托构造)

    `yield* generateSequence()`

- generator 具有迭代性

  - 可以使用`for...of`

    但是 return 的值会被忽略

  - 可以使用`return(value)`方法打断迭代

---

异步迭代和 generator

- 对象重写`[Symbol.asyncIterator]`方法
- `next()`返回的是 `promise` 对象

  用`async`

- 使用`for await ... of`迭代
- 无法使用`spread`语法

- 使用 generator 方法

  在函数前面添加`async`即可

  !> `result = await generator.next()`来获得值

- 实际的例子: [分页的数据](https://zh.javascript.info/async-iterators-generators#shi-ji-de-li-zi-fen-ye-de-shu-ju)
