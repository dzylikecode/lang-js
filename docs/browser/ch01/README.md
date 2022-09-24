# document

## 浏览器环境-规格

![](assets/2022-08-24-08-39-49.png)

- window => "根"对象

  - 它是 JavaScript 代码的全局对象
  - 代表"浏览器窗口",并提供了控制它的方法

- 文档对象模型(DOM)

  - 将所有页面内容表示为可以修改的对象

- 浏览器对象模型(BOM)

  表示由浏览器(主机环境)提供的用于处理文档(document)之外的所有内容的其他对象

  - eg

    - navigator 对象提供了有关浏览器和操作系统的背景信息
    - location 对象允许我们读取当前 URL,并且可以将浏览器重定向到新的 URL

## DOM 树

- DOM 是一个树的结构

  - html 的任何部分都对应着树

    - 包括注释
    - 换行, 空格, tab 都会被树给包含(通常被工具隐藏), 形成文本节点
    - 表格永远有`<tbody>`标签

  - 树由节点构成

    每个节点都是对象

    - 标签被称为元素节点(或元素)
    - 文本被称为文本节点
    - 注释节点
    - document => DOM 入口点

- `$0`表示当前选中元素(控制台变量)

- 参考: [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## 遍历 DOM

- 结构

  ![](assets/2022-08-24-19-22-20.png)

- 顶层

  `<html> = document.documentElement`

  `<body> = document.body`

  `<head> = document.head`

  !> `<head>` 中的 `<script>` 访问不到 `<body>`, 因为此时 `<body>` 还没有加载, 也就是`<script>` 只能看到它之前的内容

- 子节点

  - `childNodes` 所有子节点

    文本节点, 元素节点, 注释节点等

    性质为集合, 只读, 可迭代

  - `firstChild` 第一个子节点

    `elem.firstChild == elem.childNodes[0]`

  - `lastChild` 最后一个子节点

    `elem.lastChild == elem.childNodes[elem.childNodes.length - 1]`

- 兄弟节点

  - `nextSibling` 下一个兄弟节点
  - `previousSibling` 前一个兄弟节点

- 父节点

  - `parentNode` 父节点

- 纯元素导航

  - `children` 所有子元素
  - `firstElementChild` 第一个子元素
  - `lastElementChild` 最后一个子元素
  - `nextElementSibling` 下一个兄弟元素
  - `previousElementSibling` 前一个兄弟元素
  - `parentElement` 父元素

    `parentElement`与`parentNode`的区别是, 当父节点是`document`时, `parentElement`返回`null`

- [表格](https://zh.javascript.info/dom-navigation#dom-navigation-tables)

## 搜索

- 通过 id

  - 函数`document.getElementById(id)`

  - id 即是全局变量

    ```js
    <div id="elem">
    <div id="elem-content">Element</div>
    </div>

    <script>
    // elem 是对带有 id="elem" 的 DOM 元素的引用
    elem.style.background = 'red';

    // id="elem-content" 内有连字符，所以它不能成为一个变量
    // ...但是我们可以通过使用方括号 window['elem-content'] 来访问它
    </script>
    ```

    !> 不推荐, 容易与命名冲突, 而且不容易分析 js 中变量的来源

- 通过 CSS 选择器

  [CSS 选择器](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

  - 函数 `document.querySelectorAll(css_selector)`

    返回的是所有匹配的列表

    返回第一个, `document.querySelector()`

  > getElementByTagName 而不是 getElementsByTagName

!> `getElementsBy*` 方法都会返回一个 实时的(live) 集合, 即如果有元素添加, 会更新; 而 `querySelectorAll` 返回的是一个静态的集合, 即如果有元素添加, 不会更新, 除非重新使用 `querySelectorAll` 获取
