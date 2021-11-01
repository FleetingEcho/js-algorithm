// 保证所有的键都是字符串
const defaultToString=(item)=>{
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor() {
    this.dictionary =defaultToString;
    this.table = {};
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.dictionary(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.dictionary(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  hasKey(key) {
    return this.table[this.dictionary(key)] != null;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.dictionary(key)];
      return true;
    }
    return false;
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
  keyValues() {
    return Object.values(this.table);
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.table).length;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

const dictionary=new Dictionary();
dictionary.set('Honda','Civic')
dictionary.set('Honda1','CRV')
dictionary.set('Honda2','Fit')
dictionary.set('Honda3','Accord')
dictionary.set('Honda4','Type-R')

console.log(dictionary.keyValues());
console.log(dictionary.get('Honda1'));
