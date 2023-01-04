class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // 연결리스트의 추가
    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
    }
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    peek() {
        return this.head.value;
    }
}


function solution(list, location) {
    const queue = new Queue();
    for (let i = 0; i < list.length; i++) {
        queue.enqueue([list[i], i]);
    }
    list.sort((a, b) => b - a);

    let count = 0;
    while (true) {
        const curValue = queue.peek();
        if (curValue[0] < list[count]) {
            queue.enqueue(queue.dequeue());
        } else {
            const value = queue.dequeue();
            count++;
            if (location === value[1]) {
                return count;
            }
        }
    }
}