//复杂度 O(1) < O(logn) < (n) < O(n*logn) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)
// 每次淘汰那些最久没被使用的数据


class LRUCache{
  constructor(capacity){
      this.capacity = capacity;
      this.cache = new Map();
  }

  get(key){
      if(!this.cache.has(key)) return -1;
    console.log(this.cache);
      const value = this.cache.get(key);
      // 删除后重存，才能保证始终index在最后
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
  }

  put(key, value){
      if(this.cache.has(key)){
          this.cache.delete(key);
      }else{
          if(this.cache.size === this.capacity){
              // 获取到Map中第一个数据的key值，即最近最少访问的key，删之
              const delKey = this.cache.keys().next().value;//next().value是指从index=0开始
              this.cache.delete(delKey);
          }
      }
      this.cache.set(key, value);
  }
}

// Map { 4 => 4, 3 => 3, 2 => 2 }

let LRU=new LRUCache(3);
console.log(LRU.put(2,2));
console.log(LRU.put(1,1));
console.log(LRU.get(2));
console.log(LRU.get(1));
console.log(LRU.get(2));
console.log(LRU.put(3,3));
console.log(LRU.put(4,4));
console.log(LRU.get(3));
console.log(LRU.get(2));
console.log(LRU.get(1));
console.log(LRU.get(4));

