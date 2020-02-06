const request = require("supertest");
const db = require("../database/dbConfig.js");
const pet = require("../api/server");

describe("pets-router", function() {
  describe("GET /jokes", function() {
    it("should get 401", function() {
      return request(pet)
        .get("/api/pets")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});
