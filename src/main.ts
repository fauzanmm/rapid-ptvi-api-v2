import "dotenv/config";
import { web } from "./application/web";
import { logger } from "./application/logging";

const port = process.env.PORT || 3000;
const server = process.env.HOST_SERVER || "localhost";

web.listen(port, () => {
  logger.info(`App start on http://${server}:${port}/api-docs`);
});
