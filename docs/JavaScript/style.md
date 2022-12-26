# style

## comment

- JSDoc: https://jsdoc.app/index.html

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