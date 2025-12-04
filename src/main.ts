import { prismaMainMinecare } from "./lib/main-minecare-prisma-client";
import { prismaPC75 } from "./lib/pc75.prisma-client";

async function Home() {
  const data = await prismaMainMinecare.pitFuelTimeLossShift.findFirst();
  const data75 = await prismaPC75.datasetCycle.findFirst();

  console.log({ data, data75 });
}

export default Home();
// logger.info("Server booting up...");
// logger.warn("Ini warning");
// logger.error("Ini error");
// logger.debug("Ini debug");

// import "dotenv/config";
// import { web } from "./application/web";
// import { logger } from "./application/logging";

// const port = process.env.PORT || 3000;
// const server = process.env.HOST_SERVER || "localhost";

// web.listen(port, () => {
//   logger.info(`App start on ${server}:${port}/api`);
// });
