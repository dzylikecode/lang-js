# 加载画面

## 效果

[](code.html ":include :type=iframe width=800px height=600px")

## 素材

- sky

  ![](https://labs.phaser.io/assets/skies/space3.png)

- logo

  ![](https://labs.phaser.io/assets/sprites/phaser3-logo.png)

- red

  ![](https://labs.phaser.io/assets/particles/red.png)

## 逻辑

- 加载图片
- 创建`logo`对象
  - 能移动, 反弹
- 创建`particle`
  - 跟踪`logo`

### 创建`particle`

```js
let particles = this.add.particles("red");

let emitter = particles.createEmitter({
  speed: 100,
  scale: { start: 1, end: 0 },
  blendMode: "ADD",
});
```

- `start`: 开始大小

  可以为浮点数

  数值为缩放大小

  1 表示原本大小

- `end`: 结束大小

  0: 表示结束时, 没有

> 可以改变大小试试, 挺好玩的

- watchlist

  - [ ] 添加一个 scrollbar 来改变大小玩玩

## 代码

[](code.html ":include :type=code html")
