var validator = require("validator");
class manager extends employee {
  constructor(name, id, email, officeNumber) {
    if (typeof officeNumber !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'officenumber' to be a number");
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
}
// const newEmp = new Employee("adam", 28, "adamkuemmel@gmail.com");

module.exports = Employee;
