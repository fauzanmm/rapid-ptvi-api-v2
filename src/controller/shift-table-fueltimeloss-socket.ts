import { Server, Socket } from "socket.io";
import shiftTableFuelTimeLoss from "../service/shift-table-fueltimeloss-service";

const POLLING_INTERVAL = 60000;

export class ShiftTableFuelTimeLossSocket2 {
  constructor(private io: Server) {}

  public registerSocket(socket: Socket) {
    socket.on(
      "shiftTableFuelTimeLoss:request",
      async ({ skip, limit, page }) => {
        const result = await shiftTableFuelTimeLoss.get(skip, limit, page);
        socket.emit("shiftTableFuelTimeLoss:update", result);
      }
    );
  }
}

export class ShiftTableFuelTimeLossSocket {
  private io: Server;
  private intervalId: NodeJS.Timeout | null = null;

  private params = { skip: 0, page: 0, limit: 0 };

  constructor(io: Server) {
    this.io = io;
    this.startPolling();
  }

  private async fetchData() {
    const { skip, page, limit } = this.params;
    const data = await shiftTableFuelTimeLoss.get(skip, limit, page);
    this.io.emit("shiftTableFuelTimeLoss:update", data);
  }

  public registerSocket(socket: Socket) {
    socket.on("shiftTableFuelTimeLossParams", ({ skip, page, limit }) => {
      this.params = { skip, page, limit };
      this.fetchData();
    });
  }

  public startPolling() {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.fetchData();
    }, POLLING_INTERVAL);
  }
}
