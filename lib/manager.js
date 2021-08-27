var validator = require("validator");
var employee = require("./employee");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    if (
      typeof officeNumber !== "number" ||
      isNaN(officeNumber) ||
      officeNumber < 0
    ) {
      throw new Error("Expected parameter 'officenumber' to be a number");
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
// const newEmp = new Employee("adam", 28, "adamkuemmel@gmail.com");

module.exports = Manager;
