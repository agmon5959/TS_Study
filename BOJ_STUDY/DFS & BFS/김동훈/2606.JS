const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);
const [m] = input.shift().split(" ").map(Number);

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


// 그래프 생성
const graph = getGraph(n, m);

// 방문한 노드를 체크할 체크 배열
let visited = Array.from({ length: n + 1 }).fill(0);
const ans_dfs = [];
DFS(1);
console.log(ans_dfs.length-1);

