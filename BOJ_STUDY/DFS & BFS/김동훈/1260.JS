const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);

const getGraph = (n,m) => {
    // 그래프 빈 배열로 초기화
    const pGraph = Array.from({ length: n + 1 }).map(() => []);    
    // 연결된 간선으로 그래프를 만듦
    for (let i = 0; i < m; i++) {
        let [from, to] = input[i].split(" ").map(Number);
        pGraph[from].push(to);
        pGraph[to].push(from);
    }

    // 그래프 오름차순 정렬
    pGraph.forEach((iter) => { iter.sort((a, b) => a - b) });

    return pGraph;
}

//DFS
const DFS = (pGraph,pVisit) => {
    


}

//BFS
const BFS = (pGraph, pVisit) => {

}


const graph = getGraph(n, m);
let visit = Array.from({ length: n + 1 }).fill(0);

console.log(graph)