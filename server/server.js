const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log(`user ${socket.id} connected...`);

  socket.on('message', (message) => {
    console.log(message)
    io.emit('message', `${socket.id} said ${message}`)
  })
});

httpServer.listen(8080);
