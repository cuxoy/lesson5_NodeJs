const fs = require("fs");
const path = require("path");

fs.readdir(__dirname, (err, files) => {
  let maxFile = null;
  let maxSize = 0;

  files.forEach((file) => {
    const filePath = path.join(__dirname, file);
    const stats = fs.statSync(filePath);

    console.log(`${file} : ${stats.size}`);

    if (stats.size > maxSize) {
      maxSize = stats.size;
      maxFile = file;
    }
  });

  console.log(`Max size file: ${maxFile}`);
});
