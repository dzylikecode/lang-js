const user = {
  name: "User",
  testFunc() {
    console.log(`****${this.name}****`);
    console.log("execute arrow function directly:");
    execute(() => this.name);
    console.log("execute arrow function by Admin:");
    executeByAdmin(() => this.name);
    console.log("execute normal function by Admin");
    executeByAdmin(function () {
      return this.name;
    });
  },
};

const admin = {
  name: "Admin",
};

function execute(callback) {
  const res = callback();
  console.log(res);
}

function executeByAdmin(callback) {
  admin.executeByAdmin = callback;
  console.log(admin.executeByAdmin());
}

user.testFunc();
admin.testFunc = user.testFunc;
admin.testFunc();
