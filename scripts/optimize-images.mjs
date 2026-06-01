import { mkdir, readdir, rm, stat } from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';
import { spawn } from 'node:child_process';

const publicDir = join(process.cwd(), 'public');
const outputDir = join(publicDir, 'optimized');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png']);
const originalOnlyPatterns = [/koh logo/i, /^our brands\//i];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (fullPath.startsWith(outputDir)) continue;
      files.push(...(await walk(fullPath)));
    } else if (imageExtensions.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args);

    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    child.on('close', (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(stderr || `${command} exited with code ${code}`));
    });
  });
}

async function getLargestDimension(input) {
  const output = await run('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', input]);
  const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1] || 0);
  const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1] || 0);
  return Math.max(width, height);
}

async function runSips(input, output) {
  const largestDimension = await getLargestDimension(input);
  const maxDimension = Math.min(largestDimension || 1400, 1400);

  return run('sips', [
    '-Z',
    String(maxDimension),
    '-s',
    'format',
    'jpeg',
    '-s',
    'formatOptions',
    'normal',
    input,
    '--out',
    output,
  ]);
}

const files = await walk(publicDir);
let totalBefore = 0;
let totalAfter = 0;

await rm(outputDir, { recursive: true, force: true });

for (const file of files) {
  const rel = relative(publicDir, file);
  if (originalOnlyPatterns.some((pattern) => pattern.test(rel))) continue;
  const output = join(outputDir, rel).replace(/\.(png|jpe?g)$/i, '.jpg');
  await mkdir(dirname(output), { recursive: true });
  await runSips(file, output);

  const before = await stat(file);
  const after = await stat(output);
  totalBefore += before.size;
  totalAfter += after.size;
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
console.log(`Optimized ${files.length} images: ${mb(totalBefore)} -> ${mb(totalAfter)}`);
