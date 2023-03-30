# 异常

## 错误处理

`catch`可以忽略参数

---

`finally`适用于`return`的时候, 会先执行`finally`, 然后执行`try`里面的`return` [^modern finally]

error 的基本属性:

- `name`
- `message`
- `stack`

---

global error

## custom error

通过继承拓展`Error`, 通过`instanceof`检查类型

## References

1. [-modern finally] [Error handling, "try...catch"](https://javascript.info/try-catch#try-catch-finally)
2. [Custom errors, extending Error](https://javascript.info/custom-errors)
