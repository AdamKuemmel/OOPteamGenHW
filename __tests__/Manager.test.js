// check that office number is a number not a string
const Manager = require("../lib/manager");

descriibe("Manager", () => {
  it(
    "should create an object titled manager with an office number and override getRole()"
  );
  const man = new Manager(204, Manager);
});
