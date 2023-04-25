const path = require("path");
const fs = require("fs");
const { getAbsolutePath } = require("./src/module");

const consoleSpy = jest.spyOn(console, "log");

describe("Required data is logged in the console", () => {
  it("should log the correct message in the console", () => {
    const pathToFile = path.join("src", "file.txt");

    const absPath = getAbsolutePath(pathToFile);

    const data = fs.readFileSync(absPath, "utf-8");

    console.log(data);

    expect(consoleSpy).toHaveBeenCalledWith(data);
    expect(consoleSpy).toHaveBeenCalledTimes(1);

    consoleSpy.mockRestore();
  });
});
