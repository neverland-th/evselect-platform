import { VEHICLE_STYLE_MAX_UPLOAD_MB, vehicleStylePublicInfo } from './public-info';

// Small local typing for the experimental browser API; no polyfill or network bridge.
export interface VehicleStyleModelContext {
  registerTool: (tool: {
    name: string;
    description: string;
    inputSchema: { type: 'object'; properties: Record<string, never>; additionalProperties: false };
    annotations: { readOnlyHint: true; consequentialHint: false };
    execute: (input: Record<string, unknown>) => Promise<string>;
  }, options: { signal: AbortSignal }) => Promise<void> | void;
}

export function registerVehicleStyleAgentTools(context?: VehicleStyleModelContext) {
  if (!context || typeof context.registerTool !== 'function') return () => {};
  const controller = new AbortController();
  try {
    const registration = context.registerTool({
      name: 'get_vehicle_style_info',
      description: 'อ่านวิธีใช้และข้อจำกัดของแอปลองแต่งรถ ไม่สร้างภาพ ไม่อัปโหลดรูป และไม่ยืนยันความพร้อมของบริการในขณะนี้',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, consequentialHint: false },
      execute: async input => {
        if (input == null || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).length) {
          throw new TypeError('This read-only tool accepts an empty object only.');
        }
        return JSON.stringify({
          ...vehicleStylePublicInfo,
          guideUrl: 'https://evselects.com/vehicle-style',
          appUrl: 'https://evselects.com/#vehicle-style',
          privacyUrl: 'https://evselects.com/privacy',
          upload: { formats: ['image/jpeg', 'image/png', 'image/webp'], maxMB: VEHICLE_STYLE_MAX_UPLOAD_MB },
          requiresUserConsent: true,
          generationAvailableThroughTool: false,
        });
      },
    }, { signal: controller.signal });
    // Unsupported/disabled WebMCP must never break the existing editor.
    void Promise.resolve(registration).catch(() => controller.abort());
  } catch {
    controller.abort();
  }
  return () => controller.abort();
}
