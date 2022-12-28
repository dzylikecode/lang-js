# style

## comment

- JSDoc: https://jsdoc.app/index.html

- 记录函数的参数和用法

  黑箱思想

---

bind this

```js
/**
 * @this {Phaser.Scene}
 */
function preload() {
  this.load.image("logo", "assets/logo.png");
}
```

- 解释性的注释应该最少

  代码本身做到自描述

- 通常情况下, 尽可能保持简洁和自描述, 可以稍微牺牲优化

---

好的注释应该描述更为抽象的概念

描述架构

高层次概括:相互作用, 控制流程

代码的架构图: UML

---

But what's not written may be more important to understand what is written.

描述为什么这样做, 而不是其他的(代码只描述了要这样做)

避免以下状况:

之前, 思考过一些显而易见的方案, 发现存在漏洞

下次重构代码的时候, 忘记了当初考虑的漏洞, 重新改写回"显而易见"的错误的方案

### 命名规则

定义名字应该如一个概念一样清晰

方便快速了解之前写的代码, 重头开始写代码的时间是少数, 接着以前的代码修改占比时间大. 如何快速了解原来的代码, 考验当时写的清晰程度

---

- 术语一致, 比如 user 和 visitor 不要混用
- 名称恰好清晰, 有一定的抽象, 又有具体的含义

## function

- 函数命名

  - 函数就是行为(action)

    它们的名字通常是动词

  - 简短且准确描述

- 一个函数一个行为

  一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能

  两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，我们可以创建第三个函数来调用这两个函数）

  - getAge

    如果它通过 alert 将 age 显示出来，那就有问题了（只应该是获取）

  - createForm

    如果它包含修改文档的操作，例如向文档添加一个表单，那就有问题了（只应该创建表单并返回）

  - checkPermission

    如果它显示 access granted/denied 消息，那就有问题了（只应执行检查并返回结果）

- 函数即注释(自描述)

  函数应该简短且只有一个功能

  一个单独的函数不仅更容易测试和调试 => 它的存在本身就是一个很好的注释！

## 代码风格

- 清晰易读

- 垂直方向的缩进

  通过逻辑层次进行划分, 多一些空行

- 函数先调用后声明 => 凸显主逻辑

- [风格指南](https://zh.javascript.info/coding-style#feng-ge-zhi-nan)

  - [Google JavaScript 风格指南](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
  - [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
  - [StandardJS](https://standardjs.com/)

## 忍者代码

- 辛辣的讽刺哟:[忍者代码](https://zh.javascript.info/ninja-code)

  > 大半夜, 逗得我睡不着觉, 哈哈哈, 要笑掉肚子了

## 优化

Optimizations are not required in every place, mostly we need a good code, that’s why it’s used. (recursion)
