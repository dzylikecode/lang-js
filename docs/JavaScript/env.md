# environment

## debug

### developer console

- 可以直接输入 js 命令

  `enter` 运行

  `shift+enter` 多行

### 在浏览器中调试

- 教程:[在浏览器中调试 JavaScript](https://zh.javascript.info/debugging-chrome)

- 控制台

  会显示执行效果和返回值(没有返回值, 则显示`undefined`)

- 断点

  右键行号 => 修改断点 => 添加条件语句, 即条件断点

  添加`debugger`语句, 也可以设置断点

- 查看

  - watch

    可以添加需要查看的变量

  - call stack

    可以查看函数调用栈

  - scope

    可以查看作用域, this 对象, 局部变量, 全局变量

- 输出在控制台上

  `console.log`

- 进阶学习:[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

---

断点技巧:

可以使用`console.log("hi")`来快速定位文件在哪里

或者使用`debugger`来快速定位文件在哪里

---

An error (if dev tools are open and the button is “on”).

可以试试

## VSCode

插件:

### eslint

1. 安装 pkg

   ```bash
   npm install -g eslint
   ```

   ```bash
   npm uninstall -g eslint
   ```

2. 安装插件
3. 初始化

   ```bash
   npm init
   ```

   ```bash
   eslint --init
   ```

   or

   ```bash
   npm init @eslint/config
   ```

4. vscode extension settings

   ```json
   {
     "eslint.format.enable": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

5. 注意不要被 prettier 覆盖

- [Setting up ESLINT in your JavaScript Project with VS Code](https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf)

- [How To Lint and Format Code with ESLint in Visual Studio Code](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)

- [Configuring ESLint](https://eslint.org/docs/latest/user-guide/configuring/)

- [Tutorial - Use Prettier and ESLint in Visual Studio Code | Lint and Format your Code](https://www.youtube.com/watch?v=kWIlrSorqFE)

  recommend

## 文件

### browser

- 绝对路径

  `<script src="/path/to/script.js"></script>`

- 相对路径

  `<script src="./path/to/script.js"></script>`

> 与 linux 路径结构相同

- url 形式

  `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`

!> 嵌入形式和外部导入形式是冲突的

```JavaScript
<script src="file.js">
  alert(1);// 此内容会被忽略，因为设定了 src
</script>
```

---

加载过程:

使用独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 缓存 中。

之后，其他页面想要相同的脚本就会从缓存中获取，而不是下载它。所以文件实际上只会下载一次。

## 兼容性

Polyfill 和转译器

JavaScript 是一种高度动态的语言。脚本可以添加/修改任何函数，甚至包括内建函数。

学习现代甚至“前沿”的语言特性，即使 JavaScript 引擎还没有很好地支持它们

只是不要忘记使用转译器（如果使用现代语法或运算符）和 polyfill（添加可能缺少的特性）。它们将确保代码能正常工作
