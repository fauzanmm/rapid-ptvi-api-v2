import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";
// import { ResponseError } from "../error/response-error.js";
import { dataConverter } from "./fueltimeloss-format-service";

const get = async (department) => {
  try {
    // const data =
    //   await prismaClient.$queryRaw`EXEC dbo.SPPitFuelTimeLossCurrent ${department}`;
    const data = await prismaClient.PITFuelTimeLossCurrent.findMany({
      where: {
        Department: department,
      },
      // take: 1, // untuk test saja
    });

    if (!data) {
      throw new ResponseError(404, "Data is not found");
    }

    const result = await dataConverter(data);
    // const result = data;
    return result;
  } catch (error) {
    if (error.code === "P2024") {
      throw new ResponseError(
        503,
        "Database connection timeout. Please try again later."
      );
    }
    throw new ResponseError(
      500,
      `Database connection failed : ${error.message}`
    );
  }
};

export default {
  get,
};
