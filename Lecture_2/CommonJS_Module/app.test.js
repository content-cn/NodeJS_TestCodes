const { sum, mean } = require("./math");

const consoleSpy = jest.spyOn(console, "log");
const nums = [1, 2, 3, 4, 5];

describe("Required data is logged in the console", () => {
  it("should log the correct sum and mean in the console", () => {
    const sumData = `The sum is ${sum(nums)}`;
    console.log(sumData.toLowerCase());

    expect(consoleSpy).toHaveBeenCalledWith(sumData.toLowerCase());
    expect(sumData).toContain("15");

    const meanData = `The mean is ${mean(nums)}`;
    console.log(meanData.toLowerCase());

    expect(consoleSpy).toHaveBeenCalledWith(meanData.toLowerCase());
    expect(meanData).toContain("3");

    expect(consoleSpy).toHaveBeenCalledTimes(2);
  });
});
