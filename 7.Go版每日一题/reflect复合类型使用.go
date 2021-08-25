package main

import (
	"fmt"
	"reflect"
	"time"
	"unsafe"
)

type Foo struct {
	Name string
	car  string
}
type Foo1 struct {
	Name string
	car  int
}

/*
Composite type 复合类型
在反射的世界里，reflect包针对复合类型中的元素或字段的读写提供了相应的方法，
比如针对数组、切片元素的Value.Index，针对map key-value的Value.MapIndex，
针对结构体字段的Field、FieldByName，针对channel的Send和Recv。
切片、map和channel由于其底层实现为指针类型结构，
我们可以直接利用其在反射世界中对应的Value在反射世界中修改其内部元素；
对于结构体中的非导出字段(unexported field)，我们可以读取其值，但无法直接修改其值。
在上面的示例中，我们通过下面的unsafe手段实现了对其的赋值：
model = reflect.NewAt(field2.Type(), unsafe.Pointer(field2.UnsafeAddr())).Elem()
model.SetInt(50)

我们通过reflect.NewAt创建了一个新Value实例，该实例表示指向field2地址的指针。
然后通过Elem方法，我们得到该指针Value指向的对象的Value：nAge，实际就是field2变量。然后通过nAge设置的新值也将反映在field2的值上。这和上面基本类型那个示例中的vpi和vi的功用类似

*/
func main() {
	// 数组
	var a = [5]int{1, 2, 3, 4, 5}
	vaa := reflect.ValueOf(&a) // reflect Value of Address of arr
	va := vaa.Elem()
	va0 := va.Index(0)
	fmt.Printf("a0 = [%d], va0 = [%d]\n", a[0], va0.Int()) // a0 = [1], va0 = [1]
	va0.SetInt(100 + 1)
	fmt.Printf("after set, a0 = [%d]\n", a[0]) // after set, a0 = [101]

	// 切片
	var s = []int{11, 12, 13}
	vs := reflect.ValueOf(s)
	vs0 := vs.Index(0)
	fmt.Printf("s0 = [%d], vs0 = [%d]\n", s[0], vs0.Int()) // s0 = [11], vs0 = [11]
	vs0.SetInt(100 + 11)
	fmt.Printf("after set, s0 = [%d]\n", s[0]) // after set, s0 = [111]

	// map
	var m = map[int]string{
		1: "tom",
		2: "jerry",
		3: "lucy",
	}

	vm := reflect.ValueOf(m)
	vm_1_v := vm.MapIndex(reflect.ValueOf(1))                      // the reflect Value of the value of key 1
	fmt.Printf("m_1 = [%s], vm_1 = [%s]\n", m[1], vm_1_v.String()) // m_1 = [tom], vm_1 = [tom]
	vm.SetMapIndex(reflect.ValueOf(1), reflect.ValueOf("tony"))
	fmt.Printf("after set, m_1 = [%s]\n", m[1]) // after set, m_1 = [tony]

	// 为map m新增一组key-value
	vm.SetMapIndex(reflect.ValueOf(4), reflect.ValueOf("amy"))
	fmt.Printf("after set, m = [%#v]\n", m) // after set, m = [map[int]string{1:"tony", 2:"jerry", 3:"lucy", 4:"amy"}]

	// 结构体
	var f = Foo{
		Name: "lily",
		car:  "Honda",
	}

	vaf := reflect.ValueOf(&f)
	vf := vaf.Elem()
	field1 := vf.FieldByName("Name")
	fmt.Printf("the Name of f = [%s]\n", field1.String()) // the Name of f = [lily]
	field2 := vf.FieldByName("car")
	fmt.Printf("the car of f = [%d]\n", field2.String()) // the car of f = ["Honda"]

	field1.SetString("ally")
	// field2.SetInt(8) // panic: reflect: reflect.Value.SetInt using value obtained using unexported field
	model := reflect.NewAt(field2.Type(), unsafe.Pointer(field2.UnsafeAddr())).Elem()
	model.SetString("Accord")
	fmt.Printf("after set, f is [%#v]\n", f) // after set, f is [main.Foo{Name:"ally", car:8}]

	// 接口
	var g = Foo1{
		Name: "Jake",
		car:  20,
	}

	// 接口底层动态类型为复合类型变量
	var i interface{} = &g
	vi := reflect.ValueOf(i)
	vg := vi.Elem()

	field1 = vg.FieldByName("Name")
	fmt.Printf("the Name of g = [%s]\n", field1.String()) // the Name of g = [Jake]
	field2 = vg.FieldByName("car")
	fmt.Printf("the car of g = [%d]\n", field2.Int()) // the car of g = ["BMW"]

	model = reflect.NewAt(field2.Type(), unsafe.Pointer(field2.UnsafeAddr())).Elem()
	model.SetInt(21)
	fmt.Printf("after set, g is [%#v]\n", g) // after set, g is [main.Foo{Name:"Jake", car:50}]

	// 接口底层动态类型为基本类型变量
	var n = 5
	i = &n
	vi = reflect.ValueOf(i).Elem()
	fmt.Printf("i = [%d], vi = [%d]\n", n, vi.Int()) // i = [5], vi = [5]
	vi.SetInt(10)
	fmt.Printf("after set, n is [%d]\n", n) // after set, n is [10]

	// channel
	var ch = make(chan int, 100)
	vch := reflect.ValueOf(ch)
	vch.Send(reflect.ValueOf(22))

	j := <-ch
	fmt.Printf("recv [%d] from channel\n", j) // recv [22] from channel

	ch <- 33

	vj, ok := vch.Recv()
	fmt.Printf("recv [%d] ok[%t]\n", vj.Int(), ok) // recv [33] ok[true]
	addOn()
}
func curentTime() (currentTimeData time.Time) {
	t1 := time.Now().Year()

	t2 := time.Now().Month()

	t3 := time.Now().Day()

	t4 := time.Now().Hour()

	t5 := time.Now().Minute()

	t6 := time.Now().Second()

	t7 := time.Now().Nanosecond()

	currentTimeData = time.Date(t1, t2, t3, t4, t5, t6, t7, time.Local)
	return
}

func addOn() {
	type Temp struct {
		Date time.Time
		Hint string
	}
	var today = Temp{
		Date: curentTime(),
		Hint: "Have a nice weekend.",
	}

	vaf := reflect.ValueOf(&today)
	deepE := vaf.Elem()
	hint := deepE.FieldByName("Hint")
	item := reflect.NewAt(hint.Type(), unsafe.Pointer(hint.UnsafeAddr())).Elem()
	item.SetString("Bad News. Monday’s coming up")

	fmt.Printf("Hi there [%#v]\n", today)

}
