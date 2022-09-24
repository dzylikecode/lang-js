# basic tutorial

## 展示

[](../../../phaser/001-simple-game/index.html ":include :type=iframe")

## 教程

- 参见:[Phaser 3 入门实例教程](http://phaser.io/tutorials/making-your-first-phaser-3-game-chinese)

### 基础知识

- `config` 的参数

  - `type`

    Phaser.CANVAS 或 Phaser.WEBGL 或 Phaser.AUTO

    指示渲染环境（context）

    推荐 Phaser.AUTO

    Phaser 生成的 canvas element 将径直添加到文档中调用脚本的那个节点上

    也可以在游戏配置中指定一个父容器

  - `width`和`height`

    canvas element 的宽高

  - `physics`

    确定物理系统, `'arcade'`是其中一个物理系统

    已经装有 Arcade, Impact, Matter.js 三种物理系统

    动态设置重力 `player.body.setGravityY(400)`

  - `scene`

    本身没有尺寸, 所有方向上都是无限延展的, `camera`系统控制视角

- `load.image`

  将加载的图片资源和字符串映射起来

- `add.image`

  将 `image` 添加到当前 `scene` 的 `display list` 中

  - 参数`x`和`y`

    所有游戏对象的定位都默认基于它们的中心点

    可以通过`setOrigin`改变

    比如`this.add.image(0, 0, 'sky').setOrigin(0, 0)`(或者属性`originX` 和 `originY`), 将把图像的绘制定位点重置为左上角

    > 图片的位置和图片的定位位置似乎不用管先后顺序

  注意加载顺序, 图像显示顺序和生成顺序是一致的

- `静态物体`与`动态物体`

  - 动态

    可以通过外力比如速度（velocity）、加速度（acceleration），得以四处移动。它可以跟其他对象发生反弹（bounce）、碰撞（collide），此类碰撞受物体质量和其他因素影响

  - 静态

    静态物体只有位置和尺寸。重力对它没有影响

    不能给它设置速度，有东西跟它碰撞时，它一点都不动

    - `refreshBody`

      静态物体发生改变时, 需要通过函数调用通知引擎

- `setBounce`

  设置反弹值

  0: 不反弹

  1: 完全反弹

- 动画

  ```javascript
  this.anims.create({
    key: "left", // 纹理的键值
    frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }), //0, 1, 2, 3 帧
    frameRate: 10, //跑动时每秒 10 帧
    repeat: -1, //循环播放
  });
  ```

  `Animation Manager`是全局系统。生成的动画是全局变量，所有游戏对象都能用到它们。

  它们分享基础的动画数据，同时管理自己的时间轴（timeline）。这就使我们能够在某时定义一个动画，却可以应用到任意多的游戏对象上

- 碰撞器`collider`

  接收两个对象，检测二者之间的碰撞，并使二者分开

- 下降

  ```javascript
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
  }
  ```

  设置初始速度为 -330, 此时玩家未被接触

  重力作用下，玩家会下降, 在接触到地面时, 又可以设置了

### 主逻辑

- 布置场景

  添加背景图

  添加地板

- 添加玩家

  - 玩家的加载

  - 玩家的控制 => 放在 update 里面

  - 添加碰撞器

    - 地板 => 简单碰撞
    - 星星

      回调函数处理

- 添加星星

- 显示分数

  - 碰撞到星星时才更新显示

- 添加炸弹

  和星星类似, 效果相反

## reference

- [code](https://github.com/dzylikecode/lang-js/blob/master/phaser/001-simple-game/main.js)
