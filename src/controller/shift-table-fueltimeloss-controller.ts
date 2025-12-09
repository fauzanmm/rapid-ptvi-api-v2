import shiftTableFueltimelossService from "../service/shift-table-fueltimeloss-service";
import { logger } from "../application/logging";

const get = async (req: any, res: any, next: any) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 50;
    const skip = (page - 1) * limit;
    const result = await shiftTableFueltimelossService.get(skip, limit, page);

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
