package main

func main457() {}

/*
   """符号相同保证是同一个方向移动"""
              """快指针每次走两步，如果快慢指针相等，说明有环"""
                  """如果是自身环，那么退出循环"""
              """更新状态，快指针每次走两步"""
          # 访问过的置0
          """如果上面那轮没有return，说明上面遍历过的元素都不可能成环，为避免再次遍历陷入无效查找，故将查找过的元素置零，再次遍历时直接跳过"""
*/
/*
输入：nums = [2,-1,1,2,2]
输出：true
解释：存在循环，按下标 0 -> 2 -> 3 -> 0 。循环长度为 3 。
*/

func sameSign(num1, num2 int) bool {
	return (num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)
}

func next(cur int, nums []int) int {
	length := len(nums)
	cur += nums[cur]
	cur %= length
	cur += length
	cur %= length

	return cur
}

func circularArrayLoop(nums []int) bool {
	n := len(nums)
	next := func(cur int) int {
		return ((cur+nums[cur])%n + n) % n // 保证返回值在 [0,n) 中
	}

	for i, num := range nums {
		if num == 0 {
			continue
		}
		slow, fast := i, next(i)
		// 判断非零且方向相同
		for sameSign(nums[slow], nums[fast]) && sameSign(nums[slow], nums[next(fast)]) {
			// for nums[slow]*nums[fast] > 0 && nums[slow]*nums[next(fast)] > 0 {
			if slow == fast {
				if slow == next(slow) {
					break
				}
				return true
			}
			slow = next(slow)
			fast = next(next(fast))
		}
		add := i
		for sameSign(nums[add], nums[next(add)]) {
			tmp := add
			add = next(add)
			nums[tmp] = 0
		}
	}
	return false
}
