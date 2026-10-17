import { OPTIONS, DEFAULTS, WHEEL_DIAMETERS, WHEEL_WIDTHS } from './options.js';

// Adapted from the existing Vehicle Style client. All IDs and styles stay inside a ShadowRoot.
/** @param {ShadowRoot} root @param {{apiBase: string}} options */
export function mountStudio(root, { apiBase }) {
const $ = id => root.getElementById(id);
const form = $('styling-form');
const photoInput = $('photo-input');
let source = null;
let result = null;
let ready = false;
let busy = false;
let loadingPhoto = false;
let loadSequence = 0;
let checking = false;

function makeRadio(group, option) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = group;
  input.value = option.id;
  input.className = 'option-radio';
  input.defaultChecked = option.id === DEFAULTS[group];
  input.addEventListener('change', updateForm);
  return input;
}

for (const [group, options] of Object.entries(OPTIONS)) {
  if (group === 'wheels') continue; // Old preset IDs remain supported for cached clients only.
  for (const option of options) {
    const label = document.createElement('label');
    label.append(makeRadio(group, option));
    if (group === 'body' || group === 'finish') {
      label.className = 'swatch-label';
      const chip = document.createElement('span');
      chip.className = 'swatch-chip';
      chip.setAttribute('aria-hidden', 'true');
      if (option.id === 'keep') chip.classList.add('keep-chip');
      else if (option.id === 'custom') { chip.classList.add('custom-chip'); chip.textContent = '+'; }
      else chip.style.backgroundColor = option.color;
      const name = document.createElement('span');
      name.className = 'swatch-name';
      name.textContent = option.label;
      label.append(chip, name);
    } else if (group === 'mode') {
      label.className = 'mode-label';
      const title = document.createElement('strong');
      title.textContent = option.label;
      const description = document.createElement('span');
      description.textContent = option.description;
      label.append(title, description);
    } else {
      label.className = 'segment-label';
      const title = document.createElement('span');
      title.textContent = option.label;
      label.append(title);
    }
    $(`${group}-options`).append(label);
  }
}

for (const [id, sizes] of [['wheel-diameter', WHEEL_DIAMETERS], ['wheel-width', WHEEL_WIDTHS]]) {
  for (const size of sizes) $(id).add(new Option(`${size} นิ้ว`, size));
}

function selectedValues() {
  const data = { get: name => form.elements.namedItem(name)?.value };
  return {
    ...Object.fromEntries(Object.keys(DEFAULTS).map(group => [group, data.get(group) ?? DEFAULTS[group]])),
    wheelDiameter: data.get('wheelDiameter') ?? 'keep', wheelWidth: data.get('wheelWidth') ?? 'keep',
    wheelDesign: (data.get('wheelDesign') ?? '').trim(),
    bodyCustom: $('body-custom').value.trim(), finishCustom: $('finish-custom').value.trim(),
  };
}

function showError(message) {
  $('error-message').textContent = message;
  $('error-message').hidden = !message;
}

function updateForm() {
  const selection = selectedValues();
  for (const group of ['body', 'finish']) {
    const custom = selection[group] === 'custom';
    $(`${group}-custom-field`).hidden = !custom;
    $(`${group}-custom`).disabled = !custom || busy;
    $(`${group}-custom`).required = custom;
  }
  const missingCustom = ['body', 'finish'].find(group => selection[group] === 'custom' && !selection[`${group}Custom`]);
  const hasChange = ['body', 'wheels', 'finish', 'trim', 'wheelDiameter', 'wheelWidth'].some(group => selection[group] !== 'keep') || Boolean(selection.wheelDesign) || Boolean($('styling-notes').value.trim());
  const consent = $('photo-consent').checked;
  $('generate-preview').disabled = busy || loadingPhoto || !ready || !source || !hasChange || !consent || Boolean(missingCustom);
  let message = 'พร้อมลองลุคใหม่แล้ว';
  if (busy) message = 'กำลังสร้างภาพ กรุณารอผลลัพธ์ก่อนส่งคำขอถัดไป';
  else if (loadingPhoto) message = 'กำลังเตรียมรูปของคุณ';
  else if (!source) message = 'เลือกรูปรถ แล้วเลือกสิ่งที่อยากเปลี่ยน';
  else if (!hasChange) message = 'เลือกสีรถ ดีไซน์ล้อ หรือรายละเอียดที่อยากเปลี่ยน';
  else if (missingCustom) message = missingCustom === 'body' ? 'พิมพ์สีตัวรถที่ต้องการ' : 'พิมพ์สีล้อที่ต้องการ';
  else if (!consent) message = 'ยืนยันสิทธิ์ใช้ภาพและการส่งภาพก่อนสร้าง';
  else if (!ready) message = 'จัดสไตล์ไว้ก่อนได้ การเชื่อมต่อสร้างภาพยังไม่พร้อม';
  $('form-message').textContent = message;
}

async function checkConnection() {
  if (checking) return;
  checking = true;
  $('check-connection').disabled = true;
  try {
    const response = await fetch(new URL('status', apiBase), { signal: AbortSignal.timeout(10_000) });
    if (!response.ok) throw new Error();
    const status = await response.json();
    ready = status.ready === true;
    $('connection-banner').hidden = ready;
    $('connection-text').textContent = status.error || 'ยังเชื่อมต่อการสร้างภาพไม่ได้ — อัปโหลดรูปและเลือกสไตล์ไว้ก่อนได้';
    $('quota-status').textContent = status.message || ''; 
  } catch {
    ready = false;
    $('connection-banner').hidden = false;
    $('connection-text').textContent = 'เชื่อมต่อสตูดิโอไม่ได้ กรุณาตรวจสอบว่าสตูดิโอยังเปิดอยู่';
  } finally {
    checking = false;
    $('check-connection').disabled = false;
    updateForm();
  }
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('อ่านภาพไม่ได้ กรุณาเลือกไฟล์ JPG, PNG หรือ WebP ที่สมบูรณ์'));
    image.src = url;
  });
}

function clearResult() {
  result = null;
  $('result-image').removeAttribute('src');
  for (const id of ['result-layer', 'concept-tag', 'compare-line', 'compare-slider', 'compare-controls', 'result-actions']) $(id).hidden = true;
  $('original-tag').hidden = false;
}

async function selectPhoto(file) {
  if (busy || !file) return;
  const sequence = ++loadSequence;
  showError('');
  const rejectPhoto = message => {
    loadingPhoto = false;
    photoInput.value = '';
    showError(message);
    updateForm();
  };
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    rejectPhoto('รองรับเฉพาะ JPG, PNG และ WebP กรุณาแปลงไฟล์ HEIC ก่อนอัปโหลด');
    return;
  }
  if (file.size === 0 || file.size > 10 * 1024 * 1024) {
    rejectPhoto('กรุณาใช้ไฟล์ภาพที่สมบูรณ์ ขนาดไม่เกิน 10 MB');
    return;
  }
  loadingPhoto = true;
  updateForm();
  const url = URL.createObjectURL(file);
  try {
    const image = await loadImage(url);
    if (image.naturalWidth * image.naturalHeight > 40_000_000) {
      throw new Error('ความละเอียดภาพสูงเกินไป กรุณาย่อภาพก่อนอัปโหลด');
    }
    if (Math.min(image.naturalWidth, image.naturalHeight) < 128) {
      throw new Error('ภาพเล็กเกินไป กรุณาใช้ภาพที่เห็นตัวรถชัดขึ้น');
    }
    // Browser re-encoding strips EXIF metadata; uploaded originals are not saved.
    const scale = Math.min(1, 1600 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(image.naturalWidth * scale);
    canvas.height = Math.round(image.naturalHeight * scale);
    const context = canvas.getContext('2d');
    if (!context) throw new Error('เบราว์เซอร์นี้เตรียมภาพไม่ได้ กรุณาลองใช้เบราว์เซอร์อื่น');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    let data = canvas.toDataURL(file.type === 'image/png' ? 'image/png' : 'image/jpeg', .92);
    // Keep JSON uploads below the hosted function's request-size limit.
    if (data.length > 3_700_000) data = canvas.toDataURL('image/jpeg', .82);
    while (data.length > 3_700_000 && Math.min(canvas.width, canvas.height) > 160) {
      canvas.width = Math.round(canvas.width * .8);
      canvas.height = Math.round(canvas.height * .8);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      data = canvas.toDataURL('image/jpeg', .8);
    }
    if (data.length > 3_700_000) throw new Error('รูปยังใหญ่เกินไป กรุณาเลือกรูปที่เล็กลง');
    if (sequence !== loadSequence) return;
    source = { data, width: canvas.width, height: canvas.height };
    clearResult();
    $('original-image').src = data;
    $('image-stage').style.aspectRatio = `${canvas.width} / ${canvas.height}`;
    $('drop-zone').hidden = true;
    $('photo-view').hidden = false;
    $('replace-photo').hidden = false;
    $('photo-meta').textContent = `${canvas.width.toLocaleString()} × ${canvas.height.toLocaleString()} px`;
    $('photo-consent').checked = false;
  } catch (error) {
    if (sequence === loadSequence) showError(error.message);
  } finally {
    URL.revokeObjectURL(url);
    if (sequence === loadSequence) {
      loadingPhoto = false;
      updateForm();
    }
    photoInput.value = '';
  }
}

$('choose-photo').addEventListener('click', () => photoInput.click());
$('replace-photo').addEventListener('click', () => photoInput.click());
photoInput.addEventListener('change', () => selectPhoto(photoInput.files?.[0]));
const dropZone = $('drop-zone');
for (const event of ['dragenter', 'dragover']) {
  dropZone.addEventListener(event, e => { e.preventDefault(); if (!busy) dropZone.classList.add('dragging'); });
}
for (const event of ['dragleave', 'drop']) {
  dropZone.addEventListener(event, e => { e.preventDefault(); dropZone.classList.remove('dragging'); });
}
dropZone.addEventListener('drop', e => selectPhoto(e.dataTransfer?.files?.[0]));
root.addEventListener('dragover', e => e.preventDefault());
root.addEventListener('drop', e => e.preventDefault());
$('photo-consent').addEventListener('change', updateForm);
form.addEventListener('input', updateForm);
form.addEventListener('change', updateForm);
$('check-connection').addEventListener('click', checkConnection);
window.addEventListener('focus', checkConnection);
$('reset-style').addEventListener('click', () => {
  if (busy) return;
  form.reset();
  clearResult();
  showError('');
  updateForm();
});

function updateComparison() {
  const value = Number($('compare-slider').value);
  $('result-layer').style.clipPath = `inset(0 0 0 ${value}%)`;
  $('compare-line').style.left = `${value}%`;
  $('original-tag').hidden = value < 15;
  $('concept-tag').hidden = value > 85;
  $('compare-slider').setAttribute('aria-valuetext', `ภาพต้นฉบับ ${value}% ภาพแนวคิด ${100 - value}%`);
}
$('compare-slider').addEventListener('input', updateComparison);
const compareSlider = $('compare-slider');
function compareAtPointer(event) {
  const bounds = compareSlider.getBoundingClientRect();
  compareSlider.value = String(Math.round(Math.max(0, Math.min(100, (event.clientX - bounds.left) / bounds.width * 100))));
  updateComparison();
}
compareSlider.addEventListener('pointerdown', event => {
  if (!event.isPrimary || event.button !== 0) return;
  event.preventDefault();
  compareSlider.focus({ preventScroll: true });
  compareSlider.setPointerCapture(event.pointerId);
  compareAtPointer(event);
});
compareSlider.addEventListener('pointermove', event => {
  if (compareSlider.hasPointerCapture(event.pointerId)) compareAtPointer(event);
});
compareSlider.addEventListener('pointerup', event => {
  if (compareSlider.hasPointerCapture(event.pointerId)) compareSlider.releasePointerCapture(event.pointerId);
});

function setBusy(value) {
  busy = value;
  for (const control of form.querySelectorAll('fieldset, textarea, input[type=checkbox]')) control.disabled = value;
  photoInput.disabled = value;
  $('replace-photo').disabled = value;
  $('reset-style').disabled = value;
  $('download-preview').disabled = value;
  compareSlider.disabled = value;
  $('busy-overlay').hidden = !value;
  $('image-stage').setAttribute('aria-busy', String(value));
  $('generate-label').textContent = value ? 'กำลังสร้างภาพ…' : 'สร้างภาพแนวคิด';
  updateForm();
}

function describeSelection(selection) {
  const summary = ['body', 'finish', 'trim'].filter(group => selection[group] !== 'keep')
    .map(group => selection[group] === 'custom' ? selection[`${group}Custom`] : OPTIONS[group].find(option => option.id === selection[group]).label);
  if (selection.wheelDiameter !== 'keep') summary.push(`ขอบ ${selection.wheelDiameter} นิ้ว`);
  if (selection.wheelWidth !== 'keep') summary.push(`กว้าง ${selection.wheelWidth} นิ้ว`);
  if (selection.wheelDesign) summary.push(selection.wheelDesign);
  return summary.join(' · ') || 'ตามรายละเอียดที่ระบุ';
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  if ($('generate-preview').disabled || busy || !source) return;
  const selection = selectedValues();
  const submittedSource = source;
  const notes = $('styling-notes').value.trim();
  showError('');
  setBusy(true);
  const start = Date.now();
  $('elapsed-label').textContent = 'อาจใช้เวลาสักครู่';
  const timer = setInterval(() => {
    $('elapsed-label').textContent = `ผ่านไป ${Math.floor((Date.now() - start) / 1000)} วินาที · กำลังรอผลลัพธ์`;
  }, 1000);
  try {
    const response = await fetch(new URL('preview', apiBase), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Studio-Request': '1' },
      body: JSON.stringify({ ...selection, image: submittedSource.data, notes, consent: true }),
      signal: AbortSignal.timeout(260_000),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'สร้างภาพไม่สำเร็จ กรุณาลองอีกครั้งภายหลัง');
    if (!/^data:image\/png;base64,/.test(data.image ?? '')) throw new Error('ไม่ได้รับภาพที่รองรับจากบริการ');
    const image = await loadImage(data.image);
    result = { data: data.image, width: image.naturalWidth, height: image.naturalHeight, description: describeSelection(selection) };
    $('result-image').src = result.data;
    $('result-description').textContent = result.description;
    for (const id of ['result-layer', 'compare-line', 'compare-slider', 'compare-controls', 'result-actions']) $(id).hidden = false;
    $('compare-slider').value = '50';
    updateComparison();
    $('image-stage').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  } catch (error) {
    const message = error.name === 'TimeoutError' || error.name === 'AbortError'
      ? 'รอผลลัพธ์นานกว่าที่กำหนด คำขออาจยังประมวลผลและมีค่าใช้จ่าย กรุณาตรวจสอบก่อนลองใหม่'
      : error instanceof TypeError || error instanceof SyntaxError
        ? 'การเชื่อมต่อขัดข้อง คำขออาจยังประมวลผลและมีค่าใช้จ่าย กรุณาตรวจสอบก่อนลองใหม่'
        : error.message;
    showError(message);
  } finally {
    clearInterval(timer);
    setBusy(false);
    checkConnection();
  }
});

$('download-preview').addEventListener('click', async () => {
  if (!result || busy) return;
  const snapshot = result;
  $('download-preview').disabled = true;
  try {
    const image = await loadImage(snapshot.data);
    const canvas = document.createElement('canvas');
    const scale = snapshot.width / 1536;
    const bandHeight = Math.max(100, Math.round(108 * scale));
    canvas.width = snapshot.width;
    canvas.height = snapshot.height + bandHeight;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('เบราว์เซอร์นี้บันทึกภาพไม่ได้');
    context.drawImage(image, 0, 0);
    context.fillStyle = '#020617';
    context.fillRect(0, snapshot.height, canvas.width, bandHeight);
    const padding = Math.max(16, Math.round(30 * scale));
    context.fillStyle = '#bef264';
    context.font = `600 ${Math.max(14, Math.round(23 * scale))}px Segoe UI, sans-serif`;
    context.fillText('EVSELECTS.COM / CONCEPT PREVIEW', padding, snapshot.height + bandHeight * .42, canvas.width - padding * 2);
    context.fillStyle = '#e2e8f0';
    context.font = `${Math.max(11, Math.round(17 * scale))}px Tahoma, sans-serif`;
    context.fillText('ภาพแนวคิดจาก AI · ไม่ยืนยันขนาด การติดตั้ง หรือ fitment', padding, snapshot.height + bandHeight * .74, canvas.width - padding * 2);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('บันทึกภาพไม่ได้ กรุณาลองใหม่');
    if (window.AndroidStudio?.savePng) {
      const encoded = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      window.AndroidStudio.savePng(encoded);
      return;
    }
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'EVSELECTS-concept-preview.png';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  } catch (error) {
    showError(error.message);
  } finally {
    $('download-preview').disabled = busy;
  }
});

updateForm();
checkConnection();
return () => window.removeEventListener('focus', checkConnection);
}
