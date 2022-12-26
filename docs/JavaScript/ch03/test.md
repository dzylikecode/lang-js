# test frame

## 忍者代码

- 辛辣的讽刺哟:[忍者代码](https://zh.javascript.info/ninja-code)

  > 大半夜, 逗得我睡不着觉, 哈哈哈, 要笑掉肚子了

## 自动化测试

使用 Mocha 进行自动化测试

- 来源场景

  避免修复一个问题却造成了另一个问题

- 解决方法

  对所有的案例进行测试, 自动化测试

  - 开发的过程就是不断迭代

    写规范, 实现它, 确保通过测试, 然后写更多的测试

- 行为驱动开发技术([BDD](https://en.wikipedia.org/wiki/Behavior-driven_development))

  - 测试 => 确保代码符合预期
  - 文档 => describe 和 it 描述函数做了什么
  - 示例 => 一个函数如何被使用

### 一个案例

- [案例](https://zh.javascript.info/testing-mocha#kai-fa-pow-gui-fan)

- 规范

  创建代码之前, 应该想象函数应该是怎样的并且描述出来

  - 包含 => 用例的描述和针对用例的测试

- 哲学

  - 一个测试检测一个东西

    ```javascript
    describe("pow", function () {
      it("2 raised to power 3 is 8", function () {
        assert.equal(pow(2, 3), 8);
      });

      it("3 raised to power 4 is 81", function () {
        assert.equal(pow(3, 4), 81);
      });
    });
    ```

  - 划分层级

    ```javascript
    describe("pow", function () {
      describe("raises x to power 3", function () {
        function makeTest(x) {
          let expected = x * x * x;
          it(`${x} in the power 3 is ${expected}`, function () {
            assert.equal(pow(x, 3), expected);
          });
        }

        for (let x = 1; x <= 5; x++) {
          makeTest(x);
        }
      });

      // ……可以在这里写更多的测试代码，describe 和 it 都可以添加在这。
    });
    ```

    ![](assets/2022-08-06-17-18-52.png)

    > 类似 markdown 的层级划分, 将 makeTest 等辅助函数限定在一个代码块内

### 测试框架

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- add mocha css, to show results -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css"
    />
    <!-- add mocha framework code -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
    <script>
      mocha.setup("bdd"); // minimal setup
    </script>
    <!-- add chai -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
    <script>
      // chai has a lot of stuff, let's make assert global
      let assert = chai.assert;
    </script>
  </head>

  <body>
    <script>
      function pow(x, n) {
        /* function code is to be written, empty now */
      }
    </script>

    <!-- the script with tests (describe, it...) -->
    <script src="test.js"></script>

    <!-- the element with id="mocha" will contain test results -->
    <div id="mocha"></div>

    <!-- run tests! -->
    <script>
      mocha.run();
    </script>
  </body>
</html>
```

- 结构

  - `<head>` => 引入库
  - `<script>` => 实现代码
  - `test.js` => 测试代码
  - `id = "mocha"` => 测试结果
  - `mocha.run()` => 运行测试

### reference

- [使用 Mocha 进行自动化测试](https://zh.javascript.info/testing-mocha)
- [Getting Started with Node.js and Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
- [What is the role of describe() in Mocha?](https://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha)

## Polyfill 和转译器

JavaScript 是一种高度动态的语言。脚本可以添加/修改任何函数，甚至包括内建函数。

学习现代甚至“前沿”的语言特性，即使 JavaScript 引擎还没有很好地支持它们

只是不要忘记使用转译器（如果使用现代语法或运算符）和 polyfill（添加可能缺少的特性）。它们将确保代码能正常工作