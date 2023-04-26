const fs = require("fs");
const app = require("./src/index");

const consoleSpy = jest.spyOn(console, "log");
const writeFileSyncSpy = jest.spyOn(fs, "writeFileSync");
const readFileSyncSpy = jest.spyOn(fs, "readFileSync");
const appendFileSyncSpy = jest.spyOn(fs, "appendFileSync");
const unlinkSyncSpy = jest.spyOn(fs, "unlinkSync");

const filePath = "notes.txt";

describe("File Operations", () => {
  it("should create, read, update and delete a file and log the required content in the console", () => {
    app();
    const content = "The world has enough coders ";
    const updateString = "BE A CODING NINJA!";
    const updatedContent = `The world has enough coders ${updateString}`;

    expect(writeFileSyncSpy).toHaveBeenCalled();
    expect(writeFileSyncSpy.mock.calls[0][0]).toMatch(filePath);
    expect(writeFileSyncSpy.mock.calls[0][1]).toMatch(content);

    expect(readFileSyncSpy).toHaveBeenCalled();
    expect(readFileSyncSpy.mock.calls[0][0]).toMatch(filePath);
    expect(readFileSyncSpy.mock.calls[0][1]).toMatch(/utf/i);

    expect(appendFileSyncSpy).toHaveBeenCalled();
    expect(appendFileSyncSpy.mock.calls[0][0]).toMatch(filePath);
    expect(appendFileSyncSpy.mock.calls[0][1]).toMatch(updateString);

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy.mock.calls[0][0]).toMatch(content);
    expect(consoleSpy.mock.calls[1][0]).toMatch(updatedContent);

    expect(unlinkSyncSpy).toHaveBeenCalledTimes(1);
    expect(unlinkSyncSpy.mock.calls[0][0]).toMatch(filePath);
  });
});
