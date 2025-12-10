import "dotenv/config";
import { Socket } from "socket.io";
import { logger } from "./application/logging";
import { io, httpServer } from "./application/socket";

const port = process.env.PORT || 3000;
const serverHost = process.env.HOST_SERVER || "localhost";

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
