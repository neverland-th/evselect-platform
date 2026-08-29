#!/usr/bin/env tsx
/**
 * EV Selection Thailand - Facebook Content Automation CLI Runner
 * 
 * Command Line Interface for generating authentic Thai EV Facebook posts,
 * in-depth vehicle reviews, head-to-head comparisons, weekly news roundups,
 * tropical heat battery care guides, and home TOU charging economics.
 * 
 * Usage:
 *   npx tsx scripts/generate-posts.ts [options]
 *   npm run generate-posts -- [options]
 */

import {
  PostTopic,
  GenerationMode,
  VehicleSpec,
  GeneratedPost,
  GenerationOptions,
} from '../src/content-generator/types';
import {
  vehicles,
  formatPriceRangeTHB,
  getVehicleFullName,
} from '../src/content-generator/data';
import {
  generatePost,
} from '../src/content-generator/engine';
import { exportPosts } from '../src/content-generator/exporters';

// ANSI Color Helpers for Terminal Output
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  bgBlue: '\x1b[44m',
  bgGreen: '\x1b[42m',
  white: '\x1b[37m',
};

interface ParsedCliArgs {
  vehicleId?: string;
  compareVehicleId?: string;
  topic?: PostTopic;
  mode?: GenerationMode;
  count: number;
  outputDir: string;
  list: boolean;
  all: boolean;
  help: boolean;
}

const VALID_TOPICS: PostTopic[] = [
  'review',
  'comparison',
  'news',
  'heat-guide',
  'charging-guide',
];

const VALID_MODES: GenerationMode[] = ['rule_based', 'ai_augmented'];

/**
 * Resolves vehicle by ID with fuzzy alias matching
 */
function resolveVehicle(input: string): VehicleSpec | undefined {
  const query = input.toLowerCase().trim();
  
  // 1. Direct ID match
  const exact = vehicles.find((v) => v.id.toLowerCase() === query);
  if (exact) return exact;

  // 2. Known common aliases
  const aliasMap: Record<string, string> = {
    'tesla-model-3': 'tesla-model-3-highland',
    'model-3': 'tesla-model-3-highland',
    'model3': 'tesla-model-3-highland',
    'model-y': 'tesla-model-y',
    'modely': 'tesla-model-y',
    'atto3': 'byd-atto-3',
    'atto-3': 'byd-atto-3',
    'mg4': 'mg4-electric',
    'aion-y': 'gac-aion-y-plus',
    'aion-y-plus': 'gac-aion-y-plus',
    'goodcat': 'ora-good-cat',
    'good-cat': 'ora-good-cat',
    'dolphin': 'byd-dolphin',
    'seal': 'byd-seal',
    'ex2': 'geely-ex2',
    's07': 'deepal-s07',
    's05': 'deepal-s05',
    'l07': 'deepal-l07',
    'zeekr': 'zeekr-x',
  };

  if (aliasMap[query]) {
    const aliased = vehicles.find((v) => v.id.toLowerCase() === aliasMap[query]);
    if (aliased) return aliased;
  }

  // 3. Substring matching
  return vehicles.find(
    (v) =>
      v.id.toLowerCase().includes(query) ||
      v.model.toLowerCase().includes(query) ||
      v.brand.toLowerCase().includes(query)
  );
}

/**
 * Parses command line arguments
 */
function parseArgs(args: string[]): ParsedCliArgs {
  const parsed: ParsedCliArgs = {
    count: 1,
    outputDir: './',
    list: false,
    all: false,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--help' || arg === '-h') {
      parsed.help = true;
    } else if (arg === '--list' || arg === '-l') {
      parsed.list = true;
    } else if (arg === '--all' || arg === '-a') {
      parsed.all = true;
    } else if (arg === '--vehicle' || arg === '-v') {
      parsed.vehicleId = args[++i];
    } else if (arg.startsWith('--vehicle=')) {
      parsed.vehicleId = arg.split('=')[1];
    } else if (arg === '--compare' || arg === '--compare-vehicle') {
      parsed.compareVehicleId = args[++i];
    } else if (arg.startsWith('--compare=')) {
      parsed.compareVehicleId = arg.split('=')[1];
    } else if (arg === '--topic' || arg === '-t') {
      parsed.topic = args[++i] as PostTopic;
    } else if (arg.startsWith('--topic=')) {
      parsed.topic = arg.split('=')[1] as PostTopic;
    } else if (arg === '--mode' || arg === '-m') {
      parsed.mode = args[++i] as GenerationMode;
    } else if (arg.startsWith('--mode=')) {
      parsed.mode = arg.split('=')[1] as GenerationMode;
    } else if (arg === '--count' || arg === '-c') {
      parsed.count = parseInt(args[++i], 10) || 1;
    } else if (arg.startsWith('--count=')) {
      parsed.count = parseInt(arg.split('=')[1], 10) || 1;
    } else if (arg === '--output-dir' || arg === '-o') {
      parsed.outputDir = args[++i] || './';
    } else if (arg.startsWith('--output-dir=')) {
      parsed.outputDir = arg.split('=')[1] || './';
    }
  }

  return parsed;
}

/**
 * Prints CLI Help screen
 */
function printHelp(): void {
  console.log(`
${c.cyan}${c.bold}⚡ EV Selection Thailand — Facebook Content Automation CLI${c.reset}
${c.dim}Automated Thai EV automotive editorial and social content generation engine.${c.reset}

${c.yellow}${c.bold}USAGE:${c.reset}
  $ ${c.green}npx tsx scripts/generate-posts.ts${c.reset} [options]
  $ ${c.green}npm run generate-posts --${c.reset} [options]

${c.yellow}${c.bold}OPTIONS:${c.reset}
  ${c.cyan}--vehicle, -v <id>${c.reset}       Generate for a specific vehicle ID (e.g. 'byd-seal', 'tesla-model-3')
  ${c.cyan}--compare <id>${c.reset}            Specify competitor vehicle ID for comparison posts
  ${c.cyan}--topic, -t <topic>${c.reset}      Post topic template (default: ${c.bold}'review'${c.reset})
                         Available: ${c.magenta}review${c.reset} | ${c.magenta}comparison${c.reset} | ${c.magenta}news${c.reset} | ${c.magenta}heat-guide${c.reset} | ${c.magenta}charging-guide${c.reset}
  ${c.cyan}--mode, -m <mode>${c.reset}        Engine mode: ${c.magenta}rule_based${c.reset} (default) | ${c.magenta}ai_augmented${c.reset}
  ${c.cyan}--count, -c <number>${c.reset}     Number of posts to generate (default: 1)
  ${c.cyan}--output-dir, -o <dir>${c.reset}   Target output folder for posts.md and posts.json (default: ./)
  ${c.cyan}--all, -a${c.reset}                 Generate a complete publication batch across all top models & topics
  ${c.cyan}--list, -l${c.reset}                Display available vehicles, topics, and engine capabilities
  ${c.cyan}--help, -h${c.reset}                Show this help message

${c.yellow}${c.bold}EXAMPLES:${c.reset}
  ${c.dim}# 1. Quick review post for BYD Seal${c.reset}
  $ ${c.green}npm run generate-posts -- --vehicle byd-seal --topic review${c.reset}

  ${c.dim}# 2. Head-to-Head Comparison between Tesla Model 3 and BYD Seal${c.reset}
  $ ${c.green}npm run generate-posts -- --vehicle tesla-model-3 --compare byd-seal --topic comparison${c.reset}

  ${c.dim}# 3. Weekly EV News roundup post${c.reset}
  $ ${c.green}npm run generate-posts -- --topic news${c.reset}

  ${c.dim}# 4. Tropical Heat & Battery Care Guide for Thai 40°C climate${c.reset}
  $ ${c.green}npm run generate-posts -- --topic heat-guide --vehicle deepal-s07${c.reset}

  ${c.dim}# 5. Home TOU Tariff & Wallbox Charging Cost Economics Guide${c.reset}
  $ ${c.green}npm run generate-posts -- --topic charging-guide${c.reset}

  ${c.dim}# 6. Full publication batch (14+ posts saved to ./posts.md & ./posts.json)${c.reset}
  $ ${c.green}npm run generate-posts -- --all${c.reset}

  ${c.dim}# 7. List available vehicles and data catalog${c.reset}
  $ ${c.green}npm run generate-posts -- --list${c.reset}
`);
}

/**
 * Prints catalog of available vehicles and templates
 */
function printList(): void {
  console.log(`
${c.cyan}${c.bold}⚡ EV Selection Thailand — Database & Content Catalog${c.reset}

${c.yellow}${c.bold}🚗 Available Vehicles (${vehicles.length} Models in Thai Database):${c.reset}`);

  vehicles.forEach((v, i) => {
    const priceStr = formatPriceRangeTHB(v.trims);
    const fullName = getVehicleFullName(v);
    const topTrim = v.trims[v.trims.length - 1] || v.trims[0];
    console.log(
      `  ${c.green}${String(i + 1).padStart(2, ' ')}.${c.reset} ${c.bold}${v.id.padEnd(24, ' ')}${c.reset} | ${fullName.padEnd(26, ' ')} | ${c.cyan}${v.category.padEnd(9, ' ')}${c.reset} | ${priceStr.padEnd(26, ' ')} | ${topTrim.powerHp} hp`
    );
  });

  console.log(`
${c.yellow}${c.bold}📑 Content Topic Templates (5 Authentic Thai Editorial Formats):${c.reset}
  1. ${c.bold}review${c.reset}          - In-depth Thai review (8-section verdict, 40°C heat test, NVH, TOU savings, accessories)
  2. ${c.bold}comparison${c.reset}      - Head-to-head battle (spec matrix, cabin space, charging speed, winner verdict)
  3. ${c.bold}news${c.reset}            - Weekly Thai EV news & market insights (registrations, price war, subsidies, CPOs)
  4. ${c.bold}heat-guide${c.reset}      - Thai tropical climate guide (35-40°C range loss, AC optimization, battery protection)
  5. ${c.bold}charging-guide${c.reset}  - Home TOU tariff guide (0.48฿/km vs 2.71฿ Petrol, 8 CPO networks, Wallbox setup)

${c.yellow}${c.bold}🤖 Generation Engine Modes:${c.reset}
  • ${c.bold}rule_based${c.reset}      - Deterministic, 100% offline, zero-API-key required, rich Thai vocabulary variations
  • ${c.bold}ai_augmented${c.reset}    - Gemini API multimodal generation with structured domain grounding & auto-fallback
`);
}

/**
 * Builds the comprehensive publication batch for `--all`
 */
function buildAllBatchPlan(mode: GenerationMode): GenerationOptions[] {
  const plan: GenerationOptions[] = [
    // Top Vehicle In-Depth Reviews
    { vehicleId: 'byd-seal', topic: 'review', mode },
    { vehicleId: 'tesla-model-3-highland', topic: 'review', mode },
    { vehicleId: 'deepal-s07', topic: 'review', mode },
    { vehicleId: 'zeekr-x', topic: 'review', mode },
    { vehicleId: 'mg4-electric', topic: 'review', mode },
    { vehicleId: 'byd-atto-3', topic: 'review', mode },
    { vehicleId: 'deepal-s05', topic: 'review', mode },
    { vehicleId: 'geely-ex2', topic: 'review', mode },
    { vehicleId: 'byd-dolphin', topic: 'review', mode },
    { vehicleId: 'ora-good-cat', topic: 'review', mode },

    // Head-to-Head Comparisons
    {
      vehicleId: 'byd-seal',
      compareVehicleId: 'tesla-model-3-highland',
      topic: 'comparison',
      mode,
    },
    {
      vehicleId: 'deepal-s07',
      compareVehicleId: 'byd-atto-3',
      topic: 'comparison',
      mode,
    },
    {
      vehicleId: 'zeekr-x',
      compareVehicleId: 'mg4-electric',
      topic: 'comparison',
      mode,
    },

    // Editorial Guides & News
    { topic: 'news', mode },
    { vehicleId: 'byd-seal', topic: 'heat-guide', mode },
    { topic: 'charging-guide', mode },
  ];

  return plan;
}

/**
 * CLI Main Entry Point
 */
export async function main(cliArgs: string[] = process.argv.slice(2)): Promise<void> {
  const args = parseArgs(cliArgs);

  if (args.help) {
    printHelp();
    return;
  }

  if (args.list) {
    printList();
    return;
  }

  console.log(`
${c.cyan}${c.bold}⚡ ======================================================= ⚡${c.reset}
${c.cyan}${c.bold}   EV SELECTION THAILAND — FACEBOOK CONTENT GENERATOR       ${c.reset}
${c.cyan}${c.bold}⚡ ======================================================= ⚡${c.reset}
`);

  const startTime = Date.now();
  const mode: GenerationMode = args.mode || 'rule_based';
  const postsToGenerate: GeneratedPost[] = [];

  // Validate topic if provided
  if (args.topic && !VALID_TOPICS.includes(args.topic)) {
    console.error(
      `${c.red}❌ Error: Invalid topic '${args.topic}'.${c.reset} Valid options: ${VALID_TOPICS.join(
        ', '
      )}`
    );
    process.exit(1);
  }

  // Validate mode if provided
  if (args.mode && !VALID_MODES.includes(args.mode)) {
    console.error(
      `${c.red}❌ Error: Invalid mode '${args.mode}'.${c.reset} Valid options: ${VALID_MODES.join(
        ', '
      )}`
    );
    process.exit(1);
  }

  // 1. Generation Strategy: Batch --all
  if (args.all) {
    console.log(
      `${c.yellow}🚀 Generating full publication batch across top vehicles & templates...${c.reset}`
    );
    const plan = buildAllBatchPlan(mode);
    for (let i = 0; i < plan.length; i++) {
      const opt = plan[i];
      process.stdout.write(
        `  ${c.dim}[${i + 1}/${plan.length}]${c.reset} Generating ${c.magenta}${opt.topic}${c.reset} for ${c.green}${
          opt.vehicleId || 'Editorial'
        }${c.reset}... `
      );
      const post = await generatePost(opt);
      postsToGenerate.push(post);
      console.log(`${c.green}✓${c.reset} (${post.metadata.charCount} chars)`);
    }
  } else {
    // 2. Generation Strategy: Single or Custom Count
    let targetVehicle: VehicleSpec | undefined;
    if (args.vehicleId) {
      targetVehicle = resolveVehicle(args.vehicleId);
      if (!targetVehicle) {
        console.error(
          `${c.red}❌ Error: Vehicle '${args.vehicleId}' not found in Thai catalog.${c.reset}`
        );
        console.log(
          `${c.yellow}💡 Run with '--list' to see all ${vehicles.length} available models.${c.reset}`
        );
        process.exit(1);
      }
    }

    let compareVehicle: VehicleSpec | undefined;
    if (args.compareVehicleId) {
      compareVehicle = resolveVehicle(args.compareVehicleId);
      if (!compareVehicle) {
        console.error(
          `${c.red}❌ Error: Compare vehicle '${args.compareVehicleId}' not found.${c.reset}`
        );
        process.exit(1);
      }
    }

    const topic: PostTopic = args.topic || 'review';
    const count = Math.max(1, args.count);

    console.log(
      `${c.yellow}⚙️  Generating ${count} post(s) | Topic: ${c.magenta}${topic}${c.yellow} | Vehicle: ${c.green}${
        targetVehicle ? getVehicleFullName(targetVehicle) : 'Automatic/Default'
      }${c.yellow} | Mode: ${c.cyan}${mode}${c.reset}`
    );

    for (let i = 0; i < count; i++) {
      // If count > 1 and no specific vehicle, cycle through vehicles
      let currentVehicle = targetVehicle;
      if (!currentVehicle && (topic === 'review' || topic === 'comparison' || topic === 'heat-guide')) {
        currentVehicle = vehicles[i % vehicles.length];
      }

      process.stdout.write(
        `  ${c.dim}[${i + 1}/${count}]${c.reset} Synthesizing ${c.magenta}${topic}${c.reset} content... `
      );

      const post = await generatePost({
        vehicleId: currentVehicle ? currentVehicle.id : undefined,
        compareVehicleId: compareVehicle ? compareVehicle.id : undefined,
        topic,
        mode,
      });

      postsToGenerate.push(post);
      console.log(`${c.green}✓${c.reset} (${post.metadata.charCount} chars)`);
    }
  }

  // 3. Export to posts.md and posts.json
  console.log(`\n${c.yellow}📦 Exporting outputs to disk...${c.reset}`);
  const exportResult = await exportPosts(postsToGenerate, {
    outputDir: args.outputDir,
    markdownFileName: 'posts.md',
    jsonFileName: 'posts.json',
  });

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(2);

  // 4. Output Summary Table
  console.log(`
${c.green}${c.bold}🎉 SUCCESS! Generated ${postsToGenerate.length} Facebook Post(s) in ${durationSec}s${c.reset}

${c.bold}📊 Generated Posts Summary:${c.reset}
${'─'.repeat(80)}
`);

  postsToGenerate.forEach((p, idx) => {
    const num = String(idx + 1).padStart(2, ' ');
    const topicBadge = `[${p.topic}]`.padEnd(16, ' ');
    const vehicle = (p.vehicleModel || 'Editorial / General').padEnd(24, ' ');
    const chars = `${p.metadata.charCount} chars`.padStart(11, ' ');
    console.log(` ${c.cyan}${num}.${c.reset} ${c.magenta}${topicBadge}${c.reset} ${c.bold}${vehicle}${c.reset} ${c.dim}${chars}${c.reset}`);
    console.log(`     ${c.dim}↳ Title: ${p.title.slice(0, 65)}...${c.reset}`);
  });

  console.log(`
${'─'.repeat(80)}
${c.bold}📁 Output Files:${c.reset}
  📄 ${c.green}${exportResult.markdownPath || 'posts.md'}${c.reset}  ${c.dim}(Markdown format ready for copy-paste to Facebook)${c.reset}
  📊 ${c.green}${exportResult.jsonPath || 'posts.json'}${c.reset}  ${c.dim}(Structured JSON with metadata, analytics & specs)${c.reset}

${c.yellow}💡 Next Steps:${c.reset}
  1. Open ${c.bold}posts.md${c.reset} to preview and copy posts directly to Meta Business Suite / Facebook Page.
  2. Use ${c.bold}posts.json${c.reset} for automated publishing or API integration.
  3. Suggested media assets are located in the ${c.bold}public/images/${c.reset} folder.
`);
}

// Execute main if run directly as CLI
if (require.main === module || process.argv[1]?.endsWith('generate-posts.ts')) {
  main().catch((err) => {
    console.error(`\n${c.red}❌ Fatal execution error:${c.reset}`, err);
    process.exit(1);
  });
}
