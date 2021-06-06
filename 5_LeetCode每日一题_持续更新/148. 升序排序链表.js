// 大量数据排序还是归并快一些
// 148. 升序排序链表
const mergeSort = (arr) => {
	const len = arr.length
	if (len < 2) return arr
	let middle = Math.floor(arr.length / 2)
	let left = arr.slice(0, middle)
	let right = arr.slice(middle)
	const res = merge(mergeSort(left), mergeSort(right))
	return res
}
var merge = (left, right) => {
	const result = []
	while (left.length > 0 && right.length > 0) {
		if (left[0] <= right[0]) {
			// 删除left第一位
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	// left或right可能有一个先清空，但另一个仍有值
	return result.concat(left).concat(right)
}

// ! 链表版

var sortList = function (head) {
	// base
	if (!head || !head.next) {
		return head
	}
	let l = head,
		r = head.next
	while (r && r.next) {
		l = l.next
		r = r.next.next
	}
	const mid = l.next //快慢指针获取到中点
	l.next = null // head此时被截取到中点
	return merge(sortList(head), sortList(mid)) //递归两个子链表
}

var merge = (l, r, guard = new ListNode(0)) => {
	// 借助一个虚拟节点
	const head = guard
	// l 和r都有可能先到尾部null
	while (l || r) {
		if (!r || (l && l.val < r.val)) {
			// l存在且值小
			guard.next = l
			l = l.next
		} else {
			// l不存在或者 l值大
			guard.next = r
			r = r.next
		}
		guard = guard.next
	}
	return head.next
}

// 自己改的快速排序，   对大数据量 处理较慢， 不如归并排序
var sortList = (head) => {
	if (!head || !head.next) {
		return head
	}
	let left = new ListNode(0),
		right = new ListNode(0)
	let key = new ListNode(head.val)
	head = head.next
	let n1 = left,
		n2 = right
	while (head !== null) {
		if (head.val < key.val) {
			let temp = head.next
			head.next = null
			left.next = head
			head = temp
			left = left.next
		} else {
			let temp = head.next
			head.next = null
			right.next = head
			head = temp
			right = right.next
		}
	}
	let n = new ListNode(0)
	let l = sortList(n1.next)
	let r = sortList(n2.next)
	// l不一定存在，且r也不一定存在
	if (l) {
		n.next = l
		while (l.next) {
			l = l.next
		}
		l.next = key
	} else {
		n.next = key
	}
	if (r) {
		key.next = r
	}
	return n.next
}

//别人的快慢指针排序
var sortList = function (head) {
	var res = new ListNode(0)
	res.next = head
	_quickSort(res.next)
	return res.next
}
// 从小到大排序
// 最差情况下每次只能换一位出来，例如 9->8->7->6->5。 快慢指针始终同一位置，最后只有末尾换了，5->6->7->8->9
var _quickSort = (start, end = null) => {
	if (start === end) return
	let target = start.val,
		l = start,
		r = start.next
	while (r !== end) {
		if (r.val < target) {
			l = l.next
			;[l.val, r.val] = [r.val, l.val]
		}
		r = r.next //快指针
	}
	;[l.val, start.val] = [start.val, l.val]
	_quickSort(start, l)
	_quickSort(l.next, end)
}
