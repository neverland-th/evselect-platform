import { OPTIONS, DEFAULTS, WHEEL_DIAMETERS, WHEEL_WIDTHS } from './options.js';
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
export class RequestError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}


export function validateInput(input) {
  if (input.consent !== true) {
    throw new RequestError(400, 'CONSENT_REQUIRED', 'กรุณายืนยันสิทธิ์ใช้ภาพและการส่งภาพเพื่อสร้างตัวอย่าง');
  }
  if (typeof input.image !== 'string') throw new RequestError(400, 'IMAGE_REQUIRED', 'กรุณาเลือกรูปรถก่อน');
  const match = /^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(input.image);
  if (!match || match[2].length % 4 !== 0) {
    throw new RequestError(400, 'INVALID_IMAGE', 'รองรับเฉพาะภาพ JPG, PNG และ WebP');
  }
  const image = Buffer.from(match[2], 'base64');
  if (image.length > MAX_IMAGE_BYTES) throw new RequestError(413, 'TOO_LARGE', 'ไฟล์ใหญ่เกินไป กรุณาใช้ภาพไม่เกิน 10 MB');
  const type = match[1];
  const validSignature = type === 'png'
    ? image.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    : type === 'jpeg'
      ? image.length >= 4 && image[0] === 255 && image[1] === 216 && image[2] === 255
      : image.length >= 12 && image.toString('ascii', 0, 4) === 'RIFF' && image.toString('ascii', 8, 12) === 'WEBP';
  if (!validSignature) throw new RequestError(400, 'INVALID_IMAGE', 'เนื้อหาไฟล์ไม่ตรงกับชนิดภาพ กรุณาเลือกไฟล์ใหม่');
  const selected = {};
  for (const [group, fallback] of Object.entries(DEFAULTS)) {
    const id = input[group] ?? fallback;
    selected[group] = OPTIONS[group].find(option => option.id === id);
    if (!selected[group]) throw new RequestError(400, 'INVALID_OPTION', 'ตัวเลือกไม่ถูกต้อง กรุณาเลือกใหม่');
  }
  const details = {};
  for (const name of ['wheelDesign', 'bodyCustom', 'finishCustom']) {
    const value = input[name] ?? '';
    if (typeof value !== 'string' || value.trim().length > 120) throw new RequestError(400, 'INVALID_DETAIL', 'กรุณากรอกรุ่นล้อหรือสีไม่เกิน 120 ตัวอักษร');
    details[name] = value.trim();
  }
  for (const [name, sizes] of [['wheelDiameter', WHEEL_DIAMETERS], ['wheelWidth', WHEEL_WIDTHS]]) {
    const value = input[name] ?? 'keep';
    if (value !== 'keep' && !sizes.includes(value)) throw new RequestError(400, 'INVALID_WHEEL_SIZE', 'กรุณาเลือกขนาดล้อจากรายการ');
    details[name] = value;
  }
  for (const group of ['body', 'finish']) {
    if (selected[group].id === 'custom' && !details[`${group}Custom`]) throw new RequestError(400, 'CUSTOM_COLOUR_REQUIRED', 'กรุณาระบุสีที่ต้องการ');
  }
  if (input.notes != null && typeof input.notes !== 'string') {
    throw new RequestError(400, 'INVALID_NOTES', 'รายละเอียดเพิ่มเติมต้องเป็นข้อความ');
  }
  const notes = (input.notes ?? '').trim();
  if (notes.length > 600) throw new RequestError(400, 'NOTES_TOO_LONG', 'รายละเอียดเพิ่มเติมต้องไม่เกิน 600 ตัวอักษร');
  const stylePrompt = input.stylePrompt ?? '';
  if (typeof stylePrompt !== 'string' || stylePrompt.trim().length > 2000 || (input.stylePrompt != null && !stylePrompt.trim())) {
    throw new RequestError(400, 'INVALID_STYLE_PROMPT', 'กรุณาระบุแนวแต่งไม่เกิน 2,000 ตัวอักษร');
  }
  if (Object.keys(DEFAULTS).filter(group => group !== 'mode').every(group => selected[group].id === 'keep') && details.wheelDiameter === 'keep' && details.wheelWidth === 'keep' && !details.wheelDesign && !notes && !stylePrompt.trim()) {
    throw new RequestError(400, 'NO_CHANGES', 'เลือกสิ่งที่อยากเปลี่ยนอย่างน้อยหนึ่งรายการ');
  }
  return { selected, notes, details, stylePrompt: stylePrompt.trim(), image: input.image };
}

