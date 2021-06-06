var MyQueue = function() {
  this.input = []
  this.output = []
};


MyQueue.prototype.push = function(data) {
  this.input.push(data)
};


MyQueue.prototype.pop = function() {
  if(!this.output.length) {
    while(this.input.length!==0) {
        this.output.push(this.input.pop())
    }
}
  return this.output.pop()
};

MyQueue.prototype.peek = function() {
  if(!this.output.length) {
    while(this.input.length!==0) {
        this.output.push(this.input.pop())
    }
}
      return this.output[this.output.length - 1]
};


MyQueue.prototype.empty = function() {
 if(this.input.length || this.output.length) return false
 else  return  true
};


const queue=new MyQueue();
queue.push(1)
queue.push(3)
queue.push(5)
queue.push(7)
queue.push(9)
console.log(queue);
console.log(queue.peek());
console.log(queue.pop());
