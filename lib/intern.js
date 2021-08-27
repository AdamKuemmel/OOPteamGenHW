const employee = require("./employee");

class intern extends employee {
  constructor(name, id, email, school) {
    if (typeof school !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    console.log(id);
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = intern;
