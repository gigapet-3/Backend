const db = require("../database/dbConfig.js");
const request = require("supertest");
const server = require("../api/server.js");

describe("auth-router", function() {
  describe("POST /login", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should login user", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
