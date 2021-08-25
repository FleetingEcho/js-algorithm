package main

import (
	"fmt"
	"math"
	"strconv"
)

/*  */
func FormatFloat(val float64, number int) (float64, error) {
	d := 1.0
	d = math.Pow10(number)
	base := "%." + strconv.Itoa(number) + "f"
	res := fmt.Sprintf(base, math.Trunc(val*d)/d)
	// 或者
	// res := strconv.FormatFloat(math.Trunc(val*d)/d, 'f', -1, 64)
	return strconv.ParseFloat(res, 64)
}

func main() {
	numF := 1.2253120023223232
	val, _ := FormatFloat(numF, 0)
	fmt.Println(val)
	// fmt.Println(reflect.TypeOf(val), val)
}
