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
// 一定要取余
function fib(n) { 
  const over=1000000007
  const memo = [0,1]; // 第0位是0，第一二位是1
  const fibonacci2 = (num) => { 
  if (memo[num] != undefined) return memo[num]; // {2} 
  return memo[num] = fibonacci2(num - 1)% over + fibonacci2(num - 2)% over; // {3} 
  }; 
  return fibonacci2(n)% over; 
 }

 console.log(fib(10));