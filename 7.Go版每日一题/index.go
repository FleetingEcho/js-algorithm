package main

import "fmt"

func main() {

	arr := []int{1, 2, 3, 4}
	for i := 0; i < len(arr); i++ {
		fmt.Println(i, arr[i])
		if arr[i] == 3 {
			arr = append(arr[:i], arr[i+1:]...)
			i--
		}
	}
	fmt.Println(arr)
}
