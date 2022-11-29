const socket = io();
socket.on("connect", function () {
  console.log("Connected to Server");
});

socket.on("disconnect", function () {
  console.log("Disconnect from Server");
});

socket.on("newMessage", function (message) {
  console.log("newMessage", message);
});
