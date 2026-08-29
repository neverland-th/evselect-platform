/**
 * EV Selection Thailand - Template Dispatch Router & Barrel Export
 * 
 * Central registry and dispatcher for all Thai EV Facebook content templates:
 * 1. In-Depth Vehicle Review (review.ts)
 * 2. Head-to-Head Comparison (comparison.ts)
 * 3. Weekly EV News & Market Trends (news.ts)
 * 4. Tropical Heat & Battery Care Guide (heat-guide.ts)
 * 5. Home TOU & Public Charging Guide (charging-guide.ts)
 */

export * from './review';
export * from './comparison';
export * from './news';
export * from './heat-guide';
export * from './charging-guide';

import { PostTopic, VehicleSpec, GenerationOptions, PostMetadata } from '../types';
import { renderReviewPost } from './review';
import { renderComparisonPost } from './comparison';
import { renderNewsPost } from './news';
import { renderHeatGuidePost } from './heat-guide';
import { renderChargingGuidePost } from './charging-guide';
import { getComparisonPair, getRandomVehicle } from '../data';

export interface RenderTemplateContext {
  vehicle?: VehicleSpec;
  compareVehicle?: VehicleSpec;
  options?: GenerationOptions;
}

export interface RenderedTemplateResult {
  id: string;
  title: string;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata;
  vehicleModel?: string;
  compareVehicleModel?: string;
}

/**
 * Dispatches and renders the corresponding template based on topic
 */
export function renderTemplate(
  topic: PostTopic,
  context: RenderTemplateContext = {}
): RenderedTemplateResult {
  const { options } = context;
  const vehicle = context.vehicle || getRandomVehicle();

  switch (topic) {
    case 'review': {
      return renderReviewPost(vehicle, options);
    }
    case 'comparison': {
      const [vA, vB] = context.compareVehicle
        ? [vehicle, context.compareVehicle]
        : getComparisonPair(vehicle.id);
      return renderComparisonPost(vA, vB, options);
    }
    case 'news': {
      return renderNewsPost(context.vehicle, options);
    }
    case 'heat-guide': {
      return renderHeatGuidePost(context.vehicle, options);
    }
    case 'charging-guide': {
      return renderChargingGuidePost(context.vehicle, options);
    }
    default: {
      return renderReviewPost(vehicle, options);
    }
  }
}
