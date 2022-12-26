# 简介

## developer console

- 可以直接输入 js 命令

  `enter` 运行

  `shift+enter` 多行

## VSCode

插件:

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
