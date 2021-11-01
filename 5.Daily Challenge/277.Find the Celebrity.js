// Forward declaration of the knows API.

    /* 
  
  输入: graph = [
  [1,1,0],
  [0,1,0],
  [1,1,1]
]
输出: 1
*/
// knows是一个函数， n是第i个人；
var solution = function(knows) {
  return function(n) {
    let result = 0;
    for (let i = 1; i < n; ++i) {
        if (knows(result, i)) {  //a认识b？
            result = i;
        }
    }
    for (let i = 0; i < n; ++i) {
        if (result == i) continue;
        // 名人不认识某人，或者某人不认识名人，则-1
        if (knows(result, i) || !knows(i, result)) return -1;
    }
    return result;
  };
};


/* 
public:
    let findCelebrity(let n) {
        int result = 0;
        for (int i = 1; i < n; ++i) {
            if (knows(result, i)) {
                result = i;
            }
        }
        for (int i = 0; i < n; ++i) {
            if (result == i) continue;
            if (knows(result, i) || !knows(i, result)) return -1;
        }
        return result;
    }
};

作者：yuexiwen
链接：https://leetcode-cn.com/problems/find-the-celebrity/solution/c-on-by-yuexiwen/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

*/