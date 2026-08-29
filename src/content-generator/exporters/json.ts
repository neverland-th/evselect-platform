/**
 * EV Selection Thailand - JSON Content Exporter
 * 
 * Formats generated Facebook posts into structured, schema-compliant JSON
 * with complete metadata, analytics summary, vehicle details, timestamps,
 * and publishing payloads for programmatic CMS/API ingestion.
 */

import { GeneratedPost, PostMetadata, PostTopic, GenerationMode } from '../types';

export interface JsonExportOptions {
  pretty?: boolean;
  indentSpaces?: number;
  schemaVersion?: string;
}

export interface ExportJsonPost {
  id: string;
  title: string;
  topic: PostTopic;
  vehicleModel?: string;
  compareVehicleModel?: string;
  generatedAt: string;
  mode: GenerationMode;
  contentMarkdown: string;
  plainText: string;
  metadata: PostMetadata & {
    wordCount: number;
    estimatedReadingTimeMinutes: number;
  };
}

export interface ExportJsonSummary {
  totalPosts: number;
  byTopic: Record<string, number>;
  byMode: Record<string, number>;
  vehiclesCovered: string[];
  totalCharacters: number;
  averageCharacters: number;
}

export interface ExportJsonSchema {
  schemaVersion: string;
  exportedAt: string;
  generator: {
    name: string;
    version: string;
    brand: string;
    homepage: string;
  };
  summary: ExportJsonSummary;
  posts: ExportJsonPost[];
}

/**
 * Calculates words in Thai/English mixed content
 */
function calculateWordCount(text: string): number {
  if (!text) return 0;
  // Splits by whitespace and Thai punctuation/segment boundaries
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

/**
 * Calculates estimated reading time in minutes
 */
function estimateReadingTimeMinutes(charCount: number): number {
  return Math.max(1, Math.ceil(charCount / 500));
}

/**
 * Formats GeneratedPost[] into a structured JSON string
 */
export function exportToJson(
  posts: GeneratedPost[],
  options: JsonExportOptions = {}
): string {
  const {
    pretty = true,
    indentSpaces = 2,
    schemaVersion = '1.0.0',
  } = options;

  const now = new Date();

  // Summary aggregation
  const topicCounts: Record<string, number> = {};
  const modeCounts: Record<string, number> = {};
  const vehiclesSet = new Set<string>();
  let totalCharacters = 0;

  const exportPosts: ExportJsonPost[] = posts.map((post) => {
    topicCounts[post.topic] = (topicCounts[post.topic] || 0) + 1;
    modeCounts[post.mode] = (modeCounts[post.mode] || 0) + 1;

    if (post.vehicleModel) {
      vehiclesSet.add(post.vehicleModel);
    }
    if (post.compareVehicleModel) {
      vehiclesSet.add(post.compareVehicleModel);
    }

    const charCount = post.metadata.charCount || post.contentMarkdown.length;
    totalCharacters += charCount;

    const wordCount = calculateWordCount(post.plainText || post.contentMarkdown);
    const readingTime = estimateReadingTimeMinutes(charCount);

    return {
      id: post.id,
      title: post.title,
      topic: post.topic,
      vehicleModel: post.vehicleModel,
      compareVehicleModel: post.compareVehicleModel,
      generatedAt: post.generatedAt,
      mode: post.mode,
      contentMarkdown: post.contentMarkdown,
      plainText: post.plainText,
      metadata: {
        ...post.metadata,
        charCount,
        wordCount,
        estimatedReadingTimeMinutes: readingTime,
      },
    };
  });

  const payload: ExportJsonSchema = {
    schemaVersion,
    exportedAt: now.toISOString(),
    generator: {
      name: 'EV Selection Thailand Facebook Content Generator',
      version: '1.0.0',
      brand: 'EV Selection Thailand',
      homepage: 'https://evselect.in.th',
    },
    summary: {
      totalPosts: posts.length,
      byTopic: topicCounts,
      byMode: modeCounts,
      vehiclesCovered: Array.from(vehiclesSet),
      totalCharacters,
      averageCharacters: posts.length > 0 ? Math.round(totalCharacters / posts.length) : 0,
    },
    posts: exportPosts,
  };

  return pretty ? JSON.stringify(payload, null, indentSpaces) : JSON.stringify(payload);
}
