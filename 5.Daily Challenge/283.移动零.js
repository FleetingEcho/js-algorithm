// 283.移动零
function moveZeroes(nums) {
	let i = 0
	for (let j = 0; j < nums.length; j++) {
		//只要不为0就往前挪
		if (nums[j] != 0) {
			//i指向的值和j指向的值交换
			;[nums[i], nums[j]] = [nums[j], nums[i]]
			i++
		}
	}
}
