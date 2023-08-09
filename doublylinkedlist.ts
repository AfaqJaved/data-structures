import { NodeDouble } from "./node";

export class DoubleLinkedList {
    public head: NodeDouble | null = null;
    public tail: NodeDouble | null = null;
    public size: number = -1;


    insertAtStart(data: number) {
        if (this.head == null) {
            this.head = new NodeDouble(data);
            this.tail = this.head;
        }
        else {
            let n = new NodeDouble(data);
            this.head.prev = n;
            n.next = this.head;
            this.head = n;
        }
        this.size++;
    }

    deleteAtStart() {
        if (this.head == null) return;
        if (this.head.next == null) { this.head = null; return; }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    deleteAtEnd() {
        if (this.head == null) return;
        if (this.head.next == null) { this.head = null; return; }
        if(this.tail != null) this.tail = this.tail.prev;
        if(this.tail != null) this.tail.next = null;

        this.size--;


    }


    // This function is equal to simple insert logic remains the same
    insertAtEnd(data: number) {
        if (this.head == null) {
            this.head = new NodeDouble(data);
            this.tail = this.head;
        }
        else {
            let n = new NodeDouble(data);
            n.next = null;
            n.prev = this.tail;
            if(this.tail != null) this.tail.next = n;
            this.tail = n;
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
            if (counter == index) {
                let n = new NodeDouble(data);
                let prev = temp.prev;
                if(prev != null) prev.next = n;
                n.next = temp;
                n.prev = prev;
                temp.prev = n;

            }
            counter++;
            temp = temp.next;
        }
        this.size++;
    }

    printListUsingRecursion(current: NodeDouble | null = this.head) {
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
    const list = new DoubleLinkedList();
    // list.insertAtStart(10);
    // list.insertAtStart(20);
    // list.insertAtStart(30);
    // list.insertAtStart(40);
    // list.insertAtStart(50);

    list.insertAtEnd(10); // --> HEAD
    list.insertAtEnd(20); //
    list.insertAtEnd(30); //
    list.insertAtEnd(40); //
    list.insertAtEnd(50); // ---> Tail


    list.insertAtIndex(100,2);
    // list.deleteAtEnd();
    // list.deleteAtEnd();
    // list.deleteAtEnd();
    // list.deleteAtEnd();


    list.printListUsingRecursion();
}


main()