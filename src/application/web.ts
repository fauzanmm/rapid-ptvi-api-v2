import express from "express";
import cors from "cors";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { publicRouter } from "../routes/public-api";
import { userRouter } from "../routes/api";

export const web = express();
web.use(cors());
web.use(express.json());

web.use(publicRouter);
web.use("/api", userRouter);

web.use(errorMiddleware);
