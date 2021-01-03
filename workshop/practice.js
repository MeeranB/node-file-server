const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "test.txt"), "utf-8", (error, file) => {
  if (error) {
    console.log(error);
  } else {
    console.log(file);
  }
});
