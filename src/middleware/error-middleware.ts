import type { ErrorRequestHandler } from "express";
import { ResponseError } from "../error/error-response";
import { logger } from "../application/logging";

const errorMiddleware: ErrorRequestHandler = async (err, req, res, next) => {
  if (!err) {
    next();
    return;
  }

  if (err instanceof ResponseError) {
    res
      .status(err.status)
      .json({
        status: err.status,
        message: err.name,
        errors: err.message,
      })
      .end();
  } else {
    logger.error("Unhandled Error:", err);

    res
      .status(500)
      .json({
        status: 500,
        message: "Internal Server Error",
        errors: "Terjadi kesalahan yang tidak terduga pada server.",
      })
      .end();
  }
};

export { errorMiddleware };
