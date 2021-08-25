/* 
> 迭代实现思路看起来虽然简单，但是细节问题很多的，
> 反而不容易写对。相反，递归实现就很简洁优美，
> 下面就由浅入深，先从反转整个单链表说起。
*/


// > 1. 递归反转整个链表
// 1-> 2-> 3-> 4-> 5->6
var reverseList = function(head) {
// base情况，输入[] ,返回[]
  if(head===null) return head
  const reverse=(head)=>{
    if (head.next == null) return head;
    let last = reverse(head.next);//reverse 函数会返回反转之后的头结点s
    head.next.next = head;
    //因为head.next已经反转了，head.next是翻转后的最后一个元素，那么，(head.next).next就应该挂head元素，刚好最后一个
    head.next = null;//末尾指向null
    return last;
  }

  return reverse(head);
};

/* 
head                           last
1->        2<-3 <- 4<- 5 <- 6<-7  
           |
          null
*/

/* 
对于递归算法，最重要的就是明确递归函数的定义。
具体来说，我们的 reverse 函数定义是这样的：
输入一个节点 head，将「以 head 为起点」的链表反转，并返回反转之后的头结点。

*/


// > 反转链表前 N 个节点

// 只需要稍做修改
let successor = null; // 后驱节点

// 反转以 head 为起点的 n 个节点，返回新的头结点
function reverseN( head,n) {
    if (n == 1) { //同时也是最后一个元素 
        // 记录第 n + 1 个节点
        successor = head.next; //最后一个元素时，next就不用变了
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    let last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
}


/*
head      last    successor
  1<- 2 <- 3             4->5->6->7->8->null
  |______________________|
*/

//> 反转链表的一部分

// 反转链表的区间 [m,n]
function reverseBetween(head, m, n) {
  // base case
  if (m == 1) {
      return reverseN(head, n);// 相当于从头开始反转链表
  }
  // 前进到反转的起点触发 base case
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;
}
//        |----------|
//  1->2->3   4<- 5<-6  ->7->8 ->9
//            |__________|