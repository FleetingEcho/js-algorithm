/* 

class Solution {
    double myPow(double x, int n) {
        boolean isNegative=false;
        if(n<0){
            isNegative=true;
            n=Math.abs(n);
        }
        double res=dfs(x,n);
        return isNegative? 1/res : res; 
    }
    double dfs(double x,int n){
        if(n==0){
            return 1;
        }
        if(n%2==0){
            return dfs(x*x,n/2);
        }
        else{
            return x*dfs(x*x,n/2);
        }
    }
}

*/

function myPow(x, n) {
	let isNegative = false
	if (n < 0) {
		isNegative = true
		n = Math.abs(n)
	}
	let res = dfs(x, n)
	return isNegative ? 1 / res : res
}
function dfs(x, n) {
	if (n === 0) {
		return 1
	}
	if (n % 2 === 0) {
		return dfs(x * x, Math.floor(n / 2))
	} else {
		return x * dfs(x * x, Math.floor(n / 2))
	}
}
