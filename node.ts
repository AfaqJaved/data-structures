export class Node {
    public data: number;
    public next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}


export class NodeDouble {
    public data: number;
    public next: NodeDouble | null;
    public prev : NodeDouble | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}