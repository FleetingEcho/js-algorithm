function bubbleSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
			}
		}
	}
	return arr
}
let list = [1, 2, 3, 100, 99, -1, 3, 10, -200]
console.log(bubbleSort(list))
