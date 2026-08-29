/**
 * EV Selection Thailand - Unified Content Generation Engine
 * 
 * Central generation coordinator supporting deterministic Rule-Based (Mode A)
 * and AI-Augmented (Mode B with automatic fallback) content synthesis.
 */

import {
  GenerationOptions,
  GeneratedPost,
  PostTopic,
  VehicleSpec,
  GenerationMode,
} from '../types';
import { getVehicleById, vehicles, getRandomVehicle, getComparisonPair } from '../data';
import { renderTemplate } from '../templates';
import { generateWithGemini, hasGeminiApiKey } from './gemini';

/**
 * Validates and sanitizes generation options
 */
function normalizeOptions(options: GenerationOptions = {}): {
  topic: PostTopic;
  mode: GenerationMode;
  vehicle?: VehicleSpec;
  compareVehicle?: VehicleSpec;
} {
  const topic: PostTopic = options.topic || 'review';

  let mode: GenerationMode = options.mode || 'rule_based';
  if (!options.mode && hasGeminiApiKey()) {
    mode = 'ai_augmented';
  }

  let vehicle: VehicleSpec | undefined;
  if (options.vehicleId && options.vehicleId.toLowerCase() !== 'all') {
    vehicle = getVehicleById(options.vehicleId);
  }
  if (!vehicle && topic !== 'charging-guide' && topic !== 'news') {
    vehicle = vehicles[0]; // Default to BYD Seal
  }

  let compareVehicle: VehicleSpec | undefined;
  if (options.compareVehicleId) {
    compareVehicle = getVehicleById(options.compareVehicleId);
  }

  return {
    topic,
    mode,
    vehicle,
    compareVehicle,
  };
}

/**
 * Generates a single Facebook post based on supplied options
 */
export async function generatePost(options: GenerationOptions = {}): Promise<GeneratedPost> {
  const normalized = normalizeOptions(options);
  const { topic, mode, vehicle, compareVehicle } = normalized;

  if (mode === 'ai_augmented') {
    return await generateWithGemini(topic, vehicle, compareVehicle, options);
  }

  // Mode A: Rule-Based Deterministic Engine
  const selectedVehicle = vehicle || getRandomVehicle();
  let selectedCompare = compareVehicle;
  if (topic === 'comparison' && !selectedCompare) {
    const pair = getComparisonPair(selectedVehicle.id);
    selectedCompare = pair[1];
  }

  const rendered = renderTemplate(topic, {
    vehicle: selectedVehicle,
    compareVehicle: selectedCompare,
    options,
  });

  return {
    id: rendered.id,
    title: rendered.title,
    topic,
    vehicleModel: rendered.vehicleModel,
    compareVehicleModel: rendered.compareVehicleModel,
    generatedAt: new Date().toISOString(),
    mode: 'rule_based',
    contentMarkdown: rendered.contentMarkdown,
    plainText: rendered.plainText,
    metadata: rendered.metadata,
  };
}

/**
 * Generates multiple Facebook posts in batch
 */
export async function generateBatchPosts(
  optionsList: GenerationOptions[]
): Promise<GeneratedPost[]> {
  const posts: GeneratedPost[] = [];
  for (const opts of optionsList) {
    const post = await generatePost(opts);
    posts.push(post);
  }
  return posts;
}

/**
 * Generates posts for all vehicles in the catalog
 */
export async function generatePostsForAllVehicles(
  topic: PostTopic = 'review',
  mode: GenerationMode = 'rule_based'
): Promise<GeneratedPost[]> {
  const posts: GeneratedPost[] = [];
  for (const vehicle of vehicles) {
    const post = await generatePost({
      vehicleId: vehicle.id,
      topic,
      mode,
    });
    posts.push(post);
  }
  return posts;
}
