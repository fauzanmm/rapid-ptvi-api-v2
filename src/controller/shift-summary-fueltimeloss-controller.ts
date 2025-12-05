import shiftSummaryFuelTimeLoss from "../service/shift-summary-fueltimeloss-service";
import { logger } from "../application/logging";

const get = async (req: any, res: any, next: any) => {
  try {
    const result = await shiftSummaryFuelTimeLoss.get();

    res.status(200).json({
      data: result,
    });
  } catch (error: any) {
    logger.error("Database or Unhandled Error in Controller:", error);
    next(error);
  }
};

export default {
  get,
};
