import winston from "winston";

export const logger = winston.createLogger({
  level: "info", // log level info ke atas
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // warna console
        winston.format.simple() // format sederhana: level: message
      ),
    }),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});
