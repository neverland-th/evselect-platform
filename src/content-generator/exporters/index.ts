/**
 * EV Selection Thailand - Content Exporters Module Index & Pipeline
 * 
 * Barrel export and unified file export helper for generated Facebook content.
 * Generates both formatted Markdown (`posts.md`) and structured JSON (`posts.json`).
 */

import * as fs from 'fs';
import * as path from 'path';
import { GeneratedPost } from '../types';
import { exportToMarkdown, MarkdownExportOptions } from './markdown';
import { exportToJson, JsonExportOptions } from './json';

export * from './markdown';
export * from './json';

export interface ExportOptions {
  outputDir?: string;
  markdownFileName?: string;
  jsonFileName?: string;
  writeFiles?: boolean;
  markdownOptions?: MarkdownExportOptions;
  jsonOptions?: JsonExportOptions;
}

export interface ExportResult {
  markdownPath?: string;
  jsonPath?: string;
  markdownContent: string;
  jsonContent: string;
  postsCount: number;
}

/**
 * Exports generated posts to Markdown and JSON format, optionally writing to disk
 */
export async function exportPosts(
  posts: GeneratedPost[],
  options: ExportOptions = {}
): Promise<ExportResult> {
  const {
    outputDir = './',
    markdownFileName = 'posts.md',
    jsonFileName = 'posts.json',
    writeFiles = true,
    markdownOptions = {},
    jsonOptions = {},
  } = options;

  const markdownContent = exportToMarkdown(posts, markdownOptions);
  const jsonContent = exportToJson(posts, jsonOptions);

  let markdownPath: string | undefined;
  let jsonPath: string | undefined;

  if (writeFiles) {
    const resolvedDir = path.resolve(process.cwd(), outputDir);
    if (!fs.existsSync(resolvedDir)) {
      fs.mkdirSync(resolvedDir, { recursive: true });
    }

    markdownPath = path.join(resolvedDir, markdownFileName);
    jsonPath = path.join(resolvedDir, jsonFileName);

    await fs.promises.writeFile(markdownPath, markdownContent, 'utf-8');
    await fs.promises.writeFile(jsonPath, jsonContent, 'utf-8');
  }

  return {
    markdownPath,
    jsonPath,
    markdownContent,
    jsonContent,
    postsCount: posts.length,
  };
}

/**
 * Synchronous variant of exportPosts
 */
export function exportPostsSync(
  posts: GeneratedPost[],
  options: ExportOptions = {}
): ExportResult {
  const {
    outputDir = './',
    markdownFileName = 'posts.md',
    jsonFileName = 'posts.json',
    writeFiles = true,
    markdownOptions = {},
    jsonOptions = {},
  } = options;

  const markdownContent = exportToMarkdown(posts, markdownOptions);
  const jsonContent = exportToJson(posts, jsonOptions);

  let markdownPath: string | undefined;
  let jsonPath: string | undefined;

  if (writeFiles) {
    const resolvedDir = path.resolve(process.cwd(), outputDir);
    if (!fs.existsSync(resolvedDir)) {
      fs.mkdirSync(resolvedDir, { recursive: true });
    }

    markdownPath = path.join(resolvedDir, markdownFileName);
    jsonPath = path.join(resolvedDir, jsonFileName);

    fs.writeFileSync(markdownPath, markdownContent, 'utf-8');
    fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
  }

  return {
    markdownPath,
    jsonPath,
    markdownContent,
    jsonContent,
    postsCount: posts.length,
  };
}
