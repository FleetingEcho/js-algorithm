// > 每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止。

function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = Math.min(...arr.slice(i))
		let index = arr.indexOf(min)
		;[arr[i], arr[index]] = [arr[index], arr[i]]
	}
	return arr
}

// const findMin=Math.min.apply(null,arr)
let list = [10, 1, 3, 4, 100, -20, 30, 7]
let list2 = [-11, 200, 20, 30, 10, 2, 3, 4, -10, -200]
// console.log(swapSort(list))

console.log(selectSort(list2))
