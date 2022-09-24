# 原型-继承

## 原型继承

- 只支持单继承

  不能形成闭环

- 原型链

  ```javascript
  let animal = {
    eats: true,
  };

  let rabbit = {
    jumps: true,
  };

  rabbit.__proto__ = animal;

  alert(rabbit.eats); // true

  alert(animal.jumps); // undefined

  // 通过原型链, rabbit 可以访问到 animal 的属性
  ```

  `rabbit`访问不到的属性, 会沿着原型链向上查找(递归)

- `__proto__` 是`[[Prototype]]`的 getter/setter

  现代编程语言建议我们应该使用函数 `Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 `get/set` 原型

  但是, `__proto__` 所有环境都支持

- 写入不使用原型

  ```javascript
  let animal = {
    eats: true,
    walk() {
      /* rabbit 不会使用此方法 */
    },
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.walk = function () {
    alert("Rabbit! Bounce-bounce!");
  };

  rabbit.walk(); // Rabbit! Bounce-bounce!
  ```

  `walk` 方法被写入到 `rabbit` 中, 不会覆盖 `animal` 中的方法

  - 访问器属性是个例外, 因为会调用父类的`setter`

- this 不会发生改变

  当子类调用父类方法, 父类中的 this 是子类, 此时子类会递归地从自己往上找属性

- 遍历

  - `for..in` 会遍历所有可枚举的属性, 包括原型链上的属性

    ```javascript
    let animal = {
      eats: true,
    };

    let rabbit = {
      jumps: true,
      __proto__: animal,
    };

    for (let prop in rabbit) {
      let isOwn = rabbit.hasOwnProperty(prop);

      if (isOwn) {
        alert(`Our: ${prop}`); // Our: jumps
      } else {
        alert(`Inherited: ${prop}`); // Inherited: eats
      }
    }
    ```

    `rabbit.hasOwnProperty(prop);` 可以判断属性是否是自身的

  - `Object.keys` 只会返回自身的可枚举属性

    ```javascript
    let animal = {
      eats: true,
    };

    let rabbit = {
      jumps: true,
      __proto__: animal,
    };

    alert(Object.keys(rabbit)); // jumps
    ```

## function.prototype

- 针对 new 使用

  ```javascript
  let animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

  alert(rabbit.eats); // true
  ```

  在构造函数时, 会设置 `this.__proto__ = func.prototype`

  默认情况下, `func.prototype` 是函数本身, 方便于被引用

  ```javascript
  function Rabbit(name) {
    this.name = name;
    alert(name);
  }

  let rabbit = new Rabbit("White Rabbit");

  let rabbit2 = new rabbit.constructor("Black Rabbit");
  ```

  `rabbit.constructor` 是 `Rabbit`

  也可以手动创建

## 原生的原型

很多内建对象都在`prototype`上定义了方法

基本类型的包装器也有, 因为它们有包装器

因此可以从`prototype`上继承,借用, 修改方法

- 函数的原型`Function.prototype`

## 原型方法

- `Object.create(proto, [descriptors])`

  创建一个新对象, 使用现有的对象来提供新创建的对象的`__proto__`

  ```javascript
  let animal = {
    eats: true,
  };

  let rabbit = Object.create(animal);

  alert(rabbit.eats); // true
  ```

  第二个参数是可选的, 用于描述新对象的属性

  ```javascript
  let animal = {
    eats: true,
  };

  let rabbit = Object.create(animal, {
    jumps: {
      value: true,
    },
  });

  alert(rabbit.jumps); // true
  ```

- `Object.getPrototypeOf(obj)`

  返回对象的`__proto__`

- `Object.setPrototypeOf(obj, proto)`

  设置对象的`__proto__`

- [原型简史](https://zh.javascript.info/prototype-methods#yuan-xing-jian-shi)
