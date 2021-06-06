// 220.存在重复元素3
// abs(arr[i] - arr[j]) <= t ，同时又满足 abs(i - j) <= k 。

/* 
1.如果两个元素同属一个桶，那么这两个元素必然符合条件.
2.如果两个元素属于相邻桶，那么我们需要校验这两个元素是否差值不超过 t.
3.如果两个元素既不属于同一个桶，也不属于相邻桶，那么这两个元素必然不符合条件.
*/
const containsNearbyAlmostDuplicate = function (arr: number[], k: number, t: number): boolean {
	if (k < 0 || t < 0) return false
	const Buckets = (value: number) => Math.floor(value / (t + 1)) //分桶
	const map: Map<number, number> = new Map()
	let i = 0,
		res = false,
		res1 = false
	while (i < arr.length) {
		const cur = arr[i]
		const bucket = Buckets(cur)
		if (map.has(bucket)) return true
		res = map.has(bucket + 1) && map.get(bucket + 1) - cur <= t
		res1 = map.has(bucket - 1) && cur - map.get(bucket - 1) <= t
		if (res || res1) return true
		map.set(bucket, cur)
		if (i >= k) map.delete(Buckets(arr[i - k]))
		i++
	}
	return false
}
