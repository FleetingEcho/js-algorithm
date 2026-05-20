import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const algorithmDir = path.join(root, 'algorithm-frameworks');
const expectedOldRefs = [
  '90-review-template.md',
  '91-review-schedule.md',
  '93-pattern-drills.md',
  '94-pattern-comparison.md',
  '96-js-basics.md',
  '97-data-structures-implementations.md',
  '98-python-basics.md',
];
const metadataExempt = new Set([
  path.join(algorithmDir, 'README.md'),
  path.join(root, 'indexes', 'ALGORITHM-INDEX.md'),
  path.join(root, 'indexes', 'QUESTION-INDEX.md'),
]);
const languageExempt = new Set([
  path.join(algorithmDir, '34-algorithm-pattern-recognition.md'),
  path.join(algorithmDir, '38-interview-explanation-patterns.md'),
  path.join(algorithmDir, '39-must-solve-list.md'),
  path.join(algorithmDir, 'README.md'),
]);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '.git') out.push(...walk(full));
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function count(pattern, text) {
  return [...text.matchAll(pattern)].length;
}

function rel(file) {
  return path.relative(root, file);
}

const allMarkdown = walk(root).filter((file) => file.endsWith('.md'));
const frameworkMarkdown = fs.readdirSync(algorithmDir)
  .filter((name) => name.endsWith('.md') && name !== 'README.md')
  .map((name) => path.join(algorithmDir, name));

const errors = [];
let mermaid = 0;
let tsBlocks = 0;
let pyBlocks = 0;

for (const file of allMarkdown) {
  const text = fs.readFileSync(file, 'utf8');
  const fences = count(/^```/gm, text);
  if (fences % 2 !== 0) errors.push(`Unbalanced code fence: ${rel(file)} (${fences})`);
  mermaid += count(/^```mermaid$/gm, text);
  tsBlocks += count(/^```typescript$/gm, text);
  pyBlocks += count(/^```python$/gm, text);

  for (const oldRef of expectedOldRefs) {
    if (text.includes(oldRef)) errors.push(`Old reference remains in ${rel(file)}: ${oldRef}`);
  }

  if (file.startsWith(algorithmDir) && !metadataExempt.has(file)) {
    if (!text.includes('核心一句话')) errors.push(`Missing 核心一句话: ${rel(file)}`);
    if (!text.includes('关联阅读')) errors.push(`Missing 关联阅读: ${rel(file)}`);
  }

  const linkMatches = text.matchAll(/\]\(([^)#]+\.md)(?:#[^)]+)?\)/g);
  for (const match of linkMatches) {
    const target = match[1];
    const targetPath = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(targetPath)) {
      errors.push(`Broken markdown link in ${rel(file)}: ${target}`);
    }
  }
}

for (const file of frameworkMarkdown) {
  if (languageExempt.has(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const ts = count(/^```typescript$/gm, text);
  const py = count(/^```python$/gm, text);
  if (ts > 0 && py === 0) errors.push(`TypeScript without Python: ${rel(file)}`);
}

console.log(`Algorithm framework files: ${frameworkMarkdown.length}`);
console.log(`Mermaid charts: ${mermaid}`);
console.log(`TypeScript code blocks: ${tsBlocks}`);
console.log(`Python code blocks: ${pyBlocks}`);

if (errors.length > 0) {
  console.error('\nAudit failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Audit passed.');
