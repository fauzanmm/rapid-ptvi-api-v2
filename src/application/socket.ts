// socket.ts
import "dotenv/config";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { web } from "./web";
import { dataPolling } from "./polling";
import { ShiftTableFuelTimeLossSocket } from "../controller/shift-table-fueltimeloss-socket";
import { logger } from "./logging";

export const httpServer = createServer(web);

const io = new SocketIOServer(httpServer, {
  cors: { origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] },
});

// Global Polling : without paramater from client
dataPolling(io);

// Private Polling : using parameter from client
const ShiftTableFuelTimeLossPoller = new ShiftTableFuelTimeLossSocket(io);

io.on("connection", (socket) => {
  logger.info(`🔌 User connected: ${socket.id}`);

  ShiftTableFuelTimeLossPoller.registerSocket(socket);

  // Register pagination event handler PER USER
  // const shiftTable = new ShiftTableFuelTimeLossSocket(io);
  // shiftTable.registerSocket(socket);

  // socket.on(
  //   "shiftTableFuelTimeLossParams",
  //   (skip: number, page: number, limit: number) => {
  //     logger.info({ skip, page, limit });
  //   }
  // );

  socket.on("disconnect", () => {
    logger.info(`❌ User disconnected: ${socket.id}`);
  });
});
