import express from "express";
import currentFuelTimeLossController from "../controller/current-fueltimeloss-controller.js";
// import shiftFuelTimeLossController from "../controller/shift-fueltimeloss-controller.js";
// import shiftPageFuelTimeLossController from "../controller/shift-page-fueltimeloss-controller.js";
// import shiftSummaryFuelTimeLossController from "../controller/shift-summary-fueltimeloss-controller.js";
// import monthFuelTimeLossController from "../controller/month-fueltimeloss-controller.js";

const userRouter = express.Router();
// userRouter.use(authMiddleware)

userRouter.get(
  "/api/v1/fuelTimeLoss/current/:department",
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
