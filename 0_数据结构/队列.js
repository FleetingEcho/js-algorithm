// 队列
export const Queue=class Queue{
  constructor(max=1000){
      this.max = max;  // 队列最大值
      this.data = new Array(max) //初始化空队列
      this.p = 0; //入队指针
      this.q = 0; //出队指针
      this.size = 0 //初始化队列大小
  }

  //入队
  enqueue(item){
      if(this.size >= this.max){
          throw new Error("队列溢出")
      }
      this.data[this.p++] = item; //存在当前指针，但入队指针指向下一个地址
      this.size++ //队列大小+1
      if(this.p >= this.max){
          //入队指针到头，重新回到队列初始位置，形成一个闭环
          this.p = 0
      }
  }
  isEmpty(){
      return this.size===0
  }
  //出队
  dequeue(){
      if(this.size === 0){
          throw new Error("队列下溢");
      }
      let target = this.data[this.q++]; //跳出后再+1
      console.log(target);//1
      this.size-- 
      if(this.q >= this.max){
          //出队指针到头，重新回到队列初始位置，形成一个闭环
          this.q = 0
      }
      return target
  }
}

//测试
let p = new Queue()
p.enqueue(1)
p.enqueue(2)
p.enqueue(3)
p.enqueue(4)
p.enqueue(5)
p.enqueue(6)

console.log(p.dequeue())
console.log(p.dequeue())
console.log(p)