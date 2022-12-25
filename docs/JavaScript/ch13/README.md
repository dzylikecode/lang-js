# 模块

## 简介

- 导入和导出

  - 导出[`export`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)
  - 导入[`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

- 使用导入和导出的限制

  意味着不是普通脚本, 而是模块

  !> 导入的变量相当于 const

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

  也就是常规的 script 会比它先执行

  ```html
  <script>
    let game;
  </script>
  <script type="module">
    import { Game } from "./game.js";
    game = new Game();
    game.init();
  </script>
  <script>
    game.run(); // 会比module先执行, 此时game还没有初始化
  </script>
  ```

  把一些常规脚本也变成 module 能保证相应的执行顺序

  ```html
  <script>
    let game;
  </script>
  <script type="module">
    import { Game } from "./game.js";
    game = new Game();
    game.init();
  </script>
  <script type="module">
    game.run();
  </script>
  ```

- [构建工具](https://zh.javascript.info/modules-intro#gou-jian-gong-ju)

  webpack

## 导入和导出

### 变量

```js
// export an array
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a object
export let user = {
  name: "John",
};
```

## 类型

```js
// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

## 函数

```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
} // no ; at the end
```

## 整体

将各个一次性导出/导入与分开来导出/导入是一致的, 其实也就是将整个文件看作一个对象

```js
export { sayHi, sayBye }; // a list of exported variables
```

```js
import * as say from "./say.js";
```

## 解包

```js
import { sayHi, sayBye } from "./say.js";
```

## 重命名

```js
export { sayHi as hi, sayBye as bye };
import { sayHi as hi, sayBye as bye } from "./say.js";
```

## default

lib 对象有一个属性`default`

```js
export default class User {...}
export {sayHi as default};
```

```js
import {default as User, sayHi} from './user.js';
import User from ...
import * as user from './user.js';
let User = user.default; // the default export
```

!> `import User from ...` 是得到`default`而不是整个`lib`

## 重定向

```js
export { default } from "./user.js"; // to re-export the default export
```

- 导出`class/function`推荐不要分号
- 导出方式

  - 声明的时候导出
  - 以变量列表的形式集体导出

- 导入

  - 列表形式导入
  - 所有内容导入为一个对象

    `import * as obj from './say.js'`

- `as`可以重命名

- `default`一个文件只有一个

  导入的时候, 不需要列表形式

- 重新导出 => 转发

  使用`from`即可

  - 转发默认

    `export {default as User} from './say.js'`

  - 全部转发, 包括默认

    ```js
    export * from "./user.js"; // 重新导出命名的导出
    export { default } from "./user.js"; // 重新导出默认的导出
    ```

## 动态导入

- `import(module_path)`

  返回的是 `promise`

  所以要使用`then`或者`await`
