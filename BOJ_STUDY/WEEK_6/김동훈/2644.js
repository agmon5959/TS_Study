const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

const people = +input[0];
const [target1, target2] = input[1].split(" ").map(e => +e);
const node = +input[2];
input = input.splice(3);
const graph = Array.from({ length: people+1 }).map(_ => []);

for (let i = 0; i < input.length; i++) {
    const [from, to] = input[i].split(" ").map(e => +e);
    graph[from].push(to);
    graph[to].push(from);
}

console.log(graph)
const bfs = (graph, startNode, targetNode) => {
    const visited = [];
    let needVisit = [[startNode, 0]];
    while (needVisit.length !== 0) {
        const [node, cnt] = needVisit.shift();
        // console.log('node,cnt', node, cnt);
        // 탈출조건
        if (node === targetNode) return cnt;

        // 이미 방문한 노드라면 탐색하지 않는다.
        if (!visited.includes(node)) {
            // 방문 배열 체크
            visited.push(node);
            // node + cnt 2차원 배열 만들기
            let nodes = graph[node].map((e) => [e, cnt + 1]);
            // needVisit배열 원소랑 nodes 원소 합쳐서 needVisit에 담기
            needVisit = needVisit.concat(nodes);
            // console.log('needVisit', needVisit)
        }
    }

    return -1;
};
const ans = bfs(graph, target1, target2); // graph, 7 , 3
console.log(ans);


