const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

console.log(`HASH for "some password:" ${hashPassword("some password")}`);
