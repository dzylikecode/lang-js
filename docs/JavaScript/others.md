# 杂项

## 垃圾回收

garbage collection

- 可达性

## 调度

- [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)

  ```javascript
  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

  clearTimeout(timerId);
  ```

  `setTimeout`返回一个定时器的标识符, 用于取消定时器

  可以嵌套使用, 达到 setInterval 的效果 => [案例](https://zh.javascript.info/settimeout-setinterval#mei-miao-shu-chu-yi-ci)

- [setInterval](https://developer.mozilla.org/zh-CN/docs/Web/API/setInterval)

  ```javascript
  let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
  clearInterval(timerId);
  ```

  `setInterval`返回一个定时器的标识符, 用于取消定时器

## References

1. [Garbage collection](https://javascript.info/garbage-collection)
2. [Scheduling: setTimeout and setInterval](https://javascript.info/settimeout-setinterval)
