class  Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev  = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail=node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop(){
        if(!this.tail){
            return;
        }else{
            let poppedItem = this.tail;
            this.tail = this.tail.prev;
            poppedItem.prev=null;
            if(this.length ===1){
                this.head=null;
            }else{
                this.tail.next=null;
            }
            this.length--;
            return poppedItem;
        }
    }

    /**
     * removes first element from list
     */
    shift(){
        if(!this.head)return;
        let oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        if(!this.head){
            this.tail = null;
        }else{
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail  = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    get(index){
        // let count = 0;

        if(index>=this.length || index<0)return;
        if(index>this.length/2){
        let indexFromLast = this.length-index-1;    
        let count = 0;
        let selectedItem = this.tail;
        while(count<indexFromLast){
            selectedItem=selectedItem.prev;
            count++;
        }
        return selectedItem;
        }else{
        let count = 0;    
        let selectedItem = this.head;
        while(count<index){
            selectedItem = selectedItem.next;
            count++;
        }
        return selectedItem;
        }
    }

    set(index,val){
        let node = this.get(index);
        if(!node)return false;
        node.val = val;
        return true;
    }

    insert(index,val){
        if(index<0 || index>this.length) return false;
        if(index === 0){
            this.unshift(val);
            return true;
        }
        if(index === this.length){
            this.push(val);
            return true;
        }
        
        let node = new Node(val);
        let prevElem = this.get(index-1);
        node.prev = prevElem;
        node.next = prevElem.next;
        prevElem.next = node;
        node.next.prev = node;
        this.length++;
        return true;

    }

    remove(index){
        if(index<0 || index>=this.length)return;

        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }

        let node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }
}

// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList);


// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.pop());
// console.log(linkList);
// console.log(linkList.pop());
// console.log(linkList);


// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.shift());
// console.log(linkList);
// console.log(linkList.shift());
// console.log(linkList);
// console.log(linkList.shift());
// console.log(linkList);
// console.log(linkList.shift());
// console.log(linkList);


// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.unshift("Name"));
// console.log(linkList);
// console.log(linkList.unshift("Rahul"));
// console.log(linkList);
// console.log(linkList.unshift("Sharma"));
// console.log(linkList);
// console.log(linkList.unshift("."));
// console.log(linkList);


// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.get(1));
// console.log(linkList);
// console.log(linkList.get(2));
// console.log(linkList.get(10));
// console.log(linkList.get(0));
// console.log(linkList.get(-9));


// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.set(1,"Name"));
// console.log(linkList);
// console.log(linkList.set(2,"Rahul"));
// console.log(linkList);
// console.log(linkList.set(-1,"Rahul"));
// console.log(linkList);



// let linkList = new DoublyLinkedList();
// linkList.push(1);
// linkList.push(2);
// linkList.push(3);
// console.log(linkList.insert(1,"Name"));
// console.log(linkList);
// console.log(linkList.insert(2,"Rahul"));
// console.log(linkList);
// console.log(linkList.insert(5,"Rahul"));
// console.log(linkList.insert(-1,"Rahul"));
// console.log(linkList);


let linkList = new DoublyLinkedList();
linkList.push(1);
linkList.push(2);
linkList.push(3);
console.log(linkList.remove(1));
console.log(linkList);
console.log(linkList.remove(2));
console.log(linkList);
console.log(linkList.remove(0));
console.log(linkList);