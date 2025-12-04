import express from "express";
import currentFuelTimeLossController from "../controller/current-fueltimeloss-controller.js";

const userRouter = express.Router();
// userRouter.use(authMiddleware)

userRouter.get(
  "/api/v2/fuelTimeLoss/current",
  currentFuelTimeLossController.get
);
// userRouter.get(
//   "/api/v1/fuelTimeLoss/shift/:department",
//   shiftFuelTimeLossController.get
// );
// userRouter.get("/api/v1/fuelTimeLoss/month", monthFuelTimeLossController.get);
// userRouter.get(
//   "/api/v1/fuelTimeLoss/shift/table/:department",
//   shiftPageFuelTimeLossController.get
// );
// userRouter.get(
//   "/api/v1/fuelTimeLoss/shift/summary/:department",
//   shiftSummaryFuelTimeLossController.get
// );

export { userRouter };
