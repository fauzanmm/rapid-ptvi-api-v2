import "dotenv/config";
import { createServer, Server as HTTPServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import { web } from "./web";

// socket.io
export const httpServer: HTTPServer = createServer(web);

export const io: SocketIOServer = new SocketIOServer(httpServer, {
  cors: {
    origin: "*", // Atur ini sesuai domain frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});
