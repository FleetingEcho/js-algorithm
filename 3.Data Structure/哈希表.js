// 为了快速寻找一个值，get是需要迭代整个数据结构来找到它------------
// 如果使用散列
// 函数，就知道值的具体位置，因此能够快速检索到该值。散列函数的作用是给定一个键值，然后
// 返回值在表中的地址。
// *散列函数 散列函数——lose lose散列函数，方法是简单地将每个键值中的每个字母的 ASCII 值相加，
// * 但需要注意，解决冲突------------方法有分离链接(相同的ASCII码使用链表连接起来)、线性探查和双散列法
// !主要方法： get, put, remove
// 保证所有的键都是字符串


class HashTable {
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
    // console.log(hash);
    return hash % 37;
  }
  hashCode(key) {
    return this.loseLoseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      let temp={}
      temp[key]=value
      this.hashTable.set(position,temp)
      return true
    }
    return false
  }

  get(key) {
    const res = this.hashTable.get(this.hashCode(key))
    return res === null ? undefined : res[key]
  }
  remove(key) {
    if (this.get(key)) {
      this.hashTable.delete(key)
      return true
    }
    return false
  }
  hasKey(key) {
    return this.hashTable.has(key)
  }
  clear() {
    this.hashTable.clear()
  }
  size() {
    return this.hashTable.size()
  }
  isEmpty() {
    return this.hashTable.size === 0
  }
  keys() {
    return [...this.hashTable.keys()]
  }
  values() {
    return [...this.hashTable.values()]
  }
  keyValues() {
    return [...this.hashTable]
  }
  forEach() {
    /*
        let res={};
        this.hashTable.forEach((value,key,self)=>{
            res[key]=value
        })
        return res
    */
    let obj = Object.create(null)
    for (let [key, value] of this.hashTable) {
      obj[key] = value
    }
    return obj
  }
}

let hashTable = new HashTable()
hashTable.put('Honda', 'Civic')
hashTable.put('Honda1', 'CRV')
hashTable.put('Honda2', 'Fit')
hashTable.put('Honda3', 'Accord')
hashTable.put('Honda4', 'Type-R')
hashTable.remove('Honda4')
// console.log(hashTable.keyValues());
console.log(hashTable);

// console.log(hashTable.keyValues())
console.log(hashTable.get('Honda3'))
