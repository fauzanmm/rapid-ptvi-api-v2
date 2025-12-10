import "dotenv/config";
import { createServer, Server as HTTPServer } from "http";
import { Server as SocketIOServer, Socket } from "socket.io";
import { web } from "./application/web";
import { logger } from "./application/logging";

const port = process.env.PORT || 3000;
const serverHost = process.env.HOST_SERVER || "localhost";

// socket.io
const httpServer: HTTPServer = createServer(web);
const io: SocketIOServer = new SocketIOServer(httpServer, {
  cors: {
    origin: "*", // Atur ini sesuai domain frontend Anda
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket: Socket) => {
  logger.info(`🔌 Users connected: ${socket.id}`);
});

// web.listen(port, () => {
//   logger.info(`App start on http://${serverHost}:${port}/api-docs`);
// });

httpServer.listen(port, () => {
  logger.info(`✅ HTTP App start on http://${serverHost}:${port}/api-docs`);
  logger.info(`🌐 Socket.IO Server is active.`);
});
