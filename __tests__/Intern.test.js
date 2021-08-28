const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      //arrange    act
      const emplo = new Intern("bruce", 666, "adamkuemmel@gmail.com", "school");

      //assert
      expect(emplo.name).toEqual("bruce");
      expect(emplo.id).toEqual(666);
      expect(emplo.email).toEqual("adamkuemmel@gmail.com");
    });
    it("should throw an err if provided no arguments", () => {
      const emp = () => new Intern();
      expect(emp).toThrow();
    });
    it("should throw an err if name isnt a string", () => {
      const emp = () => new Intern(666, 666, "a@gmail.com", "school");
      expect(emp).toThrow();
    });
    it("should throw an err if id isnt a number", () => {
      const emp = () => new Intern("bruce", "666", "a@gmail.com", "school");
      expect(emp).toThrow();
    });
    it("should throw an err if id is a negative number", () => {
      const emp = () => new Intern("bruce", -666, "a@gmail.com", "school");
      expect(emp).toThrow();
    });

    it("should throw an err if email isnt an email", () => {
      const emp = () => new Intern("bruce", 666, 666, "school");
      expect(emp).toThrow();
    });
  });
  describe("getName()", () => {
    it("should return the value of this.name", () => {
      const name = new Intern("bruce", 666, "a@gmail.com", "school");
      const testName = name.name;
      expect(testName).toEqual("bruce");
    });
  });
  describe("getId()", () => {
    it("should return the value of tthis.id", () => {
      const id = new Intern("bruce", 666, "a@gmail.com", "school");
      const testId = id.id;
      expect(testId).toEqual(666);
    });
  });
  describe("getEmail()", () => {
    it("should return the value of this.name", () => {
      const email = new Intern("bruce", 666, "a@gmail.com", "school");
      const testEmail = email.email;
      expect(testEmail).toEqual("a@gmail.com");
    });
  });
  describe("getRole()", () => {
    it("should return the value of this.name", () => {
      const role = new Intern("bruce", 666, "a@gmail.com", "school");
      const testRole = role.getRole();
      expect(testRole).toEqual("Intern");
    });
  });
  describe("getSchool()", () => {
    it("should return the value of this.school", () => {
      const github = new Intern("bruce", 444, "a@gmail.com", "school");
      const testGit = github.getSchool();
      expect(testGit).toEqual("school");
    });
  });
});
