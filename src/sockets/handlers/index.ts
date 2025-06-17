// src/sockets/handlers/index.ts
import { Server, Socket } from "socket.io";
import { registerUserHandlers } from "./user.handlers";

export const registerSocketHandlers = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`🔌 Client connected: ${socket.id}`);

    // Register user-specific handlers
    registerUserHandlers(io, socket);

    // Error handling
    socket.on("error", (error) => {
      console.error(`Socket error for ${socket.id}:`, error);
    });
  });
};
