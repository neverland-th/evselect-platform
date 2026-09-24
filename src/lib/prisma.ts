import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required; connect the Neon database before starting the app.');
  }

  const connectionUrl = new URL(process.env.DATABASE_URL);
  if (!['postgres:', 'postgresql:'].includes(connectionUrl.protocol)) {
    throw new Error('DATABASE_URL must point to PostgreSQL.');
  }
  // Verify the database certificate as well as encrypting the connection.
  connectionUrl.searchParams.set('sslmode', 'verify-full');
  const adapter = new PrismaPg({
    connectionString: connectionUrl.toString(),
    max: 3,
    connectionTimeoutMillis: 15_000,
    idleTimeoutMillis: 10_000,
  });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

globalForPrisma.prisma = prisma;
