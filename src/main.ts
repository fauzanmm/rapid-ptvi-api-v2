import { prismaPC04 } from "./lib/pc04-prisma-client";
import { prismaPC75 } from "./lib/pc75.prisma-client";

async function Home() {
  const data = await prismaPC04.datasetCycle.findFirst();
  const data75 = await prismaPC75.datasetCycle.findFirst();

  console.log({ data, data75 });
}

Home();
