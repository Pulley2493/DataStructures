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
        return this;
    }

    pop(){
        if(this.length===0)return;
        let removed;
        if(this.length === 1){
            removed = this.head;
            this.head =  null;
            this.tail = null;
            this.length = 0;
        }else{
            let curr = this.head;
            while(curr.next !== this.tail){
                curr = curr.next;
            }
            removed = curr.next;
            this.tail = curr;
            this.tail.next = null;
            this.length--;
        }
        return removed;
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
        return currentNode;
    }

    unshift(val){
        var newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        if(!this.tail){
            this.tail = this.head;
        }
        return newHead;
    }

    get(ind){
        if(ind>=this.length || ind<0)return;

        let i=0,matchNode=this.head;
        while(i!=ind){
            matchNode=matchNode.next;
            i++;
        }
        return matchNode;
    }

    set(ind,val){
        var node = this.get(ind);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(ind,val){
        if(ind>this.length || ind<0){
            return false;
        }
        if(ind===0){
            return !!this.unshift(val);
        }
        if(ind === this.length){
            return !!this.push(val);
        }
        var node = new Node(val);
            var prevNode = this.get(ind-1);
            node.next =  prevNode.next;
            prevNode.next=node;
        this.length++;
        return true;
    }

    remove(ind){
        if(ind<0 || ind>=this.length)return undefined;

        if(ind===this.length-1){
            return this.pop();
        }

        if(ind ===0){
            return this.shift();
        }

        let prevNode = this.get(ind-1);
        let removed = prevNode.next; 
        prevNode.next = removed.next;
        removed.next = null;
        return removed; 
    }

    reverse(){
        let curr = this.head,next;
        if(curr){
            next=curr.next;
            this.head.next = null;
        }    
        while(curr && next){
            var newNext = next.next;
            next.next= curr;
            curr = next;
            next = newNext;
        }

        this.tail = this.head;
        this.head=curr;
        return this;
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


// linkList.push("1");
// linkList.push("2");
// linkList.push("3");
// console.log(linkList);
// linkList.shift();
// linkList.shift();
// linkList.shift();
// console.log(linkList);



// console.log(linkList);
// linkList.unshift(1);
// linkList.unshift(2);
// linkList.unshift(3);
// console.log(linkList);
// linkList.pop();
// linkList.pop();
// linkList.pop();
// linkList.unshift(3);
// console.log(linkList);


// linkList.push("1");
// linkList.push("2");
// linkList.push("3");
// console.log(linkList);
// console.log(linkList.get(1));
// console.log(linkList.get(3));
// console.log(linkList.get(0));

// linkList.push("1");
// linkList.push("2");
// linkList.push("3");
// console.log(linkList);
// console.log(linkList.set(1,"Hello"));
// console.log(linkList.set(3,"-1"));
// console.log(linkList.set(0,"3"));

// console.log(linkList);


// linkList.push("1");
// console.log(linkList);
// console.log(linkList.insert(1,"Hello"));
// console.log(linkList);
// console.log(linkList.insert(4,"-1"));
// console.log(linkList);
// console.log(linkList.insert(0,"3"));
// console.log(linkList);


// linkList.push("1");
// linkList.push("2");
// linkList.push("3");
// console.log(linkList);
// linkList.remove(2);
// console.log(linkList);
// console.log(linkList.remove(2));
// console.log(linkList.remove(0));
// console.log(linkList);


linkList.push("1");
linkList.push("2");
linkList.push("3");
linkList.reverse();
console.log(linkList);
linkList.reverse();
console.log(linkList);
console.log(linkList.pop());
console.log(linkList.pop());
console.log(linkList.pop());
console.log(linkList);
console.log(linkList.reverse());