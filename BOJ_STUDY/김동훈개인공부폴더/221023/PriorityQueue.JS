// 우선순위 큐의 구현
class PriorityQueue {
    constructor() {
        this.heap = [0];
    }

    // 노드 삽입
    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    // 노드 삭제
    // 삭제할 노드를 루트 노드로 이동시킨 뒤 하향식 Heapify를 동작시킨다.
    dequeue() {
        // 현재 노드의 크기가 0이라면 삭제할 수 없음.
        if (this.size() === 0) {
            return false;
        }
        
        const temp = this.heap.pop();
        const returnValue = this.heap[1];
        // pop 했을 때 힙이 비어져있다면 그대로 temp를 리턴해준다.
        if (this.size() === 0) {
            return temp;
        }
        // 삭제할 노드가 담겨있는 temp를 루트 노드인 heap[1]에 담아준다.
        this.heap[1] = temp;
        // 하향식 Heapify 동작
        this.heapifyDown();
        // 삭제된 루트 노드를 리턴한다.
        return returnValue;
    }

    size() {
        return this.heap.length - 1;
    }

    heapifyUp() {
        const heap = this.heap;
        let child = heap.length - 1;    // 최근 삽입된 노드의 인덱스
        let parent = Math.floor(child / 2); // 삽입된 노드의 부모 노드 인덱스
        while (parent !== 0) {
            // 부모 노드의 값보다 자녀 노드의 값이 클 경우 아래 조건문 실행 X
            if (heap[parent][1] <= heap[child][1]) {
                break;
            } else {
                // 부모 노드의 값보다 자녀 노드의 값이 작은 경우 위치를 바꿔줘야한다.
                // 모두 정렬될 때 까지 반복한다.
                const temp = heap[parent];
                heap[parent] = heap[child];
                heap[child] = temp;
                child = parent;
                parent = Math.floor(child / 2);
            }
        }
    }

    heapifyDown() {
        const heap = this.heap;
        let parent = 1;
        let left = parent * 2;
        let right = parent * 2 + 1;

        // 왼쪽 자식 노드 또는 오른쪽 자식 노드가 존재하면 동작한다.
        while (heap[left] !== undefined || heap[right] !== undefined) {
            // 완전 이진트리이기 때문에 오른쪽을 먼저 검사한다.
            // 오른쪽 노드가 존재하지 않는다면 아래 조건문을 실행한다.
            if (heap[right] === undefined) {
                // Min Heap의 경우 항상 자식은 부모보다 값이 커야한다.
                // 이러한 성질이 성립된다면 노드 위치를 바꿀 필요가 없음.
                if (heap[left][1] > heap[parent][1]) break;
                // 오른쪽 노드가 없는 경우엔 리턴값을 사용하지 않아도 되므로 함수 실행만 시킴.
                this.change(left, parent, heap);
                break;
            }
            // 왼쪽 값보다 오른쪽 값이 큰 경우 아래 조건문을 실행한다.
            // 
            if (heap[left][1] <= heap[right][1]) {
                // 왼쪽 자녀의 값이 부모의 값보다 큰 경우 동작하지않는다.
                if (heap[left][1] > heap[parent][1]) break;
                [parent, left, right] = this.change(left, parent, heap);
            } else {
                // 오른쪽 자녀의 값이 부모의 값보다 큰 경우 동작하지 않는다.
                if (heap[right][1] > heap[parent]) break;
                [parent, left, right] = this.change(right, parent, heap);
            }
        }
    }

    change(child, parent, heap) {
        const temp = heap[parent];
        heap[parent] = heap[child];
        heap[child] = temp;
        parent = child;
        const left = parent * 2;
        const right = parent * 2 + 1;
        return [parent, left, right];
    }
}

module.exports = PriorityQueue;