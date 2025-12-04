import currentFuelTimeLoss from "../service/current-fueltimeloss-service.js";

const get = async (req: any, res: any, next: any) => {
  try {
    const result = await currentFuelTimeLoss.get();

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  get,
};
