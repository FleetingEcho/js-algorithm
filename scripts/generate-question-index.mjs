import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const listPath = path.join(root, 'List.md');
const outPath = path.join(root, 'indexes', 'QUESTION-INDEX.md');

const topicRules = [
  [/Lower to Uppercase|String to Integer|Char to Integer|Max of Array|Max of 3 Numbers|Generate ArrayList|Swap Two Integers|Reverse 3-digit|Simple Calculator|Implement Queue|Implement Stack/i, ['reference/95-basic-coding-challenges.md', '语言基础 / 手写结构']],
  [/Fibonacci|Climbing Stairs/i, ['algorithm-frameworks/06-dp-framework.md', '动态规划']],
  [/二分|Binary Search|Sqrt|Peak|Rotated|Mountain|Copy Books|Wood Cut|Koko|Divisor|Bad Version|Median of Two Sorted Arrays/i, ['algorithm-frameworks/05-binary-search.md', '二分']],
  [/滑动窗口|Window|Substring|Subarray Product|Permutation in String|Subsequence/i, ['algorithm-frameworks/16-sliding-window.md', '滑动窗口']],
  [/前缀|Prefix|Range Sum|Subarray Sum|Product of Array Except Self|Random Pick|Continuous Subarray Sum/i, ['algorithm-frameworks/20-prefix-sum-and-diff-array.md', '前缀和 / 差分']],
  [/单调栈|Daily Temperatures|Next Greater|Histogram|Subarray Minimums|Stock Span/i, ['algorithm-frameworks/18-monotonic-stack.md', '单调栈']],
  [/单调队列|Sliding Window Maximum|Shortest Subarray|Absolute Diff/i, ['algorithm-frameworks/36-monotonic-queue.md', '单调队列']],
  [/Two Sum|3Sum|4Sum|Triangle Count|nSum|Closest|Difference equals/i, ['algorithm-frameworks/21-n-sum-problems.md', 'nSum / 双指针']],
  [/双指针|Remove Duplicates|Move Zeroes|Sort Colors|Container With Most Water|Trapping Rain Water|Merge Sorted Array|Partition Array/i, ['algorithm-frameworks/15-two-pointers.md', '双指针']],
  [/Linked List|List Cycle|Reverse Linked|Palindrome Linked|Odd Even Linked|Merge Two Sorted Lists|Intersection of Two Linked/i, ['algorithm-frameworks/19-linked-list-techniques.md', '链表']],
  [/Interval|Meeting Rooms|Airplanes|Employee Free Time|Calendar|Skyline|Sweep/i, ['algorithm-frameworks/25-interval-and-sweep-line.md', '区间 / 扫描线']],
  [/Palindrome|回文/i, ['algorithm-frameworks/22-palindrome-and-string-techniques.md', '回文 / 字符串']],
  [/BFS|Level Order|Open the Lock|Word Ladder|Rotting Oranges|Matrix|Bus Routes|Shortest Path|Minimum Height Trees/i, ['algorithm-frameworks/03-bfs-framework.md', 'BFS']],
  [/DFS|Backtracking|Combination|Permutation|Subsets|N-Queens|Word Search|Brace Expansion|Islands|Surrounded Regions|Number of Ships/i, ['algorithm-frameworks/04-backtracking-subsets-permutations-combinations.md', 'DFS / 回溯']],
  [/Binary Tree|BST|Tree|LCA|Lowest Common Ancestor|Diameter|Invert|Subtree|Leaves|Vertical Order|Serialize|Deserialize/i, ['algorithm-frameworks/14-binary-tree-advanced.md', '二叉树']],
  [/Graph|Course Schedule|Evaluate Division|Network Delay|Dijkstra|Clone Graph|Bipartite|MST|Minimum Cost/i, ['algorithm-frameworks/27-graph-algorithms.md', '图']],
  [/Union Find|Accounts Merge|Provinces|Sentence Similarity|Connected|Redundant Connection/i, ['algorithm-frameworks/26-union-find.md', '并查集']],
  [/Trie|Word Search II|Search Suggestions|Prefix|Word Dictionary|Replace Words/i, ['algorithm-frameworks/30-trie-prefix-tree.md', 'Trie']],
  [/Heap|Priority Queue|Median from Data Stream|Top K|Kth Largest|Kth Smallest|High Five|Frequency Stack/i, ['algorithm-frameworks/24-heap-and-priority-queue.md', '堆 / 优先队列']],
  [/Hash|HashMap|Hashset|Anagram|Intersection|Consecutive|Bulls and Cows|Tic-Tac-Toe|Two Sum/i, ['algorithm-frameworks/23-hash-table-techniques.md', '哈希表']],
  [/Stack|Parentheses|Asteroid|Browser History|Max Stack|Min Stack|RPN/i, ['algorithm-frameworks/18-monotonic-stack.md', '栈']],
  [/Backpack|Coin Change|Target Sum|Partition Equal|Combination Sum IV|Ones and Zeroes/i, ['algorithm-frameworks/07-knapsack-problems.md', '背包']],
  [/Stock|House Robber|Decode Ways|Climbing Stairs|LIS|Longest Increasing|DP|Dungeon|Squares|Delete and Earn|Stone Game|Frog Jump|Job Scheduling/i, ['algorithm-frameworks/06-dp-framework.md', '动态规划']],
  [/Edit Distance|LCS|Common Subsequence|Delete Sum|Interleaving|Distinct Subsequences/i, ['algorithm-frameworks/10-edit-distance.md', '双序列 DP']],
  [/Greedy|Jump Game|Partition Labels|Gas Station|Task Scheduler|Hand of Straights/i, ['algorithm-frameworks/33-greedy.md', '贪心']],
  [/Segment Tree|Binary Index Tree|Fenwick|Range Sum Query - Mutable|Count of Smaller|Reverse Pairs/i, ['algorithm-frameworks/35-segment-tree-and-bit.md', '树状数组 / 线段树']],
  [/String Matching|KMP|Rabin|Z-Algorithm|strStr|Repeating Substring/i, ['algorithm-frameworks/28-string-matching.md', '字符串匹配']],
  [/LRU|LFU|Cache/i, ['algorithm-frameworks/29-lru-and-lfu-cache.md', '缓存设计']],
  [/Design|Randomized|File System|Logger|Hit Counter|Iterator/i, ['algorithm-frameworks/32-design-and-ood.md', '设计题']],
  [/Bit|Single Number|Hamming|Power of Two|Counting Bits|不用加减乘除|二进制/i, ['algorithm-frameworks/31-bit-manipulation-and-math.md', '位运算']],
  [/Sort|Sorting|Largest Number|Pancake/i, ['algorithm-frameworks/17-sorting-algorithms.md', '排序']],
  [/Matrix|矩阵|二维|Spiral|Rotate Image|Set Matrix|Range Sum Query 2D/i, ['algorithm-frameworks/37-matrix-techniques.md', '矩阵']],
];

function normalizeCell(cell) {
  return cell.trim().replace(/\s+/g, ' ');
}

function pickTopic(section, title, idea) {
  const text = `${section} ${title} ${idea}`;
  for (const [pattern, topic] of topicRules) {
    if (pattern.test(text)) return topic;
  }
  return ['algorithm-frameworks/34-algorithm-pattern-recognition.md', '模式识别'];
}

function parseRows(markdown) {
  const rows = [];
  let major = '';
  let section = '';

  for (const raw of markdown.split(/\r?\n/)) {
    const line = raw.trim();
    const majorMatch = line.match(/^##\s+(.+)/);
    const sectionMatch = line.match(/^###\s+(.+)/);
    if (majorMatch) {
      major = majorMatch[1].trim();
      continue;
    }
    if (sectionMatch) {
      section = sectionMatch[1].trim();
      continue;
    }
    if (!line.startsWith('|')) continue;
    if (/完成状态|:--|:------/.test(line)) continue;

    const cells = line.split('|').slice(1, -1).map(normalizeCell);
    if (cells.length < 5) continue;

    const [status, id, title, difficulty, idea] = cells;
    if (!id || !title || !difficulty) continue;
    const [file, pattern] = pickTopic(`${major} / ${section}`, title, idea);

    rows.push({
      status,
      id,
      title,
      difficulty,
      idea,
      note: cells.slice(5).join(' / '),
      major,
      section,
      file,
      pattern,
    });
  }
  return rows;
}

function render(rows) {
  const byMajor = new Map();
  for (const row of rows) {
    if (!byMajor.has(row.major)) byMajor.set(row.major, []);
    byMajor.get(row.major).push(row);
  }

  const lines = [];
  lines.push('# 题号索引');
  lines.push('');
  lines.push('> 核心一句话：**这是从 `List.md` 生成的完整题号跳转索引，用来按题号、题名、分类快速跳到对应算法专题。**');
  lines.push('>');
  lines.push('> 生成方式：`node scripts/generate-question-index.mjs`');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 使用方式');
  lines.push('');
  lines.push('| 你要查什么 | 怎么搜 |');
  lines.push('|---|---|');
  lines.push('| 题号 | `Cmd/Ctrl + F` 搜 `560`、`Lint-437` |');
  lines.push('| 题名 | 搜 `Minimum Window`、`Course Schedule` |');
  lines.push('| 模式 | 搜 `滑动窗口`、`二分`、`DP` |');
  lines.push('| 分类 | 搜 `二分法`、`动态规划`、`数据结构` |');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## 统计');
  lines.push('');
  lines.push(`| 项目 | 数量 |`);
  lines.push(`|---|---:|`);
  lines.push(`| 索引条目数 | ${rows.length} |`);
  lines.push(`| 来源文件 | \`List.md\` |`);
  lines.push(`| 说明 | 包含 \`List.md\` 中主库、补充题和 LintCode/Premium 条目 |`);
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const [major, group] of byMajor) {
    lines.push(`## ${major}`);
    lines.push('');

    let currentSection = '';
    for (const row of group) {
      if (row.section !== currentSection) {
        if (currentSection) lines.push('');
        currentSection = row.section;
        lines.push(`### ${currentSection}`);
        lines.push('');
        lines.push('| 状态 | 题号 | 题名 | 难度 | 模式 | 跳转 | 思路 |');
        lines.push('|---|---|---|---|---|---|---|');
      }
      const label = path.basename(row.file, '.md');
      lines.push(`| ${row.status} | ${row.id} | ${row.title} | ${row.difficulty} | ${row.pattern} | [${label}](../${row.file}) | ${row.idea} |`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('> **关联阅读：** [详细专题索引](ALGORITHM-INDEX.md) → [模式识别](../algorithm-frameworks/34-algorithm-pattern-recognition.md) → [错题复盘与题型训练](../training/90-review-and-pattern-training.md)');
  lines.push('');
  return `${lines.join('\n')}`;
}

const markdown = fs.readFileSync(listPath, 'utf8');
const rows = parseRows(markdown);
fs.writeFileSync(outPath, render(rows));
console.log(`Generated QUESTION-INDEX.md with ${rows.length} questions.`);
