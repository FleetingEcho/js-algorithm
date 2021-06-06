export default class Dictionary {
  constructor() {
    this.dictionary = new Map()
  }
  set(key, value) {
    if (key != null && value != null) {
      this.dictionary.set(key, value)
      return true
    }
    return false
  }
  get(key) {
    const res = this.dictionary.get(key)
    return res === null ? undefined : res
  }
  remove(key) {
    if (this.get(key)) {
      this.dictionary.delete(key)
      return true
    }
    return false
  }
  hasKey(key) {
    return this.dictionary.has(key)
  }
  clear() {
    this.dictionary.clear()
  }
  size() {
    return this.dictionary.size()
  }
  isEmpty() {
    return this.dictionary.size === 0
  }
  keys() {
    return [...this.dictionary.keys()]
  }
  values() {
    return [...this.dictionary.values()]
  }
  keyValues() {
    return [...this.dictionary]
  }
  forEach() {
    /*
        let res={};
        this.dictionary.forEach((value,key,self)=>{
            res[key]=value
        })
        return res
    */
    let obj = Object.create(null)
    for (let [key, value] of this.dictionary) {
      obj[key] = value
    }
    return obj
  }
}
/* 

let dictionary = new Dictionary()
dictionary.set('Honda', 'Civic')
dictionary.set('Honda1', 'CRV')
dictionary.set('Honda2', 'Fit')
dictionary.set('Honda3', 'Accord')
dictionary.set('Honda4', 'Type-R')
dictionary.remove('Honda4')

console.log(dictionary.keyValues())
console.log(dictionary.values())
console.log(dictionary.keyValues());



*/