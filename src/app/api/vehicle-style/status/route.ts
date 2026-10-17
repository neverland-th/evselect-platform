import { studioStatus } from '@/lib/vehicle-style/api';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const GET = (request: Request) => studioStatus(request);
