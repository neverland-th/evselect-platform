import { isIP } from 'node:net';
import { RequestError, validateInput } from './input.mjs';
import { quotaIdentity, readQuota, reserveQuota } from './quota';

const BACKEND = 'https://evselects-vehicle-style-evselects-com.vercel.app';
const NO_STORE = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
const MAX_REQUEST_BYTES = 4_000_000;
type ServiceConfig = { code: string; ip: string };
type Dependencies = {
  config?: (request: Request) => ServiceConfig | null;
  fetch?: typeof fetch;
  read?: typeof readQuota;
  reserve?: typeof reserveQuota;
};

function serviceConfig(request: Request): ServiceConfig | null {
  const code = process.env.VEHICLE_STYLE_SERVICE_CODE;
  // Vercel overwrites X-Forwarded-For at its edge; do not trust a caller-selected cookie ID.
  const ip = request.headers.get('x-forwarded-for')?.trim() ?? '';
  return code && isIP(ip) && process.env.VERCEL_ENV === 'production' ? { code, ip } : null;
}
const reply = (status: number, body: object) => Response.json(body, { status, headers: NO_STORE });
const privateHeaders = (code: string) => ({ Authorization: 'Basic ' + Buffer.from('studio:' + code).toString('base64') });

async function parseInput(request: Request) {
  if (!/^application\/json(?:;|$)/i.test(request.headers.get('content-type') ?? '')) throw new RequestError(415, 'CONTENT_TYPE', 'รูปแบบคำขอไม่ถูกต้อง');
  if (Number(request.headers.get('content-length')) > MAX_REQUEST_BYTES) throw new RequestError(413, 'TOO_LARGE', 'ภาพใหญ่เกินไป กรุณาเลือกรูปใหม่');
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError(400, 'BAD_JSON', 'อ่านคำขอไม่ได้');
  const chunks: Uint8Array[] = [];
  let length = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.length;
    if (length > MAX_REQUEST_BYTES) { await reader.cancel(); throw new RequestError(413, 'TOO_LARGE', 'ภาพใหญ่เกินไป กรุณาเลือกรูปใหม่'); }
    chunks.push(value);
  }
  let input;
  try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw new RequestError(400, 'BAD_JSON', 'อ่านคำขอไม่ได้'); }
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new RequestError(400, 'BAD_JSON', 'อ่านคำขอไม่ได้');
  validateInput(input);
  return input;
}

export async function studioStatus(request: Request, dependencies: Dependencies = {}) {
  const config = (dependencies.config ?? serviceConfig)(request);
  if (!config) return reply(503, { ready: false, error: 'กำลังเตรียมเปิดทดลอง อัปโหลดรูปและเลือกสไตล์ไว้ก่อนได้' });
  try {
    const { day, visitor } = quotaIdentity(config.ip, config.code);
    const quota = await (dependencies.read ?? readQuota)(day, visitor);
    const upstream = await (dependencies.fetch ?? fetch)(BACKEND + '/api/status', { headers: privateHeaders(config.code), cache: 'no-store', signal: AbortSignal.timeout(10_000) });
    const ready = upstream.ok && (await upstream.json()).ready === true;
    return reply(200, { ready: ready && quota.allowed, ...quota, error: quota.error || (ready ? '' : 'บริการสร้างภาพยังไม่พร้อมชั่วคราว') });
  } catch {
    return reply(503, { ready: false, error: 'บริการทดลองยังไม่พร้อมชั่วคราว กรุณาลองใหม่ภายหลัง' });
  }
}

export async function studioPreview(request: Request, dependencies: Dependencies = {}) {
  const origin = request.headers.get('origin');
  if (!['https://evselects.com', 'https://www.evselects.com'].includes(origin ?? '') || request.headers.get('sec-fetch-site') === 'cross-site' || request.headers.get('x-studio-request') !== '1') {
    return reply(403, { code: 'ORIGIN_BLOCKED', error: 'กรุณาสร้างภาพจากหน้าเว็บ EVSELECTS' });
  }
  try {
    const input = await parseInput(request);
    const config = (dependencies.config ?? serviceConfig)(request);
    if (!config) return reply(503, { code: 'UNAVAILABLE', error: 'บริการทดลองยังไม่พร้อมชั่วคราว' });
    const { day, visitor } = quotaIdentity(config.ip, config.code);
    const quota = await (dependencies.reserve ?? reserveQuota)(day, visitor);
    if (!quota.reserved) return reply(429, { code: 'DAILY_LIMIT', error: quota.error });
    const upstream = await (dependencies.fetch ?? fetch)(BACKEND + '/api/preview', {
      method: 'POST', cache: 'no-store',
      headers: { ...privateHeaders(config.code), Origin: BACKEND, 'Content-Type': 'application/json', 'X-Studio-Request': '1' },
      body: JSON.stringify(input), signal: AbortSignal.timeout(260_000),
    });
    if (upstream.status === 401 || upstream.status === 403) return reply(503, { code: 'UNAVAILABLE', error: 'บริการสร้างภาพยังไม่พร้อมชั่วคราว' });
    // Preserve streaming for PNG JSON responses above the hosted function buffer limit.
    return new Response(upstream.body, { status: upstream.status, headers: { ...NO_STORE, 'Content-Type': 'application/json; charset=utf-8' } });
  } catch (error) {
    if (error instanceof RequestError) return reply(error.status, { code: error.code, error: error.message });
    return reply(503, { code: 'UNAVAILABLE', error: 'การเชื่อมต่อยังไม่พร้อม หากเริ่มสร้างภาพแล้วกรุณารอและอย่าส่งซ้ำทันที' });
  }
}
