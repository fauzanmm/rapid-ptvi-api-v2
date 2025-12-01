import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma-pc75-database/schema.prisma",
  migrations: {
    path: "prisma-pc75-database/migrations",
  },
  datasource: {
    url: env("DATABASE_URL_PC75"),
  },
});
