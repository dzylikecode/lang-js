# test frame

Automated testing means that tests are written separately, in addition to the code. They run our functions in various ways and compare results with the expected.

一个迭代的过程

To write tests, the code should be organized in such a way that every function has a clearly described task, well-defined input and output. That means a good architecture from the beginning.

## 自动化测试

使用 Mocha 进行自动化测试

- 来源场景

  避免修复一个问题却造成了另一个问题

- 解决方法

  分离测试代码与解决方案代码

  对所有的案例进行测试, 自动化测试

  - 开发的过程就是不断迭代

    写规范, 实现它, 确保通过测试, 然后写更多的测试

- 行为驱动开发技术 [^wiki bdd]

  - 测试 => 确保代码符合预期
  - 文档 => describe 和 it 描述函数做了什么
  - 示例 => 一个函数如何被使用

## example

- [案例](https://zh.javascript.info/testing-mocha#kai-fa-pow-gui-fan)
- [测试框架](/example/automate_test/README.md)

- 规范

  创建代码之前, 应该想象函数应该是怎样的并且描述出来

  - 包含 => 用例的描述和针对用例的测试

## 规范

- 一个测试检测一个东西

  一个`it`里面只检测一个结果

- 划分层级

  凸显自己的目的

  比如, 这一块是检测基本功能, 另一块是测试边界条件(n 为负数的情况), 还有缺少的功能等等

- 多使用函数来辅助

  ```js
  function testSum(a, b) {
    it(`${a} + ${b} = ${a + b}`, () => {
      assert.equal(sum(a, b), a + b);
    });
  }
  ```

## References

1. [使用 Mocha 进行自动化测试](https://zh.javascript.info/testing-mocha)
2. [Getting Started with Node.js and Mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
3. [What is the role of describe() in Mocha?](https://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha)
4. [-wiki bdd] [Behavior-driven development - Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
