import "dotenv/config";
import { logger } from "./application/logging";
import { io, httpServer } from "./application/socket";

const port = process.env.PORT || 3000;
const serverHost = process.env.HOST_SERVER || "localhost";

// socketPolling(io);

// web.listen(port, () => {
//   logger.info(`App start on http://${serverHost}:${port}/api-docs`);
// });

httpServer.listen(port, () => {
  logger.info(`✅ App start on http://${serverHost}:${port}/api-docs`);
  logger.info(`🌐 Socket.IO Server is active.`);
});
