// import winston from "winston";
import {
  pitFuelTimeLossCurrent,
  pitFuelTimeLossShift,
  summaryFuelTimeLossShift,
} from "./test-util.js";
import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";

// test("create new logger test", () => {
//   const logger = winston.createLogger({
//     level: "silly",
//     transports: [new winston.transports.Console()],
//   });

//   logger.log({
//     level: "silly",
//     message: "test level silly",
//   });
// });

test("get pitFuelTimeLossCurrent", async () => {
  const data = await pitFuelTimeLossCurrent();
  expect(data?.RecordId).toBe(1);
});

test("get pitFuelTimeLossShift", async () => {
  const data = await pitFuelTimeLossShift();
  expect(data?.RecordId).toBe(1);
});

test("get summaryFuelTimeLossShift", async () => {
  const data = await summaryFuelTimeLossShift();
  expect(data).toEqual({
    lossHour: 211,
    lossFuel: 207.11028173199998,
  });
});
