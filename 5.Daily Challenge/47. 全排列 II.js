// 47. 全排列 II

function permuteUnique(nums) {
	nums = nums.sort((a, b) => a - b)
	let res = []
	let track = []
	let used = new Array(nums.length).fill(false)
	const traverse = (track) => {
		if (track.length === nums.length) {
			res.push(Array.from(track))
			return
		}

		for (let i = 0; i < nums.length; i++) {
			// used[i - 1] == true，说明同一树支nums[i - 1]使用过
			// used[i - 1] == false，说明同一树层nums[i - 1]使用过
			if (i > 0 && nums[i] == nums[i - 1] && used[i - 1] == false) {
				continue
			}
			// 当前还没用过
			if (used[i] == false) {
				used[i] = true
				track.push(nums[i])
				traverse(track)
				track.pop()
				used[i] = false
			}
		}
	}
	traverse(track)
	return res
}
console.log(permuteUnique([1, 1, 2]))
