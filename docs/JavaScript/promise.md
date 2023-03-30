# Promise

解决回调的逻辑连续, 但是代码不连续的问题

---

类似`订阅模型`, 针对的是回调, 异步加载

---

js 的 Promise 并不是 monad [^js promise] , 但是有点关系 [^js then]

可以类似 monad 来理解, `new Promise`可以看作映射到了一个范畴, 其中 resolve 是后面 `then(func)` 的 func. 而 then, 可以类似于 Haskell 的`>>=`函数

## chaining

!> 继承式的链式才会是逻辑上的连续, 分开的链式只会调用第一次的 Promise 结果 [^js chain]

---

异步行为链

then 里面返回一个 promise, 会等待这个 promise 完成, 然后再执行下一个 then. 实际上, 不需要 promise, thenable 就行. 它会调用 then 的结果

[Example: loadScript](https://javascript.info/promise-chaining#example-loadscript) 表示了嵌套和非嵌套是一样的. 而 Haskell 的 do-notation 是针对嵌套的, 这可以引出 async/await 语法

---

[Bigger example: fetch](https://javascript.info/promise-chaining#bigger-example-fetch)

```js
setTimeout(() => {
  img.remove();
  resolve(githubUser); // (**)
}, 3000);
```

resolve 可以得到 Timeout 逻辑上的后续

## exception

一旦抛出错误后, 会被附近的 catch 捕捉

- 如果 catch 处理完后, 则会执行后续的 then
- 如果不能处理, 则应该重新抛出错误, 继续被下一个 catch 捕捉

  - 如果没有 catch, 则会卡住

    浏览器会会生成事件, 以下可以捕捉

## sugar

- `Promise.all` 并行处理多个 promise

- `Promise.allSettled`

  同时关心失败和成功

- `Promise.race`

  关心最快出结果(无论失败还是成功)的那个

- `Promise.any`

  关心最快成功的那个

  所有都失败会返回`AggregateError`

- `Promise.solve`

  相当于将`value`封装进入`promise`

  被`async/await`语法取代

## Promisification

一种封装方式:

将 callback 函数转化为 promise 的方式, 便于理解

## 微任务

- 只有在 JavaScript 引擎中没有其它任务在运行时，才开始执行任务队列中的任务
- `.then/catch/finally` 处理程序总是在当前代码完成后才会被调用

## References

1. [-js promise] [javascript - Why are Promises Monads? - Stack Overflow](https://stackoverflow.com/questions/45712106/why-are-promises-monads)
2. [-js then] [Is the JavaScript `then` the same as Haskell `fmap`? - Stack Overflow](https://stackoverflow.com/questions/53385968/is-the-javascript-then-the-same-as-haskell-fmap)
3. [-js chain] [Promises chaining](https://javascript.info/promise-chaining)
4. [Error handling with promises](https://javascript.info/promise-error-handling)
