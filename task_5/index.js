const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const storedHash = hashPassword("password999"); // enter password

function verifyPassword(enteredPassword, storedHash) {
  const hashedPassword = hashPassword(enteredPassword);

  if (hashedPassword === storedHash) {
    console.log("correct password");
  } else {
    console.log("wrong password");
  }
}

verifyPassword("password111", storedHash); //verify password (now wtong )
