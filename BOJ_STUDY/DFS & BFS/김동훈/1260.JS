const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);

const getGraph = (n, m) => {
    // 그래프 빈 배열로 초기화
    const graph = Array.from({ length: n + 1 }).map(() => []);
    // 연결된 간선으로 그래프를 만듦
    for (let i = 0; i < m; i++) {
        let [from, to] = input[i].split(" ").map(Number);
        graph[from].push(to);
        graph[to].push(from);
    }
    return graph;
}

//DFS
const DFS = (next) => {
    // 탈출조건
    if (visited[next] === 1) return;
    // check
    visited[next] = 1;
    ans_dfs.push(next);
    for (let i = 0; i < graph[next].length; i++) {
        if (visited[graph[next][i]] === 0) {
            DFS(graph[next][i]);
        }
    }
}

//BFS
const BFS = (next) => {
    let queue = [next]; // 초기값 넣어주기
    while (queue.length) {
        // 탙출조건
        let nextNode = queue.shift();
        if (visited[nextNode] === 1) {
            continue;
        }

        visited[nextNode] = 1; // check
        ans_bfs.push(nextNode); // push

        for (let i = 0; i < graph[nextNode].length; i++) {
            if (visited[graph[nextNode][i]] === 0) {
                queue.push(graph[nextNode][i]);
            }
        }
    }
}


// 그래프 생성
const graph = getGraph(n, m);

// 정점 번호가 작은 것을 먼저 방문해야해서 그래프내 요소 오름차순 정렬
graph.forEach((iter) => { iter.sort((a, b) => a - b) });

// 방문한 노드를 체크할 체크 배열
let visited = Array.from({ length: n + 1 }).fill(0);

const ans_dfs = [];
const ans_bfs = [];

DFS(v);
console.log(ans_dfs.join(' ')) // 배열을 문자열로 리턴

visited = visited.fill(0); // visited 배열의 값들을 0으로 재할당
BFS(v);
console.log(ans_bfs.join(' ')) // 배열을 문자열로 리턴