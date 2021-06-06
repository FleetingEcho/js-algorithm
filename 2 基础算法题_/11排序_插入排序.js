function insertSort(arr) {
	let len = arr.length
	if (!Array.isArray(arr) || len <= 1) return
	for (let i = 1; i < len; i++) {
		let j = i - 1
		// 之前的值大？
		if (arr[j] > arr[i]) {
			let temp = arr[i]
			while (j >= 0 && temp < arr[j]) {
				arr[j + 1] = arr[j]
				j--
			}
			arr[j + 1] = temp
		}
	}
	return arr
}
