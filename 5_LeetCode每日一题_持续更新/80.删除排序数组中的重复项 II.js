/*
80.删除排序数组中的重复项 II 
输入：nums = [0,0,1,1,1,1,2,3,3]
输出：7, nums = [0,0,1,1,2,3,3]
解释：函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。 
你不需要考虑数组中超出新长度后面的元素。
*/

// ! 每跨越两个间隔，不相同则加1
function removeDuplicates(arr) {
	let i = 0
	for (let n of arr) {
		if (i < 2 || n != arr[i - 2]) {
			arr[i] = n
			i++
		}
	}
	return i
}
