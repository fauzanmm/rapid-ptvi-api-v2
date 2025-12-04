// import winston from "winston";
import { pitFuelTimeLossCurrent } from "./test-util.js";
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

test("get first data pitfueltimeloss", async () => {
  const data = await pitFuelTimeLossCurrent();
  expect(data?.RecordId).toEqual(1);
});

afterAll(async () => {
  await prismaMainMinecare.$disconnect();
});
