import { PrismaClient } from '@/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  try {
    // Dynamic require so module load doesn't crash on serverless if driver is absent
    const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
    const adapter = new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL || 'file:./dev.db',
    });
    return new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    });
  } catch {
    // Return a resilient Proxy stub that throws on execution so caller try/catch catches it
    return new Proxy({} as PrismaClient, {
      get(_target, _model) {
        return new Proxy({}, {
          get(_subTarget, _method) {
            return async () => {
              throw new Error('Database is not configured or unreachable');
            };
          }
        });
      }
    });
  }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;