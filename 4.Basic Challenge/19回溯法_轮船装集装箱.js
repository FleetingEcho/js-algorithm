/*
回溯法在问题的解空间树中，按深度优先策略，从根结点出发搜索解空间树。
算法搜索至解空间树的任意一点时，先判断该结点是否包含问题的解。
如果肯定不包含，则跳过对该结点为根的子树的搜索，
逐层向其祖先结点回溯；否则，进入该子树，继续按深度优先策略搜索。

应用范围也非常广泛，不仅仅用于搜索算法中，类似数独、八皇后问题、全排列、0-1背包、正则表达式匹配和编译原理中语法分析等

*/

// 例：有一批共n个集装箱要装上两艘载重方别为c1和C2的轮船上，
// 其中集装箱i的重量为数组[i]，且全部集装箱重量不大于两艘载重之和，
// 问是否有一个装载方案完成装载。

  //第一艘船载重
  var weight1 = 30;
  //第二艘船载重
  var weight2 = 10;
  //集装箱
  var w = [1,9,9,4,4,9,5]
  //当前载重
  var nowW1 = 0;
  //当前最优载重
  var nowBest1 = 0;
  //集装箱个数
  var n = w.length;

  function loading(deep){
      //达到根节点
      if(deep > n){
          //当前载重大于当前最优载重
          if(nowW1 > nowBest1)
          nowBest1 = nowW1
          return
      }
      //如果1分支 已选择
      if(nowW1 + w[deep - 1] <= weight1){
          nowW1 += w[deep -1];
          loading(deep + 1);
          nowW1 -= w[deep - 1];
      }
      //如果0分支 未选择
      loading(deep + 1)
  }

  function main(){
      loading(1) //根节点开始
      var firstLoad = nowBest1;
      var all = 0;   //总重量
      for(var i = 0; i < n; i++){
          all += w[i]
      }
      //选择最小的为解
      if(all < weight2 + firstLoad) {
          console.log("成功 \n");
          console.log("第一艘船载重："+ firstLoad + "吨" + "\n");
          console.log("第二艘船载重："+ parseInt(all - firstLoad)+ "吨");
      }else{
          console.log("失败 \n")
      }
  }

  //调用
  main()