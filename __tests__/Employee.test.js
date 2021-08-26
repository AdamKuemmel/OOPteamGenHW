const Employee = require("../lib/employee");

describe("employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      //arrange    act
      const emplo = new Employee("bruce", 666, "adamkuemmel@gmail.com");

      //assert
      expect(emplo.name).toEqual("bruce");
      expect(emplo.id).toEqual(666);
      expect(emplo.email).toEqual("adamkuemmel@gmail.com");
    });
    it("should throw an err if provided no arguments", () => {
      const emp = () => new Employee();
      expect(emp).toThrow();
    });
    it("should throw an err if name isnt a string", () => {
      const emp = () => new Employee(666, 666, "a@gmail.com");
      expect(emp).toThrow();
    });
    it("should throw an err if id isnt a number", () => {
      const emp = () => new Employee("bruce", "666", "a@gmail.com");
      expect(emp).toThrow();
    });
    it("should throw an err if id is a negative number", () => {
      const emp = () => new Employee("bruce", -666, "a@gmail.com");
      expect(emp).toThrow();
    });

    it("should throw an err if email isnt an email", () => {
      const emp = () => new Employee("bruce", 666, 666);
      expect(emp).toThrow();
    });
  });
  describe("getName()", () => {
    it("should return the value of this.name", () => {
      const name = new Employee("bruce", 666, "a@gmail.com");
      const testName = name.name;
      expect(testName).toEqual("bruce");
    });
  });
  describe("getId()", () => {
    it("should return the value of tthis.id", () => {
      const id = new Employee("bruce", 666, "a@gmail.com");
      const testId = id.id;
      expect(testId).toEqual(666);
    });
  });
  describe("getEmail()", () => {
    it("should return the value of this.name", () => {
      const email = new Employee("bruce", 666, "a@gmail.com");
      const testEmail = email.email;
      expect(testEmail).toEqual("a@gmail.com");
    });
  });
  describe("getRole()", () => {
    it("should return the value of this.name", () => {
      const role = new Employee("bruce", 666, "a@gmail.com");
      const testRole = role.getRole();
      expect(testRole).toEqual("employee");
    });
  });
});
