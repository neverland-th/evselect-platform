import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { VEHICLE_STYLE_MAX_UPLOAD_MB, vehicleStylePublicInfo as info } from '../src/lib/vehicle-style/public-info';

test('Public terms describe the owner-approved unlimited application attempts', () => {
  assert.match(info.usage, /ไม่จำกัดจำนวนครั้ง/);
  assert.doesNotMatch(info.usage, /ต่อวัน|ต่อเครือข่าย|โควตา/);
  assert.doesNotMatch(info.trial, /API ฟรี/);
});

test('The original upload boundary and both UI labels use one presentation constant', async () => {
  assert.equal(VEHICLE_STYLE_MAX_UPLOAD_MB, 15);
  const editor = await readFile(new URL('../src/components/vehicle-style/EVSELECTSStudio.tsx', import.meta.url), 'utf8');
  const guide = await readFile(new URL('../src/app/(storefront)/vehicle-style/page.tsx', import.meta.url), 'utf8');
  assert.ok(editor.includes('file.size > VEHICLE_STYLE_MAX_UPLOAD_MB * 1024 * 1024'));
  assert.ok(editor.includes('สูงสุด {VEHICLE_STYLE_MAX_UPLOAD_MB} MB'));
  assert.ok(guide.includes('${VEHICLE_STYLE_MAX_UPLOAD_MB} MB'));
  // The original file is resized/re-encoded before submission. Do not raise API limits.
  assert.ok(editor.includes("base.toDataURL('image/jpeg', .85)"));
});
