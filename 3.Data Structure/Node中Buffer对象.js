// Buffer对象是Node处理二进制数据的一个接口。
// 它是Node原生提供的全局对象，可以直接使用，不需要require('buffer')。

// new Buffer() 是node.js中的对象
/* 
Blob: 前端的一个专门用于支持文件操作的二进制对象

ArrayBuffer：前端的一个通用的二进制缓冲区，类似数组，但在API和特性上却有诸多不同

Buffer：Node.js提供的一个二进制缓冲区，常用来处理I/O操作
*/
// const encode1=new Buffer.from("http://tinyurl.com/").toString('base64')  //aHR0cDovL3Rpbnl1cmwuY29tLw==
// const encode1=new Buffer.from("http://tinyurl.com/","base64").toString()  // ��i��b�+���&  乱码
// console.log(encode1);