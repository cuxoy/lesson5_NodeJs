const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "./logs/serverLogs.log");

module.exports = function logger(req) {
  const now = new Date().toISOString();

  const logMessage = `[${now}] ${req.method} ${req.url}\n`;

  console.log(logMessage);

  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Logger error:", err.message);
    }
  });
};
