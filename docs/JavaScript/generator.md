# generator

和 lua 的[协程](https://www.lua.org/pil/9.html)很相似

生成器可以构造一个无穷序列供外部使用, 用 break 来终止

- 数据格式

  `{value: result, done: true/false}`

- 是双向的

  通过`next(result)`, 让`let res = yield "2+2=?"`得到 `result` 值

  通过`throw(err)`, 传递错误

- 透明嵌入(委托构造)

  `yield* generateSequence()`

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

---

[Real-life example: paginated data](https://javascript.info/async-iterators-generators#real-life-example-paginated-data)中的无穷序列很有意思, 很有启发

## References

1. [Generators](https://javascript.info/generators)
