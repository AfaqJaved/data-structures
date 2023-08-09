import {Node} from "./node";

export class Queue {
    public top: number = -1;
    public head: Node | null = null;
    public tail : Node | null = null;


    push(data: number): void {
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            let n = new Node(data);
            if(this.tail != null ) this.tail.next = n;
            this.tail = n;
        }
        this.top++;
    }


    pop() {
        let temp = this.head;
        if (this.head?.next != null)
            this.head = this.head.next;
        else this.head = null;
        this.top--;
        return temp?.data;
    }


    printStack(node : Node | null = this.head) {
        if(node == null) return;
        console.log("Final Data" + node.data);
        this.printStack(node.next);
    }

    getTop() {
        return this.top;
    }

    isEmpty() {
        return this.top == -1;
    }

}




const main = () =>{
const queue = new Queue();
    queue.push(2);
    queue.push(3);
    queue.push(4);
    queue.push(5);
    queue.push(6);

    queue.pop();
    queue.pop();
    queue.pop();
    queue.pop();
    queue.pop();


    queue.printStack();





}

main();
