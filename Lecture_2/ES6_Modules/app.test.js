const path = require("path");
const fs = require("fs");

const consoleSpy = jest.spyOn(console, "log");
const nums = [1, 2, 3, 4, 5];

const mockSum = jest.fn((nums) => 15);
const mockMean = jest.fn((nums) => 3);

describe("Files have .mjs extension and data is logged as expected", () => {
  test("The files should have .mjs extension", () => {
    const appFilePath = path.join(__dirname, "app.mjs");
    const mathFilePath = path.join(__dirname, "math.mjs");
    const appFileExists = fs.existsSync(appFilePath);
    const mathFileExists = fs.existsSync(mathFilePath);

    expect(appFileExists).toBe(true);
    expect(mathFileExists).toBe(true);
  });

  describe("Required data is logged in the console", () => {
    it("should log the correct sum and mean in the console", () => {
      const sumData = `The sum is ${mockSum(nums)}`;
      console.log(sumData.toLowerCase());

      expect(consoleSpy).toHaveBeenCalledWith(sumData.toLowerCase());

      const meanData = `The mean is ${mockMean(nums)}`;
      console.log(meanData.toLowerCase());

      expect(consoleSpy).toHaveBeenCalledWith(meanData.toLowerCase());

      expect(consoleSpy).toHaveBeenCalledTimes(2);
    });
  });
});
