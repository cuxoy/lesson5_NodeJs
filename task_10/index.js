const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().replace(/password/g, "********"));
  },
});

process.stdin.pipe(upperCase).pipe(process.stdout);
