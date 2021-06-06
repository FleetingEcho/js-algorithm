// 976. 三角形的最大周长
// 先排序，先取最大三个数，若较小两数和大于第三数，那么可以组成三角形，
// 否则大的数过大，去掉，取剩下的数中最大的，重复此过程
function largestPerimeter(A) {
	A.sort((a, b) => b - a)
	let max = 0
	for (let i = 0; i + 2 <= A.length; i++) {
		if (A[i + 1] + A[i + 2] > A[i]) {
			max = Math.max(max, A[i] + A[i + 1] + A[i + 2])
		}
	}
	return max
}
