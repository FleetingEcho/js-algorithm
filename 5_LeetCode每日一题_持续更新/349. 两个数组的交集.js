// 349. 两个数组的交集
/*
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
*/

var intersection = function (nums1, nums2) {
	if (nums1.length === 0 || nums2.length === 0) {
		return []
	}
	nums1 = nums1.sort((a, b) => a - b)
	nums2 = nums2.sort((a, b) => a - b)
	let res = new Set()
	let i = 0,
		j = 0
	while (i < nums1.length && j < nums2.length) {
		while (nums1[i] < nums2[j]) {
			i++
		}
		while (nums1[i] > nums2[j]) {
			j++
		}
		if (nums1[i] == nums2[j]) {
			res.add(nums2[j])
			i++
			j++
		}
	}

	return [...res]
}

const a = [1, 2, 2, 1]
const b = [2, 2]
let nums1 = [4, 9, 5],
	nums2 = [9, 4, 9, 8, 4]
console.log(intersection(a, b))
console.log(intersection(nums1, nums2))
