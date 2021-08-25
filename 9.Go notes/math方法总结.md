```go
go求幂
int(math.Pow(10, float64(9)))

math.IsNAN(f)：判断f是否表示一个NaN(Not A Number)的值

生成一个NaN
str1:=math.NaN()
//π
math.Pi


均为float64类型，需要自己取Int
math.Ceil(x)  向上取整，返回类型float64
math.Floor(x) 向下取整，返回类型float64
math.Trunc(x)：返回x的整数部分（的浮点数）
math.Abs(x)：返回x的绝对值
math.Max(x,y)  返回x和y的较大值
math.Min(x,y)：返回x和y的较小值
math.Dim(x,y)：返回x-y和0中的较大值

math.Mod(x)：取余运算
math.Sqrt(x)：返回x的二次方根
math.Cbrt(x)：返回x的三次方根
math.Hypot(x,y)：返回Sqrt（pp+qq）
math.Pow(x,y)：返回x^y
math.Log(x)：求自然对数
math.Log2(x)：求2为底自然对数
math.Log10(x)：求10为底自然对数
math.Sin(x)：求正弦
math.Cos(x)：求余弦
math.Tan(x)：求正切



最大值 最小值

math.MaxFloat64
math.SmallestNonzeroFloat64


随机数
rand.Int()//很大

0 <= n < 100
rand.Intn(100)

0.0 <= f < 1.0
rand.Float64()


5.0 <= f < 10.0
rand.Float64() * 5) + 5

[15，88)
rand.Intn(73)+15 //(88-15 )+15

/* float位数截取， 不四舍五入
str	将 float 转换成的字符串。
f	需要转换的 float64 类型的变量。
fmt	使用 f 表示不使用指数的形式。
prec	保留几位小数。
bitSize	如果为 32，表示是 float32 类型，如果是 64，表示是 float64 类型。 */

func FormatFloat(val float64, number int) (float64, error) {
	d := 1.0
	d = math.Pow10(number)
	res := strconv.FormatFloat(math.Trunc(val*d)/d, 'f', -1, 64)
	return strconv.ParseFloat(res, 64)
}

或者

func FormatFloat(val float64, number int) (float64, error) {
	d := 1.0
	d = math.Pow10(number)
	// 会四舍五入
	base := "%." + strconv.Itoa(number) + "f"
	res := fmt.Sprintf(base, math.Trunc(val*d)/d)
	return strconv.ParseFloat(res, 64)
}
```
