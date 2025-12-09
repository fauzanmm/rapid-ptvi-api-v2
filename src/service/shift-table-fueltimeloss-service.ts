import { prismaMainMinecare } from "../lib/main-minecare-prisma-client";
import { ResponseError } from "../error/error-response";
import { logger } from "../application/logging";

const get = async (skip: number, limit: number, page: number) => {
  try {
    const data = await prismaMainMinecare.pitFuelTimeLossShift.findMany({
      skip: skip,
      take: limit,
      orderBy: {
        RecordId: "desc",
      },
      // take: 1, // untuk test saja
    });

    const totalData = await prismaMainMinecare.pitFuelTimeLossShift.count({});

    // get latest date
    let date = await prismaMainMinecare.pitFuelTimeLossShift.aggregate({
      _max: {
        RefreshTime: true,
      },
    });

    // get unique crew
    const crew = await prismaMainMinecare.pitFuelTimeLossShift.groupBy({
      by: ["Crew"],
    });

    const shiftRecord = await prismaMainMinecare.pitFuelTimeLossShift.findFirst(
      {
        select: {
          ShiftId: true,
        },
      }
    );

    const currentShiftId: number | null = shiftRecord?.ShiftId ?? null;
    const lastShiftId: string | null = currentShiftId
      ? currentShiftId.toString().slice(-1)
      : null;

    let shiftName: string | null = null;

    switch (lastShiftId) {
      case "1":
        shiftName = "Night Shift";
        break;
      case "2":
        shiftName = "Day Shift";
        break;
      case "3":
        shiftName = "Afternoon Shift";
        break;
      default:
        shiftName = null;
        break;
    }

    // previous and next page
    const next = page * limit > totalData;
    const previous = page < 1;

    //const result = await dataConverter(data);
    return {
      data: data,
      date: date._max.RefreshTime,
      crews: crew,
      shiftName,
      page,
      limit,
      skip,
      totalData,
      totalPage: Math.ceil(totalData / limit),
      next,
      previous,
    };
    //return result;
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
