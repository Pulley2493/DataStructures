
console.log("Hello Wworlkd");

class Node{
constructor(val){
    this.val = val;
    this.next = null;
}

}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
        this.tail.next = node;
        this.tail = node;
        }
        this.length++;
    }

    pop(){
        if(this.length===0)return;
        if(this.length === 1){
            this.head =  null;
            this.tail = null;
            this.length = 0;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            this.tail = curr;
            this.tail.next = null;
            this.length--;
        }
    }

    shift(){
        if(this.length ===0){
            return undefined;
        }
        var currentNode = this.head;
        this.head = this.head.next;
        if(this.tail === currentNode){
            this.tail = null;
        }
        this.length--;
        currentNode.next = null;
    }

}

var linkList = new LinkedList();

// linkList.push("1");
// linkList.push("2");
// linkList.push("3");
// console.log(linkList);

// linkList.pop();
// linkList.pop();
// linkList.pop();
// console.log(linkList);


linkList.push("1");
linkList.push("2");
linkList.push("3");
console.log(linkList);
linkList.shift();
linkList.shift();
linkList.shift();
console.log(linkList);


