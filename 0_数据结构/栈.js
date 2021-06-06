module.exports= class Stack{
        constructor(){
        this.items = []
        };

        push=(element)=>{this.items.push(element)}

        pop = ()=>{return this.items.pop();}

        peek = ()=>{return this.items[this.items.length - 1]}

        isEmpty = ()=>{return this.items.length === 0}

        size = ()=>{return this.items.length}

        clear = ()=>{this.items = []}

        print = ()=>{console.log(this.items.toString())}
    }

//使用
/* let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.peek())  // 5
console.log(stack.isEmpty())  //false
console.log("size:"+stack.size())   // 5
stack.pop() 
stack.print(); */