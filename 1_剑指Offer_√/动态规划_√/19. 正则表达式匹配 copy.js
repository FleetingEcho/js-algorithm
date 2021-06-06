// 19. 正则表达式匹配 copy
/*
请实现一个函数用来匹配包含'. '和'*'的正则表达式。
字符'.'表示任意一个字符，
而'*'表示它前面的字符可以出现任意次（含0次）。
在本题中，匹配是指字符串的所有字符匹配整个模式。
例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但与"aa.a"和"ab*a"均不匹配。

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。

输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 
在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

*/
const tar = 'aaa',
	reg = 'ab*ac*a'
// var isMatch = function(target, reg) {
// let pointer=0,flag=true;
// for(let i=0;i<target.length;i++){
//   if(flag===false) break;
//   if(reg.charAt(pointer+1)==="*"){
//     pointer+=2
//     continue
//   }
//   if(reg.charAt(pointer)===target.charAt(i)){
//     pointer++
//     continue
//   }
//   if(reg.charAt(pointer)==="."){
//     pointer++
//     continue}
//   }

// };

/* 
! 方法1:直接使用正则
var isMatch = function(target, reg) {
  let Reg=RegExp("^("+reg+")$");
  console.log(Reg.source);
  return Reg.test(target);
};
*/
/* 
正则表达算法问题只需要把住一个基本点：看两个字符是否匹配，
一切逻辑围绕匹配/不匹配两种情况展开即可。

当p[j + 1]为*通配符时，我们分情况讨论下：

1、如果匹配，即s[i] == p[j]，那么有两种情况：

1.1p[j]有可能会匹配多个字符，比如s = "aaa", p = "a*"，那么p[0]会通过*匹配 3 个字符"a"。

1.2p[i]也有可能匹配 0 个字符，比如s = "aa", p = "a*aa"，由于后面的字符可以匹配s，所以p[0]只能匹配 0 次。

2、如果不匹配，即s[i] != p[j]，只有一种情况：

p[j]只能匹配 0 次，然后看下一个字符是否能和s[i]匹配。比如说s = "aa", p = "b*aa"，此时p[0]只能匹配 0 次。

>动态规划算法的核心就是「状态」和「选择」，
>「状态」无非就是i和j两个指针的位置，
>「选择」就是p[j]选择匹配几个字符。
*/

// > 动态规划解法
/* 
dp函数的定义如下：

若dp(s,i,p,j) = true，则表示s[i..]可以匹配p[j..]；
若dp(s,i,p,j) = false，则表示s[i..]无法匹配p[j..]。

根据这个定义，我们想要的答案就是i = 0,j = 0时dp函数的结果，
所以可以这样使用这个dp函数：
*/
/* 
那么，如果让你从dp(s, i, p, j)得到dp(s, i+2, p, j+2)，
至少有两条路径：1 -> 2 -> 2和3 -> 3，
那么就说明(i+2, j+2)这个状态存在重复，这就说明存在重叠子问题。
动态规划的时间复杂度为「状态的总数」*「每次递归花费的时间」，
本题中状态的总数当然就是i和j的组合，也就是M * N（M为s的长度，N为p的长度）；递归函数dp中没有循环（base case 中的不考虑，因为 base case 的触发次数有限），所以一次递归花费的时间为常数。二者相乘，总的时间复杂度为O(MN)。

空间复杂度很简单，就是备忘录memo的大小，即O(MN)。
*/
// 用了一个哈希表memo消除重叠子问题

/* 计算 p[j..] 是否匹配 s[i..] */
// > s为字符串，  p为检测项

function isMatch(s, p) {
	// 指针 i，j 从索引 0 开始移动
	return dp(s, 0, p, 0)
}
function dp(s, i, p, j) {
	let m = s.length,
		n = p.length
	// base case
	//检测项到头了
	if (j == n) {
		return i == m
	}
	// 字符串到头了？ 要分情况
	if (i == m) {
		// 如果能匹配空串，一定是字符和 * 成对儿出现
		if ((n - j) % 2 == 1) return false
		// 检查是否为 x*y*z* 这种形式
		for (; j + 1 < n; j += 2) {
			if (p[j + 1] != '*') return false
		}
		return true
	}
	// base case结束

	let memo = new Map()
	// 记录状态 (i, j)，消除重叠子问题
	let key = `${i}-${j}`
	if (memo.has(key)) return memo.get(key)
	let res = false
	if (s[i] == p[j] || p[j] == '.') {
		// 匹配
		if (j < n - 1 && p[j + 1] == '*') {
			// 有 * 通配符，可以匹配 0 次或多次
			res = dp(s, i, p, j + 2) || dp(s, i + 1, p, j)
		} else {
			// 无 * 通配符，老老实实匹配 1 次
			res = dp(s, i + 1, p, j + 1)
		}
	} else {
		// 不匹配
		if (j < n - 1 && p[j + 1] == '*') {
			// 有 * 通配符，只能匹配 0 次
			res = dp(s, i, p, j + 2)
		} else {
			// 无 * 通配符，匹配无法进行下去了
			res = false
		}
	}
	// 将当前结果记入备忘录
	memo.set(key, res)
	return res
}

console.log(isMatch('aab', 'c*a*b'))
