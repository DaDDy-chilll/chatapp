const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

server.listen(8000, () => {
  console.log("Server is running on Port:8000");
});
