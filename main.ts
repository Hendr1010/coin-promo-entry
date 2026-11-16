const { mkdirSync, copyFileSync, existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const launchPath = join(__dirname, 'LAUNCH.json');
if (!existsSync(launchPath)) {
  throw new Error('LAUNCH.json is missing; record the finalized launch before running.');
}
const launch = JSON.parse(readFileSync(launchPath, 'utf8'));
for (const field of ['mint', 'create_signature']) {
  if (typeof launch?.[field] !== 'string' || !launch[field].trim()) {
    throw new Error(`LAUNCH.json ${field} must be a non-empty string.`);
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(launchPath, join(outputDir, 'LAUNCH.json'));
console.log(`Copied LAUNCH.json for mint ${launch.mint} to ${outputDir}.`);
