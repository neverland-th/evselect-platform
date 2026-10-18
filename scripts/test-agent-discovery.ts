import assert from 'node:assert/strict';
import test from 'node:test';
import { getAgentDiscoveryManifest } from '../src/lib/agent-discovery';
import { getVehicleStyleApplicationSchema } from '../src/lib/vehicle-style/structured-data';
import { registerVehicleStyleAgentTools, type VehicleStyleModelContext } from '../src/lib/vehicle-style/agent-tools';
import { vehicleStylePublicInfo } from '../src/lib/vehicle-style/public-info';

test('manifest advertises the real app, not an invented remote MCP endpoint', () => {
  const manifest = getAgentDiscoveryManifest();
  assert.equal(manifest.specVersion, '1.0');
  assert.equal(manifest.host.displayName, 'EVSELECTS');
  assert.equal(manifest.entries.length, 1);
  const entry = manifest.entries[0];
  assert.match(entry.identifier, /^urn:air:evselects\.com:[a-z-]+:[a-z-]+$/);
  assert.equal(entry.type, 'application/ld+json');
  assert.ok(!('url' in entry), 'Inline data and a URL are mutually exclusive');
  assert.equal(entry.representativeQueries.length, 2);
  assert.deepEqual(entry.data, { '@context': 'https://schema.org', ...getVehicleStyleApplicationSchema() });
  assert.equal(entry.data.name, vehicleStylePublicInfo.name);
  assert.ok(entry.data.description.includes(vehicleStylePublicInfo.usage));
  assert.ok(!('aggregateRating' in entry.data));
});

test('unsupported browsers remain fully usable without WebMCP or a polyfill', () => {
  assert.doesNotThrow(() => registerVehicleStyleAgentTools()());
});

test('native tool uses a closed schema, returns public facts, and unregisters on cleanup', async () => {
  let tool: Parameters<VehicleStyleModelContext['registerTool']>[0] | undefined;
  let signal: AbortSignal | undefined;
  const cleanup = registerVehicleStyleAgentTools({
    registerTool(value, options) { tool = value; signal = options.signal; },
  });
  assert.ok(tool);
  assert.equal(tool.name, 'get_vehicle_style_info');
  assert.deepEqual(tool.inputSchema, { type: 'object', properties: {}, additionalProperties: false });
  assert.deepEqual(tool.annotations, { readOnlyHint: true, consequentialHint: false });
  const output = JSON.parse(await tool.execute({}));
  assert.equal(output.usage, vehicleStylePublicInfo.usage);
  assert.equal(output.upload.maxMB, 15);
  assert.equal(output.requiresUserConsent, true);
  assert.equal(output.generationAvailableThroughTool, false);
  assert.equal(output.appUrl, 'https://evselects.com/#vehicle-style');
  assert.equal(output.privacyUrl, 'https://evselects.com/privacy');
  assert.ok(!('status' in output), 'Static information must not promise live provider availability');
  await assert.rejects(() => tool!.execute({ prompt: 'generate an image' }), TypeError);
  await assert.rejects(() => tool!.execute([] as unknown as Record<string, unknown>), TypeError);
  assert.equal(signal?.aborted, false);
  cleanup();
  cleanup();
  assert.equal(signal?.aborted, true);
});

test('disabled API and asynchronous registration errors do not break the page', async () => {
  assert.doesNotThrow(() => registerVehicleStyleAgentTools({ registerTool() { throw new Error('disabled'); } })());
  let signal: AbortSignal | undefined;
  const cleanup = registerVehicleStyleAgentTools({ registerTool(_tool, options) {
    signal = options.signal;
    return Promise.reject(new Error('denied'));
  } });
  await Promise.resolve();
  assert.equal(signal?.aborted, true);
  cleanup();
});

if (process.env.BASE_URL) {
  test('built/live manifests, discovery headers and visible JSON-LD agree', async () => {
    const base = process.env.BASE_URL!;
    const manifests = await Promise.all(['ard.json', 'ai-catalog.json'].map(async name => {
      const response = await fetch(`${base}/.well-known/${name}`);
      assert.equal(response.status, 200);
      assert.match(response.headers.get('content-type') || '', /application\/json/);
      return response.json();
    }));
    assert.deepEqual(manifests[0], getAgentDiscoveryManifest());
    assert.deepEqual(manifests[0], manifests[1]);
    for (const path of ['/', '/vehicle-style']) {
      const response = await fetch(`${base}${path}`);
      assert.equal(response.status, 200);
      assert.match(response.headers.get('link') || '', /<\/\.well-known\/ard\.json>; rel="ard"/);
      const html = await response.text();
      const schema = JSON.parse(html.match(/<script[^>]*data-vehicle-style-schema[^>]*>([\s\S]*?)<\/script>/)![1]);
      assert.deepEqual(schema['@graph'].find((node: Record<string, unknown>) => node['@type'] === 'WebApplication'), getVehicleStyleApplicationSchema());
    }
    const post = await fetch(`${base}/.well-known/ard.json`, { method: 'POST', body: '{}' });
    assert.equal(post.status, 405, 'Discovery is read-only');
  });
}
