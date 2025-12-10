// polling.ts
import { Server } from "socket.io";
import { currentFuelTimeLossSocket } from "../controller/current-fueltimeloss-socket";
import { shiftSummaryFuelTimeLossSocket } from "../controller/shift-summary-fueltimeloss-socket";

export const dataPolling = (io: Server) => {
  // HANYA realtime broadcast
  new currentFuelTimeLossSocket(io).start();
  new shiftSummaryFuelTimeLossSocket(io).start();
};
