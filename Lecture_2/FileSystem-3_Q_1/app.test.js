// const fs = require("fs");
// const app = require("./index");

// const writeFileSpy = jest.spyOn(fs, "writeFile");
// const readFileSpy = jest.spyOn(fs, "readFile");
// const appendFileSpy = jest.spyOn(fs, "appendFile");

// const filePath = "note.txt";

// describe("File Operations", () => {
//   it("should create, read, update and delete a file and log the required content in the console", () => {
//     app();

//     expect(writeFileSpy).toHaveBeenCalled();
//     expect(writeFileSpy.mock.calls[0][0]).toMatch(filePath);
//     expect(writeFileSpy.mock.calls[0][1]).toMatch(content);

//     expect(readFileSpy).toHaveBeenCalled();
//     expect(readFileSpy.mock.calls[0][0]).toMatch(filePath);
//     expect(readFileSpy.mock.calls[0][1]).toMatch(/utf/i);

//     expect(appendFileSpy).toHaveBeenCalled();
//     expect(appendFileSpy.mock.calls[0][0]).toMatch(filePath);
//     expect(appendFileSpy.mock.calls[0][1]).toMatch(updateString);

//   });
// });

const fs = require("fs");
const app = require("./index");

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
    app();

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
