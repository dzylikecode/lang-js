# iterables

调用 object 中的`[Symbol.iterator]`方法, 返回得到另一个对象, 这个对象必须有`next`方法

next:

```js
next() {
  if (this.current <= this.to) {
    return { done: false, value: this.current++ };
  } else {
    return { done: true };
  }
}
```

!> Iterables and array-likes are very different

- 可迭代对象是可迭代

- 类数组对象要求有 `length` 属性和索引

---

可以使用 `...` 运算符

## over object

迭代 object

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

## References

1. [Iterables](https://javascript.info/iterable)
2. [Object.keys, values, entries](https://javascript.info/keys-values-entries)
