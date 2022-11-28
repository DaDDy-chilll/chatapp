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
  socket.on("disconnect", () => {
    console.log("User Disconnect", socket.id);
  });
});
