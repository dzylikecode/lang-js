# 对象属性配置

## 属性标志和属性描述符

- 属性

  - `value` 表示值
  - `writable` 表示是否可写

    - `true` 可写
    - `false` 不可写

  - `enumerable` 表示是否可枚举

    - `true` 可枚举
    - `false` 不可枚举

    `for ... in` 语句和 `Object.keys()` 方法只能枚举可枚举的属性

  - `configurable` 表示是否可配置

    - `true` 可配置
    - `false` 不可配置

    只有可配置的属性才能使用 `delete` 删除，也能修改属性的其他特性

    不能修改属性的特性，也不能把属性修改为访问器属性 => 即这是不可逆的操作

  获取方法 => `let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)`

- 修改

  - [`Object.defineProperty(obj, propertyName, descriptor)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

  - [`Object.defineProperties(obj, descriptors)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)

- 复制属性

  - [`Object.getOwnPropertyDescriptors(obj)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)

  `let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))`

  连同属性标志一起复制

- [设定一个全局的密封对象](https://zh.javascript.info/property-descriptors#she-ding-yi-ge-quan-ju-de-mi-feng-dui-xiang)

## getter 和 setter

- 属性类型

  - 数据属性
  - 访问器属性

    `get` 和 `set` 方法

  只能其中一种

- 形式

  ```javascript
  let obj = {
    get propName() {
      // 当读取 obj.propName 时，getter 起作用
    },

    set propName(value) {
      // 当执行 obj.propName = value 操作时，setter 起作用
    },
  };
  ```

- 访问器的描述符

  - `get`

    没有参数, 在读取属性时调用

  - `set`

    一个参数, 在写入属性时调用

  - `enumerable`

    表示是否可枚举

  - `configurable`

    表示是否可配置

- 应用场景

  - 智能化处理

    在读写的时候做一些额外的操作, 使得更为智能

  - 兼容性

    它们允许随时通过使用 getter 和 setter 替换“正常的”数据属性，来控制和调整这些属性的行为
