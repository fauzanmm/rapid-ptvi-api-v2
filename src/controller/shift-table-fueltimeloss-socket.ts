import { Server, Socket } from "socket.io";
import shiftTableFuelTimeLoss from "../service/shift-table-fueltimeloss-service";

const POLLING_INTERVAL = 5000;

export class ShiftTableFuelTimeLossSocket {
  constructor(private io: Server) {}

  registerSocket(socket: Socket) {
    socket.on(
      "shiftTableFuelTimeLoss:request",
      async ({ skip, limit, page }) => {
        const result = await shiftTableFuelTimeLoss.get(skip, limit, page);
        socket.emit("shiftTableFuelTimeLoss:update", result);
      }
    );
  }
}
