import "dotenv/config";
import { PrismaClient } from "../prisma-main-minecare-database/main-minecare-database-client-types/client";
import { PrismaMssql } from "@prisma/adapter-mssql";
import { logger } from "../application/logging";

// Konfigurasi Prisma Client untuk Main Minecare Database
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

// Konfigurasi logging untuk Prisma Client Main Minecare Database
const prismaAny = prismaMainMinecare as any;

interface QueryEvent {
  query: string;
  params: string;
  duration: number;
}

interface InfoEvent {
  message: string;
}

interface WarnEvent {
  message: string;
}

interface ErrorEvent {
  message: string;
  code?: string;
}

prismaAny.$on("query", (e: QueryEvent) => {
  logger.info("PrismaMainMinecare query", {
    query: e.query,
    params: e.params,
    duration: e.duration,
    timestamp: new Date().toISOString(),
    datasource: "MainMinecare",
  });
});

prismaAny.$on("info", (e: InfoEvent) =>
  logger.info("PrismaMainMinecare info", { ...e, datasource: "MainMinecare" })
);

prismaAny.$on("warn", (e: WarnEvent) =>
  logger.warn("PrismaMainMinecare warn", { ...e, datasource: "MainMinecare" })
);

prismaAny.$on("error", (e: ErrorEvent) =>
  logger.error("PrismaMainMinecare error", { ...e, datasource: "MainMinecare" })
);

export { prismaMainMinecare };
