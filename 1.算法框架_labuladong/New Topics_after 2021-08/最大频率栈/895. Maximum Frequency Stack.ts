namespace LeetCode895 {
	class FreqStack {
		// 记录 FreqStack 中元素的最大频率
		private maxFreq: number = 0
		// 记录 FreqStack 中每个 val 对应的出现频率，后文就称为 VF 表
		private valToFreq = new Map<number, number>()
		// 记录频率 freq 对应的 val 列表，后文就称为 FV 表
		private freqToVals = new Map<number, number[]>()
		constructor() {}

		push(val: number): void {
			/* 
      1.记录新增的数字，[].push
      2.更新频率
      */
			// 修改 VF 表：val 对应的 freq 加一
			let freq = 1
			if (this.valToFreq.has(val)) {
				freq += this.valToFreq.get(val)!
			}
			this.valToFreq.set(val, freq)
			// 修改 FV 表：在 freq 对应的列表加上 val
			if (!this.freqToVals.has(freq)) {
				this.freqToVals.set(freq, [])
			}
			this.freqToVals.get(freq)?.push(val)

			this.maxFreq = Math.max(this.maxFreq, freq)
		}

		pop(): number {
			// 修改 FV 表：pop 出一个 maxFreq 对应的元素 v
			let vals = this.freqToVals.get(this.maxFreq) as number[]
			let v = vals.pop() as number
			// 修改 VF 表：v 对应的 freq 减一
			let freq = this.valToFreq.get(v)! - 1
			this.valToFreq.set(v, freq)
			// 更新 maxFreq
			if (vals.length === 0) {
				// 如果 maxFreq 对应的元素空了
				this.maxFreq--
			}
			return v
		}
	}
}
