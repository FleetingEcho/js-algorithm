/* 
原始的二分搜索代码
在具体的算法问题中，常用到的是「搜索左侧边界」和「搜索右侧边界」这两种场景，很少有让你单独「搜索一个元素」
https://mp.weixin.qq.com/s/JgJ0jh2SJd6grQSPnN6Jww
*/
/*
函数 f 是关于自变量 x 的单调函数
int f(int x) {
    ...
}

主函数，在 f(x) == target 的约束下求 x 的最值
int solution(int[] nums, int target) {
    if (nums.length == 0) return -1;
    问自己：自变量 x 的最小值是多少？
    int left = ...;
    问自己：自变量 x 的最大值是多少？
    int right = ... + 1;

    while (left < right) {
        int mid = left + (right - left) / 2;
        if (f(mid) == target) {
            问自己：题目是求左边界还是右边界？
            ...
        } else if (f(mid) < target) {
            问自己：怎么让 f(x) 大一点？
            ...
        } else if (f(mid) > target) {
            问自己：怎么让 f(x) 小一点？
            ...
        }
    }
    return left;
} 
具体来说，想要用二分搜索算法解决问题，分为以下几步：

1、确定x, f(x), target分别是什么，并写出函数f的代码。

2、找到x的取值范围作为二分搜索的搜索区间，初始化left和right变量。

3、根据题目的要求，确定应该使用搜索左侧还是搜索右侧的二分搜索算法，写出解法代码。

*/
/*
> 875. 爱吃香蕉的珂珂
! 二分法
珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。
如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例 1：
输入: piles = [3,6,7,11], H = 8
输出: 4

输入: piles = [30,11,23,4,20], H = 5
输出: 30

输入: piles = [30,11,23,4,20], H = 6
输出: 23
*/

// * 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。
namespace AlgorithmBS {
	function minEatingSpeed(piles: number[], H: number) {
		// 套用搜索左侧边界的算法框架
		let left = 1
		let right = 10 ** 9 + 1 //因为写成了开区间
		while (left < right) {
			// 防止溢出
			let mid = Math.floor(left + (right - left) / 2)
			if (f1(piles, mid) <= H) {
				right = mid
			} else {
				left = mid + 1
			}
		}
		return left
	}
	// 速度x,香蕉数组piles
	const f1 = (piles: number[], x: number) => {
		let hours = 0
		for (let i = 0; i < piles.length; i++) {
			hours += Math.floor(piles[i] / x)
			if (piles[i] % x > 0) {
				hours++
			}
		}
		return hours
	}

	// 1011. 在 D 天内送达包裹的能力

	// 寻找左侧边界的二分查找
	function shipWithinDays(weights: number[], D: number) {
		// 载重可能的最小值
		let left = Math.max(...weights)
		// 载重可能的最大值 + 1
		const totalWeight = weights.reduce((pre, cur) => pre + cur) //求sum和
		let right = totalWeight
		while (left < right) {
			let mid = Math.floor(left + (right - left) / 2)
			if (f2(weights, mid) <= D) {
				right = mid
			} else {
				left = mid + 1
			}
		}
		return left
	}

	// 如果载重为 cap，是否能在 D 天内运完货物？
	const f2 = (weights: number[], x: number) => {
		let days = 0
		for (let i = 0; i < weights.length; ) {
			// 尽可能多装货物
			let cap = x
			while (i < weights.length) {
				if (cap < weights[i]) break
				cap -= weights[i]
				i++
			}
			days++
		}
		return days
	}
}
