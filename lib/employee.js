var validator = require("validator");

class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }
    if (validator.isEmail(email) == false) {
      throw new Error('expected parameter "email" to be a valid email address');
    }
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// const newEmp = new Employee("adam", 28, "adamkuemmel@gmail.com");

module.exports = Employee;
