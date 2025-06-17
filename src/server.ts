import http from "http";
import app from "./app";
import { initSocket } from "./sockets";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
      }; // or whatever your structure is
    }
  }
}

const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
