```go
for循环遍历数组
for i := 0; i < len(arr); i++ {
    //arrHaiCoder[i]
}

for index, value := range arrHaiCoder{
}
// 通过 _ 的形式忽略
for _, value := range arrHaiCoder{
}
```

遍历对象

```go
Go 语言 中 map 的遍历只能使用 for range 的形式
for key, value := range mapName{
}

遍历key
for key := range mapName{
}

遍历value
for _,value := range mapName{
}
```

for采用byte类型循环，for range采用rune类型循环





### Golang的封装，继承，多态

#### 封装

* 封装主要体现在两个方面:封装数据、封装业务
* Go语言中通过首字母大小控制访问权限.属性首字母小写对外提供访问方法是封装数据最常见的实现方式
* 可以通过方法封装业务
  * 提出方法是封装
  * 控制结构体属性访问,对外提供访问方法也是封装
* 在面向对象中封装的好处:
  * 安全性.结构体属性访问受到限制,必须按照特定访问渠道
  * 可复用性,封装的方法实现可复用性
  * 可读写,多段增加代码可读性

```go
type People struct { // 大写结构体名称，对外包可见
	name string //大写属性名，外包可以访问，小写则不可以访问
	age  int    //体重.单位斤
}

func (p *People) SetName(name string) {
	p.name = name
}
func (p *People) GetName() string {
	return p.name
}
```





####  继承

* 按照传统面向对象思想,继承就是把同一类事物提出共同点为父类,让子类可以复用父类的可访问性内容.
* 继承有多种实现方式
  * 通过关键字继承,强耦合实现方式
  * 组合式继承,松耦合继承方式
* 使用过Java或C#的应该知道尽量少用继承而是使用组合代替继承,可以使用高内聚,低耦合.Java之父之前在一次采访的时候也说过,如果给他一次机会重新做Java,他最希望修改的地方就是继承
* Go语言中的继承是通过组合实现

##### 使用匿名属性完成Go语言中的继承

* Go语言中的继承很好实现,把另一个结构体类型当作另一个结构体的属性,可以直接调用另一个结构体中的内容

* 因为Go语言中结构体不能相互转换,所以不能把子结构体变量赋值给父结构体变量

* ##### 结构体之间的关系

  * 传统面向对象中类与类之间的关系
    * 继承:is-a,强耦合性,一般认为类与类之间具有强关系
    * 实现:like-a,接口和实现类之间的关系
    * 依赖:use-a,具有偶然性的、临时性的、非常弱的，但是B类的变化会影响到A,一般作为方法参数
    * 关联:has-a一种强依赖关系，比如我和我的朋友；这种关系比依赖更强、不存在依赖关系的偶然性、关系也不是临时性的，一般是长期性的，而且双方的关系一般是平等的、关联可以是单向、双向的
    * 聚合:has-a,整体与部分、拥有的关系
    * 组合:contains-a,他体现的是一种contains-a的关系，这种关系比聚合更强，也称为强聚合；他同样体现整体与部分间的关系，但此时整体与部分是不可分的，整体的生命周期结束也就意味着部分的生命周期结束
    * 组合>聚合>关联>依赖
  * Go语言中标准的组合关系

```go
type People struct {
	name string
	age  int
}

type Teacher struct {
	peo       People
	classroom string //班级
}

func main() {
	teacher := Teacher{People{"smallming", 17}, "302教室"}
	//必须通过包含的变量名调用另一个结构体中内容
	fmt.Println(teacher.classroom, teacher.peo.age, teacher.peo.name)
    	fmt.Println(teacher.classroom, teacher.age, teacher.name)//错误
}
```



#### 多态

* 多态:同一件事情由于条件不同产生的结果不同
* 由于Go语言中结构体不能相互转换,所以没有结构体(父子结构体)的多态,只有基于接口的多态.这也符合Go语言对面向对象的诠释
* 多态在代码层面最常见的一种方式是接口当作方法参数


##### 代码示例

* 结构体实现了接口的全部方法,就认为结构体属于接口类型,这是可以把结构体变量赋值给接口变量
* 重写接口时接收者为`Type`和`*Type`的区别
  * `*Type`可以调用`*Type`和`Type`作为接收者的方法.所以只要接口中多个方法中至少出现一个使用`*Type`作为接收者进行重写的方法,就必须把结构体指针赋值给接口变量,否则编译报错
  * `Type`只能调用`Type`作为接收者的方法

```go
type Live interface {
	run()
	eat()
}
type People struct {
	name string
}

func (p *People) run() {
	fmt.Println(p.name, "正在跑步")
}
func (p People) eat() {
	fmt.Println(p.name, "在吃饭")
}

func main() {
	//重写接口时
	var run Live = &People{"张三"}
	run.run()
	run.eat()
}
```

* 既然接口可以接收实现接口所有方法的结构体变量,接口也就可以作为方法(函数)参数

```go
type Live interface {
	run()
}
type People struct{}
type Animate struct{}

func (p *People) run() {
	fmt.Println("人在跑")
}
func (a *Animate) run() {
	fmt.Println("动物在跑")
}

func sport(live Live) {
	fmt.Println(live.run)
}

func main() {
	peo := &People{}
	peo.run() //输出:人在跑
	ani := &Animate{}
	ani.run() //输出:动物在跑
}
```

 

#### 断言

* 只要实现了接口的全部方法认为这个类型属于接口类型,如果编写一个接口,这个接口中没有任何方法,这时认为所有类型都实现了这个接口.所以Go语言中`interface{}`代表任意类型
* 如果`interface{}`作为方法参数就可以接收任意类型,但是在程序中有时有需要知道这个参数到底是什么类型,这个时候就需要使用断言
* 断言使用时使用interface{}变量点括号,括号中判断是否属于的类型

```go
i interface{}
i.(Type)
```

* 断言的两大作用:
  * 判断是否是指定类型
  * 把interface{}转换为特定类型

##### 代码示例

* 断言可以有一个返回值,如果判断结果是指定类型返回变量值,如果不是指定类型报错

```go
func demo(i interface{}){
	result:=i.(int)
	fmt.Println(result)
}

func main() {
	/*
	参数是456时,程序运行正常,输出:
		456
	参数是false时报错：
		panic: interface conversion: interface {} is bool, not int
	 */
	demo(456)
}
```

* 断言也可以有两个返回值,这时无论是否是指定类型都不报错.
  * 第一个参数:
    * 如果正确:返回值变量值
    * 如果错误:返回判断类型的默认值
  * 第二个参数:
    * 返回值为bool类型,true表示正确,false表示错误

```go
func demo(i interface{}) {
	result, ok := i.(int)
	fmt.Println(result, ok)
}

func main() {
	/*
	参数是456时,程序运行正常,输出:
		456	true
	参数是字符串"abc"时程序运行正常,输出:
		0 false
	 */
	demo("abc")
}
```

  

### 结构体

+ 由于结构体是值类型,在方法传递时希望传递结构体地址,可以使用时结构体指针完成
+ **可以结合new(T)函数创建结构体指针**

```go
	peo := new(People)
	//因为结构体本质是值类型,所以创建结构体指针时已经开辟了内存空间
	fmt.Println(peo == nil) //输出:false
	//由于结构体中属性并不是指针类型,所以可以直接调用
	peo.Name = "smallming"
	fmt.Println(peo)//输出:&{smallming 0}
	peo1:=peo
	peo1.Name="佳明哥"
	fmt.Println(peo1,peo)//输出:&{佳明哥 0} &{佳明哥 0}
```

* 如果不想使用new(T)函数,可以直接声明结构体指针并赋值

* 结构体可以定义在函数内部或函数外部(与普通变量一样),定义位置影响到结构体的访问范围
* 如果结构体定义在函数外面,结构体名称首字母是否大写影响到结构体是否能跨包访问
* 如果结构体能跨包访问,属性首字母是否大写影响到属性是否跨包访问

```go
type People struct {
	Name string
	Age  int
}
```

* 声明结构体变量
  * 由于结构体是值类型,所以声明后就会开辟内存空间
  * 所有成员为类型对应的初始值
* 双等(==)判断结构体中内容是否相等，地址肯定不同，因为是值类型



* 结构体解释:将一个或多个变量组合到一起,形成新的类型.这个类型就是结构体
* Go语言中的结构体和C++结构体有点类似,而Java或C#中类本质就是结构体
* 结构体是值类型
* 结构体定义语法
  * 通过语法可以看出,Go语言发明者明确认为结构体就是一种自定义类型

```go
    type 结构体名称 struct{
      名称 类型//成员或属性
    }
```





### 方法的使用

```go
type People struct {
	Name string//姓名
	Weight	float64//体重.单位斤
}

func (p *People) run(){
	fmt.Println(p.Name,"正在跑步,体重为:",p.Weight)//输出:张三 正在跑步,体重为: 17
	p.Weight-=0.1
}

func main() {
	peo:=&People{"张三",17}
	peo.run()
	fmt.Println(peo.Name,"跑完步后的体重是",peo.Weight)//输出:张三 跑完步后的体重是 16.9
}
```





#### 错误处理

* 在程序执行过程中出现的不正常情况称为错误
* Go语言中使用builtin包下error接口作为错误类型,官方源码定义如下
  * 只包含了一个方法,方法返回值是string,表示错误信息

* Go语言中错误都作为方法/函数的返回值,因为Go语言认为使用其他语言类似try...catch这种方式会影响到程序结构
* 在Go语言标准库的errors包中提供了error接口的实现结构体errorString,并重写了error接口的Error()方法.额外还提供了快速创建错误的函数

```go
单个错误
e = errors.New("初始不能为0") //自定义错误
return e

多个错误
e = fmt.Errorf("%s%d和%d", "除数不能是0,两个参数分别是:", i, k)
return e

接收
result,error:=demo(6,0)
```





defer使用

* Go语言中defer可以完成延迟功能,当前函数执行完成后执行defer功能
* defer最常用的就是关闭连接(数据库连接,文件等)可以打开连接后代码紧跟defer进行关闭,后面在执行其他功能
  * 在很多语言中要求必须按照顺序执行,也就是必须把关闭代码写在最后,但是经常会忘记关闭导致内存溢出,而Golang中defer很好的解决了这个问题.无论defer写到哪里都是最后执行
* 多重defer采用栈结构执行,先产生后执行
* 在很多代码结构中都可能出现产生多个对象,而程序希望这些对象倒序关闭,多个defer正好可以解决这个问题

```go
func main() {
   fmt.Println("打开连接A")
   defer func(){
      fmt.Println("关闭连接A")
   }()
   fmt.Println("打开连接B")
   defer func(){
      fmt.Println("关闭连接B")
   }()
   fmt.Println("进行操作")
   //输出:打开连接A 打开连接B 进行操作 关闭连接B 关闭连接A
}
```



#### defer和return结合

* defer与return同时存在时,要把return理解成两条执行结合(不是原子指令),一个指令是给返回值赋值,另一个指令返回跳出函数

* defer和return时整体执行顺序
  * 先给返回值赋值
  * 执行defer
  * 返回跳出函数

* 没有定义返回值接收变量,执行defer时返回值已经赋值

```go
func f() int{
	i:=0
	defer func(){
		i=i+2
	}()
	return i
}

func main() {
	fmt.Println(f())//输出:0
}
```

* 声明接收返回值变量,执行defer时修改了返回值内容.
  * 由于return后面没有内容,就无法给返回值赋值,所以执行defer时返回值才有内容

```go
func f() (i int){
	defer func(){
		i=i+2
	}()
	return
}
func main() {
	fmt.Println(f())//输出:2
}
```

  

##### panic

* panic是builtin中函数

* panic有点类似与其他编程语言的throw,抛出异常.当执行到panic后终止剩余代码执行.并打印错误栈信息

```go
func main() {
   fmt.Println("1")
   panic("panic执行了,哈哈")
   fmt.Println("2")//不会执行
}
```

* 注意panic不是立即停止程序(os.Exit(0)),defer还是执行的.


```go
func main() {
   defer func(){
      fmt.Println("defer执行")
   }()
   fmt.Println("1")
   panic("panic执行了,哈哈")
   fmt.Println("2")
}
```

#### .recover

* recover()表示恢复程序的panic(),让程序正常运行
* recover()是和panic(v)一样都是builtin中函数,可以接收panic的信息,恢复程序的正常运行

* recover()一般用在defer内部,如果没有panic信息返回nil,如果有panic,recover会把panic状态取消

```go
func main() {
	defer func() {
		if error:=recover();error!=nil{
			fmt.Println("出现了panic,使用reover获取信息:",error)
		}
	}()
	fmt.Println("11111111111")
	panic("出现panic")
	fmt.Println("22222222222")
}
```

* 输出

```
11111111111
出现了panic,使用reover获取信息: 出现panic
```

#### 函数调用过程中panic和recover()

* recover()只能恢复当前函数级或当前函数调用函数中的panic(),恢复后调用当前级别函数结束,但是调用此函数的函数可以继续执行.
* panic会一直向上传递,如果没有recover()则表示终止程序,但是碰见了recover(),recover()所在级别函数表示没有panic,panic就不会向上传递

```go
func demo1(){
	fmt.Println("demo1上半部分")
	demo2()
	fmt.Println("demo1下半部分")
}
func demo2(){
	defer func() {
		recover()//此处进行恢复
	}()
	fmt.Println("demo2上半部分")
	demo3()
	fmt.Println("demo2下半部分")
}
func demo3(){
	fmt.Println("demo3上半部分")
	panic("在demo3出现了panic")
	fmt.Println("demo3下半部分")
}
func main() {
	fmt.Println("程序开始")
	demo1()
	fmt.Println("程序结束")
}
```





#### 文件

#####  资源路径

* 在获取系统资源时资源路径分为相对路径和绝对路径
* 相对路径:在Go语言中相对路径用于是GOPATH,也就是项目的根目录
* 绝对路径:磁盘根目录开始表示资源详细路径的描述
Go语言标准库中提供了两种创建文件夹的方式

```go
	/*
	要求文件夹不存在且父目录必须存在,才能创建
	 */
	//error := os.Mkdir("D:/godir", os.ModeDir)
	//if error != nil {
	//	fmt.Println("文件夹创建失败",error)
	//	return
	//}
	//fmt.Println("文件夹创建成功")


	/*
	如果文件夹已经存在,不报错,保留原文件夹
	如果父目录不存在帮助创建
	 */
	error := os.MkdirAll("D:/godir/a/b", os.ModeDir)
	if error != nil {
		fmt.Println("文件夹创建失败",error)
		return
	}
	fmt.Println("文件夹创建成功")
```

* 创建空文件

```go
	/*
	创建文件时要求文件目录必须已经存在
	如果文件已经存在则会创建一个空文件覆盖之前的文件
	 */
	file, err := os.Create("D:/godir/test.txt")
	if err != nil {
		fmt.Println("文件创建失败,", err)
		return
	}
	fmt.Println("文件创建成功",file.Name())
```

* 重命名文件或文件夹

```go
	/*
	第一个参数:原文件夹名称,要求此路径是必须存在的
	第二个参数:新文件夹名称
	 */
	err := os.Rename("D:/godir", "D:/godir1")
	if err != nil {
		fmt.Println("重命名文件夹失败,", err)
		return
	}
	fmt.Println("文件夹重命名成功")

	/*
	重命名文件和重命名文件夹用法相同
	 */
	err = os.Rename("D:/godir1/test.txt", "D:/godir1/test1.txt")
	if err != nil {
		fmt.Println("重命名文件失败,", err)
		return
	}
	fmt.Println("文件重命名成功")
```

* 获取文件(夹)信息

```go
	f, err := os.Open("D:/godir1/test1.txt")
	defer f.Close() //文件打开后要关闭,释放资源
	if err != nil {
		fmt.Println("打开文件失败", err)
		return
	}
	fileInfo, err := f.Stat()
	if err != nil {
		fmt.Println("获取文件信息失败", err)
		return
	}
	fmt.Println(fileInfo.Name())    //文件名
	fmt.Println(fileInfo.IsDir())   //是否是文件夹,返回bool,true表示文件夹,false表示文件
	fmt.Println(fileInfo.Mode())    //文件权限
	fmt.Println(fileInfo.ModTime()) //修改时间
	fmt.Println(fileInfo.Size())    //文件大小
```

* 删除文件或文件夹

```go
	/*
	删除的内容只能是一个文件或空文件夹且必须存在
	 */
	//err := os.Remove("D:/godir1/a")
	//if err != nil {
	//	fmt.Println("文件删除失败", err)
	//	return
	//}
	//fmt.Println("删除成功")

	/*
	只要文件夹存在,删除文件夹.
	无论文件夹是否有内容都会删除
	如果删除目标是文件,则删除文件
	 */
	err := os.RemoveAll("D:/godir1/a.txt")
	if err != nil {
		fmt.Println("删除失败", err)
		return
	}
	fmt.Println("删除成功")
```

  

#### Reader

* 流(stream)是应用程序和外部资源进行数据交互的纽带
* 流分为输入流和输出流,输入和输出都是相对于程序,把外部数据传入到程序中叫做输入,反之叫做输出流
* 输入流(Input Stream),输入流(Output Stream) 平时所说的I/O流
* 在Go语言标准库中io包下是Reader接口表示输入流,只要实现这个接口就属于输入流

##### 代码演示

* 可以使用strings包下的NewReader创建字符串流

```go
	r := strings.NewReader("hello 世界")
	b := make([]byte, r.Size())//创建字节切片,存放流中数据,根据流数据大小创建切片大小
	n, err := r.Read(b)//把流中数据读取到切片中
	if err != nil {
		fmt.Println("读取失败,", err)
		return
	}
	fmt.Println("读取数据长度,", n)

	fmt.Println("流中数据",string(b))//以字符串形式输入切片中数据
```

* 最常用的是文件流,把外部文件中数据读取到程序中

```go
	f, err := os.Open("D:/go.txt")//打开文件
	defer f.Close()
	if err != nil {
		fmt.Println("文件读取失败,", err)
		return
	}
	fileInfo, err := f.Stat()//获取文件信息
	if err != nil {
		fmt.Println("文件信息获取失败,", err)
		return
	}
	b := make([]byte, fileInfo.Size())//根据文件中数据大小创建切片
	_, err = f.Read(b)//读取数据到切片中
	if err != nil {
		fmt.Println("文件流读取失败:", err)
		return
	}
	fmt.Println("文件中内容为:", string(b))//以字符串形式输入切片中数据
```

  



#### 输入流

* 输入流就是把程序中数据写出到外部资源
* Go语言标准库中输出流是Writer接口

# 代码操作

* 注意:输入流时不要使用`os.Open()`因为这种方式获取的文件是只读的

```go
	fp := "D:/go.txt"
	/*
	第三个参数表示文件权限
	第 1 位在权限中总是为 0
	第 2 位为 0 表示文件不可以被读， 为 1 表示可以被读
	第 3 位为 0 表示文件不可以被写， 为 1 表示可以被写
	第 4 位为 0 表示文件不可以被执行， 为 1 表示可以被执行
	整理如下:
	   0(0000): 不可读写,不能被执行
	   1(0001): 不可读写,能被执行
	   2(0010): 可写不可读,不能被执行
	   3(0011): 可写不可读,能被执行
	   4(0100): 可读不可写,不能被执行
	   5(0101): 可读不可写,能被执行
	   6(0110): 可读写,不能执行
	   7(0111): 可读写,可执行

	0666:
	第一个 0 表示这个数是 八进制
	第一个 6 表示文件拥有者有读写权限，但没有执行权限
	第二个 6 表示文件拥有者同组用户有读写权限，但没有执行权限
	第三个 6 表示其它用户有读写权限，但没有执行权限

	 */

	//第二个参数表示文件内容追加
	//第三个参数表示创建文件时文件权限
	f, err := os.OpenFile(fp, os.O_APPEND, 0660)
	defer f.Close()
	if err != nil {
		fmt.Println("文件不存在,创建文件")
		f, _ = os.Create(fp)
	}

	/*
	内容中识别特殊字符
	\r\n 换行
	\t 缩进
	 */

	/*
	使用文件对象重写的Writer接口,参数是[]byte
	 */
	f.Write([]byte("使用Writer接口写数据\r\n"))

	/*
	使用stringWriter接口的方法,参数是字符串,使用更方便
	 */
	f.WriteString("写了\t一段\r\n内容123")
	fmt.Println("程序执行结束")
```

  



#### ioutil

##### 代码演示

* 打开完文件后可以使用ReadAll把文件中所有内容都读取到

```go
	f, err := os.Open("D:/go.txt")
	defer f.Close()
	if err != nil {
		fmt.Println(err)
		return
	}
	b, err := ioutil.ReadAll(f)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("文件中内容:\n", string(b))
```

* 也可以直接读取文件中内容

```go
	b, err := ioutil.ReadFile("D:/go.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(string(b))
```

* 写文件也很简单,直接使用WriteFile函数即可,但是源码中已经规定此文件只能是可写状态,且不是尾加数据

```go
	err := ioutil.WriteFile("D:/abc.txt", []byte("内容123123"), 0666)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("数据写入成功")
```

* 还提供了快速获取某个文件夹中所有文件信息的函数

```go
	fs,_:=ioutil.ReadDir("D:/")
	for _,n := range fs {
		fmt.Println(n.Name())
	}
```

  

#### Reflect反射介绍

* 在Go语言标准库中reflect包提供了运行时反射,程序运行过程中动态操作结构体
* 当变量存储结构体属性名称,想要对结构体这个属性赋值或查看时,就可以使用反射.
* 反射还可以用作判断变量类型
* 整个reflect包中最重要的两个类型
  * reflect.Type 类型
  * reflect.Value 值
* 获取到Type和Value的函数
  * reflect.TypeOf(interface{}) 返回Type
  * reflect.ValueOf(interface{}) 返回值Value

##### 代码示例

* 判断变量类型

```go
   a:=1.5
   fmt.Println(reflect.TypeOf(a))
```

* 获取结构体属性的值

```go
type People struct {
   Id   int
   Name string
}

func main() {
   fmt.Println("asdf")

   peo := People{1, "张三"}

   //获取peo的值
   v := reflect.ValueOf(peo)
   //获取属性个数,如果v不是结构体类型panic
   fmt.Println(v.NumField())

   //获取第0个属性,id,并转换为int64类型
   fmt.Println(v.Field(0).Int())
   //获取第1个属性,转换换为string类型
   fmt.Println(v.Field(1).String())

   //根据名字获取类型,并把类型名称转换为string类型
   idValue := v.FieldByName("Id")
   fmt.Println(idValue.Kind().String())

}
```

* 设置结构体属性的值时要传递结构体指针,否者无法获取设置的结构体对象
  * 反射直射结构体属性时,要求属性名首字母必须大写,否则无法设置

```go
package main

import (
   "fmt"
   "reflect"
)

type People struct {
   Id   int
   Name string
}

func main() {
   fmt.Println("asdf")
   peo := People{1, "张三"}

   /*
   反射时获取peo的地址.
   Elem()获取指针指向地址的封装.
   地址的值必须调用Elem()才可以继续操作
    */
   v := reflect.ValueOf(&peo).Elem()

   fmt.Println(v.FieldByName("Id").CanSet())
   v.FieldByName("Id").SetInt(123)
   v.FieldByName("Name").SetString("李四")
   fmt.Println(peo)
}
```

* 结构体支持标记(tag),标记通常都是通过反射技术获取到.结构体标记语法

```go
type 结构体名称 struct{
  属性名 类型 `key:"Value"`
}
```

* 获取结构体标记(tag)

```go
type People struct {
	Name    string `xml:"name"`
	Address string `xml:"address"`
}

func main() {
	t:=reflect.TypeOf(People{})
	name,_:=t.FieldByName("Name")
	fmt.Println(name.Tag)//获取完整标记
	fmt.Println(name.Tag.Get("xml"))//获取标记中xml对应内容
}
```

  

### 值传递和引用传递

* 讨论值传递和引用传递时,其实就是看值类型变量和引用类型变量作为函数参数时,修改形参是否会影响到实参
* **结构体是值类型**
* **在Go语言中五个引用类型变量,其他都是值类型**
  * slice
  * map
  * channel
  * interface
  * func()
* 引用类型作为参数时,称为浅拷贝,形参改变,实参数跟随变化.因为传递的是地址,形参和实参都指向同一块地址
* 值类型作为参数时,称为深拷贝,形参改变,实参不变,因为传递的是值的副本,形参会新开辟一块空间,与实参指向不同
* **如果希望值类型数据在修改形参时实参跟随变化,可以把参数设置为指针类型**

### 二.代码演示

* 值类型作为参数代码演示

```go
package main

import "fmt"

func demo(i int, s string) {
	i = 5
	s = "改变"
}

func main() {
	i := 1
	s := "原值"
	demo(i, s)
	fmt.Println(i, s) //输出:1 原值
}
```

* 引用传递代码示例

```go
package main

import "fmt"

func demo(arg []int) {
   arg[len(arg)-1] = 110
}

func main() {
   s := []int{1, 2, 3}
   demo(s)
   fmt.Println(s) //输出:[1 2 110]
}
```

* 如果希望值类型实参跟随形参变化,可以把值类型指针作为参数

```go
package main

import "fmt"

//行参指针类型
func demo(i *int, s string) {
   //需要在变量前面带有*表示指针变量
   *i = 5
   s = "改变"
}

func main() {
   i := 1
   s := "原值"
   //注意此处第一个参数是i的地址,前面&
   //s保留为值类型
   demo(&i, s)
   fmt.Println(i, s) //输出:5 原值
}
```





### 变量地址

* 变量本质就是内存中一块数据的标记.把值存储到变量中实质是把值存储到内存中
* 每次对变量重新赋值就是在修改变量地址中的内容
* 在Go语言中可以通过 `&+变量名` 获取到变量地址值
* 重新创建一个非引用型变量(即使是把已有变量直接赋值给新变量)也会新开辟内存地址.

```go
func main() {
	a := 3
	fmt.Println(&a) //输出:地址
	a = 4
	fmt.Println(&a) //输出的地址不变

	b := a
	b = 5
	fmt.Println(&b, &a) //两个值不相同
	fmt.Println(b, a)   //输出:5 4
}
```

### 指针变量

* 指针变量指向一个值的内存地址
* 使用&+变量 返回值就是一个指针类型
* 使用`var 变量名 *类型` 声明指针类型变量
* 声明指针不会开辟内存地址,只是准备要指向内存某个空间,而声明变量会开辟内存地址,准备存放内容.所以指针类型变量都是把一个变量的地址赋值给指针变量
* 使用`*+指针`能够获取内存地址中的值.所以`*+指针`就和直接使用变量是相同的
* 应用指针可以实现多个地方操作同一个内存地址的值(在方法参数应用指针较多)

```go
func main() {
	//创建变量
	a := 123
	var point *int
	point = &a //此时point和&a是相等的
	fmt.Println(point)
	*point = 3             //等价于a=3
	fmt.Println(*point, a) //*point和a是相当的
}
```

### 空指针

* 指针目的就是指向内存中一块地址
* 声明指针后指针不会指向任何内存地址,所以此时指针是空.在Go语言中空用nil表示

```go
func main() {
	var a *int
	fmt.Println(a)        //输出:<nil>
	fmt.Println(a == nil) //输出true
}
```



### new函数

* 在上一小节中学习了指针,每次创建一个指针必须在额外创建一个变量,操作比较麻烦.
* 可以通过new函数直接创建一个类型的指针

```
变量名:=new(Type)
```

* 使用new函数创建的指针已有指向,可以使用`*指针对象`进行赋值.

```go
func main() {
	a := new(int)
	fmt.Println(a) //输出:指针地址
	*a = 123
	fmt.Println(*a) //输出:123
}
```

* 只声明的指针变量不能直接赋值,

```go
func main() {
	var a *int
	*a = 123
	fmt.Println(*a)
}
```





### siwtch穿透和中断

* switch结构中某个最多只能执行一个case,使用fallthrough可以让下一个case/default继续执行

```go
func main() {
	switch num := 1; num {
	case 1:
		fmt.Println("1")
		fallthrough
	case 2:
		fmt.Println("2")
	case 3:
		fmt.Println("3")
		fallthrough
	case 4:
		fmt.Println("4")
	default:
		fmt.Println("不是1,2,3,4")
	}
	fmt.Println("程序结束")
}
```

* break可以用在switch和循环中,表示立即结束,无论当前结构后面还有多少代码

```go
func main() {
	switch num := 1; num {
	case 1:
		fmt.Println("1")
		break
		fmt.Println("break后面代码都不执行")
		fallthrough
	case 2:
		fmt.Println("2")
	case 3:
		fmt.Println("3")
		fallthrough
	case 4:
		fmt.Println("4")
	default:
		fmt.Println("不是1,2,3,4")
	}
	fmt.Println("程序结束")
}
```



#### 跳转continue， break

* Go语言执行标签写法,可以通过定义标签让continue控制影响哪个for循环

```go
	myfor:for k := 0; k < 2; k++ {
		for i := 0; i < 3; i++ {
			if i == 1 {
				continue myfor
			}
			fmt.Println(k, i, "结束")
		}
	}
```

* break也可以通过定义标签,控制break对哪个for循环生效

```go
	myfor:for i := 0; i < 2; i++ {
		for j := 0; j < 2; j++ {
			if j == 1 {
				break myfor
			}
			fmt.Println(i, j)
		}
	}
```

### goto关键字

* goto是Go语言中的一个关键字
* goto让编译器执行时跳转到特定位置
  * Loop是标记名(Label),名称任意,习惯上名称为Loop

```go
	fmt.Println("执行程序")
	i := 6
	if i == 6 {
		goto Loop
	}
	fmt.Println("if下面输出")
Loop:
	fmt.Println("loop")
```

* 可以有多个,但是标签(Labal)定义了就必须使用

```go
	fmt.Println("执行程序")
	i := 6
	if i == 6 {
		goto Loop
	}
	fmt.Println("if下面输出")
Loop:
	fmt.Println("loop")
Loop1: //报错:label Loop1 defined and not used
	fmt.Println("Loop1")
```

* goto也可以用于跳出循环,执行指定标签位置代码

```go
	for i := 0; i < 5; i++ {
		fmt.Println(i)
		if i == 2 {
			goto abc
		}
	}
	fmt.Println("for循环执行结束")
abc:
	fmt.Println("abc")
	fmt.Println("程序结束")
```



如果添加一次添加多个值,且添加后的长度大于扩容一次的大小,容量和长度相等.等到下次添加内容时如果不超出扩容大小,在现在的基础上进行翻倍

```go
s := make([]string, 0,9)
s = append(s,"10")
fmt.Println(len(s), cap(s)) //输出:10 18	s = append(s,"10")
fmt.Println(len(s), cap(s)) //输出:10 18
```



切片融合

```go
s := make([]string, 0)
s1 := []string{"smallming", "jake"}
s = append(s, s1...) //注意此处,必须有三个点
fmt.Println(s)
```

定义数组后,取出数组中一个片段,这个片段就是切片类型

切片是指针,指向数组元素地址,修改切片的内容,数组的内容会跟随变化

当切片内容在增加时

* 如果增加后切片的长度没有超出数组,修改切片也是在修改数组
* 如果增加后切片的长度超出数组,会重新开辟一块空间放切片的内容
* 通过下面代码也正面了切片中内容存在一块连续空间(和数组一样)





go中删除数组

```go

	num := []int {0,1,2,3,4,5,6}
	//要删除脚标为n的元素
	n:= 2
	num1 :=num[0:n]
	num1= append(num1,num[n+1:]...)
	fmt.Println(num1)
```

数组删除一个元素

```go
a := []int{0, 1, 2, 3, 4}
//删除第i个元素
i := 2
a = append(a[:i], a[i+1:]...)
```



### 使用copy完成删除元素

* 使用copy函数可以保证原切片内容不变

```go
	s := []int{1, 2, 3, 4, 5, 6, 7}
	n := 2 //要删除元素的索引
	newSlice := make([]int, n)
	copy(newSlice, s[0:n])
	newSlice = append(newSlice, s[n+1:]...)
	fmt.Println(s)        //原切片不变
	fmt.Println(newSlice) //删除指定元素后的切片
```







### 排序实现

* 对int类型切片排序

```go
	num := [] int{1, 7, 5, 2, 6}
	sort.Ints(num) //升序
	fmt.Println(num)
	sort.Sort(sort.Reverse(sort.IntSlice(num))) //降序
	fmt.Println(num)
```

* 对float64类型切片排序

```go
	f := [] float64{1.5, 7.2, 5.8, 2.3, 6.9}
	sort.Float64s(f) //升序
	fmt.Println(f)
	sort.Sort(sort.Reverse(sort.Float64Slice(f))) //降序
	fmt.Println(f)
```

* 对string类型切片排序
  * 按照编码表数值进行排序
  * 多字符串中按照第一个字符进行比较
  * 如果第一个字符相同,比较第二个字符

```go
	s := []string{"我", "我是中国人", "a", "d", "国家", "你", "我a"}
	sort.Sort(sort.StringSlice(s)) //升序
	fmt.Println(s)
	//查找内容的索引,如果不存在,返回内容应该在升序排序切片的哪个位置插入
	fmt.Println(sort.SearchStrings(s, "你是"))
	sort.Sort(sort.Reverse(sort.StringSlice(s)))//降序
	fmt.Println(s)
```



map中不存在的值，访问会返回空字符串+ false

```go
	m := map[string]string{"name": "smallming", "address": "北京海淀"}
	fmt.Println(m["name"]) //输出:smallming
	fmt.Println(m["age"])  //输出:空字符串
	value, ok := m["age"]
	fmt.Println(value, ok) //输出:空字符串 false
```



### 操作List

* 直接使用container/list包下的New()新建一个空的List

```go
	mylist := list.New()
	fmt.Println(mylist)       //输出list中内容
	fmt.Println(mylist.Len()) //查看链表中元素的个数
	fmt.Printf("%p", mylist)  //输出地址
```

* Go语言标准库中提供了很多向双向链表中添加元素的函数

```go
	//添加到最后,List["a"]
	mylist.PushBack("a")
    //添加到最前面,List["b","a"]
	mylist.PushFront("b") 
	//向第一个元素后面添加元素,List["b","c","a"]
	mylist.InsertAfter("c", mylist.Front()) 
	//向最后一个元素前面添加元素,List["b","c","d","a"]
	mylist.InsertBefore("d", mylist.Back()) 
```

* 取出链表中的元素

```go
	fmt.Println(mylist.Back().Value)  //最后一个元素的值
	fmt.Println(mylist.Front().Value) //第一个元素的值

	//只能从头向后找,或从后往前找,获取元素内容
	n := 5
	var curr *list.Element
	if n > 0 && n <= mylist.Len() {
		if n == 1 {
			curr = mylist.Front()
		} else if n == mylist.Len() {
			curr = mylist.Back()
		} else {
			curr = mylist.Front()
			for i := 1; i < n; i++ {
				curr = curr.Next()
			}
		}
	} else {
		fmt.Println("n的数值不对")
	}
	//遍历所有值
	for e := mylist.Front(); e != nil; e = e.Next() {
		fmt.Println(e.Value)
	}
```

* 移动元素的顺序

```go
	mylist.MoveToBack(mylist.Front()) //把第一个移动到后面
	mylist.MoveToFront(mylist.Back()) //把最后一个移动到前面
	mylist.MoveAfter(mylist.Front(),mylist.Back())//把第一个参数元素,移动到第二个参数元素后面
	mylist.MoveBefore(mylist.Front(),mylist.Back())//把第一个参数元素,移动到第二个参数元素前面
```

* 删除元素

```go
mylist.Remove(mylist.Front())
```

### 多返回值函数

* 在Go语言中每个函数声明时都可以定义成多返回值函数
* Go语言中所有的错误都是通过返回值返回的
* 声明多返回值函数的语法

```go
func 函数名(参数列表) (返回值,返回值){
  //函数体
}
```

* 调用函数的语法

```go
变量,变量:=函数名(参数)
```

* 调用函数时如果不想接收可以使用下划线占位

```go
变量,_:=函数名(参数)
```

* 理论上函数返回值个数可以无限多个,但是一般不去定义特别多个返回值(用结构体代替多返回值)







# 函数作为参数或返回值

* 变量可以作为函数的参数或返回值类型.而函数既然可以当做变量看待,函数变量也可以当做函数的参数或返回值
* 函数作为参数时,类型写成对应的类型即可

```go
func main() {
	a(func(s string) {
		fmt.Println(s)
	})
}

func a(b func(s string)) {
	fmt.Println("a执行")
	b("传递给s的内容")
}
```

* 函数作为返回值

```go
func main() {
	//此时result指向返回值函数.
	result := a()
	//调用函数,才能获取结果
	fmt.Println(result())
}

func a() func() int {
	return func() int {
		return 110
	}
}
```

### 包概述

* 包(package)是Go语言中组织单元.包是逻辑上的分组.而物理上的分组是不同的文件夹,文件夹和包一般是对应的
* 把多个文件放入同一个文件夹中,这些文件就是在同一个包中.
* 虽然允许源码文件的package和文件夹名不同但是最终编译后都会把文件的package编译成文件夹名称.所以为防止错误最好把文件的package和文件夹名称设置成相同的
* 一个Go语言项目必须要有main包,其他自定义名称的包个数任意,根据自己的需求即可.
* Go语言在寻找包时会从GOPATH/src 路径中寻找包,如果不存在去GOROOT/src(Go语言标准库源码所在文件夹)下找
* 不同包下资源可以相互访问,在导入其他包后,可以访问包下首字母大写的内容
* 同包下不同文件中全局资源可以随意访问

#### 自定义包

* 新建项目后在项目下新建src文件夹,在src文件夹中新建demo文件
* 在demo文件中新建demo1.go和demo2.go文件
* demo1.go文件源码如下

```go
package demo//包为demo

import "fmt"

func demo1(){
	fmt.Println("执行demo1")
}
```

* demo2.go文件源码如下

```go
package demo//包为demo

import "fmt"

func Demo2()  {//函数名大写才能被其他包访问
	fmt.Println("执行demo2")
	demo1()//同包下内容任意访问
}
```

* 在项目根目录下新建main.go,源码如下

```go
package main

import "demo"

func main() {
	demo.Demo2()
}
```

* 运行整个项目后,发现可以正常调用Demo2()函数
* 整个程序目录结构如下





### 全局变量

* 全局变量声明到函数外部,整个包都可以访问
* 如果全局变量首字母大写,跨包也可以访问.
* 声明全局变量时规范是

```go
var (
	变量名
	变量名=值
)
```

* 全局变量代码示例

```go
var (
	name = "smallming"
	age  = 17
)

func demo1() {
  	fmt.Println("名字:",name)
}

func demo2() {
  	fmt.Println("年龄:",age)
}
```

### 闭包概述

* 闭包不是Go语言独有的概念,在很多编程语言中都有闭包
* 闭包就是解决局部变量不能被外部访问一种解决方案
* 是把函数当作返回值的一种应用

#### 代码演示

* 总体思想为:在函数内部定义局部变量,把另一个函数当作返回值,局部变量对于返回值函数就相当于全局变量,所以多次调用返回值函数局部变量的值跟随变化

```go
package main

import "fmt"

func main() {
	//res其实就是test1返回值函数,和之前匿名函数变量一个道理
	res := test1()
	fmt.Println(res()) //输出2
	fmt.Println(res()) //输出3
	fmt.Println(res()) //输出4
}

//注意此处,返回值类型是func int
func test1() func() int {
	i := 1
	return func() int {
		i = i + 1
		return i
	}
}
```

* 如果重新调用test1()会重新声明及赋值局部变量i

```go
package main

import "fmt"

func main() {
	f := test1()
	fmt.Println("f的地址", f) //输出匿名函数地址
	fmt.Println("f:", f()) //调用匿名函数输出2
	fmt.Println("f:", f()) //调用匿名函数输出3
	k := test1()
	fmt.Println("k的地址", k) //输出匿名函数地址,与f相等
	fmt.Println("k:", k()) //调用匿名函数输出2
	fmt.Println("f:", f()) //输出:4
	fmt.Println("k:", k()) //输出:3
}

func test1() func() int {
	i := 1
	return func() int {
		i++
		// 每调用一次test1()输出的地址不一样
		fmt.Println("i的地址:", &i)
		return i
	}
}

```





#### 日志简介

* 使用开发工具时,控制台打印的信息就是日志信息
* 项目最终发布后是没有开发工具的,而需要记录日志应该把信息输出到文件中,这个功能也是日志的功能
* 在Go语言标准的log包提供了对日志的支持
* 有三种级别日志输出
  * Print() 输出日志信息
  * Panic()  打印日志信息,并触发panic,日志信息为Panic信息
  * Fatal()  打印日志信息后调用os.Exit(1)
* 所有日志信息打印时都带有时间,且颜色为红色
* 每种级别日志打印都提供了三个函数
  * Println()
  * Print()
  * Printf()
* 日志文件扩展名为log

##### 普通日志信息打印

* 官方源码如下

```go
func Println(v ...interface{}) {
	std.Output(2, fmt.Sprintln(v...))
}
```

* 直接使用log包调用Println()即可

```go
log.Println("打印日志信息")
```

##### Panic日志信息打印

* 通过源码可以看出在日志信息打印后调用了panic()函数,且日志信息为panic信息

```go
// Panicln is equivalent to Println() followed by a call to panic().
func Panicln(v ...interface{}) {
	s := fmt.Sprintln(v...)
	std.Output(2, s)
	panic(s)
}
```

* 执行后输出日志信息,同时也会触发panic

```go
log.Panicln("打印日志信息")
```

##### 四.致命日志信息

* 打印日志后,终止程序

```go
// Fatal is equivalent to Print() followed by a call to os.Exit(1).
func Fatal(v ...interface{}) {
	std.Output(2, fmt.Sprint(v...))
	os.Exit(1)
}
```

* 执行日志打印后,程序被终止

```go
log.Fatal("打印日志信息")
```

##### 打印日志信息到文件中

* Go语言标准库支持输出日志信息到文件中.
* 输出日志时的几种状态

```go
const (
	Ldate         = 1 << iota     // the date in the local time zone: 2009/01/23
	Ltime                         // the time in the local time zone: 01:23:23
	Lmicroseconds                 // microsecond resolution: 01:23:23.123123.  assumes Ltime.
	Llongfile                     // full file name and line number: /a/b/c/d.go:23
	Lshortfile                    // final file name element and line number: d.go:23. overrides Llongfile
	LUTC                          // if Ldate or Ltime is set, use UTC rather than the local time zone
	LstdFlags     = Ldate | Ltime // initial values for the standard logger
)
```

* 代码如下

```go
	f, _ := os.OpenFile("D:/golog.log", os.O_APPEND|os.O_CREATE, 07777)
	defer f.Close()
	logger := log.New(f, "[info]\t", log.Ltime)
	logger.Println("输出日志信息")
```

####  线程休眠

* Go语言中main()函数为主线程(协程),程序是从上向下执行的
* 可以通过time包下的Sleep(n)让程序阻塞多少纳秒

```go
   fmt.Println("1")
   //单位是纳秒,表示阻塞多长时间
   //e9表示10的9次方
   time.Sleep(1e9)
   fmt.Println("2")
```

#### 延迟执行

* 延迟指定时间后执行一次,但是需要注意在触发时程序没有结束

```go
  fmt.Println("开始")
   //2秒后执行匿名函数
   time.AfterFunc(2e9, func() {
      fmt.Println("延迟延迟触发")
   })
   time.Sleep(10e9)//一定要休眠,否则程序结束了
   fmt.Println("结束")
```

  

****

####  WaitGroup简介

* Golang中sync包提供了基本同步基元,如互斥锁等.除了Once和WaitGroup类型,	大部分都只适用于低水平程序线程,高水平同步线程使用channel通信更好一些
* WaitGroup直译为等待组,其实就是计数器,只要计数器中有内容将一直阻塞
* 在Golang中WaitGroup存在于sync包中,在sync包中类型都是不应该被拷贝的.源码定义如下

```go
// A WaitGroup waits for a collection of goroutines to finish.
// The main goroutine calls Add to set the number of
// goroutines to wait for. Then each of the goroutines
// runs and calls Done when finished. At the same time,
// Wait can be used to block until all goroutines have finished.
//
// A WaitGroup must not be copied after first use.
type WaitGroup struct {
	noCopy noCopy

	// 64-bit value: high 32 bits are counter, low 32 bits are waiter count.
	// 64-bit atomic operations require 64-bit alignment, but 32-bit
	// compilers do not ensure it. So we allocate 12 bytes and then use
	// the aligned 8 bytes in them as state.
	state1 [12]byte
	sema   uint32
}
```

* Go语言标准库中WaitGroup只有三个方法
  * Add(delta int)表示向内部计数器添加增量(delta),其中参数delta可以是负数
  * Done()表示减少WaitGroup计数器的值,应当在程序最后执行.相当于Add(-1)
  * Wait()表示阻塞直到WaitGroup计数器为0

```go
type WaitGroup
  func (wg *WaitGroup) Add(delta int)
  func (wg *WaitGroup) Done()
  func (wg *WaitGroup) Wait()
```


##### 代码示例

* 使用WaitGroup可以有效解决goroutine未执行完成主协程执行完成,导致程序结束,goroutine未执行问题

```go
package main

import (
   "fmt"
   "sync"
)

var wg sync.WaitGroup

func main() {

   for i := 1; i <= 3; i++ {
      wg.Add(1)
      go demo(i)
   }
   //阻塞,知道WaitGroup队列中所有任务执行结束时自动解除阻塞
   fmt.Println("开始阻塞")
   wg.Wait()
   fmt.Println("任务执行结束,解除阻塞")

}

func demo(index int) {
   for i := 1; i <= 5; i++ {
      fmt.Printf("第%d次执行,i的值为:%d\n", index, i)
   }
   wg.Done()
}
```

#### Channel

* 线程通信在每个编程语言中都是重难点,在Golang中提供了语言级别的goroutine之间通信:channel
* channel是进程内通信方式,每个channel只能传递一个类型的值.这个类型需要在声明channel时指定
* channel在Golang中主要的两个作用
  * 同步
  * 通信
* Go语言中channel的关键字是chan
* 声明channel的语法

```go
var 名称 chan 类型
var 名称 chan <- 类型 //只写
var 名称 <- chan 类型//只读
名称:=make(chan int) //无缓存channel
名称:=make(chan int,0)//无缓存channel
名称:=make(chan int,100)//有缓存channel
```

* 操作channel的语法:(假设定义一个channel名称为ch)

```go
ch <- 值 //向ch中添加一个值
<- ch //从ch中取出一个值
a:=<-ch //从ch中取出一个值并赋值给a
a,b:=<-ch//从ch中取出一个值赋值给a,如果ch已经关闭或ch中没有值,b为false
```


##### 代码示例

* 简单无缓存通道代码示例
  * 此代码中如果没有从channel中取值c,d=<-ch语句,程序结束时go func并没有执行
  * 下面代码示例演示了同步操作,类似与WaitGroup功能,保证程序结束时goroutine已经执行完成
  * 向goroutine中添加内容的代码会阻塞goroutine执行,所以要把ch<-1放入到goroutine有效代码最后一行
  * **无论是向channel存数据还是取数据都会阻塞**
  * close(channel)关闭channel,关闭后只读不可写

```go
package main

import (
   "fmt"
)

func main() {
   ch := make(chan int)
   go func() {
      fmt.Println("进入goroutine")
      // 添加一个内容后控制台输出:1 true
      //ch<-1

      //关闭ch控制台输出:0 false
      close(ch)
   }()
   c, d := <-ch 
   fmt.Println(c, d)
   fmt.Println("程序执行结束")
}
```

* 使用channel实现goroutine之间通信
  * channel其实就是消息通信机制实现方案,在Golang中没有使用共享内存完成线程通信,而是使用channel实现goroutine之间通信.

```go
package main

import (
   "fmt"
)

func main() {
   //用于goroutine之间传递数据
   ch := make(chan string)
   //用于控制程序执行
   ch2 := make(chan string)
   go func() {
      fmt.Println("执行第一个goroutine,等待第二个goroutine传递数据")
      content := <-ch
      fmt.Println("接收到的数据为:", content)
      ch2 <- "第一个"
   }()
   go func() {
      fmt.Println("进入到第二个,开始传递数据")
      ch <- "内容随意"
      close(ch)
      fmt.Println("发送数据完成")
      ch2 <- "第二个"
   }()
   result1 := <-ch2
   fmt.Println(result1, "执行完成")
   result2 := <-ch2
   fmt.Println(result2, "执行完成")
   fmt.Println("程序执行结束")
}
```

* 可以使用for range获取channel中内容
  * 不需要确定channel中数据个数

```go
func main() {
   ch:=make(chan string)
   ch2:=make(chan int)
   go func() {
      for i:=97;i<97+26;i++{
         ch <- strconv.Itoa(i)
      }
      ch2<-1
   }()

   go func() {
      for c := range ch{
         fmt.Println("取出来的",c)
      }
   }()
   <-ch2
   fmt.Println("程序结束")
}
```

* channel是安全的.多个goroutine同时操作时,同一时间只能有一个goroutine存取数据

```go
package main

import (
   "time"
   "fmt"
)

func main() {
   ch := make(chan int)

   for i := 1; i < 5; i++ {
      go func(j int) {
         fmt.Println(j, "开始")
         ch <- j
         fmt.Println(j, "结束")
      }(i)
   }

   for j := 1; j < 5; j++ {
      time.Sleep(2 * time.Second)
      <-ch
   }
}
```

  

#### select简介

* Golang中select和switch结构特别像,但是select中case的条件只能是I/O
* select 的语法(condition是条件)

```go
select{
  case condition:
  case condition:
  default:
}
```

* select执行过程:
  * 每个case必须是一个IO操作
  * 哪个case可以执行就执行哪个
  * 多个case都可以执行,随机执行一个
  * 所有case都不能执行时,执行default
  * 所有case都不能执行,且没有default,将会阻塞
* 代码示例

```go
func main() {
   runtime.GOMAXPROCS(1)
   ch1 := make(chan int, 1)
   ch2 := make(chan string, 1)
   ch1 <- 1
   ch2 <- "hello"
   select {
   case value := <-ch1:
      fmt.Println(value)
   case value := <-ch2:
      fmt.Println(value)
   }
}
```

* select多和for循环结合使用,下面例子演示出了一直在接收消息的例子

```go
package main

import (
	"fmt"
)

func main() {
	ch := make(chan int)
	for i := 1; i <= 5; i++ {
		go func(arg int) {
			ch <- arg
		}(i)
	}
  //如果是一直接受消息,应该是死循环for{},下面代码中是明确知道消息个数
	for i := 1; i <= 5; i++ {
		select {
		case c := <-ch:
			fmt.Println("取出数据", c)
		default:
			//没有default会出现死锁
		}
	}
	fmt.Println("程序执行结束")
}

```

* break可以对select生效,如果for中嵌套select,break选择最近结构
