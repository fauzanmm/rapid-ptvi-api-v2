import winston from "winston";

test("create new logger test", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console()],
  });

  logger.log({
    level: "silly",
    message: "test level silly",
  });
});
