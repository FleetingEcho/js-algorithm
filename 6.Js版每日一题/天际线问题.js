// 天际线问题

// 根据坐标排序
const arrSort = (arr) => arr.sort((a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]))
const remove = (arr, tar) => {
	//删除第一个相等的元素
	let idx = -1
	arr.some((val, index) => {
		if (val === tar) {
			idx = index
			return true
		}
	})
	arr.splice(idx, 1)
}
const getSkyline = (buildings) => {
	let res = [],
		pq = [],
		pre = null
	for (let b of buildings) {
		pq.push([b[0], -b[2]]) //左端点
		pq.push([b[1], b[2]]) //右端点
	}
	arrSort(pq) //按照坐标大小进行排序
	let heights = [0] //端点最低为0;
	for (let h of pq) {
		if (h[1] < 0) {
			heights.push(-h[1])
		} //加入左端点
		else {
			remove(heights, h[1])
		} // 删除右端点

		let maxHeight = Math.max(...heights)
		if (pre !== maxHeight) {
			res.push([h[0], maxHeight])
			pre = maxHeight
		}
	}
	return res
}

console.log(
	getSkyline([
		[2, 9, 10],
		[3, 7, 15],
		[5, 12, 12],
		[15, 20, 10],
		[19, 24, 8],
	])
)

// 用map做更慢， 因为如果数量巨大的话都得存取

// 方法2:  100ms
/* 
var getSkyline = function(buildings) {
  let b = buildings
  let ans = []
  for(let i = 0 ; i < b.length; i++) {
      let nowb = b[i]
      let noFg = false// 找到跟这条(左)边相关的矩形，然后判定该不该画
      for(let j = 0; j < b.length; j++) {
          let preb = b[j]
          if(preb[0] > nowb[0]) break;
          if(preb[1] < nowb[0]) continue;
          if(preb[2] > nowb[2]) {
              noFg = true; break; //不该画
          }
      }
      if(!noFg) {
          ans.push([nowb[0], nowb[2]])
      }
  }
  
  for(let i = 0 ; i < b.length; i++) {
      let nowb = b[i]
      let noFg = false, h = 0// 找到跟这(右)条边相关的矩形，然后判定该不该画
      for(let j = 0; j < b.length; j++) {
          let preb = b[j]
          if(i == j) continue;
          if(preb[0] > nowb[1]) break;
          if(preb[1] < nowb[1]) continue;
          if(preb[2] > nowb[2]) {
              noFg = true; break;//不该画
          }
          // 如果两个矩形的右边重合，不记录这个高度
          h = preb[1] == nowb[1] ? h : Math.max(h, preb[2])
      }
      if(!noFg) {
          ans.push([nowb[1], h])
      }
  }
  ans = ans.sort((a,b) => a[0] - b[0]).reduce((a,b) => {
      a.length == 0 ? a.push(b) : ''
      b[1] == a[a.length -1][1] ? '' : a.push(b)
      return a
  }, [])
  return ans
}


*/
