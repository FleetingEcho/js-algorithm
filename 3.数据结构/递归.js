// 每个递归函数都必须有基线条件，即一个不再递归调用的条件（停止点），以防止无限递归
// 并不会无限递归，最后浏览器会报错，栈溢出错误（stack overflow error）。  浏览器chrome一般会递归1万多次，firefox可以十几万次
//  但在ES6中会无限调用下去


// 0,1,1,2,3,5,8,12,21,34，55
// 从0到10
// 迭代的版本比递归的版本快很多，所以这表示递归更慢。
//  速度：   迭代 >递归 >缓存

// 迭代写法
// 传入的n是位数
const fibonacciIterative=(n)=>{
  if(n<=1) return 0
  if(n<=2) return 1
  let num1=0;
  let num2=1;
  let res;
  for(let i=2;i<=n;i++){
    res=num1+num2;
    num1=num2
    num2=res;
  }
  return res
}

console.log(fibonacciIterative(10)); //55
console.log(fibonacciIterative(5)); //5

// 递归写法 , 速度不一定块，但理解方便
const fibonacci=(n)=>{
  if(n<1) return 0
  if(n<=2) return 1
  return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(10));  //55
console.log(fibonacci(6));  //8

// 记忆化写法---类似缓存

function fibonacciMemoization(n) { 
  const memo = [0,1]; // 第0位是0，第一二位是1
  const fibonacci2 = (num) => { 
  if (memo[num] != null) return memo[num]; // {2} 
  return memo[num] = fibonacci2(num - 1) + fibonacci2(num - 2); // {3} 
  }; 
  return fibonacci2(n); 
 }

 console.log(fibonacciMemoization(10));