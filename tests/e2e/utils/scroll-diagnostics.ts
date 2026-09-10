import { Page, expect } from 'playwright/test';

export interface OffendingElement {
  tag: string;
  id: string;
  className: string;
  width: number;
  right: number;
  computedOverflowX: string;
}

export interface ScrollEvaluation {
  windowWidth: number;
  clientWidth: number;
  docScrollWidth: number;
  bodyScrollWidth: number;
  hasOverflow: boolean;
  offendingElements: OffendingElement[];
}

/**
 * Asserts that the current page has zero horizontal scrollbar / document overflow.
 * If an overflow violation occurs, it inspects DOM nodes to identify uncontained elements
 * protruding past the viewport boundary.
 */
export async function assertZeroHorizontalScroll(page: Page, contextDescription: string) {
  // Wait for DOM content and layout to settle
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(300);

  const evaluation: ScrollEvaluation = await page.evaluate(() => {
    const windowWidth = window.innerWidth;
    const clientWidth = document.documentElement.clientWidth;
    const docScrollWidth = document.documentElement.scrollWidth;
    const bodyScrollWidth = document.body.scrollWidth;

    const hasOverflow = docScrollWidth > clientWidth || bodyScrollWidth > windowWidth;

    const offendingElements: OffendingElement[] = [];

    if (hasOverflow) {
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const rect = el.getBoundingClientRect();
        // Check if element boundary extends past viewport width (with 1px subpixel tolerance)
        if (rect.right > windowWidth + 1) {
          // Check if this element is already contained within an overflow-x scrolling container
          let parent = el.parentElement;
          let isContained = false;
          while (parent && parent !== document.body && parent !== document.documentElement) {
            const parentStyle = window.getComputedStyle(parent);
            if (['auto', 'scroll', 'hidden', 'clip'].includes(parentStyle.overflowX)) {
              isContained = true;
              break;
            }
            parent = parent.parentElement;
          }

          if (!isContained) {
            const style = window.getComputedStyle(el);
            offendingElements.push({
              tag: el.tagName.toLowerCase(),
              id: el.id ? `#${el.id}` : '',
              className: typeof el.className === 'string' ? el.className.slice(0, 100) : '',
              width: Math.round(rect.width),
              right: Math.round(rect.right),
              computedOverflowX: style.overflowX,
            });
            if (offendingElements.length >= 10) break;
          }
        }
      }
    }

    return {
      windowWidth,
      clientWidth,
      docScrollWidth,
      bodyScrollWidth,
      hasOverflow,
      offendingElements,
    };
  });

  const failureMessage =
    `[Horizontal Scroll Violation] in ${contextDescription}:\n` +
    `  window.innerWidth: ${evaluation.windowWidth}px\n` +
    `  documentElement.clientWidth: ${evaluation.clientWidth}px\n` +
    `  documentElement.scrollWidth: ${evaluation.docScrollWidth}px\n` +
    `  body.scrollWidth: ${evaluation.bodyScrollWidth}px\n` +
    `  Offending elements:\n` +
    (evaluation.offendingElements.length > 0
      ? JSON.stringify(evaluation.offendingElements, null, 2)
      : '  (none directly detected outside containers; check body margins or inline-block gaps)');

  expect(evaluation.docScrollWidth, failureMessage).toBeLessThanOrEqual(evaluation.clientWidth);
  expect(evaluation.bodyScrollWidth, failureMessage).toBeLessThanOrEqual(evaluation.windowWidth);
}
