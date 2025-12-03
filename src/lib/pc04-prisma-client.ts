import "dotenv/config";
import { PrismaClient } from "../../prisma-pc04-database/pc04-database-client-types/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const sqlConfig = {
  user: process.env.DB_PC04_USER!,
  password: process.env.DB_PC04_PASSWORD!,
  database: process.env.DB_PC04_NAME!,
  server: process.env.DB_PC04_HOST!,
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
const prismaPC04 = new PrismaClient({ adapter });

export { prismaPC04 };
