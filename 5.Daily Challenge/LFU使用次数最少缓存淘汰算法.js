// LFU使用次数最少缓存淘汰算法
let LFUCache = class {
	constructor(capacity) {
		this.limit = capacity
		this.cache = new Map()
		// 只用一个map的话删除需要O(N)进行遍历
		this.freqMap = new Map() //存储访问次数
	}

	get(key) {
		let cache = this.cache
		let res = -1
		// 存在 更新
		if (cache[key]) {
			let item = cache[key]
			console.log(cache)
			res = item.value
			//更新频率记录
			this._updateL(key, item)
		}
		return res
	}

	_updateL(key, item) {
		let freq = item.freq
		console.log(this.freqMap)
		let arr = this.freqMap[freq]
		// 删除原频率记录
		this.freqMap[freq].splice(arr.indexOf(key), 1) //删除
		// 清理
		if (this.freqMap[freq].length == 0) delete this.freqMap[freq]
		// 更新频率
		freq = item.freq = item.freq + 1
		if (!this.freqMap[freq]) {
			this.freqMap[freq] = []
		}
		this.freqMap[freq].push(key)
	}

	put(key, value) {
		let cache = this.cache
		let limit = this.limit
		let fmap = this.freqMap
		if (limit <= 0) return
		if (!key || !value) return
		// 不存在则增加
		if (!cache[key]) {
			// 获取频率 key
			// 判断容量是否满
			if (cache.size == limit) {
				let fkeys = fmap.keys()
				let freq = fkeys[0]
				// 获取key集合
				let keys = fmap[freq]
				// 淘汰首位
				delete cache[keys.shift()]
				// 清理
				if (fmap[freq].length == 0) delete fmap[freq]
			}
			// 频率为1的记录是否存在
			if (!fmap[1]) {
				fmap[1] = []
			}
			// 插入新值
			fmap[1].push(key)
			cache[key] = {
				value: value,
				freq: 1, // 默认的频率
			}
		} else {
			cache[key].value = value
			//更新频率记录
			this._updateL(key, cache[key])
		}
	}
}

/* 结果
Map {
  '1': { value: 1, freq: 3 },
  '2': { value: 2, freq: 4 },
  '3': { value: 3, freq: 2 },
  '4': { value: 4, freq: 1 }
}
Map { '1': [ 4 ], '2': [ 3 ], '3': [ 1 ], '4': [ 2 ] }
*/

let LFU = new LFUCache(3)
console.log(LFU.put(2, 2))
console.log(LFU.put(1, 1))
console.log(LFU.get(2))
console.log(LFU.get(1))
console.log(LFU.get(2))
console.log(LFU.put(3, 3))
console.log(LFU.put(4, 4))
console.log(LFU.get(3))
console.log(LFU.get(2))
console.log(LFU.get(1))
console.log(LFU.get(4))
