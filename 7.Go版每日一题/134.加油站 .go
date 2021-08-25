package main

func main() {}

/*
这就是贪心思路的本质，如果找不到重复计算，那就通过问题中一些隐藏较深的规律，来减少冗余计算。
*/
func canCompleteCircuit(gas []int, cost []int) int {

	n := len(gas)
	sum := 0
	for i := 0; i < n; i++ {
		sum += gas[i] - cost[i]
	}
	if sum < 0 {
		// 总油量小于总的消耗，无解
		return -1
	}
	// 记录油箱中的油量
	tank := 0
	// 记录起点
	start := 0
	for i := 0; i < n; i++ {
		tank += gas[i] - cost[i]
		if tank < 0 {
			// 无法从 start 走到 i
			// 所以站点 i + 1 应该是起点
			tank = 0
			start = i + 1
		}
	}
	if start == n {
		return 0
	}
	return start
}
