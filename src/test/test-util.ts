import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";

export const pitFuelTimeLossCurrent = async () => {
  const data = await prismaMainMinecare.pitFuelTimeLossCurrent.findFirst();
  return data;
};
