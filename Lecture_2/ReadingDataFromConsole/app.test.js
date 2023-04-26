const readline = require("readline");

jest.spyOn(readline, "createInterface").mockReturnValue({
  question: jest
    .fn()
    .mockImplementationOnce((question, cb) => cb("5"))
    .mockImplementationOnce((question, cb) => cb("10")),
  close: jest.fn(),
});

describe("get max", () => {
  it("returns the maximun of two numbers", () => {
    const consoleSpy = jest.spyOn(console, "log");

    expect(consoleSpy).toHaveBeenCalledWith();
    readline.createInterface.mockRestore();
  });
});
