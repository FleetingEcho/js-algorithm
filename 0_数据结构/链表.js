// class LinkList{
class LinkList{
    constructor(){
      this.data='start'
      this.next=null
    };

    //插入(两种)
    insert(node, newNode, data){
      while (node) {
        //插入到指定节点后面
        if (data && node.data === data) {
          // 当前节点存在子节点===>将子节点挂载到新节点的子节点上
          if (node.next) {
            newNode.next = node.next
          }
          // 新节点挂载到当前节点下
          node.next = newNode
          return
        }
        //直接插入到最后面
        if (!data && node.next === null) {
          node.next = newNode
          return
        }
        node = node.next
      }
    }
    _find(node, data){
      let parent = node
      node = node.next// node.next才是除start外的数据部分
      while (node) {
        if (Object.keys(node.data)[0] === data) {
          // console.log(node.data);
          return Object.values(node.data)[0]
        }
        parent = node
        node = node.next
      }
    }
    delete(node, data){
      // 当前节点
      let parent = node
      node = node.next// node.next才是除start外的数据部分
      while (node) {
        if (node.data === data) {
          if (parent) {
            parent.next = node.next
            return
          } else {
            return
          }
        }
        parent = node
        node = node.next
      }
    }

    deleteNode(list, val) {
      let parent = list
      list=list.next
      if(parent.val===val) return list
      while(list){
      if(list.val===val){
      if(parent){
        parent.next=list.next
        return
      }
      else{return}
      }
        parent=list
        list=list.next;
      }
      return parent
    };
}

//调用
const List=new LinkList()
List.insert(List, { data: 2, next: null })
List.insert(List, { data: 3, next: null })
List.insert(List, { data: 4, next: null })
List.insert(List, { data: 5, next: null })
List.insert(List, { data: 10, next: null },2)

console.log(List.deleteNode(List, 3));
console.log(List);

exports.LinkList=LinkList
