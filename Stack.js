class Node{
    constructor(val){
        this.val = val;
        this.next  = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        newNode.next = this.first;
        this.first  = newNode;
        return ++this.size;
    }

    pop(){
        let poppedItem = this.first;
        if(!poppedItem)return;

        this.first = poppedItem.next;
        poppedItem.next = null;
        this.size--;
        return poppedItem;
    }
}

var  stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());