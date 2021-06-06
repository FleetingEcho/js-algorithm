/* 
给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线 穿过的砖块数量最少 ，并且返回 穿过的砖块数量 。
输入：wall = [ 
             [1,2,2,1],
             [3,1,2],
             [1,3,2],
             [2,4],
             [3,1,2],
             [1,3,1,1]
            ]
            [
              1,11,11,1
              111,1,11
              1,111,11
              11,1111
              111,1,11
              1,111,1,1
            ]
输出：2
 
*/
const leastBricks = (wall: Array<Array<number>>) => {
	const len = wall.length
	const map = new Map() //(空隙的位置，空隙线上的砖总和)
	for (let i = 0, gap = 0; i < len; i++, gap = 0) {
		for (const cur of wall[i]) {
			gap += cur
			const bricksNumber = map.get(gap) || 0
			map.set(gap, bricksNumber + 1)
		}
		//删除最后一个空隙
		map.delete(gap)
	}
	let total = len
	for (const u of map.keys()) {
		let count = map.get(u)
		total = Math.min(total, len - count)
	}
	return total
}
