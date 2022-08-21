// 우선순위 큐의 구현
class PriorityQueue {
    constructor() {
        // 각 노드별 idx 접근을 쉽게하기 위해 쓰지않는 값인 0을 넣어준다.
        this.heap = [0];
    }

    getLeftChildIdx = (parentIndex) => { parentIndex * 2 + 1 };
    getRightChildIdx = (parentIndex) => { parentIndex * 2 + 2 };
    getParentChildIdx = (childIndex) => { Math.floor(childIndex - 1) / 2 };
    peek = () => { this.heap[0] };
    front = () => { return (this.heap[1]) };
    size = () => { return (this.heap.length - 1) };
    clear = () => { this.heap = [0] };

    insert = (value) => {
        this.heap.push(value);
        this.heapfify();
    }

    remove = () => {
        if (this.size() === 0) return false;
        const temp = this.heap.pop();
        const returnValue = this.heap[1];
        if (this.size() === 0) return temp;
        this.heap[1] = temp;
        this.heapfify2();
        return returnValue;
    }




}

export default PriorityQueue;