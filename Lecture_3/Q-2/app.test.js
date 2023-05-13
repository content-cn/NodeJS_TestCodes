import server from "./index";
import request from "supertest";
import fs from "fs";

const consoleSpy = jest.spyOn(console, "log");
const payload = { message: "Be yourself; everyone else is already taken." };

describe("server", () => {
  it("should handle POST requests and append the request body data to a file", async () => {
    const response = await request(server).post("/").send(payload);

    expect(response.status).toBe(200);
    expect(consoleSpy.mock.calls[0][0]).toMatch(
      /be yourself; everyone else is already taken./i
    );

    await server.close();
  });
});
