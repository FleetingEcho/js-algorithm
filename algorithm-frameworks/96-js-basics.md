# JavaScript 基础知识参考

> 常用内置对象与方法速查。适用于算法刷题时的语法备忘。

---

## 目录

1. [BigInt](#bigint)
2. [全局方法](#全局方法)
3. [Map](#map)
4. [Math](#math)
5. [Number](#number)
6. [Set](#set)
7. [Symbol](#symbol)
8. [Object](#object)
9. [Array](#array)
10. [String](#string)
11. [条件与循环](#条件与循环)
12. [正则表达式](#正则表达式)
13. [算法常用技巧](#算法常用技巧)

---

## BigInt

```javascript
// 创建
const huge = BigInt('9007199254740991');
const huge2 = 9007199254740991n;

typeof 1n === 'bigint'; // true

// 运算
5n / 2n; // 2n（小数部分截断）
5n + 3n; // 8n

// 比较
0n === 0; // false（严格不等）
0n == 0; // true（宽松相等）

// 转换
Number(90000200200011123n); // 会损失精度！
String(90000200200011123n); // '90000200200011123'（安全）

// JSON 序列化（默认不支持，需自定义）
BigInt.prototype.toJSON = function () { return this.toString(); };
JSON.stringify(BigInt(1)); // '"1"'
```

> 建议仅在值可能大于 `2^53` 时使用 BigInt，避免与 Number 混用。

---

## 全局方法

```javascript
// URI 编码
encodeURI(str); // 编码整个 URI
decodeURI(encoded); // 解码
encodeURIComponent(str); // 编码 URI 参数部分
decodeURIComponent(encoded); // 解码参数

// 字符串转数字
parseInt('123.456'); // 123
parseFloat('123.456'); // 123.456

// 类型转换
String(false); // 'false'
Number('123'); // 123
Number(null); // 0
Number('abc'); // NaN
Boolean(0); // false

// 检查
isFinite(123); // true
isNaN(NaN); // true

// 执行代码（⚠️ 危险）
eval('x=10; y=20; x+y'); // 30
```

---

## Map

```javascript
// 创建
const map = new Map();
const map2 = new Map([['key1', 'val1'], ['key2', 'val2']]);

// 基本操作
map.set(key, value); // 设置
map.get(key); // 获取（未知键返回 undefined）
map.has(key); // 检查
map.delete(key); // 删除
map.clear(); // 清空
map.size; // 大小

// 键的特性
// - 键可以是任意类型（包括对象、NaN、undefined）
// - 简单类型按值比较（NaN === NaN 视为 true）
// - 对象类型按引用比较
map.set(NaN, 123); map.get(NaN); // 123
map.set(-0, 1); map.get(+0); // 1（0 视为相同）

// 遍历
for (const [key, value] of map) { }
for (const key of map.keys()) { }
for (const value of map.values()) { }
for (const [key, value] of map.entries()) { }
map.forEach((value, key) => { });

// 转换
[...map]; // 转数组 [[k1,v1], [k2,v2]]
Array.from(map); // 同上
Object.fromEntries(map); // 转对象（键为字符串时）
new Map([['a', 1], ['b', 2]]); // 数组转 Map

// Map → JSON（键为字符串时先转对象）
JSON.stringify([...map]); // 键非字符串时用此法
```

---

## Math

```javascript
// 常量
Math.PI; // 3.14159...
Math.E; // 2.71828...
Math.LN2; // 0.693...
Math.SQRT2; // 1.414...

// 取整
Math.round(1.5); // 2（四舍五入）
Math.floor(1.9); // 1（向下取整）
Math.ceil(1.1); // 2（向上取整）
Math.trunc(4.9); // 4（去除小数部分）
Math.sign(-5); // -1（符号判断：1 / -1 / 0 / -0 / NaN）

// 随机数
Math.random(); // [0, 1)
Math.floor(Math.random() * (b - a) + a); // [a, b)
Math.floor(Math.random() * (b + 1 - a) + a); // [a, b]
Math.floor(Math.random() * (b - a) + a + 1); // (a, b]

// 极值
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.max(...arr); // 数组最大值
Math.min(...arr); // 数组最小值

// 幂与根
Math.pow(2, 3); // 8
Math.sqrt(16); // 4
Math.abs(-5); // 5
```

---

## Number

```javascript
// 常量
Number.MAX_VALUE; // 1.797...e+308
Number.MIN_VALUE; // 5e-324
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON; // 2.220...e-16
Number.NaN; // NaN
Number.POSITIVE_INFINITY; // Infinity
Number.NEGATIVE_INFINITY; // -Infinity

// 方法
Number.isFinite(123); // true
Number.isInteger(12.3); // false
Number.isNaN(NaN); // true
Number.isSafeInteger(9007199254740991); // true

// 实例方法
(15.12345).toFixed(2); // '15.12'（保留 2 位小数）
(15.12345).toExponential(); // '1.512345e+1'（科学计数法）
(15.123456).toPrecision(4); // '15.12'（总长度）
(33).toString(2); // '100001'（转二进制字符串）
(33).toString(16); // '21'（转十六进制）
```

---

## Set

```javascript
// 创建
const set = new Set();
const set2 = new Set([1, 2, 3, 4, 5]);

// 基本操作
set.add(value); // 添加
set.delete(value); // 删除
set.has(value); // 检查
set.clear(); // 清空
set.size; // 大小

// 特性：成员值唯一（NaN 被视为相同）
new Set([1, 2, 2, 3, 3, 3]); // Set { 1, 2, 3 }

// 遍历
for (const item of set) { }
for (const key of set.keys()) { } // key === value
for (const val of set.values()) { }
for (const [k, v] of set.entries()) { }
set.forEach((value, key) => { }); // key === value

// 集合运算（用 Set 实现）
const a = new Set([1, 2, 3]);
const b = new Set([3, 4, 5]);

// 并集
new Set([...a, ...b]); // Set { 1, 2, 3, 4, 5 }

// 交集
new Set([...a].filter(x => b.has(x))); // Set { 3 }

// 差集
new Set([...a].filter(x => !b.has(x))); // Set { 1, 2 }

// 转换
[...set]; // 转数组
Array.from(set); // 同上
new Set([...set].map(x => x * 2)); // 每个元素 *2

// WeakSet：成员只能是对象，不可遍历
```

---

## Symbol

```javascript
// 创建唯一标识
const s1 = Symbol('foo');
const s2 = Symbol('foo');
s1 === s2; // false（每次创建都是唯一的）

// Symbol 作为属性名
const obj = {};
const sym = Symbol('key');
obj[sym] = 'value';
obj[sym]; // 'value'

// 遍历 Symbol 属性
Object.getOwnPropertySymbols(obj); // [ Symbol('key') ]

// 全局复用
const s3 = Symbol.for('bar');
const s4 = Symbol.for('bar');
s3 === s4; // true
Symbol.keyFor(s3); // 'bar'
```

---

## Object

```javascript
// 创建与访问
const obj = { a: 1, b: 2 };
obj.a; // 1
obj['b']; // 2

// 检查属性
Object.prototype.hasOwnProperty.call(obj, 'a'); // true
'a' in obj; // true

// 遍历
for (const key in obj) { } // 遍历可枚举属性（含原型链）
Object.keys(obj); // ['a', 'b']
Object.values(obj); // [1, 2]
Object.entries(obj); // [['a', 1], ['b', 2]]

// 遍历 entries
for (const [key, value] of Object.entries(obj)) { }

// 合并
Object.assign(target, source); // 后面覆盖前面（浅拷贝）
{ ...target, ...source }; // 扩展运算符方式

// 锁定对象
Object.preventExtensions(obj); // 不能添加，能删除/修改
Object.seal(obj); // 不能添加/删除，能修改
Object.freeze(obj); // 不能添加/删除/修改

// 判断
Object.isFrozen(obj);
Object.isSealed(obj);
Object.isExtensible(obj);

// 属性名列表
Object.getOwnPropertyNames(obj); // 所有自身属性名（不含 Symbol）

// delete
delete obj['key']; // 删除对象属性很有用，数组不可用
```

---

## Array

```javascript
// 创建
const arr = [1, 2, 3];
const arr2 = new Array(5); // [empty × 5]
const arr3 = Array.from({ length: 5 }, (v, k) => k); // [0, 1, 2, 3, 4]
const arr4 = [...Array(5).keys()]; // [0, 1, 2, 3, 4]

// 添加/删除
arr.push(4); // 末尾添加，返回新长度
arr.pop(); // 末尾删除，返回删除值
arr.unshift(0); // 开头添加
arr.shift(); // 开头删除
arr.splice(index, count, ...items); // 删除/插入（修改原数组）
arr.slice(start, end); // 切片（不修改原数组）

// 查找
arr.includes(value); // true/false
arr.indexOf(value); // 索引（不存在返回 -1）
arr.findIndex(x => x > 2); // 第一个满足条件的索引
arr.find(x => x > 2); // 第一个满足条件的值
arr.some(x => x > 2); // 是否有满足条件的（true 跳出）
arr.every(x => x > 0); // 是否全部满足（false 跳出）

// 遍历与变换
arr.forEach(x => {}); // 遍历（无法 break/return）
arr.map(x => x * 2); // 映射（返回新数组）
arr.filter(x => x > 2); // 过滤
arr.reduce((acc, cur) => acc + cur, 0); // 累加/归约
arr.reduceRight((acc, cur) => acc + cur, 0); // 从右向左归约

// 排序
arr.sort((a, b) => a - b); // 升序
arr.sort((a, b) => b - a); // 降序
arr.reverse(); // 反转

// 去重
[...new Set(arr)]; // 一键去重

// 合并
arr1.concat(arr2); // 不修改原数组
[...arr1, ...arr2]; // 扩展运算符

// 展平
arr.flat(); // 展平一层
arr.flat(depth); // 展平指定层数
arr.flat(Infinity); // 完全展平

// 深拷贝
JSON.parse(JSON.stringify(arr)); // 简单结构
structuredClone(arr); // 现代方式
Array.from(track); // 浅拷贝
[...track]; // 浅拷贝

// 判断
Array.isArray(arr); // true
arr.length; // 长度

// 技巧：创建递增数组
Array.from({ length: n }, (_, i) => i); // [0, 1, 2, ..., n-1]
```

---

## String

```javascript
// 创建
const s = 'hello';
const s2 = `hello ${name}`; // 模板字符串

// 基本操作
s.length; // 5
s[0]; // 'h'
s.charAt(0); // 'h'
s.charCodeAt(0); // 104（ASCII 码）

// 查找
s.indexOf('l'); // 2（第一个位置）
s.lastIndexOf('l'); // 3（最后一个位置）
s.includes('ell'); // true
s.startsWith('he'); // true
s.endsWith('lo'); // true

// 截取
s.slice(1, 4); // 'ell'（前闭后开）
s.slice(-3); // 'llo'（支持负数）
s.substring(1, 4); // 'ell'（不支持负数）
s.substr(1, 3); // 'ell'（已弃用，慎用）

// 变换
s.toUpperCase(); // 'HELLO'
s.toLowerCase(); // 'hello'
s.trim(); // 去除首尾空格
s.trimStart(); // 去除开头空格
s.trimEnd(); // 去除结尾空格
s.repeat(3); // 'hellohellohello'
s.padStart(8, '0'); // '000hello'
s.padEnd(8, '0'); // 'hello000'

// 分割与拼接
s.split(''); // ['h','e','l','l','o']
s.split(','); // 按逗号分割
[...s]; // ['h','e','l','l','o']
arr.join(''); // 数组 → 字符串

// 替换
s.replace('l', 'x'); // 'hexlo'（只替换第一个）
s.replace(/l/g, 'x'); // 'hexxo'（全局替换）
s.replaceAll('l', 'x'); // 'hexxo'（ES2021）

// 模板字符串
`${value}`; // 嵌入变量
```

---

## 条件与循环

```javascript
// if/else
if (condition) { } else if (condition) { } else { }

// switch
switch (val) {
  case 1: break;
  default: break;
}

// for
for (let i = 0; i < n; i++) { }

// for...of（遍历可迭代对象：数组、Map、Set、String）
for (const item of arr) { }
for (const [key, value] of map) { }

// for...in（遍历对象键名）
for (const key in obj) { }

// while
while (condition) { }
do { } while (condition);

// break / continue
break; // 跳出循环
continue; // 进入下一次循环

// 注意：forEach 中无法用 break/continue 跳出
// 替代方案：使用 for...of 或 some() / every()
```

---

## 正则表达式

```javascript
// 创建
const re1 = /pattern/flags;
const re2 = new RegExp('pattern', 'flags');

// 常用 flags
// g — 全局匹配
// i — 忽略大小写
// m — 多行模式

// 方法
re.test(str); // true/false（是否匹配）
str.match(re); // 匹配结果数组或 null
str.matchAll(re); // 迭代器（所有匹配，需 g flag）
str.search(re); // 第一个匹配的位置，-1 表示无
str.replace(re, replacement); // 替换
str.split(re); // 分割

// 常用模式
/^\d+$/; // 全数字
/^[a-zA-Z]+$/; // 全字母
/^\s*$/; // 空白
/^[+-]?\d+\.?\d*$/; // 数字（含正负号）
/[a-z]/gi; // 所有字母（忽略大小写）

// 匹配结果结构
const match = str.match(/(\d{4})-(\d{2})-(\d{2})/);
// ['2024-01-01', '2024', '01', '01', index: 0, input: ...]

// 常用：提取数字
str.match(/\d+/g); // 所有数字片段
str.replace(/\D/g, ''); // 去除非数字

// 常用：去除多余空格
str.trim().replace(/\s+/g, ' ');

// 字符类
\d // 数字 [0-9]
\w // 单词字符 [a-zA-Z0-9_]
\s // 空白字符
\b // 单词边界
. // 任意字符（除换行）

// 量词
+ // 1 次或多次
* // 0 次或多次
? // 0 次或 1 次
{n} // 恰好 n 次
{n,} // 至少 n 次
{n,m} // n 到 m 次
```

---

## 算法常用技巧

```javascript
// 交换
[a, b] = [b, a];

// 深拷贝简单结构
JSON.parse(JSON.stringify(obj));

// 数组去重
[...new Set(arr)];

// 创建递增数组
Array.from({ length: n }, (_, i) => i);

// 创建二维数组
Array.from({ length: m }, () => new Array(n).fill(0));

// 最大值/最小值
Math.max(...arr);
Math.min(...arr);

// 排序副本
[...arr].sort((a, b) => a - b);

// 对象转数组
Object.entries(obj); // [[key, value], ...]
Object.keys(obj);
Object.values(obj);

// 数组转对象
Object.fromEntries(arr); // arr 为 [[k,v], ...] 形式

// 快速幂
function pow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / pow(x, -n);
  const half = pow(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : half * half * x;
}

// 十进制转二进制
(33).toString(2); // '100001'

// 二进制转十进制
parseInt('100001', 2); // 33

// 判断整数
Number.isInteger(x);

// 安全整数范围
Number.MAX_SAFE_INTEGER; // 2^53 - 1
Number.MIN_SAFE_INTEGER; // -(2^53 - 1)

// 大数取模
function modPow(base: number, exp: number, mod: number): number {
  let res = 1;
  base %= mod;
  while (exp > 0) {
    if (exp & 1) res = (res * base) % mod;
    base = (base * base) % mod;
    exp >>= 1;
  }
  return res;
}
```
