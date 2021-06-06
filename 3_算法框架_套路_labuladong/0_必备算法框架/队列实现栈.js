
var MyStack = function() {
  this.queue = [];
};

MyStack.prototype.push = function(data) {
  this.queue.push(data);
};

MyStack.prototype.pop = function() {
  let res = [];
  // 删除了栈顶元素
  for(let i=0;i<this.queue.length-1;i++){
      res.push(this.queue[i]);
  }
  let r = this.queue[this.queue.length-1];
  this.queue = res;
  return r;
};


MyStack.prototype.top = function() {
  if(this.queue.length === 0) {
      return null;
  }
  return this.queue[this.queue.length-1];
};

MyStack.prototype.empty = function() {
  return this.queue.length === 0;
};