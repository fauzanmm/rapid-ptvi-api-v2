import "dotenv/config";
import { PrismaClient } from "../../prisma-pc75-database/pc75-database-client-types/client";
import { PrismaMssql } from "@prisma/adapter-mssql";

const sqlConfig = {
  user: process.env.DB_PC75_USER!,
  password: process.env.DB_PC75_PASSWORD!,
  database: process.env.DB_PC75_NAME!,
  server: process.env.DB_PC75_HOST!,
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
const prismaPC75 = new PrismaClient({ adapter });

export { prismaPC75 };
