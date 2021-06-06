// 381.O(1) 时间插入、删除和获取随机元素 - 允许重复
var RandomizedCollection = function () {
	this.map = new Map() //存index
	this.arr = []
}

RandomizedCollection.prototype.insert = function (val) {
	// 第一次存入1，返回true. 第二次存入1，个数为2，返回false
	this.arr.push(val)
	const set = this.map.has(val) ? this.map.get(val) : new Set()
	set.add(this.arr.length - 1)
	this.map.set(val, set)
	return set.size === 1
}

RandomizedCollection.prototype.remove = function (val) {
	if (!this.map.has(val)) {
		return false
	}
	let i = undefined
	for (const index of this.map.get(val)) {
		if (!i) {
			i = index
			break
		}
	}
	const lastNum = this.arr[this.arr.length - 1]
	this.arr[i] = lastNum
	this.map.get(val).delete(i) //set 删除第一个index。
	this.map.get(lastNum).delete(this.arr.length - 1)
	if (i < this.arr.length - 1) {
		this.map.get(lastNum).add(i)
	}
	if (this.map.get(val).size === 0) {
		this.map.delete(val)
	}
	this.arr.pop()
	return true
}

RandomizedCollection.prototype.getRandom = function () {
	return this.arr[Math.floor(Math.random() * this.arr.length)]
}
