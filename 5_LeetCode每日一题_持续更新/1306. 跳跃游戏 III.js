// BFS
// 1306. 跳跃游戏 III
/* 
1 <= arr.length <= 5 * 10^4
0 <= arr[i] < arr.length
0 <= start < arr.length
*/
function canReach(arr, start) {
	let N = arr.length
	let visited = new Array(N).fill(false)
	let queue = [start]
	while (queue.length !== 0) {
		let cur = queue.shift()
		if (cur < 0 || cur >= N || visited[cur]) {
			continue
		}

		if (arr[cur] == 0) {
			return true
		}

		visited[cur] = true
		queue.push(cur + arr[cur])
		queue.push(cur - arr[cur])
	}

	return false
}

// DFS

function canReach(arr, start) {
	let visited = new Array(arr.length).fill(false)
	return dfs(arr, start, visited)
}

function dfs(arr, start, visited) {
	if (start < 0 || start > arr.length - 1 || visited[start]) {
		return false
	}

	if (arr[start] == 0) {
		return true
	}

	visited[start] = true
	return dfs(arr, start + arr[start], visited) || dfs(arr, start - arr[start], visited)
}
