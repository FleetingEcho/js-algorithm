// 382. 链表随机节点
/* 
给定一个单链表，随机选择链表的一个节点，并返回相应的节点值。保证每个节点被选的概率一样。

进阶:
如果链表十分大且长度未知，如何解决这个问题？你能否使用常数级空间复杂度实现？

初始化一个单链表 [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

getRandom()方法应随机返回1,2,3中的一个，保证每个元素被返回的概率相等。
solution.getRandom();



*/
//! [0, 1)
Math.random()

// ! 获取 [a,b)   -----用的最多
Math.floor(Math.random() * (b - a) + a)

// ! 获取 (a,b)
Math.floor(Math.random() * (b - a) + a + 1) //Math.random(b)本身就取不到b

// ! 获取[a,b]随机数
Math.floor(Math.random() * (b + 1 - a) + a) //保证能取到b

// ! 获取 (a,b]
Math.floor(Math.random() * (b + 1 - a) + a + 1)

// 蓄水池抽样算法

class Solution {
	constructor(head) {
		this.head = head
	}
	getRandom = () => {
		let cur = this.head
		let res = cur.val
		let count = 0
		while (cur) {
			count++
			let rand = Math.floor(Math.random() * count + 1) // 取[1,count]
			if (rand === count) {
				res = cur.val
			}
			cur = cur.next
		}
		return res
	}
}
