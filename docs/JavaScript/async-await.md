# async await

在[例子](https://javascript.info/callbacks)最后的解决形式中, 很接近 Haskell 的 monad 的嵌套写法

相当于 Haskell 的 do-notation [^async do]

async 会将 return 的结果封装为一个 promise, 同时允许内部使用 await

---

await 只要对象形似`thenables`

只要对象能有 then 方法, 得到的结果就是 then 接受的参数 [^modern async]

?> 只需要 `then(resolve, reject)`

## 应用

使用 await 得到返回结果

```js
async function compress(fileName) {
  return await image.compress(fileName).then((file) => {
    if (fs.existSync(file)) {
      return true;
    } else {
      return false;
    }
  });
}
```

await 会等待返回结果, 等待返回 true 还是 false. 其实, 相当于调用下一个 then

---

将一些异步转化为 await 形式, 通过 promise 构造

```js
async function executeCommamd() {
  return new promise((resolve) => {
    spawn(command)
      .on("close", () => resolve(true))
      .on("error", () => resolve(false));
  });
}
```

await 会等待 resolve(其实也就相当于进入 then)

## References

1. [Return multiple variables on async/await](https://stackoverflow.com/questions/46090163/return-multiple-variables-on-async-await)

   You'd better return an array.

2. [-async do] [async/await is just the do-notation of the Promise monad](https://gist.github.com/VictorTaelin/bc0c02b6d1fbc7e3dbae838fb1376c80)
3. [Async/Await is really just a subset of monads and do-notation for imperative languages : haskell](https://www.reddit.com/r/haskell/comments/t3wumj/asyncawait_is_really_just_a_subset_of_monads_and/)
4. [Haskell do notation explained through JavaScript async await - part 2 - DEV Community](https://dev.to/gege251/haskell-do-notation-explained-through-javascript-async-await-part-2-hn)
5. [-modern async] [Async/await](https://javascript.info/async-await)
