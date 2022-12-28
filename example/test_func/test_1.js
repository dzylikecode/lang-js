// environment: node
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

const user = makeUser();

console.log(user.ref == makeUser); // false
console.log(user.ref == user); // false
console.log(user.ref == globalThis); // true
console.log(user.ref.name); // undefined
