/* 
给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。
需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247486946&idx=1&sn=94804eb15be33428582544a1cd90da4d&chksm=9bd7f3eaaca07afc6fdfa94d05fa3007d9ecc54914a238e6deabeafd5032a299155505b40f2d&mpshare=1&scene=1&srcid=1006DxWVcu3jm28eXMl0Q3sA&sharer_sharetime=1601940548283&sharer_shareid=0b4409896492a9b6eb42545a1109db93&key=872f9623724a6dd2a1be8c802fdf260e557b6d695e2da5cf6bff01239a98412bf169c800ff96bb0403a6f0d353944133791aa8873e092aff0e6461712047f281d5b3af5ea32a235bb9d30ecc5bde75a34e036216cd66fbf0edd4b5930fe3f63d5e83bd4b6c5dda226a682ca1e65b28d535cce10e6209e5fb933764fb4302233d&ascene=1&uin=MjMyODAwMTA2NQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=en&exportkey=AWP2jtByllFOntnnSngKRPQ%3D&pass_ticket=pIJtCKwjLzBU7oU%2FUJztgZ6TgC3VqmFqdIB3TZ1E1v8VgtqPFJQMuE3v7tzWpvyG&wx_header=0
输入: "bcabc"
输出: "abc"


输入: "cbacdcbc"
输出: "acdb"
*/
// ! 单调栈

/* 
 *        1. 维护一个栈stack，对字符串进行正序遍历
 *        2. 对每个字符char，首先判断stack中是否存在，
 *          2.1 若stack栈顶值比char大且后续还存在此值，则将栈顶弹出；
 *            2.1.1 使用indexOf(xx, i)取代 lastIndexOf(xx)减少遍历次数会更快
 *        3. 入栈每个char
 *        4. 打印栈底到栈顶即为结果
*/
const removeDuplicateLetters = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    console.log(stack)
    if (stack.indexOf(char) > -1) continue
    while ( stack.length!== 0 && 
            stack[stack.length - 1] > char &&  //stack最后一位大于当前字母
            s.indexOf(stack[stack.length - 1], i) > i  //从s第i位开始查stack最后一位数字，确认还有的话才删除前面的字母
            ) {
      stack.pop()
    }
    stack.push(char)
  }
  return stack.join('')
}
/* 
[]
[ 'b' ]
[ 'b', 'c' ]
[ 'a' ]
[ 'a', 'b' ]

*/
console.log(removeDuplicateLetters("bcabc"))
// console.log(removeDuplicateLetters("cbacdcbc"))

