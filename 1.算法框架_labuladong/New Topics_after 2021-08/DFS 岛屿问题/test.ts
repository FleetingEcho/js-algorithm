namespace TestAAA {
	// 原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响
	const dfs = (str: string) => {
		str += '12,'
		if (str.length > 30) {
			return
		}
		dfs(str)
		dfs(str)
	}
	const set = new Set<string>()
	export const test = () => {
		for (let i of new Array(10).fill(0)) {
			let str = ''
			dfs(str)
			set.add(str)
		}
		console.log(set)
	}

	export const test2 = () => {
		let str = '100'
		const dfs = (str: string) => {
			str += '20000000'
			console.log(str)
		}
		dfs(str)
		console.log(str)
	}
}
TestAAA.test2()
