const fs = require("fs");

fs.readFile("./source.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(`Reading error: ${error}`);
    return;
  }
  const replaced = data.replace(/Node/g, "NODE.JS");

  fs.writeFile("./copy.txt", replaced, (error) => {
    if (error) {
      console.log(`Writing error: ${error}`);
      return;
    } else {
      console.log("file successfully created!");
    }
  });
});
