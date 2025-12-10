import "dotenv/config";
import { createServer, Server as HTTPServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import { web } from "./web";
import { dataPolling } from "./polling";

// socket.io
export const httpServer: HTTPServer = createServer(web);

export const io: SocketIOServer = new SocketIOServer(httpServer, {
  cors: {
    origin: "*", // Atur ini sesuai domain frontend Anda
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

export const registerSocket = (io: SocketIOServer) => {
  dataPolling(io);

  io.on("connection", (socket: Socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
