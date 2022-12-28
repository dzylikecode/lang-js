// environment: node
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

const user = makeUser();

console.log(user.ref() == makeUser); // false
console.log(user.ref() == user); // true
console.log(user.ref() == globalThis); // false
console.log(user.ref().name); // John
