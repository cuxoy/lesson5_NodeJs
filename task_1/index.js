const fs = require("fs");

fs.readFile("./source.txt", "utf-8", (error, data) => {
  fs.writeFile("./copy.txt", data, () => {});
});
