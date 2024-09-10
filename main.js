class Node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }

   
}

 class Linkedlist{
    constructor(head=null,size){
        this.head=null;
        this.size=0;
    }


    //insert new node at the beginning 
    prepend(data){
        this.head=new Node(data,this.head)
        this.size++
    }

    //get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current){
            if (count == index){
                console.log(current.data)
            }
            count++;
            current=current.next
        }
        return null;
    }

    //insertlast
    append(data){
        let node = new Node(data)
        let current;

        //if empty
        if(!this.head){
            this.head=node;
        } else {
            current=this.head;

            while(current.next){
                current=current.next
            }
            current.next=node;
        }
        this.size++;
    }

    //remove at index
    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index===0){
            this.head = current.next;
        } else {
            while(count < index){
             count++;
             previous = current;
             current=current.next;
            }
            previous.next = current.next
        }
        this.size--;
    }

    //insert at index
    insertAt(data,index){
        //if index is out of range
        if(index > 0 && index > this.size ){
            return;
        }

        //at first
        if (index==0){
            this.head= new Node(data,this.head)
            return;
        }

        const node = new Node(data);
        let current,previous;

        //set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current //node before the index
            count++;
            current = current.next;//node after the index
        }
        node.next=current;
        previous.next=node;

        this.size++;

    }

    //printlist
    printListdata(){
       let current=this.head;
       while(current){
        console.log(current.data)
        current=current.next
       }
    }


    gethead(){
        console.log(this.head.data);

    }

    pop() {
        let current = this.head;
        let previous = null;

        if (!current) {
            console.log("List is empty");
            return;
        }

        // If there's only one node, remove the head
        if (!current.next) {
            this.head = null;
            this.size--;
            return;
        }

        // Traverse to the second-to-last node
        while (current.next) {
            previous = current;
            current = current.next;
        }

        // Remove the last node
        previous.next = null;
        this.size--;
    }

    getLastNode() {
        let current = this.head;
        if (!current) {
            console.log("List is empty");
            return;
        }

        while (current.next) {
            current = current.next;
        }

        console.log(current.data);
    }

     // Check if the list contains a value
     contains(value) {
        let current = this.head;

        while (current) {
            if (current.data === value) {
                console.log('true');
            }
            current = current.next;
        }

        console.log('false');
    }

    // Find the index of a node containing the given value
    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === value) {
                console.log(index);
            }
            current = current.next;
            index++;
        }

        return null;
    }

    // Convert the LinkedList to a string
    toString() {
        let current = this.head;
        let str = "";

        while (current) {
            str += `( ${current.data} ) -> `;
            current = current.next;
        }

        console.log(str + "null");
    }
    //clear list
    clearList(){
        this.head=null;
        this.size=0;
    }

    //numberof nodes
    nodenumber(){
        console.log(this.size)
    }
}



const list = new Linkedlist();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");


console.log(list.toString());