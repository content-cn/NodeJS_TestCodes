const fs = require("fs");

exports.Solution = () => {
  fs.writeFile("note.txt", "The world has enough coders", (err) => {
    if (err) console.log(err);
    else {
      console.log("data written succesfully");
      fs.readFile("note.txt", "utf-8", (data, err) => {
        if (err) console.log(err);
        else console.log(data);
        fs.appendFile("note.txt", " BE A CODING NINJA!", (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file updated succesfully!");
            fs.readFile("note.txt", "utf-8", (data, err) => {
              if (err) console.log(err);
              else console.log(data);
            });
          }
        });
      });
    }
  });
};

// The reason for this issue is the asynchronous nature of Node.js. Since the developer is using non-blocking code, the application does not wait for the file operation to complete before moving on to the next task. This could lead to a race condition where the application tries to read the file before the update operation is completed.

// To resolve this issue, the developer could use callbacks or promises to ensure that the read operation is only performed after the update operation is completed.
