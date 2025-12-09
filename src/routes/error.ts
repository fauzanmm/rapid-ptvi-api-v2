import express from "express";
import { NotFoundError } from "../error/error-response";

const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
  next(
    new NotFoundError(`Endpoint ${req.method} ${req.originalUrl} not found.`)
  );
});
export { errorRouter };
