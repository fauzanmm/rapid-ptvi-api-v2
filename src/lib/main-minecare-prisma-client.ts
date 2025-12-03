import "dotenv/config";
import { PrismaClient } from "../prisma-main-minecare-database/main-minecare-database-client-types/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const sqlConfig = {
  user: process.env.DB_MAIN_MINECARE_USER!,
  password: process.env.DB_MAIN_MINECARE_PASSWORD!,
  database: process.env.DB_MAIN_MINECARE_NAME!,
  server: process.env.DB_MAIN_MINECARE_HOST!,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 1000,
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const adapter = new PrismaMssql(sqlConfig);
const prismaMainMinecare = new PrismaClient({ adapter });

export { prismaMainMinecare };
