const { Solution } = require("./app");
const consoleSpy = jest.spyOn(console, "log");

describe("Required data is logged in the console", () => {
  it("should log the correct sum and mean in the console", () => {
    Solution();
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy.mock.calls[0][0]).toMatch(/the sum is \d+/i);
    expect(consoleSpy.mock.calls[1][0]).toMatch(/the mean is \d+/i);
  });
});
