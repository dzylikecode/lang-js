# 自动测试框架

<a class="Pages" target="_blank" href="./index.html">preview</a>

## 结构

- `<head>` => 引入库
- `<script>` => 实现代码
- `test.js` => 测试代码
- `id = "mocha"` => 测试结果
- `mocha.run()` => 运行测试

---

!> module 的执行顺序

```js
<script type="module">mocha.run();</script>
```

添加`type="module"`后, 会在其他 module 之后执行

## 命名

文件为`pow.js`, 则测试的文件为`pow_test.js`
