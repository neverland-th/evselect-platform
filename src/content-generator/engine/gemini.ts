/**
 * EV Selection Thailand - Gemini AI Generation Client & Fallback Engine
 * 
 * Provides AI-augmented generation using the Google Gemini API with structured grounding.
 * Automatically and reliably falls back to Mode A (Rule-Based) if GEMINI_API_KEY is missing,
 * offline, or if the API returns an error.
 */

import { VehicleSpec, GenerationOptions, GeneratedPost, PostTopic, PostMetadata } from '../types';
import { renderTemplate } from '../templates';
import { getComparisonPair, getRandomVehicle, getFitmentSummaryForVehicle, getVehicleFullName } from '../data';
import { calculateTOUSavings } from '../data/charging';


/**
 * Checks if a Gemini API key is available in the environment
 */
export function hasGeminiApiKey(): boolean {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  return Boolean(apiKey && apiKey.trim().length > 0);
}

/**
 * System prompt setting the persona for the Thai automotive editorial lead
 */
const SYSTEM_INSTRUCTION_THAI = `คุณคือบรรณาธิการบริหารและนักทดสอบรถยนต์อาวุโสของเพจ "EV Selection Thailand"
หน้าที่ของคุณคือเขียนบทความและโพสต์ Facebook เกี่ยวกับยานยนต์ไฟฟ้า (EV) ในประเทศไทย โดยใช้ภาษาไทยที่กระชับ ตรงไปตรงมา สนุก น่าติดตาม และถูกต้องตามหลักการวิศวกรรมยานยนต์

หลักการสำคัญในการเขียน:
1. ใช้ข้อมูลจริงจากสเปกไทย (Thai RHD Specification) เท่านั้น ห้ามแต่งตัวเลขขึ้นมาเอง
2. ให้ความสำคัญกับความกังวลของผู้ใช้รถ EV ในไทย เช่น สภาพอากาศร้อน 35°C–40°C, ภาระคอมเพรสเซอร์แอร์, สภาพถนนไทย (ลูกระนาด หลุม สะพาน), การประหยัดค่าไฟด้วยมิเตอร์ TOU (~0.48 บาท/กม.)
3. โครงสร้างโพสต์ Facebook: มี Hook ดึงดูดความสนใจก่อนตัด "See More", จัดหมวดหมู่ชัดเจนด้วยอิโมจิ, มีข้อดี-ข้อสังเกตที่ไม่อวย, ปิดท้ายด้วย Call to Action (CTA) ให้คอมเมนต์ และแฮชแท็กที่ตรงกลุ่ม
4. โพสต์ต้องพร้อมคัดลอกไปเผยแพร่บน Facebook ได้ทันที (Clean Markdown, Emojis, Bullet Points)
5. ห้ามใส่ placeholder เช่น [INSERT], undefined, หรือข้อความภาษาอังกฤษที่ไม่จำเป็น`;

/**
 * Constructs structured grounding prompt payload for Gemini
 */
function buildGroundingPrompt(
  topic: PostTopic,
  vehicle: VehicleSpec,
  compareVehicle?: VehicleSpec,
  options?: GenerationOptions
): string {
  const fitment = getFitmentSummaryForVehicle(vehicle.id);
  const tou = calculateTOUSavings(1000);

  const vehicleDetails = {
    brand: vehicle.brand,
    model: vehicle.model,
    modelYear: vehicle.modelYear,
    category: vehicle.category,
    taglineThai: vehicle.taglineThai,
    rating: vehicle.rating,
    verdictThai: vehicle.verdictThai,
    trims: vehicle.trims,
    prosThai: vehicle.prosThai,
    consThai: vehicle.consThai,
    heatNotesThai: vehicle.heatPerformanceNotesThai,
    suspensionNotesThai: vehicle.suspensionThaiRoadsNotesThai,
    chargingExperienceThai: vehicle.chargingExperienceThai,
    accessories: fitment.accessories.map((a) => ({ name: a.nameThai, price: a.priceTHB, desc: a.descriptionThai })),
    touCostPerKm: tou.costPerKm.evHomeTOUOffPeak,
  };

  let prompt = `จงเขียนโพสต์ Facebook สไตล์เจาะลึก สำหรับเพจ EV Selection Thailand ในหัวข้อ "${topic}" โดยใช้ข้อมูลอ้างอิงจริงต่อไปนี้:\n\n`;
  prompt += `ข้อมูลรถยนต์หลัก:\n${JSON.stringify(vehicleDetails, null, 2)}\n\n`;

  if (topic === 'comparison' && compareVehicle) {
    const compareFitment = getFitmentSummaryForVehicle(compareVehicle.id);
    const compareDetails = {
      brand: compareVehicle.brand,
      model: compareVehicle.model,
      modelYear: compareVehicle.modelYear,
      category: compareVehicle.category,
      taglineThai: compareVehicle.taglineThai,
      rating: compareVehicle.rating,
      verdictThai: compareVehicle.verdictThai,
      trims: compareVehicle.trims,
      prosThai: compareVehicle.prosThai,
      consThai: compareVehicle.consThai,
      heatNotesThai: compareVehicle.heatPerformanceNotesThai,
      suspensionNotesThai: compareVehicle.suspensionThaiRoadsNotesThai,
      chargingExperienceThai: compareVehicle.chargingExperienceThai,
      accessories: compareFitment.accessories.map((a) => ({ name: a.nameThai, price: a.priceTHB })),
    };
    prompt += `ข้อมูลรถยนต์เปรียบเทียบ:\n${JSON.stringify(compareDetails, null, 2)}\n\n`;
    prompt += `คำสั่งพิเศษ: เปรียบเทียบจุดเด่น หมัดต่อหมัด อัตราเร่ง การชาร์จ ฟีลลิ่งช่วงล่างบนถนนไทย และแนะนำว่าใครเหมาะกับคันไหน\n`;
  } else if (topic === 'review') {
    prompt += `คำสั่งพิเศษ: เขียนรีวิวเจาะลึก 8 ส่วนตามโครงสร้างมาตรฐานของ EV Selection Thailand (Hook, Verdict, สเปกไทยและราคา, ทดสอบสู้แดด 40°C, ช่วงล่างถนนไทย, การชาร์จและค่าไฟ TOU, ข้อดี/ข้อสังเกต, แนะนำอุปกรณ์เสริมตรงรุ่น)\n`;
  } else if (topic === 'heat-guide') {
    prompt += `คำสั่งพิเศษ: เขียนคู่มือสู้แดด 40°C และการถนอมแบตเตอรี่ พร้อมเคล็ดลับเปิดแอร์ล่วงหน้าและการติดม่านบังแดดหลังคาแก้ว\n`;
  } else if (topic === 'charging-guide') {
    prompt += `คำสั่งพิเศษ: เขียนคู่มือขอหม้อ TOU และวิธีเซฟค่าไฟเหลือกิโลเมตรละ 0.48 บาท พร้อมสรุปแอปชาร์จ CPO สำคัญในไทย\n`;
  } else if (topic === 'news') {
    prompt += `คำสั่งพิเศษ: เขียนสรุปข่าวเด่นวงการยานยนต์ไฟฟ้าประจำสัปดาห์ การขยายสถานีชาร์จ และ Spotlight รุ่น ${vehicle.brand} ${vehicle.model}\n`;
  }

  return prompt;
}

/**
 * Extracts hashtags from generated text or falls back to defaults
 */
function extractHashtags(text: string, defaultTags: string[]): string[] {
  const matches = text.match(/#[a-zA-Z0-9_\u0E00-\u0E7F]+/g);
  if (matches && matches.length >= 3) {
    return Array.from(new Set(matches));
  }
  return defaultTags;
}

/**
 * Calls Gemini API to generate Facebook post content with automatic fallback
 */
export async function generateWithGemini(
  topic: PostTopic,
  vehicle?: VehicleSpec,
  compareVehicle?: VehicleSpec,
  options?: GenerationOptions
): Promise<GeneratedPost> {
  const selectedVehicle = vehicle || getRandomVehicle();
  let selectedCompare = compareVehicle;
  if (topic === 'comparison' && !selectedCompare) {
    const pair = getComparisonPair(selectedVehicle.id);
    selectedCompare = pair[1];
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey || apiKey.trim().length === 0) {
    // Graceful fallback to Mode A (Rule-Based)
    const fallbackResult = renderTemplate(topic, {
      vehicle: selectedVehicle,
      compareVehicle: selectedCompare,
      options,
    });
    return {
      ...fallbackResult,
      topic,
      generatedAt: new Date().toISOString(),
      mode: 'rule_based',
    };
  }

  try {
    const prompt = buildGroundingPrompt(topic, selectedVehicle, selectedCompare, options);
    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION_THAI }],
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2500,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.warn(`[Gemini Engine] API request returned status ${response.status}: ${errText}. Falling back to Rule-Based Mode.`);
      throw new Error(`Gemini API Error: ${response.status}`);
    }

    const data = await response.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidateText || candidateText.trim().length === 0) {
      console.warn('[Gemini Engine] Empty response from Gemini API. Falling back to Rule-Based Mode.');
      throw new Error('Empty response from Gemini');
    }

    // Process AI Generated Post
    const contentMarkdown = candidateText.trim();
    const plainText = contentMarkdown
      .replace(/^###?\s+/gm, '')
      .replace(/\*\*/g, '')
      .replace(/---/g, '----------------------------------------');

    const defaultTags = [
      '#EVSelectionTH',
      '#รถยนต์ไฟฟ้า',
      `#${selectedVehicle.brand.replace(/\s+/g, '')}`,
      `#${selectedVehicle.model.replace(/\s+/g, '')}`,
      '#รถEVสเปกไทย',
    ];
    const fullName = getVehicleFullName(selectedVehicle);
    const compareFullName = selectedCompare ? getVehicleFullName(selectedCompare) : undefined;
    const title = `[AI-Augmented] รีวิว ${fullName} (${selectedVehicle.modelYear})`;

    const metadata: PostMetadata = {
      charCount: contentMarkdown.length,
      hashtags: defaultTags,
      suggestedImages: [
        selectedVehicle.imageUrls.hero,
        ...(selectedVehicle.imageUrls.exterior ? [selectedVehicle.imageUrls.exterior] : []),
      ],
      callToActionUrl: `https://evselect.co.th/articles/${selectedVehicle.articleSlug || selectedVehicle.id}`,
      author: 'EV Selection Thailand AI & Editorial Lab',
      targetAudience: selectedVehicle.targetAudienceThai,
      ratingScore: selectedVehicle.rating,
    };

    return {
      id: `ai-${topic}-${selectedVehicle.id}-${Date.now()}`,
      title,
      topic,
      vehicleModel: fullName,
      compareVehicleModel: compareFullName,
      generatedAt: new Date().toISOString(),
      mode: 'ai_augmented',
      contentMarkdown,
      plainText,
      metadata,
    };

  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.warn(`[Gemini Engine] Generation error (${errorMsg}). Seamlessly switching to Rule-Based Mode A.`);
    const fallbackResult = renderTemplate(topic, {
      vehicle: selectedVehicle,
      compareVehicle: selectedCompare,
      options,
    });
    return {
      ...fallbackResult,
      topic,
      generatedAt: new Date().toISOString(),
      mode: 'rule_based',
    };
  }
}
