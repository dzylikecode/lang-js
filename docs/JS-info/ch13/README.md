# 模块

## 简介

- 导入和导出

  - 导出[`export`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
  - 导入[`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

- 使用导入和导出的限制

  意味着不是普通脚本, 而是模块

- 形式

  ```html
  <script type="module">
    import { sayHi } from "./say.js";

    document.body.innerHTML = sayHi("John");
  </script>
  ```

  ```html
  <script type="module" src="user.js"></script>
  <script type="module" src="hello.js"></script>
  ```

- 模块具有模块级作用域

  不像普通脚本, 引入后是其他标签内都可见

  其他标签要可见, 需要`import/export`

- 模块代码尽在第一次导入时被解析

  就像初始化一样

  - 可以利用模块配置

- import.meta

  返回 URL

- 模块顶层`this`是`undefined`
- 模块是完全加载 html 后执行

  所以任意地方的元素, 模块都可见
