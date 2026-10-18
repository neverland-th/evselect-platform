import { getAgentDiscoveryManifest } from '@/lib/agent-discovery';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(getAgentDiscoveryManifest());
}
