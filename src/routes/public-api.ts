import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../config/apidoc";

const publicRouter = express.Router();

publicRouter.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// publicRouter.use("/api-docs", swaggerUi.serve);
// publicRouter.get("/api-docs", swaggerUi.setup(swaggerDocument));

// publicRouter.use("/api-specs", swaggerUi.serve);
// publicRouter.get("/api-specs", swaggerUi.setup(apiSpec));

export { publicRouter };
