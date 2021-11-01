// 64. 求1+2+…+n
/* 
求 1+2+...+n ，要求不能使用乘除法、
for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

*/
//! 递归，&&逻辑符短路
var sumNums = function (n) {
	n > 0 && sumNums(n - 1) + n
	return n
}
