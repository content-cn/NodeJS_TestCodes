const path = require("path");
const fs = require("fs");

describe("Files have .mjs extension and data is logged as expected", () => {
  test("The files should have .mjs extension", () => {
    const appFilePath = path.join(__dirname, "app.mjs");
    const mathFilePath = path.join(__dirname, "math.mjs");
    const appFileExists = fs.existsSync(appFilePath);
    const mathFileExists = fs.existsSync(mathFilePath);

    expect(appFileExists).toBe(true);
    expect(mathFileExists).toBe(true);
  });
});
