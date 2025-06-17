import { Server as HTTPServer } from "http";
import { Server, Socket } from "socket.io";
import { setupListeners } from "../events/listeners";
import { registerSocketHandlers } from "./handlers";
import { registerUserHandlers } from "./handlers/user.handlers";

let io: Server;

export const initSocket = (server: HTTPServer) => {
  io = new Server(server, {
    cors: {
      origin: "*", // adjust for production
      methods: ["GET", "POST"],
    },
    pingTimeout: 60000,
    pingInterval: 25000,
  });

  // Register event listeners for order and trade events
  setupListeners(io);

  registerSocketHandlers(io);

  return io;
};

export const getIO = (): Server => {
  if (!io) throw new Error("Socket.IO not initialized");
  return io;
};
