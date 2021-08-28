const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      //arrange    act
      const emplo = new Manager("bruce", 111, "adamkuemmel@gmail.com", 555);

      //assert
      expect(emplo.name).toEqual("bruce");
      expect(emplo.id).toEqual(111);
      expect(emplo.email).toEqual("adamkuemmel@gmail.com");
    });
    it("should throw an err if provided no arguments", () => {
      const emp = () => new Manager();
      expect(emp).toThrow();
    });
    it("should throw an err if name isnt a string", () => {
      const emp = () => new Manager(111, 111, "a@gmail.com", 555);
      expect(emp).toThrow();
    });
    it("should throw an err if id isnt a number", () => {
      const emp = () => new Manager("bruce", "111", "a@gmail.com", 555);
      expect(emp).toThrow();
    });
    it("should throw an err if id is a negative number", () => {
      const emp = () => new Manager("bruce", -111, "a@gmail.com", 555);
      expect(emp).toThrow();
    });

    it("should throw an err if email isnt an email", () => {
      const emp = () => new Manager("bruce", 111, 111, 555);
      expect(emp).toThrow();
    });
  });
  describe("getName()", () => {
    it("should return the value of this.name", () => {
      const name = new Manager("bruce", 111, "a@gmail.com", 555);
      const testName = name.name;
      expect(testName).toEqual("bruce");
    });
  });
  describe("getId()", () => {
    it("should return the value of tthis.id", () => {
      const id = new Manager("bruce", 111, "a@gmail.com", 555);
      const testId = id.id;
      expect(testId).toEqual(111);
    });
  });
  describe("getEmail()", () => {
    it("should return the value of this.name", () => {
      const email = new Manager("bruce", 111, "a@gmail.com", 555);
      const testEmail = email.email;
      expect(testEmail).toEqual("a@gmail.com");
    });
  });
  describe("getRole()", () => {
    it("should return the value of this.name", () => {
      const role = new Manager("bruce", 111, "a@gmail.com", 555);
      const testRole = role.getRole();
      expect(testRole).toEqual("Manager");
    });
  });
  describe("getOfficeNumber()", () => {
    it("should return the value of this.school", () => {
      const office = new Manager("bruce", 444, "a@gmail.com", 555);
      const testGit = office.getOfficeNumber();
      expect(testGit).toEqual(555);
    });
  });
});
