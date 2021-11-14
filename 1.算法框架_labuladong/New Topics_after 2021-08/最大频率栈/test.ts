namespace LeetCode895Test {
	export const test = () => {
		const m = new Map()
		m.set(1, [1, 2, 3])
		m.get(1).push(1000)
		console.log(m.get(1))
	}
}

LeetCode895Test.test()
