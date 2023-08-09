import { Node } from "./node";

export class LinkedList {
    public head: Node | null = null;
    public tail: Node | null = null;
    public size: number = -1;


    insertAtStart(data: number) {
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            let n = new Node(data);
            n.next = this.head;
            this.head = n;
        }
        this.size++;
    }

    deleteAtStart() {
        if (this.head == null) return;
        if (this.head.next == null) { this.head = null; return; }
        this.head = this.head.next;
        this.size--;
    }

    deleteAtEnd() {
        if (this.head == null) return;
        if (this.head.next == null) { this.head = null; return; }
        let temp: Node  = this.head;

        while(temp.next != this.tail) {

            if(temp.next!=null) temp =  temp.next;
        }

        this.tail = temp;
        this.tail.next = null;
        this.size--;
    }


    // This function is equal to simple insert logic remains the same
    insertAtEnd(data: number) {
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            let temp: Node | null = this.head;
            while (temp != null) {
                if (temp === this.tail) {
                    let n = new Node(data);
                    temp.next = n;
                    this.tail = temp;
                }
                temp = temp.next;
            }
        }
        this.size++;
    }

    insertAtIndex(data: number, index: number) {
        if (index > this.size) {
            console.log("Index out of boundary");
            return;
        }
        let counter = 0;
        let temp = this.head;

        while (temp != null) {
            if (counter == (index - 1)) {
                let hold = temp.next;
                let node = new Node(data);
                temp.next = node;
                node.next = hold;
            }
            counter++;
            temp = temp.next;
        }
        this.size++;
    }

    printListUsingRecursion(current: Node | null = this.head) {
        if (current == null) {
            return;
        }
        console.log(current.data);
        this.printListUsingRecursion(current.next);
    }

    getSize() {
        return this.size;
    }
}





const main = () => {
    const list = new LinkedList();
    list.insertAtStart(10); // ----> tail
    list.insertAtStart(20); //3
    list.insertAtStart(30); //2
    list.insertAtStart(40); //1
    list.insertAtStart(50);  // ---> Head 0


    // list.insertAtEnd(100);
    // list.insertAtIndex(55, 2);
    // list.deleteAtStart();
    // list.deleteAtStart();
    // list.deleteAtStart();
    // list.deleteAtStart();
    // list.deleteAtStart();
    console.log(list.getSize());
    list.deleteAtEnd();
    console.log(list.getSize());
    list.deleteAtEnd();
    console.log(list.getSize());
    list.deleteAtEnd();
    console.log(list.getSize());
    list.deleteAtEnd();
    console.log(list.getSize());
    list.deleteAtEnd();
    console.log(list.getSize());


    list.printListUsingRecursion();
}


main()