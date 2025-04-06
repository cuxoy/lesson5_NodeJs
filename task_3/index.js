const fs = require("fs");

fs.readFile("./source.txt", "utf-8", (error, data) => {
  const replaced = data.replace(/Node/g, "NODE.JS");
  fs.writeFile("./copy.txt", replaced, () => {});
});
