import * as fs from "fs";
import * as readline from "readline";

export const writeBlog = (filePath, name) => {
  fs.appendFileSync(filePath, name);
};

export const publishBlog = (filePath) => {
  return fs.readFileSync(filePath, { encoding: "utf8" });
};

export const iface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
