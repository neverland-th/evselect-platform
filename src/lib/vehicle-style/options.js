export const OPTIONS = {
  body: [
    { id: 'keep', label: 'สีเดิม', color: '#c4c7c5', prompt: 'Keep the original body paint exactly unchanged.' },
    { id: 'pearl', label: 'ขาวมุก', color: '#edece5', prompt: 'Change only the painted body panels to pearl white.' },
    { id: 'graphite', label: 'เทากราไฟต์', color: '#555b5c', prompt: 'Change only the painted body panels to metallic graphite grey.' },
    { id: 'black', label: 'ดำเงา', color: '#161b1b', prompt: 'Change only the painted body panels to gloss black.' },
    { id: 'pink', label: 'ชมพูอ่อน', color: '#d7a5b3', prompt: 'Change only the painted body panels to soft rose pink.' },
    { id: 'blue', label: 'น้ำเงินเข้ม', color: '#344858', prompt: 'Change only the painted body panels to deep metallic blue.' },
    { id: 'green', label: 'เขียวโอลีฟ', color: '#6a725c', prompt: 'Change only the painted body panels to muted olive green.' },
    { id: 'custom', label: 'กำหนดเอง', prompt: '' },
  ],
  wheels: [
    { id: 'keep', label: 'ล้อเดิม', prompt: 'Keep the original wheel design exactly unchanged.' },
    { id: 'five', label: '5 ก้าน', prompt: 'Use an unbranded five-spoke wheel design, preserving the original wheel diameter, tyre dimensions, offset and wheel positions.' },
    { id: 'multi', label: 'หลายก้าน', prompt: 'Use an unbranded fine multi-spoke wheel design, preserving the original wheel diameter, tyre dimensions, offset and wheel positions.' },
    { id: 'aero', label: 'Aero', prompt: 'Use an unbranded clean aerodynamic wheel design, preserving the original wheel diameter, tyre dimensions, offset and wheel positions.' },
  ],
  finish: [
    { id: 'keep', label: 'สีเดิม', color: '#c4c7c5', prompt: 'Keep the original wheel finish.' },
    { id: 'silver', label: 'เงิน', color: '#bcbfbd', prompt: 'Use satin silver wheel faces.' },
    { id: 'gunmetal', label: 'Gunmetal', color: '#646968', prompt: 'Use gunmetal grey wheel faces.' },
    { id: 'bronze', label: 'บรอนซ์', color: '#9b7951', prompt: 'Use satin bronze wheel faces.' },
    { id: 'black', label: 'ดำ', color: '#242827', prompt: 'Use satin black wheel faces.' },
    { id: 'custom', label: 'กำหนดเอง', prompt: '' },
  ],
  trim: [
    { id: 'keep', label: 'รายละเอียดเดิม', prompt: 'Keep all original trim, roof, mirrors and accessories unchanged.' },
    { id: 'black', label: 'Black accents', prompt: 'Give existing mirror caps and existing chrome exterior trim a subtle gloss-black finish. Do not add parts.' },
  ],
  mode: [
    { id: 'precise', label: 'เน้นรายละเอียด', model: 'gpt-image-2.5-sunburst', description: 'เหมาะกับการปรับภาพรถโดยเก็บรายละเอียดเดิม' },
    { id: 'quick', label: 'ลองไอเดียเร็ว', model: 'gpt-image-2.5-flare', description: 'เหมาะกับการสำรวจหลายแนวทาง' },
  ],
};

export const DEFAULTS = { body: 'keep', wheels: 'keep', finish: 'keep', trim: 'keep', mode: 'precise' };
// Visual concept choices, not a vehicle-specific fitment catalogue.
export const WHEEL_DIAMETERS = Array.from({ length: 11 }, (_, index) => String(index + 14));
export const WHEEL_WIDTHS = Array.from({ length: 15 }, (_, index) => String(5 + index * .5));
