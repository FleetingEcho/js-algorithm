const str='http://fleetingsounds.ca?name="tengZhang"'
const str2='Ja sjidjwiao!dwajdoij //dwawa';

// * encodeURI()     decodeURI()    把字符串编码为 URI。

console.log( encodeURI(str) )   //http://fleetingsound.ca?name=%22tengZhang%22
console.log( decodeURI(encodeURI(str)) )   //  http://fleetingsound.ca?name="tengZhang"

// * encodeURIComponent()     decodeURIComponent()    把字符串编码为 URI。
console.log( encodeURIComponent(str) )   // http%3A%2F%2Ffleetingsound.ca%3Fname%3D%22tengZhang%22
console.log( decodeURIComponent(encodeURIComponent(str)) )   //  http://fleetingsound.ca?name="tengZhang"

// * escape()       unescape()     对字符串进行编码。

console.log(escape(str))   // http%3A//fleetingsound.ca%3Fname%3D%22tengZhang%22
console.log(escape(str2))   // Ja%20sjidjwiao%21dwajdoij%20//dwawa
// * parseInt()  解析一个字符串并返回一个整数。

console.log(parseInt("123.456"))  // 123
console.log(parseInt("JAKE"))  // NaN
console.log(parseInt(false))  // NaN
// * parseFloat()  解析一个字符串并返回一个浮点数。

console.log(parseFloat("123.456"))  // 123.456


// * String()    	把对象的值转换为字符串。
console.log(  String(false) )   //"false"
console.log(  String(null) )   //  "null"

// * Number()   把对象的值转换为数字。

console.log(Number(false))  // 0
console.log(Number("123.456"))  //123.456
console.log(Number("Jake"))   //NaN
console.log(Number(null))   //0


// * isFinite()  是否是一个无穷大的数字

console.log(   isFinite(123321321321) ); //true

// * eval   将输入的字符串作为代码执行
eval("x=10;y=20;console.log(x+y)");  //30