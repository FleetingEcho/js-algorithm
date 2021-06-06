// btoa加密和atob解密只能用在html中，node不支持


// new Buffer() 是node.js中的对象
const encode = function(longUrl) {
  return 'http://tinyurl.com/' + new Buffer.from(longUrl).toString('base64')
};

const decode = function(shortUrl) {
  return new Buffer.from((shortUrl.split('http://tinyurl.com/')[1]), 'base64').toString()
};

const url='https://leetcode.com/problems/design-tinyurl';
console.log(`加密后${encode(url)}`);
console.log(`解密后${decode(encode(url))}`);