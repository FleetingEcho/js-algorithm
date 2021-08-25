package lib

import "fmt"

// 利用hash table实现学生管理系统
// 1. 不使用数据库, 尽量节省内存, 速度越快越好
// 2. 添加时, 保证按照雇员的id从低到高插入

const (
	HashNum = 7
)

type Student struct {
	Id   int
	Name string
	Next *Student
}

// StudentLink 员工链表
type StudentLink struct {
	Head *Student
}

type HashTable struct {
	Array [HashNum]StudentLink
}

func (peo *Student) Show() {
	fmt.Printf("链表%d 找到该员工%s\n", peo.Id%HashNum, peo.Name)
}

// Insert 在链表中插入员工
func (link *StudentLink) Insert(Student *Student) {
	cur := link.Head    // 头指针, 最终为Student后方指针
	pre := new(Student) // 辅助指针pre一直在cur的前方

	// 检查StudentLink是否为空
	if cur == nil {
		link.Head = Student
		return
	}

	// StudentLink不为空, 寻找Student的位置
	for {
		if cur != nil {
			// 保证员工的id在链表中按顺序排序
			if cur.Id > Student.Id {
				break
			}
			pre = cur
			cur = cur.Next
		} else {
			break
		}
	}
	pre.Next = Student
	Student.Next = cur
}

// Show 展示链表
func (link *StudentLink) Show(num int) {
	// 空链表
	if link.Head == nil {
		fmt.Printf("链表%d为空\n", num)
		return
	}

	cur := link.Head // 头指针
	for {
		if cur != nil {
			fmt.Printf("链表%d,雇员id=%d,姓名:%s\n", num, cur.Id, cur.Name)
			cur = cur.Next
		} else {
			break
		}
	}
}

// FindById 根据id查找员工
func (link *StudentLink) FindById(id int) *Student {
	cur := link.Head // 头指针
	for {
		// 如果找到对应节点
		if cur != nil && cur.Id == id {
			return cur
		} else if cur == nil { // 如果结尾还没找到
			break
		}
		cur = cur.Next
	}
	return nil
}

// Insert 员工信息插入哈希表
func (table *HashTable) Insert(Student *Student) {
	// 确定雇员应该添加到哪个链表
	linkNum := table.HashFunc(Student.Id)
	// 插入
	table.Array[linkNum].Insert(Student)
}

// Show 显示所有雇员
func (table *HashTable) Show() {
	for i := 0; i < HashNum; i++ {
		table.Array[i].Show(i)
	}
}

// HashFunc 哈希散列方法
func (table *HashTable) HashFunc(id int) int {
	return id % 7
}

// FindById 哈希表中id查找员工
func (table *HashTable) FindById(id int) *Student {
	linkNum := table.HashFunc(id)
	return table.Array[linkNum].FindById(id)
}
