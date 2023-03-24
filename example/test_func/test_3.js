// environment: node
function makeUser() {
  return {
    name: "John",
    ref() {
      return {
        name: "Alan",
        ref: this,
        ref_func() {
          return this;
        },
      };
    },
  };
}

const sub1 = makeUser();
const user = sub1.ref();

console.log(user.ref == makeUser); // false
console.log(user.ref == sub1); // true
console.log(user.ref == user); // false
console.log(user.ref == globalThis); // false
console.log(user.ref.name); // John
console.log(user.ref_func().name); // Alan

const ref_direct = user.ref_func;
console.log(ref_direct().name); // undefined
console.log(ref_direct() == globalThis); // true
