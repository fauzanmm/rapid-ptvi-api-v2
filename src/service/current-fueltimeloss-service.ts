import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";
import { ResponseError } from "../error/error-response";
import { logger } from "../application/logging";
// import { dataConverter } from "./fueltimeloss-format-service";

const get = async () => {
  try {
    const data = await prismaMainMinecare.pitFuelTimeLossCurrent.findMany({});

    if (data.length === 0) {
      throw new ResponseError(404, "Data is not found");
    }

    // const result = await dataConverter(data);
    return data;
    // return result;
  } catch (error: any) {
    logger.error(error);
    throw new ResponseError(
      500,
      `Database connection failed : ${error.message}`
    );
  }
};

export default {
  get,
};
