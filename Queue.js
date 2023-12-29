class Node{
    constructor(val){
        this.val= val;
        this.next = null;
    }
}


// O(1) -time and space
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
         var newNode = new Node(val);
         if(!this.last){
            this.first= newNode;
            this.last = newNode;
         }else{
         this.last.next = newNode;
         this.last = newNode;
         }
         return ++this.size;
    }

    dequeue(){
        if(this.size<=0)return;
        let poppedItem = this.first;
        if(this.size===1){
            this.last = null;
        }
            this.first = this.first.next;
        
        this.size--;
        poppedItem.next = null;
        return poppedItem;
    }
}

var queue = new Queue();
console.log(queue.enqueue("Red"))
console.log(queue.enqueue("Orange"))
console.log(queue.enqueue("Purple"))
console.log(queue.enqueue("Yellow"))
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())