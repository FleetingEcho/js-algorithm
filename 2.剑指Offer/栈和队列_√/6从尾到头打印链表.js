// 6从尾到头打印链表
/* 
输入：head = [1,3,2]
输出：[2,3,1]
*/
// 注意这是链表结构
const head = [1, 3, 2, 100]
// const reversePrint =(head)=>Array.from(head.reverse())

/* const reversePrint=(head)=>{
  let arr=[];
  for(let i=(head.length-1); i>=0;i--){
    arr.push(head[i])
    continue
  }
  return arr
} */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = (head) => {
	let arr = []
	let node = head
	while (node !== null) {
		arr.unshift(node.val)
		node = node.next
	}
	return arr
}

console.log(reversePrint(head))
