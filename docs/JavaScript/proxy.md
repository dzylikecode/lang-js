# proxy

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // birthday 是可访问的
alert(john.age); // ……age 也是可访问的
```

## property

属性标志和属性描述符

!> configurable: false prevents changes of property flags and its deletion, while allowing to change its value. [^modern descriptors]

---

复制属性

```js
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

连同属性标志一起复制

## accessor

getter/setter

!> Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both. [^modern get set]

---

应用场景

- 智能化处理

  在读写的时候做一些额外的操作, 使得更为智能

- 兼容性

## References

1. [-modern descriptors] [Property flags and descriptors](https://javascript.info/property-descriptors)
2. [-modern get set] [Property getters and setters](https://javascript.info/property-accessors)
