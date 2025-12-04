import express from "express";
import currentFuelTimeLossController from "../controller/current-fueltimeloss-controller.js";

const userRouter = express.Router();
// userRouter.use(authMiddleware)

userRouter.get("/v2/fuelTimeLoss/current", currentFuelTimeLossController.get);

export { userRouter };
