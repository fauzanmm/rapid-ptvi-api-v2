import express from "express";
import cors from "cors";
import { errorMiddleware } from "../middleware/error-middleware.js";
// import { setupRoutes } from "../routes/api.js";
import { publicRouter } from "../routes/public-api";
// import { publicRouter } from "../routes/public-api.js";

export const web = express();
web.use(cors());
web.use(express.json());

web.use(publicRouter);
// web.use(userRouter);

// Setup all routes (API + Swagger UI)
// setupRoutes(web);

web.use(errorMiddleware);
