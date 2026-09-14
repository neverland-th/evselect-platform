// Dated Thailand specification set shared by the article and its listing.
export const teslaModel3 = {
  title: 'Tesla Model 3 Highland สเปกไทย: เทียบ 4 รุ่น ราคาและอุปกรณ์ล่าสุด',
  description: 'เปรียบเทียบ Model 3 ขับหลัง, Premium RWD, Premium Long Range RWD และ Performance AWD สเปกประเทศไทย พร้อมราคา ระยะวิ่ง อุปกรณ์ และข้อมูลจาก Tesla ตรวจสอบ 14 กันยายน 2569',
  url: 'https://evselects.com/articles/tesla-model-3-highland-review',
  image: 'https://evselects.com/images/reviews/tesla-model-3-hero.jpg',
  checkedDate: '2026-09-14', checkedLabel: '14 กันยายน 2569',
  sources: {
    design: 'https://www.tesla.com/th_th/model3/design',
    specs: 'https://www.tesla.com/th_th/model3',
    measurement: 'https://www.tesla.com/en_th/model3',
    charging: 'https://www.tesla.com/th_TH/support/charging/home-charging',
    supercharging: 'https://www.tesla.com/th_th/support/charging/supercharging',
    manual: 'https://www.tesla.com/ownersmanual/model3/th_th',
  },
};

export const teslaModel3Trims = [
  {
    id: 'rwd', name: 'Model 3 ขับหลัง', label: 'ราคาเริ่มต้นต่ำสุด',
    price: '1,149,000', drive: 'ขับเคลื่อนล้อหลัง (RWD)', power: 'ไม่ระบุในหน้าสเปกไทย',
    acceleration: '6.2 วินาที', range: '572 กม. (WLTP)', range19: 'ไม่มีตัวเลือก 19 นิ้วในหน้าสั่งซื้อ',
    charging: '175 kW', audio: 'ลำโพง 7 ตัว', wheels: '18 นิ้ว Prismata',
    dampers: 'พาสซีฟ', frontSeats: 'เบาะผ้า พร้อมระบบอุ่นเบาะ', rearScreen: 'ไม่มี',
    warranty: '8 ปี / 160,000 กม.',
    summary: 'มีจอกลาง 15.4 นิ้ว ลำโพง 7 ตัว และล้อ 18 นิ้ว Prismata รุ่นนี้ไม่มีจอหลังและระบบระบายอากาศเบาะหน้าแบบ Premium',
    consideration: 'เหมาะให้พิจารณาเมื่อเน้นราคาซื้อเริ่มต้น และยอมรับอุปกรณ์ห้องโดยสารที่ลดลงได้',
  },
  {
    id: 'premium-rwd', name: 'Premium RWD', label: 'เพิ่มอุปกรณ์ความสบาย',
    price: '1,439,000', drive: 'ขับเคลื่อนล้อหลัง (RWD)', power: 'ไม่ระบุในหน้าสเปกไทย',
    acceleration: '6.1 วินาที', range: '534 กม. (โดยประมาณ)', range19: '520 กม. (WLTP)',
    charging: '175 kW', audio: 'ลำโพง 9 ตัว', wheels: '18 นิ้ว Photon / 19 นิ้ว Nova เป็นตัวเลือก',
    dampers: 'ปรับตามความถี่', frontSeats: 'ระบบอุ่นและระบายอากาศ', rearScreen: '8 นิ้ว',
    warranty: '8 ปี / 160,000 กม.',
    summary: 'เพิ่มจอหลัง 8 นิ้ว เบาะหน้าระบายอากาศ ไฟบรรยากาศ และโช้คอัพปรับตามความถี่ ระยะวิ่งล้อ 18 นิ้วบนเว็บ Tesla ระบุเป็นค่าประมาณ',
    consideration: 'เหมาะให้พิจารณาเมื่อให้ความสำคัญกับอุปกรณ์ความสบาย มากกว่าระยะวิ่งสูงสุด',
  },
  {
    id: 'long-range-rwd', name: 'Premium Long Range RWD', label: 'ระยะวิ่งสูงสุดในชุดนี้',
    price: '1,599,000', drive: 'ขับเคลื่อนล้อหลัง (RWD)', power: 'ไม่ระบุในหน้าสเปกไทย',
    acceleration: '5.2 วินาที', range: '750 กม. (WLTP)', range19: '691 กม. (WLTP)',
    charging: '250 kW', audio: 'ลำโพง 9 ตัว', wheels: '18 นิ้ว Photon / 19 นิ้ว Nova เป็นตัวเลือก',
    dampers: 'ปรับตามความถี่', frontSeats: 'ระบบอุ่นและระบายอากาศ', rearScreen: '8 นิ้ว',
    warranty: '8 ปี / 192,000 กม.',
    summary: 'Long Range ในหน้าสั่งซื้อไทย ณ วันที่ตรวจสอบเป็น RWD ระยะวิ่งสูงสุด 750 กม. WLTP เมื่อใช้ล้อ 18 นิ้ว และรับการชาร์จ DC สูงสุด 250 kW',
    consideration: 'เหมาะให้พิจารณาเมื่อเดินทางไกลบ่อย โดยควรวางแผนจุดชาร์จตามเส้นทางจริงประกอบการเลือก',
  },
  {
    id: 'performance', name: 'Performance AWD', label: 'สมรรถนะสูง',
    price: '2,099,000', drive: 'มอเตอร์คู่ ขับเคลื่อนสี่ล้อ (AWD)', power: '460 แรงม้า ตาม Tesla ไทย',
    acceleration: '3.1 วินาที¹', range: '571 กม. (WLTP; ล้อ 20 นิ้ว)', range19: 'ล้อ 20 นิ้ว Warp',
    charging: '250 kW', audio: 'ลำโพง 15 ตัว + ซับวูฟเฟอร์ 2 ตัว', wheels: '20 นิ้ว Warp แบบฟอร์จ',
    dampers: 'ปรับด้วยระบบอิเล็กทรอนิกส์', frontSeats: 'เบาะสปอร์ต ระบบอุ่นและระบายอากาศ', rearScreen: '8 นิ้ว',
    warranty: '8 ปี / 192,000 กม.',
    summary: 'Tesla ประเทศไทยระบุกำลังสูงสุด 460 แรงม้า ความเร็วสูงสุด 261 กม./ชม. พร้อมช่วงล่างปรับได้ เบาะสปอร์ต ล้อฟอร์จ และโหมดแทรค',
    consideration: 'เหมาะให้พิจารณาเมื่อให้ความสำคัญกับสมรรถนะ พร้อมประเมินค่าใช้จ่ายยางและความสบายจากการทดลองขับ',
  },
] as const;
