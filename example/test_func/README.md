# test for this

## code

[](index.js ":include :type=code js")

## res

```txt
****User****
execute arrow function directly:
User
execute arrow function by Admin:
User
execute normal function by Admin
Admin
****Admin****
execute arrow function directly:
Admin
execute arrow function by Admin:
Admin
execute normal function by Admin
Admin
```

说明, arrow function 对于 this 用的是 closure, 引用的 this 怎么变, 它就跟着怎么变,

```js
user.testFunc();
admin.testFunc();
```

改变了 this, 所以 arrow function 也跟着变了

而直接将箭头函数赋给对象, 进行方法调用

```js
admin.executeByAdmin = callback;
admin.executeByAdmin();
```

并不会改变 this

> arrow function 的 this 用 closure 理解

---

normal function 的 this 取决于调用者

---

- [经典检验](https://zh.javascript.info/object-methods#zai-dui-xiang-zi-mian-liang-zhong-shi-yong-this)

[](test_1.js ":include :type=code js")

[](test_2.js ":include :type=code js")

[](test_3.js ":include :type=code js")

> 可以看出 this 是在不断动态计算的

第一次调用`makeUser()`会有一个计算得到的 this 值, ref 会使用计算得到的值,

`makeUser()`计算 this 为"John"

`user.ref_func()`计算 this 为`user`, 即"Alan"

`ref_direct()`会重新计算, this 为"globalThis"
