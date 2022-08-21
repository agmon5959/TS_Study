const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const PriorityQueue = require("../../김동훈개인공부폴더/PriorityQueue.js")

const city = +input[0];
const bus = +input[1];

// 그래프 만들어주기
let paths = [];
for (let i = 2; i < bus + 2; i++) {
    paths.push(input[i].split(" ").map((e) => +e));
}

const [startPoint, endPoint] = input[bus + 2].split(" ").map((e) => +e);

let adj = Array.from(Array(city + 1), () => Array());

paths.forEach(([start, end, cost]) => {
    adj[start].push([end, cost]);
});

// 1) 인접행렬을 만들어준다.
// 2) 시작지점을 heap에 넣어주고, heap의 size가 0이 될 때까지 while문
// 3) heap에서 시작지점, 비용을 꺼내고 현재 costs배열과 비용을 비교해서 다르면 넘어간다.(방문한 지점)
// 4) 인접행렬에서 시작지점에 대한 버스경로들을 구하고, costs배열과 비교해서 작으면 갱신하고 heap에 넣어준다.
// 5) 반복
let heap = new PriorityQueue();
let costs = Array(city + 1).fill(Infinity);
costs[startPoint] = 0;
heap.enqueue([startPoint, 0]);
while (heap.size()) {
    const [s, c] = heap.dequeue();
    console.log(s, c);
    // 방문했다면 건너뛰기
    if (costs[s] !== c) continue;
    for (let i = 0; i < adj[s].length; i++) {
        const [end, cost] = adj[s][i];
        if (costs[end] > cost + c) {
            costs[end] = cost + c;
            heap.enqueue([end, costs[end]]);
        }
    }
}
console.log(costs[endPoint]);