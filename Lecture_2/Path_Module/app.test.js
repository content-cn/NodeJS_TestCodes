const path = require("path");
const { Solution } = require("./src/index");
const { getAbsolutePath } = require("./src/module");
const consoleSpy = jest.spyOn(console, "log");

describe("Required data is logged in the console", () => {
  it("should log the correct message in the console", () => {
    Solution();
    const filePath = path.join("src", "file.txt");

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(path.isAbsolute(getAbsolutePath(filePath))).toBe(true);
    expect(consoleSpy.mock.calls[0][0]).toBe(getAbsolutePath(filePath));

    consoleSpy.mockRestore();
  });
});
