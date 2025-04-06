const EventEmitter = require("events");

class Chat extends EventEmitter {
  send(message) {
    this.emit("message", message);
  }
}

const chat = new Chat();

chat.on("message", (message) => {
  console.log("new message:", message);
});

chat.send("Hello!");
