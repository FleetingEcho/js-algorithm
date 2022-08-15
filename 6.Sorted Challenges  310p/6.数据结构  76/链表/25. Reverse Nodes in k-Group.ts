namespace Leetcode25{
    class ListNode{
        val:number 
        next:ListNode | null
        constructor(val:number=0,next:ListNode | null ){
            this.val =val
            this.next = next 
        }
    }
    type T =ListNode |null
    const reverse=(a:T,b:ListNode |null):T=>{
        let pre=null
        let cur=a
        let rest=a 
        while(cur && cur!==b){
            rest=cur.next 
            cur.next=pre
            pre=cur
            cur=rest
        }
        return pre 
    }

    function reverseKGroup(head:T, k:number):T{
        if(!head){ return head}
        let a=head
        let b:T=head;
        for(let _ of new Array(k)){
            if(!b){ return head }
            b=b.next
        }
        let new_head=reverse(a,b)
        a.next=reverseKGroup(b,k)
        return new_head
    }
}