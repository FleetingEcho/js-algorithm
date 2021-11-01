const factorial=(n)=>{
if(n===1 || n===0) return 1
return n*factorial(n-1)
}

console.log(factorial(4));  //24
console.log(factorial(5));  //120