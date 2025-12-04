import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../config/apidoc";

const publicRouter = express.Router();

publicRouter.use("/api-docs", swaggerUi.serve);
publicRouter.get("/api-docs", swaggerUi.setup(swaggerDocument));

export { publicRouter };
