const request = require("supertest");
const server = require("./implement");

beforeAll(() => {
  require("./implement");
});

afterAll(async () => {
  await server.close();
});

describe("Server runs correctly", () => {});
