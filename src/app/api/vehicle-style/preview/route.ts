import { studioPreview } from '@/lib/vehicle-style/api';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;
export const POST = (request: Request) => studioPreview(request);
