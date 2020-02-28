const request = require("supertest");
const server = require("../api/server");

describe("jokes router", function() {
  it("should run the jokes tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /api/jokes", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return jokes as the router value", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });

    it("should return JSON formatted body", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return an array of jokes", async function() {
      const res = await request(server).get("/api/jokes");

      expect(Array.isArray(res.body)).toBe(true);
    });
  });
});
