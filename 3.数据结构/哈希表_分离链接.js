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
  _mapKey(node,data){
    let mapKey=[];
    let parent = node
    node = node.next// node.next才是除start外的数据部分
    while (node) {
      if(node.data===undefined) return
      if (Object.keys(node.data)[0]!==undefined) {
        mapKey.push(Object.keys(node.data)[0])
      }
      parent = node
      node = node.next
    }
    return mapKey
  }
  _mapVal(node,data){
    let mapVal=[];
    let parent = node
    node = node.next// node.next才是除start外的数据部分
    while (node) {
      if(node.data===undefined) return
      if (Object.values(node.data)[0]!==undefined) {
        mapVal.push(Object.values(node.data)[0])
      }
      parent = node
      node = node.next
    }
    return mapVal
  }
  _map(node,data){
    let map={};
    let parent = node
    node = node.next// node.next才是除start外的数据部分
    while (node) {
      if(node.data===undefined) return
      if (Object.keys(node.data)[0]!==undefined) {
        let temp=Object.keys(node.data)[0];
        let tempVal=Object.values(node.data)[0]
        map[temp]=tempVal;
      }
      parent = node
      node = node.next
    }
    return map
  }
  _find(node, data){
    let parent = node
    node = node.next// node.next才是除start外的数据部分
    while (node) {
      if (Object.keys(node.data)[0] === data) {
        return Object.values(node.data)[0]
      }
      parent = node
      node = node.next
    }
    return false
  }
  delete(node, data){
    // 当前节点
    let parent = node
    node = node.next// node.next才是除start外的数据部分
    while (node) {
      if (Object.keys(node.data)[0] === data) {
        if (parent) {
          parent.next = node.next
          // 删除了
          return true
        } else {
          return 
        }
      }
      parent = node
      node = node.next
    }
  }
}

//  分离链表
class HashTableSeparateChaining {
constructor() {
  this.hashTable = new Map()
}
// 散列函数-----
loseLoseHashCode(key) {
  if (typeof key === 'number') {
    return key;
  }
  const Char=key;
  let hash = 0;
  for (let i = 0; i < Char.length; i++) {
    hash += Char.charCodeAt(i);
  }
  return hash % 37;
}
hashCode(key) {
  return this.loseLoseHashCode(key);
}
hasKey(key) {
  let List1=this._getList(this.hashCode(key))
  if(List1===undefined)return false
    if(this.hashTable.has(this.hashCode(key))!==undefined){
      return true
    }
    return false
}

put(key, value) {
  if (key != null && value != null) {
    const position = this.hashCode(key);
    // 如果是新值
    if(this.hasKey(key)===false){
      let List=new LinkList()      
      let data={};
      let temp={data,next:null}
      temp.data[key]=value;
      List.insert(List,temp)
      this.hashTable.set(position,List)
      List=null
      return true
    }else{
      let List1=this._getList(this.hashCode(key))
      let data={};
      let temp={data,next:null}
      temp.data[key]=value;
      List1.insert(List1,temp)
      this.hashTable.set(position,List1)
      return true
    }
  }
  return false
}

_getList(key) {
  const res = this.hashTable.get(this.hashCode(key))
  return res === null ? undefined : res
}
get(key) {
  const res=this._getList(key)
  const result=res._find(res,key)
  return res === null ? undefined : result 
}
remove(key) {
  if(this.hasKey(key)){
    const res=this._getList(key)
    const result=res.delete(res,key)
    return true
  }else{
    return false
  }
  
}
clear() {
  this.hashTable.clear()
  return true
}
size() {
  return this.hashTable.size
  //或者// return [...this.hashTable].length
}
isEmpty() {
  return this.hashTable.size === 0
}
keys() {
  let res=[];
      this.hashTable.forEach((value,key,self)=>{
      let temp=value._mapKey(value)
      res.push(...temp)
      })
      return res
}
values() {
  let res=[];
      this.hashTable.forEach((value,key,self)=>{
      let temp=value._mapVal(value)
      res.push(...temp)
      })
      return res
}
keyValues() {
  return [...this.hashTable]
}
forEach() {
      let res={}
      this.hashTable.forEach((value,key,self)=>{
      let temp=value._map(value)
      res[key]=temp
      })
      return res 
}
}
// 测试修改后的链表
// const List=new LinkList()
// List.insert(List, { data: 3, next: null })
// List.insert(List, { data: {'Honda2':'2333333'}, next: null })
// List.insert(List, { data: 4, next: null })
// List.insert(List, { data: 5, next: null })
// List.insert(List, { data: 10, next: null },2)

// List.delete(List, 3)
// console.log(List);
// console.log(List._find(List,'Honda2333'));
// console.log(List.delete(List,'Honda2'));
// console.log(List);


let hashTable = new HashTableSeparateChaining()
hashTable.put('Honda', 'Civic')
hashTable.put('Jack', 'CRV123');
hashTable.put('Athelstan', 'CRV');
hashTable.put('Honda2', 'Fit')
hashTable.put('Honda3', 'Accord')
hashTable.put('Honda4', 'Type-R')

console.log(hashTable.size());
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.forEach());
console.log(hashTable.keyValues());
console.log(hashTable.hasKey('Athelstan'));


console.log(hashTable.remove('Athelstan'));
console.log(hashTable.size());//为 hashTables的size
console.log(hashTable.clear());
console.log(hashTable);



