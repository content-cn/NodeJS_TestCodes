const fs = require("fs");
const Solution = require("./index");

jest.mock("fs");

const content = "The world has enough coders";
const updateString = " BE A CODING NINJA!";

fs.writeFile.mockImplementation((file, data, cb) => {
  cb(null);
});

fs.readFile.mockImplementation((file, options, cb) => {
  cb(null, content);
});

fs.appendFile.mockImplementation((file, data, cb) => {
  cb(null);
});

const consoleSpy = jest.spyOn(console, "log");

describe("test app.js", () => {
  test("it should write data to file, read, update and read again", () => {
    Solution();

    expect(fs.writeFile).toHaveBeenCalledWith(
      "note.txt",
      content,
      expect.any(Function)
    );
    expect(fs.readFile).toHaveBeenCalledWith(
      "note.txt",
      "utf-8",
      expect.any(Function)
    );
    expect(fs.appendFile).toHaveBeenCalledWith(
      "note.txt",
      updateString,
      expect.any(Function)
    );

    expect(consoleSpy).toHaveBeenCalledTimes(4);
    expect(fs.readFile).toHaveBeenCalledTimes(2);
  });
});
