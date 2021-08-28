const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      //arrange    act
      const emplo = new Engineer(
        "bruce",
        666,
        "adamkuemmel@gmail.com",
        "githubUser"
      );

      //assert
      expect(emplo.name).toEqual("bruce");
      expect(emplo.id).toEqual(666);
      expect(emplo.email).toEqual("adamkuemmel@gmail.com");
    });
    it("should throw an err if provided no arguments", () => {
      const emp = () => new Engineer();
      expect(emp).toThrow();
    });
    it("should throw an err if name isnt a string", () => {
      const emp = () => new Engineer(666, 666, "a@gmail.com", "githubUser");
      expect(emp).toThrow();
    });
    it("should throw an err if id isnt a number", () => {
      const emp = () =>
        new Engineer("bruce", "666", "a@gmail.com", "githubUser");
      expect(emp).toThrow();
    });
    it("should throw an err if id is a negative number", () => {
      const emp = () =>
        new Engineer("bruce", -666, "a@gmail.com", "githubUser");
      expect(emp).toThrow();
    });

    it("should throw an err if email isnt an email", () => {
      const emp = () => new Engineer("bruce", 666, 666, "githubUser");
      expect(emp).toThrow();
    });
  });
  describe("getName()", () => {
    it("should return the value of this.name", () => {
      const name = new Engineer("bruce", 666, "a@gmail.com", "githubUser");
      const testName = name.name;
      expect(testName).toEqual("bruce");
    });
  });
  describe("getId()", () => {
    it("should return the value of tthis.id", () => {
      const id = new Engineer("bruce", 666, "a@gmail.com", "githubUser");
      const testId = id.id;
      expect(testId).toEqual(666);
    });
  });
  describe("getEmail()", () => {
    it("should return the value of this.name", () => {
      const email = new Engineer("bruce", 666, "a@gmail.com", "githubUser");
      const testEmail = email.email;
      expect(testEmail).toEqual("a@gmail.com");
    });
  });
  describe("getRole()", () => {
    it("should return the value of this.name", () => {
      const role = new Engineer("bruce", 666, "a@gmail.com", "githubUser");
      const testRole = role.getRole();
      expect(testRole).toEqual("Engineer");
    });
  });
  describe("getGithub()", () => {
    it("should return the value of this.Github", () => {
      const github = new Engineer("bruce", 444, "a@gmail.com", "githubUser");
      const testGit = github.getGithub();
      expect(testGit).toEqual("githubUser");
    });
  });
});
