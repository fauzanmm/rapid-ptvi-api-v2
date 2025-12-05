import express from "express";
import currentFuelTimeLossController from "../controller/current-fueltimeloss-controller";
import shiftSummaryFueltimelossController from "../controller/shift-summary-fueltimeloss-controller";

const userRouter = express.Router();
// userRouter.use(authMiddleware)

userRouter.get("/v2/fuelTimeLoss/current", currentFuelTimeLossController.get);
userRouter.get(
  "/v2/fuelTimeLoss/shift/summary",
  shiftSummaryFueltimelossController.get
);

export { userRouter };
