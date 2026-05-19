# 链表技巧

> 核心一句话：**链表题的灵魂是画图 + dummy 头 + 指针操作顺序。大部分问题可以用双指针（快慢/前后）解决。**

---

## 🎯 经典 LeetCode 题目

| #   | 题号                                                                   | 题目                      | 难度 | 核心考点              | 推荐指数 |
| --- | ---------------------------------------------------------------------- | ------------------------- | :--: | --------------------- | :------: |
| 1   | [206](https://leetcode.cn/problems/reverse-linked-list/)               | 反转链表                  |  🟢  | 迭代/递归反转         |    ⭐    |
| 2   | [21](https://leetcode.cn/problems/merge-two-sorted-lists/)             | 合并两个有序链表          |  🟢  | 归并 + dummy 头       |    ⭐    |
| 3   | [141](https://leetcode.cn/problems/linked-list-cycle/)                 | 环形链表                  |  🟢  | 快慢指针判环          |    ⭐    |
| 4   | [142](https://leetcode.cn/problems/linked-list-cycle-ii/)              | 环形链表 II               |  🟡  | 相遇后找入口          |   ⭐⭐   |
| 5   | [160](https://leetcode.cn/problems/intersection-of-two-linked-lists/)  | 相交链表                  |  🟢  | 各走 A+B              |    ⭐    |
| 6   | [19](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)   | 删除链表的倒数第 N 个结点 |  🟡  | 快指针先走 N 步       |    ⭐    |
| 7   | [234](https://leetcode.cn/problems/palindrome-linked-list/)            | 回文链表                  |  🟢  | 快慢找中点 + 反转后半 |    ⭐    |
| 8   | [83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/) | 删除排序链表中的重复元素  |  🟢  | 遍历删除              |    ⭐    |
| 9   | [86](https://leetcode.cn/problems/partition-list/)                     | 分隔链表                  |  🟡  | 两个链表分别收集      |   ⭐⭐   |
| 10  | [92](https://leetcode.cn/problems/reverse-linked-list-ii/)             | 反转链表 II               |  🟡  | 区间反转              |   ⭐⭐   |
| 11  | [138](https://leetcode.cn/problems/copy-list-with-random-pointer/)     | 复制带随机指针的链表      |  🟡  | 哈希表/原地复制       |  ⭐⭐⭐  |
| 12  | [143](https://leetcode.cn/problems/reorder-list/)                      | 重排链表                  |  🟡  | 找中点 + 反转 + 合并  |   ⭐⭐   |
| 13  | [148](https://leetcode.cn/problems/sort-list/)                         | 排序链表                  |  🟡  | 归并排序链表版        |  ⭐⭐⭐  |
| 14  | [328](https://leetcode.cn/problems/odd-even-linked-list/)              | 奇偶链表                  |  🟡  | 奇偶指针分离          |   ⭐⭐   |
| 15  | [876](https://leetcode.cn/problems/middle-of-the-linked-list/)         | 链表的中间结点            |  🟢  | 快慢指针              |    ⭐    |
| 16  | [25](https://leetcode.cn/problems/reverse-nodes-in-k-group/)           | K 个一组翻转链表          |  🔴  | 分段反转 + 递归       |  ⭐⭐⭐  |

---

## 📋 目录

1. [核心规律](#-核心规律)
2. [反转链表（迭代 + 递归）](#-反转链表迭代--递归)
3. [快慢指针（找中点/判环）](#-快慢指针找中点判环)
4. [复杂度速查表](#-复杂度速查表)

---

## 🧠 核心规律

```typescript
// linked-list-framework.ts

class ListNode<T> {
  constructor(
    public val: T,
    public next: ListNode<T> | null = null
  ) {}
}

// 🔧 常用工具函数
function getMid<T>(head: ListNode<T> | null): ListNode<T> | null {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverse<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev = null,
    curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
```

---

## 🔢 反转链表（迭代 + 递归）

```typescript
// reverse-linked-list.ts
/**
 * 206. 反转链表（迭代）
 */
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
  let prev: ListNode<T> | null = null;
  let curr = head;

  while (curr !== null) {
    const next = curr.next; // 保存下一个节点
    curr.next = prev; // 反转指针
    prev = curr; // prev 前移
    curr = next; // curr 前移
  }

  return prev;
}

/**
 * 206. 反转链表（递归）
 */
function reverseListRecursive<T>(head: ListNode<T> | null): ListNode<T> | null {
  if (head === null || head.next === null) return head;

  const newHead = reverseListRecursive(head.next);
  head.next.next = head; // 让下一个节点指向自己
  head.next = null; // 自己指向 null

  return newHead;
}

/**
 * 92. 反转链表 II — 反转区间 [left, right]
 */
function reverseBetween<T>(
  head: ListNode<T> | null,
  left: number,
  right: number
): ListNode<T> | null {
  const dummy = new ListNode<T>(null as unknown as T, head);
  let prev: ListNode<T> | null = dummy;

  // ① 找到 left 的前一个节点
  for (let i = 1; i < left; i++) {
    prev = prev!.next;
  }

  // ② 反转 [left, right] 区间
  let curr = prev!.next;
  let next: ListNode<T> | null = null;
  let tail = curr; // 反转后的尾节点

  for (let i = left; i <= right; i++) {
    next = curr!.next;
    curr!.next = prev!.next;
    prev!.next = curr;
    curr = next;
  }

  tail!.next = curr; // 连接剩余部分
  return dummy.next;
}
```

---

## 🔢 快慢指针（找中点/判环）

```typescript
/**
 * 141. 环形链表
 */
function hasCycle<T>(head: ListNode<T> | null): boolean {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

/**
 * 234. 回文链表
 * 步骤：找中点 → 反转后半 → 比较
 */
function isPalindrome<T>(head: ListNode<T> | null): boolean {
  // ① 快慢指针找中点
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // ② 反转后半部分
  let second = reverse(slow);
  let first = head;

  // ③ 比较前半和后半
  while (second) {
    if (first!.val !== second.val) return false;
    first = first!.next;
    second = second.next;
  }

  return true;
}

/**
 * 160. 相交链表
 * 思路：两个指针各走 A+B，相遇点即交点
 */
function getIntersectionNode<T>(
  headA: ListNode<T> | null,
  headB: ListNode<T> | null
): ListNode<T> | null {
  let p1 = headA,
    p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB; // A 走完了走 B
    p2 = p2 ? p2.next : headA; // B 走完了走 A
  }

  return p1;
}
```

---

## 📊 复杂度速查表

| 问题         | 时间复杂度 | 空间复杂度 | 关键技巧   |
| ------------ | :--------: | :--------: | ---------- |
| 206 反转链表 |    O(n)    |    O(1)    | 三指针迭代 |
| 21 合并链表  |   O(n+m)   |    O(1)    | dummy 头   |
| 141 判环     |    O(n)    |    O(1)    | 快慢指针   |
| 160 相交链表 |   O(n+m)   |    O(1)    | 走完互换   |
| 234 回文链表 |    O(n)    |    O(1)    | 中点+反转  |
| 92 反转区间  |    O(n)    |    O(1)    | 头插法     |
| 148 排序链表 | O(n log n) |  O(log n)  | 归并排序   |
| 25 K 组反转  |    O(n)    |   O(n/k)   | 分段递归   |

---

## 💪 白板挑战

```typescript
function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {}
```

---

> **关联阅读：** `14-two-pointers.md` → `20-n-sum-problems.md`
