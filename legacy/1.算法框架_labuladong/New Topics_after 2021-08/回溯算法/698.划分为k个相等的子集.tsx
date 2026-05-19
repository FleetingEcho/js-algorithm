namespace LeetCode698 {
	// 解法1，以数字的角度：
	function canPartitionKSubsets(nums: number[], k: number): boolean {
		// 排除一些基本情况
		if (k > nums.length) return false
		let sum = 0
		for (let v of nums) sum += v
		if (sum % k != 0) return false

		// k 个桶（集合），记录每个桶装的数字之和
		let bucket = new Array(k).fill(0)
		// 理论上每个桶（集合）中数字的和
		let target = Math.floor(sum / k)
		/* 降序排序 nums 数组 */
		nums.sort((a, b) => b - a)
		// 排序后交换一下元素，排布为[]
		return backtrack(nums, 0, bucket, target)
	}

	// 递归穷举 nums 中的每个数字
	function backtrack(nums: number[], index: number, bucket: number[], target: number) {
		if (index == nums.length) {
			// 检查所有桶的数字之和是否都是 target
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i] != target) {
					return false
				}
			}
			// nums 成功平分成 k 个子集
			return true
		}

		// 穷举 nums[index] 可能装入的桶
		for (let i = 0; i < bucket.length; i++) {
			// 剪枝
			if (bucket[i] + nums[index] > target) {
				continue
			}
			// 尽可能多的情况命中剪枝的那个 if 分支，就可以减少递归调用的次数
			bucket[i] += nums[index]
			if (backtrack(nums, index + 1, bucket, target)) {
				return true
			}
			bucket[i] -= nums[index]
		}
		// nums[index] 装入哪个桶都不行
		return false
	}
}

// 解法2: 以桶的视角
namespace LeetCode698Solution2 {
	/* 
  现在k号桶正在思考是否应该把nums[start]这个元素装进来；目前k号桶里面已经装的数字之和为bucket；used标志某一个元素是否已经被装到桶中；target是每个桶需要达成的目标和。
   */
	function canPartitionKSubsets(nums: number[], k: number) {
		// 排除一些基本情况
		if (k > nums.length) return false
		let sum = 0
		for (let v of nums) sum += v
		if (sum % k != 0) return false

		let used: boolean[] = new Array(nums.length).fill(false)
		let target = Math.floor(sum / k)
		// k 号桶初始什么都没装，从 nums[0] 开始做选择
		return backtrack(k, 0, nums, 0, used, target)
	}
	function backtrack(
		k: number,
		bucketTotal: number,
		nums: number[],
		start: number,
		used: boolean[],
		target: number
	): boolean {
		// base case
		if (k == 0) {
			// 所有桶都被装满了，而且 nums 一定全部用完了
			// 因为 target == sum / k
			return true
		}
		if (bucketTotal == target) {
			// 装满了当前桶，递归穷举下一个桶的选择
			// 让下一个桶从 nums[0] 开始选数字
			return backtrack(k - 1, 0, nums, 0, used, target)
		}

		// 从 start 开始向后探查有效的 nums[i] 装入当前桶
		for (let i = start; i < nums.length; i++) {
			// 剪枝
			if (used[i]) {
				// nums[i] 已经被装入别的桶中
				continue
			}
			if (nums[i] + bucketTotal > target) {
				// 当前桶装不下 nums[i]
				continue
			}
			// 做选择，将 nums[i] 装入当前桶中
			used[i] = true
			bucketTotal += nums[i]
			// 递归穷举下一个数字是否装入当前桶
			if (backtrack(k, bucketTotal, nums, i + 1, used, target)) {
				return true
			}
			// 撤销选择
			used[i] = false
			bucketTotal -= nums[i]
		}
		// 穷举了所有数字，都无法装满当前桶
		return false
	}
}
