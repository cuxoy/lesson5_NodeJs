const fs = require("fs");

const readable = fs.createReadStream("log.txt", {
  encoding: "utf8",
  highWaterMark: 1 * 256, //
});

readable.on("data", (chunk) => {
  console.log("Chank received:", chunk.length);
});

readable.on("end", () => {
  console.log("file have been read");
});
