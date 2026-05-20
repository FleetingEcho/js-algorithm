# 文档质量审计

> 核心一句话：**这份知识库要长期可用，必须定期检查统计、链接、代码块和双语实现是否一致。**

---

## 当前审计结果

| 项目 | 结果 |
|---|---|
| 核心算法框架文件数 | 40 个 Markdown 文件（`algorithm-frameworks/00-39`） |
| 内容文件数 | 47 个 Markdown 文件（不含 README） |
| Mermaid 图数量 | 126 个 |
| Markdown 代码围栏 | 已检查未发现未闭合代码块 |
| 坏链接残留 | 已检查旧的暂缺关联阅读引用 |
| 核心一句话覆盖 | 除 `INDEX.md` / `README.md` 入口文件外，专题文件已覆盖 |
| 关联阅读覆盖 | 除 `INDEX.md` / `README.md` 入口文件外，专题文件已覆盖 |
| 新增复盘工具 | `90-review-and-pattern-training.md`, `91-interview-day-cheatsheet.md` |
| 新增维护索引 | `indexes/ALGORITHM-INDEX.md`, `indexes/QUESTION-INDEX.md`, `docs/92-quality-audit.md` |

---

## 建议检查命令

```bash
# 一键完整审计
node scripts/audit-docs.mjs

# 重新生成完整题号索引
node scripts/generate-question-index.mjs

# 核心算法框架文件数，不含 algorithm-frameworks/README.md
find algorithm-frameworks -maxdepth 1 -name '*.md' ! -name README.md | wc -l

# Mermaid 图数量
rg -n '^```mermaid' algorithm-frameworks/*.md | wc -l

# 检查代码围栏是否成对
for f in algorithm-frameworks/*.md README.md; do
  n=$(rg -c '^```' "$f" || true)
  if [ $((n % 2)) -ne 0 ]; then
    printf 'unbalanced %s %s\n' "$n" "$f"
  fi
done

# 查找常见占位和坏引用
rg -n 'TODO|TBD|暂缺|此文件暂缺' README.md algorithm-frameworks/*.md

# 统计 TypeScript / Python 代码块
for f in algorithm-frameworks/*.md; do
  ts=$(rg -c '^```typescript$' "$f" || true)
  py=$(rg -c '^```python$' "$f" || true)
  printf 'ts=%2s py=%2s %s\n' "$ts" "$py" "$f"
done

# 检查核心一句话和关联阅读覆盖
for f in algorithm-frameworks/*.md training/*.md reference/*.md docs/*.md; do
  case "$f" in algorithm-frameworks/README.md) continue;; esac
  core=$(rg -c '核心一句话' "$f" || true)
  rel=$(rg -c '关联阅读' "$f" || true)
  if [ "$core" = "0" ] || [ "$rel" = "0" ]; then
    printf 'metadata gap %s core=%s rel=%s\n' "$f" "$core" "$rel"
  fi
done

# 检查专题索引中的相对 Markdown 链接是否存在
perl -nE 'while (/\]\(([^)#]+\.md)/g) { say $1 }' indexes/ALGORITHM-INDEX.md |
  sort -u |
  while read f; do
    test -f "indexes/$f" || printf 'missing index link %s\n' "$f"
  done
```

---

## 文章质量标准

每篇算法专题尽量满足：

```
[ ] 核心一句话清楚。
[ ] 有 Mermaid 决策图或流程图。
[ ] 有经典题表。
[ ] 关键模板同时提供 TypeScript 和 Python。
[ ] 有复杂度速查表。
[ ] 有易错点或自查清单。
[ ] 有关联阅读。
```

---

## 双语代码块检查标准

不是所有文章都必须有代码，例如 `34/38/90/91/92` 属于策略或复盘文档。但算法实现类文章应尽量做到：

| 文件类型 | 要求 |
|---|---|
| 算法专题 | TypeScript + Python 成对 |
| 语言参考 | 合并入口可同时保留 TypeScript + Python |
| 复盘 / 面试表达 | 不强制代码 |
| 总览 / 索引 | 不强制代码 |

---

## 维护节奏

| 频率 | 检查内容 |
|---|---|
| 每次新增文件后 | README 统计、文件总览、关联阅读、索引链接 |
| 每周 | 代码围栏、坏引用、错题集是否更新 |
| 每月 | 必背题清单是否调整、薄弱专题是否需要扩写 |
| 面试前一周 | 按 `training/90-review-and-pattern-training.md` 的 7 天冲刺表和每日 30 分钟方案执行 |

---

> **关联阅读：** `../indexes/ALGORITHM-INDEX.md` → `../training/90-review-and-pattern-training.md`
