const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = (require("fs").readFileSync(filePath).toString().trim().split("\n"));

const N = +input.shift();
const chk1 = 1;
const chk2 = 2;

const bfs = (start, graph, visited) => {

    visited[start] = chk1;
    const stack = [start];

    while (stack.length) {

        const node = stack.pop();
        const curSet = visited[node];
        let nextSet = null;

        if (curSet === chk1) {
            nextSet = chk2;
        } else {
            nextSet = chk1;
        }
            
        if (!graph[node]) {
            continue;
        }

        for (let i = 0; i < graph[node].length; i++) {
            const adjNode = graph[node][i];
            
            if (visited[adjNode] === curSet) {
                return false;
            }

            if (!visited[adjNode]) {
                visited[adjNode] = nextSet;
                stack.push(adjNode);
            }
        }
    }
    return true;
};

const ans = Array(N).fill('YES');

for (let i = 0; i < N; i++) {
    const [V, E] = input.shift().split(' ').map(Number);
    const edges = input.splice(0, E).map(v => v.split(' ').map(Number));
    // console.log(edges);

    // const graph = Array.from(Array(edges), () => [])
    // for (let i = 0; i < graph.length; i++) {
    //     if (input[i] !== undefined) {
    //         let [from, to] = input[i].split(" ").map(e => +e);
    //         graph[from] ? graph[from].push(to) : graph[from] = [to];
    //         graph[to] ? graph[to].push(from) : graph[to] = [from];
    //     }
    // }
    
    const graph = edges.reduce((acc, v) => {
        const from = v[0];
        const to = v[1];
        if (acc[from]) {
            acc[from].push(to);
        } else {
            acc[from] = [to];
        }
        if (acc[to]) {
            acc[to].push(from);
        } else {
            acc[to] = [from];
        }
        return acc;
    }, {});

    
    // console.log(graph);

    // console.log(graph);
    const visited = Array(V + 1).fill(0);
    for (let j = 1; j <= V; j++) {
        if (visited[j]) {
            continue;
        }
        if (!bfs(j, graph, visited)) {
            ans[i] = 'NO';
            break;
        }
    }
}

console.log(ans.join('\n'));