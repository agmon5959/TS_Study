// BFS
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));
let [city, road, target, dest] = input[0].split(" ").map(e => +e);

const graph = Array.from(Array(city + 1), () => [])
const visited = Array.from({ length: city + 1 }).fill(0);
let ans = null;

for (let i = 1; i <= city; i++) {
    if (input[i] !== undefined) {
        let [from, to] = input[i].split(" ").map(e => +e);
        graph[from] ? graph[from].push(to) : graph[from] = [to];
    }
}


const BFS = (start, map) => {
    // 도시정보, 거리
    const result = [];
    let queue = [[start, 0]];
    visited[start] = 1;
    while (queue.length) {
        const [city, dist] = queue.shift();
        if (dist === target) {
            result.push(city);
        } else if (dist < target) {
            map[city].forEach((iter) => {
                if (visited[iter] === 0) {
                    // 방문하지 않은 곳
                    visited[iter] = 1;
                    queue.push([iter, dist + 1]);
                }
            })
        }
    }
    return result;
}

ans = BFS(dest, graph);
ans.sort((a, b) => a - b);

if (ans.length !== 0) {
    console.log(ans.join('\n'));    
} else {
    console.log("-1");
}

