/* 
要求你的算法返回幂运算 a^b 的计算结果与 1337 取模（mod，也就是余数）后的结果。
就是你先得计算幂 a^b，但是这个 b 会非常大，所以 b 是用数组的形式表示的。
你的任务是计算 ab 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。

示例 1:

输入: a = 2, b = [3]
输出: 8
示例 2:

输入: a = 2, b = [1,0]
输出: 1024
*/

/* 
! 避免溢出
首先明确问题：由于计算机的编码方式，形如 (a * b) % base 这样的运算，乘法的结果可能导致溢出，
我们希望找到一种技巧，能够化简这种表达式，避免溢出同时得到结果。
比如在二分查找中，我们求中点索引时用 (l+r)/2 转化成 l+(r-l)/2，避免溢出的同时得到正确的结果。

! 模运算技巧  (a * b) % k = (a % k)(b % k) % k
* 对乘法的结果求模，等价于先对每个因子都求模，然后对因子相乘的结果再求模。

*/

// 计算 a 的 k 次方然后与 base 求模的结果
const base = 1337;
const superPow=(a,b)=>{
    if (b.length==0) return 1;
    let last = b[b.length-1];
    b.pop();

    let part1 = mypow(a, last);
    let part2 = mypow(superPow(a, b), 10);
    // 每次乘法都要求模
    return (part1 * part2) % base;
}
function mypow(a, k) {
  // 对因子求模
    a %= base;
    let res = 1;
    for (let _ = 0; _ < k; _++) {
        // 这里有乘法，是潜在的溢出点
        res *= a;
        // 对乘法结果求模
        res %= base;
    }
    return res;
}

// b是一个数组 a=2 b=[1,0]


// ! 方法2
// https://labuladong.gitbook.io/algo/gao-pin-mian-shi-xi-lie/superpower
// 但这里的k是一个整数，而不是数组
let base = 1337;
function mypow(a,k) {
    if (k == 0) return 1;
    a %= base;

    if (k % 2 == 1) {
        // k 是奇数
        return (a * mypow(a, k - 1)) % base;
    } else {
        // k 是偶数
        let sub = mypow(a, k / 2);
        return (sub * sub) % base;
    }
}
