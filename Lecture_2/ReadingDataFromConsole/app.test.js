const readline = require("readline");
const Solution = require("./src/index");

const createInterfaceSpy = jest
  .spyOn(readline, "createInterface")
  .mockReturnValue({
    question: jest
      .fn()
      .mockImplementationOnce((question, cb) => cb("5"))
      .mockImplementationOnce((question, cb) => cb("10")),
    close: jest.fn(),
  });

const consoleSpy = jest.spyOn(console, "log");

describe("get max", () => {
  it("returns the maximun of two numbers", () => {
    Solution();

    expect(createInterfaceSpy).toHaveBeenCalledTimes(1);
    expect(
      createInterfaceSpy.mock.results[0].value.question
    ).toHaveBeenCalledTimes(2);

    expect(consoleSpy.mock.calls[0][0]).toMatch(
      /the maximum of the two numbers is: \d+/i
    );
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    readline.createInterface.mockRestore();
  });
});
