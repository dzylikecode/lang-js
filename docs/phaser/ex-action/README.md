# action

## Grid Align

可以继承`Phaser.Scene`, 然后配置

---

```js
const group = this.add.group({
  key: "diamonds",
  frame: [0, 1, 2, 3, 4],
  frameQuantity: 20, // 相当于每个0有20个, 1 有20个
});
```

---

```js
Phaser.Actions.GridAlign(group.getChildren(), {
  width: 10, //将对象分成10列
  height: 10, // 分成10行
  cellWidth: 32,
  cellHeight: 32,
  x: 100,
  y: 100,
});
```

### 总结

可以快速生成网格

## Inc X Layers

---

通过 json 文件将图片分解成帧

```js
this.load.atlas(
  "atlas",
  "assets/tests/fruit/veg.png",
  "assets/tests/fruit/veg.json"
);
```

---

- [create 参数](https://newdocs.phaser.io/docs/3.54.0/Phaser.GameObjects.Group#create)

```js
this.groupA = this.add.group();

for (var i = 0; i < 1000; i++) {
  this.groupA.create(
    100 + Math.random() * 600,
    100 + Math.random() * 400,
    "atlas",
    "veg0" + Math.floor(1 + Math.random() * 9)
  );
}
```

---

- [移动](https://newdocs.phaser.io/docs/3.55.2/Phaser.Actions#IncX)和[旋转](https://newdocs.phaser.io/docs/3.55.2/Phaser.Actions#Rotate)

```js
Phaser.Actions.IncX(this.groupA.getChildren(), Math.cos(this.move));
Phaser.Actions.Rotate(this.groupA.getChildren(), 0.01); // 顺时针
```

`IncX`给列表中的每个对象的`x`属性赋值, 不是给偏移量

## Place On A Circle Multi

- repeat 与 frameQuantity 参数

  [0 1 2]

  - repeat:2

    [0 1 2 0 1 2 0 1 2]

    3 次

  - frameQuantity:2

    [0 0 1 1 2 2]

    2 次

[processing | 从缓动开始](https://zhuanlan.zhihu.com/p/412265579)

[tween](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tween/?h=tween)
