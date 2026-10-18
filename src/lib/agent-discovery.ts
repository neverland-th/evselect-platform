import { getVehicleStyleApplicationSchema } from './vehicle-style/structured-data';

// ARD discovery, not a remote MCP server, permission grant or Google ranking directive.
// Keep the predecessor filename for the Lighthouse version shown in the user's report.
export function getAgentDiscoveryManifest() {
  const app = getVehicleStyleApplicationSchema();
  return {
    specVersion: '1.0',
    host: { displayName: 'EVSELECTS', documentationUrl: app.url },
    entries: [{
      identifier: 'urn:air:evselects.com:webapp:vehicle-style',
      displayName: app.name,
      type: 'application/ld+json',
      description: app.description,
      representativeQueries: ['มีแอปลองเปลี่ยนสีรถจากรูปไหม', 'ลองสีล้อและเทียบภาพก่อนหลังได้ที่ไหน'],
      capabilities: ['VehicleStylingConceptPreview'],
      data: { '@context': 'https://schema.org', ...app },
    }],
  };
}
