import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";
import { ResponseError } from "../error/error-response";
import { logger } from "../application/logging";

const get = async () => {
  try {
    const lossHour = await prismaMainMinecare.pitFuelTimeLossShift.count({});
    const lossFuel = await prismaMainMinecare.pitFuelTimeLossShift.aggregate({
      _sum: {
        FuelLoss: true,
      },
    });

    const data = {
      lossHour: lossHour || 0,
      lossFuel: lossFuel._sum.FuelLoss || 0,
    };

    return data;
  } catch (error: any) {
    logger.error("Database or Unhandled Error in Service:", error);

    throw new ResponseError(
      500,
      `Database connection failed : ${error.message}`
    );
  }
};

export default {
  get,
};
