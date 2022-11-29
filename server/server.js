const http = require("http");
const path = require("path");
const express = require("express");
const Socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = Socket(server);

app.use(express.static(path.join(__dirname, "..", "public")));

server.listen(8000, () => {
  console.log("Server is running on Port:8000");
});
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  socket.emit("newMessage", {
    from: "Admin",
    text: "Welcome to the chat app!",
    createdAt: new Date().getTime(),
  });
  socket.broadcast.emit("newMessage", {
    from: "Admin",
    text: "New User Joined",
    createdAt: new Date().getTime(),
  });

  socket.on("createMessage", (message) => {
    console.log("creaet message", message);
    // io.emit("serverMessage", {
    //   form: "DaDDy's Server",
    //   text: "This message is broadcast message",
    //   createdAt: new Date().getTime(),
    // });
  });

  socket.on("disconnect", () => {
    console.log("User Disconnect", socket.id);
  });
});
