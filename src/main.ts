import { prismaMainMinecare } from "./lib/main-minecare-prisma-client";
import { prismaPC75 } from "./lib/pc75.prisma-client";

async function Home() {
  const data = await prismaMainMinecare.pitFuelTimeLossShift.findFirst();
  const data75 = await prismaPC75.datasetCycle.findFirst();

  console.log({ data, data75 });
}

Home();
