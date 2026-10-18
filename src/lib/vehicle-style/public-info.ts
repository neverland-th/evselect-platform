// Public presentation only. Keep credentials and provider calls out of this module.
export const VEHICLE_STYLE_MAX_UPLOAD_MB = 15;

export const vehicleStylePublicInfo = {
  name: 'EVSELECTS Vehicle Style',
  description: 'อัปโหลดรูปรถ แล้วลองสีรถ สีล้อ ดีไซน์ล้อ หรือพิมพ์แนวแต่งที่อยากได้ด้วย AI พร้อมเทียบภาพก่อน–หลังในหน้าเดียว',
  trial: 'ทดลองใช้ฟรี ไม่ต้องกรอก API key หรือรหัสสตูดิโอ',
  usage: 'ไม่จำกัดจำนวนครั้งในการลองแต่งรถ',
  disclaimer: 'ภาพเป็น Concept preview ไม่ยืนยันขนาดจริง การติดตั้ง หรือ fitment',
  features: [
    'ลองสีตัวรถ สีล้อ และฟินิชที่ชอบ',
    'ระบุขนาด ความกว้าง และดีไซน์ล้อเพื่อทำภาพแนวคิด',
    'พิมพ์แนวแต่งที่อยากได้ด้วย AI',
    'เปรียบเทียบภาพก่อน–หลังและดาวน์โหลดภาพ',
  ],
} as const;
