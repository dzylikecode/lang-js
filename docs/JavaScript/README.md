# javascript

## preview

<div data-runkit>

```javascript
var R = require("ramda");
var randrange = require("random-number-in-range");
var d3Graph = require("@runkit/runkit/d3-graph/1.0.0");

var count = 100;
var nodes = R.range(0, 100).map((_, x) => ({
  name: x,
  group: Math.floor((x * 7) / count),
}));

var links = R.range(0, Math.floor(count * 1.15)).map(function (_, x) {
  var source = x % count;
  var target = Math.floor(Math.log(1 + randrange(0, count)) / Math.log(1.3));
  var value = 10.0 / (1 + Math.abs(source - target));

  return { source: source, target: target, value: value };
});

d3Graph(nodes, links);
```

</div>

## 哲学

不是要评判编程语言的这个设计是好是坏。而是要了解怎样使用它，如何趋利避害

- 权限划分

  想象一下，有一群开发人员在使用一个咖啡机。这个咖啡机是由“最好的咖啡机”公司制造的，工作正常，但是保护罩被拿掉了。因此内部接口暴露了出来。

  所有的开发人员都是文明的 —— 他们按照预期使用咖啡机。但其中的一个人，约翰，他认为自己是最聪明的人，并对咖啡机的内部做了一些调整。然而，咖啡机两天后就坏了。

  这肯定不是约翰的错，而是那个取下保护罩并让约翰进行操作的人的错。

- 异常处理

  和代码一样, 像函数一样, 处理本层级的异常, 合并低级异常, 抛出给上级

- 一个模块只做一件事

## reference

- [The Modern JavaScript Tutorial](https://javascript.info/)
- [中文版](https://zh.javascript.info/)
