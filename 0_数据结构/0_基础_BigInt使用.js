/* 
BigInt 是一种内置对象，它提供了一种方法来表示大于 253 - 1 的整数。
这原本是 Javascript中可以用 Number 表示的最大数字。
BigInt 可以表示任意大的整数。

*/
// !可以用在一个整数字面量后面加 n 的方式定义一个 BigInt


const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n
// ! 字符串可转换为整数
// 

typeof 1n === 'bigint'; // true

/* 
以下操作符可以和 BigInt 一起使用： +、`*`、`-`、`**`、`%` 。
除 >>> （无符号右移）之外的 位操作 也可以支持。
因为 BigInt 都是有符号的， >>> （无符号右移）不能用于 BigInt。
*/

// ! 当使用 BigInt 时，带小数的运算会被取整。
const rounded = 5n / 2n;
// ↪ 2n, not 2.5n

// ! 比较运算符，例如 < 和 >，使用它们来对 bigint 和 number 类型的数字进行比较没有问题：

//! BigInt 和 Number 不是严格相等的，但是宽松相等的。
0n === 0
// ↪ false

0n == 0
// ↪ true
// BigInt转换成数字，应该用 Number() 来将一个 bigint 转换成一个数字类型。
const int=Number(90000200200011123n) //! 90000200200011120， 一定会损失精度
console.log(int);
// BigInt转换成字符串
const int2=String(90000200200011123n) //! 90000200200011123， 字符串则不会损失精度
console.log(int2);

// > 建议仅在值可能大于2^53 时使用 BigInt 类型，并且不要在两种类型之间进行相互转换。


// ! 对任何 BigInt 值使用 JSON.stringify() 都会引发 TypeError，因为默认情况下 BigInt 值不会在 JSON 中序列化。
// > 但是，如果需要，可以实现 toJSON 方法：
BigInt.prototype.toJSON = function() { return this.toString(); }
// 然后再调用
JSON.stringify(BigInt(1));
// '"1"'