// 19. 正则表达式匹配
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
// const  tar="aaa" ,reg="ab*ac*a"
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

function isMatch(A, B) {
	let n = A.length
	let m = B.length
	let f = []
	for (let i = 0; i <= n + 1; i++) {
		let temp = new Array(m + 1)
		temp.fill(false)
		f.push(temp)
	}
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= m; j++) {
			//分成空正则和非空正则两种
			if (j == 0) {
				f[i][j] = i == 0
			} else {
				//非空正则分为两种情况 * 和 非*
				if (B.charAt(j - 1) != '*') {
					if (i > 0 && (A.charAt(i - 1) == B.charAt(j - 1) || B.charAt(j - 1) == '.')) {
						f[i][j] = f[i - 1][j - 1]
					}
				} else {
					//碰到 * 了，分为看和不看两种情况
					//不看
					if (j >= 2) {
						f[i][j] |= f[i][j - 2]
					}
					//看
					if (i >= 1 && j >= 2 && (A.charAt(i - 1) == B.charAt(j - 2) || B.charAt(j - 2) == '.')) {
						f[i][j] |= f[i - 1][j]
					}
				}
			}
		}
	}
	return f[n][m]
}

/* 
! 方法1:直接使用正则
var isMatch = function(target, reg) {
  let Reg=RegExp("^("+reg+")$");
  console.log(Reg.source);
  return Reg.test(target);
};
*/

console.log(isMatch(tar, reg))
