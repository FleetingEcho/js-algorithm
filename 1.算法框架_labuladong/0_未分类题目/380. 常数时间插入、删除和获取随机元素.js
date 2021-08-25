/* 
设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

insert(val)：当元素 val 不存在时，向集合中插入该项。
remove(val)：元素 val 存在时，从集合中移除该项。
getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。


/ 初始化一个空的集合。
RandomizedSet randomSet = new RandomizedSet();

 向集合中插入 1 。返回 true 表示 1 被成功地插入。
randomSet.insert(1);

 返回 false ，表示集合中不存在 2 。
randomSet.remove(2);

 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
randomSet.insert(2);

 getRandom 应随机返回 1 或 2 。
randomSet.getRandom();

 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
randomSet.remove(1);

 2 已在集合中，所以返回 false 。
randomSet.insert(2);

 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
randomSet.getRandom();
*/
// ! 要求时间复杂度 O(1) 

/* 
!　对于插入，删除，查找这几个操作，哪种数据结构的时间复杂度是 O(1)？
HashSet 肯定算一个对吧。哈希集合的底层原理就是一个大数组，我们把元素通过哈希函数映射到一个索引上；
如果用拉链法解决哈希冲突，那么这个索引可能连着一个链表或者红黑树。

! 但 不能在O(1)获取一个随机的数，是无法在 O(1) 的时间内访问某一个元素的。
*/

var RandomizedSet = function() {
  this.set = new Set()
}

RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) {
      return false
  }
  this.set.add(val)
  return true
}

RandomizedSet.prototype.remove = function(val) {
  if (!this.set.has(val)) {
      return false
  }
  this.set.delete(val)
  return true
}

RandomizedSet.prototype.getRandom = function() {
  const random = parseInt(Math.random()*(this.set.size))
  return [...this.set][random]
}