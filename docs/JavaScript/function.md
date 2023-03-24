# function

## Recursion

链表: linked list [^modern recursion]

```txt
list = {value, next -> list}
```

> 想到了 Haskell

---

HTML 的定义也是递归的

> 觉得这个 Haskell 的语言特性更加明显

## stack

context, 函数的上下文 [^modern stack]

## scope

作用域

---

分块作用

```js
// show message
{
  const msg = "hello";
  send(msg);
}

// show another message
{
  const msg = "start";
  send(msg);
}
```

此时 code block 具有划分块的作用, 用于表示注释中**目的**的起止

## closure

- 闭包

  闭包 => 会记住它的`调用堆栈链`(语法环境链 => 隐藏属性`[[Environment]]`)

example:  
可以把整个程序看作是一个大的函数，全局变量就是这个函数的局部变量, 整个函数是调用堆栈的根

### lexical environment

When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one. [^modern lexical]

---

示例: [Army of functions](https://javascript.info/closure#army-of-functions)

while 中每个子函数都会记住相同的`i`, 而最终 i 变成了 5, 所有的输出都是 5

for 循环, 每次循环都会开辟新的作用域, 所以每次循环都是新的 i, 与上一个 i 不是同一个变量

---

语法环境

示例: [Is variable visible?](https://javascript.info/closure#is-variable-visible)

在创建语法环境时, 会预先扫描整个作用域, 找到所有的变量声明, 并将其放入环境中. 然后在定义时, 放入对应的值

进入函数时, 语法环境知道局部变量`x`的存在, 于是会屏蔽外部的`x`, 所以里面的`x`都是局部变量

执行到`console.log(x)`时, 局部变量`x`还没有定义, 所以会报错

## var

不推荐使用, 建议了解 [^modern var]

```js
(function () {
  // code
})(); // the function executes immediately
```

## global this

默认情况下，这些全局变量内建于语言或环境中 [^modern global this]

- browser: window
- Node.js: global

globalThis 被作为全局对象的标准名称加入到了 JavaScript 中

在浏览器中，除非我们使用 modules，否则使用 var 声明的全局函数和变量会成为全局对象的属性

## 函数也是对象

A good way to imagine functions is as callable “action objects”.

- 属性-`name`

  函数的名字

- 属性-`length`

  函数的参数个数

  rest 参数不计入内

  > 可以模拟一定程度的多态, 可以见[docsify](https://github.com/docsifyjs/docsify/blob/898e6eea7a7d5bf34a428d672d6a1b8c7896d183/src/core/init/lifecycle.js#L42-L72)

---

示例: 可以看看 [markedjs/marked](https://github.com/markedjs/marked/blob/8c7bca87029e1a346232e87ed8f63283069f0c64/src/marked.js#L342-L350). 里面的 marked 是一个函数, 然后用了一些对象

---

!> 函数表达式的名字是用来递归的

## new Function

闭包

使用 new Function 创建的函数，它的 `[[Environment]]` 指向全局词法环境，而不是函数所在的外部词法环境 [^modern func new]

## decorator

比如缓存技术 [^modern cache] , 可以适当看看[Decorator](https://refactoring.guru/design-patterns/decorator)设计模式

## forwarding

```js
let result = func.call(this, x); // "this" is passed correctly now
```

使用这个比传递进入 object 参数比较好

---

使用 hash 值得思考 [^modern cache args]

---

call 与 apply 仅仅是语法糖的区别

```js
func.call(context, ...args);
func.apply(context, args);
```

可以使用 [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), 那样只能 bind 一次

---

forwarding 转发参数, Borrowing a method. 委托构造等

```js
function hash() {
  alert([].join.call(arguments));
}
```

!> 注意 arguments 是放在了 context 的位置, 而不是 args.

---

可以看一看一些场景案例:

- [Debounce decorator](https://javascript.info/call-apply-decorators#debounce-decorator)

  固定延时 1000ms

  ```js
  setTimeout(() => f("b"), 200);
  ```

  意味着 1200ms 后响应, 如果后续有调用,

  ```js
  setTimeout(() => f("c"), 500);
  ```

  则 1200ms 的不会相应, 而是 1500ms 的会相应

  > 给一定的冷静

- Throttle decorator

  每 1000ms 做一次总结, 只总结 1000ms 里面最近的一次

## partial

partial application is useful when we have a very generic function and want a less universal variant of it for convenience. [^modern bind]

## arrow

- 箭头函数没有 this

  - 它会获取外部语法环境的 this

  - 它不能被`new`

- 箭头函数没有`arguments`

  会引用上面一个层级的 arguments

That’s because they are meant for short pieces of code that do not have their own “context”, but rather work in the current one. And they really shine in that use case. [^modern arrow]

## References

1. [-modern recursion] [-modern stack] [Recursion and stack](https://javascript.info/recursion)
2. [-modern lexical] [Lexical Environment](https://javascript.info/closure#lexical-environment)
3. [-modern global this] [Global object](https://javascript.info/global-object)
4. [-modern var] [The old "var"](https://javascript.info/var)
5. [Function object, NFE](https://javascript.info/function-object)
6. [-modern func new] [The "new Function" syntax](https://javascript.info/new-function)
7. [-modern cache] [modern js cache](https://javascript.info/call-apply-decorators#transparent-caching)
8. [-modern cache args] [Decorators and forwarding, call/apply](https://javascript.info/call-apply-decorators#going-multi-argument)
9. [-modern arrow] [Arrow functions revisited](https://javascript.info/arrow-functions)
10. [-modern bind] [Function binding](https://javascript.info/bind)
