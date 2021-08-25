package main

import "fmt"

// 在部分场景下，结构体只包含方法，不包含任何的字段。
type Set map[string]struct{}

func (s *Set) Has(key string) bool {
	_, ok := (*s)[key]
	return ok
}

func (s *Set) Add(key string) {
	(*s)[key] = struct{}{}
}

func (s *Set) Delete(key string) {
	delete((*s), key)
}

func main() {
	s := make(Set)
	s.Add("Tom")
	s.Add("Sam")
	fmt.Println(s.Has("Tom"))
	fmt.Println(s.Has("Jack"))
}
