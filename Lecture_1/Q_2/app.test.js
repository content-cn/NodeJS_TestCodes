const request = require("supertest");
const server = require("./implement");
const fs = require("fs");

beforeAll(() => {
  require("./implement");
});

afterAll(async () => {
  await server.close();
});

describe("Server runs correctly", () => {
  test("It should return the required HTML string and status code", async () => {
    const response = await request(server).get("/");
    const htmlString = fs.readFileSync("index.html").toString();

    expect(response.status).toBe(200);
    expect(response.text).toMatch(htmlString);
  });
});
