import {Node} from "./node";

export class Stack {
    public top: number = -1;
    public head: Node | null = null;


    push(data: number): void {
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            let n = new Node(data);
            n.next = this.head;
            this.head = n;
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
    const stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);

    while(!stack.isEmpty()) {
        console.log("Top : " + stack.getTop());
        console.log(stack.pop());
    }



}

main();
